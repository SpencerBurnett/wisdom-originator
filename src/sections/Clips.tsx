import { useMemo, useState } from 'react'
import { SectionHeader, Card, Fade, Tag, Timestamp, Stars } from '../components/ui'
import { clips, shorts, pillarVideos } from '../data/content'

const platformLabels: Record<string, string> = {
  'youtube-long': 'YT Long',
  'youtube-short': 'YT Short',
  linkedin: 'LinkedIn',
  vlog: 'Vlog',
  instagram: 'IG',
}

export default function Clips() {
  const [platform, setPlatform] = useState<string>('all')
  const [format, setFormat] = useState<string>('all')
  const [session, setSession] = useState<string>('all')

  const formats = useMemo(() => ['all', ...Array.from(new Set(clips.map((c) => c.format)))], [])
  const filtered = clips.filter(
    (c) =>
      (platform === 'all' || c.platforms.includes(platform)) &&
      (format === 'all' || c.format === format) &&
      (session === 'all' || (session === '2' ? c.session === 2 : c.session !== 2)),
  )

  return (
    <div>
      <SectionHeader
        kicker="Clip Library"
        title="Every self-contained cut, by timestamp"
        sub="Ranked master list mined from both transcripts — C01–C80 from the 6.21 marathon, C81–C126 from the July cards session (badged S2; timestamps reference each clip's own master). Each entry stands alone with no outside context — hand any row to an editor and it becomes a piece of content. Filter by session, destination platform, or format."
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { id: 'all', label: 'Both sessions' },
          { id: '1', label: 'S1 · 6.21' },
          { id: '2', label: 'S2 · July' },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setSession(s.id)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              session === s.id ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {['all', 'youtube-long', 'youtube-short', 'linkedin', 'vlog', 'instagram'].map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              platform === p ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {p === 'all' ? 'All platforms' : platformLabels[p] ?? p}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {formats.map((f) => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              format === f ? 'border-bone text-bone bg-bone/10' : 'border-edge text-dim hover:text-faded'
            }`}
          >
            {f === 'all' ? 'All formats' : f}
          </button>
        ))}
      </div>

      <div className="text-dim text-xs mb-5">{filtered.length} of {clips.length} clips</div>

      <div className="space-y-4 mb-16">
        {filtered.map((c, i) => (
          <Fade key={c.id} delay={Math.min(i * 0.015, 0.15)}>
            <Card>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-mono text-[11px] text-dim">{c.id}</span>
                <h3 className="font-display text-lg text-bone">{c.title}</h3>
                <span className="ml-auto flex items-center gap-3">
                  {c.session === 2 && <Tag tone="amber">S2</Tag>}
                  <Timestamp t={`${c.start} → ${c.end}`} />
                  <Stars n={c.strength} />
                </span>
              </div>
              <p className="font-chalk text-xl text-amber/90 mb-2 leading-snug">&ldquo;{c.hook}&rdquo;</p>
              <p className="text-faded text-[13px] leading-relaxed mb-3">{c.summary}</p>
              {c.edit_notes && (
                <p className="text-dim text-[12px] leading-relaxed mb-3">
                  <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Edit</span>
                  {c.edit_notes}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5">
                <Tag tone="bone">{c.format}</Tag>
                {c.platforms.map((p) => (
                  <Tag key={p}>{platformLabels[p] ?? p}</Tag>
                ))}
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      <h2 className="font-display text-2xl text-bone mb-2">The shorts stack</h2>
      <p className="text-faded text-sm mb-6 max-w-3xl">
        Sub-60-second vertical cuts, ready to caption and post. Each references its source clip above.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {shorts.map((s, i) => {
          const src = clips.find((c) => c.id === s.source_clip)
          return (
            <Fade key={i} delay={Math.min(i * 0.02, 0.2)}>
              <Card>
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="text-bone text-sm font-medium">{s.title}</h3>
                  <span className="flex items-center gap-2 shrink-0">
                    {src?.session === 2 && <Tag tone="amber">S2</Tag>}
                    <span className="font-mono text-[11px] text-dim">{s.source_clip}</span>
                  </span>
                </div>
                <p className="font-chalk text-lg text-amber/90 leading-snug">&ldquo;{s.hook}&rdquo;</p>
              </Card>
            </Fade>
          )
        })}
      </div>

      <h2 className="font-display text-2xl text-bone mb-2">Pillar videos</h2>
      <p className="text-faded text-sm mb-6 max-w-3xl">
        Long-form YouTube episodes assembled from clip clusters — the spine of the channel.
      </p>
      <div className="space-y-4">
        {pillarVideos.map((p, i) => (
          <Fade key={p.title} delay={Math.min(i * 0.03, 0.2)}>
            <Card className="border-amber-soft/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-xl text-amber">{p.title}</h3>
                <span className="flex items-center gap-2">
                  {p.session === 2 && <Tag tone="bone">S2</Tag>}
                  <Tag tone="amber">{p.runtime_estimate}</Tag>
                </span>
              </div>
              <p className="text-faded text-[13px] leading-relaxed mb-3">{p.premise}</p>
              {p.thumbnail_concept && (
                <p className="text-dim text-[12px] leading-relaxed mb-3">
                  <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Thumbnail</span>
                  {p.thumbnail_concept}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5">
                {p.source_clips.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
