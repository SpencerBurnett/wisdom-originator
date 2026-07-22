// Gap-closing data authored after the adversarial-critic pass (2026-07-05).
// Everything here answers a named hole in the mined outputs.

export interface StickyNote {
  text: string
  timestamp: string
  status: 'held to camera' | 'visible on set' | 'referenced'
  deployment: string
}

// Starter index built from mined quote timestamps (5:00–6:00 run) and notes
// legible in the extracted frames. Stage 4 logging completes the full 50+.
export const stickyNoteIndex: StickyNote[] = [
  { text: 'MEASURE YOUR WEALTH BY HOW MANY WIRES YOU SEND $$$', timestamp: '05:03:40', status: 'held to camera', deployment: 'Oracle Deck E01 · merch print · the wired-Chris-$1,000 story post' },
  { text: 'NEVER BE A BITCH', timestamp: '05:06:24', status: 'held to camera', deployment: 'Oracle Deck E02 · the duty-definition short' },
  { text: 'RESTRAINT IS THE NEW ATTAINMENT', timestamp: '05:10:22', status: 'held to camera', deployment: 'Oracle Deck E03 · anti-hustle thumbnail text' },
  { text: 'EAT MONSTERS QUICKLY, TASTE ANGELS SLOWLY', timestamp: '05:20:45', status: 'held to camera', deployment: 'Flagship merch line · Oracle Deck E04' },
  { text: "I'M ALREADY DEAD. SO LET'S DANCE.", timestamp: '05:28:15', status: 'held to camera', deployment: 'Typography card · merch · Oracle Deck E05' },
  { text: 'DO YOU OWN IT?', timestamp: '05:34:23', status: 'held to camera', deployment: 'THE universal CTA — every video end card' },
  { text: 'JOB FINISHED. GET TO WORK.', timestamp: '05:38:50', status: 'held to camera', deployment: 'Discipline short title card · Oracle Deck E06' },
  { text: 'INTENTIONS = COMMITMENTS = ACTIONS (INTEGRITY)', timestamp: '05:41:29', status: 'held to camera', deployment: 'Flagship teaching short · carousel finale slide' },
  { text: 'BRAKE IS THE NEW GAS', timestamp: '05:52:04', status: 'held to camera', deployment: 'Downhill-luge short · Oracle Deck E07' },
  { text: 'MISSION: ONE SHOT PROMPT TO ANYTHING', timestamp: '05:45:00', status: 'held to camera', deployment: 'Business-thesis short — the offer in seven words' },
  { text: "SPENCY'S 2026 MIRACLE TOUR", timestamp: '05:55:00', status: 'held to camera', deployment: 'Campaign umbrella name · series end card · tour poster merch' },
  { text: 'ONLY TRUTH REQUIRED', timestamp: '04:38:59', status: 'held to camera', deployment: 'AI-mirror thesis short · set-wall hero product shot' },
  { text: 'CLOSE BIG LOOPS', timestamp: '00:05:00', status: 'visible on set', deployment: 'Set-decoration b-roll · productivity carousel' },
  { text: 'LESS TIME TO THINK', timestamp: '00:05:00', status: 'visible on set', deployment: 'Set-decoration b-roll · speed-doctrine post' },
  { text: "RELAX… IT'S JUST A GAME", timestamp: '04:35:00', status: 'visible on set', deployment: 'Aviators-era b-roll · the game-frame short' },
  { text: 'KURT IS PROVIDENCE', timestamp: '00:05:00', status: 'visible on set', deployment: 'Lore card — pay off in a future episode' },
  { text: 'THE INTELLIGENCE IS FOR THE BEST OF [TRANSFORMING] WEALTH', timestamp: '00:05:00', status: 'visible on set', deployment: 'Zoom-in b-roll for the ownership doctrine cut' },
]

export const albumDeployment = {
  intro:
    'The 90-image album shot the same night is the image half of the 200-piece commitment — and the layer library the stop-motion signature feeds on. Deployment map:',
  uses: [
    '30 images → LinkedIn sticky-note photo posts (the named post type now has named supply — 2/week for 15 weeks)',
    '20 images → backgrounds for the 58 quote cards (Dehancer-graded, chalk type overlay)',
    '15 images → source layers for Shoot #3, the September stop-motion production day',
    '12 images → vlog episode header images on spencerburnett.com (one per episode)',
    '8 images → carousel imagery for the theme-based LinkedIn carousels',
    '5 images → channel art: YouTube banner, avatar frames, end-card plates',
  ],
}

