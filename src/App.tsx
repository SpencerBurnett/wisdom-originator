import { useState } from 'react'
import {
  Clapperboard, Quote as QuoteIcon, Layers, GitBranch, Camera, Youtube,
  Linkedin, BookOpen, Wrench, CalendarDays, Sparkles, Lightbulb, Mail, Images, PhoneCall, DoorOpen, Wand2, Route, Library, ClipboardList,
} from 'lucide-react'
import { NavContext } from './nav'
import BrandStrategy from './sections/BrandStrategy'
import Storyline from './sections/Storyline'
import EmailPlan from './sections/EmailPlan'
import ImageVault from './sections/ImageVault'
import CallVault from './sections/CallVault'
import Doorway from './sections/Doorway'
import Overview from './sections/Overview'
import Clips from './sections/Clips'
import Quotes from './sections/Quotes'
import Themes from './sections/Themes'
import Arcs from './sections/Arcs'
import Physical from './sections/Physical'
import YouTubePlan from './sections/YouTubePlan'
import LinkedInPlan from './sections/LinkedInPlan'
import VlogPlan from './sections/VlogPlan'
import EditWorkflow from './sections/EditWorkflow'
import Calendar from './sections/Calendar'
import IdeaBank from './sections/IdeaBank'
import WorkOrders from './sections/WorkOrders'
import ResourceLibrary from './sections/ResourceLibrary'

const sections = [
  { id: 'brand', label: 'Brand Strategy', icon: Wand2, el: <BrandStrategy /> },
  { id: 'doorway', label: 'The Doorway', icon: DoorOpen, el: <Doorway /> },
  { id: 'storyline', label: 'The Storyline', icon: Route, el: <Storyline /> },
  { id: 'overview', label: 'The Shoot', icon: Sparkles, el: <Overview /> },
  { id: 'clips', label: 'Clip Library', icon: Clapperboard, el: <Clips /> },
  { id: 'quotes', label: 'Quote Wall', icon: QuoteIcon, el: <Quotes /> },
  { id: 'themes', label: 'Themes', icon: Layers, el: <Themes /> },
  { id: 'arcs', label: 'Arcs', icon: GitBranch, el: <Arcs /> },
  { id: 'physical', label: 'Physical Layer', icon: Camera, el: <Physical /> },
  { id: 'vault', label: 'Image Vault', icon: Images, el: <ImageVault /> },
  { id: 'calls', label: 'Call Vault', icon: PhoneCall, el: <CallVault /> },
  { id: 'ideas', label: 'Idea Bank', icon: Lightbulb, el: <IdeaBank /> },
  { id: 'youtube', label: 'YouTube', icon: Youtube, el: <YouTubePlan /> },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, el: <LinkedInPlan /> },
  { id: 'vlog', label: 'Personal Vlog', icon: BookOpen, el: <VlogPlan /> },
  { id: 'email', label: 'Email Spine', icon: Mail, el: <EmailPlan /> },
  { id: 'workflow', label: 'Edit Workflow', icon: Wrench, el: <EditWorkflow /> },
  { id: 'calendar', label: '4-Month Plan', icon: CalendarDays, el: <Calendar /> },
  { id: 'orders', label: 'Work Orders', icon: ClipboardList, el: <WorkOrders /> },
  { id: 'resources', label: 'Resource Library', icon: Library, el: <ResourceLibrary /> },
]

export default function App() {
  const [active, setActive] = useState('doorway')
  const current = sections.find((s) => s.id === active)!
  const go = (id: string) => { setActive(id); window.scrollTo({ top: 0 }) }

  return (
    <NavContext.Provider value={go}>
    <div className="min-h-screen bg-ink text-bone grain">
      <aside className="fixed left-0 top-0 bottom-0 w-60 border-r border-edge bg-panel/80 backdrop-blur flex flex-col z-40">
        <div className="px-5 pt-6 pb-5 border-b border-edge">
          <div className="font-chalk text-2xl text-amber leading-none">Spency&rsquo;s 2026</div>
          <div className="font-display text-lg text-bone tracking-wide">Miracle Tour</div>
          <div className="text-dim text-[11px] mt-1.5 tracking-wider uppercase">
            The Wisdom Originator
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin py-3">
          {sections.map((s) => {
            const Icon = s.icon
            const on = s.id === active
            return (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-[13px] transition-colors text-left ${
                  on ? 'text-amber bg-amber/5 border-r-2 border-amber' : 'text-faded hover:text-bone'
                }`}
              >
                <Icon size={15} strokeWidth={1.8} />
                {s.label}
              </button>
            )
          })}
        </nav>
        <div className="px-5 py-4 border-t border-edge text-[11px] text-dim leading-relaxed">
          S1 &middot; 6.21.26 &middot; 6h 06m
          <br />
          S2 &middot; 7.26 &middot; 2h 36m
          <br />
          Two sessions &rarr; four months of content
        </div>
      </aside>
      <main className="ml-60 px-8 md:px-14 py-12 max-w-6xl">{current.el}</main>
    </div>
    </NavContext.Provider>
  )
}
