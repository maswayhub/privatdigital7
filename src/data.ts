import { Lesson, Ebook, StockVideo, HookTemplate } from "./types";

export const LESSONS_DATA: Lesson[] = [
  {
    id: 1,
    day: 1,
    title: "Pola Jago Jualan Produk Digital",
    duration: "18:45",
    description: "Memahami rantai bisnis digital dari penentuan ide, validasi pasar, hingga model transaksi otomatis tanpa stok barang fisik.",
    summary: "Hari pertama ini berfokus pada pergeseran pola pikir (mindset) dari berjualan produk fisik (yang butuh stok, modal besar, dan ongkir) ke produk digital. Anda akan belajar memahami mengapa margin keuntungan produk digital bisa mencapai 100% dan bagaimana model bisnis ini bisa dijalankan murni dari rumah secara otomatis.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-smartphone-with-digital-screen-40292-large.mp4",
    tasks: [
      "Tentukan 3 bidang/niche keahlian atau hobi Anda yang paling diminati orang lain.",
      "Identifikasi 3 masalah terbesar calon audiens Anda yang bisa diselesaikan lewat ebook atau template.",
      "Tuliskan impian pendapatan bulanan Anda dan hitung berapa penjualan produk digital yang dibutuhkan untuk mencapainya."
    ]
  },
  {
    id: 2,
    day: 2,
    title: "Menyiapkan Pondasi Bisnis murni dari HP",
    duration: "22:10",
    description: "Langkah taktis menyusun profil bio profesional, Link-in-Bio yang berkonversi tinggi, dan sistem penerimaan pembayaran otomatis.",
    summary: "Anda tidak butuh laptop mahal untuk mulai jualan. Di modul ini, kami menunjukkan cara menyusun Link-in-Bio yang rapi menggunakan tools gratis seperti Canva, Carrd, atau Linktree. Kita juga akan mengintegrasikan sistem pembayaran lokal (e-wallet & transfer bank) yang langsung terkirim otomatis setelah pembeli membayar.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-smartphone-at-home-40290-large.mp4",
    tasks: [
      "Buat akun Link-in-Bio gratis (Carrd/Lnk.bio/Linktree).",
      "Tulis deskripsi bio yang fokus pada 'solusi' bukan nama Anda.",
      "Buat dummy button pendaftaran produk digital Anda untuk tes link tujuan."
    ]
  },
  {
    id: 3,
    day: 3,
    title: "Cuan dari Rumah via TikTok & Instagram",
    duration: "25:30",
    description: "Cara mengoptimalkan akun media sosial Anda menjadi corong penjualan (funneling) otomatis tanpa perlu budget iklan berbayar.",
    summary: "Menghubungkan konten media sosial dengan landing page Anda. Anda akan belajar memetakan perjalanan calon konsumen dari melihat video konten Anda di fyp/explore, mengklik link di bio, membaca landing page, hingga akhirnya melakukan transfer pembayaran.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-smartphone-scrolling-social-media-42410-large.mp4",
    tasks: [
      "Ubah profil TikTok/Instagram Anda menjadi akun Kreator/Bisnis.",
      "Buat rancangan visual yang senada (color palette) untuk feed atau branding sederhana.",
      "Rancang 1 konten edukasi singkat yang mengarahkan penonton untuk 'Cek link di bio'."
    ]
  },
  {
    id: 4,
    day: 4,
    title: "Trik Ngonten 'Faceless' (Tanpa Tampil Wajah)",
    duration: "28:15",
    description: "Panduan lengkap memproduksi konten video estetik berkualitas tinggi hanya bermodalkan HP, stok video gratis, dan voiceover AI.",
    summary: "Bagi Anda yang introvert atau pemalu, modul ini adalah penyelamat! Kami membongkar metode pembuatan video viral tanpa merekam wajah sendiri. Anda akan belajar cara memilih video estetik B-roll yang tepat, menambahkan teks berjalan dengan tipografi yang pas, dan menyisipkan musik latar yang memicu retensi penonton tinggi.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-pouring-espresso-into-a-cup-43187-large.mp4",
    tasks: [
      "Pilih 3 video estetik dari bank video bonus Anda.",
      "Tulis naskah konten berdurasi 15-20 detik menggunakan teknik storytelling.",
      "Edit video tersebut menggunakan aplikasi CapCut HP, gunakan font yang bersih dan estetik, lalu tambahkan musik yang sedang trending."
    ]
  },
  {
    id: 5,
    day: 5,
    title: "Psikologi Audiens > Algoritma",
    duration: "21:40",
    description: "Membongkar pemicu emosional pembeli agar mereka rela membeli produk Anda seketika, mengabaikan perubahan algoritma media sosial.",
    summary: "Algoritma bisa berubah setiap minggu, tapi psikologi manusia tidak pernah berubah selama ribuan tahun. Di sini kita membedah konsep urgensi (scarcity), bukti sosial (social proof), dan penawaran tak tertolak (irresistible offer) yang membuat orang langsung klik 'Beli Sekarang' tanpa menunda.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-sitting-on-sofa-using-smartphone-and-smiling-41838-large.mp4",
    tasks: [
      "Tuliskan 1 kalimat penawaran yang menyertakan 'Batasan Waktu' atau 'Batasan Kuota'.",
      "Kumpulkan 1 testimoni atau studi kasus relevan (bisa gunakan testimoni dari bonus eBook Fat Loss) untuk materi konten.",
      "Buat garansi sederhana yang menurunkan rasa ragu calon pembeli."
    ]
  },
  {
    id: 6,
    day: 6,
    title: "Rahasia Konten Viral & Menyebar Luas",
    duration: "30:05",
    description: "Langkah praktis menyusun skrip video dengan Hook 3 detik yang mengikat perhatian penonton dan memicu viralitas organik.",
    summary: "Konten yang bagus tapi sepi penonton biasanya bermasalah di 3 detik pertama. Kami membedah formula Hook + Story + Call to Action (CTA). Anda akan mempelajari teknik retensi agar penonton tidak langsung swipe-up video Anda, sehingga algoritma mendeteksi konten Anda sebagai konten berkualitas tinggi dan menyebarkannya lebih luas.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-home-with-laptop-42171-large.mp4",
    tasks: [
      "Pilih 1 template Hook dari bank bonus Hook Viral.",
      "Tulis skrip konten lengkap dengan kombinasi Hook menarik, penjelasan solusi, dan instruksi klik link bio.",
      "Posting video tersebut di jam sibuk (prime time) audiens Anda."
    ]
  },
  {
    id: 7,
    day: 7,
    title: "Monetisasi Mandiri Tanpa Tergantung Keranjang Kuning",
    duration: "32:50",
    description: "Menjual produk digital lisensi jual ulang (PLR), menerima 100% keuntungan langsung masuk rekening sendiri, dan merintis pasif income.",
    summary: "Saatnya panen cuan! Hari terakhir ini membahas bagaimana Anda mengunggah 5 produk digital berlisensi jual ulang (PLR) yang kami berikan gratis sebagai bonus. Anda akan belajar cara mengemas ulang produk tersebut, membuat harganya bersaing, dan meluncurkannya ke publik hingga seluruh uang pembayaran langsung masuk 100% ke dompet digital atau rekening bank Anda sendiri tanpa potongan komisi platform.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-receiving-money-bills-42654-large.mp4",
    tasks: [
      "Unduh minimal 1 eBook bonus dari member area ini.",
      "Edit cover eBook tersebut sesuai selera Anda menggunakan Canva.",
      "Buat pengumuman peluncuran produk pertama Anda di media sosial dan sambungkan ke link pembayaran otomatis Anda."
    ]
  }
];

