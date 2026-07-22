// Mined from the Call Recordings library (May 5 - Jul 5, 2026) on 2026-07-05.
// Coverage note: a single deep-mining agent fetched and read the ~30
// highest-signal recordings of the 168 in the window; the remaining calls are
// unmined backlog for a future pass.

export interface Receipt { receipt: string; source_call: string; date: string; use: string }
export interface CallStory { story: string; source_call: string; date: string; clearance_needed: boolean; treatment: string }
export interface CallQuote { quote: string; source_call: string; date: string }
export interface CallPiece { piece: string; platform: string; month: string; source_call?: string }
export interface CalAddition { week_or_month: string; addition: string }

export const twoMonthArc: string = "May 5 opens with Spencer as a hands-on operator: launching Kyle Plumbing's first Meta campaign on a $5K card (avg ticket $850, a 35K-customer list waiting) and running overnight AI \"runs\" on American Installations' CRM while counseling a founder friend through a partner ambush and a $75K buyout exit. Mid-May the economics snap into focus — a build that pre-AI would cost $250K–$400K demos in weeks, and the quarterly check-in logs $40K in from Jess and a $50K-up/$50K-done deal structure. Then June detonates: the GigaOracle — \"the machine that builds machines\" — crystallizes; Wes pays $60K and flies the jet himself, onboarding compresses from six weeks to one, a homemade session-notifier adds 50% throughput, and Brandon's Fable demo turns a month of dev grinding into 12 hours (\"Bro, we've struck oil\"). On June 18 Spencer refuses a quarter-million-dollar backend quote to his face — \"I'm getting it done in 30 days. I know how to talk to the machine. I've been the AI.\" — and by June 26 the tally reads 16 web apps, ~150,000 lines of code, 300+ screens in 41 days, six client softwares spawned in six weeks. The sprint peaks June 21 with the marathon creative session (pricing locked at $15K–$500K, the book conceived) and closes with the other half of mastery: when The Listings Lab engagement wobbles, Spencer runs the remediation like a surgeon — \"feelings first, facts second\" — while setting July's shot: seven accounts at $60K, $210K in his pocket, called 18 months in advance and landing on the day."

