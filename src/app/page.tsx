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
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const images = PlaceHolderImages;

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 px-6 py-4">
          <GlassCard className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">
                E
              </div>
              <span className="text-lg font-bold tracking-tight">Elite Partners</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-primary transition-colors">Solutions</a>
              <a href="#why-us" className="hover:text-primary transition-colors">Company</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <GlassButton glassVariant="secondary" size="sm" className="hidden sm:flex">
                Client Login
              </GlassButton>
              <GlassButton size="sm" className="shadow-lg">
                Book Consult
              </GlassButton>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </GlassCard>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-blur-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Enterprise Technology Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Empowering Enterprises Through <span className="text-primary italic">Elite</span> Partnerships
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                We architect, deploy, and manage mission-critical technology stacks — from intelligent VoIP infrastructure to bespoke CRM platforms and tailored AI models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlassButton className="px-8 py-7 text-lg group">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
                <GlassButton glassVariant="secondary" className="px-8 py-7 text-lg">
                  Explore Our Services
                </GlassButton>
              </div>
            </div>

            <div className="relative animate-fade-in [animation-delay:0.3s]">
              <GlassCard className="aspect-square relative overflow-hidden p-2 group">
                <Image
                  src={images.find(img => img.id === 'hero-bg')?.imageUrl || ""}
                  alt="Elite Technology"
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="abstract glass"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Floating elements */}
                <GlassCard className="absolute top-8 left-8 p-4 flex items-center gap-4 border-white/40">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">SOC 2 Certified</div>
                    <div className="text-[10px] uppercase text-muted-foreground font-semibold">Security Standard</div>
                  </div>
                </GlassCard>

                <GlassCard className="absolute bottom-8 right-8 p-6 space-y-2 border-white/40">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-xs uppercase text-muted-foreground font-bold tracking-widest">Uptime SLA</div>
                </GlassCard>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Enterprise Clients", value: "150+" },
              { label: "Uptime SLA", value: "99.99%" },
              { label: "Years of Excellence", value: "12+" },
              { label: "ROI Average", value: "3.2x" }
            ].map((stat, i) => (
              <GlassCard key={i} className="p-8 text-center space-y-2 hover:translate-y-[-4px] transition-transform">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">What We Deliver</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Comprehensive Technology Solutions</h3>
              <p className="text-muted-foreground text-lg">
                Every engagement is tailored to your enterprise's unique requirements. We don't offer off-the-shelf products — we engineer strategic advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "VoIP Solutions",
                  desc: "Enterprise-grade voice infrastructure with crystal-clear HD calling and seamless CRM integration.",
                  icon: Phone,
                  imgId: "voip-service"
                },
                {
                  title: "Custom Web Development",
                  desc: "High-performance, conversion-optimized digital platforms built with modern architectures.",
                  icon: Code,
                  imgId: "web-dev"
                },
                {
                  title: "CRM Systems",
                  desc: "Bespoke platforms that unify your sales pipeline, automate workflows, and deliver actionable insights.",
                  icon: Users,
                  imgId: "crm-service"
                },
                {
                  title: "Tailored AI Models",
                  desc: "Custom machine learning solutions trained on your domain data — intelligent and purpose-built.",
                  icon: Brain,
                  imgId: "ai-service"
                },
                {
                  title: "Virtual Assistants",
                  desc: "AI-powered virtual workforce solutions that scale your team's capacity without overhead.",
                  icon: Headphones,
                  imgId: "virtual-assistant"
                },
                {
                  title: "Strategic Consulting",
                  desc: "Expert roadmapping to transform your operations and maximize technology investments.",
                  icon: TrendingUp,
                  imgId: "hero-bg"
                }
              ].map((service, i) => (
                <GlassCard key={i} className="group overflow-hidden flex flex-col h-full border-white/20 hover:border-primary/40">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={images.find(img => img.id === service.imgId)?.imageUrl || ""}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={service.title}
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                  <div className="p-8 space-y-4 flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <GlassButton glassVariant="secondary" size="sm" className="w-full mt-auto">
                      Learn More
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Elite Section */}
        <section id="why-us" className="py-24 px-6 bg-primary/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">Why Elite Partners</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Built on Trust, Driven by Results</h3>
              <p className="text-muted-foreground text-lg">
                We hold ourselves to the highest standards of security, reliability, and partnership integrity. Your success is the only metric that matters.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "SOC 2 Certified", desc: "Enterprise-grade security with compliance and encryption.", icon: ShieldCheck },
                  { title: "24/7 Always-On", desc: "Dedicated account managers and 15min response time.", icon: Headphones },
                  { title: "3.2x Proven ROI", desc: "Reported return on technology investment within 18 months.", icon: TrendingUp },
                  { title: "150+ Partners", desc: "Strategic network of elite technology providers.", icon: CheckCircle2 }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <GlassCard className="p-8 flex flex-col justify-center gap-2 aspect-square">
                  <div className="text-5xl font-bold">150+</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase">Strategic Partnerships</div>
               </GlassCard>
               <GlassCard className="p-8 flex flex-col justify-center gap-2 aspect-square bg-primary/10">
                  <div className="text-5xl font-bold">3.2×</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase">Average ROI</div>
               </GlassCard>
               <GlassCard className="p-8 flex flex-col justify-center gap-2 aspect-square bg-accent/10">
                  <div className="text-5xl font-bold">SOC 2</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase">Certified Secure</div>
               </GlassCard>
               <GlassCard className="p-8 flex flex-col justify-center gap-2 aspect-square">
                  <div className="text-5xl font-bold">15m</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase">Response Time</div>
               </GlassCard>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-12 md:p-16 border-white/40 grid lg:grid-cols-2 gap-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-8 relative z-10">
                <h3 className="text-4xl font-bold">Ready to Elevate Your Technology Infrastructure?</h3>
                <p className="text-muted-foreground">
                  Tell us about your challenges and objectives. Our solutions architects will design a tailored roadmap to transform your operations — no obligations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase text-muted-foreground">Work Email</div>
                      <div className="text-lg font-medium">contact@elitepartners.io</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase text-muted-foreground">Global Office</div>
                      <div className="text-lg font-medium">+1 (800) 555-ELITE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase text-muted-foreground">Locations</div>
                      <div className="text-lg font-medium">New York · London · Dubai</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name *</label>
                    <input className="w-full glass-input h-12 px-4 rounded-xl text-sm" placeholder="John Carter" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Work Email *</label>
                    <input className="w-full glass-input h-12 px-4 rounded-xl text-sm" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Company</label>
                    <input className="w-full glass-input h-12 px-4 rounded-xl text-sm" placeholder="Acme Corporation" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Service Interest *</label>
                    <select className="w-full glass-input h-12 px-4 rounded-xl text-sm appearance-none">
                      <option>Select a service</option>
                      <option>VoIP Solutions</option>
                      <option>Web Development</option>
                      <option>AI Models</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Project Details</label>
                  <textarea className="w-full glass-input min-h-[120px] p-4 rounded-xl text-sm" placeholder="Tell us about your current challenges..." />
                </div>
                <GlassButton className="w-full h-14 text-lg font-bold group">
                  Send Your Inquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
              <div className="col-span-2 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">
                    E
                  </div>
                  <span className="text-xl font-bold tracking-tight">Elite Partners</span>
                </div>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Strategic technology partnerships that drive enterprise transformation. Trusted by Fortune-level organizations across three continents.
                </p>
              </div>
              
              <div className="space-y-6">
                <h5 className="font-bold text-sm uppercase tracking-widest">Solutions</h5>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">VoIP Solutions</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">CRM Systems</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">AI Models</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Virtual Assistants</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="font-bold text-sm uppercase tracking-widest">Company</h5>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="font-bold text-sm uppercase tracking-widest">Connect</h5>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
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