export const EBOOKS_DATA: Ebook[] = [
  {
    id: "fat-loss-blueprint",
    title: "Blueprint Fat Loss by Coach Fikri",
    author: "Coach Fikri (Certified Advanced Fitness Trainer)",
    badge: "Hot Seller",
    description: "Panduan taktis membakar lemak tubuh secara efisien, aman, dan tanpa tersiksa lapar berkepanjangan. Dilengkapi menu lokal yang mudah didapatkan.",
    chapters: [
      "Bab 1: Mitos vs Fakta Diet Kalori & Pembakaran Lemak",
      "Bab 2: Cara Menghitung Defisit Kalori Harian Tanpa Timbangan Rumit",
      "Bab 3: Meal Plan Diet Lokal: Sehat, Kenyang, dan Murah Meriah",
      "Bab 4: Panduan Latihan Fisik di Rumah Cukup 15 Menit Sehari",
      "Bab 5: Studi Kasus & Rahasia Menjaga Konsistensi Berat Badan"
    ],
    tips: [
      "Gunakan testimoni Before/After nyata yang ada di materi promosi bonus ini untuk menarik calon pembeli.",
      "Targetkan audiens ibu rumah tangga atau pekerja kantoran sibuk yang ingin diet praktis.",
      "Jual ebook ini di kisaran harga Rp39.000 - Rp79.000 sebagai produk pemula Anda."
    ],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "jago-canva",
    title: "Jago Canva Dari Nol Sampai Ahli",
    author: "Tim Jago Produk Digital",
    badge: "Must Have",
    description: "Panduan visual langkah demi langkah menguasai tools Canva di HP untuk mendesain produk digital bernilai jual tinggi secara instan.",
    chapters: [
      "Bab 1: Mengenal Workspace Canva Mobile & Fitur-Fitur Tersembunyi",
      "Bab 2: Teori Dasar Kombinasi Font & Psikologi Warna yang Menjual",
      "Bab 3: Tutorial Bikin Template Feed Instagram Estetik Kurang dari 10 Menit",
      "Bab 4: Cara Membuat Mockup Ebook & Presentasi 3D Gratis",
      "Bab 5: Langkah Ekspor Desain Kualitas Tinggi Anti Pecah"
    ],
    tips: [
      "Canva sangat diminati pelaku UMKM dan kreator pemula. Soroti kemudahan edit dari HP tanpa harus paham Photoshop.",
      "Tawarkan paket bundle desain template bersama dengan eBook ini.",
      "Cocok dijual dengan harga Rp49.000 - Rp99.000."
    ],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "panduan-fyp",
    title: "Panduan Konten Pasti FYP dan Viral",
    author: "Viral Growth Expert",
    badge: "Recommended",
    description: "Kumpulan formula, struktur, serta strategi psikologi konten video pendek (Reels/TikTok) agar menjangkau ratusan ribu views secara organik.",
    chapters: [
      "Bab 1: Anatomi Video Viral (Hook, Body, CTA)",
      "Bab 2: Aturan Golden 3 Seconds: Menaklukkan Ibu Jari Audiens",
      "Bab 3: Strategi Menggunakan Sound Trending & Efek Algoritma",
      "Bab 4: Cara Riset Topik Konten yang Pasti Ramai Peminat",
      "Bab 5: Studi Kasus Konten Faceless Berhasil Mendapatkan Omset Puluhan Juta"
    ],
    tips: [
      "Gunakan bonus video stock estetik sebagai materi pendukung.",
      "Edukasi calon pembeli bahwa views banyak tidak berguna tanpa teknik mengarahkan ke link bio.",
      "Bisa dijual seharga Rp59.000 - Rp129.000."
    ],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=80"
  }
];

