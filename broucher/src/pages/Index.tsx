import { useState, useEffect, useRef, createRef } from "react";
import { 
  Search, 
  Share2, 
  MousePointerClick, 
  FileText, 
  Mail, 
  Code,
  Shield,
  Lock,
  AlertTriangle,
  Eye,
  HardDrive,
  BarChart3,
  Search as SearchIcon,
  Users,
  Phone,
  ArrowRight
} from "lucide-react";
import CoverPage from "@/components/brochure/CoverPage";
import ServicePage from "@/components/brochure/ServicePage";
import CTAPage from "@/components/brochure/CTAPage";
import BrochureNav from "@/components/brochure/BrochureNav";
import Logo from "@/components/brochure/Logo";

const digitalMarketingServices = [
  {
    step: 1,
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    items: [
      "Website Audit & Analysis",
      "Keyword Research",
      "AEO, GEO, SXO",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Local SEO",
      "Content Optimization",
      "Analytics & Reporting"
    ]
  },
  {
    step: 2,
    title: "Social Media Marketing (SMM)",
    icon: Share2,
    items: [
      "Social Media Strategy Development",
      "Content Creation & Design",
      "Social Media Account Management (Facebook, Instagram, LinkedIn, X, and more)",
      "Community Engagement",
      "Paid Social Advertising",
      "Analytics & Performance Tracking",
      "Influencer Collaboration (Optional)"
    ]
  },
  {
    step: 3,
    title: "Pay-Per-Click (PPC) Advertising",
    icon: MousePointerClick,
    items: [
      "Campaign Strategy & Planning",
      "Search Ads (Google & Bing Ads)",
      "Retargeting & Remarketing Campaigns",
      "Shopping Ads (E-commerce)",
      "Social Media Paid Ads",
      "Ad Copywriting & Creative Design",
      "Landing Page Optimization",
      "Ongoing Campaign Optimization",
      "Analytics & Reporting"
    ]
  },
  {
    step: 4,
    title: "Content Marketing",
    icon: FileText,
    items: [
      "Content Strategy & Planning",
      "Blog Writing & Articles",
      "Website Copywriting",
      "Social Media Content",
      "Infographics & Visual Content",
      "Video Content",
      "E-books, Whitepapers & Case Studies",
      "Email Content & Newsletters",
      "Content Optimization & SEO",
      "Content Performance Reporting"
    ]
  },
  {
    step: 5,
    title: "Email Marketing",
    icon: Mail,
    items: [
      "Email Campaign Strategy",
      "Email Design & Copywriting",
      "Email Automation & Workflows",
      "Newsletters",
      "Lead Nurturing & Customer Retention",
      "A/B Testing & Optimization",
      "List Management & Growth",
      "Analytics & Reporting"
    ]
  },
  {
    step: 6,
    title: "Web Design, CRO & Development",
    icon: Code,
    items: [
      "Custom Website Design",
      "Landing Page Design",
      "Website Redesign",
      "Speed & Performance Optimization",
      "SEO-Friendly Development",
      "UX & Heatmap Analysis",
      "Form Optimization",
      "Call-to-Action (CTA) Improvement",
      "Analytics & Reporting"
    ]
  }
];

