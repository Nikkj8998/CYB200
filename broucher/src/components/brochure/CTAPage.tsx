import { Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const CTAPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-br-[300px]" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-tl-[200px]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center animate-fade-in">
          <Logo variant="light" className="scale-125" />
        </div>
        
        {/* Main CTA Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-8 leading-tight animate-fade-in mt-8" style={{ animationDelay: '200ms' }}>
          Ready to Grow Your Brand?
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-primary-foreground/80 font-body font-light leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
          Partner with Cybaem Tech for ROI-driven digital marketing solutions that deliver measurable growth.
        </p>
        
        {/* CTA Button */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button 
            onClick={() => {
              const contactUrl = window.location.hostname === 'localhost' 
                ? 'http://localhost:5000/contact'
                : `${window.location.protocol}//${window.location.hostname.replace(':8080', '')}:5000/contact`;
              window.location.href = contactUrl;
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full font-body font-semibold text-lg shadow-elevated hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            Get Started Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <a 
            href="mailto:sales@cybaemtech.com" 
            className="flex items-center gap-3 hover:text-primary-foreground transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Mail size={18} />
            </div>
            <span className="font-body">sales@cybaemtech.com</span>
          </a>
          
          <a 
            href="tel:+919028541383" 
            className="flex items-center gap-3 hover:text-primary-foreground transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
              <Phone size={18} />
            </div>
            <span className="font-body">+91 90285 41383</span>
          </a>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
    </section>
  );
};

export default CTAPage;
