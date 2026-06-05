"use client";

import { motion } from "framer-motion";
import { Database, Network, Cpu, ArrowRight } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Node 1: Data Sources */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative z-10 flex flex-col items-center p-6 bg-surface border border-white/10 rounded-2xl w-48 shadow-[0_0_20px_rgba(0,102,255,0.1)] hover:border-secondary/50 transition-colors"
        >
          <Database className="w-10 h-10 text-secondary mb-3" />
          <h4 className="font-heading font-semibold text-center">Enterprise Data</h4>
          <span className="text-xs text-text-muted mt-1">SQL, SharePoint, SAP</span>
        </motion.div>

        {/* Arrow 1 */}
        <div className="hidden md:flex flex-1 items-center justify-center relative h-10">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-secondary/20 to-primary/20" />
          <motion.div 
            animate={{ x: [0, 100] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#0066FF]"
          />
          <ArrowRight className="text-white/20 z-10 bg-background-dark px-1" />
        </div>

        {/* Node 2: Vector DB & RAG */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative z-10 flex flex-col items-center p-6 bg-surface border border-white/10 rounded-2xl w-48 shadow-[0_0_20px_rgba(0,217,255,0.1)] hover:border-primary/50 transition-colors"
        >
          <Network className="w-10 h-10 text-primary mb-3" />
          <h4 className="font-heading font-semibold text-center">Vector Engine</h4>
          <span className="text-xs text-text-muted mt-1">Milvus, Pinecone</span>
        </motion.div>

        {/* Arrow 2 */}
        <div className="hidden md:flex flex-1 items-center justify-center relative h-10">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-primary/20 to-accent-glow/20" />
          <motion.div 
            animate={{ x: [0, 100] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#00D9FF]"
          />
          <ArrowRight className="text-white/20 z-10 bg-background-dark px-1" />
        </div>

        {/* Node 3: Model Router */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative z-10 flex flex-col items-center p-6 bg-surface border border-white/10 rounded-2xl w-56 shadow-[0_0_20px_rgba(0,229,255,0.1)] hover:border-accent-glow/50 transition-colors"
        >
          <Cpu className="w-10 h-10 text-accent-glow mb-3" />
          <h4 className="font-heading font-semibold text-center mb-3">Model Router</h4>
          
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-white/5 border border-white/10">OpenAI</span>
            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-white/5 border border-white/10">Claude</span>
            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-white/5 border border-white/10">Llama 3</span>
            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-white/5 border border-white/10">Mistral</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
