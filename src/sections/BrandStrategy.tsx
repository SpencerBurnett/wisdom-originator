import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import {
  thesis, mission, tracks, bridge, archetypeOS, frames, chrisContributions, lexicon, brandQuotes, cascades,
} from '../data/brand'

export default function BrandStrategy() {
  return (
    <div>
      <SectionHeader
        kicker="The Personal Brand Strategy · Spency's 2026 Miracle Tour"
        title={thesis.headline}
        sub={thesis.body}
      />

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {thesis.quotes.map((q, i) => (
          <Fade key={i} delay={i * 0.05}>
            <div className="note-card rounded-xl p-5 h-full">
              <p className="font-chalk text-2xl leading-snug text-bone mb-3">&ldquo;{q.q}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-dim text-[11px] uppercase tracking-wider">{q.who}</span>
                <Timestamp t={q.t} />
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-12 border-amber/40">
          <h2 className="font-display text-2xl text-amber mb-3">{mission.title}</h2>
          <p className="text-faded text-[14px] leading-relaxed mb-4">{mission.body}</p>
          <p className="font-chalk text-xl text-amber/90 leading-snug">&ldquo;{mission.quote.q}&rdquo;</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-dim text-[11px] uppercase tracking-wider">{mission.quote.who}</span>
            <Timestamp t={mission.quote.t} />
          </div>
        </Card>
      </Fade>

      <h2 className="font-display text-3xl text-bone mb-2">Two tracks, one machine</h2>
      <p className="text-faded text-[14px] mb-6 max-w-3xl">
        The marketing runs on two rails with different registers — by design. The personal brand is
        mystical; the GigaOracle marketing is technical. Same doctrine, different costume.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {tracks.map((t, i) => (
          <Fade key={t.name} delay={i * 0.05}>
            <Card className="h-full">
              <h3 className="font-display text-lg text-amber mb-2">{t.name}</h3>
              <p className="text-bone text-[13px] leading-relaxed mb-3">{t.register}</p>
              <p className="text-faded text-[12px] leading-relaxed mb-3">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Audience</span>
                {t.audience}
              </p>
              <ul className="space-y-1.5 mb-3">
                {t.carries.map((c, j) => (
                  <li key={j} className="text-faded text-[12px] leading-relaxed flex gap-2">
                    <span className="text-amber shrink-0">·</span>{c}
                  </li>
                ))}
              </ul>
              <p className="text-dim text-[12px] leading-relaxed mb-1">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Platforms</span>
                {t.platforms}
              </p>
              <p className="text-dim text-[12px] leading-relaxed">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Tone</span>
                {t.tone}
              </p>
            </Card>
          </Fade>
        ))}
      </div>
      <Fade>
        <Card className="mb-14 border-amber-soft/40">
          <h3 className="uppercase tracking-widest text-[10px] text-amber-soft mb-2">The bridge</h3>
          <p className="text-bone/90 text-[14px] leading-relaxed">{bridge}</p>
        </Card>
      </Fade>

      <h2 className="font-display text-3xl text-bone mb-4">The Identity Frame OS</h2>
      <Fade>
        <Card className="mb-6 border-amber/40">
          <p className="font-chalk text-2xl text-bone leading-snug mb-3">&ldquo;{archetypeOS.why}&rdquo;</p>
          <p className="text-dim text-[11px] uppercase tracking-wider">{archetypeOS.whyAttribution}</p>
        </Card>
      </Fade>
      <Card className="mb-8">
        <h3 className="uppercase tracking-widest text-[10px] text-amber-soft mb-3">Deployment rules</h3>
        <ul className="space-y-2">
          {archetypeOS.rules.map((r, i) => (
            <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
              <span className="text-amber shrink-0">→</span>{r}
            </li>
          ))}
        </ul>
      </Card>

      <Fade>
        <div className="rounded-xl overflow-hidden border border-edge mb-3">
          <img src="/pics/IMG_1374.jpeg" alt="The name map — every archetype" className="w-full" />
        </div>
        <p className="text-dim text-xs mb-8">
          The name map, drawn during the 6/22 session — &ldquo;those are all the alter-ego names that
          I&rsquo;ve embodied, and those are all the archetypes.&rdquo; (2:27:08)
        </p>
      </Fade>

      <div className="space-y-5 mb-14">
        {frames.map((f, i) => (
          <Fade key={f.name} delay={Math.min(i * 0.03, 0.2)}>
            <Card>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="font-display text-2xl text-amber">{f.name}</h3>
                <Tag tone="bone">{f.character}</Tag>
              </div>
              <p className="text-bone/90 text-[14px] leading-relaxed mb-3">{f.essence}</p>
              <p className="text-faded text-[13px] leading-relaxed mb-2">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Content lane</span>
                {f.lane}
              </p>
              <p className="text-dim text-[12px] leading-relaxed">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Visual cue</span>
                {f.cue}
              </p>
            </Card>
          </Fade>
        ))}
      </div>

      <h2 className="font-display text-3xl text-bone mb-2">The Channeler&rsquo;s additions</h2>
      <p className="text-faded text-[14px] mb-6 max-w-3xl">{chrisContributions.intro}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {chrisContributions.items.map((c, i) => (
          <Fade key={c.title} delay={Math.min(i * 0.02, 0.15)}>
            <Card className="h-full">
              <h3 className="text-amber font-display text-lg mb-2">{c.title}</h3>
              <p className="text-faded text-[13px] leading-relaxed">{c.body}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <h2 className="font-display text-3xl text-bone mb-2">The lexicon</h2>
      <p className="text-faded text-[14px] mb-6 max-w-3xl">{lexicon.intro}</p>
      <div className="columns-1 md:columns-2 gap-4 mb-14">
        {lexicon.terms.map((t, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <div className="note-card rounded-lg px-4 py-3">
              <p className="font-chalk text-xl text-bone/90 leading-snug">{t}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl text-bone mb-6">On the record</h2>
      <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance] mb-14">
        {brandQuotes.map((q, i) => (
          <div key={i} className="break-inside-avoid mb-5">
            <div className="note-card rounded-xl p-5">
              <p className="font-chalk text-2xl leading-snug text-bone mb-3">&ldquo;{q.q}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-dim text-[11px] uppercase tracking-wider">{q.who}</span>
                <Timestamp t={q.t} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl text-bone mb-6">Where it cascades</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {cascades.map((c, i) => (
          <Fade key={c.to} delay={i * 0.03}>
            <Card>
              <h3 className="font-chalk text-2xl text-amber mb-1.5">{c.to}</h3>
              <p className="text-faded text-[13px] leading-relaxed">{c.how}</p>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
