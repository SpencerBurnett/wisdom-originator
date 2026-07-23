import { useState } from 'react'
import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { workOrders, workOrdersIntro, type WorkOrder } from '../data/workOrders'

const owners = ['all', 'Spencer', 'Chris', 'James', 'Josh', 'Valeria', 'The Machine'] as const
const statuses = ['all', 'open', 'gated', 'done'] as const

const statusTone: Record<WorkOrder['status'], { label: string; cls: string }> = {
  open: { label: 'OPEN', cls: 'border-amber-soft/50 text-amber' },
  gated: { label: 'GATED', cls: 'border-rose-400/50 text-rose-300' },
  done: { label: 'DONE ✓', cls: 'border-emerald-400/40 text-emerald-300' },
}

export default function WorkOrders() {
  const [owner, setOwner] = useState<string>('all')
  const [status, setStatus] = useState<string>('all')

  const filtered = workOrders.filter(
    (w) => (owner === 'all' || w.owner === owner) && (status === 'all' || w.status === status),
  )
  const openCount = workOrders.filter((w) => w.status !== 'done').length
  const doneCount = workOrders.filter((w) => w.status === 'done').length

  return (
    <div>
      <SectionHeader
        kicker="Work Orders · The One Screen"
        title="What do I execute today?"
        sub="The execution layer of the Command Center — every actionable item the Session 2 integration generated, written the doctrine's way: one owner per order, a due window, and the moment of completion named in advance. The mined content is supply; these are the orders that turn it into published work."
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <Fade>
          <Card className="border-amber-soft/40">
            <h3 className="font-display text-lg text-amber mb-2">The doctrine on the board</h3>
            <p className="text-faded text-[13px] leading-relaxed">{workOrdersIntro.doctrine}</p>
          </Card>
        </Fade>
        <Fade delay={0.06}>
          <Card className="border-amber-soft/40">
            <h3 className="font-display text-lg text-amber mb-2">Why this page exists</h3>
            <p className="text-faded text-[13px] leading-relaxed">{workOrdersIntro.oneScreen}</p>
          </Card>
        </Fade>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        {owners.map((o) => (
          <button
            key={o}
            onClick={() => setOwner(o)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              owner === o ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {o === 'all' ? 'All owners' : o}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              status === s ? 'border-bone text-bone bg-bone/10' : 'border-edge text-dim hover:text-faded'
            }`}
          >
            {s === 'all' ? 'All statuses' : s}
          </button>
        ))}
        <span className="ml-auto text-dim text-xs">
          {openCount} open · {doneCount} shipped by the machine
        </span>
      </div>

      <div className="space-y-4">
        {filtered.map((w, i) => (
          <Fade key={w.id} delay={Math.min(i * 0.02, 0.15)}>
            <Card className={w.status === 'done' ? 'opacity-80' : ''}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-mono text-[11px] text-dim">{w.id}</span>
                <h3 className="font-display text-lg text-bone">{w.title}</h3>
                <span className="ml-auto flex items-center gap-2">
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] tracking-widest ${statusTone[w.status].cls}`}
                  >
                    {statusTone[w.status].label}
                  </span>
                </span>
              </div>
              <p className="text-faded text-[13px] leading-relaxed mb-3">{w.detail}</p>
              <p className="text-bone/90 text-[13px] leading-relaxed mb-3">
                <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Done =</span>
                {w.completion}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Tag tone="amber">{w.owner}</Tag>
                <Tag tone="bone">{w.lane}</Tag>
                <Tag>{w.due}</Tag>
                {w.blockedBy && <Tag>⛔ blocked by {w.blockedBy}</Tag>}
                {w.source.map((s) => (
                  <Tag key={s} tone="dim">{s}</Tag>
                ))}
              </div>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  )
}
