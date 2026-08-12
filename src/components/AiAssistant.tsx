import React, { useState } from "react";
import { Sparkles, MessageSquare, Send, AlertCircle, RefreshCw, Copy, CheckCircle, HelpCircle } from "lucide-react";

export default function AiAssistant() {
  const [type, setType] = useState<"idea" | "hook" | "strategy">("idea");
  const [niche, setNiche] = useState("");
  const [detail, setDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Reassuring messages during loading
  const loadingMessages = [
    "AI Guru sedang menganalisis potensi pasarmu...",
    "Meramu kombinasi pemicu psikologis calon pembeli...",
    "Menyusun skrip video hook viral faceless untukmu...",
    "Memetakan formula anti-boncos jualan produk digital..."
  ];
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingMsgIdx((prev) => (prev + 1) % loadingMessages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) {
      setErrorMessage("Niche / Topik Jualan wajib diisi.");
      return;
    }

    setIsLoading(true);
    setResult(null);
    setErrorMessage(null);
    setLoadingMsgIdx(0);

    try {
      const response = await fetch("/api/ai/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, niche, detail }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan sistem.");
      }

      setResult(data.result);
    } catch (error: any) {
      console.error("Consultation Error:", error);
      setErrorMessage(error.message || "Gagal menghubungi AI Guru. Coba cek koneksi internet Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simple, ultra-lightweight markdown formatter for UI rendering
  const parseMarkdownToHtml = (text: string) => {
    return text.split("\n").map((line, idx) => {
      let trimmed = line.trim();
      
      // Headers
      if (trimmed.startsWith("###")) {
        return <h4 key={idx} className="text-sm font-black uppercase text-amber-900 mt-4 mb-2 tracking-wide">{trimmed.replace("###", "").trim()}</h4>;
      }
      if (trimmed.startsWith("##")) {
        return <h3 key={idx} className="text-base font-black text-stone-900 mt-5 mb-2.5 border-b border-stone-200 pb-1">{trimmed.replace("##", "").trim()}</h3>;
      }
      if (trimmed.startsWith("#")) {
        return <h2 key={idx} className="text-lg font-extrabold text-stone-900 mt-6 mb-3">{trimmed.replace("#", "").trim()}</h2>;
      }

      // Bold text formatting helper
      const formatBold = (str: string) => {
        const parts = str.split(/\*\*(.*?)\*\*/g);
        if (parts.length > 1) {
          return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-stone-950 font-bold bg-amber-50 px-1 rounded">{part}</strong> : part));
        }
        return str;
      };

      // Ordered lists
      if (/^\d+\.\s/.test(trimmed)) {
        const content = trimmed.replace(/^\d+\.\s/, "");
        return (
          <div key={idx} className="pl-4 py-1 flex items-start text-xs sm:text-sm text-stone-700 leading-relaxed">
            <span className="font-bold text-amber-800 mr-2 shrink-0">{trimmed.match(/^\d+/)![0]}.</span>
            <span>{formatBold(content)}</span>
          </div>
        );
      }

      // Unordered lists
      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        const content = trimmed.substring(1).trim();
        return (
          <div key={idx} className="pl-4 py-1 flex items-start text-xs sm:text-sm text-stone-700 leading-relaxed">
            <span className="text-amber-800 mr-2 shrink-0">✦</span>
            <span>{formatBold(content)}</span>
          </div>
        );
      }

      // Blank line
      if (!trimmed) {
        return <div key={idx} className="h-2" />;
      }

      // Normal paragraph
      return <p key={idx} className="text-xs sm:text-sm text-stone-600 leading-relaxed py-1">{formatBold(trimmed)}</p>;
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div>
        <div className="inline-flex items-center space-x-1.5 bg-amber-100/70 border border-amber-200 px-2.5 py-0.5 rounded text-xs font-bold text-amber-900 tracking-wide mb-2">
          <Sparkles className="h-3.5 w-3.5 text-amber-800 animate-pulse" />
          <span>SERVERSIDE GEMINI 3.6 FLASH</span>
        </div>
        <h1 className="text-2xl font-black text-stone-900 tracking-tight">AI Guru: Konsultasi Ide & Strategi Bisnis Digital</h1>
        <p className="text-xs sm:text-sm text-stone-500">
          Gunakan kecerdasan buatan (AI) untuk membuat ide produk digital spesifik, struktur konten hook reels/TikTok, hingga taktik pecah telur di niche Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Form Panel */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
          <h3 className="font-bold text-xs uppercase tracking-wider text-stone-500">KONSULTASI BARU</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Consultation Type Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-600 mb-1.5 uppercase tracking-wide">PILIH TOPIK KONSULTASI</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "idea", label: "Ide Produk" },
                  { id: "hook", label: "Video Hook" },
                  { id: "strategy", label: "Taktik Cuan" }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setType(item.id as any)}
                    className={`py-2 px-1 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      type === item.id 
                        ? "bg-amber-50 text-amber-900 border-amber-800/50 shadow-xs" 
                        : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Niche Input */}
            <div>
              <label className="block text-xs font-bold text-stone-600 mb-1.5">Niche / Industri Jualan Anda</label>
              <input
                type="text"
                value={niche}
                onChange={(e) => {
                  setNiche(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Contoh: Diet Sehat Wanita, Belajar Coding Pemula"
                className="w-full bg-[#FAF9F5] border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-800 transition-colors"
              />
              <span className="text-[10px] text-stone-400 mt-1 block">Tuliskan niche spesifik agar ide AI lebih akurat.</span>
            </div>

            {/* Extra Details Textarea */}
            <div>
              <label className="block text-xs font-bold text-stone-600 mb-1.5">Detail Tambahan (Opsional)</label>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="Contoh: Saya pemalu, target pasarnya ibu rumah tangga, ingin produk format template Canva..."
                rows={3}
                className="w-full bg-[#FAF9F5] border border-stone-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-800 transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-xs font-semibold flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-800 hover:bg-amber-900 disabled:bg-stone-400 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center space-x-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Sedang Merumus...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Tanya Guru AI Jago Jualan</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right Side: Results Display Panel */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm min-h-[300px] flex flex-col justify-between">
          
          {isLoading && (
            <div className="grow flex flex-col items-center justify-center py-16 space-y-4">
              <div className="relative">
                <div className="h-12 w-12 border-4 border-amber-800/20 border-t-amber-800 rounded-full animate-spin" />
                <Sparkles className="h-5 w-5 text-amber-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <p className="text-xs text-amber-900 font-bold uppercase tracking-wider animate-pulse">
                {loadingMessages[loadingMsgIdx]}
              </p>
            </div>
          )}

          {!isLoading && !result && (
            <div className="grow flex flex-col items-center justify-center py-16 text-center space-y-3">
              <HelpCircle className="h-12 w-12 text-stone-200" />
              <p className="text-stone-400 text-sm font-semibold max-w-sm">
                Isi form di samping untuk mulai konsultasi ide produk digital, hook naskah, atau strategi jualan instan.
              </p>
            </div>
          )}

          {!isLoading && result && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-150 pb-3">
                <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded uppercase tracking-wider">
                  Hasil Rekomendasi AI Guru
                </span>
                
                <button
                  onClick={handleCopyResult}
                  className="text-stone-500 hover:text-stone-900 text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer"
                >
                  {copied ? (
                    <span className="text-emerald-700 flex items-center"><CheckCircle className="h-3.5 w-3.5 mr-1" /> Tersalin!</span>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin Hasil</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted Text Box */}
              <div className="bg-[#FAF9F5] rounded-xl p-5 border border-stone-200 overflow-y-auto max-h-[400px]">
                <div className="space-y-1.5 prose max-w-none">
                  {parseMarkdownToHtml(result)}
                </div>
              </div>
            </div>
          )}

          {/* Prompt warning */}
          <div className="pt-4 border-t border-stone-100 text-[10px] text-stone-400 leading-relaxed">
            *Hasil konsultasi AI didasarkan pada model Gemini terbaru. Selalu padukan saran AI dengan aksi praktek harian yang konsisten untuk raihan hasil terbaik.
          </div>

        </div>

      </div>

    </div>
  );
}