export const receipts: Receipt[] = [
  {
    "receipt": "Wes (American Installations) paid $60,000 to participate in the build — and does the building himself under Spencer's guidance, thanking Spencer for it",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "August flagship authority proof: 'clients pay to fly the jet themselves' — anchors the Do You Own It? campaign"
  },
  {
    "receipt": "16 web applications, ~150,000 lines of code, 300+ screens shipped in 41 days",
    "source_call": "2026-06-26 - AI-Driven Plumbing Software Build",
    "date": "2026-06-26",
    "use": "The hero stat of AUTHORITY month — one LinkedIn post, one YouTube cold open, one billboard line"
  },
  {
    "receipt": "Client onboarding compressed from six weeks to one week — Kevin nearly caught up to Wes in seven days after learning Precise Language",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "Proof the method (not just the tool) transfers — Precise Language as the accelerant"
  },
  {
    "receipt": "Refused a $250K/90-day backend quote from an Austin dev shop; committed to 30 days",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18",
    "use": "David-vs-industry story; the '30 days vs quarter million' post"
  },
  {
    "receipt": "Pre-AI estimate for the American Installations CRM scope: $250K–$400K; delivered via AI with ~40 hours of finalization work scoped by Brandon",
    "source_call": "2026-05-15 - HVAC AI App Prototype",
    "date": "2026-05-15",
    "use": "Before/after economics of AI-native builds — authority math"
  },
  {
    "receipt": "MainLine framed as a $300K-value build for a plumbing company, delivered in 30 days",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18",
    "use": "Kyle Plumbing case-study headline number (needs Kevin sign-off)"
  },
  {
    "receipt": "$40K collected from Jess/TLL this quarter, plus $4K from Jason/AcroYoga; $30K more expected July 1",
    "source_call": "2026-05-19 - Quarterly Financial and Growth Plan",
    "date": "2026-05-19",
    "use": "Rate-climb receipts for the $5K→$15K→$50K/mo arc (aggregate only; client-money details need clearance)"
  },
  {
    "receipt": "Deal structure for high-value engagements: $50,000 upfront + $50,000 on completion, worked intensively 2–3 weeks",
    "source_call": "2026-05-19 - Quarterly Financial and Growth Plan",
    "date": "2026-05-19",
    "use": "Pricing-power proof — the $100K engagement post"
  },
  {
    "receipt": "July plan: seven accounts at $60K = $210K in one month, without raising prices",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "The called shot — publish in July as intention, harvest in October as receipt"
  },
  {
    "receipt": "Engagement pricing band scoped at $15K–$500K, solopreneur to enterprise",
    "source_call": "2026-06-21 - Personal AI Platform and Creative Sprint",
    "date": "2026-06-21",
    "use": "Offer-stack architecture content; the 'what a fighter jet costs' post"
  },
  {
    "receipt": "Kyle Plumbing ads live on a $5K budget; average ticket $850; call center working a 35,000-customer list with complimentary inspections",
    "source_call": "2026-05-07 -  Kevin Couper",
    "date": "2026-05-07",
    "use": "Ground-level campaign receipts for the MainLine case study (Kevin sign-off)"
  },
  {
    "receipt": "Fable audit: what took 'a month of solid grinding' with the prior model finished in ~12 hours; subcontractor compliance screens worked untouched on first click",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12",
    "use": "Engineer-verified speed proof — Brandon's own words carry the authority"
  },
  {
    "receipt": "Six custom softwares spawned in six weeks: Wes, Jess, Kevin, Nanny Baddies, merch store, personal website + Ashley's site — with 2–3 person teams",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12",
    "use": "Spencer's own stated PR story — the six-in-six announcement post"
  },
  {
    "receipt": "Notification app Spencer built alerts when AI sessions finish — claimed ~50% throughput gain running 5+ parallel sessions",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "Tooling authority: 'I build tools to make the tools faster' demo short"
  },
  {
    "receipt": "The Listings Lab team (Jess & Yves) onboarded into their own codebase: GitHub collaborators, local dev at localhost:4555, Claude Code + branch conventions",
    "source_call": "2026-06-02 - The listing lab build",
    "date": "2026-06-02",
    "use": "Literal ownership proof — clients holding the keys to their own repo (clearance required)"
  },
  {
    "receipt": "Revenue split locked: Spencer 50%, B-Dog 20%, Josh 15%, WooSender 10%, salesperson 5%",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "Team-economics transparency content (partner sign-off first)"
  },
  {
    "receipt": "Closer Marco's close rate: 6% in May → 27% in June under the new script/coaching system",
    "source_call": "2026-07-01 - Client Relationship Recovery Plan",
    "date": "2026-07-01",
    "use": "Sales-system proof point, anonymized (heavy clearance — active client remediation)"
  },
  {
    "receipt": "$200K generated within 24 hours (mid-June), per Spencer's own account",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18",
    "use": "Potential headline receipt — verify what it comprises before any public use"
  },
  {
    "receipt": "Steps per day 4,400 → 12,500 since February; weight down to 193 lbs during the highest-output stretch of his life",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "use": "DEPTH month body-mind receipt — output and health rising together"
  },
  {
    "receipt": "AcroYoga 501(c)(3) plan: $5K–$10K setup, October 3-day certification (10–30 participants), Jambassador + Catalyst programs, yoga-school GTM",
    "source_call": "2026-06-18 - Jason Nemer & Lisa Sasevich (2 of 2)",
    "date": "2026-06-18",
    "use": "October HARVEST documentary beat + mission-work authority"
  },
  {
    "receipt": "AI Josh built in four variants (public/coaching/internal/Josh-only) from Josh's assets; 80%-complete version handed off for refinement",
    "source_call": "2026-07-02 - Spencer - Josh Weekly",
    "date": "2026-07-02",
    "use": "'I cloned my head of sales' demo — August (Josh sign-off)"
  },
  {
    "receipt": "Wes build formalized as the showcase: 90–100 day custom-software build, published to Vercel, Loom-feedback → sandboxed-build pipeline with owner review gate",
    "source_call": "2026-06-29 - Spencer & Wes",
    "date": "2026-06-29",
    "use": "The definitive case-study spine for August — process + artifact + timeline"
  },
  {
    "receipt": "American Installations nightly-run cadence: v6.1 baseline, real-time crew alerts, drag-and-drop crew composition, AutoCalc from contracts, inventory projections; 7 managers onboarding to Loom",
    "source_call": "2026-05-07 -  Wesley Couture",
    "date": "2026-05-07",
    "use": "Feature-depth receipts for the CRM case study"
  },
  {
    "receipt": "HVAC prototype's admin view records build receipts and links every feature update to its source transcript",
    "source_call": "2026-05-15 - HVAC AI App Prototype",
    "date": "2026-05-15",
    "use": "Meta-receipt: the software itself keeps receipts — perfect AUTHORITY-month artifact"
  },
  {
    "receipt": "AI company launching at Tony Robbins' event in front of 10,000 attendees, with a CTO-ecosystem distribution model Spencer is connected to",
    "source_call": "2026-05-28 - Caught the devil by the tail",
    "date": "2026-05-28",
    "use": "Ecosystem credibility beat — verify the claim with the partner before citing"
  }
]

