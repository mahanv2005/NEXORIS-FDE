"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AnimatedCard } from "@/components/ui/animated-card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid enterprise email address"),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  budget: z.string().min(1, "Please select an estimated budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please provide more details about your project"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call to Resend/CRM
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[200px] pointer-events-none" />

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Copy & Value Props */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Deploy AI Inside Your <span className="glow-text">Enterprise</span>.
            </h1>
            <p className="text-xl text-text-muted mb-12 max-w-lg">
              Speak with a Principal Architect to discuss your infrastructure, strict security requirements, and the deployment of a Forward Deployed Engineering pod.
            </p>

            <div className="space-y-8">
              {[
                { title: "Direct Architect Access", desc: "No junior sales reps. You'll speak directly with an engineer who builds production systems." },
                { title: "Strict Confidentiality", desc: "We operate under strict NDAs. Your internal architecture diagrams and challenges are secure." },
                { title: "Actionable Blueprints", desc: "Leave the call with a concrete technical architecture recommendation, whether you hire us or not." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <AnimatedCard className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-[0_0_50px_rgba(0,102,255,0.1)]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <CheckCircle2 className="w-20 h-20 text-accent-glow mb-6" />
                  <h3 className="text-3xl font-heading font-bold mb-4">Request Received</h3>
                  <p className="text-text-muted mb-8">An Enterprise Architect will review your submission and contact you within 24 hours.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-primary hover:text-white transition-colors underline">
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Full Name</label>
                      <input
                        {...register("name")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Enterprise Email</label>
                      <input
                        {...register("email")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@enterprise.com"
                      />
                      {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Company Name</label>
                      <input
                        {...register("company")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Acme Corp"
                      />
                      {errors.company && <span className="text-red-400 text-xs">{errors.company.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Your Role</label>
                      <input
                        {...register("role")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. CTO, Head of AI"
                      />
                      {errors.role && <span className="text-red-400 text-xs">{errors.role.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Estimated Budget</label>
                      <select
                        {...register("budget")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">Select Budget</option>
                        <option value="50k-100k">$50k - $100k (Prototyping)</option>
                        <option value="100k-250k">$100k - $250k (Accelerator)</option>
                        <option value="250k-500k">$250k - $500k (Embedded Pod)</option>
                        <option value="500k+">$500k+ (Enterprise Transformation)</option>
                      </select>
                      {errors.budget && <span className="text-red-400 text-xs">{errors.budget.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Project Timeline</label>
                      <select
                        {...register("timeline")}
                        className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (Within 30 days)</option>
                        <option value="q1">1-3 Months</option>
                        <option value="q2">3-6 Months</option>
                        <option value="planning">Just Planning</option>
                      </select>
                      {errors.timeline && <span className="text-red-400 text-xs">{errors.timeline.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300">Project Description & Core Challenges</label>
                    <textarea
                      {...register("description")}
                      rows={4}
                      className="w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Please describe your current architecture, bottlenecks, and what you aim to achieve with Nexus FDEs."
                    />
                    {errors.description && <span className="text-red-400 text-xs">{errors.description.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting Request...</span>
                    ) : (
                      <>Submit Enterprise Request <ArrowRight size={18} /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">Your information is protected by our strict enterprise privacy policy.</p>
                </form>
              )}
            </AnimatedCard>
          </div>

        </div>
      </section>
    </main>
  );
}
