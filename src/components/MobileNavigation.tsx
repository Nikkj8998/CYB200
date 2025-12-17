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
        { name: "Web & Email Hosting", hash: "" },
        { name: "VPS & Dedicated Hosting", hash: "" },
        { name: "Cloud Infrastructure (Azure, AWS, GCP)", hash: "" },
        { name: "Backup & Disaster Recovery", hash: "" },
        { name: "Cloud Security & Cost Optimization", hash: "" },
        { name: "Domain Registration & SSL", hash: "" },
        { name: "Microsoft 365 Licensing & Setup", hash: "" },
        { name: "Email Migration", hash: "" },
        { name: "SharePoint & OneDrive Setup", hash: "" },
        { name: "Teams Implementation & Training", hash: "" },
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
        { name: "Windows & Linux Deployment", hash: "" },
        { name: "Virtualization (VMware, Hyper-V)", hash: "" },
        { name: "Server Migration & Upgrades", hash: "" },
        { name: "LAN/WAN Setup & Management", hash: "" },
        { name: "Firewall Configuration", hash: "" },
        { name: "VPN & Remote Connectivity", hash: "" },
        { name: "Network Monitoring & Optimization", hash: "" },
        { name: "Datacenter Setup", hash: "" },
        { name: "SAN/NAS Storage Solutions", hash: "" },
      ]
    },
    {
      id: "it-support",
      name: "IT Support, Remote Support & AMC",
      icon: Laptop,
      path: "/computer-amc-services",
      services: [
        { name: "Preventive & Corrective Maintenance", hash: "" },
        { name: "Hardware & Software Support", hash: "" },
        { name: "Onsite & Remote Support", hash: "" },
        { name: "SLA Driven Services", hash: "" },
        { name: "Helpdesk & Ticketing", hash: "" },
        { name: "RMM Monitoring", hash: "" },
        { name: "Antivirus & Malware Removal", hash: "" },
        { name: "OS/Software Installations", hash: "" },
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Solutions",
      icon: Shield,
      path: "/cybersecurity-services",
      services: [
        { name: "VAPT (Vulnerability Assessment & Penetration Testing)", hash: "" },
        { name: "Endpoint Security & Antivirus", hash: "" },
        { name: "Firewall, IDS/IPS", hash: "" },
        { name: "Email Security", hash: "" },
        { name: "Encryption & Secure Backup", hash: "" },
        { name: "SIEM & SOC Monitoring", hash: "" },
        { name: "Threat Hunting & Incident Response", hash: "" },
        { name: "Compliance (ISO, GDPR, HIPAA)", hash: "" },
        { name: "User Awareness Training", hash: "" },
      ]
    },
    {
      id: "consulting",
      name: "ITSM, Compliance & Consulting",
      icon: Briefcase,
      path: "/managed-services",
      services: [
        { name: "ITIL Process Implementation", hash: "" },
        { name: "Incident/Change/Problem Management", hash: "" },
        { name: "Service Desk Setup", hash: "" },
        { name: "IT Strategy & Roadmap", hash: "" },
        { name: "Technology Gap Analysis", hash: "" },
        { name: "Digital Transformation", hash: "" },
        { name: "IT Policy & Governance", hash: "" },
        { name: "Risk Management Audits", hash: "" },
        { name: "Regulatory Compliance (PCI-DSS, SOC 2)", hash: "" },
      ]
    },
    {
      id: "software-dev",
      name: "Software Development & Web Design",
      icon: Code,
      path: "/enterprise-solutions",
      services: [
        { name: "Website Development", hash: "website-development" },
        { name: "Web Applications", hash: "web-applications" },
        { name: "Mobile App Development", hash: "mobile-app-development" },
        { name: "ERP Development", hash: "erp-development" },
        { name: "CRM Development", hash: "crm-development" },
        { name: "UI/UX Design", hash: "ui-ux-design" },
        { name: "API Integrations", hash: "api-integrations" },
        { name: "Website Maintenance", hash: "website-maintenance" },
      ]
    },
    {
      id: "it-staffing",
      name: "IT Staff Augmentation",
      icon: UsersRound,
      path: "/it-augmentation",
      services: [
        { name: "Dedicated Onsite IT Engineers", hash: "" },
        { name: "Remote IT Specialists", hash: "" },
        { name: "Project-Based Staffing", hash: "" },
        { name: "Helpdesk Outsourcing", hash: "" },
        { name: "Network & System Admins", hash: "" },
        { name: "Contract / Long-Term Hiring", hash: "" },
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