export const callStories: CallStory[] = [
  {
    "story": "The Quarter-Million No: an Austin dev shop tells Spencer his price and timeline are 'nuts' and quotes $250K for one backend. Spencer's answer: 'You don't see what I see... I'm getting it done in 30 days. I know how to talk to the machine — I've been the AI.' Even best friend Brad had a heart-to-heart telling him to stop making these promises; Spencer said no.",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18",
    "clearance_needed": false,
    "treatment": "YouTube episode cold open for AUTHORITY month + LinkedIn text post; keep the vendor anonymous, keep Brad's doubt in — the doubt is what makes the receipt land"
  },
  {
    "story": "Wes flies the jet: a $5M/year contractor pays Spencer $60,000 and then does the building himself — Spencer teaches him Precise Language, sandboxes him in Claude, and Wes thanks him for it. 'It's an honor to have you as a Sherpa.' His team's only job: complain in Looms, and the complaints become next week's software.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": true,
    "treatment": "Flagship August case study: long-form YouTube with Wes on camera + LinkedIn carousel; requires Wes sign-off on the $60K figure"
  },
  {
    "story": "The Engineer in Shock: Brandon, a career developer, runs the American Installations app through Fable overnight and clicks through screens he never built that simply work — subcontractor compliance, pipeline dashboards. 'A month of solid grinding... in one day. I'm in shock.' Spencer: 'I know what to think. Cha-ching. We've struck oil.'",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12",
    "clearance_needed": true,
    "treatment": "YouTube segment built around the actual screen-share moment if recorded; Brandon's professional skepticism converting is the story — Brandon sign-off"
  },
  {
    "story": "Kevin catches Wes in a week: Spencer teaches Kevin Precise Language before his first Loom runs and he nearly catches up to a client with a six-week head start in seven days — proof the onboarding compressed 6x on the very first repetition.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": true,
    "treatment": "LinkedIn post + case-study sidebar; Kevin sign-off"
  },
  {
    "story": "Handing clients the keys: Spencer spends 2.5 hours getting Jess and Yves — real estate coaches, not engineers — cloned into their own GitHub repo, running their own software on localhost, taught to prompt Claude Code themselves. The literal enactment of 'Do You Own It?'",
    "source_call": "2026-06-02 - The listing lab build",
    "date": "2026-06-02",
    "clearance_needed": true,
    "treatment": "Vlog entry + YouTube tutorial-style segment; heavy clearance — this client relationship is in active remediation as of July 1"
  },
  {
    "story": "The Ambush: a founder friend gets cornered by his co-founders — they want him out by Friday. He holds the bank accounts, Stripe, and the corporate filings; they hold the ultimatum. Over two calls Spencer walks him from grief to leverage: pay off the Amex to kill the float, price the exit ($120K runway ask vs. a $75K contract formula), give one fair conversation, prepare the worst case. Spencer's line on the side deals: 'That's theft.'",
    "source_call": "2026-05-21 - Founder Exit Negotiation",
    "date": "2026-05-21",
    "clearance_needed": true,
    "treatment": "September DEPTH episode, fully anonymized ('a founder I love got ambushed on a Tuesday') — no names, no company, rounded numbers; requires the friend's consent and legal read on the allegations"
  },
  {
    "story": "Feelings First, Facts Second: with six weeks to a client's biggest launch, the delivery wobbles and trust cracks. Spencer convenes the team twice in 48 hours, refuses the blame game ('where did we make a wrong turn at Albuquerque?'), demands a 24-hour written remediation, and coaches the save: waive two months of billing, ship the simulation engine, daily EODs, document the SOPs. 'We can have the cure for cancer, fellas — if the founder is still pissed, it don't matter.'",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30",
    "clearance_needed": true,
    "treatment": "LinkedIn leadership essay, anonymized to 'a client at a critical moment' — publish only after the TLL relationship resolves; the quotes are evergreen even if the client is never named"
  },
  {
    "story": "The Monitor Odyssey: during the most productive month of his life, the only thing that slowed Spencer down was hardware — five monitors bought, two shipped to his parents by accident, one to a stranger's house two blocks from Ashley's because his dyslexia flipped 2501 into 2901, and a MacBook Air driving a second screen through an Apple TV hack. '100 inches of screen, $400 a piece.'",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": false,
    "treatment": "Vlog comedy entry — self-deprecating humanizer between authority drops; pairs with the 6/12 line to Brandon about the setup"
  },
  {
    "story": "41 Days: 16 web applications, ~150,000 lines of code, 300+ screens — output Spencer estimates would take dozens of people or years by traditional means — while noting the honest cost: less sleep, less patience, a brain that has to be managed like the machine it drives.",
    "source_call": "2026-06-26 - AI-Driven Plumbing Software Build",
    "date": "2026-06-26",
    "clearance_needed": false,
    "treatment": "August LinkedIn stat-post + September DEPTH follow-up on the toll; the vulnerability half goes in September, not August"
  },
  {
    "story": "Fifteen Years on an Island: 'I've been seeing this for 15 years and it's been lonely — cripplingly lonely. And now Wes sees it, Kevin sees it, Brad finally sees it. People are finally starting to join me.' The vindication arc of a man who was the AI before the AI arrived.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": false,
    "treatment": "September DEPTH keystone essay / to-camera monologue — the emotional spine of 'inside the wizard's head'"
  },
  {
    "story": "Calling the Shot: 18 months before it happened, Spencer wrote a two-year plan — build community, build Gary, Q1 'be around people,' Q2 'find her.' She showed up on the 15th — dead center of Q2. 'I'm calling my shot 18 months in advance and hitting my mark on the day.'",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": true,
    "treatment": "October HARVEST prophecy content — business version publishable now; the romantic dimension needs Ashley's blessing or removal"
  },
  {
    "story": "The Gatekeeper's Coin: Spencer gets nominated into the Bellwether Alliance — vetting questionnaire, ~$2,000 entry, $100/month, a symbolic coin. He appreciates the nomination and declines the questionnaire: he doesn't pay gatekeepers for rooms he can build himself.",
    "source_call": "2026-05-28 - Caught the devil by the tail",
    "date": "2026-05-28",
    "clearance_needed": true,
    "treatment": "LinkedIn contrarian post on paid networks vs. owned communities; anonymize the network's name unless consent obtained"
  },
  {
    "story": "The Bitching Becomes the Backlog: Spencer's delivery loop in one sentence — the client's team uses the software, complains about it in Loom videos, and the complaints are automatically turned into next morning's feature proposals. 'All it requires is participation.'",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08",
    "clearance_needed": false,
    "treatment": "YouTube explainer of the daily improvement loop + LinkedIn one-liner (sanitized phrasing for LinkedIn, full voice for YouTube)"
  },
  {
    "story": "The Software That Keeps Receipts: the HVAC prototype's admin view links every shipped feature back to the exact call transcript that requested it — a paper trail from a founder's sentence to working code. The product literally embodies the AUTHORITY month thesis.",
    "source_call": "2026-05-15 - HVAC AI App Prototype",
    "date": "2026-05-15",
    "clearance_needed": true,
    "treatment": "Screen-recorded demo short for August — 'receipts, literally'; Wes sign-off on visible data"
  },
  {
    "story": "Reverse-Engineering Steve's Brain: to automate ad buying for Kyle Plumbing, Spencer sat through four-hour sessions watching a veteran media buyer work, 'painstakingly reverse-engineering his brain' — the extraction method itself is the product.",
    "source_call": "2026-05-07 -  Kevin Couper",
    "date": "2026-05-07",
    "clearance_needed": true,
    "treatment": "LinkedIn process post on knowledge extraction; Kevin/Steve sign-off"
  },
  {
    "story": "Two Weeks in the Container: before the final production sprint, Spencer arranges his life like a mission — voice notes instead of calls, an aunt recruited for nanny-style support, friends told exactly what support looks like, distractions removed. The wizard builds a container before he casts.",
    "source_call": "2026-06-21 - Personal AI Platform and Creative Sprint",
    "date": "2026-06-21",
    "clearance_needed": true,
    "treatment": "September DEPTH vlog on creative containment rituals; scrub all relationship/third-party specifics from that call"
  }
]

