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

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const softwareServices = [
    { icon: Globe, title: "Website Development", description: "SEO-friendly, fast, and responsive websites designed to represent your brand professionally", features: ["SEO Optimized", "Responsive Design", "Fast Loading", "User-Friendly"] },
    { icon: Code, title: "Web Application Development", description: "Custom web applications that streamline business processes and manage data efficiently", features: ["Scalable", "Secure", "Cloud-Ready", "API Integrated"] },
    { icon: Smartphone, title: "Mobile App Development", description: "Secure and user-friendly Android, iOS, and cross-platform mobile apps for real-world use", features: ["iOS & Android", "Cross-Platform", "Offline Support", "Push Notifications"] },
    { icon: Database, title: "ERP Development", description: "Centralized ERP solutions to manage finance, inventory, HR, and operations seamlessly", features: ["Finance Module", "Inventory Mgmt", "HR Automation", "Real-time Reports"] },
    { icon: Users, title: "CRM Development", description: "Custom CRM platforms to manage leads, sales pipelines, and customer interactions effectively", features: ["Lead Management", "Sales Pipeline", "Customer Portal", "Analytics"] },
    { icon: Palette, title: "UI / UX Design", description: "Intuitive, modern, and user-focused designs that improve usability and engagement", features: ["Wireframing", "Prototyping", "User Research", "Accessibility"] },
    { icon: Plug, title: "API Integrations", description: "Secure API integrations connecting your software with payment gateways and analytics", features: ["Payment Gateway", "Third-party APIs", "Cloud Integration", "Real-time Sync"] },
    { icon: Wrench, title: "Website Maintenance & Support", description: "Ongoing monitoring, updates, security patches, and performance optimization services", features: ["24/7 Monitoring", "Security Updates", "Backup Systems", "Performance Tuning"] }
  ];

  const whyChoosePoints = [
    { icon: Building2, title: "Enterprise-Grade Architecture", description: "Built with scalability and security at the core, using modern tech stacks and best practices." },
    { icon: TrendingUp, title: "Cost-Effective Pricing", description: "Premium quality solutions at competitive rates, maximizing your ROI without compromise." },
    { icon: Zap, title: "Scalable & Secure", description: "Future-proof solutions that grow with your business, protected by industry standards." },
    { icon: Headphones, title: "Dedicated Support", description: "Round-the-clock maintenance and support to ensure your systems run smoothly always." }
  ];

  const developmentProcess = [
    { step: "01", title: "Requirement Gathering", description: "Deep dive into your business needs, goals, and technical requirements", icon: CheckCircle },
    { step: "02", title: "UI/UX & Architecture", description: "Design intuitive interfaces and plan scalable system architecture", icon: Palette },
    { step: "03", title: "Agile Development", description: "Iterative development with regular updates and feedback loops", icon: Code },
    { step: "04", title: "Testing & QA", description: "Rigorous testing to ensure quality, performance, and security standards", icon: Shield },
    { step: "05", title: "Deployment", description: "Smooth deployment to production with zero downtime strategies", icon: Zap },
    { step: "06", title: "Support & Optimization", description: "Ongoing maintenance, monitoring, and continuous improvement services", icon: Headphones }
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
      <section ref={heroRef} className="relative min-h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a3a3a 100%)' }}>
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-emerald-500 opacity-20 rounded-full top-[5%] left-[-10%]" style={{ animation: 'float 20s infinite ease-in-out', animationDelay: '0s' }}></div>
          <div className="absolute w-[300px] h-[300px] bg-cyan-500 opacity-15 top-[40%] right-[-5%]" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'float 20s infinite ease-in-out', animationDelay: '5s' }}></div>
          <div className="absolute w-[250px] h-[250px] bg-blue-500 opacity-10 rounded-full bottom-[10%] left-[10%]" style={{ animation: 'float 20s infinite ease-in-out', animationDelay: '10s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between max-w-[1400px] mx-auto px-[5%] py-12 md:py-16 min-h-[calc(100vh-80px)] flex-col lg:flex-row gap-12">
          {/* Hero Text */}
          <div className="flex-1 max-w-[650px] text-center lg:text-left">
            <div className="mb-8">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2">
                <Zap className="w-3 h-3 mr-2" />
                Enterprise Software Solutions
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 font-extrabold">
              <div className="text-white">Enterprise Software</div>
              <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Development</div>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-95 text-gray-300">
              Custom software solutions designed to transform your business. From web development to enterprise systems, we deliver end-to-end solutions with cutting-edge technology.
            </p>
            <div className="flex gap-5 flex-wrap justify-center lg:justify-start mb-10">
              <Link to="/contact">
                <Button size="lg" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1">
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Get Free Consultation
                </Button>
              </Link>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:-translate-y-1">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-white/80 text-sm md:text-base">
              Trusted by <span className="text-emerald-400 font-semibold">150+ enterprises</span> • Serving businesses globally
            </p>
          </div>

          {/* Hero Illustration */}
          <div className="flex-1 relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Screen */}
              <div className="absolute w-[280px] h-[180px] md:w-[380px] md:h-[260px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-700" style={{ animation: 'screenFloat 6s infinite ease-in-out' }}>
                <div className="bg-slate-700 p-3 border-b border-slate-600 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-100"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-200"></div>
                </div>
                <div className="p-4 md:p-6 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 h-[calc(100%-40px)] flex flex-col justify-center">
                  <div className="text-sm md:text-lg font-bold text-white mb-2">Enterprise Software</div>
                  <div className="text-xs md:text-sm text-gray-300">Scalable • Secure • Innovation</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-[5%] left-[5%] bg-white rounded-xl p-2.5 md:p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ animation: 'floatElement1 5s infinite ease-in-out' }}>
                <Code className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
              </div>

              <div className="absolute top-[40%] right-[8%] bg-white rounded-xl p-2.5 md:p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ animation: 'floatElement2 6s infinite ease-in-out', animationDelay: '0.5s' }}>
                <Database className="w-5 h-5 md:w-7 md:h-7 text-blue-500" />
              </div>

              <div className="absolute bottom-[15%] left-[10%] bg-white rounded-xl p-2.5 md:p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ animation: 'floatElement3 5.5s infinite ease-in-out', animationDelay: '1s' }}>
                <Shield className="w-5 h-5 md:w-7 md:h-7 text-pink-500" />
              </div>

              <div className="absolute bottom-[25%] right-[12%] bg-white rounded-xl p-2.5 md:p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ animation: 'floatElement4 6.5s infinite ease-in-out', animationDelay: '1.5s' }}>
                <Zap className="w-5 h-5 md:w-7 md:h-7 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-24 bg-gradient-to-b from-black via-slate-900/40 to-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 mb-6">Our Expertise</Badge>
            <h2 className="text-5xl md:text-6xl leading-tight mb-6 font-extrabold">
              <div className="text-white">Comprehensive Software</div>
              <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From web development to enterprise systems, we deliver end-to-end solutions tailored to your business needs with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 ${
                    servicesInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-500/80 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/15 group-hover:to-cyan-500/10 transition-all duration-500" />
                    <CardContent className="p-6 relative z-10 flex gap-5">
                      {/* Icon Container */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 flex items-center justify-center group-hover:from-emerald-500/50 group-hover:to-cyan-500/40 transition-all duration-500 group-hover:scale-110">
                          <Icon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-all" />
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base md:text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 2).map((feature, i) => (
                            <span key={i} className="inline-flex items-center text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="relative py-24 bg-gradient-to-b from-slate-900/50 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 mb-6">Why Choose Us</Badge>
            <h2 className="text-5xl md:text-6xl leading-tight mb-6 font-extrabold">
              <div className="text-white">Why Businesses Trust</div>
              <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Cybaem Tech</div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results and transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 transform hover:-translate-y-3 ${
                    whyChooseInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />
                    <Card className="relative h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-3 group-hover:text-emerald-400 transition-colors">
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

      {/* Process Section */}
      <section ref={processRef} className="relative py-24 bg-gradient-to-b from-black via-slate-900/60 to-slate-900/30 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 mb-6">Our Process</Badge>
            <h2 className="text-5xl md:text-6xl leading-tight mb-6 font-extrabold">
              <div className="text-white">How We Build</div>
              <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Success</div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven development process ensures quality delivery, on time and within budget with transparent communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 transform group ${
                    processInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
                    <Card className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/40 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl transition-all duration-300 h-full">
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 min-w-fit bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg shadow-emerald-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                            {process.step}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                              <Icon className="w-5 h-5 text-emerald-400" />
                              {process.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed ml-20">
                          {process.description}
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

      {/* Industries Section */}
      <section ref={industriesRef} className="relative py-24 bg-gradient-to-b from-slate-900/30 to-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 mb-6">Industries We Serve</Badge>
            <h2 className="text-5xl md:text-6xl leading-tight mb-6 font-extrabold">
              <div className="text-white">Transforming Industries</div>
              <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Worldwide</div>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                    industriesInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                        <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-125 transition-transform" />
                      </div>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
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
      <section className="relative py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
        </div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 px-4 py-2 mb-8">Ready to Get Started</Badge>
          <h2 className="text-5xl md:text-6xl leading-tight mb-8 font-extrabold">
            <div className="text-white">Ready to Transform Your</div>
            <div className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Business?</div>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Get a free consultation with our experts. Let's discuss how we can help you achieve your digital goals with custom software solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300">
                Talk to Our Experts
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/919028541383?text=Hi%20CybaemTech%2C%20I%20want%20to%20know%20about%20software%20development%20services" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
                <Clock className="mr-3 w-5 h-5" />
                WhatsApp us
              </Button>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-12">
            ✓ Serving businesses across Pune, Mumbai, Bangalore, Delhi, Hyderabad and globally in USA, UAE, UK & Europe.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
