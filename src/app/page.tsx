
"use client";

import React from "react";
import { GlassCard } from "@/components/glass-card";
import { GlassButton } from "@/components/glass-button";
import { AiAssistant } from "@/components/ai-assistant";
import { ThemeProvider } from "@/components/theme-provider";
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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Home() {
  const images = PlaceHolderImages;

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "Company", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 px-4 sm:px-6 py-4">
          <GlassCard className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center border-white/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                E
              </div>
              <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">Elite Partners</span>
            </div>
            
            {/* Desktop Nav Links */}
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
              <GlassButton size="sm" className="shadow-xl text-xs sm:text-sm px-3 sm:px-4 bg-primary text-primary-foreground border-transparent hover:opacity-90">
                Book Consult
              </GlassButton>
              
              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2 hover:bg-white/40 rounded-xl transition-colors glass-morphism border border-white/40">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] glass-morphism border-l-white/40 bg-white/60 backdrop-blur-2xl">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                        E
                      </div>
                      Elite Partners
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
                      <GlassButton className="w-full justify-start px-4 h-14">
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
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Empowering Enterprises Through <span className="text-primary italic">Elite</span> Partnerships
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We architect, deploy, and manage mission-critical technology stacks — from intelligent VoIP infrastructure to bespoke CRM platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GlassButton className="px-8 py-7 text-lg group bg-primary text-primary-foreground border-transparent shadow-2xl hover:translate-y-[-2px]">
                  Schedule Consultation
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
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
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="abstract glass"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                
                {/* Floating elements */}
                <GlassCard className="absolute top-8 left-8 p-4 flex items-center gap-4 border-white/60 shadow-2xl scale-90 sm:scale-100 bg-white/60">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shadow-inner">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold whitespace-nowrap">SOC 2 Certified</div>
                    <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-tighter">Security Standard</div>
                  </div>
                </GlassCard>

                <GlassCard className="absolute bottom-8 right-8 p-6 space-y-2 border-white/60 shadow-2xl scale-90 sm:scale-100 bg-white/60">
                  <div className="text-4xl font-black text-primary">99.9%</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-black tracking-[0.2em]">Uptime SLA</div>
                </GlassCard>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Enterprise Clients", value: "150+" },
              { label: "Uptime SLA", value: "99.99%" },
              { label: "Years of Excellence", value: "12+" },
              { label: "ROI Average", value: "3.2x" }
            ].map((stat, i) => (
              <GlassCard key={i} className="p-8 text-center space-y-2 hover:translate-y-[-8px] transition-all duration-300 border-white/60 shadow-xl bg-white/40">
                <div className="text-3xl sm:text-5xl font-black text-primary">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary">What We Deliver</h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">Comprehensive Solutions</h3>
              <p className="text-muted-foreground text-sm sm:text-xl font-medium max-w-2xl mx-auto">
                Every engagement is tailored to your enterprise's unique requirements. We engineer strategic advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  imgId: "hero-bg"
                }
              ].map((service, i) => (
                <GlassCard key={i} className="group overflow-hidden flex flex-col h-full border-white/60 hover:border-primary/40 shadow-2xl bg-white/40">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={images.find(img => img.id === service.imgId)?.imageUrl || ""}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={service.title}
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                  </div>
                  <div className="p-8 space-y-5 flex-1 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner border border-primary/5">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black tracking-tight">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    <GlassButton glassVariant="secondary" size="sm" className="w-full mt-auto py-6 font-bold text-sm bg-white/60 border-white/80 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all">
                      Learn More
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Elite Section */}
        <section id="why-us" className="py-16 sm:py-32 px-4 sm:px-6 relative bg-primary/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary">Why Elite Partners</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">Built on Trust, Driven by Results</h3>
                <p className="text-muted-foreground text-sm sm:text-xl font-medium">
                  We hold ourselves to the highest standards of security, reliability, and partnership integrity.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "SOC 2 Certified", desc: "Enterprise-grade security and encryption.", icon: ShieldCheck },
                  { title: "24/7 Always-On", desc: "Dedicated support and 15min response time.", icon: Headphones },
                  { title: "3.2x Average ROI", desc: "Reported ROI within 18 months.", icon: TrendingUp },
                  { title: "150+ Partners", desc: "Global network of technology providers.", icon: CheckCircle2 }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/60 shadow-md border border-white/80 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-base font-bold tracking-tight">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
               {[
                 { value: "150+", label: "Partnerships" },
                 { value: "3.2×", label: "Average ROI", bg: "bg-primary/5" },
                 { value: "SOC 2", label: "Certified", bg: "bg-accent/5" },
                 { value: "15m", label: "Response" }
               ].map((item, i) => (
                 <GlassCard key={i} className={`p-8 sm:p-12 flex flex-col justify-center gap-2 aspect-square border-white/60 shadow-2xl bg-white/40 ${item.bg || ''}`}>
                    <div className="text-3xl sm:text-6xl font-black text-foreground tracking-tighter">{item.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-black uppercase tracking-widest">{item.label}</div>
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
                      <option className="text-foreground bg-white">Select a service</option>
                      <option className="text-foreground bg-white">VoIP Solutions</option>
                      <option className="text-foreground bg-white">Web Development</option>
                      <option className="text-foreground bg-white">AI Models</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold tracking-tight px-1">Project Details</label>
                  <textarea className="w-full glass-input min-h-[140px] p-5 rounded-2xl text-sm font-medium border-white/80 focus:bg-white" placeholder="Tell us about your challenges..." />
                </div>
                <GlassButton className="w-full h-16 text-lg font-black group bg-primary text-primary-foreground border-transparent shadow-2xl">
                  Send Inquiry
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Insights Section */}
        <section className="pb-16 sm:pb-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 sm:p-16 text-center space-y-8 border-white/80 shadow-3xl bg-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight">Insights</h3>
                <p className="text-muted-foreground text-sm sm:text-xl font-medium max-w-xl mx-auto">
                  Join 5,000+ executives receiving our strategic technology reports weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                  <Input 
                    type="email" 
                    placeholder="email@company.com" 
                    className="glass-input h-14 rounded-2xl text-base font-medium border-white/80 focus:bg-white"
                  />
                  <GlassButton className="h-14 px-10 font-black text-sm uppercase tracking-widest bg-primary text-primary-foreground border-transparent shadow-xl">
                    Subscribe
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/20 bg-white/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
              <div className="col-span-2 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground shadow-lg">
                    E
                  </div>
                  <span className="text-2xl font-black tracking-tight">Elite Partners</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed font-medium">
                  Strategic technology partnerships driving enterprise transformation. Trusted by Fortune-level organizations globally.
                </p>
              </div>
              
              <div className="space-y-6">
                <h5 className="font-black text-xs uppercase tracking-[0.3em] text-foreground">Solutions</h5>
                <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                  {["VoIP Solutions", "Web Development", "CRM Systems", "AI Models", "Virtual Assistants"].map(item => (
                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
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