export const callQuotes: CallQuote[] = [
  {
    "quote": "I know how to talk to the machine. Because up until this point, I've been the AI. I know it intimately — same way that a bird knows how to fly.",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18"
  },
  {
    "quote": "I've been told that I was nuts. I got a quote for a quarter million dollars to do the back end... I'm getting it done in 30 days.",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18"
  },
  {
    "quote": "I'm calling it the Giga Oracle, because it's the machine that builds the machines.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I taught my machine precise language, and I'm absolutely fucking crushing it.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "Wes is doing my job. He's driving — he's flying the jet. He paid me $60,000 for him to do the work. And he's thanking me for it.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I sped the process up from six weeks to a week. With my first one. And I'm just finding ways to go faster and faster.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I've created an invincible way to create with precision that all it requires is participation.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I'm killing all software. You understand how big of a deal that is? I'm taking down the most powerful sector in the world.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "Bro, we've struck oil.",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12"
  },
  {
    "quote": "We're going to spin softwares in 30 days, bro.",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12"
  },
  {
    "quote": "In six weeks I created Wes, Jess, Kevin, Nanny Baddies, the merch store, my personal website... I spawned all of these custom softwares in six weeks, dude — with essentially two-to-three-person teams.",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12"
  },
  {
    "quote": "I know it works because I've been the AI for the past 12 years. It all starts with your org chart, the customer experience — and we just fractal down from there.",
    "source_call": "2026-06-12 - Application Audit and Fable Demo",
    "date": "2026-06-12"
  },
  {
    "quote": "It's like Neo in the Matrix, where they plug that thing into his brain — 'I know Kung Fu.' It's like that.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I feel like I've been on an island for 15 years and people are finally starting to join me. It's been so lonely — so cripplingly lonely.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "This is my baby. No one's getting equity for fuck all. It's a cash play — because eventually, equity equals responsibility. I just want cash.",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18"
  },
  {
    "quote": "I need $5 million to get to the promised land. That's all that I need.",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline",
    "date": "2026-06-18"
  },
  {
    "quote": "When shit like this happens, it's feelings first, facts second. The number one thing is to make the founder feel good — then give the rollout plan.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "We can have the cure for cancer, fellas — if the founder is still pissed, it don't matter.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "What protects us from being fired on this job is the crumb trail and the evidence that protocol was followed. If someone dies on the table and all protocol was followed — that happens sometimes. But if the surgeon's not checking the protocol? Guys.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "Let me show you. Not tell you.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "What matters is the scoreboard here, fellas.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "In the next 30 days, we go above and beyond the commitment to fill the gap of the commitment that wasn't made.",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation",
    "date": "2026-06-30"
  },
  {
    "quote": "I'm working on 12 things at one time with my feet up and with one hand.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "I planned this whole two years out... and literally, smack dab on the 15th, middle of Q2 — I'm calling my shot 18 months in advance, and I'm hitting my mark on the day.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  },
  {
    "quote": "Sometimes I wonder how you guys put up with me — and then I realize that I have to put up with me all the time. So I feel less bad for you guys. It's a tornado.",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan",
    "date": "2026-06-08"
  }
]

