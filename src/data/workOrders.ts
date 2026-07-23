// The Work Orders board — the execution layer of the Command Center.
// Every actionable item the Session 2 integration generated, written the way
// the doctrine demands: one owner per order (never two), a due window, and
// the moment of completion — the single frame where the thing is DONE
// (S2 00:14:38). The machine's own completed orders are logged too, because
// a board that only shows open work hides the proof that the system ships.
// Authored 2026-07-22 alongside the Session 2 merge.

export type WorkOrderStatus = 'done' | 'open' | 'gated'

export interface WorkOrder {
  id: string
  title: string
  detail: string
  owner: 'Spencer' | 'Chris' | 'James' | 'Josh' | 'Valeria' | 'The Machine'
  lane: 'clearance' | 'edit bench' | 'linkedin' | 'email' | 'shoot' | 'ops' | 'sales' | 'site'
  due: string
  source: string[]
  completion: string // Done = the snapshot frame
  status: WorkOrderStatus
  blockedBy?: string
}

export const workOrdersIntro = {
  doctrine:
    "A strategy is a series of estimated steps. Once you take one step, the game has changed — so the board doesn't worship the plan, it serves the next step. Every order below follows the session's own rules: one owner (a work order with two owners has zero), a due window, and the moment of completion named in advance — the single frame where this thing is done. If you can't name the frame, that's the first problem to solve.",
  oneScreen:
    "If each person wakes up, looks at this screen, and it's very clear what is the most important thing to execute today — and everyone does that, day after day — this operation has no other choice but to thrive. This page is that screen.",
}