export const contentLedger = {
  target: 'Valeria-call commitment: ~200 unique pieces, ~50/50 video-image, six months of runway.',
  rows: [
    { type: 'Self-contained clips (video)', count: 80, source: 'S1 mined + timestamped, C01–C80' },
    { type: 'Session 2 clips (video)', count: 46, source: 'S2 mined + timestamped, C81–C126 (7.22 upload)' },
    { type: 'Vertical shorts (video)', count: 39, source: 'derived from clips — 25 S1 + 14 S2' },
    { type: 'Pillar long-forms (video)', count: 11, source: 'clip-cluster assemblies — 8 S1 + 3 S2' },
    { type: 'Vlog episodes (video)', count: 15, source: 'arc-based first-person cuts — 11 S1 season + 3 S2 season two + BTS' },
    { type: 'Quote cards (image)', count: 112, source: 'quote wall × album/frame backgrounds — 58 S1 + 54 S2' },
    { type: 'Sticky-note photos (image)', count: 50, source: 'the note wall, shot as stills' },
    { type: 'Question cards (image)', count: 12, source: 'the S2 card deck, photographed overhead (The Cards covers)' },
    { type: 'Album images (image)', count: 90, source: 'the 90-image night album' },
    { type: 'LinkedIn text posts', count: 20, source: 'ready-to-post drafts — 15 S1 + 5 S2 (more from idea bank)' },
  ],
  totals:
    'Two sessions in: 191 video pieces + 264 image pieces = 455 publishable units against the 200-piece commitment — well over double, with the video/image split intact. The constraint is not supply; it is publish slots. Session 2 (uploaded 7.22, mined same-day) proved the refill mechanic: the biweekly-shoot cadence keeps the machine one full shoot ahead of the calendar, and the S1 strength-5 burn-down projected for Week 14 is now covered through November. Remaining named gap: client-results/proof footage — still the Shoot-#2-proper target.',
}

export const monthlyKpis: { month: string; kpis: string[] }[] = [
  {
    month: 'July',
    kpis: ['Launch live by Jul 10', '10 discovery calls booked', '250 YouTube subs', '+500 LinkedIn followers', '150 email captures (Ownership Audit)', '8 YT videos + 12 shorts + 20 LI posts shipped'],
  },
  {
    month: 'August',
    kpis: ['20 discovery calls (cumulative 30)', '1,000 YouTube subs', '3 podcast bookings', '500 email list', '2 signed builds ($30K+)', 'Lead magnets live: Kill List + Genie Protocol'],
  },
  {
    month: 'September',
    kpis: ['1,000 → 2,500 YouTube subs', '1,200 email list', 'Vlog: 500 weekly readers', 'Stop-motion signature debuts (Shoot #3)', '15 discovery calls (cumulative 45)'],
  },
  {
    month: 'October',
    kpis: ['5,000 YouTube subs', 'Book waitlist: 500 names', '$100K quarter closed via Josh pipeline', '"Six Hours" documentary premieres', 'Deck Vol. 2 recorded (Shoot #4)'],
  },
]

export const kpiNote =
  'Targets are set as calibration stakes, not prophecy — re-baseline after two weeks of real data. The measurement that matters most is one number: discovery calls booked from content.'

export const clearanceStage = {
  stage: 'Clearance gate (between Selects and Assembly)',
  owner: 'Spencer — the only stage that cannot be delegated',
  items: [
    'Consent checklist: Chris ketamine-facilitation footage (Chris signs off or it stays vlog-only/cut), Ashley references, Carolina story (vulnerability framing only, never shock), the prayer/date story ships only on Spencer\'s explicit call',
    '"Never name her" — honor the on-tape editor instruction at 04:53:15 as a standing rule',
    'Platform-policy pass: wine/weed on camera — fine for the vlog (own turf), age-restriction risk on YouTube monetized cuts (trim or crop), absent from LinkedIn entirely',
    'Prophecy disclaimer card (his own 00:14:49 line) precedes every prophecy-category clip on every platform',
    'Profanity: full send on vlog, bleep-free but strategic on YouTube (title/thumbnail stay clean), sanitized on LinkedIn',
  ],
}