export const callPieces: CallPiece[] = [
  {
    "piece": "Post: 'A dev shop quoted me $250K and told me my timeline was nuts. I'm shipping it in 30 days.' — the refusal story with the receipt to follow",
    "platform": "LinkedIn",
    "month": "July",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline"
  },
  {
    "piece": "Demo short: the session-notification app — running five AI sessions at once and never losing a minute (the 50% speed hack)",
    "platform": "YouTube",
    "month": "July",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Vlog entry: The Monitor Odyssey — five monitors, two wrong houses, one Apple TV hack; the only thing that slowed the machine down was the furniture",
    "platform": "Vlog",
    "month": "July",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Post: 'Equity equals responsibility. I don't want your equity — I build you the jet and hand you the keys.' The ownership philosophy in one riff",
    "platform": "LinkedIn",
    "month": "July",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline"
  },
  {
    "piece": "Explainer video: the Loom-to-feature pipeline — your team complains on video at night, votes on proposals in the morning, ships by Friday",
    "platform": "YouTube",
    "month": "July",
    "source_call": "2026-06-29 - Spencer & Wes"
  },
  {
    "piece": "Post: the July called-shot — 'seven accounts, $210K, 31 days. Watch me.' (sets up the October harvest retrospective)",
    "platform": "LinkedIn",
    "month": "July",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Flagship case study: Wes / American Installations — the contractor who paid $60K and built his own enterprise software in 90–100 days",
    "platform": "YouTube",
    "month": "August",
    "source_call": "2026-06-29 - Spencer & Wes"
  },
  {
    "piece": "Carousel: 41 days / 16 apps / 150,000 lines / 300+ screens — 'this used to be a 40-person dev org'",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-06-26 - AI-Driven Plumbing Software Build"
  },
  {
    "piece": "Case study: MainLine — replacing ServiceTitan for a South Florida plumbing company; a $300K-class build in 30 days",
    "platform": "YouTube",
    "month": "August",
    "source_call": "2026-06-18 - Backend Build Cost and Timeline"
  },
  {
    "piece": "Post series: 'Six softwares in six weeks' — one post per build, each ending with Do You Own It?",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-06-12 - Application Audit and Fable Demo"
  },
  {
    "piece": "Reaction cut: the engineer in shock — Brandon clicking through screens nobody wrote that simply work ('a month of grinding... in one day')",
    "platform": "YouTube",
    "month": "August",
    "source_call": "2026-06-12 - Application Audit and Fable Demo"
  },
  {
    "piece": "Post: before/after economics — 'this exact scope was quoted $250K–$400K before AI. Here's the invoice now.'",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-05-15 - HVAC AI App Prototype"
  },
  {
    "piece": "Demo short: the software that keeps receipts — every feature linked to the founder's sentence that requested it",
    "platform": "YouTube",
    "month": "August",
    "source_call": "2026-05-15 - HVAC AI App Prototype"
  },
  {
    "piece": "Post: 'Onboarding used to take six weeks. My second client did it in one.' — Precise Language as the accelerant",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Demo: AI Josh — cloning a head of sales into four variants (public, coaching, internal, personal)",
    "platform": "YouTube",
    "month": "August",
    "source_call": "2026-07-02 - Spencer - Josh Weekly"
  },
  {
    "piece": "AI Power Lunch — stand up the weekly lead-gen lunch as a filmed recurring franchise; every session yields clips",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-05-15 - HVAC AI App Prototype"
  },
  {
    "piece": "Media kit + podcast-circuit launch — assemble the kit and book the first five guest spots (the distribution plan Spencer set on 5/19)",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-05-19 - Quarterly Financial and Growth Plan"
  },
  {
    "piece": "Anonymized proof post: a closer written off as a throwaway went 6% → 27% close rate in six weeks — systems make salespeople",
    "platform": "LinkedIn",
    "month": "August",
    "source_call": "2026-07-01 - Client Relationship Recovery Plan"
  },
  {
    "piece": "Episode: 'I've been the AI for 12 years' — the origin story of the extraction method (org chart → customer experience → fractal down)",
    "platform": "YouTube",
    "month": "September",
    "source_call": "2026-06-12 - Application Audit and Fable Demo"
  },
  {
    "piece": "Essay: Fifteen Years on an Island — the loneliness of seeing it early, and the people finally arriving",
    "platform": "LinkedIn",
    "month": "September",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Teaching series: Precise Language for machines — the five voids, applied to prompting ('vague in, garbage out; precise in, jet out')",
    "platform": "YouTube",
    "month": "September",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Episode: The Ambush — an anonymized founder-exit war story: leverage, the Amex float, pricing your runway, and one fair conversation",
    "platform": "YouTube",
    "month": "September",
    "source_call": "2026-05-21 - Founder Exit Negotiation"
  },
  {
    "piece": "Essay: Feelings First, Facts Second — what saving a client relationship in 48 hours actually looks like",
    "platform": "LinkedIn",
    "month": "September",
    "source_call": "2026-06-30 - Conversion & Delivery Remediation"
  },
  {
    "piece": "Vlog: the creative container — voice notes, a recruited aunt, and why the wizard seals the room before the two-week cast",
    "platform": "Vlog",
    "month": "September",
    "source_call": "2026-06-21 - Personal AI Platform and Creative Sprint"
  },
  {
    "piece": "Vlog short: the Doogie Howser flip — journal the episode of your life at the start of the day, then go live it",
    "platform": "Vlog",
    "month": "September",
    "source_call": "2026-05-19 - Quarterly Financial and Growth Plan"
  },
  {
    "piece": "Honest post: what 41 days at machine speed costs — sleep, patience, and how I manage the operator (the shadow side of the hero stat)",
    "platform": "LinkedIn",
    "month": "September",
    "source_call": "2026-06-26 - AI-Driven Plumbing Software Build"
  },
  {
    "piece": "Book announcement beat — the book conceived in the June 21 sprint session becomes HARVEST's centerpiece reveal",
    "platform": "YouTube",
    "month": "October",
    "source_call": "2026-06-21 - Personal AI Platform and Creative Sprint"
  },
  {
    "piece": "Documentary beat: the AcroYoga October certification — filming the 3-day cert and the birth of the nonprofit",
    "platform": "Vlog",
    "month": "October",
    "source_call": "2026-06-18 - Jason Nemer & Lisa Sasevich (2 of 2)"
  },
  {
    "piece": "Retrospective: the called shot, scored — July's $210K prediction vs. what actually landed, receipts attached",
    "platform": "LinkedIn",
    "month": "October",
    "source_call": "2026-06-08 - Giga Oracle Product and Commercial Plan"
  },
  {
    "piece": "Keynote-style episode: the new civilization — the 1000-year arc behind the fighter jets (prophecy framing, carefully grounded)",
    "platform": "YouTube",
    "month": "October",
    "source_call": "2026-05-19 - Quarterly Financial and Growth Plan"
  }
]

