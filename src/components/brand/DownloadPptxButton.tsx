import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PPTX_URL } from "./shared";

export default function DownloadPptxButton() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setDone(false);
    try {
      const res = await fetch(PPTX_URL);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AURUM_Brand_Presentation_v2.pptx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch (e) {
      console.error("Fetch error:", e, PPTX_URL);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:opacity-80 disabled:opacity-50"
      style={{ backgroundColor: "var(--ivory)", color: "var(--graphite)" }}
    >
      <Icon
        name={loading ? "Loader" : done ? "CheckCircle" : "Download"}
        size={16}
        className={loading ? "animate-spin" : ""}
      />
      <span className="font-body text-xs tracking-[0.2em] uppercase">
        {loading ? "Генерируем..." : done ? "Готово!" : "Скачать презентацию .pptx"}
      </span>
    </button>
  );
}