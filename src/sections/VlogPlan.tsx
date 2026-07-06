import { SectionHeader, Card, Fade } from '../components/ui'
import { vlog } from '../data/content'

export default function VlogPlan() {
  return (
    <div>
      <SectionHeader
        kicker="Personal Vlog · spencerburnett.com"
        title="The inner world the platforms only hint at"
        sub={vlog.positioning}
      />

      <Fade>
        <Card className="mb-10 border-amber-soft/30">
          <h3 className="font-display text-lg text-amber mb-2">Format</h3>
          <p className="text-faded text-[13px] leading-relaxed whitespace-pre-line">{vlog.format}</p>
        </Card>
      </Fade>

      <h2 className="font-display text-2xl text-bone mb-5">Episode plan</h2>
      <div className="space-y-4 mb-12">
        {vlog.episode_plan.map((e, i) => (
          <Fade key={e.title} delay={Math.min(i * 0.03, 0.2)}>
            <Card>
              <div className="flex gap-4">
                <span className="font-mono text-amber text-sm shrink-0 pt-1">E{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg text-bone mb-1.5">{e.title}</h3>
                  <p className="text-faded text-[13px] leading-relaxed mb-2">{e.premise}</p>
                  <p className="text-dim text-[12px]">
                    <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Source</span>
                    {e.source}
                  </p>
                </div>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Fade>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Site integration</h3>
            <ul className="space-y-2">
              {vlog.site_integration.map((s, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{s}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Cross-platform flow</h3>
            <ul className="space-y-2">
              {vlog.cross_platform.map((c, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{c}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
      </div>
    </div>
  )
}