export const STOCK_VIDEOS_DATA: StockVideo[] = [
  {
    id: "sv-1",
    title: "Sedang Menyeduh Kopi Hangat di Pagi Hari",
    category: "Minimalist",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-coffee-into-a-cup-42407-large.mp4",
    captionTemplate: "Pagi-pagi gak perlu buru-buru macet-macetan ke kantor. Cukup seduh kopi hangat dari rumah sambil nunggu transferan masuk dari bisnis produk digital otomatis. ☕✨ Mau tau caranya? Cek link di bio ya! #facelessmarketing #cuanrumah #digitalproduct #bisnisdigital",
    tags: ["cozy", "morning", "aesthetic"]
  },
  {
    id: "sv-2",
    title: "Mengetik di Laptop dengan Nuansa Meja Kayu Estetik",
    category: "Desk Setup",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-placed-on-a-wooden-desk-41566-large.mp4",
    captionTemplate: "Dulu pusing mikir modal buat mulai usaha, sekarang baru sadar modal HP & internet aja bisa menghasilkan jutaan per minggu lewat jualan e-book tanpa repot packing barang. 💻🚀 Mulai sekarang juga, panduannya ada di link bio! #cuanhp #plrproduct #jagoanbisa #facelesscreator",
    tags: ["typing", "focus", "workfromhome"]
  },
  {
    id: "sv-3",
    title: "Suasana Kafe dengan Detail Laptop dan Secangkir Matcha",
    category: "Cafe Vibe",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-someone-using-their-laptop-at-a-cafe-table-41619-large.mp4",
    captionTemplate: "Kerja dari kafe bukan sekadar gaya hidup, tapi karena sistem bisnis produk digital saya bekerja otomatis 24 jam non-stop bahkan saat saya sedang santai menikmati matcha ini. 🍵💼 Ingin bangun aset digitalmu juga? Klik link di bio! #nomadlife #pasifincome #bisnispemula",
    tags: ["matcha", "cafe", "freelancer"]
  },
  {
    id: "sv-4",
    title: "Membuka Buku Catatan & Menulis Ide Kreatif",
    category: "Minimalist",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-writing-notes-with-a-pen-on-a-notebook-42411-large.mp4",
    captionTemplate: "Menulis ide di kertas itu gratis, tapi mengubahnya menjadi e-book berlisensi PLR lalu menjualnya kembali bisa menghasilkan income jutaan berulang kali. ✍️💰 Pelajari strategi rahasianya di kelas kami. Link pendaftaran di bio! #idebisnis #kreatifcuan #produkdigital",
    tags: ["journal", "writing", "aesthetic"]
  },
  {
    id: "sv-5",
    title: "Pemandangan Daun Hijau dengan Sinar Matahari Hangat",
    category: "Nature & Travel",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sunlight-filtering-through-green-leaves-40294-large.mp4",
    captionTemplate: "Hidup tenang tanpa terikat jam kerja 9-to-5 adalah pilihan. Membangun bisnis digital dari rumah memberikan Anda kebebasan waktu seutuhnya. 🌿✨ Yuk mulai langkah pertamamu hari ini! Akses panduan lengkap di bio. #freedomoflife #digitalmarketing #cuanpemula",
    tags: ["aesthetic", "calm", "nature"]
  }
];

