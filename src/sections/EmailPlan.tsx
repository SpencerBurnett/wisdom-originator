import { SectionHeader, Card, Fade } from '../components/ui'
import { emailSpine } from '../data/supplement'

export default function EmailPlan() {
  return (
    <div>
      <SectionHeader
        kicker="Email Spine"
        title="The only channel you own like your software"
        sub={emailSpine.positioning}
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <Fade>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Capture points</h3>
            <ul className="space-y-2.5">
              {emailSpine.capture.map((c, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{c}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Welcome sequence</h3>
            <ol className="space-y-2.5">
              {emailSpine.sequence.map((s, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-3">
                  <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{i + 1}</span>{s}
                </li>
              ))}
            </ol>
          </Card>
        </Fade>
      </div>

      <Fade>
        <Card className="border-amber-soft/40">
          <h3 className="font-chalk text-3xl text-amber mb-2">The Sticky Note</h3>
          <p className="text-faded text-sm leading-relaxed">{emailSpine.weekly}</p>
        </Card>
      </Fade>
    </div>
  )
}
