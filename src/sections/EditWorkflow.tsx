import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { workflow } from '../data/content'
import { clearanceStage, teamOwners } from '../data/supplement'

export default function EditWorkflow() {
  return (
    <div>
      <SectionHeader
        kicker="Edit & Publish Workflow"
        title="From Frame.io master to published, on repeat"
        sub="Timestamp-driven editing: the clip library IS the edit decision list. Nobody scrubs eight-plus hours across two masters — the transcripts already did that work. Session 2 clips run the same pipeline with one extra stop: the S2 clearance gate."
      />

      <h2 className="font-display text-2xl text-bone mb-5">The pipeline</h2>
      <div className="space-y-3 mb-12">
        {workflow.pipeline.map((s, i) => (
          <Fade key={i} delay={Math.min(i * 0.03, 0.2)}>
            <Card>
              <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                <span className="font-mono text-amber text-[11px]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-bone font-medium text-sm">{s.stage}</h3>
                <span className="ml-auto flex gap-2">
                  <Tag tone="bone">{s.tool}</Tag>
                  <Tag tone="amber">{s.time}</Tag>
                </span>
              </div>
              <p className="text-faded text-[13px] leading-relaxed ml-8">{s.description}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-12 border-amber/40">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-display text-xl text-amber">{clearanceStage.stage}</h3>
            <Tag tone="amber">{clearanceStage.owner}</Tag>
          </div>
          <p className="text-faded text-[13px] mb-3">
            Nothing ships without passing this gate — it protects Spencer from his own rawest material.
          </p>
          <ul className="space-y-2">
            {clearanceStage.items.map((c, i) => (
              <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-2">
                <span className="text-amber shrink-0">☐</span>{c}
              </li>
            ))}
          </ul>
        </Card>
      </Fade>

      <h2 className="font-display text-2xl text-bone mb-5">Who owns what</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {teamOwners.map((t, i) => (
          <Fade key={t.name} delay={i * 0.03}>
            <Card>
              <h3 className="font-chalk text-2xl text-amber mb-1.5">{t.name}</h3>
              <p className="text-faded text-[13px] leading-relaxed">{t.owns}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <Fade>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Toolkit</h3>
            <ul className="space-y-2.5">
              {workflow.tools.map((t) => (
                <li key={t.name} className="text-[13px] leading-relaxed">
                  <span className="text-bone font-medium">{t.name}</span>
                  <span className="text-faded"> — {t.purpose}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
        <Fade delay={0.05}>
          <Card>
            <h3 className="font-display text-lg text-amber mb-3">Per-clip checklist</h3>
            <ul className="space-y-2">
              {workflow.per_clip_checklist.map((c, i) => (
                <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                  <span className="text-amber shrink-0">☐</span>{c}
                </li>
              ))}
            </ul>
          </Card>
        </Fade>
      </div>

      <h2 className="font-display text-2xl text-bone mb-5">The batch week</h2>
      <Card className="mb-12">
        <ol className="space-y-2.5">
          {workflow.batch_week.map((b, i) => (
            <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
              <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {b}
            </li>
          ))}
        </ol>
      </Card>

      <h2 className="font-display text-2xl text-bone mb-5">The stop-motion signature, step by step</h2>
      <Card className="mb-12 border-amber-soft/30">
        <ol className="space-y-2.5">
          {workflow.stop_motion_recipe.map((s, i) => (
            <li key={i} className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
              <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {s}
            </li>
          ))}
        </ol>
      </Card>

      <h2 className="font-display text-2xl text-bone mb-5">Publishing, per platform</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {workflow.publishing.map((p) => (
          <Fade key={p.platform}>
            <Card>
              <h3 className="font-display text-lg text-amber mb-3">{p.platform}</h3>
              <ol className="space-y-1.5">
                {p.steps.map((s, i) => (
                  <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                    <span className="font-mono text-[11px] text-dim pt-0.5 shrink-0">{i + 1}.</span>{s}
                  </li>
                ))}
              </ol>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
