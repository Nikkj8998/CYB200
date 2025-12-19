import { Mail, Phone } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Logo from "./Logo";

interface ServicePageProps {
  step: number;
  title: string;
  items: string[];
  icon: LucideIcon;
  isEven?: boolean;
}

const ServicePage = ({ step, title, items, icon: Icon, isEven = false }: ServicePageProps) => {
  return (
    <section className={`min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden ${isEven ? 'bg-secondary/30' : 'bg-background'}`}>
      {/* Background decoration */}
      <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-primary/[0.03] ${isEven ? 'rounded-r-[200px]' : 'rounded-l-[200px]'}`} />
      
      {/* Header with logo */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-24">
        <Logo className="scale-75 origin-left" />
      </div>
      
      <div className="container mx-auto relative z-10 pt-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={`${isEven ? 'lg:order-2' : ''} animate-fade-in`}>
            {/* Step Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                {step}
              </span>
              <span className="font-body tracking-wide">Step {step}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              {title}
            </h2>
            
            {/* Service Items */}
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                  <span className="text-muted-foreground font-body text-lg leading-relaxed group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Icon Side */}
          <div className={`${isEven ? 'lg:order-1' : ''} flex items-center justify-center animate-scale-in`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              {/* Icon container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center">
                <Icon size={80} className="text-primary-foreground md:w-24 md:h-24 lg:w-32 lg:h-32" strokeWidth={1.5} />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-150" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer contact */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <a href="mailto:sales@cybaemtech.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={14} />
          <span className="font-body">sales@cybaemtech.com</span>
        </a>
        <a href="tel:+919028541383" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={14} />
          <span className="font-body">+91 90285 41383</span>
        </a>
      </div>
    </section>
  );
};

export default ServicePage;
