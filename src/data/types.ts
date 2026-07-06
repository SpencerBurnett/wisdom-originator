export interface Clip {
  id: string
  title: string
  start: string
  end: string
  hook: string
  summary: string
  format: string
  platforms: string[]
  strength: number
  edit_notes?: string
}

export interface Short {
  title: string
  source_clip: string
  hook: string
}

export interface PillarVideo {
  title: string
  premise: string
  source_clips: string[]
  runtime_estimate: string
  thumbnail_concept?: string
}

export interface Quote {
  quote: string
  timestamp: string
  category: string
  strength: number
  use: string
}

export interface Theme {
  theme: string
  description: string
  timestamps: string[]
  develop_into: string[]
  platforms: string[]
}

export interface ArcBeat {
  timestamp: string
  beat: string
}

export interface Arc {
  arc: string
  description: string
  beats: ArcBeat[]
  treatment: string
  title_ideas: string[]
}

export interface PhysicalMoment {
  timestamp: string
  description: string
  content_idea?: string
}

export interface FrameStill {
  file: string
  timestamp: string
  label: string
  note: string
}

export interface YouTubeStrategy {
  positioning: string
  pillars: { pillar: string; description: string; source_themes?: string[] }[]
  series: { title: string; premise: string; cadence: string; episodes?: string[] }[]
  cadence: string
  first_30_days: string[]
  thumbnail_system: string[]
  metrics: string[]
}

export interface LinkedInStrategy {
  positioning: string
  division_of_labor: string
  post_types: { type: string; description: string; cadence: string }[]
  weekly_rhythm: string[]
  ready_posts: { hook: string; body: string; source_timestamp: string; format: string }[]
  lead_gen: string[]
}

export interface VlogStrategy {
  positioning: string
  format: string
  episode_plan: { title: string; premise: string; source: string }[]
  site_integration: string[]
  cross_platform: string[]
}

export interface WorkflowPlan {
  tools: { name: string; purpose: string }[]
  pipeline: { stage: string; description: string; tool: string; time: string }[]
  per_clip_checklist: string[]
  batch_week: string[]
  stop_motion_recipe: string[]
  publishing: { platform: string; steps: string[] }[]
}

export interface CalendarPlan {
  month_themes: { month: string; theme: string; goal: string }[]
  weeks: {
    week: number
    dates: string
    focus: string
    youtube: string[]
    linkedin: string[]
    vlog: string[]
    milestones?: string[]
  }[]
}
