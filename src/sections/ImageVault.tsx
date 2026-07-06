import { useState } from 'react'
import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { album, deckConcept, monthlyImageMap } from '../data/album'

const families = [
  { id: 'all', label: 'All' },
  { id: 'crayon-deck', label: 'The Crayon Deck' },
  { id: 'brand', label: 'Brand Assets' },
  { id: 'set', label: 'The Set' },
  { id: 'lore', label: 'Lore' },
  { id: 'motion', label: 'Motion' },
]

export default function ImageVault() {
  const [fam, setFam] = useState('all')
  const filtered = album.filter((a) => fam === 'all' || a.family === fam)

  return (
    <div>
      <SectionHeader
        kicker="Image Vault · ~/Desktop/Pics"
        title="39 images. Every one has a job."
        sub="Three families: the Crayon Deck (27 boards shot from one fixed overhead position), brand assets (the merch already exists), and set/lore shots. Each entry below: what it is, the creative plays, and where it lands in the four months."
      />

      <Fade>
        <Card className="mb-10 border-amber/40">
          <h3 className="font-display text-xl text-amber mb-2">{deckConcept.headline}</h3>
          <p className="text-faded text-[13px] leading-relaxed">{deckConcept.body}</p>
        </Card>
      </Fade>

      <div className="flex flex-wrap gap-2 mb-8">
        {families.map((f) => (
          <button
            key={f.id}
            onClick={() => setFam(f.id)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              fam === f.id ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="text-dim text-xs mb-5">{filtered.length} of {album.length} assets</div>

      <div className="space-y-6 mb-14">
        {filtered.map((a, i) => (
          <Fade key={a.file} delay={Math.min(i * 0.02, 0.15)}>
            <Card className="!p-0 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-80 shrink-0 bg-black/40">
                  {a.family === 'motion' ? (
                    <video src="/pics/acro.mov" controls muted loop playsInline poster={a.file} className="w-full h-full object-cover" />
                  ) : (
                    <img src={a.file} alt={a.title} loading="lazy" className="w-full h-full object-cover max-h-72 md:max-h-none" />
                  )}
                </div>
                <div className="p-5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display text-lg text-bone">{a.title}</h3>
                    <Tag tone="dim">{a.family}</Tag>
                    <span className="ml-auto font-mono text-[10px] text-dim">{a.file.split('/').pop()}</span>
                  </div>
                  <p className="text-faded text-[13px] leading-relaxed mb-3">{a.whatItIs}</p>
                  <div className="mb-3">
                    <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-1.5">Plays</div>
                    <ul className="space-y-1.5">
                      {a.plays.map((p, j) => (
                        <li key={j} className="text-bone/90 text-[13px] leading-relaxed flex gap-2">
                          <span className="text-amber shrink-0">→</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {a.caption && (
                    <p className="font-chalk text-lg text-amber/90 leading-snug mb-3">{a.caption}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag tone="amber">{a.slot}</Tag>
                    {a.clearance && <Tag tone="bone">⚠ {a.clearance}</Tag>}
                  </div>
                </div>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      <h2 className="font-display text-2xl text-bone mb-5">Where the images land, month by month</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {monthlyImageMap.map((m, i) => (
          <Fade key={m.month} delay={i * 0.04}>
            <Card>
              <div className="font-chalk text-2xl text-amber mb-2">{m.month}</div>
              <p className="text-faded text-[13px] leading-relaxed">{m.items}</p>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
