import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { frames, frames2, posterNote, session2Note } from '../data/frames'
import { physicalMoments } from '../data/content'
import { stickyNoteIndex, albumDeployment } from '../data/supplement'

export default function Physical() {
  return (
    <div>
      <SectionHeader
        kicker="The Physical Layer"
        title="The content is also how you look"
        sub="Stills pulled straight off both Frame.io masters. Session 1 reads as a costume drama in five acts: knit → shawl → meal → aviators → notes-to-camera. Session 2 wears its continuity on purpose — same set, same shawl, aviators on from frame one — and tells its story in posture instead: open palms → the phone → crossed arms. Every wardrobe, prop, and posture shift is an act break an editor can cut to, and every frame below is a thumbnail candidate."
      />

      <h2 className="font-display text-2xl text-bone mb-4">Session 1 — the costume drama</h2>
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

      <h2 className="font-display text-2xl text-bone mb-2">Session 2 — the posture arc</h2>
      <p className="text-faded text-sm mb-6 max-w-3xl">{session2Note}</p>
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {frames2.map((f, i) => (
          <Fade key={f.file} delay={Math.min(i * 0.03, 0.3)}>
            <Card className="overflow-hidden !p-0">
              <img src={f.file} alt={f.label} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-bone">{f.label}</h3>
                  <span className="flex items-center gap-2 shrink-0">
                    <Tag tone="amber">S2</Tag>
                    <Timestamp t={f.timestamp} />
                  </span>
                </div>
                <p className="text-faded text-[13px] leading-relaxed">{f.note}</p>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

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
          <h2 className="font-display text-2xl text-bone mb-6">Physical moments logged from the transcripts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {physicalMoments.map((m, i) => (
              <Fade key={i} delay={Math.min(i * 0.02, 0.2)}>
                <Card>
                  <div className="mb-1.5 flex items-center gap-2">
                    <Timestamp t={m.timestamp} />
                    {m.session === 2 && <Tag tone="amber">S2</Tag>}
                  </div>
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
