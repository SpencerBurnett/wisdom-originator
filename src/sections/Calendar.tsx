import { useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'
import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import { calendar } from '../data/content'
import { contentLedger, monthlyKpis, kpiNote, igLane } from '../data/supplement'
import { calendarAdditions } from '../data/calls'

export default function Calendar() {
  const [view, setView] = useState<'list' | 'calendar'>('calendar')
  return (
    <div>
      <SectionHeader
        kicker="The 4-Month Plan · July 6 – November 1, 2026"
        title="Seventeen weeks, sequenced"
        sub="Launch → authority → depth → harvest. Every week pulls from the clip library and quote wall by ID and timestamp; the backlog carries the whole run with one new shoot per month."
      />

      <Fade>
        <Card className="mb-10 border-amber-soft/40">
          <h3 className="font-display text-xl text-amber mb-2">The content ledger</h3>
          <p className="text-faded text-[13px] leading-relaxed mb-4">{contentLedger.target}</p>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="text-dim uppercase tracking-widest text-[10px] border-b border-edge">
                  <th className="py-2 pr-4">Type</th>
                  <th className="py-2 pr-4">Count</th>
                  <th className="py-2">Source</th>
                </tr>
              </thead>
              <tbody>
                {contentLedger.rows.map((r) => (
                  <tr key={r.type} className="border-b border-edge/50">
                    <td className="py-2 pr-4 text-bone">{r.type}</td>
                    <td className="py-2 pr-4 font-mono text-amber">{r.count}</td>
                    <td className="py-2 text-faded">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-faded text-[13px] leading-relaxed mt-4">{contentLedger.totals}</p>
          <p className="text-dim text-[12px] leading-relaxed mt-3">{igLane}</p>
        </Card>
      </Fade>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {monthlyKpis.map((m, i) => (
          <Fade key={m.month} delay={i * 0.05}>
            <Card>
              <div className="font-chalk text-2xl text-amber mb-2">{m.month} KPIs</div>
              <ul className="space-y-1.5">
                {m.kpis.map((k, j) => (
                  <li key={j} className="text-faded text-[12px] leading-relaxed flex gap-1.5">
                    <span className="text-amber shrink-0">·</span>{k}
                  </li>
                ))}
              </ul>
            </Card>
          </Fade>
        ))}
      </div>
      <p className="text-dim text-[12px] leading-relaxed mb-12 max-w-3xl">{kpiNote}</p>

      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {calendar.month_themes.map((m, i) => (
          <Fade key={m.month} delay={i * 0.05}>
            <Card className="border-amber-soft/30">
              <div className="font-chalk text-2xl text-amber mb-1">{m.month}</div>
              <div className="text-bone text-sm font-medium mb-2">{m.theme}</div>
              <p className="text-faded text-[12px] leading-relaxed">{m.goal}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-12 border-amber-soft/40">
          <h3 className="font-display text-xl text-amber mb-2">Injections from the Call Vault</h3>
          <p className="text-faded text-[13px] leading-relaxed mb-4">
            Dated business reality from the mined calls — deadlines, launches, and freezes the publishing
            schedule must respect.
          </p>
          <ul className="space-y-2.5">
            {calendarAdditions.map((a, i) => (
              <li key={i} className="text-[13px] leading-relaxed flex gap-3">
                <span className="font-mono text-amber text-[11px] pt-0.5 shrink-0 w-36">{a.week_or_month}</span>
                <span className="text-bone/90">{a.addition}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Fade>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl text-amber">Weekly Content Plan</h3>
        <div className="flex items-center gap-2 bg-ink rounded-lg border border-edge p-1">
          <button 
            onClick={() => setView('calendar')} 
            className={`p-1.5 rounded-md transition-colors ${view === 'calendar' ? 'bg-amber/20 text-amber' : 'text-dim hover:text-bone'}`}
          >
            <LayoutGrid size={16} />
          </button>
          <button 
            onClick={() => setView('list')} 
            className={`p-1.5 rounded-md transition-colors ${view === 'list' ? 'bg-amber/20 text-amber' : 'text-dim hover:text-bone'}`}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {view === 'calendar' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calendar.weeks.map((w, i) => (
            <Fade key={w.week} delay={i * 0.05}>
              <Card className="h-full flex flex-col p-4 border-amber-soft/20 hover:border-amber/50 transition-colors cursor-default">
                <div className="font-display text-lg text-amber mb-1">Week {w.week}</div>
                <div className="font-mono text-[10px] text-dim mb-2">{w.dates}</div>
                <div className="text-bone text-[12px] leading-snug line-clamp-4 mb-4 flex-1">{w.focus}</div>
                <div className="flex flex-col gap-1.5 mt-auto border-t border-edge/40 pt-3">
                  {w.youtube && w.youtube.length > 0 && (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-soft uppercase tracking-widest text-[9px]">YouTube</span>
                      <span className="text-bone">{w.youtube.length}</span>
                    </div>
                  )}
                  {w.linkedin && w.linkedin.length > 0 && (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-soft uppercase tracking-widest text-[9px]">LinkedIn</span>
                      <span className="text-bone">{w.linkedin.length}</span>
                    </div>
                  )}
                  {w.vlog && w.vlog.length > 0 && (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-amber-soft uppercase tracking-widest text-[9px]">Vlog</span>
                      <span className="text-bone">{w.vlog.length}</span>
                    </div>
                  )}
                </div>
              </Card>
            </Fade>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {calendar.weeks.map((w) => (
            <Fade key={w.week}>
              <Card>
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <span className="font-display text-xl text-amber">Week {w.week}</span>
                  <span className="font-mono text-[11px] text-dim">{w.dates}</span>
                  <span className="text-bone text-sm">{w.focus}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-2">YouTube</div>
                    <ul className="space-y-1.5">
                      {w.youtube.map((y, i) => (
                        <li key={i} className="text-faded text-[12px] leading-relaxed flex gap-1.5">
                          <span className="text-amber shrink-0">·</span>{y}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-2">LinkedIn</div>
                    <ul className="space-y-1.5">
                      {w.linkedin.map((l, i) => (
                        <li key={i} className="text-faded text-[12px] leading-relaxed flex gap-1.5">
                          <span className="text-amber shrink-0">·</span>{l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-2">Vlog</div>
                    <ul className="space-y-1.5">
                      {w.vlog.map((v, i) => (
                        <li key={i} className="text-faded text-[12px] leading-relaxed flex gap-1.5">
                          <span className="text-amber shrink-0">·</span>{v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {w.milestones && w.milestones.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {w.milestones.map((m, i) => <Tag key={i} tone="amber">{m}</Tag>)}
                  </div>
                )}
              </Card>
            </Fade>
          ))}
        </div>
      )}
    </div>
  )
}
