import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON parsing
app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY is not defined in environment variables.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API: Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// API: AI Marketing & Product Consultant
app.post("/api/ai/consult", async (req, res) => {
  try {
    const { type, niche, detail } = req.body;

    if (!niche) {
      res.status(400).json({ error: "Niche is required" });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      res.status(503).json({
        error: "Fitur AI saat ini belum terkonfigurasi. Silakan tambahkan GEMINI_API_KEY Anda di Settings > Secrets.",
      });
      return;
    }

    let prompt = "";
    let systemInstruction = "";

    if (type === "idea") {
      systemInstruction = `Anda adalah ahli riset produk digital Indonesia. Berikan rekomendasi produk digital yang laris manis (Ebook, Canva template, video tutorial, checklist, dll) yang bisa dibuat modal HP tanpa tampil wajah.`;
      prompt = `Berikan 3 ide produk digital spesifik untuk niche: "${niche}". Detail tambahan: "${detail || 'Tidak ada'}". 
      Untuk setiap ide, berikan:
      1. Judul Produk yang Menarik (Catchy)
      2. Format Produk (Ebook/Template/Tutorial)
      3. Alasan mengapa ini laku (Pemicu psikologis pembeli)
      4. Ide Bonus Tambahan agar penawaran makin menggiurkan.
      
      Gunakan gaya bahasa Indonesia yang santai, persuasif, profesional, dan berorientasi hasil (cuan dari rumah). Gunakan format Markdown yang rapi.`;
    } else if (type === "hook") {
      systemInstruction = `Anda adalah Copywriter Media Sosial dan Ahli Konten Faceless viral di TikTok dan Instagram. Tugas Anda membuat hook 3 detik pertama yang sangat mengundang rasa penasaran untuk memicu audiens menonton video sampai habis.`;
      prompt = `Buat 5 variasi video hook viral untuk mempromosikan produk digital di niche: "${niche}". Detail tambahan: "${detail || 'Tidak ada'}".
      Format variasi hook:
      - Tipe Hook (misal: Kontroversial, Edukatif, Rasa Takut Ketinggalan/FOMO, Keingintahuan)
      - Kalimat Hook (untuk ditaruh di teks video / diucapkan)
      - Petunjuk Visual (ide video estetik faceless yang cocok sebagai background, misal: menyeduh kopi, typing di laptop di kafe estetik, dll)
      - Call to Action (ajakan klik link di bio)
      
      Gunakan gaya bahasa Indonesia modern, kasual, persuasif, dan sangat clicky tapi tidak murahan. Gunakan format Markdown yang rapi.`;
    } else {
      systemInstruction = `Anda adalah pakar Digital Marketing Indonesia. Bantu pengusaha pemula menyusun strategi penjualan produk digital mereka dengan taktis.`;
      prompt = `Berikan strategi jualan produk digital taktis 3 langkah untuk niche: "${niche}". Detail tambahan: "${detail || 'Tidak ada'}".
      Jelaskan cara menarik pembeli organik tanpa modal iklan dari nol sampai pecah telur pertama.
      Gunakan bahasa Indonesia yang jelas, optimis, ramah, dan aplikatif. Gunakan format Markdown yang rapi.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.8,
      },
    });

    res.json({ result: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan sistem saat menghubungi AI: " + error.message });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode serving static dist files...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
