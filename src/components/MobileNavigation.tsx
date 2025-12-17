import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, X, Share2, Shield, Laptop, Network, Cloud, Briefcase, Code, UsersRound, Brain } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNavigation = ({
  isOpen,
  onToggle
}: MobileNavigationProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [openServiceCategory, setOpenServiceCategory] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const handleResourcesClick = () => {
    if (location.pathname === "/resources") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onToggle();
  };

  const toggleServiceCategory = (categoryId: string) => {
    setOpenServiceCategory(openServiceCategory === categoryId ? null : categoryId);
  };

  const serviceCategories = [
    {
      id: "digital-marketing",
      name: "Digital Marketing Services",
      icon: Share2,
      path: "/digital-marketing",
      services: [
        { name: "Search Engine Optimization (SEO)", hash: "search-engine-optimization-seo" },
        { name: "Pay-Per-Click (PPC) & Google Ads", hash: "pay-per-click-ppc-google-ads" },
        { name: "Email Marketing Campaigns", hash: "email-marketing-campaigns" },
        { name: "Website Analytics & Reporting", hash: "website-analytics-reporting" },
        { name: "Social Media Marketing & Management", hash: "social-media-marketing-management" },
        { name: "Content Marketing & Copywriting", hash: "content-marketing-copywriting" },
        { name: "Branding & Online Reputation", hash: "branding-online-reputation" },
        { name: "Influencer Marketing", hash: "influencer-marketing" },
        { name: "Video Production / Reels", hash: "video-production-reels" },
      ]
    },
    {
      id: "cloud-hosting",
      name: "Cloud, Hosting & Microsoft 365",
      icon: Cloud,
      path: "/cloud-solutions",
      services: [
        "Web & Email Hosting",
        "VPS & Dedicated Hosting",
        "Cloud Infrastructure (Azure, AWS, GCP)",
        "Backup & Disaster Recovery",
        "Cloud Security & Cost Optimization",
        "Domain Registration & SSL",
        "Microsoft 365 Licensing & Setup",
        "Email Migration",
        "SharePoint & OneDrive Setup",
        "Teams Implementation & Training",
      ]
    },
    {
      id: "ai-analytics",
      name: "AI and Data Analytics",
      icon: Brain,
      path: "/ai-data-analytics",
      services: [
        { name: "Machine Learning & AI Development", hash: "machine-learning-ai-development" },
        { name: "Business Intelligence & Analytics", hash: "business-intelligence-analytics" },
        { name: "Real-Time Data Processing", hash: "real-time-data-processing" },
        { name: "Intelligent Automation", hash: "intelligent-automation" },
        { name: "Data Engineering & Pipelines", hash: "data-engineering-pipelines" },
        { name: "Computer Vision & NLP", hash: "computer-vision-nlp" },
      ]
    },
    {
      id: "it-infrastructure",
      name: "IT Infrastructure & Networking",
      icon: Network,
      path: "/managed-services",
      services: [
        "Windows & Linux Deployment",
        "Virtualization (VMware, Hyper-V)",
        "Server Migration & Upgrades",
        "LAN/WAN Setup & Management",
        "Firewall Configuration",
        "VPN & Remote Connectivity",
        "Network Monitoring & Optimization",
        "Datacenter Setup",
        "SAN/NAS Storage Solutions",
      ]
    },
    {
      id: "it-support",
      name: "IT Support, Remote Support & AMC",
      icon: Laptop,
      path: "/computer-amc-services",
      services: [
        "Preventive & Corrective Maintenance",
        "Hardware & Software Support",
        "Onsite & Remote Support",
        "SLA Driven Services",
        "Helpdesk & Ticketing",
        "RMM Monitoring",
        "Antivirus & Malware Removal",
        "OS/Software Installations",
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Solutions",
      icon: Shield,
      path: "/cybersecurity-services",
      services: [
        "VAPT (Vulnerability Assessment & Penetration Testing)",
        "Endpoint Security & Antivirus",
        "Firewall, IDS/IPS",
        "Email Security",
        "Encryption & Secure Backup",
        "SIEM & SOC Monitoring",
        "Threat Hunting & Incident Response",
        "Compliance (ISO, GDPR, HIPAA)",
        "User Awareness Training",
      ]
    },
    {
      id: "consulting",
      name: "ITSM, Compliance & Consulting",
      icon: Briefcase,
      path: "/managed-services",
      services: [
        "ITIL Process Implementation",
        "Incident/Change/Problem Management",
        "Service Desk Setup",
        "IT Strategy & Roadmap",
        "Technology Gap Analysis",
        "Digital Transformation",
        "IT Policy & Governance",
        "Risk Management Audits",
        "Regulatory Compliance (PCI-DSS, SOC 2)",
      ]
    },
    {
      id: "software-dev",
      name: "Software Development & Web Design",
      icon: Code,
      path: "/enterprise-solutions",
      services: [
        "Website Development",
        "Web Applications",
        "Mobile App Development",
        "ERP Development",
        "CRM Development",
        "UI/UX Design",
        "API Integrations",
        "Website Maintenance",
      ]
    },
    {
      id: "it-staffing",
      name: "IT Staff Augmentation",
      icon: UsersRound,
      path: "/it-augmentation",
      services: [
        "Dedicated Onsite IT Engineers",
        "Remote IT Specialists",
        "Project-Based Staffing",
        "Helpdesk Outsourcing",
        "Network & System Admins",
        "Contract / Long-Term Hiring",
      ]
    },
  ];

  const industries = [
    { name: "IT & Software", hash: "it-software" },
    { name: "Manufacturing", hash: "manufacturing" },
    { name: "Healthcare", hash: "healthcare" },
    { name: "Finance", hash: "finance" },
    { name: "Education", hash: "education" },
    { name: "Ecommerce", hash: "ecommerce" },
    { name: "Logistics", hash: "logistics" },
    { name: "SMEs & Corporates", hash: "smes-corporates" },
  ];

  const aboutUsLinks = [
    { label: "About CybaemTech", path: "/about" },
    { label: "Leadership and Partnership", path: "/leadership" },
    { label: "Job Opportunities", path: "/careers" },
    { label: "Life at CybaemTech", path: "/life-at-cybaemtech" },
    { label: "Train with CybaemTech", path: "https://skilltonitedu.com/", external: true },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetContent side="right" className="w-80 bg-black border-gray-800 p-0 flex flex-col">
        <SheetHeader className="px-6 py-4 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white text-lg font-bold">
              CybaemTech
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={onToggle} className="touch-target text-white hover:bg-white/10">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>
        
        <nav className="flex flex-col py-2 overflow-y-auto flex-1 mobile-nav-scrollbar">
          {/* Services Menu */}
          <div className="mb-1">
            <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between px-5 py-3 text-left text-white hover:bg-white/10 touch-target">
                  <span className="font-medium">Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-0 bg-gray-900/50">
                {serviceCategories.map((category) => (
                  <Collapsible 
                    key={category.id} 
                    open={openServiceCategory === category.id} 
                    onOpenChange={() => toggleServiceCategory(category.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between px-7 py-2.5 text-left text-gray-300 hover:text-white hover:bg-white/5 touch-target">
                        <div className="flex items-center gap-2">
                          <category.icon className="h-4 w-4 text-primary/70" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <ChevronDown className={`h-3 w-3 transition-transform ${openServiceCategory === category.id ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-gray-900/80">
                      {category.services.map((service, index) => {
                        const serviceName = typeof service === 'string' ? service : service.name;
                        const serviceHash = typeof service === 'string' ? '' : `#${service.hash}`;
                        return (
                          <Link 
                            key={index}
                            to={`${category.path}${serviceHash}`}
                            onClick={onToggle}
                            className="block px-10 py-2 text-xs text-gray-400 hover:text-primary hover:bg-white/5 transition-colors touch-target"
                          >
                            {serviceName}
                          </Link>
                        );
                      })}
                      <Link 
                        to={category.path} 
                        onClick={onToggle}
                        className="block px-10 py-2 text-xs text-primary font-medium hover:bg-white/5 transition-colors touch-target"
                      >
                        View All Services →
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Industries We Serve */}
          <div className="mb-1">
            <Collapsible open={industriesOpen} onOpenChange={setIndustriesOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between px-5 py-3 text-left text-white hover:bg-white/10 touch-target">
                  <span className="font-medium">Industries We Serve</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-0 bg-gray-900/50">
                {industries.map((industry, index) => (
                  <li key={index} className="list-none">
                    <Link 
                      to={`/industries#${industry.hash}`}
                      onClick={onToggle} 
                      className="block px-7 py-2 text-sm transition-colors touch-target text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* About Us */}
          <div className="mb-1">
            <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between px-5 py-3 text-left text-white hover:bg-white/10 touch-target">
                  <span className="font-medium">About Us</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-0 bg-gray-900/50">
                {aboutUsLinks.map((link, index) => (
                  <li key={index} className="list-none">
                    {link.external ? (
                      <a 
                        href={link.path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={onToggle}
                        className="block px-7 py-2 text-sm transition-colors touch-target text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        onClick={onToggle} 
                        className={`block px-7 py-2 text-sm transition-colors touch-target ${isActive(link.path) ? 'text-primary bg-primary/10 border-r-2 border-primary' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Resources */}
          <div className="mb-1">
            <Link 
              to="/resources" 
              onClick={handleResourcesClick} 
              className={`block px-5 py-3 font-medium transition-colors touch-target ${isActive("/resources") ? 'text-primary bg-primary/10 border-r-2 border-primary' : 'text-white hover:bg-white/10'}`}
            >
              Resources
            </Link>
          </div>
          
          {/* Mobile-specific contact button only */}
          <div className="px-6 pt-6 border-t border-gray-800 mt-4 flex flex-col gap-3">
            <Link to="/contact?source=mobile-menu" onClick={onToggle}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white touch-target">
                Contact
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
