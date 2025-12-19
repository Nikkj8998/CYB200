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

      // Create a wrapper for PDF content with print-optimized styles
      const pdfWrapper = document.createElement('div');
      pdfWrapper.style.cssText = 'position: absolute; left: -9999px; top: -9999px; width: 210mm; background: white;';
      
      // Get all sections
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section, index) => {
        // Clone the section
        const clone = section.cloneNode(true) as HTMLElement;
        
        // Optimize styles for PDF
        clone.style.cssText = `
          display: block !important;
          page-break-after: always !important;
          padding: 20px !important;
          min-height: auto !important;
          height: auto !important;
          width: 100% !important;
          break-after: page;
          overflow: visible !important;
        `;

        // Reduce font sizes for PDF
        clone.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, a').forEach(element => {
          const el = element as HTMLElement;
          const fontSize = window.getComputedStyle(el).fontSize;
          const currentSize = parseFloat(fontSize);
          
          if (el.tagName === 'H1') el.style.fontSize = '24px !important';
          else if (el.tagName === 'H2') el.style.fontSize = '20px !important';
          else if (el.tagName === 'H3') el.style.fontSize = '16px !important';
          else if (el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'A') {
            el.style.fontSize = '12px !important';
          }
          else if (el.tagName === 'LI') el.style.fontSize = '12px !important';
        });

        // Remove navigation elements from PDF
        clone.querySelectorAll('button, nav, [class*="nav"], [class*="fixed"]').forEach(el => {
          (el as HTMLElement).style.display = 'none !important';
        });

        pdfWrapper.appendChild(clone);
      });

      document.body.appendChild(pdfWrapper);

      const opt = {
        margin: [5, 5, 5, 5],
        filename: "Digital-Marketing-Brochure.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(pdfWrapper).save();
      
      // Cleanup
      document.body.removeChild(pdfWrapper);
    } catch (error) {
      console.error("Failed to download PDF:", error);
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