export const HOOK_TEMPLATES_DATA: HookTemplate[] = [
  {
    id: "hk-1",
    category: "Controversial",
    hookText: "Berhenti jualan produk fisik sebelum kamu tonton video ini!",
    captionStructure: "Mengapa? Karena margin untung produk fisik itu tipis, repot packing, dan pusing ngurus ongkir mahal. Dibanding itu, produk digital cuma dibuat SEKALI tapi bisa kamu jual berkali-kali tanpa biaya produksi tambahan! Mau tahu cara memulai bisnis produk digital modal HP aja? Yuk baca panduan lengkapnya di link bio saya! 🚀"
  },
  {
    id: "hk-2",
    category: "FOMO",
    hookText: "Umur 25 tahun tapi tabungan masih segitu-gitu aja? Awas tertinggal jauh!",
    captionStructure: "Dunia bergerak sangat cepat ke arah serba digital. Di saat orang lain sudah panen cuan dari rumah bermodal jual template Canva atau ebook buatan sendiri, kamu masih ragu buat mulai. Gak punya produk? Tenang, kami sediakan 5 produk siap jual lisensi 100% cuan buat kamu! Klik link bio untuk amankan slot promo hari ini sebelum harga naik! ⌛"
  },
  {
    id: "hk-3",
    category: "Curiosity",
    hookText: "Trik rahasia berpenghasilan 5 juta/bulan tanpa perlu nunjukkin wajah!",
    captionStructure: "Ya, kamu gak salah dengar. Tanpa tampil di kamera, tanpa jago ngomong, murni mengandalkan video estetik HD B-roll dan teks persuasif di layar. Ini disebut Faceless Marketing. Mau dapat bank video gratis berisi 900+ stok video estetik siap edit? Daftarkan dirimu ke e-course 7 Hari Jago Jualan Produk Digital lewat link di bio! 🤫💎"
  },
  {
    id: "hk-4",
    category: "Result-First",
    hookText: "Dari modal Rp0 sampai hasilkan transferan berulang kali murni dari HP!",
    captionStructure: "Ini bukan sulap, tapi hasil nyata mengemas keahlian sederhana atau memanfaatkan produk PLR (Private Label Rights). Pembeli bayar, sistem otomatis mengirimkan file produknya, dan uang 100% masuk ke rekening pribadi kita tanpa potongan. Pelajari langkah taktisnya dari dasar banget di link bio! 📈"
  }
];
