
"use client";

import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/glass-card";
import { GlassButton } from "@/components/glass-button";
import { AiAssistant } from "@/components/ai-assistant";
import { ThemeProvider } from "@/components/theme-provider";
import { NumberTicker } from "@/components/number-ticker";
import {
  Phone,
  Code,
  Users,
  Brain,
  Headphones,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Mail,
  ArrowRight,
  Menu,
  ChevronRight,
  Linkedin,
  Twitter,
  MessageSquare,
  BellRing,
  Headset,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Check,
  Zap,
  Sparkles,
  X,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function Home() {
  const images = PlaceHolderImages;
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenOffer = sessionStorage.getItem("hasSeenStartupOffer");
      if (!hasSeenOffer) {
        setShowOffer(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const closeOffer = () => {
    setShowOffer(false);
    sessionStorage.setItem("hasSeenStartupOffer", "true");
  };

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "Company", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const brandElite = (
    <span className="text-blue-600 italic font-extrabold">
      Elite
    </span>
  );

  const services = [
    {
      title: "VoIP Solutions",
      desc: "Enterprise-grade voice infrastructure with crystal-clear HD calling and CRM integration.",
      details: "Our VoIP systems are engineered for zero-latency communication across global teams. We provide full SIP trunking, automated failover, and deep integration with your existing tech stack.",
      howWeHelp: "We replace legacy copper systems with high-availability digital backbones, reducing communication costs by up to 40% while enhancing voice quality and reliability.",
      features: ["HD Audio Quality", "Global DID Provisioning", "Advanced Call Routing", "Automated Failover Systems"],
      icon: Phone,
      imgId: "voip-service"
    },
    {
      title: "Contact Center",
      desc: "Elite call center agencies. We handle your technical support, sales, and technical inquiries with dedicated professionals.",
      details: "An omnichannel customer experience platform that unifies voice, chat, email, and social media into a single agent desktop. Powered by AI for sentiment analysis and queue optimization.",
      howWeHelp: "By outsourcing your contact operations to our elite agencies, you gain access to 24/7 professional staffing and high-tech infrastructure that scales instantly with your volume.",
      features: ["Omnichannel Support", "AI Sentiment Analysis", "Real-time Dashboards", "Professional Elite Staffing"],
      icon: Headset,
      imgId: "contact-center"
    },
    {
      title: "Strategic Consulting",
      desc: "Expert roadmapping to transform operations and maximize technology investments.",
      details: "Strategic alignment of business goals with technological capabilities. We provide full-spectrum digital transformation audits and multi-year implementation roadmaps.",
      howWeHelp: "We bridge the gap between executive vision and technical execution, ensuring that every dollar spent on technology drives a measurable ROI and operational efficiency.",
      features: ["Technology Audits", "Transformation Roadmapping", "Vendor Selection", "ROI Analysis"],
      icon: BarChart3,
      imgId: "strategic-consulting"
    },
    {
      title: "Web Development",
      desc: "High-performance, conversion-optimized digital platforms built with modern architectures.",
      details: "Specializing in Next.js and headless architectures, we build web platforms that are incredibly fast, SEO-ready, and conversion-optimized.",
      howWeHelp: "We transform your digital presence from a simple website into a high-performance business engine, focusing on user experience, load speeds, and enterprise security.",
      features: ["Next.js Expertise", "Headless CMS Integration", "Performance Optimization", "E2E Security"],
      icon: Code,
      imgId: "web-dev"
    },
    {
      title: "E-commerce Websites",
      desc: "High-conversion digital storefronts built for scale. We integrate secure payment gateways and advanced inventory management.",
      details: "Enterprise-level e-commerce solutions built for heavy traffic and complex catalogs. We handle everything from global payment routing to complex ERP synchronizations.",
      howWeHelp: "We help brands scale globally by providing a robust, high-conversion storefront that manages complex multi-currency and multi-warehouse logistics automatically.",
      features: ["Global Payment Gateways", "Inventory Sync (ERP)", "High-Traffic Stability", "Conversion Rate Optimization"],
      icon: ShoppingBag,
      imgId: "ecommerce-service"
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile applications engineered for performance, security, and seamless user experiences.",
      details: "Building world-class mobile experiences for iOS and Android. Our apps leverage native capabilities to provide the smoothest possible user journeys.",
      howWeHelp: "We bring your services directly to your customers' pockets with secure, performant apps that drive engagement and provide high-value mobile touchpoints.",
      features: ["iOS & Android Native", "React Native Experts", "Biometric Security", "Offline Capabilities"],
      icon: Smartphone,
      imgId: "app-development"
    },
    {
      title: "Virtual Assistants",
      desc: "AI-powered virtual workforce solutions that scale your team's capacity effortlessly.",
      details: "A hybrid workforce of AI agents and human oversight designed to handle repetitive administrative, scheduling, and data entry tasks with 100% accuracy.",
      howWeHelp: "We liberate your core team from routine tasks, allowing them to focus on high-value strategic work while our virtual assistants maintain your operational momentum 24/7.",
      features: ["24/7 Task Handling", "CRM Data Entry", "Intelligent Scheduling", "Scale on Demand"],
      icon: Headphones,
      imgId: "virtual-assistant"
    },
    {
      title: "Tailored AI Models",
      desc: "Custom machine learning solutions trained on your domain data — purpose-built.",
      details: "Proprietary AI models fine-tuned on your specific corporate knowledge. We build secure, private LLMs and predictive analytics tools that live within your firewall.",
      howWeHelp: "We give your enterprise its own unique intelligence, allowing you to automate complex decision-making and gain insights that off-the-shelf AI simply cannot reach.",
      features: ["Domain-Specific Training", "Private LLM Deploys", "Predictive Analytics", "Document Intelligence"],
      icon: Brain,
      imgId: "ai-service"
    },
    {
      title: "CRM Systems",
      desc: "Bespoke platforms that unify your sales pipeline and automate workflows.",
      details: "Advanced CRM implementation and customization that unifies your entire customer lifecycle. We build custom objects, automated flows, and unified reporting dashboards.",
      howWeHelp: "We eliminate data silos by creating a single source of truth for your sales, marketing, and support teams, resulting in higher close rates and better customer retention.",
      features: ["Sales Pipeline Automation", "Unified Data Lake", "Custom Workflow Engine", "Executive Reporting"],
      icon: Users,
      imgId: "crm-service"
    }
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 px-4 sm:px-6 py-4">
          <GlassCard className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center border-white/40">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight italic flex items-baseline">
                {brandElite} <span className="text-[11px] uppercase tracking-widest ml-1 font-black opacity-70">Partners</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-foreground/70">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <GlassButton glassVariant="secondary" size="sm" className="hidden lg:flex border-white/40">
                Client Login
              </GlassButton>
              <GlassButton glassVariant="primary" className="shadow-xl text-xs sm:text-sm px-3 sm:px-4 border-white/50 bg-white/40 backdrop-blur-md">
                Book Consult
              </GlassButton>
              
              <Sheet>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2 hover:bg-white/40 rounded-xl transition-colors glass-morphism border border-white/40">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background/80 backdrop-blur-xl border-l-white/20">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2 italic">
                      {brandElite} <span className="text-[10px] uppercase tracking-widest ml-1 font-black opacity-70">Partners</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-xl font-bold hover:text-primary transition-colors border-b border-white/20 pb-4"
                      >
                        {link.name}
                      </a>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                      <GlassButton glassVariant="secondary" className="w-full justify-start px-4 h-14">
                        Client Login
                      </GlassButton>
                      <GlassButton glassVariant="secondary" className="w-full justify-start px-4">
                        Schedule Consultation
                      </GlassButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </GlassCard>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-blur-in text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                Enterprise Technology Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Empowering Enterprises Through {brandElite} <span className="text-[0.6em] opacity-80">Partnerships</span>
              </h1>
              <h2 className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We architect, deploy, and manage mission-critical technology stacks — from intelligent VoIP infrastructure to bespoke CRM platforms.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GlassButton glassVariant="secondary" className="px-8 py-7 text-lg bg-white/40 border-white/60 shadow-xl hover:translate-y-[-2px]">
                  Explore Services
                </GlassButton>
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:0.3s] max-w-lg mx-auto lg:max-w-none w-full">
              <GlassCard className="aspect-square relative overflow-hidden p-3 group shadow-3xl border-white/60">
                <Image
                  src={images.find(img => img.id === 'hero-bg')?.imageUrl || ""}
                  alt="Elite Technology"
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="skyscraper glass"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                
                <GlassCard className="absolute top-4 left-4 sm:top-8 sm:left-8 p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border-white/40 scale-90 sm:scale-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold whitespace-nowrap">SOC 2 Certified</div>
                    <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-tighter">Security Standard</div>
                  </div>
                </GlassCard>

                <GlassCard className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 p-4 sm:p-6 space-y-1 sm:space-y-2 border-white/40 scale-90 sm:scale-100">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <NumberTicker value={99.9} suffix="%" decimals={1} />
                  </div>
                  <div className="text-[8px] sm:text-xs uppercase text-muted-foreground font-bold tracking-widest">Uptime SLA</div>
                </GlassCard>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Enterprise Clients", value: 150, suffix: "+" },
              { label: "Uptime SLA", value: 99.99, suffix: "%", decimals: 2 },
              { label: "Years of Excellence", value: 12, suffix: "+" },
              { label: "ROI Average", value: 3.2, suffix: "x", decimals: 1 }
            ].map((stat, i) => (
              <GlassCard key={i} className="p-6 sm:p-8 text-center space-y-1 sm:space-y-2 hover:translate-y-[-4px] transition-transform">
                <div className="text-2xl sm:text-4xl font-bold text-primary">
                  <NumberTicker value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-tight">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
              <h2 className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-foreground shadow-sm">
                What We Deliver
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">Comprehensive Solutions</h3>
              <p className="text-muted-foreground text-sm sm:text-xl font-medium max-w-2xl mx-auto">
                Every engagement is tailored to your enterprise's unique requirements. We engineer strategic advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <GlassCard 
                  key={i} 
                  className={cn(
                    "group overflow-hidden flex flex-col h-full border-white/60 hover:border-primary/40 transition-all duration-500 shadow-2xl bg-white/40 shadow-black/5",
                    i === services.length - 1 && "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
                  )}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={images.find(img => img.id === service.imgId)?.imageUrl || ""}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={service.imgId}
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                  </div>
                  <div className="p-8 space-y-5 flex-1 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner border border-primary/5">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-black tracking-tighter leading-none">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    <GlassButton 
                      onClick={() => setSelectedService(service)}
                      glassVariant="secondary" 
                      size="sm" 
                      className="w-full mt-auto py-6 font-bold text-sm bg-white/60 border-white/80 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all"
                    >
                      Learn More
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Offer Pop-up */}
        <Dialog open={showOffer} onOpenChange={(open) => !open && closeOffer()}>
          <DialogContent className="max-w-md sm:max-w-lg bg-white/50 backdrop-blur-[80px] border-white/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] p-0 overflow-hidden border animate-in fade-in zoom-in-95 duration-700">
            <div className="relative p-10 sm:p-14 text-center space-y-10 overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse [animation-delay:1s]" />

              <button 
                onClick={closeOffer}
                className="absolute top-8 right-8 p-2.5 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-20 group"
              >
                <X className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
              </button>

              <div className="flex justify-center relative">
                <div className="w-24 h-24 rounded-[2rem] bg-white/60 backdrop-blur-xl flex items-center justify-center border border-white/80 shadow-2xl animate-bounce duration-[2000ms]">
                  <Sparkles className="w-12 h-12 text-blue-600 drop-shadow-sm" />
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex flex-col gap-3">
                  <h3 className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700 mx-auto">
                    Limited Partnership Invite
                  </h3>
                  <h4 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.9] text-foreground">
                    Accelerate <br />
                    <span className="text-blue-600">Growth.</span>
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="text-4xl font-bold tracking-tight text-foreground/80">
                    50% <span className="text-sm uppercase tracking-widest opacity-60">Off</span> Web Launch
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base font-medium max-w-[280px] mx-auto leading-relaxed">
                    We're empowering the next generation of innovators. Launch your enterprise-ready platform at half the investment.
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-5 relative z-10">
                <GlassButton 
                  onClick={() => {
                    closeOffer();
                    window.location.hash = "contact";
                  }}
                  className="w-full h-20 text-xl font-black shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)] bg-blue-600 text-white border-transparent hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all rounded-[1.5rem]"
                >
                  Secure My Placement
                  <ArrowUpRight className="ml-3 w-6 h-6 stroke-[3px]" />
                </GlassButton>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    Exclusively for seed & series A startups
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/60">
                    2 slots remaining for Q2
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Service Detail Dialog */}
        <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="max-w-3xl bg-background/80 backdrop-blur-2xl border-white/20 shadow-3xl rounded-[2rem] overflow-hidden p-0 gap-0">
            {selectedService && (
              <div className="flex flex-col">
                <div className="relative h-48 sm:h-64 w-full">
                  <Image
                    src={images.find(img => img.id === selectedService.imgId)?.imageUrl || ""}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-2xl">
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <DialogHeader>
                      <DialogTitle className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-lg">
                        {selectedService.title}
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                </div>
                
                <div className="p-8 sm:p-12 space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <h5 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-foreground bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl w-fit border border-white/40 shadow-sm">
                          Technical Overview
                        </h5>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium italic pl-1 border-l-2 border-primary/20">
                          "{selectedService.details}"
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h5 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-foreground bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl w-fit border border-white/40 shadow-sm">
                          How We Help
                        </h5>
                        <p className="text-foreground text-sm sm:text-base leading-relaxed font-bold pl-1">
                          {selectedService.howWeHelp}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h5 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-foreground bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl w-fit border border-white/40 shadow-sm">
                        Core Deliverables
                      </h5>
                      <div className="grid gap-3">
                        {selectedService.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/60 shadow-sm hover:translate-x-1 transition-transform">
                            <Check className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs sm:text-sm font-bold tracking-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                            <Image src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="Expert" width={32} height={32} />
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Expert Team Assigned</span>
                    </div>
                    <GlassButton 
                      onClick={() => {
                        setSelectedService(null);
                        window.location.hash = "contact";
                      }}
                      className="w-full sm:w-auto px-10 h-14 font-black shadow-xl"
                    >
                      Inquire for {selectedService.title}
                    </GlassButton>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Why Elite Section */}
        <section id="why-us" className="py-16 sm:py-24 px-4 sm:px-6 bg-primary/5">
          <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Elite Partners
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Built on Trust, Driven by Results</h3>
              <p className="text-muted-foreground text-sm sm:text-lg">
                We hold ourselves to the highest standards of security, reliability, and partnership integrity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "SOC 2 Certified", desc: "Enterprise-grade security and encryption.", icon: ShieldCheck },
                  { title: "24/7 Always-On", desc: "Dedicated support and 15min response time.", icon: Headphones },
                  { title: "3.2x Average ROI", desc: "Reported ROI within 18 months.", icon: TrendingUp },
                  { title: "150+ Partners", desc: "Global network of technology providers.", icon: CheckCircle2 }
                ].map((item, i) => (
                  <GlassCard key={i} className="flex gap-4 p-4 border-white/40 hover:border-primary/40 transition-colors">
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 sm:w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="text-sm sm:text-base font-bold">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{item.desc}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
               {[
                 { value: 150, suffix: "+", label: "Partnerships" },
                 { value: 3.2, suffix: "×", decimals: 1, label: "Average ROI", bg: "bg-primary/10" },
                 { value: "SOC 2", label: "Certified", bg: "bg-accent/10" },
                 { value: 15, suffix: "m", label: "Response" }
               ].map((item, i) => (
                 <GlassCard key={i} className={`p-4 sm:p-6 flex flex-col justify-center gap-1 sm:gap-2 aspect-square ${item.bg || ''}`}>
                    <div className="text-xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold">
                      {typeof item.value === 'number' ? (
                        <NumberTicker value={item.value} suffix={item.suffix} decimals={item.decimals} />
                      ) : (
                        item.value
                      )}
                    </div>
                    <div className="text-[7px] sm:text-[10px] xl:text-xs text-muted-foreground font-bold uppercase tracking-wider">{item.label}</div>
                 </GlassCard>
               ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-8 sm:p-16 border-white/80 shadow-3xl grid lg:grid-cols-2 gap-16 overflow-hidden relative bg-white/60">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-10 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-5xl font-black tracking-tight">Ready to Elevate Your Infrastructure?</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg font-medium">
                    Our solutions architects will design a tailored roadmap to transform your operations — no obligations.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Work Email", value: "contact@elitepartners.io" },
                    { icon: Phone, label: "Global Office", value: "+1 (800) 555-ELITE" },
                    { icon: MapPin, label: "Locations", value: "NY · London · Dubai" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-white/80 border border-white/100 shadow-lg flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-muted-foreground/60">{item.label}</div>
                        <div className="text-lg sm:text-xl font-bold tracking-tight">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Full Name *</label>
                    <input className="w-full glass-input h-14 px-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white" placeholder="John Carter" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Work Email *</label>
                    <input className="w-full glass-input h-14 px-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Company</label>
                    <input className="w-full glass-input h-14 px-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Service Interest *</label>
                    <select className="w-full glass-input h-14 px-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white appearance-none bg-transparent">
                      <option className="text-foreground bg-white" value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} className="text-foreground bg-white" value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Project Details</label>
                  <textarea className="w-full glass-input min-h-[140px] p-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white" placeholder="Tell us about your challenges..." />
                </div>
                <GlassButton className="w-full h-16 text-lg font-black group bg-white/40 backdrop-blur-md border-white/50 text-foreground hover:bg-white/60 shadow-lg">
                  Send Inquiry
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <GlassCard className="p-8 sm:p-12 text-center space-y-8 border-white/40 shadow-2xl bg-primary/5">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <BellRing className="w-8 h-8 text-primary animate-bounce" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold">Elite Technology Insights</h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Join 2,500+ enterprise leaders. Receive curated weekly updates on mission-critical tech, ROI roadmaps, and elite partnership strategies.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter work email" 
                  className="flex-1 glass-input h-12 sm:h-14 px-6 rounded-2xl text-sm focus:ring-primary/40 outline-none" 
                  required
                />
                <GlassButton className="h-12 sm:h-14 px-8 font-bold whitespace-nowrap group">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </form>
              
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold pt-4">
                Weekly Updates • Zero Spam • SOC 2 Secure
              </p>
            </GlassCard>

            <div className="flex flex-col items-center gap-6">
              <GlassCard className="py-4 px-8 border-white/20 bg-black/10 backdrop-blur-md shadow-xl">
                <div className="text-lg font-bold tracking-[0.2em] uppercase text-foreground text-center">
                  WANNA SCHEDULE A CONSULTATION?
                </div>
              </GlassCard>
              
              <GlassButton glassVariant="primary" className="px-12 py-8 text-xl font-black group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] border-white/60 bg-white/50 backdrop-blur-xl transition-all duration-300">
                Schedule Consultation
                <ChevronRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-20 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              <div className="col-span-2 lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight italic flex items-baseline">
                    {brandElite} <span className="text-[11px] uppercase tracking-widest ml-1 font-black opacity-70">Partners</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed font-medium">
                  Strategic technology partnerships driving enterprise transformation. Trusted by Fortune-level organizations globally.
                </p>
              </div>
              
              <div className="space-y-6">
                <h5 className="font-black text-xs uppercase tracking-[0.3em] text-foreground">Solutions</h5>
                <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                  {services.map(service => (
                    <li key={service.title}><a href="#services" className="hover:text-primary transition-colors">{service.title}</a></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="font-black text-xs uppercase tracking-[0.3em] text-foreground">Company</h5>
                <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                  {["About Us", "Case Studies", "Careers", "Privacy Policy"].map(item => (
                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1 space-y-6">
                <h5 className="font-black text-xs uppercase tracking-[0.3em] text-foreground">Connect</h5>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: MessageSquare, label: "Contact Us", href: "#contact" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      className="w-12 h-12 rounded-2xl bg-white/80 border border-white/100 shadow-lg flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-widest text-center">
              <div>© 2026 Elite Partners. All rights reserved.</div>
              <div className="flex items-center gap-3">
                Engineered for Performance.
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              </div>
            </div>
          </div>
        </footer>

        <AiAssistant />
      </div>
    </ThemeProvider>
  );
}
