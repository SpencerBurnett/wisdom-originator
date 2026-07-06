import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { linkedin } from '../data/content'
import { bonusPost } from '../data/supplement'

const allPosts = [...linkedin.ready_posts, bonusPost]

export default function LinkedInPlan() {
  return (
    <div>
      <SectionHeader
        kicker="LinkedIn Strategy"
        title="James owns it. Spencer feeds it."
        sub={linkedin.positioning}
      />

      <Fade>
        <Card className="mb-10 border-amber-soft/30">
          <h3 className="font-display text-lg text-amber mb-2">Division of labor</h3>
          <p className="text-faded text-[13px] leading-relaxed whitespace-pre-line">{linkedin.division_of_labor}</p>
        </Card>
      </Fade>

      <h2 className="font-display text-2xl text-bone mb-5">Post types</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {linkedin.post_types.map((p, i) => (
          <Fade key={p.type} delay={i * 0.03}>
            <Card>
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="text-bone font-medium text-sm">{p.type}</h3>
                <Tag tone="amber">{p.cadence}</Tag>
              </div>
              <p className="text-faded text-[13px] leading-relaxed">{p.description}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <Fade>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Weekly rhythm</h3>
            <ul className="space-y-2">
              {linkedin.weekly_rhythm.map((r, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{r}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Lead-gen mechanics</h3>
            <ul className="space-y-2">
              {linkedin.lead_gen.map((l, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">·</span>{l}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
      </div>

      <h2 className="font-display text-2xl text-bone mb-2">Ready-to-post drafts</h2>
      <p className="text-faded text-sm mb-6 max-w-3xl">
        Written in Spencer&rsquo;s voice from the actual footage — each tagged with the timestamp it came from.
        Hand these to James as the opening magazine.
      </p>
      <div className="space-y-5">
        {allPosts.map((p, i) => (
          <Fade key={i} delay={Math.min(i * 0.02, 0.15)}>
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <Tag tone="bone">{p.format}</Tag>
                <Timestamp t={p.source_timestamp} />
              </div>
              <p className="text-bone font-medium text-[15px] mb-3 leading-snug">{p.hook}</p>
              <p className="text-faded text-[13px] leading-relaxed whitespace-pre-line">{p.body}</p>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