const cybersecurityServices = [
  {
    step: 1,
    title: "VAPT Assessment",
    icon: Shield,
    items: [
      "Vulnerability Assessment & Penetration Testing",
      "Security Posture Reports",
      "Remediation Recommendations",
      "Compliance Validation",
      "Regular Security Testing"
    ]
  },
  {
    step: 2,
    title: "Endpoint Security",
    icon: Lock,
    items: [
      "Advanced Anti-Malware Protection",
      "Endpoint Detection & Response (EDR)",
      "Device Control & Management",
      "Behavior-Based Threat Detection",
      "Automated Threat Remediation"
    ]
  },
  {
    step: 3,
    title: "Firewall & IDS/IPS",
    icon: AlertTriangle,
    items: [
      "Enterprise-Grade Firewalls",
      "Intrusion Detection Systems",
      "Real-Time Threat Monitoring",
      "Automated Threat Response",
      "Network Segmentation"
    ]
  },
  {
    step: 4,
    title: "Email Security",
    icon: Mail,
    items: [
      "AI-Powered Threat Detection",
      "Anti-Phishing Protection",
      "Advanced Malware Filtering",
      "Encryption & Data Loss Prevention",
      "Email Threat Intelligence"
    ]
  },
  {
    step: 5,
    title: "Encryption & Backup",
    icon: HardDrive,
    items: [
      "Military-Grade AES-256 Encryption",
      "Secure Cloud Backup Solutions",
      "Rapid Disaster Recovery",
      "Data Protection at Rest & In Transit",
      "Compliance-Ready Backup"
    ]
  },
  {
    step: 6,
    title: "SIEM & SOC Monitoring",
    icon: BarChart3,
    items: [
      "Advanced Security Analytics",
      "24/7 Real-Time Log Analysis",
      "Threat Correlation & Detection",
      "Security Intelligence Feeds",
      "Automated Incident Response"
    ]
  },
  {
    step: 7,
    title: "Threat Hunting",
    icon: SearchIcon,
    items: [
      "Proactive Threat Hunting",
      "Forensic Analysis & Investigation",
      "Rapid Incident Response",
      "Threat Containment",
      "Post-Incident Reporting"
    ]
  },
  {
    step: 8,
    title: "Compliance Management",
    icon: Eye,
    items: [
      "ISO 27001 Compliance",
      "GDPR & HIPAA Support",
      "Gap Assessments & Audits",
      "Policy Development",
      "Continuous Compliance Monitoring"
    ]
  },
  {
    step: 9,
    title: "User Awareness Training",
    icon: Users,
    items: [
      "Interactive Security Training",
      "Simulated Phishing Campaigns",
      "Security Best Practices Education",
      "Compliance Training Programs",
      "Ongoing Support & Updates"
    ]
  }
];

const CybersecurityCoverPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[200px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-[150px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-10 md:mb-14 lg:mb-16 flex justify-center">
          <img src="/logo.png" alt="CybaemTech" className="h-20 md:h-28 lg:h-32 w-auto object-contain" />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
          Cybersecurity Services
        </h1>
        
        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8 rounded-full" />
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-body font-light tracking-wide mb-12">
          Complete. Comprehensive. Protective.
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <a 
            href="mailto:sales@cybaemtech.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-body">sales@cybaemtech.com</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <a 
            href="tel:+919028541383" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Phone size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-body">+91 90285 41383</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

const CybersecurityCTAPage = () => {
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
          Ready to Secure Your Business?
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-primary-foreground/80 font-body font-light leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
          Partner with Cybaem Tech for comprehensive cybersecurity solutions that protect your business from evolving threats.
        </p>
        
        {/* CTA Button */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button 
            onClick={() => {
              if (window.location.hostname === 'localhost') {
                window.location.href = 'http://localhost:5000/contact';
              } else {
                const protocol = window.location.protocol;
                const hostname = window.location.hostname;
                const contactUrl = `${protocol}//${hostname}/contact`;
                window.location.href = contactUrl;
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full font-body font-semibold text-lg shadow-elevated hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            Schedule Assessment
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

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Check for cybersecurity brochure request
  const params = new URLSearchParams(window.location.search);
  const brochureType = params.get('type');
  const services = brochureType === 'cybersecurity' ? cybersecurityServices : digitalMarketingServices;
  const totalPages = services.length + 2; // Cover + Services + CTA

  useEffect(() => {
    // Initialize refs array
    sectionRefs.current = sectionRefs.current.slice(0, totalPages);
  }, [totalPages]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const viewportCenter = scrollTop + window.innerHeight / 2;

      // Find which section is closest to viewport center
      let closestPage = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestPage = index;
        }
      });

      setCurrentPage(closestPage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalPages]);

  const navigateToPage = (page: number) => {
    const section = sectionRefs.current[page];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Navigation */}
      <BrochureNav 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onNavigate={navigateToPage} 
      />

      {/* Cover Page */}
      <div ref={(el) => { if (el) sectionRefs.current[0] = el; }}>
        {brochureType === 'cybersecurity' ? <CybersecurityCoverPage /> : <CoverPage />}
      </div>

      {/* Service Pages */}
      {services.map((service, index) => (
        <div 
          key={service.step}
          ref={(el) => { if (el) sectionRefs.current[index + 1] = el; }}
        >
          <ServicePage
            step={service.step}
            title={service.title}
            items={service.items}
            icon={service.icon}
            isEven={index % 2 === 1}
          />
        </div>
      ))}

      {/* CTA Page */}
      <div ref={(el) => { if (el) sectionRefs.current[services.length + 1] = el; }}>
        {brochureType === 'cybersecurity' ? <CybersecurityCTAPage /> : <CTAPage />}
      </div>
    </div>
  );
};

export default Index;
