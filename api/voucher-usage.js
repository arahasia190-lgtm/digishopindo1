// ================================================================
// API: /api/voucher-usage
// Fungsi: menyimpan & mengecek berapa kali sebuah kode voucher sudah
// dipakai, secara GLOBAL (semua pembeli, semua device) — bukan cuma
// per-browser seperti localStorage.
//
// Database yang dipakai: Upstash Redis (gratis), lewat REST API.
// Cara setup (sekali saja, di dashboard Vercel):
//   1. Buka project kamu di vercel.com -> tab "Storage"
//   2. Klik "Create Database" -> pilih "Upstash" -> "Redis" -> pilih plan Free
//   3. Setelah dibuat, klik "Connect Project" ke project ini
//   4. Vercel otomatis menambahkan 2 environment variable ini ke project:
//        UPSTASH_REDIS_REST_URL
//        UPSTASH_REDIS_REST_TOKEN
//      (Kamu tidak perlu isi manual, itu otomatis dari integrasinya)
//   5. Redeploy project. Selesai — endpoint ini akan otomatis jalan.
//
// Body request (JSON), method POST:
//   { "action": "check",  "code": "DISKON10", "maxUses": 5 }
//     -> mengecek apakah kode masih ada kuota, TANPA menambah hitungan
//   { "action": "redeem", "code": "DISKON10", "maxUses": 5 }
//     -> menambah hitungan pemakaian sebanyak 1 (dipanggil saat pesanan
//        benar-benar dibuat), dan menolak kalau kuota sudah habis
// ================================================================

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { action, code, maxUses } = req.body || {};
    if (!code || typeof code !== 'string') {
        return res.status(400).json({ error: 'Kode voucher wajib diisi' });
    }

    const baseUrl = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    // Kalau database belum di-connect, jangan bikin website error —
    // beri tahu frontend supaya dia fallback ke pengecekan lokal.
    if (!baseUrl || !token) {
        return res.status(200).json({ configured: false });
    }

    const key = `voucher_usage:${code.trim().toUpperCase()}`;
    const headers = { Authorization: `Bearer ${token}` };

    try {
        if (action === 'check') {
            const r = await fetch(`${baseUrl}/get/${encodeURIComponent(key)}`, { headers });
            const data = await r.json();
            const count = parseInt(data.result || '0', 10) || 0;
            const available = !maxUses || count < maxUses;
            return res.status(200).json({ configured: true, count, available });
        }

        if (action === 'redeem') {
            // Tambah dulu, baru cek. Kalau ternyata sudah lewat kuota, kembalikan lagi (rollback).
            const incrRes = await fetch(`${baseUrl}/incr/${encodeURIComponent(key)}`, { headers });
            const incrData = await incrRes.json();
            const newCount = incrData.result;

            if (maxUses && newCount > maxUses) {
                await fetch(`${baseUrl}/decr/${encodeURIComponent(key)}`, { headers });
                return res.status(200).json({ configured: true, success: false, count: maxUses });
            }

            return res.status(200).json({ configured: true, success: true, count: newCount });
        }

        return res.status(400).json({ error: 'Action tidak dikenali. Gunakan "check" atau "redeem".' });
    } catch (err) {
        // Kalau database sedang bermasalah, jangan blokir pembeli — beri tahu frontend untuk fallback.
        return res.status(200).json({ configured: false, error: 'Gagal menghubungi database' });
    }
}
