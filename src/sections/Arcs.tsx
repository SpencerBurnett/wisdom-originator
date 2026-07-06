import { SectionHeader, Card, Fade, Timestamp } from '../components/ui'
import { arcs } from '../data/content'

export default function Arcs() {
  return (
    <div>
      <SectionHeader
        kicker="Narrative Arcs"
        title="Storylines that span the whole night"
        sub="Multi-beat arcs an editor can cut into documentary and episodic treatments — including the meta-arc of the shoot itself, which ends by telling the story of how it began."
      />
      <div className="space-y-8">
        {arcs.map((a, i) => (
          <Fade key={a.arc} delay={Math.min(i * 0.04, 0.2)}>
            <Card>
              <h3 className="font-display text-2xl text-amber mb-2">{a.arc}</h3>
              <p className="text-faded text-sm leading-relaxed mb-5">{a.description}</p>
              <div className="border-l border-edge ml-1.5 pl-5 space-y-4 mb-5">
                {a.beats.map((b, j) => (
                  <div key={j} className="relative">
                    <span className="absolute -left-[26px] top-1.5 w-2 h-2 rounded-full bg-amber" />
                    <div className="mb-0.5"><Timestamp t={b.timestamp} /></div>
                    <p className="text-bone text-[13px] leading-relaxed">{b.beat}</p>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Treatment</span>
                <span className="text-faded text-[13px] leading-relaxed">{a.treatment}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {a.title_ideas.map((t, j) => (
                  <span key={j} className="font-chalk text-lg text-bone/90 bg-card border border-edge rounded-lg px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
