import { useMemo, useState } from 'react'
import { ExternalLink, ArrowRight, FileText, Database, Image as ImageIcon, LayoutGrid, Wrench } from 'lucide-react'
import { SectionHeader, Card, Fade, Tag } from '../components/ui'
import {
  resources, sectionLabels, frameFiles, picFiles,
  type Resource, type ResourceKind,
} from '../data/resources'
import { useNav } from '../nav'

const kinds: { id: ResourceKind | 'all'; label: string; icon: typeof FileText }[] = [
  { id: 'all', label: 'Everything', icon: LayoutGrid },
  { id: 'source', label: 'Source Materials', icon: FileText },
  { id: 'data', label: 'Data Files', icon: Database },
  { id: 'media', label: 'Media', icon: ImageIcon },
  { id: 'section', label: 'Sections', icon: LayoutGrid },
  { id: 'build', label: 'Build', icon: Wrench },
]

const groupOrder = [
  'Primary Source Materials',
  'Data Files',
  'Media Assets',
  'Site Sections',
  'Build Scaffold',
]

const byId = Object.fromEntries(resources.map((r) => [r.id, r]))

const dataLines = 4752 + 668 + 496 + 197 + 146 + 99 + 117 + 33 + 19

export default function ResourceLibrary() {
  const nav = useNav()
  const [kind, setKind] = useState<ResourceKind | 'all'>('all')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return resources.filter((r) => {
      if (kind !== 'all' && r.kind !== kind) return false
      if (!query) return true
      return (
        r.name.toLowerCase().includes(query) ||
        r.what.toLowerCase().includes(query) ||
        r.path.toLowerCase().includes(query) ||
        (r.provenance ?? '').toLowerCase().includes(query)
      )
    })
  }, [kind, q])

  const groups = groupOrder
    .map((g) => ({ group: g, items: filtered.filter((r) => r.group === g) }))
    .filter((g) => g.items.length > 0)

  const scrollTo = (id: string) => {
    const el = document.getElementById(`res-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div>
      <SectionHeader
        kicker="Resource Library · The Wiki"
        title="Every file that built this."
        sub="One night of footage became a four-month content machine. This is the database of every source, dataset, image and page underneath it — where each came from, and where it lands. Filter, search, and click through to any resource or the part of the site it powers."
      />

      {/* stat band */}
      <Fade>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { n: '3', l: 'Primary sources' },
            { n: '9', l: 'Data files' },
            { n: '58', l: 'Media assets' },
            { n: dataLines.toLocaleString(), l: 'Lines of mined data' },
          ].map((s) => (
            <Card key={s.l} className="text-center">
              <div className="font-display text-3xl text-amber">{s.n}</div>
              <div className="text-dim text-[11px] tracking-wide uppercase mt-1">{s.l}</div>
            </Card>
          ))}
        </div>
      </Fade>

      {/* controls */}
      <div className="flex flex-wrap gap-2 mb-4">
        {kinds.map((k) => {
          const Icon = k.icon
          return (
            <button
              key={k.id}
              onClick={() => setKind(k.id)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors ${
                kind === k.id ? 'border-amber text-amber bg-amber/10' : 'border-edge text-faded hover:text-bone'
              }`}
            >
              <Icon size={12} strokeWidth={1.8} />
              {k.label}
            </button>
          )
        })}
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search files, provenance, paths…"
        className="w-full max-w-md mb-8 bg-panel border border-edge rounded-lg px-3.5 py-2 text-[13px] text-bone placeholder:text-dim focus:outline-none focus:border-amber/50"
      />

      {groups.length === 0 && (
        <p className="text-dim text-sm">No resources match “{q}”.</p>
      )}

      {groups.map(({ group, items }) => (
        <div key={group} className="mb-12">
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="font-display text-2xl text-bone">{group}</h2>
            <span className="text-dim text-xs">{items.length}</span>
          </div>
          <div className="space-y-3">
            {items.map((r, i) => (
              <Fade key={r.id} delay={Math.min(i * 0.02, 0.15)}>
                <ResourceRow r={r} nav={nav} scrollTo={scrollTo} />
              </Fade>
            ))}
          </div>

          {/* media browsers appended under their group */}
          {group === 'Media Assets' && kind !== 'section' && kind !== 'data' && kind !== 'build' && (
            <MediaBrowsers />
          )}
        </div>
      ))}
    </div>
  )
}

function ResourceRow({
  r, nav, scrollTo,
}: {
  r: Resource
  nav: (id: string) => void
  scrollTo: (id: string) => void
}) {
  return (
    <Card id={`res-${r.id}`} className="scroll-mt-6">
      <div className="flex flex-wrap items-center gap-2 mb-1.5">
        <h3 className="font-display text-lg text-bone">{r.name}</h3>
        {r.section && r.section !== 'resources' && (
          <button
            onClick={() => nav(r.section!)}
            className="flex items-center gap-1 text-amber text-xs hover:underline"
          >
            Open section <ArrowRight size={12} />
          </button>
        )}
        {r.href && (
          <a
            href={r.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-amber text-xs hover:underline"
          >
            Open file <ExternalLink size={11} />
          </a>
        )}
        <span className="ml-auto font-mono text-[10px] text-dim">{r.path}</span>
      </div>

      <p className="text-faded text-[13px] leading-relaxed">{r.what}</p>

      {r.provenance && (
        <p className="text-dim text-[12px] leading-relaxed mt-2">
          <span className="text-amber-soft">Source · </span>{r.provenance}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2 mt-3">
        {r.size && <Tag tone="dim">{r.size}</Tag>}

        {r.feeds && r.feeds.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-amber-soft mr-0.5">Feeds</span>
            {r.feeds.map((s) => (
              <button
                key={s}
                onClick={() => nav(s)}
                className="rounded-full border border-amber-soft/40 text-amber px-2.5 py-0.5 text-[11px] hover:bg-amber/10 transition-colors"
              >
                {sectionLabels[s] ?? s}
              </button>
            ))}
          </div>
        )}

        {r.builtFrom && r.builtFrom.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-widest text-amber-soft mr-0.5">Built from</span>
            {r.builtFrom.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-full border border-edge text-faded px-2.5 py-0.5 text-[11px] hover:text-bone hover:border-bone/40 transition-colors"
              >
                {byId[id]?.name ?? id}
              </button>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

function MediaBrowsers() {
  return (
    <div className="mt-6 space-y-8">
      <div>
        <div className="text-[11px] uppercase tracking-widest text-amber-soft mb-3">
          Frame stills · /frames ({frameFiles.length})
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {frameFiles.map((f) => (
            <a key={f} href={`/frames/${f}`} target="_blank" rel="noreferrer" title={f} className="group block">
              <img
                src={`/frames/${f}`}
                alt={f}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-md border border-edge group-hover:border-amber/60 transition-colors"
              />
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-widest text-amber-soft mb-3">
          The Pics album · /pics ({picFiles.length} + acro.mov)
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {picFiles.map((f) => (
            <a key={f} href={`/pics/${f}`} target="_blank" rel="noreferrer" title={f} className="group block">
              <img
                src={`/pics/${f}`}
                alt={f}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-md border border-edge group-hover:border-amber/60 transition-colors"
              />
            </a>
          ))}
          <a
            href="/pics/acro.mov"
            target="_blank"
            rel="noreferrer"
            title="acro.mov"
            className="flex items-center justify-center aspect-square rounded-md border border-edge text-dim text-[10px] hover:border-amber/60 hover:text-amber transition-colors"
          >
            ▶ acro.mov
          </a>
        </div>
      </div>
    </div>
  )
}
