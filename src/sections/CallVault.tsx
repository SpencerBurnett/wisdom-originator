import { useState } from 'react'
import { SectionHeader, Card, Fade, Tag, Timestamp } from '../components/ui'
import { twoMonthArc, receipts, callStories, callQuotes, callPieces, clearanceList } from '../data/calls'

const tabs = ['Receipts', 'Stories', 'Quotes', 'New Pieces', 'Clearance'] as const

export default function CallVault() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Receipts')

  return (
    <div>
      <SectionHeader
        kicker="Call Vault · 168 recordings, May 5 – Jul 5"
        title="Two months of calls, mined for proof"
        sub="The deepest ~30 recordings read end-to-end. This is where AUTHORITY month gets its ammunition: verifiable receipts, war stories with treatments, call-quotes in the live voice, and 30 new content pieces slotted into the calendar. Everything client-related passes the clearance gate first."
      />

      <Fade>
        <Card className="mb-10 border-amber-soft/40">
          <h3 className="font-display text-xl text-amber mb-2">The two-month arc</h3>
          <p className="text-faded text-[13px] leading-relaxed">{twoMonthArc}</p>
        </Card>
      </Fade>

      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
              tab === t ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Receipts' && (
        <div className="space-y-4">
          {receipts.map((r, i) => (
            <Fade key={i} delay={Math.min(i * 0.02, 0.15)}>
              <Card>
                <p className="text-bone text-[15px] leading-relaxed mb-2">{r.receipt}</p>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <Timestamp t={r.date} />
                  <span className="text-dim text-[12px]">{r.source_call}</span>
                </div>
                <p className="text-amber/90 text-[13px] leading-relaxed">
                  <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Use</span>
                  {r.use}
                </p>
              </Card>
            </Fade>
          ))}
        </div>
      )}

      {tab === 'Stories' && (
        <div className="space-y-4">
          {callStories.map((s, i) => (
            <Fade key={i} delay={Math.min(i * 0.02, 0.15)}>
              <Card className={s.clearance_needed ? 'border-amber-soft/40' : ''}>
                <p className="text-bone text-[14px] leading-relaxed mb-3">{s.story}</p>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Timestamp t={s.date} />
                  <span className="text-dim text-[12px]">{s.source_call}</span>
                  {s.clearance_needed && <Tag tone="amber">⚠ clearance required</Tag>}
                </div>
                <p className="text-faded text-[13px] leading-relaxed">
                  <span className="uppercase tracking-widest text-[10px] text-amber-soft mr-2">Treatment</span>
                  {s.treatment}
                </p>
              </Card>
            </Fade>
          ))}
        </div>
      )}

      {tab === 'Quotes' && (
        <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
          {callQuotes.map((q, i) => (
            <div key={i} className="break-inside-avoid mb-5">
              <Fade delay={Math.min(i * 0.015, 0.15)}>
                <div className="note-card rounded-xl p-5">
                  <p className="font-chalk text-2xl leading-snug text-bone mb-3">&ldquo;{q.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <Timestamp t={q.date} />
                    <span className="text-dim text-[11px] truncate ml-3">{q.source_call}</span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      )}

      {tab === 'New Pieces' && (
        <div className="space-y-3">
          {callPieces.map((p, i) => (
            <Fade key={i} delay={Math.min(i * 0.015, 0.15)}>
              <Card>
                <p className="text-bone text-[13px] leading-relaxed mb-2">{p.piece}</p>
                <div className="flex flex-wrap gap-1.5">
                  <Tag tone="amber">{p.month}</Tag>
                  <Tag tone="bone">{p.platform}</Tag>
                  {p.source_call && <Tag>{p.source_call}</Tag>}
                </div>
              </Card>
            </Fade>
          ))}
        </div>
      )}

      {tab === 'Clearance' && (
        <div className="space-y-3">
          <Fade>
            <Card className="border-amber/40 mb-2">
              <p className="text-faded text-[13px] leading-relaxed">
                The consolidated sign-off list. Nothing on it ships anywhere until the named person (or
                Spencer, for personal items) explicitly clears it. This list protects the receipts above —
                proof only works if it never burns a relationship.
              </p>
            </Card>
          </Fade>
          {clearanceList.map((c, i) => (
            <Fade key={i} delay={Math.min(i * 0.02, 0.15)}>
              <Card>
                <p className="text-bone/90 text-[13px] leading-relaxed flex gap-3">
                  <span className="text-amber shrink-0">☐</span>
                  {c}
                </p>
              </Card>
            </Fade>
          ))}
        </div>
      )}
    </div>
  )
}