export const calendarAdditions: CalAddition[] = [
  {
    "week_or_month": "Week 1 (Jul 6–12)",
    "addition": "Fable migration window closes Jul 7 — screen-record the company-wide consolidation into the single software; this footage is August b-roll"
  },
  {
    "week_or_month": "Week 1 (Jul 6–12)",
    "addition": "Kyle Plumbing ad launch: Kenny builds WooSender account, Zapier hookup, launch call with Kevin — film the go-live moment for the MainLine case study"
  },
  {
    "week_or_month": "Week 2 (Jul 13–19)",
    "addition": "TLL remediation in flight (billing waived through July, rebuild pushed to month-end) — content freeze on all Listings Lab material until the client decision lands"
  },
  {
    "week_or_month": "Week 3–4 (Jul 20–Aug 2)",
    "addition": "July seven-account onboarding push ($60K each) — document every signed account as a dated receipt for the October retrospective"
  },
  {
    "week_or_month": "Week 4 (Jul 27–Aug 2)",
    "addition": "Wes publishes the app to Vercel and first testers (starting with his brother) run guided walkthroughs — capture the Loom-feedback loop on camera"
  },
  {
    "week_or_month": "August",
    "addition": "TLL month-end evaluation decision (continue or off-board) — schedule the anonymized 'feelings first' essay only after this resolves"
  },
  {
    "week_or_month": "August",
    "addition": "Wes 90–100-day build completion window — flagship case study shoot and drop; align Chris Douglas for the on-site or remote capture"
  },
  {
    "week_or_month": "August",
    "addition": "Launch AI Power Lunch as a weekly filmed lead-gen event (concept from 5/15 GTM plan)"
  },
  {
    "week_or_month": "Week of Aug 17 (Aug 17–23)",
    "addition": "KW Megacamp keynote Aug 19 (Jess, Houston) — the 'six-week runway' from the 6/30 call terminates here; hold a contingent authority beat if the engagement is healthy"
  },
  {
    "week_or_month": "September",
    "addition": "Josh exits WooSender calls by September (salesperson hired) — freed capacity gates the AI Josh demo content"
  },
  {
    "week_or_month": "September",
    "addition": "Podcast-circuit guesting begins (media kit shipped in August) — 1 guest spot/week feeds DEPTH month distribution"
  },
  {
    "week_or_month": "October",
    "addition": "AcroYoga 3-day certification (10–30 participants, min 6) — book documentary coverage; nonprofit 501(c)(3) filing beat runs alongside"
  },
  {
    "week_or_month": "October",
    "addition": "Book reveal beat (concept born June 21) anchors HARVEST — schedule the announcement episode mid-month"
  },
  {
    "week_or_month": "October",
    "addition": "Called-shot scoring post: reconcile the July $210K prediction against actual collected revenue, receipts attached"
  },
  {
    "week_or_month": "Week 3 (Jul 20–26)",
    "addition": "SESSION 2 LANDED (Pt. 2, 2h36m, uploaded 7.22) — mined into the Command Center same-day: 46 clips, 14 shorts, 3 pillars, 9 themes, 4 arcs. The biweekly-shoot promise kept itself on schedule"
  },
  {
    "week_or_month": "Week 4 (Jul 27–Aug 2)",
    "addition": "S2 first cuts enter the stack: 'Prayer Is Prompting God' (C114) ships untrimmed as the announcement short; the Meow Meow cold open (C81) cuts for IG; Chris photographs the S2 question cards for the Cards-series cover frames"
  },
  {
    "week_or_month": "August",
    "addition": "S2 operator wave on LinkedIn: the completion-frame post, one-screen-per-person, the million-me's résumé post, and the heart-happy client-philosophy post rotate into the Monday/Thursday story slots (drafts live in the ready-post bank)"
  },
  {
    "week_or_month": "August",
    "addition": "'Reality vs. Truth — The Precise Language Masterclass' (S2 pillar) becomes August's second long-form; the REAL ≠ TRUE carousel ships the same week"
  },
  {
    "week_or_month": "September",
    "addition": "The Cards series at full cadence (2/week from the S2 deck) + 'The Heart Chapter' pillar and 'The God Tape' fill DEPTH month's human lane — S2 supplies September end to end"
  },
  {
    "week_or_month": "September",
    "addition": "CLEARANCE DECISION: 'Job Finished.' (the S2 breakup documentary) — Spencer's sign-off decides whether the vlog's Season 2 trough episode exists; no edit time past selects until the gate clears"
  },
  {
    "week_or_month": "October",
    "addition": "'What Did Your Mother Teach You?' paired tentpole (the question + dad's answer) runs in HARVEST month — YouTube/vlog only per the on-tape platform flag"
  }
]

