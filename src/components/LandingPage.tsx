import React, { useState, useEffect } from "react";
import { 
  Check, 
  X, 
  BookOpen, 
  TrendingUp, 
  Video, 
  Zap, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown, 
  Clock, 
  Gift, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Play, 
  Lock, 
  ShieldCheck,
  Star,
  Users,
  Award,
  Send,
  Smile,
  Paperclip,
  Phone,
  MoreVertical
} from "lucide-react";
import { LESSONS_DATA } from "../data";

const SLIDE_THEMES = [
  { text: "Fondasi", icon: ShieldCheck },
  { text: "Setup", icon: Smartphone },
  { text: "Trafik", icon: TrendingUp },
  { text: "Konten", icon: Video },
  { text: "Psikologi", icon: Users },
  { text: "Viral", icon: Zap },
  { text: "Monetisasi", icon: DollarSign }
];

interface LandingPageProps {
  onNavigate: (view: "landing" | "checkout" | "member") => void;
  couponCode: string;
  setCouponCode: (code: string) => void;
  couponDiscount: number;
  setCouponDiscount: (discount: number) => void;
}

export default function LandingPage({
  onNavigate,
  couponCode,
  setCouponCode,
  couponDiscount,
  setCouponDiscount,
}: LandingPageProps) {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [promoInput, setPromoInput] = useState<string>("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);
  
  // Timer State for Urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer to keep demo rolling
          return { hours: 2, minutes: 14, seconds: 45 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoInput.trim().toUpperCase();
    if (cleanCode === "JAGOCUAN" || cleanCode === "RUMAHAN") {
      setCouponCode(cleanCode);
      setCouponDiscount(50000); // Rp50.000 off
      setPromoMessage({ text: `Kupon '${cleanCode}' berhasil diterapkan! Anda mendapatkan potongan Rp50.000.`, isError: false });
    } else if (cleanCode === "") {
      setPromoMessage({ text: "Silakan masukkan kode kupon terlebih dahulu.", isError: true });
    } else {
      setPromoMessage({ text: "Kupon tidak valid. Coba masukkan 'JAGOCUAN' untuk diskon ekstra!", isError: true });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById("btn-pricing-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const basePrice = 147000;
  const finalPrice = 147000;

  const faqs = [
    {
      q: "Saya benar-benar pemula, apakah bisa mengikuti materi ini?",
      a: "Sangat bisa! Seluruh materi dirancang secara berurutan dari dasar sekali (mindset bisnis digital) hingga level praktis tingkat lanjut. Setiap langkah kami pandu langsung dari layar HP Anda dan didampingi secara privat via WhatsApp."
    },
    {
      q: "Apakah saya harus tampil wajah saat membuat konten?",
      a: "Sama sekali tidak perlu! Kami mengajarkan strategi 'Faceless Marketing' yang sangat populer. Anda cukup menggunakan bank 900+ stok video estetik HD gratis yang kami berikan sebagai bonus, lalu menambahkan tulisan teks di atasnya."
    },
    {
      q: "Bagaimana cara saya mendapat keuntungan 100% dari bonus produk digital?",
      a: "5 produk digital bonus yang kami berikan memiliki lisensi PLR (Private Label Rights) / Jual Ulang. Artinya, Anda berhak menjualnya kembali dengan harga yang Anda tentukan, dan saat ada orang membeli lewat link Anda, 100% uangnya masuk langsung ke rekening pribadi Anda sendiri tanpa potongan komisi!"
    },
    {
      q: "Apakah ada biaya bulanan atau bimbingan tambahan?",
      a: "Tidak ada! Ini adalah pendaftaran satu kali bayar (One-Time Payment). Anda langsung mendapatkan akses modul selamanya, bimbingan privat via WhatsApp langsung dengan mentor, serta semua pembaruan materi di masa mendatang secara GRATIS."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-slate-900">
      
      {/* Dynamic Announcement Bar */}
      <div className="bg-indigo-900 text-slate-100 py-2.5 px-4 text-center text-xs md:text-sm font-semibold tracking-wide">
        🔥 DISKON SPECIAL HARI INI: Harga Promo Rp147.000 (Satu Kali Bayar untuk Akses Selamanya & Bimbingan WA!)
      </div>

      {/* Navigation */}
      <nav id="nav-header" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50 backdrop-blur-sm shadow-xs">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">P</div>
          <span className="font-bold text-lg tracking-tight text-slate-900">PrivatDigital<span className="text-blue-600 underline decoration-2">7</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
          <a href="#problem" className="hover:text-slate-900 transition-colors">Masalah</a>
          <a href="#syllabus" className="hover:text-slate-900 transition-colors">Materi Bimbingan</a>
          <a href="#bonuses" className="hover:text-slate-900 transition-colors">Bonus Spesial</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Harga Promo</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            id="btn-nav-cta"
            onClick={scrollToPricing}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-5 py-2 rounded-full transition-all shadow-lg shadow-blue-100"
          >
            Daftar Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero-section" className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-16 text-center">
        <div className="bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950 rounded-[32px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl text-center">
          
          {/* Decorative background blur */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-blue-400/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-bold text-blue-200 tracking-widest uppercase mb-2">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-blue-300" />
              <span>PANDUAN KHUSUS & BIMBINGAN WA - PEMULA & INTROVERT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Buka Keran Penghasilan dari Rumah: <span className="text-blue-300">Panduan Khusus 7 Hari Jago Jualan Produk Digital Dibimbing Melalui WA</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Bocoran trik terbukti raih cuan dari <strong className="text-white font-extrabold">TikTok & Instagram</strong> modal HP saja—<span className="bg-slate-900/50 backdrop-blur-xs text-blue-200 font-bold px-2 py-1 rounded border border-blue-500/20">tanpa tampil wajah, tanpa endorse, dibimbing langsung via WhatsApp secara khusus!</span>
            </p>

            {/* CTA Button Block */}
            <div className="pt-4 pb-2">
              <button
                id="btn-hero-cta"
                onClick={scrollToPricing}
                className="group inline-flex items-center space-x-2 bg-emerald-400 hover:bg-emerald-500 text-slate-950 text-base md:text-lg font-black px-8 py-4 rounded-2xl transition-all shadow-xl active:scale-95 cursor-pointer"
              >
                <span>SAYA MAU JOIN BIMBINGAN KHUSUS SEKARANG</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-blue-200/60 mt-3.5 font-medium">
                ⚡ Akses Langsung + Bimbingan WA + Gratis Semua Bonus Produk Siap Jual (Senilai Rp3.400.000+)
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-200 pt-8 mt-12 text-slate-600">
          <div className="flex items-center justify-center space-x-2">
            <Users className="h-5 w-5 text-blue-600 shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-slate-800 text-left">1,420+ Alumni Kelas</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Award className="h-5 w-5 text-blue-600 shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-slate-800 text-left">Lisensi PLR Resmi</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-slate-800 text-left">Garansi Update Gratis</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Star className="h-5 w-5 text-amber-500 shrink-0 fill-amber-500 stroke-none" />
            <span className="text-xs md:text-sm font-semibold text-slate-800 text-left">Rating Kelas 4.9/5</span>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="problem" className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">APA YANG ANDA RASAKAN?</h2>
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
            Apakah Anda Mengalami Salah Satu dari Hal Ini?
          </h3>
 
          <div className="space-y-4 max-w-2xl mx-auto mb-10">
            {[
              "Ingin punya penghasilan tambahan, tapi bingung mau jual produk apa karena gak punya stok barang.",
              "Malu atau enggan tampil di depan kamera, sehingga ragu bisa sukses ngonten di TikTok atau Instagram.",
              "Pusing memikirkan algoritma media sosial yang berubah terus dan bikin konten sepi penonton.",
              "Gak punya modal besar untuk bayar endorse influencer atau pasang iklan berbayar.",
              "Takut ketinggalan tren digital karena dunia online bergerak begitu cepat."
            ].map((pain, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-100 shadow-3xs">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-[24px] p-6 md:p-8 text-center max-w-2xl mx-auto shadow-xs">
            <h4 className="text-blue-600 font-black text-lg mb-2 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
              Kabar Baiknya:
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-semibold">
              Anda tidak perlu pusing bikin produk dari nol, tidak perlu modal jutaan, dan sama sekali <strong className="text-slate-900 underline decoration-blue-500 decoration-2">TIDAK PERLU</strong> menunjukkan wajah Anda di kamera untuk mulai menghasilkan cuan dari rumah!
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 flex flex-col items-center">
          <div className="inline-block bg-blue-50 text-blue-600 border border-blue-200/50 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            SOLUSI TERBAIK UNTUK ANDA
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            Memperkenalkan: Panduan Khusus "7 Hari Jago Jualan Produk Digital" (Dibimbing via WA)
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-2xl">
            Panduan taktis, praktis, and sangat terstruktur yang didesain khusus untuk pemula agar bisa membangun bisnis produk digital berpenghasilan tinggi cukup dari HP saja, lengkap dengan bimbingan khusus via WhatsApp langsung dengan mentor.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-2xl">
            Anda akan diajarkan mulai dari menemukan ide bernilai tinggi, membuat materi promosi 'faceless' tanpa rekam wajah, hingga mengaktifkan keran otomatis penerima uang 24 jam dengan bimbingan personal satu arah lewat chat WA.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              id="btn-solution-cta"
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-200 cursor-pointer active:scale-95"
            >
              <span>Daftar Sekarang & Masuk Grup WA</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Syllabus / Timeline Section */}
      <section id="syllabus" className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">MATERI UTAMA KHUSUS</h2>
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Materi Yang Juga Akan Anda Pelajari
          </h3>
          <p className="text-center text-slate-500 max-w-xl mx-auto mb-10 text-sm sm:text-base">
            Kami menyajikan langkah-langkah praktis dan terarah dari dasar sampai mahir untuk langsung dieksekusi secara mandiri dengan pendampingan personal.
          </p>

          {/* Day Quick Navigation Slider Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8 max-w-4xl mx-auto">
            {SLIDE_THEMES.map((theme, idx) => {
              const IconComponent = theme.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                    activeSlide === idx
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <IconComponent className={`h-4 w-4 ${activeSlide === idx ? "text-white" : "text-slate-400"}`} />
                  <span>{theme.text}</span>
                </button>
              );
            })}
          </div>

          {/* Main Carousel Wrapper */}
          <div className="relative max-w-3xl mx-auto px-4">
            
            {/* Slide Card */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden transition-all duration-300 min-h-[360px] flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-black uppercase px-3.5 py-1.5 rounded-xl tracking-wider">
                    Modul Panduan • {SLIDE_THEMES[activeSlide].text}
                  </span>
                </div>

                {/* Lesson Title */}
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                  {LESSONS_DATA[activeSlide].title}
                </h4>

                {/* Lesson Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {LESSONS_DATA[activeSlide].description}
                </p>

                {/* Summary / Rincian Pembahasan Box */}
                <div className="bg-slate-50 rounded-2xl p-5 text-xs sm:text-sm text-slate-600 leading-relaxed border border-slate-100/80">
                  <span className="font-extrabold text-slate-900 block mb-2 text-xs uppercase tracking-wider text-blue-700">Rincian Pembahasan:</span>
                  <p className="leading-relaxed">{LESSONS_DATA[activeSlide].summary}</p>
                </div>


              </div>

            </div>

            {/* Floating Left/Right Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-16 z-10">
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? LESSONS_DATA.length - 1 : prev - 1))}
                className="bg-white hover:bg-slate-50 text-slate-800 p-3 rounded-full border border-slate-200 shadow-lg hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-16 z-10">
              <button
                onClick={() => setActiveSlide((prev) => (prev === LESSONS_DATA.length - 1 ? 0 : prev + 1))}
                className="bg-white hover:bg-slate-50 text-slate-800 p-3 rounded-full border border-slate-200 shadow-lg hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-1.5 mt-6">
            {LESSONS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Spesial Section */}
      <section id="bonuses" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">BONUS GRATIS SPESIAL</h2>
        <h3 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Aset Siap Pakai Senilai Jutaan Rupiah
        </h3>
        <p className="text-center text-slate-500 max-w-xl mx-auto mb-10 text-sm sm:text-base">
          Jika Anda mendaftar hari ini, Anda berhak mengklaim seluruh paket bonus instan ini tanpa biaya tambahan sepeser pun.
        </p>

        {/* Highlighted Total Bonus Callout Box */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-[24px] p-6 sm:p-8 mb-12 text-center max-w-4xl mx-auto shadow-xs">
          <span className="bg-emerald-500 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block tracking-wider">
            🚨 PENAWARAN TERBATAS HARI INI
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Total Paket Bonus Raksasa Senilai <span className="text-blue-600 underline underline-offset-4 decoration-3">Rp2.150.000+</span> GRATIS!
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            Dapatkan seluruh akses instant di bawah ini setelah Anda mengamankan slot bimbingan privat Anda hari ini. Seluruh aset bisa diakses langsung lewat Member Area seumur hidup!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bonus Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-xs flex flex-col justify-between group hover:border-blue-500/40 transition-colors duration-300">
            <div>
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Gift className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50/70 border border-blue-200/50 px-2.5 py-0.5 rounded uppercase tracking-wider mb-2.5 inline-block">
                BONUS #1 (VALUE Rp1.500.000)
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                5 Produk Digital High-Quality PLR (Lisensi Jual Ulang)
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Anda mendapatkan file mentah eBook berkualitas tinggi yang bebas diedit dan langsung bisa Anda jual kembali. Keuntungan penjualan 100% langsung masuk ke rekening pribadi Anda sendiri!
              </p>
              
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="text-xs space-y-2">
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700"><strong>eBook Blueprint Fat Loss</strong> - Coach Fikri</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700"><strong>eBook Jago Canva</strong> - Dari Nol Sampai Ahli</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700"><strong>eBook Panduan Konten</strong> - Formula FYP & Viral</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700"><strong>Koleksi update produk PLR baru</strong> di member area</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">100% Hak Cuan</span>
            </div>
          </div>

          {/* Bonus Card 2 */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-xs flex flex-col justify-between group hover:border-blue-500/40 transition-colors duration-300">
            <div>
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50/70 border border-blue-200/50 px-2.5 py-0.5 rounded uppercase tracking-wider mb-2.5 inline-block">
                BONUS #2 (VALUE Rp350.000)
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                FREE 900+ Bank Stok Video Estetik HD
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Kumpulan visual B-roll berkualitas tinggi yang sangat estetik. Siap Anda edit, potong, tambahkan tulisan, dan jadikan konten promosi harian di TikTok atau Reels tanpa perlu rekam sendiri.
              </p>
              
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="text-xs space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Video Cozy Home, Cafe, Typing, Traveling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Kualitas resolusi jernih HD 1080p</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Bebas hak cipta / bebas watermark</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Akses Lifetime</span>
            </div>
          </div>

          {/* Bonus Card 3 */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-xs flex flex-col justify-between group hover:border-blue-500/40 transition-colors duration-300">
            <div>
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50/70 border border-blue-200/50 px-2.5 py-0.5 rounded uppercase tracking-wider mb-2.5 inline-block">
                BONUS #3 (VALUE Rp300.000)
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                FREE 600+ Bank Stok Video Hook Viral
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Koleksi video dengan pembuka (hook) terbaik yang terbukti menghentikan scroll ibu jari penonton dalam 3 detik pertama. Dijamin melejitkan statistik interaksi dan view akun Anda!
              </p>
              
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="text-xs space-y-2">
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Formula teks hook paling clicky & penasaran</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Dikelompokkan berdasarkan emosi pembeli</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">Siap copy-paste, tinggal ganti nama produk</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Tinggal Edit</span>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing / Value Sheet Section */}
      <section id="pricing" className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">HARGA DAN PROMO</h2>
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
            Perbandingan Nilai & Investasi Anda
          </h3>

          <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-xl max-w-2xl mx-auto">
            
            {/* Header Value */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-6 sm:p-8 text-center relative overflow-hidden">
              <h4 className="font-extrabold text-lg sm:text-xl">Ringkasan Total Nilai Panduan & Bonus</h4>
              <p className="text-xs text-blue-200 mt-1">Estimasi nilai jika dibeli secara terpisah</p>
            </div>

            {/* Value Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="space-y-3.5 text-slate-700">
                <div className="flex justify-between items-center text-sm">
                  <span>1. Panduan Khusus "7 Hari Jago Jualan Produk Digital" + Bimbingan WA</span>
                  <span className="font-semibold">Rp750.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>2. 5 Produk Digital PLR Siap Jual (Lisensi Cuan 100%)</span>
                  <span className="font-semibold">Rp1.500.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>3. 900+ Bank Stok Video Estetik HD</span>
                  <span className="font-semibold">Rp350.000</span>
                </div>
                <div className="flex justify-between items-center text-sm font-light">
                  <span>4. 600+ Bank Stok Video Hook Viral</span>
                  <span className="font-semibold text-slate-800">Rp300.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>5. Akses Update Berkala & Bimbingan WA Lifetime</span>
                  <span className="font-semibold">Rp500.000</span>
                </div>
                
                <div className="border-t border-slate-100 pt-3.5 flex justify-between items-center text-base font-bold text-slate-900">
                  <span>Total Sebenarnya</span>
                  <span className="line-through text-slate-400">Rp3.400.000</span>
                </div>
              </div>

              {/* Final Price Block */}
              <div className="pt-6 text-center border-t border-slate-100">
                <p className="text-slate-500 text-xs sm:text-sm font-semibold">Harga Promo Spesial Hari Ini:</p>
                
                <div className="flex items-center justify-center space-x-2.5 mt-1.5">
                  <span className="text-slate-400 line-through text-lg font-bold">Rp350.000</span>
                  <span className="text-blue-600 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Rp147.000
                  </span>
                </div>

                <div className="text-xs text-indigo-950 font-bold bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 mt-4 max-w-lg mx-auto leading-relaxed">
                  Harga Rp 147 ribu, (harga sudah naik dari sebelumnya 127 ribu dan akan terus naik seiring waktu untuk filter mereka yang benar-benar serius di dunia digital, siapa cepat dia dapat!)
                </div>

                {/* Urgency countdown bar */}
                <div className="bg-blue-50 border border-blue-100 text-blue-950 text-xs font-semibold py-2 px-4 rounded-full mt-6 flex justify-between items-center max-w-sm mx-auto">
                  <span className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1 text-blue-600 animate-spin-slow" /> Slot Promo Berakhir Dalam:
                  </span>
                  <span className="font-mono text-blue-900 font-extrabold bg-white px-3 py-0.5 rounded-full border border-blue-100">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>

                <a
                  id="btn-pricing-cta"
                  href="http://lynk.id/parentingacademyid/eXm94PQ/checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-base font-black py-4 rounded-xl transition-all shadow-xl mt-6 block cursor-pointer text-center"
                >
                  DAFTAR DAN AMBIL PROMO SEKARANG
                </a>
                
                <div className="flex justify-center items-center space-x-2.5 mt-4 text-slate-400 text-xs font-semibold">
                  <Lock className="h-3.5 w-3.5 text-slate-300" />
                  <span>Sistem Enkripsi & Pembayaran Aman</span>
                </div>
              </div>

            </div>

          </div>

          {/* Competitor DM Story Card */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 shadow-xl max-w-2xl mx-auto mt-12 space-y-6 text-slate-800 relative">
            <div className="absolute top-6 right-8 text-6xl text-slate-100 font-serif pointer-events-none select-none">“</div>
            <h4 className="font-extrabold text-lg sm:text-xl text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
              <span>Kok harganya naik?? Ada alasannya, saya mau cerita sedikit..</span>
            </h4>
            
            <p className="text-xs sm:text-sm font-bold text-indigo-900 bg-indigo-50/70 p-3.5 rounded-xl leading-relaxed">
              👉 Kalau Anda selama ini hanya habiskan waktu dengan scroll TikTok aja, sekarang waktunya berubah memanfaatkan media sosial jadi ladang cuan!
            </p>

            <div className="text-xs sm:text-sm space-y-4 leading-relaxed text-slate-600">
              <p>
                Ada kejadian yang bener-bener bikin saya kecewa akhir-akhir ini.
              </p>
              <p>
                Tadi siang (per tanggal 26 Januari ketika saya menulis ini), ada owner dari sebuah kelas online di TikTok yang harganya jutaan, dia DM chat saya. Dia nggak terima sama salah satu video promosi di TikTok saya.
              </p>
              <p>
                Dalem hati saya, kenapa owner mega bintang dari kelas bimbingan online yang harganya <strong className="text-slate-900 font-extrabold">JUTAAN</strong>, segitunya ama saya, padahal kelas saya harganya cuma ratusan ribu..?
              </p>
              <p>
                Detik itu juga, saya coba diskusi bareng tim saya. Dan kesimpulan kami adalah: <strong className="text-slate-900 font-extrabold">kami, dari KELAS INI PELUANG, telah menjadi ancaman bagi mereka yang kelasnya lebih mahal!</strong>
              </p>
              <p>
                Ya, biaya kelas di sini hanya ratusan ribu rupiah, dan cukup 1x bayar, tapi kami telah terbukti memberi benefit <strong className="text-slate-900 font-extrabold">JAUH LEBIH BERHARGA!</strong>
              </p>
              <p className="font-bold text-red-600">
                MEREKA YANG HARGA KELASNYA LEBIH MAHAL, TAKUT KEHILANGAN MURID!
              </p>
              <p className="font-extrabold text-slate-950 bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl">
                DAN KARNA ALASAN ITU, PER HARI INI, SAYA BERJANJI DENGAN DIRI SAYA, SAYA AKAN BUKTIKAN MURID-MURID SAYA PASTI JAUH LEBIH CUAN!!!
              </p>
            </div>
            
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Ditulis dengan jujur,</span>
              <span className="font-bold text-slate-700 italic font-mono">Founder KelasDigital7</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">FAQ / TANYA JAWAB</h2>
          <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
            Pertanyaan yang Sering Diajukan
          </h3>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-slideDown">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 text-white py-20 px-6 text-center border-b border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold animate-bounce text-white">🎁</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Jangan Lewatkan Kesempatan Membangun Aset Digital Anda Hari Ini!
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Dapatkan bimbingan khusus 7 hari, materi panduan lengkap, 3 bank bonus raksasa siap pakai, serta 5 produk digital lisensi PLR siap jual sekarang juga sebelum harga promo naik kembali.
          </p>

          <div className="pt-6">
            <button
              id="btn-final-cta"
              onClick={scrollToPricing}
              className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 text-base md:text-lg font-black px-8 py-4 rounded-2xl transition-all shadow-xl active:scale-95 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>KLIK DI SINI UNTUK AMBIL PROMO SEKARANG</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-slate-400 text-xs mt-3.5 font-semibold">
              🚨 Slot Promo Harga Khusus Terbatas Hari Ini!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-slate-900 text-center text-xs">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 text-slate-400 font-bold text-sm mb-4">
            <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xs">P</div>
            <span>KelasDigital7</span>
          </div>
          <p>© 2026 KelasDigital7 Produk Digital. Hak Cipta Dilindungi.</p>
          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Sangkalan: Seluruh materi didesain berdasarkan studi kasus nyata yang berhasil dipraktekkan. Hasil akhir masing-masing peserta dapat bervariasi bergantung pada komitmen belajar, konsistensi praktek, dan bimbingan khusus via WhatsApp masing-masing.
          </p>
          <div className="flex justify-center space-x-6 pt-4 text-slate-400">
            <a href="#syllabus" className="hover:text-slate-200">Materi Bimbingan</a>
            <span>•</span>
            <a href="#bonuses" className="hover:text-slate-200">Bonus PLR</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-slate-200">Harga Promo</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
