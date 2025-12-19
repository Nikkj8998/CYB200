import { ChevronUp, ChevronDown, Download } from "lucide-react";
import { useState } from "react";

interface BrochureNavProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

const BrochureNav = ({ currentPage, totalPages, onNavigate }: BrochureNavProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const html2pdf = (window as any).html2pdf;
      if (!html2pdf) {
        console.error("html2pdf library not loaded");
        return;
      }

      const element = document.body;
      const opt = {
        margin: 10,
        filename: "Digital-Marketing-Brochure.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
      };

      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to download PDF:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="fixed right-8 top-8 z-50 flex flex-col items-center gap-3">
        <button
          onClick={downloadPDF}
          disabled={isDownloading}
          className="w-10 h-10 rounded-full bg-primary shadow-lg border border-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Download PDF"
          title="Download as PDF"
        >
          <Download size={20} />
        </button>
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      <button
        onClick={() => onNavigate(Math.max(0, currentPage - 1))}
        disabled={currentPage === 0}
        className="w-10 h-10 rounded-full bg-card shadow-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronUp size={20} />
      </button>
      
      <div className="flex flex-col gap-2 py-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentPage === i 
                ? "bg-primary scale-125" 
                : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={() => onNavigate(Math.min(totalPages - 1, currentPage + 1))}
        disabled={currentPage === totalPages - 1}
        className="w-10 h-10 rounded-full bg-card shadow-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronDown size={20} />
      </button>
      </div>
    </>
  );
};

export default BrochureNav;
