"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Lock, Cpu, Server, Terminal, Activity, GitMerge } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ArchitectureDiagram } from "@/components/ui/architecture-diagram";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[250px] opacity-10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-surface/50 backdrop-blur-md text-sm font-medium tracking-wide text-accent-glow uppercase shadow-[0_0_20px_rgba(0,217,255,0.2)]"
        >
          Vendor-Neutral AI Engineering
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 text-6xl md:text-8xl font-heading font-bold tracking-tighter leading-[1.1] max-w-5xl"
        >
          Elite AI Engineers Embedded Inside Your <span className="glow-text">Enterprise</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="z-10 mt-6 text-xl md:text-2xl text-text-muted font-sans max-w-3xl font-light"
        >
          Build production-grade AI systems without vendor lock-in. We deploy top 1% engineering talent directly into your teams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="z-10 flex flex-col sm:flex-row gap-6 mt-12"
        >
          <Link href="/contact" className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative flex items-center gap-2">Book Strategy Call <ArrowRight size={18} /></span>
          </Link>
          <Link href="/blueprint" className="px-8 py-4 bg-transparent border border-white/20 hover:border-primary/50 hover:bg-primary/5 text-white font-semibold rounded-lg transition-colors duration-300">
            Download AI Blueprint
          </Link>
        </motion.div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-24 bg-surface border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Why Enterprise AI Projects Fail</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Traditional consulting firms sell slide decks. Cloud vendors trap you in proprietary ecosystems. The result? Stalled pilots and bloated costs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "Vendor Lock-In", desc: "Forced into expensive proprietary LLMs and rigid cloud ecosystems." },
              { icon: Cpu, title: "Talent Shortage", desc: "Inability to hire and retain elite ML engineers and systems architects." },
              { icon: Server, title: "Security Risks", desc: "Data leakage and compliance failures from public API integrations." },
              { icon: Activity, title: "Slow Delivery", desc: "Months spent on strategy instead of deploying working production code." }
            ].map((pain, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="bg-background-dark">
                <pain.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-3">{pain.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{pain.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { title: "Vendor Neutral", desc: "We deploy the optimal mix of open-source and proprietary models without platform lock-in. Your data, your rules.", glow: "from-primary to-transparent" },
              { title: "Embedded FDE Teams", desc: "Our Forward Deployed Engineers work inside your repo, shipping production code rather than slide decks.", glow: "from-secondary to-transparent" },
              { title: "Security First", desc: "Built for highly regulated sectors with strict data governance, local deployment, and SOC2 requirements.", glow: "from-accent-glow to-transparent" }
            ].map((value, i) => (
              <AnimatedCard key={i} delay={i * 0.2} className="relative group">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.glow} opacity-50`} />
                <h3 className="text-2xl font-heading font-bold mb-4 mt-2">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-surface border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Enterprise Services</h2>
              <p className="text-text-muted text-lg">We architect, build, and run the complex AI infrastructure that generic agencies cannot touch.</p>
            </div>
            <Link href="/services" className="mt-6 md:mt-0 text-primary hover:text-white flex items-center gap-2 transition-colors">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Forward Deployed Engineers", icon: Terminal, href: "/services#fde" },
              { title: "AI Agent Development", icon: GitMerge, href: "/services#agents" },
              { title: "Enterprise RAG", icon: Server, href: "/services#rag" },
              { title: "AI Infrastructure", icon: Cpu, href: "/services#infra" },
              { title: "MLOps & Fine-Tuning", icon: Code2, href: "/services#mlops" },
              { title: "Governance & Guardrails", icon: Lock, href: "/services#governance" },
            ].map((service, i) => (
              <Link href={service.href} key={i}>
                <AnimatedCard delay={i * 0.1} className="h-full flex flex-col justify-between group cursor-pointer bg-background-dark hover:bg-surface">
                  <service.icon className="w-8 h-8 text-primary mb-8" />
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-text-muted mt-4">
                      Explore Architecture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE SECTION */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Vendor-Neutral AI Architecture</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">We decouple your proprietary data from model providers using a robust vector engine and intelligent routing layer.</p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "21", suffix: " Days", label: "Average Time to Production" },
              { number: "60", suffix: "%", label: "Infrastructure Cost Savings" },
              { number: "99.9", suffix: "%", label: "Pipeline Reliability" },
              { number: "500", prefix: "Fortune ", label: "Enterprise Ready" },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl md:text-7xl font-heading font-bold glow-text mb-4">
                  {metric.prefix}{metric.number}{metric.suffix}
                </div>
                <div className="text-text-muted font-medium uppercase tracking-wider text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-transparent to-[#0F172A]/80 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">Ready to Deploy Enterprise AI?</h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">Stop paying for strategy documents. Start building secure, vendor-neutral AI systems that drive measurable ROI.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-black font-bold rounded-lg text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,217,255,0.3)]">
            Book Engineering Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
