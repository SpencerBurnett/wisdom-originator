import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { frames, posterNote } from '../data/frames'
import { physicalMoments } from '../data/content'
import { stickyNoteIndex, albumDeployment } from '../data/supplement'

export default function Physical() {
  return (
    <div>
      <SectionHeader
        kicker="The Physical Layer"
        title="The content is also how you look"
        sub="Fifteen stills pulled straight off the Frame.io master, one every ~30 minutes. The night reads as a costume drama in five acts: knit → shawl → meal → aviators → notes-to-camera. Every wardrobe and prop shift is an act break an editor can cut to — and every frame below is a thumbnail candidate."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {frames.map((f, i) => (
          <Fade key={f.file} delay={Math.min(i * 0.03, 0.3)}>
            <Card className="overflow-hidden !p-0">
              <img src={f.file} alt={f.label} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-lg text-bone">{f.label}</h3>
                  <Timestamp t={f.timestamp} />
                </div>
                <p className="text-faded text-[13px] leading-relaxed">{f.note}</p>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-14 border-amber-soft/40">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img src="/frames/poster.png" alt="Frame.io poster frame" className="w-full md:w-80 rounded-lg" />
            <div>
              <h3 className="font-display text-xl text-amber mb-2">The poster frame</h3>
              <p className="text-faded text-sm leading-relaxed">{posterNote}</p>
            </div>
          </div>
        </Card>
      </Fade>

      <h2 className="font-display text-2xl text-bone mb-2">The sticky-note index</h2>
      <p className="text-faded text-sm mb-6 max-w-3xl">
        Starter inventory of the note wall — the bill of materials for the Oracle Deck series, the merch
        set, and the book serialization. Stage-4 logging completes the full 50+ during the first edit pass.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {stickyNoteIndex.map((n, i) => (
          <Fade key={i} delay={Math.min(i * 0.02, 0.2)}>
            <Card>
              <p className="font-chalk text-2xl text-bone leading-snug mb-2">{n.text}</p>
              <div className="flex items-center gap-3 mb-2">
                <Timestamp t={n.timestamp} />
                <Tag tone={n.status === 'held to camera' ? 'amber' : 'dim'}>{n.status}</Tag>
              </div>
              <p className="text-faded text-[12px] leading-relaxed">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Deploy</span>
                {n.deployment}
              </p>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-14 border-amber-soft/40">
          <h3 className="font-display text-xl text-amber mb-2">The 90-image album — deployment map</h3>
          <p className="text-faded text-sm leading-relaxed mb-4">{albumDeployment.intro}</p>
          <ul className="space-y-2">
            {albumDeployment.uses.map((u, i) => (
              <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-2">
                <span className="text-amber shrink-0">→</span>{u}
              </li>
            ))}
          </ul>
        </Card>
      </Fade>

      {physicalMoments.length > 0 && (
        <>
          <h2 className="font-display text-2xl text-bone mb-6">Physical moments logged from the transcript</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {physicalMoments.map((m, i) => (
              <Fade key={i} delay={Math.min(i * 0.02, 0.2)}>
                <Card>
                  <div className="mb-1.5"><Timestamp t={m.timestamp} /></div>
                  <p className="text-bone text-sm leading-relaxed mb-2">{m.description}</p>
                  {m.content_idea && (
                    <p className="text-amber/90 text-[13px] leading-relaxed">
                      <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Use it</span>
                      {m.content_idea}
                    </p>
                  )}
                </Card>
              </Fade>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
