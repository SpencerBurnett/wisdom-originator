// The Pics folder (~/Desktop/Pics), broken down image by image — 2026-07-05.
// Three families: The Crayon Deck (27 boards, one fixed overhead frame —
// a ready-made stop-motion sequence), brand assets, and set/lore shots.

export interface AlbumItem {
  file: string
  title: string
  family: 'crayon-deck' | 'brand' | 'set' | 'lore' | 'motion'
  whatItIs: string
  plays: string[]
  caption?: string
  slot: string
  clearance?: string
}

export const deckConcept = {
  headline: 'The Crayon Deck is a stop-motion film that already exists',
  body: 'All 27 boards were shot from the same overhead position — the crayon caddy sits identically at the top of every frame. That fixed anchor means the stack cuts together as frame-by-frame animation with ZERO reshooting: flip board to board and the desk appears to redraw itself. Graded with Dehancer Pro, this is the exact "layered photographic stop-motion" signature from the June 22 conversation — except the layer library is already photographed. One edit session turns the deck into: (1) the channel trailer, (2) 27 individual board shorts, (3) transition beats between talking-head clips, and (4) the thumbnail chain\'s end plates.',
}

export const album: AlbumItem[] = [
  // ————— THE CRAYON DECK —————
  {
    file: '/pics/IMG_1374.jpeg',
    title: 'The Name Map — every sub-personality',
    family: 'crayon-deck',
    whatItIs: 'SPENCER M. BURNETT centered, orbited by 35+ named sub-personalities in crayon: The Story Teller, The Oracle, The Technician, Spency B, The Monster, Lazer, The Beast, The Magician, Daddy, The Lion, The Alchemist, KIKI, Wisdom Originator, The Wizard, The Mad Scientist, The King, Calvin, The Healer, Trent Steele, The Bestower, The god, Kevbo…',
    plays: [
      'THE September DEPTH-month key art — this board IS the "sub-personalities of my character" strategy from the Valeria call, drawn by hand',
      'Stop-motion reveal: names appear one per frame around the center — the channel-trailer centerpiece',
      'Interactive vlog post: "Which one of me are you talking to?" — each name links to the clip where that persona shows up in the 6-hour footage',
      'YouTube episode: "I have 35 names. Here\'s the org chart of my head." (pairs with C-clips from the Wizard\'s Head pillar)',
      'Merch: the full map as an art print; single names (Spency B, The Wisdom Originator) as hat embroidery',
    ],
    caption: 'LinkedIn draft: "My clients think they hired one guy. Here\'s the actual team." + this image. CTA: which one do you need?',
    slot: 'September Week 10 — anchors the sub-personality lane split',
  },
  {
    file: '/pics/IMG_1392.jpeg',
    title: 'THE SPLIT — victim vs. sovereignty',
    family: 'crayon-deck',
    whatItIs: 'Two worldviews: a globe marked "you are here" over VICTIM ("the world is responsible for what happens to me") vs. concentric rings YOU→FAMILY→COMMUNITY→CITY over SOVEREIGNTY ("I am fully responsible… I AM RESPONSE-ABLE"), bridged by AWARENESS.',
    plays: [
      'The thumbnail for the October pillar "2029: The Split" — hand-drawn, already exists, zero design hours',
      'The two halves animate as separate stop-motion layers: globe assembles, then the rings pull you across the AWARENESS bridge',
      'LinkedIn carousel finale slide for every sovereignty/ownership post',
      'The vlog essay header for the prophecy-month kickoff',
    ],
    caption: 'Post: "Every person on earth is standing on one of these two drawings. The bridge between them is one word." + image',
    slot: 'October Week 14 — pillar video thumbnail + campaign key art',
  },
  {
    file: '/pics/IMG_1401.jpeg',
    title: 'The Split, pulled back — childhood photo in frame',
    family: 'lore',
    whatItIs: 'The Split board on the desk — but the pull-back reveals the set dressing: Spencer\'s childhood photo propped on the windowsill, three pairs of reading glasses lined up, and two battered grade-school spiral notebooks.',
    plays: [
      'THE nostalgia thesis in one frame — "fragmenting yourself from the present to an older moment" (his own June 22 words) made literal: the boy watches the man draw in crayon',
      'Vlog episode header: "The kid who filled those notebooks is the one drawing now"',
      'Final frame of the crayon-deck trailer — pull back from the last board to reveal the boy watching',
      'The old notebooks are an unopened content vault: "reading my childhood notebooks on camera" is a future episode with guaranteed emotional payload',
    ],
    slot: 'October Week 16 — the documentary\'s closing image',
  },
  {
    file: '/pics/IMG_1390.jpeg',
    title: 'The Biggest Secret card',
    family: 'crayon-deck',
    whatItIs: '"I have the biggest secret that EVERYBODY KNOWS but nobody seems to talk about — SPEAK UP / SPEAK CLEAR / SPEAK PRECISE. Hint: it\'s the codes to conscious creation."',
    plays: [
      'A complete YouTube thumbnail, drawn: curiosity gap + promise + brand doctrine in one card',
      'Cold-open title card for the Precise Language pillar video',
      'Pinned LinkedIn photo post — the three-step teaching in his handwriting outperforms any designed graphic',
      'Email #4 header image (the free-teaching email in the welcome sequence)',
    ],
    caption: 'Post: image + "That\'s it. That\'s the whole secret. The rest is 6 hours of me explaining why nobody does it."',
    slot: 'July Week 3 — Precise Language teaching drop',
  },
  {
    file: '/pics/IMG_1378.jpeg',
    title: 'GOD = TRUTH — the 5D map',
    family: 'crayon-deck',
    whatItIs: 'The cosmology ladder in red crayon: 5D God/Universe, 4D Etherial, 3D HUMANS—LANGUAGE (joy/pain faces), 2D Animals/Creatures, 1D Plants/Earth. Margins: "3D time", "Staying / Doing / Being".',
    plays: [
      'The teaching diagram for the conscious-creation model — the whiteboard segment of the "Inside the Wizard\'s Head" pillar, except it\'s crayon and that IS the brand',
      'Stop-motion build: the ladder draws itself rung by rung as the voiceover walks 5D→1D',
      'Carousel: one dimension per slide, his 6-hour footage quotes as captions',
      'Conscious-creation site (conscious-creation.vercel.app) hero art swap — hand-drawn beats rendered',
    ],
    slot: 'September Week 11 — DEPTH month teaching anchor',
  },
  {
    file: '/pics/IMG_1386.jpeg',
    title: 'The Pipeline — where creation breaks',
    family: 'crayon-deck',
    whatItIs: 'Full chain: COMMAND/QUESTION → INPUT → COMPUTER → ORACLE → BRAIN–LLM (memory/knowledge base) → TOOLS → ACTION → OUTPUT → RESPONSE, with every failure mode in red (vague language, don\'t own it, forgot password/hacked, misbehaves, no context, no performance) + the 5D→1D Creation Process bracket.',
    plays: [
      'THE sales diagram: this is the offer explained in one drawing — where every business\'s AI breaks and what owning the stack fixes',
      'YouTube mid-form: camera pushes along the chain, stopping at each red failure — "this is why your AI feels dumb"',
      'Discovery-call leave-behind: the diagram IS the audit framework ("where does YOUR chain break?")',
      'LinkedIn document post: the red failure modes as a listicle',
    ],
    caption: 'Post: "Your AI isn\'t dumb. Your chain is broken. Find your red word." + image',
    slot: 'July Week 2 — LAUNCH month offer explainer',
  },
  {
    file: '/pics/IMG_1387.jpeg',
    title: 'The Gary Funnel — $197 in crayon',
    family: 'crayon-deck',
    whatItIs: 'Business owner calls → GARY answers → Business AI Assessment (Q1–Q4) → "how many hours you could save (highest leverage, quickest win)" → "Want the full report + consult call? $197" → PAY & BOOK.',
    plays: [
      'The BrainJam AI-Zero HVAC wedge, productized on one page — show the drawing, then show Gary actually answering a call: the crayon-to-reality demo IS the brand promise',
      '"I drew this funnel in crayon. It made $X in week one" — the receipt post once first sales land',
      'Pitch-deck slide zero for the white-label play',
    ],
    slot: 'July Week 4 — pairs with New Shoot #1 (Demo Day) footage',
    clearance: 'Publish after the funnel is live — a drawn funnel that does not exist yet is a promise, not a receipt.',
  },
  {
    file: '/pics/IMG_1388.jpeg',
    title: 'OpenClaw Engine Map v1',
    family: 'crayon-deck',
    whatItIs: 'The personal-AI architecture: identity/soul/policies cloud, Mac Mini physical home, Oracle→OpenClaw→LLM (OpenAI/Anthropic/xAI/local), tech stack (11Labs, Descript, Twilio, iMessage, Chrome), memory systems, knowledge base (Gmail, Calendar, Drive, CRM, WhatsApp), interfaces (Telegram, Slack, website, chatbot). Labeled ENGINE.',
    plays: [
      '"The machine that builds machines" — drawn. The technical-authority post that filters for serious buyers',
      'YouTube episode: build-along where each crayon node lights up as the real terminal shows it working',
      'Print for the office wall behind the talking-head frame — set dressing that rewards freeze-frame',
    ],
    slot: 'August Week 6 — AUTHORITY month technical proof',
  },
  {
    file: '/pics/IMG_1395.jpeg',
    title: 'Oracle Architecture v2',
    family: 'crayon-deck',
    whatItIs: 'The evolved map: Memory (vector DB, RAG, compaction, daily logs), Context Files (soul/user/identity), Mac Mini/VPS with Oracle robot, Tools (n8n, Twilio, Heartbeat), Knowledge Base, AI/LLM row, private channels (Telegram/Discord/iMessage/Slack) vs public (website/ManyChat).',
    plays: [
      'Sequel post to v1: "Same machine, 60 days later" — the two maps side-by-side ARE the velocity receipt',
      'The stop-motion pair: v1 morphs into v2 frame-by-frame — evolution animated',
      'Gated asset: full-res architecture PDF as an email-capture lead magnet for technical buyers',
    ],
    slot: 'August Week 8 — the evolution receipt',
  },
  {
    file: '/pics/IMG_1393.jpeg',
    title: 'GUIDES + The Board of Directors',
    family: 'crayon-deck',
    whatItIs: 'The Oracle\'s inner council drawn as characters: Devil\'s Advocate, Relationship Advice (queen), The Wise Man, Inner Child, Health Coach, Business Coach, Oracle robot, Spiritual Guide, Conscious Creation Coach — plus DAILY REPORTS spec: shadow/pushback/blind-spot, pattern recognition, new ideas, behavioral changes, alignment score.',
    plays: [
      'Product sheet for the Oracle offer — "your AI board of directors" is the most legible consumer framing of the product',
      'Series: one guide per week answers a real question from Spencer\'s actual daily report (Oracle screenshots + the crayon character)',
      'The characters become stop-motion puppets — cut them out digitally, animate them speaking their report lines',
    ],
    slot: 'September Week 12 — Oracle product month',
  },
  {
    file: '/pics/IMG_1375.jpeg',
    title: 'THE BESTOMENT BOARD',
    family: 'crayon-deck',
    whatItIs: 'A full comedy universe: "May your bestoments be bestowed unto others", The 5 Love Bestoments, Old vs New Bestoments, Bestow Babes, MasterBestomEbator, Daily Bestoment Emails (1. Quality Bestoments… 5. Physical Bestoment), "Bestoment be with you — and also with you", The Bestow Stick, The 10 Bestoments, Bestow Barbie & Ken, #BistomentFit, "What are you bestowing for lunch?", Bestoment Tour \'26.',
    plays: [
      'The humor lane, fully written: 20+ standalone bits on one board — each phrase is a 30-second short with zero additional writing',
      '"The Daily Bestoment" — a recurring end-card gag: every video closes with one bestoment bestowed',
      'The 10 Bestoments as a carousel; "Bestoment be with you" as the community sign-off (comment-section ritual)',
      'Merch: The Bestow Stick as an actual prop in videos; #BistomentFit as the merch-line hashtag',
    ],
    caption: 'This board is the comedic-relief valve the heavy prophecy content needs — schedule bestoments BETWEEN doctrine drops.',
    slot: 'Sprinkled weekly from July Week 1 — comedy cadence, one bestoment per week',
  },
  {
    file: '/pics/IMG_1373.jpeg',
    title: 'Entertainment · Authority · Education (Bestoment Tour 2026)',
    family: 'crayon-deck',
    whatItIs: 'The three-pillar content thesis in crayon — Entertainment, Authority, Education — ringed by bits: Body Party, The Shaman, "The MAD Scientist — Bill Nye on ACID", "Spency Will Do It", "Cracking the Whip", "Slinging Blessings", "Put them on the hot trail", "A little bit of Pee-Wee\'s Playhouse".',
    plays: [
      'This IS the channel\'s three-pillar strategy, self-documented — post it as the manifesto: "I drew my content strategy in crayon. It\'s better than your agency\'s deck."',
      '"Bill Nye on Acid" = the ready-made series name for the Mad Scientist teaching lane (5D map, pipeline, spiral dynamics boards all live here)',
      '"Spency Will Do It" = the stunt/challenge format name for future one-shot-prompt demos',
    ],
    slot: 'July Week 1 — the manifesto post that opens the Miracle Tour',
  },
  {
    file: '/pics/IMG_1377.jpeg',
    title: 'CONTAINMENT — the magic-trick board',
    family: 'crayon-deck',
    whatItIs: '"You gotta hold all that magik", "If you can go through a maze only once… how hard do you want it to be?", "What is the ideal amount of time you enjoy being confused", "Do you believe in magik?", "I\'m going to show you a magik trick — if you can say something that is possible I will make it real", "Turn kings into gods, turn queens into goddesses", "TA DA".',
    plays: [
      'The written source of the 6:03:54 magic-trick ending — show the board, then cut to the footage of him performing it on Chris: written-then-performed is the strongest possible receipts format',
      '"The ideal amount of confusion" — a genuinely novel hook line for a teaching short on learning design',
      'TA DA as the documentary\'s end-card',
    ],
    slot: 'October Week 16 — feeds the "Six Hours" documentary finale',
  },
  {
    file: '/pics/IMG_1379.jpeg',
    title: "Ashley's Precise Language card",
    family: 'crayon-deck',
    whatItIs: 'The three universal truths (1. something & somewhere, 2. moving, 3. real from your perspective) + Speak Up / Speak Clear / Speak Precise + LOST→NOT→VOID diagram. Bottom edge: "Ashley\'s Precise Language, June \'27".',
    plays: [
      'The teaching-card format: he teaches the framework to one named person and photographs the artifact — "I made this for one person" is more shareable than "here\'s my framework"',
      'Template play: blank version as a lead-magnet worksheet ("draw your own")',
      'Pairs with the 05:41:29 integrity quote for the flagship teaching short',
    ],
    slot: 'September Week 11 — DEPTH teaching pair with the 5D map',
    clearance: 'Named for Ashley — confirm she is comfortable with the artifact being public.',
  },
  {
    file: '/pics/IMG_1380.jpeg',
    title: 'This Is My Gift — the 2-player game',
    family: 'crayon-deck',
    whatItIs: '"This is my gift", "Throw the net", "B intentional", "I am going through the next phase of personal discovery — do you want to join me?", "You can say yes and still request additional rest", "Play a 2-player game", "Be careful — this is the greatest love", "Allowing Spotify to seduce me through musical selection."',
    plays: [
      'The community-invitation post: "Do you want to join me?" is the literal subscribe CTA, in crayon',
      '"Play a 2-player game" — the relationship-lane content title (pairs with the Love Story arc from the footage)',
      'Vlog entry header for the personal-discovery thread',
    ],
    slot: 'September Week 13 — relationship/depth lane',
  },
  {
    file: '/pics/IMG_1382.jpeg',
    title: 'Snapshots — Adam naming the animals',
    family: 'crayon-deck',
    whatItIs: '"As Adam named the animals, as the magician, he assigned meaning to them… continue assigning meaning to everything", "I\'m doing what everyone else is doing with WAY more intention", "I turn my thoughts into things", "Not everything needs your everything — get some rest", "These thoughts were meant to be interrupted", plus a big orange MEOW.',
    plays: [
      '"I turn my thoughts into things" over the crayon boards themselves — the self-proving post',
      '"Not everything needs your everything" — the rest-doctrine short (anti-hustle pair to Restraint Is the New Attainment)',
      'The MEOW ties to Meow Meow lore — community easter egg',
    ],
    slot: 'August Week 9 — doctrine posts between receipt drops',
  },
  {
    file: '/pics/IMG_1383.jpeg',
    title: 'PL Training — the wizard to-do list',
    family: 'crayon-deck',
    whatItIs: 'Mind-map: PL training → organized, "just think of the now", navigate ADHD, "execute on multiple thoughts/projects with agility & clarity" + checklist (Gary phone, Claude on my phone, ChatGPT trans, get coach secured, UGC & sponsorship, organize my computer) + a wizard stick-figure self-portrait + "RIGHT NOW I CAN THINK CLEARLY".',
    plays: [
      'The ADHD-founder post: precise language as executive-function tech — a huge underserved audience seam',
      'The wizard stick figure = sticker/emoji merch; the community\'s reaction-image',
      '"Right now I can think clearly" — before/after format with the Monster/void teaching',
    ],
    slot: 'September Week 12 — the ADHD/clarity angle',
  },
  {
    file: '/pics/IMG_1384.jpeg',
    title: 'AMPLIFICO CIVILIZATION — Levels I–III',
    family: 'crayon-deck',
    whatItIs: 'The scaling model: Level I Community (100 people) → Level II Neighborhood (1,000) → Level III Tribe network-of-networks, plus a hand-drawn connected globe. Titled AMPLIFICO CIVILIZATION.',
    plays: [
      'The vision post for October: what the software play actually builds toward — civilization architecture',
      'Stop-motion: nodes multiply frame-by-frame from one dot to the globe',
      'Investor/partner one-pager art for Amplifico',
    ],
    slot: 'October Week 15 — HARVEST vision content',
  },
  {
    file: '/pics/IMG_1376.jpeg',
    title: 'AMPLIFICO — the hype board',
    family: 'crayon-deck',
    whatItIs: '"This shit hits", "Pura Vida", "Kids Express", "Featuring Bestowlapoluza \'27", "Technology Wonderland", "Feed me nom nom nom", "Bestow with caution", "BUILD", "BOOM".',
    plays: [
      'Brand-voice board for Amplifico launch assets — "Technology Wonderland" is a legitimate campaign name',
      '"Bestowlapoluza \'27" seeds next year\'s event before this year\'s tour ends — plant it as a running gag now',
    ],
    slot: 'October Week 17 — seeds the 2027 arc as this calendar closes',
  },
  {
    file: '/pics/IMG_1385.jpeg',
    title: 'Oracle Wireframe (the product map)',
    family: 'crayon-deck',
    whatItIs: 'Hand-drawn module boxes for the Oracle product: Goals (1/5/10 year), Oracle Identity, Projects, Self-Reflection, Book/Recall, LHO, Water/Tech stack, Security — the app\'s IA in crayon (shot upside-down; rotate in edit).',
    plays: [
      'Before/after receipt: the crayon wireframe next to the shipped Oracle screens — "from crayon to code in N days"',
      'Process-doc post for the $5K Oracle offer',
    ],
    slot: 'September Week 12 — Oracle month proof pair',
  },
  {
    file: '/pics/IMG_1394.jpeg',
    title: 'SPENCER BURNETT — STREAM (own your feed)',
    family: 'crayon-deck',
    whatItIs: 'Wireframe for his own content stream: publish pipeline (write thoughts → run through Grok → create post → send link in Telegram → review → approve → PUBLISH) fanning out to platform icons, tagged posts (Future/Growth/Adventure, Inspired/Business, Travel/Tech), and a hand sketch labeled DOOM SCROLLING.',
    plays: [
      'The "own your feed" manifesto: platforms get excerpts, spencerburnett.com gets the stream — this drawing IS the vlog product spec',
      'Post: the DOOM SCROLLING hand vs. the owned stream — the split format again, applied to attention',
      'Build receipt when the stream ships on spencerburnett.com',
    ],
    slot: 'August Week 7 — pairs with the vlog launch',
  },
  {
    file: '/pics/IMG_1399.jpeg',
    title: 'SPENCERBURNETT.COM — Websites · Vault · Mission Control',
    family: 'crayon-deck',
    whatItIs: 'The personal-site IA in purple crayon: three panels — WEBSITES, VAULT, MISSION CONTROL — plus a spider-web sketch.',
    plays: [
      'Before/after with the live left-rail site — the crayon-to-code receipt for his OWN brand',
      '"Mission Control" naming carried into the site build — the drawing names the product',
    ],
    slot: 'July Week 3 — site-launch receipt post',
  },
  {
    file: '/pics/IMG_1396.jpeg',
    title: 'Spiral Dynamics ladder',
    family: 'crayon-deck',
    whatItIs: 'Pencil study of Clare Graves\' Spiral Dynamics: Tier 1 (Beige survival → Purple tribe/myth → Red power god → Blue structure → Orange striving → Green egalitarian), Tier 2 (Yellow integral, Turquoise), Tier 3 (Coral). "Monumental leap in understanding."',
    plays: [
      '"Bill Nye on Acid" episode: Spiral Dynamics explained through his own Red→Turquoise business arc',
      'Frames the 2029 Split content in an established model — authority-by-citation for the skeptical audience',
    ],
    slot: 'October Week 14 — intellectual scaffolding for The Split',
  },
  {
    file: '/pics/IMG_1397.jpeg',
    title: 'DNS + Tailscale — teaching the stack',
    family: 'crayon-deck',
    whatItIs: 'Networking fundamentals drawn: LAN, router, internet cloud, DNS ("google.com → 120.7.8.4"), Tailscale VPN tunneling, Netlify, GitHub, Supabase, brain/short/long memory legend.',
    plays: [
      'The "I learned this at 40-something and so can you" teaching short — demystifying the stack for owner-operators',
      'Pairs with the ownership doctrine: "you can\'t own what you can\'t name" — naming the pipes IS sovereignty',
    ],
    slot: 'August Week 8 — technical-literacy lane',
  },
  {
    file: '/pics/IMG_1391.jpeg',
    title: 'The Starielle org sketch (April)',
    family: 'crayon-deck',
    whatItIs: 'Faint red-crayon org/timeline map: April 24–26, Starielle 75K, CEO/COO/CFO boxes, scope, sales, ops, "INS 26,000", "7th level", Feb dates — an April-era business map.',
    plays: [
      'Archive layer for montage — the "old maps" that flash by in the documentary\'s time-passing sequence',
      'Too faint for standalone posts; its job is texture',
    ],
    slot: 'October Week 16 — documentary b-roll only',
  },
  {
    file: '/pics/IMG_1398.jpeg',
    title: 'The Zigzags — pure pattern',
    family: 'crayon-deck',
    whatItIs: 'Six crayon chevrons (purple, blue, red, pink, green, orange) — an abstract pattern sheet, no words.',
    plays: [
      'The transition asset: THE stop-motion in-between frame separating deck boards in the trailer',
      'Brand texture: section dividers on the site, story backgrounds, merch lining print',
      'Proof the deck breathes — not every board needs to mean something; this one just moves',
    ],
    slot: 'Everywhere — the connective tissue of every deck edit',
  },
  {
    file: '/pics/IMG_1389.jpeg',
    title: 'Expectation Management (example)',
    family: 'crayon-deck',
    whatItIs: 'A ME/YOU relationship-contract worksheet — "what do I require / what am I willing to give" — with explicitly adult line items, labeled "(example)".',
    plays: [
      'Vlog-only if ever: the radical-transparency relationship-tools bit — the FORMAT (requirements/offers grid) is publishable as a blank template even if this filled example never is',
      'The blank version = "Expectation Management worksheet" lead magnet for the relationship lane',
    ],
    slot: 'Held — format ships in September, this artifact stays private',
    clearance: 'Explicit content + involves a partner. Spencer-only call; default is DO NOT PUBLISH the filled version.',
  },
  // ————— BRAND ASSETS —————
  {
    file: '/pics/IMG_1227.jpeg',
    title: 'The SB hat — merch exists',
    family: 'brand',
    whatItIs: 'Selfie in the cream trucker hat with the tone-on-tone embroidered SB hexagon monogram, head bowed so the logo is the subject.',
    plays: [
      'The merch-drop teaser: this exact shot, caption "the uniform" — no link, let comments ask',
      'Profile-grade portrait for LinkedIn/YouTube channel art (the logo reads at avatar size)',
      'The hat is the physical CTA: wear it in every talking-head shoot from Week 1 so the drop is pre-sold',
    ],
    slot: 'July Week 2 — merch teaser; drop lands October Week 15',
  },
  {
    file: '/pics/IMG_1337.jpeg',
    title: 'The HQ doorway — SB doormat',
    family: 'brand',
    whatItIs: 'Cedar-clad entry porch, glass door, and a black SB-monogram doormat next to a "hello" mat. The compound has a branded threshold.',
    plays: [
      '"The office" establishing shot for every vlog episode — the door IS the show\'s title card',
      'Post: "The machine that builds machines has a front door." — HQ lore builds the pilgrimage instinct',
      'Stop-motion: the door opens a little more each frame across the trailer',
    ],
    slot: 'August Week 5 — HQ lore drop with the vlog launch',
  },
  {
    file: '/pics/IMG_1338.jpeg',
    title: 'The window decal',
    family: 'brand',
    whatItIs: 'Die-cut SB hexagon sticker on the window glass, garden bokeh behind — the logo as physical signage.',
    plays: [
      'Sticker-drop asset: "the logo now exists in the physical world" — stickers are the $0-CAC merch gateway',
      'Watermark source: this exact photographed logo (not a vector) as the video watermark — texture over polish',
    ],
    slot: 'July Week 2 — with the hat teaser',
  },
  // ————— THE SET —————
  {
    file: '/pics/IMG_1241.jpeg',
    title: 'The Cockpit — wall of screens + notes',
    family: 'set',
    whatItIs: 'The battle station: five-plus curved monitors in an arc, Spotify + timelines up, every bezel lined with chalk sticky notes ("WAKE UP READY TO…", "JOB NOT FINISHED"), the SB hat and AirPods Max staged on the desk.',
    plays: [
      'THE "machine that builds machines" hero image — this is what a one-man software company looks like',
      'Zoom-quest post: "every note on this desk is a rule I live by — zoom in" (engagement bait that is actually true)',
      'Set-tour vlog episode opener; the sticky-note wall connects the physical set to the Oracle Deck series',
    ],
    caption: 'LinkedIn: "People ask what my team looks like. This is the whole office." + image. CTA: Do you own yours?',
    slot: 'July Week 1 — launch-week hero post',
    clearance: 'Some desk notes are explicit — crop or approve as-is deliberately.',
  },
  {
    file: '/pics/IMG_1361.jpeg',
    title: 'Studio buildout — BTS',
    family: 'set',
    whatItIs: 'The loft mid-transformation: softbox rigged, tube lights, camera on tripod, cat tower, "You mess with the meow meow you get the peow peow" poster on the wall.',
    plays: [
      'The May 12 "Studio Set Design" call made visible — before/after with the finished red-room shots',
      'Vlog: "we built a studio in a living room" — the production-value origin story',
      'The peow-peow poster is a community in-joke waiting to be discovered',
    ],
    slot: 'August Week 5 — vlog episode 2 (building the machine\'s stage)',
  },
  {
    file: '/pics/IMG_1370.jpeg',
    title: 'The Red Room at night',
    family: 'set',
    whatItIs: 'The loft fully red-lit: wall of screens glowing, TV playing, Meow Meow in the foreground — the set as a mood, not a workspace.',
    plays: [
      'The "night mode" visual signature — red = receiving/creating hours in the brand grammar (pairs with the 6pm–1:30am shoot lore)',
      'Vlog header for late-night entries; YouTube end-screen background',
      'Story wallpaper drop for the community',
    ],
    slot: 'September Week 10 — night-mode lore with the Downloads content',
  },
  {
    file: '/pics/IMG_1348.jpeg',
    title: 'Red room, snack tray',
    family: 'set',
    whatItIs: 'Red-lit loft with a staged snack tray: cashews, chocolate quinoa crisps, black tea — recovery mode after a build sprint.',
    plays: [
      '"Sips and nibbles" — the 6:02:05 food-philosophy clip has its still-life b-roll',
      'The recharge-doctrine post: "any time not coding is recharge" made visible',
    ],
    slot: 'September Week 13 — pairs with the food-philosophy short',
  },
  {
    file: '/pics/IMG_1356.jpeg',
    title: 'The guitar corner',
    family: 'set',
    whatItIs: 'Acoustic guitar on a stand by the plant table — hairpin-leg wood, pothos, candles: the soft corner of the machine\'s house.',
    plays: [
      'Humanity b-roll between doctrine segments; the vlog\'s "morning" establishing shot',
      'Future content flag: if he plays, a 15-second guitar interlude is a pattern-break short',
    ],
    slot: 'B-roll library — no dedicated slot',
  },
  // ————— LORE —————
  {
    file: '/pics/IMG_1248.jpg',
    title: 'Meow Meow on the Snoopy blanket',
    family: 'lore',
    whatItIs: 'The cat, fully curled on a Snoopy fleece — maximum softness from the meowmeow.com QR-collar cat.',
    plays: [
      'The mascot lane: Meow Meow already has a website; the cat is the brand\'s soft underbelly and the algorithm loves it',
      '"The only team member who doesn\'t use precise language" — recurring caption format',
      'MEOW on the Snapshots board + the peow-peow poster + this photo = a three-node lore thread the community can connect',
    ],
    slot: 'Monthly — one Meow Meow drop per month, minimum',
  },
  {
    file: '/pics/IMG_1270.jpeg',
    title: 'The Pop Mart sheep in the car',
    family: 'lore',
    whatItIs: 'A fluffy Pop Mart sheep figure buckled into the passenger seat, sunlit.',
    plays: [
      'Travel-companion lore: the sheep appears wherever business happens — a low-effort recurring visual gag',
      'Story-only content; the mascot bench deepens',
    ],
    slot: 'Story filler — as it happens',
  },
  {
    file: '/pics/mov_1.jpg',
    title: 'The handstand spot (video, 9.9s)',
    family: 'motion',
    whatItIs: 'Vertical clip: Spencer (ankle wrapped) spotting a handstand in the middle of the loft — AcroYoga practice between the monitors and the TV.',
    plays: [
      'The body-practice receipt: "the machine has a body" — trains the audience that this brand includes the physical',
      'Pairs with the AcroYoga chapter of the business (Jason Nemer story) when that content ships',
      'Direct IG/TikTok reel with a doctrine voiceover ("balance is a practice, not a state")',
    ],
    slot: 'September Week 13 — body-practice lane; video file: /pics/acro.mov',
  },
]

export const monthlyImageMap = [
  { month: 'July — LAUNCH', items: 'Cockpit hero (1241), EAE manifesto board (1373), Pipeline offer diagram (1386), Biggest Secret card (1390), site-wireframe receipt (1399), hat + decal merch teasers (1227, 1338), Gary funnel (1387, after it ships), first Bestoment' },
  { month: 'August — AUTHORITY', items: 'Engine v1→v2 evolution pair (1388→1395), STREAM manifesto (1394), DNS/stack teaching (1397), HQ doorway lore (1337), studio-build BTS (1361), Snapshots doctrine (1382)' },
  { month: 'September — DEPTH', items: 'THE NAME MAP (1374), Guides/Board of Directors (1393), 5D map (1378), Precise Language card (1379), PL/ADHD map (1383), Oracle wireframe receipt (1385), 2-player game (1380), red room (1370), snack tray (1348), handstand clip (acro.mov)' },
  { month: 'October — HARVEST', items: 'THE SPLIT (1392/1400) as pillar key art, childhood pull-back (1401) closes the documentary, Spiral Dynamics scaffolding (1396), Amplifico Civilization (1384) + hype board (1376), Containment/TA DA (1377), merch drop lands (hat/stickers), Bestowlapoluza \'27 seed' },
]
