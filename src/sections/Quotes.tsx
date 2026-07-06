import { useMemo, useState } from 'react'
import { SectionHeader, Fade, Timestamp, Stars } from '../components/ui'
import { quotes } from '../data/content'

export default function Quotes() {
  const [cat, setCat] = useState('all')
  const cats = useMemo(() => ['all', ...Array.from(new Set(quotes.map((q) => q.category)))], [])
  const filtered = quotes.filter((q) => cat === 'all' || q.category === cat)

  return (
    <div>
      <SectionHeader
        kicker="Quote Wall"
        title="The lines, with receipts"
        sub="Every quote is timestamped to the master footage — each one is simultaneously a text post, a title card, a thumbnail line, and a clip marker. Written on the wall the way the sticky notes are written on the set."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              cat === c ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {c === 'all' ? `All (${quotes.length})` : c}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-5 [column-fill:_balance]">
        {filtered.map((q, i) => (
          <div key={i} className="break-inside-avoid mb-5">
            <Fade delay={Math.min(i * 0.015, 0.2)}>
              <div className="note-card rounded-xl p-5">
                <p className="font-chalk text-2xl leading-snug text-bone mb-3">&ldquo;{q.quote}&rdquo;</p>
                <div className="flex items-center justify-between mb-2">
                  <Timestamp t={q.timestamp} />
                  <Stars n={q.strength} />
                </div>
                <div className="text-dim text-[11px] uppercase tracking-wider mb-1">{q.category}</div>
                <div className="text-faded text-[12px] leading-relaxed">
                  <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Deploy</span>
                  {q.use}
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}
