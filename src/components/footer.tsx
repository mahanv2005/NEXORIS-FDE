import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Briefcase, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030712] pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                <Image src="/NF.png" alt="Nexus Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-xl font-heading font-bold tracking-widest text-white ml-2">
                Nexus
              </span>
            </Link>
            <p className="text-gray-400 font-sans leading-relaxed max-w-sm mb-8">
              Enterprise AI. Deployed. Vendor-Neutral. We embed elite AI engineers directly into enterprise teams to build production-ready systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-[#0F172A] border border-white/10 text-gray-400 hover:text-white hover:border-[#00D9FF]/50 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#0F172A] border border-white/10 text-gray-400 hover:text-white hover:border-[#00D9FF]/50 transition-colors">
                <Briefcase size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#0F172A] border border-white/10 text-gray-400 hover:text-white hover:border-[#00D9FF]/50 transition-colors">
                <Code2 size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Forward Deployed Engineers', 'AI Agent Development', 'Enterprise RAG', 'AI Infrastructure', 'Governance'].map(item => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Case Studies', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Cookies'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Nexus FDE Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-sm text-gray-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
