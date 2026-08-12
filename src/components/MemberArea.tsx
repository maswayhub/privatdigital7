import React, { useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  CheckSquare, 
  Square, 
  Download, 
  BookOpen, 
  Video, 
  Zap, 
  FileText, 
  Sparkles, 
  MessageSquare, 
  ChevronRight, 
  LogOut, 
  Award,
  Clock,
  ExternalLink,
  Copy,
  FolderOpen,
  Filter,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { LESSONS_DATA, EBOOKS_DATA, STOCK_VIDEOS_DATA, HOOK_TEMPLATES_DATA } from "../data";
import { Lesson, Ebook, StockVideo, HookTemplate } from "../types";
import AiAssistant from "./AiAssistant";

interface MemberAreaProps {
  userData: { name: string; email: string; phone: string } | null;
  onLogout: () => void;
}

export default function MemberArea({ userData, onLogout }: MemberAreaProps) {
  // Sidebar Tabs: "course" | "ebooks" | "videos" | "hooks" | "ai"
  const [activeTab, setActiveTab] = useState<"course" | "ebooks" | "videos" | "hooks" | "ai">("course");
  
  // Course State
  const [currentLesson, setCurrentLesson] = useState<Lesson>(LESSONS_DATA[0]);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);
  
  // eBook Selected State
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(EBOOKS_DATA[0]);
  const [downloadingEbook, setDownloadingEbook] = useState<string | null>(null);

  // Videos State
  const [videoFilter, setVideoFilter] = useState<string>("All");
  const [activeStockVideo, setActiveStockVideo] = useState<StockVideo>(STOCK_VIDEOS_DATA[0]);
  const [copiedCaptionId, setCopiedCaptionId] = useState<string | null>(null);

  // Hooks Customize State
  const [hookNiche, setHookNiche] = useState("Resep Masakan Rumahan");
  const [hookTarget, setHookTarget] = useState("Ibu Rumah Tangga");
  const [customHooks, setCustomHooks] = useState<HookTemplate[]>(HOOK_TEMPLATES_DATA);
  const [copiedHookId, setCopiedHookId] = useState<string | null>(null);

  const displayName = userData?.name || "Member Jago Jualan";

  // Simulate video playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            // Auto complete lesson tasks when done
            toggleLessonCompleted(currentLesson.id);
            return 0;
          }
          return prev + 1.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentLesson]);

  const toggleLessonCompleted = (id: number) => {
    setCompletedLessons((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getOverallProgressPercent = () => {
    if (LESSONS_DATA.length === 0) return 0;
    return Math.round((completedLessons.length / LESSONS_DATA.length) * 100);
  };

  const handleDownloadEbook = (ebookId: string) => {
    setDownloadingEbook(ebookId);
    setTimeout(() => {
      setDownloadingEbook(null);
      alert(`Simulasi Unduh: eBook "${EBOOKS_DATA.find(e => e.id === ebookId)?.title}" telah berhasil disimpan ke perangkat Anda!`);
    }, 1500);
  };

  const handleCopyCaption = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCaptionId(id);
    setTimeout(() => setCopiedCaptionId(null), 2500);
  };

  const generateCustomHooks = () => {
    // Generate custom text templates based on dynamic user input
    const customized = HOOK_TEMPLATES_DATA.map((item) => {
      let customHookText = item.hookText;
      let customCaption = item.captionStructure;

      if (item.id === "hk-1") {
        customHookText = `Berhenti jualan produk fisik sebelum kamu tahu trik ${hookNiche} ini!`;
        customCaption = `Mengapa? Karena margin untung produk fisik itu tipis dan ribet. Dibanding itu, produk digital tentang ${hookNiche} cuma dibuat SEKALI tapi bisa kamu jual berkali-kali ke ${hookTarget} tanpa modal tambahan! Mau belajar cara mulainya? Klik link di bio sekarang! 🚀`;
      } else if (item.id === "hk-2") {
        customHookText = `Khusus buat ${hookTarget} yang mau dapet cuan dari rumah lewat ${hookNiche}!`;
        customCaption = `Hari gini masih bingung mau mulai usaha apa? Yuk pelajari cara tercepat bikin produk digital berpenghasilan tinggi bertema ${hookNiche} murni dari HP saja. Link pendaftaran kelas diskon khusus hari ini ada di bio! ⌛`;
      } else if (item.id === "hk-3") {
        customHookText = `Rahasia sukses berbisnis ${hookNiche} tanpa perlu nunjukkin wajah di kamera!`;
        customCaption = `Ya, kamu bisa jualan info/panduan tentang ${hookNiche} murni pakai video estetik faceless dan suara voiceover. Tertarik dapet 900+ stock video gratis buat mulai promosi? Daftarkan dirimu ke kelas lewat link di bio ya! 🤫💎`;
      } else if (item.id === "hk-4") {
        customHookText = `Trik pecah telur hasilkan jutaan dari rumah via panduan ${hookNiche}!`;
        customCaption = `Cocok banget buat pemula atau ${hookTarget} yang ingin merintis pasif income otomatis dari rumah. Pembeli bayar, file langsung terkirim otomatis. Penasaran caranya? Cek panduan taktisnya di link bio saya! 📈`;
      }

      return {
        ...item,
        hookText: customHookText,
        captionStructure: customCaption
      };
    });

    setCustomHooks(customized);
  };

  const handleCopyHook = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHookId(id);
    setTimeout(() => setCopiedHookId(null), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col md:flex-row antialiased font-sans">
      
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 shrink-0">
        <div>
          {/* Brand header */}
          <div className="p-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">7H</div>
              <span className="font-extrabold text-sm tracking-tight text-white">Member Portal</span>
            </div>
            <span className="text-[9px] bg-blue-900/60 text-blue-300 font-bold px-1.5 py-0.5 rounded-full uppercase">PRO</span>
          </div>

          {/* User Profile bar */}
          <div className="p-5 border-b border-slate-800/80 bg-slate-950/20">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">MEMBER AKTIF</p>
            <h4 className="text-sm font-bold text-white truncate mt-0.5">{displayName}</h4>
            <p className="text-[11px] text-slate-400 truncate mt-0.5">{userData?.email || "demo@jagoan.com"}</p>
          </div>

          {/* Menu Items */}
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab("course")}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "course" ? "bg-blue-600 text-white font-bold" : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Play className="h-4 w-4" />
              <span>1. Panduan Khusus 7 Hari</span>
            </button>

            <button
              onClick={() => setActiveTab("ebooks")}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "ebooks" ? "bg-blue-600 text-white font-bold" : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>2. Bonus eBook PLR</span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "videos" ? "bg-blue-600 text-white font-bold" : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Video className="h-4 w-4" />
              <span>3. Bank Video Estetik HD</span>
            </button>

            <button
              onClick={() => setActiveTab("hooks")}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "hooks" ? "bg-blue-600 text-white font-bold" : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>4. Bank Hook Viral</span>
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "ai" ? "bg-blue-600 text-white font-bold" : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>5. Tanya Guru AI</span>
            </button>
          </nav>
        </div>

        {/* Logout bar */}
        <div className="p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-semibold">
          <span className="flex items-center text-[10px] text-blue-400 bg-blue-950/20 px-2.5 py-0.5 rounded-full font-black uppercase">PORTAL AKTIF</span>
          <button 
            onClick={onLogout}
            className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Keluar</span>
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="grow p-6 md:p-8 overflow-y-auto max-w-5xl mx-auto w-full">
        
        {/* Tab 1: Course Curriculum player */}
        {activeTab === "course" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Panduan Khusus: 7 Hari Jago Jualan Produk Digital</h1>
                <p className="text-xs sm:text-sm text-slate-500">Simak video panduan khusus harian dan selesaikan tantangan belajarmu secara konsisten.</p>
              </div>
              
              {/* Overall Progress Bar */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 w-full sm:w-64 text-xs font-semibold space-y-1.5 shadow-xs shrink-0">
                <div className="flex justify-between items-center text-slate-700">
                  <span>Progres Belajar</span>
                  <span>{completedLessons.length} / {LESSONS_DATA.length} Hari ({getOverallProgressPercent()}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${getOverallProgressPercent()}%` }} 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Player & Video details */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Custom Video Player simulator */}
                <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative aspect-video">
                  
                  {/* Mixkit Video Stream container */}
                  <video 
                    id="mockup-video-player"
                    src={currentLesson.videoUrl}
                    className="w-full h-full object-cover"
                    controls={false}
                    loop
                    muted
                    autoPlay={isPlaying}
                  />

                  {/* Dark transparent overlay if paused or loading */}
                  {(!isPlaying && playProgress === 0) && (
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center z-10">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="h-16 w-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Play className="h-7 w-7 fill-white text-white ml-1" />
                      </button>
                      <span className="text-white text-xs font-bold uppercase tracking-wider mt-4 block">Day {currentLesson.day}: {currentLesson.title}</span>
                    </div>
                  )}

                  {/* Play controls bar overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-sm p-3.5 flex items-center space-x-4 text-white z-10">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                    </button>
                    
                    {/* Time line scrubber */}
                    <div className="grow bg-slate-700 h-1.5 rounded-full relative cursor-pointer overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${playProgress}%` }}
                      />
                    </div>

                    <span className="text-[10px] font-mono font-medium">
                      {isPlaying ? `00:${Math.round(playProgress * 0.2).toString().padStart(2, '0')}` : "00:00"} / {currentLesson.duration}
                    </span>
                  </div>
                </div>

                {/* Lesson metadata info */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <span className="bg-blue-50 text-blue-900 text-xs font-black uppercase px-2.5 py-0.5 rounded-full">HARI KE-{currentLesson.day}</span>
                    <h3 className="text-lg font-bold text-slate-900">{currentLesson.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{currentLesson.description}</p>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-1 flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1.5 text-blue-600" /> Ringkasan Materi & Kunci Sukses
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{currentLesson.summary}</p>
                  </div>

                  {/* Daily homework/challenges checklist */}
                  <div className="space-y-3">
                    <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center">
                      <CheckSquare className="h-4 w-4 text-blue-600 mr-1.5" /> Tugas Praktek Hari Ke-{currentLesson.day}
                    </h4>
                    
                    <div className="space-y-2">
                      {currentLesson.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-slate-50/50 p-3 rounded-xl border border-slate-200 text-xs sm:text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-relaxed">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Syllabus lists selector */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-4 shadow-xs space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 px-1">DAFTAR MODUL BELAJAR</h4>
                
                <div className="space-y-2">
                  {LESSONS_DATA.map((lesson) => {
                    const isSelected = lesson.day === currentLesson.day;
                    const isCompleted = completedLessons.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setCurrentLesson(lesson);
                          setIsPlaying(false);
                          setPlayProgress(0);
                        }}
                        className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                          isSelected 
                            ? "bg-blue-50/50 border-blue-500/30 shadow-xs" 
                            : "bg-white border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start space-x-2.5">
                          {/* Circle completed indicator */}
                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonCompleted(lesson.id);
                            }}
                            className="mt-0.5 shrink-0"
                          >
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4 text-emerald-600 fill-emerald-50" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-slate-200 bg-white" />
                            )}
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">DAY {lesson.day}</p>
                            <h5 className="text-xs font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[200px]">{lesson.title}</h5>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-slate-500 shrink-0">{lesson.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Bonus Ebooks PLR */}
        {activeTab === "ebooks" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Klaim & Unduh 5 Produk Digital Premium (PLR)</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Gunakan eBook di bawah ini sebagai aset promosi atau jual kembali ke audiens Anda untuk mendapatkan 100% keuntungan langsung masuk rekening sendiri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Ebooks List */}
              <div className="md:col-span-5 space-y-3">
                {EBOOKS_DATA.map((ebook) => (
                  <button
                    key={ebook.id}
                    onClick={() => setSelectedEbook(ebook)}
                    className={`w-full text-left p-4 rounded-2xl border flex items-start space-x-3 transition-all ${
                      selectedEbook?.id === ebook.id 
                        ? "bg-blue-50/50 border-blue-500/30 shadow-xs" 
                        : "bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="h-14 w-11 bg-slate-100 border border-slate-200 rounded overflow-hidden shrink-0 shadow-xs relative">
                      <img src={ebook.imageUrl} alt={ebook.title} referrerPolicy="no-referrer" className="h-full w-full object-cover opacity-70" />
                      <div className="absolute inset-0 bg-slate-950/10" />
                    </div>
                    <div className="grow truncate">
                      <span className="text-[9px] font-black uppercase tracking-wider bg-blue-600 text-white px-1.5 py-0.5 rounded-full">
                        {ebook.badge}
                      </span>
                      <h4 className="text-xs font-bold text-slate-950 truncate mt-1.5">{ebook.title}</h4>
                      <p className="text-[10px] text-slate-500 truncate mt-0.5">{ebook.author}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Selected Ebook details and Preview outline */}
              <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
                {selectedEbook ? (
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 border-b border-slate-100 pb-5">
                      <div className="h-24 w-18 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shrink-0 shadow-md">
                        <img src={selectedEbook.imageUrl} alt={selectedEbook.title} referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                      </div>
                      <div className="space-y-1.5 grow">
                        <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 border border-blue-200/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          PLR LICENSE - READY TO SELL
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">{selectedEbook.title}</h3>
                        <p className="text-xs text-slate-500 font-medium">Penulis: {selectedEbook.author}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">DESKRIPSI PRODUK</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedEbook.description}</p>
                    </div>

                    {/* Chapters List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center">
                        <BookOpen className="h-3.5 w-3.5 mr-1 text-blue-600" /> DAFTAR ISI EBOOK
                      </h4>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                        {selectedEbook.chapters.map((chapter, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                            <span>{chapter}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Marketing Tips */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center">
                        <Sparkles className="h-3.5 w-3.5 mr-1 text-blue-600" /> TIPS STRATEGI JUALAN
                      </h4>
                      <div className="space-y-2">
                        {selectedEbook.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-start space-x-2 bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs leading-relaxed text-slate-600">
                            <span className="font-bold text-blue-600">#{idx+1}</span>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Simulated Download Actions */}
                    <div className="pt-4 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => handleDownloadEbook(selectedEbook.id)}
                        disabled={downloadingEbook === selectedEbook.id}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-sm shrink-0 cursor-pointer disabled:opacity-50"
                      >
                        {downloadingEbook === selectedEbook.id ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Mengunduh...</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            <span>Unduh eBook (PDF Mentah)</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                ) : (
                  <div className="text-center py-16 space-y-3">
                    <FolderOpen className="h-12 w-12 text-slate-300 mx-auto" />
                    <p className="text-slate-400 text-sm font-semibold">Silakan pilih eBook untuk melihat detail & mengunduh</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: HD Stock Videos explorer */}
        {activeTab === "videos" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200 pb-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Koleksi 900+ Stok Video Estetik HD (B-Roll)</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Pratinjau beberapa contoh video estetik pendukung konten faceless Anda. Klik satu video untuk mengambil naskah promosi instan.
                </p>
              </div>

              {/* Simple Category Filter */}
              <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 max-w-sm self-start sm:self-center">
                {["All", "Minimalist", "Desk Setup", "Cafe Vibe", "Nature & Travel"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setVideoFilter(cat)}
                    className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors cursor-pointer ${
                      videoFilter === cat ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {cat.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Video List Grid */}
              <div className="md:col-span-5 space-y-3">
                {STOCK_VIDEOS_DATA
                  .filter((v) => videoFilter === "All" || v.category === videoFilter)
                  .map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveStockVideo(video)}
                      className={`w-full text-left p-3.5 rounded-2xl border flex items-center space-x-3 transition-all ${
                        activeStockVideo.id === video.id 
                          ? "bg-blue-50/50 border-blue-500/30 shadow-xs" 
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <Video className="h-5 w-5" />
                      </div>
                      <div className="grow truncate">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{video.category}</p>
                        <h4 className="text-xs font-bold text-slate-950 truncate mt-0.5">{video.title}</h4>
                      </div>
                    </button>
                  ))}
              </div>

              {/* Right Column: Selected Video Player and Copy Caption */}
              <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
                
                {/* Active stock video play */}
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative aspect-video shadow-md">
                  <video
                    src={activeStockVideo.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    SAMPLE PREVIEW HD
                  </span>
                </div>

                {/* Video Info and dynamic copy action */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {activeStockVideo.category} CATEGORY
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1.5">{activeStockVideo.title}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">Naskah / Caption Promosi Siap Salin</h4>
                      
                      <button
                        onClick={() => handleCopyCaption(activeStockVideo.id, activeStockVideo.captionTemplate)}
                        className="text-blue-600 hover:text-blue-800 font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer"
                      >
                        {copiedCaptionId === activeStockVideo.id ? (
                          <span className="text-emerald-700 flex items-center"><CheckCircle className="h-3.5 w-3.5 mr-1" /> Tersalin!</span>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Salin Naskah</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-mono whitespace-pre-wrap">
                      {activeStockVideo.captionTemplate}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200/50 flex items-start space-x-3 text-xs leading-relaxed text-slate-600">
                    <Sparkles className="h-5 w-5 text-blue-600 shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <strong>Petunjuk Penggunaan:</strong> Anda bisa mengunduh 900+ stock video lengkap langsung dari Google Drive premium kami lewat tautan di member area penuh. Gunakan naskah di atas untuk video Reels/TikTok Anda guna memicu rasa penasaran penonton agar mengklik tautan bio Anda.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Bank Hook Viral Generator */}
        {activeTab === "hooks" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Kustomisasi Bank 600+ Hook Video Pendek Viral</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Pilih kategori emosi hook, lalu sesuaikan variabel produk digital Anda untuk menyusun teks hook visual yang langsung mendominasi perhatian penonton dalam 3 detik pertama.
              </p>
            </div>

            {/* Custom Input Variables Panel */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500">SESUAIKAN DENGAN PRODUK JUALAN ANDA</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Niche / Topik Jualan Anda</label>
                  <input
                    type="text"
                    value={hookNiche}
                    onChange={(e) => setHookNiche(e.target.value)}
                    placeholder="Contoh: Belajar Canva / Resep Diet"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Target Calon Pembeli</label>
                  <input
                    type="text"
                    value={hookTarget}
                    onChange={(e) => setHookTarget(e.target.value)}
                    placeholder="Contoh: Ibu Rumah Tangga / Karyawan Sibuk"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
              <button
                onClick={generateCustomHooks}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer"
              >
                Susun Ulang Seluruh Hook
              </button>
            </div>

            {/* Generated Customized Hooks List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customHooks.map((hk) => (
                <div key={hk.id} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-900 px-2.5 py-0.5 rounded-full">
                        Tipe: {hk.category}
                      </span>
                      <button
                        onClick={() => handleCopyHook(hk.id, `${hk.hookText}\n\n${hk.captionStructure}`)}
                        className="text-blue-600 hover:text-blue-800 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedHookId === hk.id ? (
                          <span className="text-emerald-700 flex items-center"><CheckCircle className="h-3.5 w-3.5 mr-1" /> Tersalin!</span>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Salin Paket</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">TEKS HOOK VIDEO (GOLDEN 3 SECONDS)</p>
                      <blockquote className="text-slate-950 font-extrabold text-sm border-l-4 border-blue-600 pl-2 py-0.5 italic leading-relaxed">
                        "{hk.hookText}"
                      </blockquote>
                    </div>

                    <div className="space-y-1 pt-2">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">SKRIP CAPTION PENJELAS SOLUSI</p>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{hk.captionStructure}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                    Cocok dikombinasikan dengan video stock bertema santai di kafe atau pagi hari.
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 5: Tanya Guru AI */}
        {activeTab === "ai" && (
          <AiAssistant />
        )}

      </main>

    </div>
  );
}
