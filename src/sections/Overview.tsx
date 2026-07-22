import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { clips, quotes, themes, arcs, shorts, pillarVideos, ideas } from '../data/content'
import { frames, frames2, session2Note } from '../data/frames'

const s2 = (arr: { session?: number }[]) => arr.filter((x) => x.session === 2).length

const stats = () => [
  { n: '8h 42m', l: 'on camera across two sessions' },
  { n: String(clips.length), l: `self-contained clips logged (${s2(clips)} from S2)` },
  { n: String(shorts.length), l: 'shorts ready to cut' },
  { n: String(pillarVideos.length), l: 'long-form pillar videos' },
  { n: String(quotes.length), l: `timestamped quotes (${s2(quotes)} from S2)` },
  { n: String(themes.length), l: 'themes to develop' },
  { n: String(arcs.length), l: 'narrative arcs' },
  { n: String(ideas.length), l: 'raw ideas banked' },
]

export default function Overview() {
  return (
    <div>
      <SectionHeader
        kicker="Session 1 · June 21 — Session 2 · July 2026"
        title="Two sessions on camera. One continuous film."
        sub="Session 1: Chris Douglas put a camera on Spencer for six hours and six minutes of unbroken stream of consciousness — hair check to magic trick. Session 2, shot a Thursday night in mid-July and uploaded 7.22: the cards come out — a homie feeds written questions from behind the lens for 2h36m, the cat opens the show, the breakup happens on camera between segments, and the cleanest founder doctrine on tape lands in the middle of the storm. This site is the full breakdown of both masters: every clip with its timestamp, every quotable line, the themes, the arcs, the physical layer, and the four-month plan the footage funds."
      />

      <Fade>
        <div className="relative rounded-2xl overflow-hidden mb-10 border border-edge">
          <img src="/frames/t14700.jpg" alt="The download pose" className="w-full object-cover max-h-[420px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <div className="font-chalk text-3xl text-amber drop-shadow">&ldquo;Complete. Not tired.&rdquo;</div>
              <div className="text-faded text-xs mt-1">— S1, 1:30am, after six straight hours</div>
            </div>
            <Tag tone="amber">the download pose · S1 4:05:00</Tag>
          </div>
        </div>
      </Fade>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {stats().map((s, i) => (
          <Fade key={s.l} delay={i * 0.04}>
            <Card className="text-center py-6">
              <div className="font-display text-3xl text-amber">{s.n}</div>
              <div className="text-dim text-[11px] mt-2 uppercase tracking-wider leading-relaxed">{s.l}</div>
            </Card>
          </Fade>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-14">
        <Fade>
          <Card className="border-amber-soft/30">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-display text-xl text-amber">Session 1 — The Manifesto</h3>
              <Tag tone="amber">6.21.26 · 6h 06m</Tag>
            </div>
            <p className="text-faded text-[13px] leading-relaxed">
              Transmission mode. Solo stream of consciousness, 6:00pm to 1:30am: the ownership doctrine, ten
              skyscrapers, the sticky-note oracle, the magic trick that closes the film. The wine glass, the
              crayon boards, the download pose. The business and the mythology, born in one night — 80 clips,
              58 quotes, the whole brand.
            </p>
          </Card>
        </Fade>
        <Fade delay={0.06}>
          <Card className="border-amber-soft/30">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-display text-xl text-amber">Session 2 — The Heart Chapter</h3>
              <Tag tone="amber">mid-July · 2h 36m</Tag>
            </div>
            <p className="text-faded text-[13px] leading-relaxed">
              Response mode. A homie runs question cards from behind the camera; the aviators are on from
              frame one. Love as the unconditional constant, reality vs. truth, prayer revealed as prompting —
              and a relationship ending on tape between segments, doctrine narrating in real time. 46 clips,
              54 quotes, a new series format, and the physical arc told in posture: open palms to crossed arms.
            </p>
          </Card>
        </Fade>
      </div>

      <Fade>
        <h2 className="font-display text-2xl text-bone mb-5">Session 1, frame by frame</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-4 mb-12">
          {frames.map((f) => (
            <div key={f.file} className="shrink-0 w-44">
              <img src={f.file} alt={f.label} loading="lazy" className="rounded-lg border border-edge aspect-video object-cover" />
              <div className="text-[11px] text-faded mt-1.5 leading-tight">
                <span className="font-mono text-amber">{f.timestamp}</span> · {f.label}
              </div>
            </div>
          ))}
        </div>
      </Fade>

      <Fade>
        <h2 className="font-display text-2xl text-bone mb-2">Session 2, frame by frame</h2>
        <p className="text-faded text-sm mb-5 max-w-3xl">{session2Note}</p>
        <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-4 mb-12">
          {frames2.map((f) => (
            <div key={f.file} className="shrink-0 w-44">
              <img src={f.file} alt={f.label} loading="lazy" className="rounded-lg border border-edge aspect-video object-cover" />
              <div className="text-[11px] text-faded mt-1.5 leading-tight">
                <span className="font-mono text-amber">{f.timestamp}</span> · {f.label}
              </div>
            </div>
          ))}
        </div>
      </Fade>

      <div className="grid md:grid-cols-3 gap-5">
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The asset</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              Frame-accurate transcripts of both masters (timecoded every 20–40 seconds) plus the Frame.io
              originals mean every clip below is addressable by timestamp — S2 items carry a session badge.
              Editing starts from a shot list, never from scrubbing.
            </p>
          </Card>
        </Fade>
        <Fade delay={0.1}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The signature</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              Layered photographic stop-motion, one Dehancer grade, and deliberate set continuity — Session 2
              kept the desk, the lighting plot, the shawl, so the two masters chain as one filmstrip. S1&rsquo;s
              deck is the sticky notes; S2&rsquo;s is the question cards. Two decks, one film.
            </p>
          </Card>
        </Fade>
        <Fade delay={0.15}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The machine</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              The promised cadence held: one shoot like this per month, and Session 2 arrived on schedule —
              mined into this Command Center the day it uploaded. James owns LinkedIn, Chris shoots and edits,
              Josh sells. The machine now runs one full shoot ahead of the calendar.
            </p>
          </Card>
        </Fade>
      </div>
    </div>
  )
}
