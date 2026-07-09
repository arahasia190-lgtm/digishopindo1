/* ============================================================
   DATA-PRODUK.JS — DigishopID
   ============================================================
   Ini file KHUSUS DATA. Kalau mau nambah/edit/hapus produk,
   ubah FAQ, atau isi testimoni, cukup edit file ini aja —
   gak perlu sentuh index4.html sama sekali.

   PENTING: file ini harus disimpan SATU FOLDER yang sama
   dengan index4.html, dan namanya jangan diubah (kecuali kamu
   juga ubah rujukannya di index4.html).

   CARA NAMBAH PRODUK BARU:
   Copy salah satu blok "{ ... }" di dalam const produk,
   tempel di bagian bawah/atas, terus ganti isinya.
   Field penting:
     - id        : kode unik, gak boleh sama antar produk (huruf kecil, tanpa spasi)
     - nama      : nama produk yang ditampilkan
     - kategori  : salah satu dari: MOVIE, DESAIN, MUSIK, APPS, SMART
     - subtitle  : teks kecil di bawah nama produk
     - icon      : link gambar/logo produk
     - badge     : teks badge kecil di pojok kartu (kosongkan '' kalau gak perlu)
     - badgeClass: 'hot' (merah) atau kosongkan '' kalau badge kosong
     - terjual   : (OPSIONAL) angka penjualan asli, misal: terjual: 150
                   Hapus baris ini kalau gak mau nampilin badge "Terjual"
     - varian    : daftar paket harga produk itu (nama, harga, deskripsi)

   CARA NAMBAH/EDIT FAQ:
   Edit array faqData di bawah, formatnya: { q: 'pertanyaan', a: 'jawaban' }

   CARA NAMBAH TESTIMONI ASLI:
   Edit array testimoniData, formatnya:
     { bintang: 5, isi: 'kutipan testimoni', nama: 'Nama - Kota' }
   Kalau dibiarkan kosong [], yang tampil cuma tombol ke channel Telegram.
   ============================================================ */

    const faqData = [
        { q: 'Berapa lama proses setelah order?', a: 'Untuk produk instant, akun langsung dikirim otomatis/manual dalam hitungan menit. Untuk produk custom/sharing, mohon standby maksimal 5-15 menit setelah pembayaran dikonfirmasi.' },
        { q: 'Bagaimana kalau akun error atau kena limit?', a: 'Semua produk sudah termasuk garansi sesuai keterangan di setiap varian (garansi kendala backfree/masa aktif). Tinggal hubungi admin via WhatsApp dengan bukti order, nanti langsung dibantu.' },
        { q: 'Metode pembayaran apa saja yang diterima?', a: 'Saat ini menerima pembayaran via QRIS (DANA, OVO, GoPay, ShopeePay, m-banking, dll). Klik tombol "QRIS / Bayar" di pojok kanan atas untuk detailnya.' },
        { q: 'Apakah akun ini aman dan legal?', a: 'Akun yang dijual berupa akun sharing/private resmi yang diambil dari partner resmi seller. Selama digunakan sesuai ketentuan (tidak ganti password/email), akun akan tetap aman.' },
        { q: 'Bisa refund kalau berubah pikiran?', a: 'Karena sifatnya produk digital yang langsung terpakai, refund hanya berlaku untuk kendala di pihak kami (misal akun tidak bisa diakses), bukan karena perubahan keputusan pembeli.' }
    ];

    // TESTIMONI ASLI - tambahkan testimoni asli pembeli kamu di sini ya, contoh formatnya:
    // { bintang: 5, isi: 'Prosesnya cepat banget, recommended!', nama: 'Budi - Jakarta' }
    // Kalau array ini kosong, yang tampil cuma tombol menuju channel Telegram testimoni kamu.
    const testimoniData = [
        // ISI SENDIRI DENGAN TESTIMONI ASLI DARI PEMBELI KAMU
    ];

    const produk = [
        {
            id: 'am', nama: 'Alight Motion', kategori: 'DESAIN', subtitle: 'Editing App',
            icon: 'https://play-lh.googleusercontent.com/LRjRXaVEtoeHyiFcnMLCHs1ZJV8Q4q70PggflRDAfgOkulzFTbJg65y0drg6Yapo22Xoos_XCbyh7EgycBhQ',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'AM Sharing 1 Tahun', harga: '3.000', desk: 'Maksimal 5 device. Garansi 3 bulan. Khusus kendala backfree.' },
                { nama: 'AM Private 1 Tahun', harga: '8.000', desk: 'Bisa ganti email. Akun private bebas share. Garansi 3 bulan.' }
            ]
        },
        {
            id: 'capcut', nama: 'CapCut Pro', kategori: 'DESAIN', subtitle: 'Editing App',
            icon: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaQDG.nPeYqpMXSUQbV6ZbDqKB2cfxC8XGBuMMG2wnfQDreT0rlqZucFHBfMnKmf9jEjSzK_3h4euGl2PWZ9ggU-&format=source',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: '7 Hari Private', harga: '30.000', desk: 'Akun private. Garansi backfree 7 hari.' },
                { nama: '7 Hari Sharing', harga: '23.500', desk: 'Maksimal 1 device. Garansi backfree 7 hari.' },
                { nama: '1 Bulan Private', harga: '75.000', desk: 'Akun private. Login 1 device. Garansi backfree 25 hari.' },
                { nama: '1 Bulan Sharing', harga: '60.000', desk: 'Maksimal 1 device. Garansi backfree 25 hari.' }
            ]
        },
        {
            id: 'netflix', nama: 'Netflix 4K', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://yt3.googleusercontent.com/6Tx4cExHCNrdMIRxfNcPBh-90reH5ugoKyzi0cJZUd6jbFKvHJpPYWMPjwCWxuuOCmW05avdNUI=s900-c-k-c0x00ffffff-no-rj',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: '7 Hari (1P2U)', harga: '22.000', desk: '1 profil isi 2 user. Login 1 device. Garansi 7 hari.' },
                { nama: '1 Bulan (1P2U)', harga: '35.000', desk: '1 profil isi 2 user. Login 1 device. Garansi 20 hari.' },
                { nama: '1 Bulan (1P1U)', harga: '48.000', desk: '1 profil private milik sendiri. Login 1 device. Full garansi.' },
                { nama: '1 Bulan (SEMI PRIVATE)', harga: '75.000', desk: '1 profil private milik sendiri. Bisa login 2 device tetapi tidak boleh nonton bersamaan. Full garansi.' },
                { nama: 'Netflix Crack', harga: '15.000', desk: 'Garansi 24 jam setelah Aktivasi' }
            ]
        },
        {
            id: 'spotify', nama: 'Spotify', kategori: 'MUSIK', subtitle: 'Audio Premium',
            icon: 'https://yt3.googleusercontent.com/UMGZZMPQkM3kGtyW4jNE1GtpSrydfNJdbG1UyWTp5zeqUYc6-rton70Imm7B11RulRRuK521NQ=s900-c-k-c0x00ffffff-no-rj',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Indplan 1 Bulan', harga: '32.000', desk: 'Gunakan 1 perangkat saja. Garansi 20 hari sejak pembelian.' },
                { nama: 'Famplan 1 Bulan', harga: '25.000', desk: 'Garansi 20 hari sejak pembelian.' }
            ]
        },
        {
            id: 'bstation', nama: 'Bstation', kategori: 'MOVIE', subtitle: 'Anime Stream',
            icon: 'https://screenscore.digitalmama.id/wp-content/uploads/2025/03/unnamed-9.webp',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Sharing 1 Bulan', harga: '15.000', desk: 'Maksimal 1 device. Garansi 25 hari.' },
                { nama: 'Private 14 Hari', harga: '17.500', desk: 'Pakai akun sendiri. Garansi Full.' },
                { nama: 'Private 1 Bulan', harga: '31.000', desk: 'Akun private. Garansi Full.' }
            ]
        },
        {
            id: 'canva', nama: 'Canva', kategori: 'DESAIN', subtitle: 'Template Premium',
            icon: 'https://pbs.twimg.com/profile_images/1542647040756568064/YbE5Hs-5_400x400.jpg',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Canva Invite 1 Bulan', harga: '2.500', desk: 'Akun Private. via invite. Garansi Full' },
                { nama: 'Canva Invite 1 Tahun', harga: '25.000', desk: 'Akun Private. via invite. sistem invite tiap bulan. Garansi Full' },
                { nama: 'Canva Head (Owner) 1 Bulan', harga: '13.000', desk: 'Cocok untuk kerja tim.bisa invite 100 anggota. Garansi 25 hari. Khusus kendala backfree' }
            ]
        },
        {
            id: 'disney', nama: 'Disney+', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://images.seeklogo.com/logo-png/4/1/disney-logo-png_seeklogo-41972.png',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Disney Sharing 1 Bulan', harga: '30.000', desk: 'Maksimal 1 device. Garansi 25 hari.' },
                { nama: 'Disney Sharing 7 Hari', harga: '20.000', desk: 'Maksimal 1 device. Garansi 7 hari.' }
            ]
        },
        {
            id: 'youtube', nama: 'YouTube', kategori: 'MOVIE', subtitle: 'Video Premium',
            icon: 'https://yt3.googleusercontent.com/1NFw5olkb4TAkk0ZrGc9_VVDjxjJemetRY3FZQ7DKmPosb0lWwx2mgPY2YhGKkgFzHZGn44zZQ=s900-c-k-c0x00ffffff-no-rj',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Youtube 1 Bulan', harga: '8.000', desk: 'Akun Private. masa aktif 25-30 hari. pastikan email belum pernah join family. Garansi 25 hari' },
                { nama: 'Youtube Famhead 1 Bulan', harga: '17.000', desk: 'Akun dari pembeli. bisa invite 5 member. Garansi 7 hari setelah aktivasi' }
            ]
        },
        {
            id: 'gemini', nama: 'Gemini AI', kategori: 'SMART', subtitle: 'AI Tools',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqGrqBPffjc--HscZ5gQAsD7XaVdVbrxL5IvRJwgdqRUqRvW9YxcNtCc&s=10',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Gemini Sharing 1 Bulan', harga: '10.000', desk: 'Maksimal 1 device. dilarang otak atik akun. Garansi 1 bulan.' },
                { nama: 'Gemini Private 1 Bulan', harga: '18.000', desk: 'Akun dari pembeli. bonus google drive 2tb. Garansi Full.' },
                { nama: 'Gemini Private 2 Bulan', harga: '28.000', desk: 'Akun dari pembeli. bonus google drive 2tb. Garansi Full.' },
                { nama: 'Gemini Private 3 Bulan', harga: '35.000', desk: 'Akun dari pembeli. bonus google drive 2tb. Garansi 2 bulan.' },
                { nama: 'Gemini Private 4 Bulan', harga: '45.000', desk: 'Akun dari pembeli. bonus google drive 2tb. Garansi Full.' }
            ]
        },
        {
            id: 'prime', nama: 'Prime Video', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://store-images.s-microsoft.com/image/apps.29354.14618985536919905.45e2438b-0358-430f-a226-e856ef5f56cd.6045f10d-194a-41bc-aa21-f7fce8cabd7c',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Prime Sharing 1 Bulan', harga: '8.000', desk: 'Akun dari admin. mendapatkan 1profil. maksimal digunakan 1device. Garansi 15 hari' },
                { nama: 'Prime Private 1 Bulan', harga: '18.000', desk: 'Akun private bebas share. maksimal digunakan 3/4 device. Garansi Full.' }
            ]
        },
        {
            id: 'viu', nama: 'Viu', kategori: 'MOVIE', subtitle: 'Drama & Film',
            icon: 'https://yt3.googleusercontent.com/ytc/AIdro_mGgWUT-KZejIMSOL4h8Mu5_y3g6rIw7qcg8b3NwsBpHA=s900-c-k-c0x00ffffff-no-rj',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'VIU Private 1 Tahun', harga: '25.000', desk: 'Akun Private. Garansi 3 bulan. Khusus kendala backfree.' }
            ]
        },
        {
            id: 'vidio', nama: 'Vidio', kategori: 'MOVIE', subtitle: 'Sports & TV',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGq-kVjmk0MbiDqy8JXTY5ccE_gP3uSC3h0y1YX1OdIQ&s',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Vidio Sharing 1 bulan (Mobile)', harga: '30.000', desk: 'Khusus HP/Mobile, paket Platinum, sharing 1 device. Dilarang ubah pasword.' },
                { nama: 'Vidio Private 1 bulan (Mobile)', harga: '60.000', desk: 'Khusus HP/Mobile, paket Platinum, private 1 bulan. Bebas ubah password.' },
                { nama: 'Vidio Sharing 1 bulan (tv only)', harga: '18.000', desk: 'Khusus Smart TV, paket Platinum, sharing 1 device. Masa aktif 25-30 hari.' },
                { nama: 'Vidio Private 1 bulan (tv only)', harga: '30.000', desk: 'Khusus Smart TV, paket Platinum, private 1 bulan. Garansi 20 hari.' },
                { nama: 'Vidio 2 bulan (tv only)', harga: '45.000', desk: 'Khusus Smart TV, durasi 60 hari. Garansi 30 hari. Ada iklan di awal.' }
            ]
        },
        {
            id: 'zoom', nama: 'Zoom', kategori: 'APPS', subtitle: 'Layanan Digital',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjOHJJXN6oRjISn0Z9KRZ0wLNwPLxWDb9OFKndmVW-g&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Zoom Private 14d (No Garansi)', harga: '8.000', desk: 'Zoom Pro 14 hari, private 1 device. Aktivasi via web/apps. Tanpa garansi.' },
                { nama: 'Zoom Private 14d (Full Garansi)', harga: '19.000', desk: 'Zoom Pro 14 hari, private 1 device. Aktivasi via web/apps. Garansi full 14 hari.' }
            ]
        },
        {
            id: 'hbomax', nama: 'HBO Max', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacegfITyK7jTZJo9HBZVAi4OjalLUkgI2XZfLHsPQJg&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Max Sharing 1 bulan', harga: '23.000', desk: 'Paket Ultimate 28-30 hari, sharing 1 device. Aktivasi via web/apps. Garansi 20 hari.' }
            ]
        },
        {
            id: 'iqiyi', nama: 'iQIYI', kategori: 'MOVIE', subtitle: 'Asian Content',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iLLIrxlsjgfvCASqFcj_rmy6JUoE6Fd-zRKYzYUK6A&s',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Premium 18 Hari', harga: '10.000', desk: 'Paket Premium durasi 18 hari. Akun sharing, login maksimal 1 device.' },
                { nama: 'Premium Sharing 1 Bulan', harga: '18.000', desk: 'Paket Premium durasi 1 bulan. Akun sharing, login maksimal 1 device.' },
                { nama: 'Standard Sharing 1 Bulan', harga: '12.000', desk: 'Paket Standard durasi 1 bulan. Akun sharing, login maksimal 1 device.' },
                { nama: 'Premium Private 1 Bulan', harga: '50.000', desk: 'Paket Premium durasi 1 bulan. Akun private/full.'},
                { nama: 'Standard Private 1 Bulan', harga: '40.000', desk: 'Paket Standard durasi 1 bulan. Akun private/full.' }
            ]
        },
        {
            id: 'wink', nama: 'Wink', kategori: 'DESAIN', subtitle: 'Editing App',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xgbNcT3c_ZfiaA5lrgD4Zv26hr_UGn336retHj0YUw&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: '7D Android Private', harga: '13.000', desk: 'Khusus Android, durasi 7 hari. Akun private full, garansi kendala backfree.' },
                { nama: '7D iOS Private', harga: '15.000', desk: 'Khusus iOS/iPhone, durasi 7 hari. Akun private full, garansi kendala backfree.' }
            ]
        },
        {
            id: 'loklok', nama: 'Loklok', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkxSQ9t438PB0MyM_mPJyBWmK2_jytMyiycHLDghPYQ&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Sharing 1 Bulan Plan Basic', harga: '25.000', desk: 'Paket Basic durasi 1 bulan. Akun sharing, login maksimal 1 device.' },
                { nama: 'Sharing 1 Bulan Plan Standar', harga: '35.000', desk: 'Paket Standard durasi 1 bulan. Akun sharing, login maksimal 1 device.' }
            ]
        },
        {
            id: 'getcontact', nama: 'Getcontact', kategori: 'APPS', subtitle: 'Layanan Digital',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXnESqAkv-UwBEhocQ313CzbOcC_UbU8ClJm6rLhyTg&s=10',
            badge: 'HOT', badgeClass: 'hot',
            varian: [
                { nama: 'Cek Tag Nomor', harga: '1.000', desk: 'Proses via admin. Kirim nomor tujuan setelah melakukan pembayaran, lalu tunggu proses.' },
                { nama: 'Premium 1 Bulan', harga: '15.000', desk: 'Proses manual (mohon standby maks 5 menit). Garansi masa aktif 20 hari.' }
            ]
        },
        {
            id: 'meitu', nama: 'Meitu', kategori: 'DESAIN', subtitle: 'Editing App',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztjC_a0TqP4NQoBgpJNVQyxtx5Guz6F7Vkr_tICJM6Q&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: '7D Android Private', harga: '13.000', desk: 'Khusus Android, durasi 7 hari. Akun private full, garansi kendala backfree.' },
                { nama: '7D iOS Private', harga: '15.000', desk: 'Khusus iOS/iPhone, durasi 7 hari. Akun private full, garansi kendala backfree.' }
            ]
        },
        {
            id: 'wetv', nama: 'WeTV', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZVZ9YVHV2fEoHsmuzeLuDeMIudX1trxDBOLGHPEGeA&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Sharing 3U', harga: '18.000', desk: 'Akun sharing 3 User dari seller. Durasi 1 bulan, garansi kendala backfree.' },
                { nama: 'Sharing 6U', harga: '9.000', desk: 'Akun sharing 6 User dari seller. Durasi 1 bulan, garansi kendala backfree.' },
                { nama: 'Private 1B', harga: '49.000', desk: 'Akun private 1 bulan dari seller. Bebas pakai, garansi kendala backfree.' }
            ]
        },
        {
            id: 'crunchyroll', nama: 'Crunchyroll', kategori: 'MOVIE', subtitle: 'Anime Stream',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDynR-uCBAQcT6ipMhQEIwdatVeCDiqSNmfuujoKHBXg&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Private 1 Bulan', harga: '20.500', desk: 'Akun private 1 bulan dari seller. Bebas pakai, garansi kendala backfree.' },
                { nama: 'Sharing 1 Bulan', harga: '8.000', desk: 'Akun sharing 1 bulan. Login maksimal 1 device, garansi kendala backfree.' }
            ]
        },
        {
            id: 'vision', nama: 'Vision+', kategori: 'MOVIE', subtitle: 'Streaming',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJtIBUwuyiA3k6oODFz6hxKaeMK67z3GMPV0ZQd8Ucw&s=10',
            badge: '', badgeClass: '',
            varian: [
                { nama: 'Private 1 Bulan', harga: '10.000', desk: 'Akun private 1 bulan. Hanya untuk 1 user (private), garansi kendala backfree.' }
            ]
        }
    ];