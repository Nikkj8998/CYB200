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

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [whyChooseRef, whyChooseInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [processRef, processInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [industriesRef, industriesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const softwareServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "SEO-friendly, fast, and responsive websites designed to represent your brand professionally and convert visitors into customers"
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web applications that streamline business processes, manage data efficiently, and scale with your organization"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Secure and user-friendly Android, iOS, and cross-platform mobile apps built for performance and real-world business use"
    },
    {
      icon: Database,
      title: "ERP Development",
      description: "Centralized ERP solutions to manage finance, inventory, HR, operations, and reporting from a single powerful system"
    },
    {
      icon: Users,
      title: "CRM Development",
      description: "Custom CRM platforms to manage leads, sales pipelines, customer interactions, and relationship management effectively"
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "Intuitive, modern, and user-focused designs that improve usability, engagement, and customer satisfaction"
    },
    {
      icon: Plug,
      title: "API Integrations",
      description: "Secure API integrations connecting your software with payment gateways, cloud platforms, and analytics systems"
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      description: "Ongoing website monitoring, updates, security patches, backups, and performance optimization for long-term stability"
    }
  ];

  const whyChoosePoints = [
    {
      icon: Building2,
      title: "Enterprise-Grade Architecture",
      description: "Built with scalability and security at the core, using modern tech stacks and best practices."
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Pricing",
      description: "Premium quality solutions at competitive rates, maximizing your ROI without compromising on quality."
    },
    {
      icon: Zap,
      title: "Scalable & Secure",
      description: "Future-proof solutions that grow with your business, protected by industry-standard security protocols."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Round-the-clock maintenance and support to ensure your systems run smoothly, always."
    }
  ];

  const developmentProcess = [
    {
      number: "01",
      title: "Requirement Gathering",
      description: "Deep dive into your business needs, goals, and technical requirements."
      
    },
    {
      number: "02",
      title: "UI/UX & Architecture",
      description: "Design intuitive interfaces and plan scalable system architecture."
    },
    {
      number: "03",
      title: "Agile Development",
      description: "Iterative development with regular updates and feedback loops."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality, performance, and security."
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment to production with zero downtime strategies."
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Ongoing maintenance, monitoring, and continuous improvement."
    }
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white flex items-center overflow-hidden transition-opacity duration-1000 ${
          heroInView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${
            heroInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise
              <br />
              Software
              <br />
              <span className="text-emerald-400">Development</span>
              <br />
              & Web Design
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We design, develop, and maintain scalable software solutions that help businesses automate operations, improve customer experience, and grow digitally — at a cost-effective price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg font-semibold text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg font-semibold text-lg">
                <Code size={20} className="mr-2" />
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">150+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`relative h-96 transition-all duration-1000 transform ${
            heroInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                  Performance
                  <span className="ml-2 font-bold">99.9% Uptime</span>
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="h-3 bg-slate-700 rounded w-full" />
                <div className="h-3 bg-slate-700 rounded w-5/6" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-600 rounded-lg p-4">
                    <Code className="text-emerald-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Clean Code</div>
                  </div>
                  <div className="border border-slate-600 rounded-lg p-4">
                    <Layers className="text-emerald-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Scalable</div>
                  </div>
                  <div className="border border-slate-600 rounded-lg p-4">
                    <Zap className="text-emerald-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Fast</div>
                  </div>
                  <div className="border border-slate-600 rounded-lg p-4">
                    <CheckCircle className="text-emerald-400 mb-2" size={24} />
                    <div className="text-xs text-gray-400">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`py-20 bg-slate-900 text-white transition-opacity duration-1000 ${
          servicesInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Software
              <br />
              <span className="text-emerald-400">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From web development to enterprise systems, we deliver end-to-end solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className={`bg-slate-800 border-slate-700 hover:border-emerald-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    servicesInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-emerald-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyChooseRef}
        className={`py-20 bg-slate-900 text-white transition-opacity duration-1000 ${
          whyChooseInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Businesses Trust
              <br />
              <span className="text-emerald-400">Cybaem Tech</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className={`bg-slate-800 border-slate-700 transition-all duration-300 transform hover:border-emerald-500/50 ${
                    whyChooseInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className={`py-20 bg-white transition-opacity duration-1000 ${
          processInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How We Build
              <br />
              <span className="text-emerald-500">Success</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven development process ensures quality delivery, on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-300 transform ${
                  processInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-emerald-500/20">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        ref={industriesRef}
        className={`py-20 bg-gray-50 transition-opacity duration-1000 ${
          industriesInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 mb-4">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transforming Industries
              <br />
              <span className="text-emerald-500">Worldwide</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our solutions power businesses across diverse sectors, each tailored to industry-specific challenges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer transform hover:scale-105 ${
                    industriesInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-slate-900">
                      {industry.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6">
            Let's Build Something Great
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-emerald-400">Business?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Get a free consultation with our experts. Let's discuss how we can help you achieve your digital goals with custom software solutions.
          </p>
          <Link to="/contact">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 rounded-lg font-semibold text-lg">
              Talk to Our Experts
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <p className="text-gray-400 text-sm mt-8">
            ✓ Serving businesses across Pune, Mumbai, Bangalore, Delhi, Hyderabad and globally in USA, UAE, UK & Europe.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