export const teamOwners: { name: string; owns: string }[] = [
  { name: 'Spencer', owns: 'Clearance approvals, new-shoot days, weekly 30-min review — nothing else. Any time not coding is recharge.' },
  { name: 'Chris', owns: 'The edit bench: selects, long-forms, shorts, the stop-motion bench, Dehancer grades. Delivers weekly batch every Friday.' },
  { name: 'James', owns: 'LinkedIn end-to-end: drafts from the ready-post magazine + quote wall, posts, replies, DM funnel to Josh. Spencer approves batches weekly, never per-post.' },
  { name: 'Josh', owns: 'Everything after the click: booking page, DM keyword flows, discovery-call pipeline, the sales system behind every "Do You Own It?" CTA.' },
  { name: 'Valeria', owns: 'Calendar operations: scheduling, cross-posting (IG/TikTok), the content ledger, burn-down tracking, Spencer check-ins.' },
]

export const thumbnailChain = {
  rule:
    'The chain mechanic: every video ends frozen on the NEXT video\'s thumbnail. To survive schedule slips, the freeze is rendered as a separate 2-second end plate attached at Deliver — locked only when the next video is locked. Fallback: the evergreen "SPENCY\'S 2026 MIRACLE TOUR" card ends any video whose successor moves.',
  chain: [
    'Ten Skyscrapers in 30 Days → freezes on the 188 Months prison-doors card',
    '188 Months: Betrayal, Prison, and the Ownership Doctrine → freezes on the wizard-head downloads pose (the 4:05 frame)',
    "Inside the Wizard's Head: How Downloads Work → freezes on the fever thermometer card",
    'The Fever With No Virus → freezes on the sticky-note wall wide shot',
    "The Sticky Note Gospel (Wizard's Tarot, Vol. 1) → freezes on the wine-glass/book page-turn card",
    'The Greatest Love Story Ever Told → freezes on the 2029 split-road card',
    '2029: The Split → freezes on the behind-the-scenes hair-check frame',
    'Six Hours: The Making of the Wisdom Originator → freezes on the MIRACLE TOUR card (loop closes; season two opens on it)',
  ],
}

export const emailSpine = {
  positioning:
    'Email is where the harvest happens — the only channel Spencer owns the way he tells clients to own their software. The spine: capture → welcome → weekly serialization → call.',
  capture: [
    'Ownership Audit lead magnet ("Do you own your software, your data, your name? 12 questions.") — gated on spencerburnett.com and linked from every YouTube description',
    'Vlog gate: full episodes of The Tape free, email required — the platforms get excerpts, the list gets the source',
    'LinkedIn DM keyword "OWN" → James routes to the audit → list',
  ],
  sequence: [
    'Welcome 1 — the skyscraper story (why now)',
    'Welcome 2 — "you are renting your own data" (the enemy)',
    'Welcome 3 — the fighter jet ("I build it, you fly it") + client receipts',
    'Welcome 4 — the precise-language codes (a real teaching, free)',
    'Welcome 5 — the diagnostic-call CTA (Josh\'s calendar)',
    'Welcome 6 (S2 addition) — "Prayer is prompting God" — the crossover teaching that hands the spiritual reader the machine and the operator reader the mystery; routes both to the Genie Protocol',
  ],
  weekly:
    'The Sticky Note — one note per week, photographed from the wall, 300 words of the riff behind it. Fifty notes = fifty weeks of newsletter = the book, serialized. Every issue ends: "Do you own it?" From September, alternate weeks pull The Card instead — one Session 2 question card + the answer\'s 300-word distillation ("The sweat is real. The story isn\'t." runs first) — so the two decks serialize side by side.',
}

export const igLane =
  'Instagram/TikTok resolve to a distribution lane, not a strategy: every vertical short cross-posts same-day to IG Reels + TikTok (Valeria), and quote cards + album photos feed the IG grid 3×/week. No native IG content is produced — the lane costs zero creative hours.'

export const bonusPost = {
  hook: 'I uploaded 6 hours of footage to Frame.io. The platform chose the poster frame on its own.',
  body: 'Eyes closed. Hand to temple. Wine glass. A wall of handwritten notes behind me.\n\nOut of 21,980 seconds, the machine picked the exact moment I teach as the download pose — receiving, not performing.\n\nI talk about AI reflecting your consciousness back at you. Data is a digital form of your consciousness.\n\nSometimes the mirror just shows you the proof.\n\nDo you own yours?',
  source_timestamp: '04:05:00',
  format: 'Photo post (the poster frame itself)',
}
