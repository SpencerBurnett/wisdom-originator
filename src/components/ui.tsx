import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <div className="text-amber text-xs font-semibold tracking-[0.25em] uppercase mb-3">{kicker}</div>
      <h1 className="font-display text-4xl md:text-5xl text-bone leading-tight">{title}</h1>
      {sub && <p className="text-faded mt-4 max-w-3xl text-[15px] leading-relaxed">{sub}</p>}
    </div>
  )
}

export function Card({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`note-card rounded-xl p-5 ${className}`}>{children}</div>
}

export function Fade({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Tag({ children, tone = 'dim' }: { children: ReactNode; tone?: 'dim' | 'amber' | 'bone' }) {
  const tones = {
    dim: 'border-edge text-faded',
    amber: 'border-amber-soft/50 text-amber',
    bone: 'border-bone/30 text-bone',
  }
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Timestamp({ t }: { t: string }) {
  return <span className="font-mono text-[11px] text-amber tracking-tight">{t}</span>
}

export function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber text-xs tracking-widest" title={`strength ${n}/5`}>
      {'●'.repeat(Math.max(0, Math.min(5, Math.round(n))))}
      <span className="text-edge">{'●'.repeat(Math.max(0, 5 - Math.round(n)))}</span>
    </span>
  )
}
