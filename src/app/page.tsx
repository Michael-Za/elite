"use client";

import React from "react";
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

export default function Home() {
  const images = PlaceHolderImages;

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "Company", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const brandElite = (
    <span className="text-blue-600 italic font-extrabold brightness-[1.5] drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse">
      Elite
    </span>
  );

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 px-4 sm:px-6 py-4">
          <GlassCard className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight italic">
                {brandElite} Partners
              </span>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <GlassButton glassVariant="secondary" size="sm" className="hidden lg:flex">
                Client Login
              </GlassButton>
              <GlassButton size="sm" className="shadow-lg text-xs sm:text-sm px-3 sm:px-4">
                Book Consult
              </GlassButton>
              
              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white/5 backdrop-blur-3xl border-l-white/20">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2 italic">
                      {brandElite} Partners
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-xl font-semibold hover:text-primary transition-colors border-b border-white/10 pb-2"
                      >
                        {link.name}
                      </a>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                      <GlassButton glassVariant="secondary" className="w-full justify-start px-4">
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Enterprise Technology Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Empowering Enterprises Through {brandElite} Partnerships
              </h1>
              <h2 className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We architect, deploy, and manage mission-critical technology stacks — from intelligent VoIP infrastructure to bespoke CRM platforms.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GlassButton className="px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg group">
                  Schedule Consultation
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
                <GlassButton glassVariant="secondary" className="px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg">
                  Explore Services
                </GlassButton>
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:0.3s] max-w-lg mx-auto lg:max-w-none w-full">
              <GlassCard className="aspect-square relative overflow-hidden p-2 group shadow-2xl">
                <Image
                  src={images.find(img => img.id === 'hero-bg')?.imageUrl || ""}
                  alt="Elite Technology"
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="modern glass"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Floating elements */}
                <GlassCard className="absolute top-4 left-4 sm:top-8 sm:left-8 p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border-white/40 scale-90 sm:scale-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold whitespace-nowrap">SOC 2 Certified</div>
                    <div className="text-[8px] sm:text-[10px] uppercase text-muted-foreground font-semibold">Security Standard</div>
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
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary/80">What We Deliver</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Comprehensive Solutions</h3>
              <p className="text-muted-foreground text-sm sm:text-lg">
                Every engagement is tailored to your enterprise's unique requirements. We engineer strategic advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "VoIP Solutions",
                  desc: "Enterprise-grade voice infrastructure with crystal-clear HD calling and CRM integration.",
                  icon: Phone,
                  imgId: "voip-service"
                },
                {
                  title: "Web Development",
                  desc: "High-performance, conversion-optimized digital platforms built with modern architectures.",
                  icon: Code,
                  imgId: "web-dev"
                },
                {
                  title: "CRM Systems",
                  desc: "Bespoke platforms that unify your sales pipeline and automate workflows.",
                  icon: Users,
                  imgId: "crm-service"
                },
                {
                  title: "Tailored AI Models",
                  desc: "Custom machine learning solutions trained on your domain data — purpose-built.",
                  icon: Brain,
                  imgId: "ai-service"
                },
                {
                  title: "Virtual Assistants",
                  desc: "AI-powered virtual workforce solutions that scale your team's capacity effortlessly.",
                  icon: Headphones,
                  imgId: "virtual-assistant"
                },
                {
                  title: "Strategic Consulting",
                  desc: "Expert roadmapping to transform operations and maximize technology investments.",
                  icon: TrendingUp,
                  imgId: "strategic-consulting"
                }
              ].map((service, i) => (
                <GlassCard key={i} className="group overflow-hidden flex flex-col h-full border-white/20 hover:border-primary/40">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={images.find(img => img.id === service.imgId)?.imageUrl || ""}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={service.title}
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold">{service.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <GlassButton glassVariant="secondary" size="sm" className="w-full mt-auto text-xs py-5">
                      Learn More
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Elite Section */}
        <section id="why-us" className="py-16 sm:py-24 px-4 sm:px-6 bg-primary/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
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
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="text-sm sm:text-base font-bold">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{item.desc}</div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
               {[
                 { value: 150, suffix: "+", label: "Partnerships" },
                 { value: 3.2, suffix: "×", decimals: 1, label: "Average ROI", bg: "bg-primary/10" },
                 { value: "SOC 2", label: "Certified", bg: "bg-accent/10" },
                 { value: 15, suffix: "m", label: "Response" }
               ].map((item, i) => (
                 <GlassCard key={i} className={`p-4 sm:p-8 flex flex-col justify-center gap-1 sm:gap-2 aspect-square ${item.bg || ''}`}>
                    <div className="text-2xl sm:text-5xl font-bold">
                      {typeof item.value === 'number' ? (
                        <NumberTicker value={item.value} suffix={item.suffix} decimals={item.decimals} />
                      ) : (
                        item.value
                      )}
                    </div>
                    <div className="text-[8px] sm:text-sm text-muted-foreground font-bold uppercase tracking-wider">{item.label}</div>
                 </GlassCard>
               ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-6 sm:p-12 md:p-16 border-white/40 grid lg:grid-cols-2 gap-12 sm:gap-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 blur-[80px] sm:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <h3 className="text-2xl sm:text-4xl font-bold">Ready to Elevate Your Infrastructure?</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Our solutions architects will design a tailored roadmap to transform your operations — no obligations.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: Mail, label: "Work Email", value: "contact@elitepartners.io" },
                    { icon: Phone, label: "Global Office", value: "+1 (800) 555-ELITE" },
                    { icon: MapPin, label: "Locations", value: "NY · London · Dubai" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-sm font-bold uppercase text-muted-foreground">{item.label}</div>
                        <div className="text-base sm:text-lg font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold">Full Name *</label>
                    <input className="w-full glass-input h-10 sm:h-12 px-4 rounded-xl text-sm" placeholder="John Carter" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold">Work Email *</label>
                    <input className="w-full glass-input h-10 sm:h-12 px-4 rounded-xl text-sm" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold">Company</label>
                    <input className="w-full glass-input h-10 sm:h-12 px-4 rounded-xl text-sm" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold">Service Interest *</label>
                    <select className="w-full glass-input h-10 sm:h-12 px-4 rounded-xl text-sm appearance-none bg-transparent">
                      <option className="text-foreground bg-background">Select a service</option>
                      <option className="text-foreground bg-background">VoIP Solutions</option>
                      <option className="text-foreground bg-background">Web Development</option>
                      <option className="text-foreground bg-background">AI Models</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold">Project Details</label>
                  <textarea className="w-full glass-input min-h-[100px] sm:min-h-[120px] p-4 rounded-xl text-sm" placeholder="Tell us about your challenges..." />
                </div>
                <GlassButton className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold group">
                  Send Inquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-20 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              <div className="col-span-2 lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight italic">
                    {brandElite} Partners
                  </span>
                </div>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Strategic technology partnerships driving enterprise transformation. Trusted by Fortune-level organizations.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h5 className="font-bold text-xs sm:text-sm uppercase tracking-widest text-foreground/80">Solutions</h5>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {["VoIP Solutions", "Web Development", "CRM Systems", "AI Models", "Virtual Assistants"].map(item => (
                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h5 className="font-bold text-xs sm:text-sm uppercase tracking-widest text-foreground/80">Company</h5>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {["About Us", "Case Studies", "Careers", "Privacy Policy"].map(item => (
                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4 sm:space-y-6">
                <h5 className="font-bold text-xs sm:text-sm uppercase tracking-widest text-foreground/80">Connect</h5>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: MessageSquare, label: "Contact", href: "#contact" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110 group border-white/20"
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-sm text-muted-foreground font-medium text-center md:text-left">
              <div>© 2026 Elite Partners. All rights reserved.</div>
              <div className="flex items-center gap-2">
                Engineered with precision. 
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </footer>

        <AiAssistant />
      </div>
    </ThemeProvider>
  );
}
