import { ChevronUp, ChevronDown } from "lucide-react";

interface BrochureNavProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

const BrochureNav = ({ currentPage, totalPages, onNavigate }: BrochureNavProps) => {
  return (
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
  );
};

export default BrochureNav;