export const workOrders: WorkOrder[] = [
  // ————— Completed by the machine, 7.22 —————
  {
    id: 'WO-01',
    title: 'Mine Session 2 into the Command Center',
    detail:
      'Read the 2h36m CR5E0001 transcript end-to-end, watch the master (48-frame visual pass), and extract everything: 46 clips, 14 shorts, 3 pillar assemblies, 54 quotes, 9 themes, 4 arcs, 16 physical moments, 20 ideas — merged into every section with session tags and clearance flags.',
    owner: 'The Machine',
    lane: 'site',
    due: 'Jul 22 — same day as upload',
    source: ['transcript-s2-7-22-26.txt', 'Frame.io Pt. 2 master'],
    completion: 'Every section of this site renders Session 2 content with an S2 badge. Shipped 7.22.',
    status: 'done',
  },
  {
    id: 'WO-02',
    title: 'Pull the Session 2 still library',
    detail:
      '16 stills extracted from the 1080p master at the story beats — the cards, the completion stillness, the download pose returning, the reading, the prayer posture, the arms-crossed wrap — labeled and indexed in frames.ts.',
    owner: 'The Machine',
    lane: 'site',
    due: 'Jul 22',
    source: ['/frames2/', 'frames.ts'],
    completion: 'Both filmstrips render on The Shoot and the Physical Layer; every S2 still serves in production. Shipped 7.22.',
    status: 'done',
  },
  {
    id: 'WO-03',
    title: 'Weave Session 2 into the four-month plan',
    detail:
      'Every S2 flagship placed into a dated weekly slot (Weeks 4–16), the month goals rewritten for August/September, eight Call-Vault-style injections added, the content ledger updated to 455 pieces, and the strategy objects (YouTube series, LinkedIn ready posts, vlog Season 2, email spine) extended.',
    owner: 'The Machine',
    lane: 'site',
    due: 'Jul 22',
    source: ['calendar', 'youtube', 'linkedin', 'vlog', 'emailSpine', 'contentLedger'],
    completion: 'The 4-Month Plan names every S2 piece inline — no S2 asset exists without a publish slot. Shipped 7.22.',
    status: 'done',
  },

  // ————— Spencer — the gates only he can open —————
  {
    id: 'WO-04',
    title: "Rule on 'Job Finished.' — the breakup documentary",
    detail:
      "The S2 trough episode exists as an arc, a vlog slot (Week 14), and a selects list — and none of it gets edit time until the gate opens. The call: ship it (vlog-only, she is never named, texts read-only), hold it, or kill it. If killed, the doctrine-only Heart Chapter pillar carries Week 14 and nothing is lost.",
    owner: 'Spencer',
    lane: 'clearance',
    due: 'By Week 13 (Sep 28 – Oct 4)',
    source: ['Arc: Job Finished', 'C105', 'C106', 'C117', 'C120'],
    completion: 'A recorded yes/no in the clearance list. Yes = Week 14 vlog slot locks; no = the slot re-points to the Heart Chapter pillar.',
    status: 'gated',
  },
  {
    id: 'WO-05',
    title: 'Rule on the exes catalogue framing (C96)',
    detail:
      "Love-is-unconditional carries the session's deepest doctrine, and its receipts name real events. The standing rule (anonymized, vulnerability framing, never shock-clipped) is written — this order is the explicit sign-off that the rule is right, plus the platform matrix: vlog/long-form yes, shorts doctrine-only.",
    owner: 'Spencer',
    lane: 'clearance',
    due: 'Before the Heart Chapter pillar cuts (Week 14)',
    source: ['C96', 'clearanceList'],
    completion: 'C96 edit notes carry the approved platform matrix in writing.',
    status: 'open',
  },
  {
    id: 'WO-06',
    title: 'Session 3 shot list — the hybrid deck + the proof gap',
    detail:
      "The one gap S2 didn't fill: client-results/proof footage. Session 3 alternates decks (sticky notes + question cards), captures the completion-frame teaching with a real client's numbers on screen, and re-runs the June 21 lighting plot so the filmstrip stays seamless.",
    owner: 'Spencer',
    lane: 'shoot',
    due: 'August (biweekly rhythm)',
    source: ['s2Ideas', 'contentLedger gap note'],
    completion: 'Shot-list doc written and a date on the calendar with Chris booked.',
    status: 'open',
  },

  // ————— Chris — the edit bench —————
  {
    id: 'WO-07',
    title: "Cut C114 'Prayer Is Prompting God' — untrimmed",
    detail:
      'The Session 2 announcement short: the 53 seconds shipped whole, no trims, prayer-posture still (2:08:36) as the cover frame. This is the first S2 piece the world sees.',
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 4 (Jul 27 – Aug 2)',
    source: ['C114', '/frames2/t07720.jpg'],
    completion: 'The 53s vertical sits in the dated Frame.io review folder, cover frame locked.',
    status: 'open',
  },
  {
    id: 'WO-08',
    title: 'Photograph the S2 question-card deck overhead',
    detail:
      "The Cards series' cover-frame library: every question card shot overhead in the June 21 lighting, same treatment as the sticky notes. Handwriting is the thumbnail — no typeset text.",
    owner: 'Chris',
    lane: 'shoot',
    due: 'Week 4 (Jul 27 – Aug 2)',
    source: ['Arc: The Cards', 'thumbnail system'],
    completion: '12+ card covers in the stop-motion layer library, named and graded.',
    status: 'open',
  },
  {
    id: 'WO-09',
    title: 'The Cards pilot trio',
    detail:
      "Three episodes cut to the locked format (one card, one answer, under 90s, freeze on the next card): The Seafood Rule (C100), Prayer Is Prompting (C114 long-tail), The 1% Mirror (C102). The pilot ships Week 5; the trio proves the format.",
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Weeks 5–8 (August)',
    source: ['C100', 'C114', 'C102'],
    completion: 'Three verticals delivered, each freezing on the next card — the chain unbroken from episode one.',
    status: 'open',
    blockedBy: 'WO-08',
  },
  {
    id: 'WO-10',
    title: 'Assemble the Reality vs. Truth masterclass',
    detail:
      "The S2 anchor pillar (C89 + C90 + C100 → C114 close, 15–18 min) plus the 11pm-text parable animated as hand-drawn text bubbles on two timelines. Thumbnail: the split-grade face with the crayon wall — REAL ≠ TRUE.",
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 7 (Aug 17 – 23)',
    source: ['Pillar: Reality vs. Truth', 'C89', 'C90'],
    completion: 'Pillar exported; the REAL ≠ TRUE thumbnail passes the 120px squint test.',
    status: 'open',
  },
  {
    id: 'WO-11',
    title: 'The God Tape assembly',
    detail:
      'The contemplative 15–20 min cut, sequenced cat → Creator with prayer-is-prompting as the earned finale. Stillest frames, long holds, no music under the theology — the edit rule IS the reverence.',
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 12 (Sep 21 – 27)',
    source: ['Arc: From the Cat to the Creator', '/frames2/t07720.jpg'],
    completion: 'Cut delivered with the no-music-under-theology rule verified end to end.',
    status: 'open',
  },
  {
    id: 'WO-12',
    title: 'The Heart Chapter pillar',
    detail:
      'The 22–28 min S2 flagship: doctrine only, breakup context held vlog-side, C96 material cut to the approved matrix. Arms-crossed final pose (t09292) with the crayon heart layer as the thumbnail.',
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 14 (Oct 5 – 11)',
    source: ['Pillar: The Heart Chapter', '/frames2/t09292.jpg'],
    completion: 'Export delivered with a clearance-clean bill against WO-05.',
    status: 'open',
    blockedBy: 'WO-05',
  },
  {
    id: 'WO-13',
    title: "The Founder's Oracle pillar + command-center capture",
    detail:
      "The S2 business long-form (C84–C87 + C109 + C116, 14–18 min) with real command-center UI screen-recorded as the demo overlay — Spencer supplies the screen capture, Chris cuts. End-freeze chains to S1's C26 One-Shot Prompt thumbnail: the first cross-session link in the filmstrip.",
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 15 (Oct 12 – 18)',
    source: ["Pillar: The Founder's Oracle", '/frames2/t05952.jpg'],
    completion: 'Export delivered, end-frozen on the C26 thumbnail — the two-session chain proven on screen.',
    status: 'open',
  },
  {
    id: 'WO-14',
    title: 'The mothers-question paired drop',
    detail:
      "'What Did Your Mother Teach You?' + 'Dad's Horn Lesson' cut as one package — the question ships with its answer, pinned comment restating the actual question. YouTube/vlog only, per the on-tape platform flag. LinkedIn never sees it.",
    owner: 'Chris',
    lane: 'edit bench',
    due: 'Week 16 (Oct 19 – 25)',
    source: ['C124', 'Told story: Dad\'s Horn Lesson'],
    completion: 'The pair exported with pinned-comment copy attached; LinkedIn exclusion noted in the file name.',
    status: 'open',
  },

  // ————— James — the LinkedIn engine —————
  {
    id: 'WO-15',
    title: 'Rotate the five S2 ready posts into the story slots',
    detail:
      'The completion-frame story, one-screen-per-person, the million-me\'s résumé, the heart-happy Google Doc, and achievement-vs-success — drafted and waiting in the ready-post bank. Slot into the Mon/Thu rotation Weeks 4–9, attribution-tagged, Sunday batch approval as always.',
    owner: 'James',
    lane: 'linkedin',
    due: 'Weeks 4–9 (Jul 27 – Sep 6)',
    source: ['linkedin.ready_posts (S2 entries)'],
    completion: 'All five scheduled in the queue with S2 attribution tags; first one live in Week 4.',
    status: 'open',
  },
  {
    id: 'WO-16',
    title: 'The Completion Worksheet + FRAME keyword flow',
    detail:
      "One page in Spencer's exact C87 language: three projects, three completion frames, the input→output test. Gated behind the keyword FRAME on the completion post; DM funnel step two asks 'what's your frame?' as the diagnostic filter.",
    owner: 'James',
    lane: 'linkedin',
    due: 'August (with the Week 4 completion post)',
    source: ['C87', 'ideasEnriched WO idx 1104'],
    completion: 'First worksheet delivered by the DM automation to a real founder — the flow observed working once.',
    status: 'open',
  },
  {
    id: 'WO-17',
    title: 'Welcome 6 + The Card email alternation',
    detail:
      "The crossover email ('Prayer is prompting God') appended to the welcome sequence, and the weekly newsletter alternating decks from September — Sticky Note one week, Question Card the next, starting with 'The sweat is real. The story isn't.'",
    owner: 'James',
    lane: 'email',
    due: 'September 1',
    source: ['emailSpine', 'C114', 'C89'],
    completion: 'Welcome 6 live in the sequence; the first Card issue lands in subscriber inboxes.',
    status: 'open',
  },

  // ————— Valeria — calendar operations —————
  {
    id: 'WO-18',
    title: 'S2 shorts into the cross-post lane + ledger burn-down',
    detail:
      'The 14 S2 shorts enter the same-day IG Reels + TikTok cross-post rotation as they cut; the content ledger burn-down tracks S1 and S2 supply separately so the one-shoot-ahead rule stays measurable.',
    owner: 'Valeria',
    lane: 'ops',
    due: 'Rolling from Week 4',
    source: ['s2Shorts', 'contentLedger', 'igLane'],
    completion: 'Ledger shows S2 rows burning on their own line; every cut S2 short cross-posts within 24h.',
    status: 'open',
  },

  // ————— Josh — the pipeline —————
  {
    id: 'WO-19',
    title: "Wire the Founder's Oracle into the Q4 sales motion",
    detail:
      "The completion → scalability → through-line three-beat (C87 + C109 + C116) becomes the discovery-call opener doc, and the pillar becomes the send-before-the-call asset for October's build-slot push. 'Which video sent you?' logging catches it.",
    owner: 'Josh',
    lane: 'sales',
    due: 'October (with the Week 15 pillar)',
    source: ['C87', 'C109', 'C116'],
    completion: "First booked call attributed to the Founder's Oracle in the which-video-sent-you log.",
    status: 'open',
    blockedBy: 'WO-13',
  },
]
