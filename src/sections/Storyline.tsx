import { useMemo, useState } from 'react'
import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { chapters, events, toldStories, type TimelineEvent, type ToldStory } from '../data/storyline'

const trackMeta: Record<TimelineEvent['track'], { label: string; dot: string; tone: 'amber' | 'bone' | 'dim' }> = {
  wizard: { label: 'The Wizard', dot: 'bg-amber', tone: 'amber' },
  machine: { label: 'The Machine', dot: 'bg-bone', tone: 'bone' },
  clients: { label: 'Clients', dot: 'bg-emerald-400/80', tone: 'dim' },
  lore: { label: 'Lore', dot: 'bg-rose-400/70', tone: 'dim' },
}

const monthOf = (d: string) => d.slice(0, 7)
const monthLabel: Record<string, string> = {
  '2026-04': 'April — before the door',
  '2026-05': 'May — the machine wakes up',
  '2026-06': 'June — the detonation',
  '2026-07': 'July — the tour begins',
}

function StoryModal({ story, onClose }: { story: ToldStory; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />
      <div
        className="note-card relative rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-2xl text-amber">{story.title}</h3>
          <button onClick={onClose} className="text-dim hover:text-bone text-xl leading-none">×</button>
        </div>
        <p className="font-chalk text-2xl text-bone/90 leading-snug mb-4">&ldquo;{story.teaser}&rdquo;</p>
        <p className="text-faded text-[14px] leading-relaxed whitespace-pre-line mb-5">{story.full}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="amber">{story.stage}</Tag>
          <Tag tone="bone">{story.where_told}</Tag>
          <Timestamp t={story.when_told} />
          {story.clearance && <Tag>⚠ clearance before publishing</Tag>}
        </div>
      </div>
    </div>
  )
}

export default function Storyline() {
  const [track, setTrack] = useState<'all' | TimelineEvent['track']>('all')
  const [openStory, setOpenStory] = useState<ToldStory | null>(null)

  const sorted = useMemo(() => [...events].sort((a, b) => a.date.localeCompare(b.date)), [])
  const filtered = sorted.filter((e) => track === 'all' || e.track === track)

  const chapterFor = (date: string) => {
    let current = chapters[0]
    for (const c of chapters) {
      const m = c.date_range.match(/(\d{4}-\d{2}-\d{2})/)
      if (m && date >= m[1]) current = c
    }
    return current
  }

  let lastMonth = ''
  let lastStage = ''

  return (
    <div>
      <SectionHeader
        kicker="The Storyline · April 1 → July 6, 2026"
        title="One arc. Two journeys. Ninety-six days."
        sub="The whole story, reconstructed from every call recording, transcript, and build log in the window: the Wizard's hero's journey and, threaded through it, the Machine's evolution — the technology that makes the magic literal. The stories he tells all the time are pinned where they happened and where he tells them."
      />

      {chapters.length === 0 ? (
        <Card><p className="text-faded text-sm">Timeline synthesis in progress — data lands here when the mining workflow completes.</p></Card>
      ) : (
        <>
          <h2 className="font-display text-2xl text-bone mb-4">The stories he tells all the time</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-4 mb-12">
            {toldStories.map((s) => (
              <button
                key={s.title}
                onClick={() => setOpenStory(s)}
                className="note-card shrink-0 w-72 rounded-xl p-5 text-left hover:border-amber-soft/60 transition-colors"
              >
                <h3 className="font-display text-lg text-amber mb-2 leading-snug">{s.title}</h3>
                <p className="font-chalk text-xl text-bone/90 leading-snug mb-3">&ldquo;{s.teaser}&rdquo;</p>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <Tag tone="dim">{s.stage}</Tag>
                  {s.clearance && <Tag>⚠</Tag>}
                </div>
                <p className="text-dim text-[11px] mt-2">Click to read the telling →</p>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10 items-center">
            <button
              onClick={() => setTrack('all')}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${track === 'all' ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'}`}
            >
              All tracks ({sorted.length})
            </button>
            {(Object.keys(trackMeta) as TimelineEvent['track'][]).map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors flex items-center gap-2 ${track === t ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'}`}
              >
                <span className={`w-2 h-2 rounded-full ${trackMeta[t].dot}`} />
                {trackMeta[t].label}
              </button>
            ))}
          </div>

          <div className="relative border-l border-edge ml-3 md:ml-40 pl-8 md:pl-10 space-y-8 pb-4">
            {filtered.map((e, i) => {
              const ch = chapterFor(e.date)
              const showStage = ch && ch.stage !== lastStage
              if (ch) lastStage = ch.stage
              const m = monthOf(e.date)
              const showMonth = m !== lastMonth
              lastMonth = m
              return (
                <div key={`${e.date}-${e.title}`}>
                  {showMonth && (
                    <div className="relative -ml-8 md:-ml-10 mb-8 mt-2">
                      <div className="font-chalk text-3xl text-amber">{monthLabel[m] ?? m}</div>
                    </div>
                  )}
                  {showStage && ch && (
                    <Fade>
                      <Card className="mb-8 border-amber/40 relative">
                        <span className="absolute -left-[42px] md:-left-[50px] top-6 w-4 h-4 rounded-full bg-amber ring-4 ring-ink" />
                        <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-1">{ch.stage} · {ch.date_range}</div>
                        <h3 className="font-display text-2xl text-amber mb-2">{ch.title}</h3>
                        <p className="text-faded text-[13px] leading-relaxed">{ch.narration}</p>
                      </Card>
                    </Fade>
                  )}
                  <Fade delay={Math.min(i * 0.01, 0.1)}>
                    <div className="relative">
                      <span className={`absolute -left-[37px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full ${trackMeta[e.track].dot} ring-4 ring-ink`} />
                      <div className="hidden md:block absolute -left-40 top-0 w-28 text-right">
                        <span className="font-mono text-[11px] text-amber">{e.date.slice(5)}</span>
                      </div>
                      <Card className={e.image ? '!p-0 overflow-hidden' : ''}>
                        {e.image ? (
                          <div className="flex flex-col sm:flex-row">
                            <img src={e.image} alt={e.title} loading="lazy" className="sm:w-56 shrink-0 object-cover max-h-44 sm:max-h-none" />
                            <div className="p-4">
                              <EventBody e={e} />
                            </div>
                          </div>
                        ) : (
                          <EventBody e={e} />
                        )}
                      </Card>
                    </div>
                  </Fade>
                </div>
              )
            })}
          </div>
        </>
      )}

      {openStory && <StoryModal story={openStory} onClose={() => setOpenStory(null)} />}
    </div>
  )
}

function EventBody({ e }: { e: TimelineEvent }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
        <span className="font-mono text-[11px] text-amber md:hidden">{e.date.slice(5)}</span>
        <h4 className="text-bone font-medium text-[14px]">{e.title}</h4>
        <span className="ml-auto flex gap-1.5">
          <Tag tone={trackMeta[e.track].tone}>{trackMeta[e.track].label}</Tag>
          {e.clearance && <Tag>⚠</Tag>}
        </span>
      </div>
      <p className="text-faded text-[13px] leading-relaxed">{e.body}</p>
      {e.source && <p className="text-dim text-[11px] mt-1.5">{e.source}</p>}
    </>
  )
}
