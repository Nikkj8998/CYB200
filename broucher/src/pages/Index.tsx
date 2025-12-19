import { useState, useEffect, useRef, createRef } from "react";
import { 
  Search, 
  Share2, 
  MousePointerClick, 
  FileText, 
  Mail, 
  Code 
} from "lucide-react";
import CoverPage from "@/components/brochure/CoverPage";
import ServicePage from "@/components/brochure/ServicePage";
import CTAPage from "@/components/brochure/CTAPage";
import BrochureNav from "@/components/brochure/BrochureNav";

const services = [
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

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
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
        <CoverPage />
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
        <CTAPage />
      </div>
    </div>
  );
};

export default Index;