export const clearanceList: string[] = [
  "ALL Listings Lab material (Jess, Yves, Phoebe, Tyler, Leah, Marco, the remediation, the Bahamas trip, the $6K-vs-$15–20K payment shortfall, the Aug 19 Megacamp tie-in) — active client-relationship crisis as of Jul 1; nothing ships until resolved and Jess signs off",
  "Wes / American Installations: the $60,000 figure, 'Sherpa' quote, app screenshots with real business data, and the 90–100-day case study — Wes sign-off required",
  "Kevin Couper / Kyle Plumbing: $5K ad budget, $850 average ticket, 35,000-customer list, the $300K build-value claim, and any MainLine screenshots — Kevin sign-off required",
  "Brandon Burr's demo reactions, quotes, and any recorded screen-share footage — Brandon sign-off",
  "The founder-exit story (both 5/16 and 5/21 calls): all names (Harel, Merrick, Marco, Faro, Sarah, Cody, Sergio, Albert, company), the depression and marriage-strain disclosures, and the theft/side-deal allegations — publish only fully anonymized with the friend's explicit consent and a legal read; allegations of financial misconduct are defamation-sensitive",
  "The '$200K in 24 hours' claim (6/18) — verify exactly what it comprises before any public use; as stated it's entangled with the prayer-day story and personal relationships",
  "Ashley: the relationship, the 'Angel' software, her sites, and every romantic detail across the 6/8, 6/18, and 6/21 calls — off-limits without both parties' explicit agreement",
  "Nanny Baddies: the entire positioning (the 'taboo' framing, 'wifey' language, Jackie's compensation discussions from 5/19 and 6/24) — requires Spencer's deliberate public-positioning decision before ANY mention; current call language is unpublishable as-is",
  "Health and altered-state disclosures: periodic fever syndrome, 'hit by the light,' no-food/no-sleep creation states, 48–50-hour sessions with fasting/stimulant references (5/28), and the sexual-energy/chakra material (6/8) — Spencer's personal call, and never in client-facing content",
  "Partner economics: the 50/20/15/10/5 revenue split naming B-Dog, Josh, and WooSender — partner sign-off before publication",
  "The Tony Robbins '10,000 attendees' AI-company launch claim (5/28) — secondhand from a partner; verify before citing anywhere",
  "Bellwether Alliance: name, fees, and membership mechanics — anonymize as 'a paid private network' unless consent is obtained",
  "Dating and third-party personal names (Ramsha, the prayer-day story and its religious framing, Valeria's personal chatter) — never publish; the religious material additionally needs respectful-framing review if ever referenced",
  "Profanity-heavy verbatim quotes ('killing all software,' 'no equity for fuck all,' locker-room lines from 6/12) — platform-by-platform decision: full voice on YouTube/vlog, sanitized on LinkedIn; the 6/12 locker-room line is unpublishable anywhere",
  "Read.ai transcription artifacts: the 6/2 Listings Lab page contains a garbled action item of a private medical nature — never reference it, and scrub/correct the Notion page before sharing any call summaries with clients or team",
  "SESSION 2 — the girl / the breakup (C105 texts-read-verbatim, C106 receipts of what he built her, C117 aftermath, C120 removal-request material, the electric-blanket/Amazon beats): vlog-tier maximum, she is never named, texts are read-only (never shown on screen), and NOTHING ships without Spencer's explicit sign-off — an active personal situation as of 7.22, same handling as the Ashley rule",
  "SESSION 2 — the exes catalogue (C96: the stabbing attempt, faked pregnancy, the beating, cops-called-on-herself): anonymized vulnerability framing only, never shock-clipped, vlog/long-form tier — the no-disrespect frame he states on tape IS the edit rule",
  "SESSION 2 — the spectrum/Asperger's riff about the girl (00:39:05–00:42:40 and the 01:17:31 callback): Spencer flags it on tape ('this one might not be for LinkedIn') — treat as hold-for-review everywhere; the general trap-of-the-wise teaching (C119) cuts clean without it",
  "SESSION 2 — third parties: the $20K book-offer friend (identifiable by offer details), the bodywork 'big sister,' Austin/Dalton, the therapist details, and the first-marriage material — anonymize or hold; the mothers-question tentpole (C124) runs YouTube/vlog only per the on-tape flag"
]
