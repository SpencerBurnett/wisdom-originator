import { useMemo, useState } from 'react'
import { LayoutGrid, CalendarDays } from 'lucide-react'
import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { enrichedIdeas, storylineIdeas, type EnrichedIdea } from '../data/ideasEnriched'
import { ideas as rawIdeas } from '../data/content'

const effortTone: Record<string, string> = { light: 'text-emerald-300', medium: 'text-amber', heavy: 'text-rose-300' }

function IdeaModal({ idea, onClose }: { idea: EnrichedIdea; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />
      <div
        className="note-card relative rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {idea.image && <img src={idea.image} alt="" className="w-full max-h-56 object-cover rounded-t-2xl" />}
        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display text-2xl text-amber leading-snug">{idea.title}</h3>
            <button onClick={onClose} className="text-dim hover:text-bone text-xl leading-none">×</button>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            <Tag tone="amber">{idea.platform}</Tag>
            <Tag tone="bone">{idea.archetype}</Tag>
            <Tag>{idea.month}</Tag>
            <span className={`inline-block rounded-full border border-edge px-2.5 py-0.5 text-[11px] ${effortTone[idea.effort]}`}>{idea.effort} lift</span>
            <Tag tone={idea.impact === 'flagship' ? 'amber' : 'dim'}>{idea.impact}</Tag>
          </div>
          <p className="text-faded text-[14px] leading-relaxed mb-5">{idea.summary}</p>
          {idea.source_beat && (
            <p className="text-dim text-[12px] leading-relaxed mb-5">
              <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Sparked by</span>
              {idea.source_beat}
            </p>
          )}
          <h4 className="uppercase tracking-widest text-[10px] text-amber-soft mb-3">How we&rsquo;d build it</h4>
          <ol className="space-y-2.5 mb-6">
            {idea.implementation.map((s, i) => (
              <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
                <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="rounded-lg border border-amber-soft/40 bg-amber/5 px-4 py-3">
            <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">First action</span>
            <span className="text-bone text-[13px]">{idea.first_action}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function IdeaBank() {
  const all = useMemo(
    () => [
      ...storylineIdeas.map((i) => ({ ...i, fresh: true })),
      ...enrichedIdeas.map((i) => ({ ...i, fresh: false })),
    ],
    [],
  )
  const [platform, setPlatform] = useState('all')
  const [archetype, setArchetype] = useState('all')
  const [freshOnly, setFreshOnly] = useState(false)
  const [open, setOpen] = useState<EnrichedIdea | null>(null)
  const [view, setView] = useState<'grid' | 'calendar'>('grid')

  const platforms = useMemo(() => ['all', ...Array.from(new Set(all.map((i) => i.platform)))], [all])
  const archetypes = useMemo(() => ['all', ...Array.from(new Set(all.map((i) => i.archetype)))], [all])
  const months = useMemo(() => Array.from(new Set(all.map((i) => i.month))), [all])

  const filtered = all.filter(
    (i) =>
      (platform === 'all' || i.platform === platform) &&
      (archetype === 'all' || i.archetype === archetype) &&
      (!freshOnly || i.fresh),
  )

  if (all.length === 0) {
    return (
      <div>
        <SectionHeader kicker="Idea Bank" title="Every idea the footage sparked" sub="Visual enrichment in progress — the structured, clickable version lands when the workflow completes." />
        <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
          {rawIdeas.map((idea, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <div className="note-card rounded-lg px-4 py-3 flex gap-3">
                <span className="font-mono text-[10px] text-dim pt-0.5 shrink-0">{String(i + 1).padStart(3, '0')}</span>
                <p className="text-bone/90 text-[13px] leading-relaxed">{idea}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <SectionHeader
        kicker="Idea Bank"
        title="Every idea, ready to build"
        sub="Each card carries its metadata — platform, fronting archetype, lift, impact, calendar month — and clicking one opens the implementation plan: how we'd actually make it, and the single first action. Ideas marked ✦ were sparked by reading the Storyline."
      />

      <div className="flex flex-wrap gap-2 mb-3">
        {platforms.map((p) => (
          <button key={p} onClick={() => setPlatform(p)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${platform === p ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'}`}>
            {p === 'all' ? 'All platforms' : p}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {archetypes.map((a) => (
          <button key={a} onClick={() => setArchetype(a)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${archetype === a ? 'border-bone text-bone bg-bone/10' : 'border-edge text-dim hover:text-faded'}`}>
            {a === 'all' ? 'All archetypes' : a}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button onClick={() => setFreshOnly(!freshOnly)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${freshOnly ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'}`}>
            ✦ New from the Storyline ({storylineIdeas.length})
          </button>
          <span className="text-dim text-xs">{filtered.length} of {all.length} ideas</span>
        </div>
        <div className="flex items-center gap-2 bg-ink rounded-lg border border-edge p-1">
          <button onClick={() => setView('grid')} className={`p-1.5 rounded-md transition-colors ${view === 'grid' ? 'bg-amber/20 text-amber' : 'text-dim hover:text-bone'}`}><LayoutGrid size={16} /></button>
          <button onClick={() => setView('calendar')} className={`p-1.5 rounded-md transition-colors ${view === 'calendar' ? 'bg-amber/20 text-amber' : 'text-dim hover:text-bone'}`}><CalendarDays size={16} /></button>
        </div>
      </div>

      {view === 'calendar' ? (
        <Fade>
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin items-start">
            {months.map(month => {
              const monthIdeas = filtered.filter(i => i.month === month);
              if (monthIdeas.length === 0) return null;
              return (
                <div key={month} className="min-w-[280px] w-[280px] flex flex-col gap-3">
                  <div className="font-chalk text-xl text-amber border-b border-edge/50 pb-2 mb-2">{month}</div>
                  {monthIdeas.map((idea, i) => (
                    <button
                      key={`${idea.title}-${i}`}
                      onClick={() => setOpen(idea)}
                      className="note-card rounded-lg p-3 text-left hover:border-amber-soft/60 transition-colors bg-panel/40"
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="text-bone font-medium text-[13px] leading-tight flex-1">{idea.title}</span>
                        {idea.impact === 'flagship' && <span className="ml-2 text-[9px] uppercase tracking-widest text-amber border border-amber/30 rounded px-1.5 py-0.5 shrink-0">Flagship</span>}
                      </div>
                      <div className="text-faded text-[11px] leading-relaxed line-clamp-2 mb-3">{idea.summary}</div>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        <Tag tone="amber">{idea.platform}</Tag>
                        <span className={`inline-block rounded-full border border-edge px-2.5 py-0.5 text-[10px] ${effortTone[idea.effort]}`}>{idea.effort}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )
            })}
          </div>
        </Fade>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((idea, i) => (
            <Fade key={`${idea.title}-${i}`} delay={Math.min((i % 12) * 0.02, 0.2)}>
              <button
                onClick={() => setOpen(idea)}
                className="note-card rounded-xl overflow-hidden text-left w-full h-full flex flex-col hover:border-amber-soft/60 transition-colors"
              >
                <div className="relative">
                  <img src={idea.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
                  {idea.fresh && (
                    <span className="absolute top-2 right-2 rounded-full bg-amber text-ink text-[10px] font-semibold px-2 py-0.5">✦ new</span>
                  )}
                  {idea.impact === 'flagship' && (
                    <span className="absolute top-2 left-2 rounded-full bg-ink/80 border border-amber-soft/60 text-amber text-[10px] px-2 py-0.5">flagship</span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-bone font-medium text-[14px] leading-snug mb-1.5">{idea.title}</h3>
                  <p className="text-faded text-[12px] leading-relaxed mb-3 line-clamp-2">{idea.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    <Tag tone="amber">{idea.platform}</Tag>
                    <Tag tone="dim">{idea.archetype}</Tag>
                    <span className={`inline-block rounded-full border border-edge px-2.5 py-0.5 text-[11px] ${effortTone[idea.effort]}`}>{idea.effort}</span>
                    <Tag tone="dim">{idea.month}</Tag>
                  </div>
                </div>
              </button>
            </Fade>
          ))}
        </div>
      )}

      {open && <IdeaModal idea={open} onClose={() => setOpen(null)} />}
    </div>
  )
}
