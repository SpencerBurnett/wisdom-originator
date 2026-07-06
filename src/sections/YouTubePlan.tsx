import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { youtube } from '../data/content'
import { thumbnailChain } from '../data/supplement'

export default function YouTubePlan() {
  return (
    <div>
      <SectionHeader
        kicker="YouTube Strategy"
        title="The channel where the thumbnail is frame one"
        sub={youtube.positioning}
      />

      <h2 className="font-display text-2xl text-bone mb-5">Content pillars</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {youtube.pillars.map((p, i) => (
          <Fade key={p.pillar} delay={i * 0.04}>
            <Card>
              <h3 className="font-display text-lg text-amber mb-2">{p.pillar}</h3>
              <p className="text-faded text-[13px] leading-relaxed mb-3">{p.description}</p>
              {p.source_themes && (
                <div className="flex flex-wrap gap-1.5">
                  {p.source_themes.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              )}
            </Card>
          </Fade>
        ))}
      </div>

      <h2 className="font-display text-2xl text-bone mb-5">Named series</h2>
      <div className="space-y-4 mb-12">
        {youtube.series.map((s, i) => (
          <Fade key={s.title} delay={i * 0.04}>
            <Card className="border-amber-soft/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-xl text-amber">{s.title}</h3>
                <Tag tone="amber">{s.cadence}</Tag>
              </div>
              <p className="text-faded text-[13px] leading-relaxed mb-3">{s.premise}</p>
              {s.episodes && s.episodes.length > 0 && (
                <ul className="space-y-1">
                  {s.episodes.map((e, j) => (
                    <li key={j} className="text-bone/90 text-[13px] flex gap-2">
                      <span className="font-mono text-[11px] text-dim pt-0.5">E{j + 1}</span>{e}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </Fade>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <Fade>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Cadence</h3>
            <p className="text-faded text-[13px] leading-relaxed">{youtube.cadence}</p>
          </Card>
        </Fade>
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Metrics that matter</h3>
            <ul className="space-y-1.5">
              {youtube.metrics.map((m, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{m}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
      </div>

      <h2 className="font-display text-2xl text-bone mb-5">The thumbnail system</h2>
      <Card className="mb-12">
        <ol className="space-y-2.5">
          {youtube.thumbnail_system.map((t, i) => (
            <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
              <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {t}
            </li>
          ))}
        </ol>
      </Card>

      <h2 className="font-display text-2xl text-bone mb-5">The chain map</h2>
      <Card className="mb-12 border-amber-soft/30">
        <p className="text-faded text-[13px] leading-relaxed mb-4">{thumbnailChain.rule}</p>
        <ol className="space-y-2">
          {thumbnailChain.chain.map((c, i) => (
            <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
              <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {c}
            </li>
          ))}
        </ol>
      </Card>

      <h2 className="font-display text-2xl text-bone mb-5">First 30 days</h2>
      <Card>
        <ol className="space-y-2.5">
          {youtube.first_30_days.map((a, i) => (
            <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
              <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {a}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}
