import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { themes } from '../data/content'

export default function Themes() {
  return (
    <div>
      <SectionHeader
        kicker="Themes"
        title="What keeps coming back — and what it becomes"
        sub="Recurring threads across both sessions — the 6.21 marathon and the July cards session (badged S2) — each with the specific take only Spencer has, and the concrete content properties it develops into: series, keynotes, lead magnets, post runs."
      />
      <div className="space-y-6">
        {themes.map((t, i) => (
          <Fade key={t.theme} delay={Math.min(i * 0.03, 0.2)}>
            <Card>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-display text-2xl text-amber">{t.theme}</h3>
                <div className="ml-auto flex flex-wrap gap-1.5">
                  {t.session === 2 && <Tag tone="amber">S2</Tag>}
                  {t.platforms.map((p) => <Tag key={p}>{p}</Tag>)}
                </div>
              </div>
              <p className="text-faded text-sm leading-relaxed mb-4">{t.description}</p>
              <div className="mb-4">
                <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-2">Develops into</div>
                <ul className="space-y-1.5">
                  {t.develop_into.map((d, j) => (
                    <li key={j} className="text-bone text-[13px] leading-relaxed flex gap-2">
                      <span className="text-amber shrink-0">→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="uppercase tracking-widest text-[10px] text-dim">Appears at</span>
                {t.timestamps.slice(0, 10).map((ts, j) => <Timestamp key={j} t={ts} />)}
                {t.timestamps.length > 10 && <span className="text-dim text-[11px]">+{t.timestamps.length - 10} more</span>}
              </div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
