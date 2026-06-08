"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Code2 } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function About() {
  const values = [
    { icon: Zap, title: "Bias for Code", desc: "We measure success in working software, API performance, and deployed pipelines, not in slide decks." },
    { icon: ShieldCheck, title: "Radical Neutrality", desc: "We don't accept kickbacks from cloud providers or model vendors. Our architecture is guided purely by your needs." },
    { icon: Lock, title: "Security & Compliance", desc: "We treat enterprise data, intellectual property, and compliance constraints as foundational, not secondary." },
    { icon: Users, title: "Extreme Ownership", desc: "Our Forward Deployed Engineers operate as embedded members of your team, sharing responsibility for production." }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Built for the Enterprise</h1>
        <p className="text-xl text-text-muted">Nexus was founded to bridge the gap between AI hype and enterprise reality. We exist to build the systems that generic consulting firms cannot.</p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="bg-background-dark p-12">
            <h2 className="text-sm uppercase tracking-wider text-primary font-bold mb-4">Our Mission</h2>
            <p className="text-2xl font-heading font-semibold text-white leading-relaxed">
              To deploy elite, cross-disciplinary Forward Deployed Engineers directly into enterprise teams to design, implement, and run custom AI systems that drive immediate business outcomes, free from vendor lock-in.
            </p>
          </AnimatedCard>
          <AnimatedCard className="bg-surface p-12">
            <h2 className="text-sm uppercase tracking-wider text-secondary font-bold mb-4">Our Vision</h2>
            <p className="text-2xl font-heading font-semibold text-white leading-relaxed">
              To be the world’s premier engineering partner for vendor-neutral enterprise AI adoption, unlocking the full potential of artificial intelligence safely and rapidly within every organization.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* The Neutrality Manifesto */}
      <section className="py-24 bg-surface border-y border-white/5 relative z-10 mb-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">Why Vendor Neutrality Matters</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-left">
            The AI landscape is moving too fast for single-vendor monopolies. If your systems integrator is exclusively pushing Microsoft Azure or Google Cloud, they are optimizing for their reseller margins—not your product.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-left">
            We believe that enterprise data shouldn't be locked into a specific foundational model. The best architecture today might be Claude 3.5; tomorrow, it might be an open-source Llama 3 fine-tune running locally on your own GPUs.
          </p>
          <p className="text-xl font-heading font-semibold text-accent-glow text-left mt-8 border-l-4 border-primary pl-6">
            Our FDEs build abstraction layers that decouple your data and workflows from the underlying models, giving you permanent leverage over AI vendors.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Engineering Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="bg-background-dark">
              <val.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-semibold mb-3">{val.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

    </main>
  );
}
// Placeholder Lock icon for the values array since we didn't import it at the top
import { Lock } from "lucide-react";
