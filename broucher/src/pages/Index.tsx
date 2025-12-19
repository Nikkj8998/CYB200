import { useState, useEffect, useRef } from "react";
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
  const totalPages = services.length + 2; // Cover + Services + CTA

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const pageHeight = window.innerHeight;
      const newPage = Math.round(scrollTop / pageHeight);
      setCurrentPage(Math.min(newPage, totalPages - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalPages]);

  const navigateToPage = (page: number) => {
    window.scrollTo({
      top: page * window.innerHeight,
      behavior: "smooth"
    });
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
      <CoverPage />

      {/* Service Pages */}
      {services.map((service, index) => (
        <ServicePage
          key={service.step}
          step={service.step}
          title={service.title}
          items={service.items}
          icon={service.icon}
          isEven={index % 2 === 1}
        />
      ))}

      {/* CTA Page */}
      <CTAPage />
    </div>
  );
};

export default Index;
