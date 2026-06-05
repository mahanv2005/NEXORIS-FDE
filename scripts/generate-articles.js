const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src/content/blog');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const titles = [
  'The FDE Model in the Enterprise',
  'Why RAG Fails in Production',
  'Vendor Neutrality vs Cloud Lock-in',
  'Scaling Open-Source LLMs with vLLM',
  'SOC2 Compliance for AI Agents',
  'The True Cost of Proprietary Models',
  'Architecting Multi-Agent Supply Chains',
  'Healthcare Clinical Note Automation',
  'Deploying Milvus at Scale',
  'The Future of AI Infrastructure'
];

titles.forEach((t, i) => {
  const slug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const content = `---
title: "${t}"
date: "2024-0${Math.floor(i/2)+1}-1${(i%9)+1}"
category: "Enterprise AI"
---

# ${t}

This is a premium enterprise article about **${t}**. NEXORIS FDE engineers focus on delivering secure, scalable, vendor-neutral infrastructure.

## The Challenge
Enterprise AI adoption is often stalled by lack of talent and fear of vendor lock-in.

## The Architecture
Using an embedded FDE pod, we deploy open-source models with strict data governance.

### Outcomes
- Decreased latency by 40%
- Eliminated third-party data leakage
- Reduced monthly compute costs
`;
  fs.writeFileSync(path.join(dir, slug + '.mdx'), content);
});
console.log('MDX generation complete.');
