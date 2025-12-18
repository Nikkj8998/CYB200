import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Users,
  Zap,
  TrendingUp,
  Headphones,
  Code,
  Palette,
  Plug,
  Wrench,
  Building2,
  Heart,
  Truck,
  Monitor,
  GraduationCap,
  Building,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";

const SoftwareDevelopment = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const softwareServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "SEO-friendly, fast, and responsive websites designed to represent your brand professionally",
      features: ["SEO Optimized", "Responsive Design", "Fast Loading", "User-Friendly"]
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web applications that streamline business processes and manage data efficiently",
      features: ["Scalable", "Secure", "Cloud-Ready", "API Integrated"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Secure and user-friendly Android, iOS, and cross-platform mobile apps for real-world use",
      features: ["iOS & Android", "Cross-Platform", "Offline Support", "Push Notifications"]
    },
    {
      icon: Database,
      title: "ERP Development",
      description: "Centralized ERP solutions to manage finance, inventory, HR, and operations seamlessly",
      features: ["Finance Module", "Inventory Mgmt", "HR Automation", "Real-time Reports"]
    },
    {
      icon: Users,
      title: "CRM Development",
      description: "Custom CRM platforms to manage leads, sales pipelines, and customer interactions effectively",
      features: ["Lead Management", "Sales Pipeline", "Customer Portal", "Analytics"]
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "Intuitive, modern, and user-focused designs that improve usability and engagement",
      features: ["Wireframing", "Prototyping", "User Research", "Accessibility"]
    },
    {
      icon: Plug,
      title: "API Integrations",
      description: "Secure API integrations connecting your software with payment gateways and analytics",
      features: ["Payment Gateway", "Third-party APIs", "Cloud Integration", "Real-time Sync"]
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      description: "Ongoing monitoring, updates, security patches, and performance optimization services",
      features: ["24/7 Monitoring", "Security Updates", "Backup Systems", "Performance Tuning"]
    }
  ];

  const whyChoosePoints = [
    {
      icon: Building2,
      title: "Enterprise-Grade Architecture",
      description: "Built with scalability and security at the core, using modern tech stacks and best practices.",
      color: "from-emerald-400 to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Pricing",
      description: "Premium quality solutions at competitive rates, maximizing your ROI without compromise.",
      color: "from-blue-400 to-emerald-400"
    },
    {
      icon: Zap,
      title: "Scalable & Secure",
      description: "Future-proof solutions that grow with your business, protected by industry standards.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Round-the-clock maintenance and support to ensure your systems run smoothly always.",
      color: "from-orange-400 to-red-400"
    }
  ];

  const developmentProcess = [
    { number: "01", title: "Requirement Gathering", description: "Deep dive into your business needs, goals, and technical requirements", icon: CheckCircle },
    { number: "02", title: "UI/UX & Architecture", description: "Design intuitive interfaces and plan scalable system architecture", icon: Palette },
    { number: "03", title: "Agile Development", description: "Iterative development with regular updates and feedback loops", icon: Code },
    { number: "04", title: "Testing & QA", description: "Rigorous testing to ensure quality, performance, and security standards", icon: Shield },
    { number: "05", title: "Deployment", description: "Smooth deployment to production with zero downtime strategies", icon: Zap },
    { number: "06", title: "Support & Optimization", description: "Ongoing maintenance, monitoring, and continuous improvement services", icon: Headphones }
  ];

  const industries = [
    { icon: Building2, label: "Manufacturing" },
    { icon: Heart, label: "Healthcare" },
    { icon: Truck, label: "Logistics" },
    { icon: Monitor, label: "IT & SaaS" },
    { icon: Layers, label: "Finance" },
    { icon: GraduationCap, label: "Education" },
    { icon: Building, label: "Enterprises" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black overflow-hidden flex items-center"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${
            heroInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-4 py-2">
              <Zap className="w-3 h-3 mr-2" />
              Enterprise Software Solutions
            </Badge>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              Enterprise
              <br />
              Software
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Development</span>
              <br />
              & Web Design
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              We design, develop, and maintain scalable software solutions that help businesses automate operations, improve customer experience, and grow digitally — at a cost-effective price.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link to="/contact">
                <Button className="group px-10 py-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button className="px-10 py-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg border-2 border-white/20 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
                <Code className="mr-3 w-5 h-5" />
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="transition-all duration-500 hover:transform hover:scale-110">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="transition-all duration-500 hover:transform hover:scale-110">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="transition-all duration-500 hover:transform hover:scale-110">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative h-96 transition-all duration-1000 transform ${
            heroInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-100" />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-200" />
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">
                  Live Status: 99.9% Uptime
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-full" />
                <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded w-5/6" />
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-4 hover:bg-emerald-500/10 transition-all duration-300">
                    <Code className="text-emerald-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Clean Code</div>
                  </div>
                  <div className="border border-blue-500/30 bg-blue-500/5 rounded-lg p-4 hover:bg-blue-500/10 transition-all duration-300">
                    <Layers className="text-blue-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Scalable</div>
                  </div>
                  <div className="border border-purple-500/30 bg-purple-500/5 rounded-lg p-4 hover:bg-purple-500/10 transition-all duration-300">
                    <Zap className="text-purple-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Fast Deploy</div>
                  </div>
                  <div className="border border-pink-500/30 bg-pink-500/5 rounded-lg p-4 hover:bg-pink-500/10 transition-all duration-300">
                    <Shield className="text-pink-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Slate */}
      <section
        ref={servicesRef}
        className="py-24 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-4 py-2">
              Our Expertise
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Software
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From web development to enterprise systems, we deliver end-to-end solutions tailored to your business needs with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 transform hover:scale-105 ${
                    servicesInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                        <Icon className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-bold text-lg text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Different Black Shade */}
      <section
        ref={whyChooseRef}
        className="py-24 bg-gradient-to-b from-black to-slate-900/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Businesses Trust
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Cybaem Tech</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results and transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 transform hover:-translate-y-2 ${
                    whyChooseInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                    <Card className="relative h-full bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-3">
                          {point.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Slate 900 */}
      <section
        ref={processRef}
        className="py-24 bg-gradient-to-b from-slate-900/50 via-slate-900 to-black relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-4 py-2">
              Our Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How We Build
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our proven development process ensures quality delivery, on time and within budget with transparent communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 transform group ${
                    processInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full">
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg shadow-emerald-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                        {step.number}
                      </div>
                      <div className="ml-8">
                        <h3 className="font-bold text-lg text-white mb-3 mt-4 flex items-center gap-2">
                          <Icon className="w-5 h-5 text-emerald-400" />
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section - Different Black Shade */}
      <section
        ref={industriesRef}
        className="py-24 bg-gradient-to-b from-black via-slate-900/30 to-black relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-4 py-2">
              Industries We Serve
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Industries
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Worldwide</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our solutions power businesses across diverse sectors, each tailored to industry-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 transform hover:scale-110 ${
                    industriesInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                        <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-125 transition-transform" />
                      </div>
                      <p className="text-sm font-semibold text-white">
                        {industry.label}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-8 px-4 py-2">
            Ready to Get Started
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Business?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            Get a free consultation with our experts. Let's discuss how we can help you achieve your digital goals with custom software solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button className="group px-10 py-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300">
                Talk to Our Experts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/919028541383?text=Hi%20CybaemTech%2C%20I%20want%20to%20know%20about%20software%20development%20services" target="_blank" rel="noopener noreferrer">
              <Button className="px-10 py-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg border-2 border-white/20 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
                <Clock className="mr-3 w-5 h-5" />
                WhatsApp us
              </Button>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-10">
            ✓ Serving businesses across Pune, Mumbai, Bangalore, Delhi, Hyderabad and globally in USA, UAE, UK & Europe.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
