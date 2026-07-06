export interface Chapter { stage: string; title: string; date_range: string; narration: string }
export interface TimelineEvent {
  date: string; title: string; body: string
  track: 'wizard' | 'machine' | 'clients' | 'lore'
  stage: string; image?: string; source?: string; clearance?: boolean
}
export interface ToldStory {
  title: string; teaser: string; full: string
  where_told: string; when_told: string; stage: string; clearance?: boolean
}
