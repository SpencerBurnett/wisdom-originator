import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { clips, quotes, themes, arcs, shorts, pillarVideos, ideas } from '../data/content'
import { frames } from '../data/frames'

const stats = () => [
  { n: '6h 06m', l: 'continuous stream of consciousness' },
  { n: String(clips.length), l: 'self-contained clips logged' },
  { n: String(shorts.length), l: 'shorts ready to cut' },
  { n: String(pillarVideos.length), l: 'long-form pillar videos' },
  { n: String(quotes.length), l: 'timestamped quotes' },
  { n: String(themes.length), l: 'themes to develop' },
  { n: String(arcs.length), l: 'narrative arcs' },
  { n: String(ideas.length), l: 'raw ideas banked' },
]

export default function Overview() {
  return (
    <div>
      <SectionHeader
        kicker="June 21, 2026 · 6:00pm – 1:30am"
        title="One night on camera. Four months of output."
        sub="Chris Douglas put a camera on Spencer for six hours and six minutes of unbroken stream of consciousness — hair check to magic trick. This site is the full breakdown: every self-contained clip, every quotable line with its timestamp, the themes worth developing, the arcs an editor can cut, the physical layer of the performance, and the four-month plan that turns the footage into a YouTube channel, a LinkedIn lead engine, and a personal vlog."
      />

      <Fade>
        <div className="relative rounded-2xl overflow-hidden mb-10 border border-edge">
          <img src="/frames/t14700.jpg" alt="The download pose" className="w-full object-cover max-h-[420px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <div className="font-chalk text-3xl text-amber drop-shadow">&ldquo;Complete. Not tired.&rdquo;</div>
              <div className="text-faded text-xs mt-1">— 1:30am, after six straight hours</div>
            </div>
            <Tag tone="amber">the download pose · 4:05:00</Tag>
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

      <Fade>
        <h2 className="font-display text-2xl text-bone mb-5">The night, frame by frame</h2>
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

      <div className="grid md:grid-cols-3 gap-5">
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The asset</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              A frame-accurate transcript (timecoded every 20–40 seconds) plus the Frame.io master means
              every clip below is addressable by timestamp. Editing starts from a shot list, never from scrubbing.
            </p>
          </Card>
        </Fade>
        <Fade delay={0.1}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The signature</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              Layered photographic stop-motion: thumbnails that expand into videos and freeze on the next
              thumbnail, graded with Dehancer Pro film emulation. The 90-image album from the same night is
              the layer library. Identity merging into the marketing.
            </p>
          </Card>
        </Fade>
        <Fade delay={0.15}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-2">The machine</h3>
            <p className="text-faded text-[13px] leading-relaxed">
              Spencer supplies the raw signal — one shoot like this per month. James owns LinkedIn, Chris
              shoots and edits, Josh sells. The four-month calendar sequences launch → authority → depth →
              harvest without a single week of new-idea pressure.
            </p>
          </Card>
        </Fade>
      </div>
    </div>
  )
}
