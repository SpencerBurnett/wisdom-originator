// The Personal Brand Strategy — synthesized from the 6/22 post-shoot
// conversation with Chris Douglas ("Content Strategy and Bestowment Branding",
// 1:02–4:23am, read end-to-end), the 6/17 Wisdom Man brainstorm, the crayon
// name-map board, and Spencer's own articulation (7/6). Timestamps reference
// the 6/22 recording unless noted.

export const thesis = {
  headline: 'Teaching magic. Literally.',
  body: 'The brand teaches one thing: how to turn words into real, useful things — and the technology finally exists to make that literal. Speak precisely to the machine and software appears. Speak precisely to your life and the future you described shows up on schedule. That is magic by any honest definition, and it has a mystical side and a technical side at once — because building software for companies and building identity for founders are the same act: precise language, made real. The personal brand carries the magic. The GigaOracle carries the proof.',
  quotes: [
    { q: 'The reason I can tell the future is because I can create it.', who: 'Spencer', t: '16:09' },
    { q: 'Spirituality and technology is the same thing to me. It comes from the same spout.', who: 'Chris', t: '48:10' },
    { q: "I've got the biggest secret that everybody knows but nobody's talking about. I think it's precise language.", who: 'Spencer', t: '2:52:58' },
  ],
}

export const mission = {
  title: 'The deeper reason',
  body: 'Spency’s 2026 Miracle Tour is the new identity — Spencer M. Burnett, the shift — and it is also the public record of what the work is for: ushering the world into the Golden Age, one owner at a time, through custom software. The promise to a founder is not "software." The promise is what the software makes them: sovereign over their data, fluent with the machine, watching their words become working systems. This is what I do for companies — and it makes you a superhero, all while having custom software.',
  quote: { q: 'Amplifico is a model of civilization — a trellis of how to build your own civilization... and the mission is to give everyone the choice.', who: 'Spencer', t: '36:19' },
}

export interface Track {
  name: string
  register: string
  audience: string
  carries: string[]
  platforms: string
  tone: string
}

export const tracks: Track[] = [
  {
    name: 'Track one — The Miracle Tour (the personal brand)',
    register: 'Magic. Identity frames, bestowment, prophecy, the crayon boards, the lair.',
    audience: 'Founders, creators, seekers — anyone who suspects their words are creating their life and wants to do it on purpose.',
    carries: [
      'The identity-frame characters and their content lanes',
      'Precise Language / conscious creation teaching (the codes)',
      'The bestowment universe — the comedy that carries the doctrine',
      'The 2029 / Golden Age arc, disclaimer-armored',
      'The Wisdom Man ↔ Golem morality play: give the wisdom or become the creature',
    ],
    platforms: 'YouTube (Chris owns), the vlog, Instagram — where performance is welcome',
    tone: 'Mystical, playful, polarizing on purpose. "The most polarizing is the most authentic."',
  },
  {
    name: 'Track two — The GigaOracle (the machine)',
    register: 'Technical. Receipts, case studies, architecture maps, dollar figures. Less about magic and shit — deliberately.',
    audience: '$5M–$100M service-company owners: HVAC, plumbing, electrical, installations. The Wes and Kevin profile.',
    carries: [
      'The Doorway sales page and everything that feeds it',
      'Case studies: $60K fighter-jet builds, 30-day ServiceTitan replacements',
      'The ownership doctrine as business math: rent vs. own',
      'Demo footage, before/after economics, the daily improvement loop',
    ],
    platforms: 'LinkedIn (James owns), the Doorway, the sales pipeline (Josh)',
    tone: 'Grounded, verifiable, profanity-optional. The wizard hat comes off; the receipts come out.',
  },
]

export const bridge =
  'How the tracks interlock: the Miracle Tour creates belief — people watch words become things and think "if he can do that, what could I do?" ("They see themselves in you, whoever it is.") The GigaOracle converts belief into contracts. The bridge between them is the superhero promise: the personal brand demonstrates the magic on Spencer; the engagement performs it on YOU. A founder who buys custom software is buying the same transformation the content dramatizes — and "I’m more powerful if I empowered you to build it yourself" is the line where both tracks say the same sentence.'

export const archetypeOS = {
  why: 'When God had Adam and Eve in the garden, the first thing they did was name the animals. They used language to give significance to their surroundings. And that’s all I’m doing — I have these archetypes that give significance to a version of myself that I can be really precise with once I identify with it. And it’s useful in a particular way. That’s what the whole thing with shape-shifting is.',
  whyAttribution: 'Spencer, 1:03:03 — the thesis statement of the entire frame system',
  rules: [
    'Frames are "the hot sauce we put on the content" — the substance is the teaching; the frame is the flavor and the costume (1:02:35)',
    'Never force the roster. "Let it blossom" — record a persona when it naturally shows up, not on a schedule (1:02:35)',
    'Release like album drops: "You never know when it’s coming out from the best artist because it just fucking spews" — Chris (1:02:55)',
    'Costuming stays subtle — "you have to know Spencer to know what character he’s in" (2:19:14). Insiders decode it; that IS the community game.',
    'The story arc is inevitable — capture it all and the wavelength reveals itself; five-persona segmentation was tried and rejected as confusing (Chris, 1:03:37)',
  ],
}

export interface Frame {
  name: string
  character: string
  essence: string
  lane: string
  cue: string
}

export const frames: Frame[] = [
  {
    name: 'Spencer M. Burnett',
    character: 'Merlin — the middle name, revealed',
    essence: 'The newest identity and the container for all the others. "I have my Spencer B phase, my Trent Steele phase... this is Spencer M. Burnett — my newest identity. It’s my shift." The sovereign wizard playing the God-and-Goddess game.',
    lane: 'The through-line: prophecy, the 2029 arc, the Miracle Tour itself. The name on the business card and the documentary.',
    cue: 'White knit + mesh shawl. The download pose. The full-name signature.',
  },
  {
    name: 'The Mad Scientist',
    character: '"Bill Nye on Acid" — Jimmy Neutron × Bill Nye × Bob Ross (Chris’s mashup: an unclaimed archetype space)',
    essence: '"The quote-unquote mania version of me — and it’s inviting you into that." The lab-coat teacher who never has to leave the room; one part Steve-Will-Do-It slinging blessings, one part science guy.',
    lane: 'The teaching lane: one-shot-prompt demos, the pipeline diagram, DNS in crayon, spiral dynamics. Entertainment that smuggles education.',
    cue: 'White shirt, the lab, the whiteboard energy, props mid-explosion.',
  },
  {
    name: 'The Wisdom Originator',
    character: 'Wisdom Man — the ancient-wisdom alien (named by ChatGPT after Spencer "poured my heart out")',
    essence: '"No one knows anything about the originator of wisdom" — the deep-teaching elder who gives it all away. His shadow form is the Golem: Wisdom Man hoarding the precious wisdom, a thousand years in a mountain cave, protecting what he lusts over (6/17 brainstorm). The morality play of the whole brand: bestow it or become the creature.',
    lane: 'The Oracle Deck, long-form doctrine, the book. The Golem appears whenever the content warns against withholding.',
    cue: 'The sticky notes held to camera. Eyes closed. "There are many layers to this wisdom originator."',
  },
  {
    name: 'The Bestower',
    character: 'Captain Bestone — "bestowment is a superhero" (Chris’s coinage)',
    essence: 'Giving as the highest frequency: "Bestow: to give upon, to grace, graciously give unto another." The comedy engine — Master Bestow Mavader, the ten bestowments, "may the bestowment be with you — and also with you" — that carries the sincerest idea in the brand inside a joke.',
    lane: 'The humor lane: bestowment shorts, street bestowments, pay-your-friends ripple content, merch ("Bestow with the best"). One bestoment per week, forever.',
    cue: 'The Bestoment Board. The bestow stick. Wishes granted at double.',
  },
  {
    name: 'Spencer, the Artist',
    character: 'Harold and the Purple Crayon · Calvin (of Calvin & Hobbes)',
    essence: '"Spencer is the artist’s version of me — sarcastic and sexual, almost like Calvin." Draws the universe into being with a crayon and signs it. "I turn my thoughts to things" is his canvas line; "if I were a famous artist, this would be absolutely valuable."',
    lane: 'The crayon boards as art objects, the stop-motion deck, art shows, prints, the Stency signature. The Image Vault is his gallery.',
    cue: 'Crayon caddy, overhead frame, dressing different at the art show — decoded only by insiders.',
  },
  {
    name: 'The Oracle',
    character: 'The channel-state — "as he oracles it up"',
    essence: 'A performable state, not a costume: reclined, eyes closed, receiving. The poster frame Frame.io picked on its own. Where the downloads content lives and where the AI product borrows its name.',
    lane: 'Downloads/prophecy clips, the fever lore, the 4:05am material. Bridges to the Oracle product on the technical track.',
    cue: 'Fingers to temples. Red room. Night audio.',
  },
  {
    name: 'The Lion',
    character: 'The Beast — "the beast that comes out of me" (kept distinct from every other frame)',
    essence: 'The intensity register: duty, discipline, protection. "Never be a bitch," "Job finished — get to work," the two-week containment sprints. The frame that makes the gentleness elsewhere credible.',
    lane: 'Discipline shorts, sprint vlogs, the standard-setting content.',
    cue: 'Direct to lens, leaned in, zero ornament.',
  },
  {
    name: 'The Host',
    character: 'Pee-wee’s Playhouse — "sincere and authentic, but weird"',
    essence: '"I want it to be like a Pee-wee’s Playhouse kind of vibe... you’re in my cave, like you’re in my mind." The lair itself is this character’s body — the conscious creation lair, paradise where you can be seen or hide.',
    lane: 'Set tours, behind-the-scenes, the fixed-rig standardized shots, Meow Meow cameos, the water wall when it arrives.',
    cue: 'The loft: gold lace, plants, screens, red light. "All I need is to control being hit by light."',
  },
  {
    name: 'Spency B · Trent Steele',
    character: 'The past phases — lore characters',
    essence: 'Named on the map, retired from active duty. They appear as flashbacks: the eras that made the current shift legible. "SPENCY’S 2026 MIRACLE TOUR" carries the affectionate diminutive forward on purpose.',
    lane: 'Documentary flashback material, origin-story episodes, the name-map explainer.',
    cue: 'The crayon name-map board — 35+ names orbiting SPENCER M. BURNETT.',
  },
]

export const chrisContributions = {
  intro: 'Spencer calls Chris "our channeler." Behind the camera for the six-hour shoot, then across the desk until 4:23am, Chris supplied the structural half of the strategy — the frameworks, the platform doctrine, and the superhero coinage. His contributions, credited:',
  items: [
    { title: 'Entertainment · Authority · Education', body: 'The three-word content framework (via Daniel Daly’s model): 20–30 seconds of sizzle, cut, hook, value. "The dopamine’s the hook. That’s the entertainment." Entertainment creates authority; authority holds education — and Spencer’s addendum locked it to the brand: "education, to be clear, is bestowment."' },
    { title: 'The LinkedIn thesis', body: '"LinkedIn’s a fucking gold mine... as soon as you put a performing person on LinkedIn, it’s game over. Nobody’s performing on it." The platform arbitrage that shapes the whole distribution plan — and why James’s lane matters.' },
    { title: 'The authenticity doctrine', body: '"You can’t perform that. That has to be captured... that’s the content people want to ingest because it can’t be created. That is existing." Plus the polarity rule: "The most polarizing is the most authentic." Capture over production, always.' },
    { title: 'The nostalgia strategy', body: '"Use the Dehancer and the crayons together because you’re pulling two archetypes of nostalgia... if the world is going through shit right now, create through the mediums of nostalgia to pull them out of the present." The film grade and the crayon boards are one system, not two aesthetics.' },
    { title: 'The gentleness principle', body: '"Attention is the truest currency... how can you give dense dopamine in quick chunks... if you want to get the hard facts across, soften it to the softest thing you can think of." Crayons carry doctrine because whose inner child doesn’t surface at a box of crayons?' },
    { title: 'The thumbnail loop', body: '"Take a photo of holding up the shot. That’s the thumbnail for YouTube... thumbnail to video, video to thumbnail." Independently arrived at the channel’s signature mechanic — and the pull-tab reveal variant that turns every drawing into an end-card.' },
    { title: 'The sticky-note format', body: '"The sticky-note content’s fire — you pull it off the wall, people know there’s more... take one off the wall every day — today’s message is this." The Oracle Deck series, specified in one breath.' },
    { title: 'Captain Bestone', body: '"Bestowment is a superhero." The coinage that connects the comedy lane to the actual promise of the technical track — the engagement makes the founder the superhero.' },
    { title: 'The five-archetype story arc (proposed, then killed)', body: 'Pitched segmenting content by five personas on a story arc, then self-corrected: "I think that’s out — creating confusion with it." The surviving rule — let frames blossom naturally, release like album drops — is stronger because the forced version was tested and rejected in the same conversation.' },
    { title: 'The flow-state recovery warning', body: '"Nobody talks about recovery from flow state... if you instantly hit flow state, you instantly hit burnout — unless you replace the neurotransmitters." The operator-health clause the calendar’s recharge rules inherit.' },
    { title: 'Channel ownership', body: 'Chris runs YouTube. James runs LinkedIn. Separate but collaborative deals — both told the same thing: "Make me an offer."' },
  ],
}

export const lexicon = {
  intro: 'The ritual language — a comedy liturgy that doubles as brand vocabulary. Born as the "bestowment tour" at 2am; grew up into Spency’s 2026 Miracle Tour on the boards.',
  terms: [
    '"You’ve been bestowed." — the viral verb, the street-interview format, the community greeting',
    '"May the bestowment be with you." — "And also with you."',
    '"Thou shalt not be unbestowed." — the first commandment',
    '"Bestow with caution." — the tone guardrail; institutionalization explicitly rejected (no bestow church)',
    'The Ten Bestowments — capped at ten on purpose: "I don’t want it to balloon"',
    '"Bestow and beyond" · "Be the best bestower you can be" · the science of bestowment',
    '"The genie left the bottle." — Chris, closing the night. "Yeah, the monkey did his dance."',
  ],
}

export const brandQuotes = [
  { q: 'Prayer is simply prompting God. And prompting is prayer to the AI.', who: 'Spencer', t: 'S2 · 1:56:52' },
  { q: 'You are treated the way you request to be treated — through your actions.', who: 'Spencer', t: 'S2 · 0:01:45' },
  { q: 'The way to get back to the truth is precise language.', who: 'Spencer', t: 'S2 · 0:24:50' },
  { q: 'Content should really just be organization of documentation.', who: 'Spencer', t: '03:08' },
  { q: 'I created a year worth of content — or we created a year worth of content — in a day. And an entire brand.', who: 'Spencer', t: '42:20' },
  { q: 'If you’re a magician with your word, especially when singularity hits, you want to be as precise as possible.', who: 'Chris', t: '51:40' },
  { q: 'Authentic expression is the currency of the future.', who: 'Chris', t: '20:45' },
  { q: 'Did I just create paradise? A conscious creative paradise where you can be seen or hide... It’s a conscious creation lair.', who: 'Spencer', t: '17:20' },
  { q: 'Now that I’ve got my brand figured out, I don’t need any more ideas. I need execution.', who: 'Spencer', t: '41:11' },
  { q: 'You create the right environment, you get so activated. And you just follow the fun. We found a word — bestowment.', who: 'Spencer', t: '1:49:57' },
  { q: 'I’ve been doing this since second grade. Just recreating my childhood over and over and over again. That’s all I know.', who: 'Spencer', t: '1:49:21' },
]

export const cascades = [
  { to: 'The Doorway', how: 'Track two’s landing page — the technical register, receipts forward, wizard hat off. The superhero promise is the same; the costume changes.' },
  { to: 'Clip Library & Calendar', how: 'Every clip and calendar slot inherits a frame: aviators = prophecy, lab shirt = teaching, board-to-camera = Wisdom Originator, bestowments = comedy cadence.' },
  { to: 'Image Vault', how: 'The crayon deck is Spencer-the-Artist’s gallery; the name-map board is the archetype OS made visible; the thumbnail loop consumes the pull-tab reveals.' },
  { to: 'YouTube / LinkedIn / Vlog', how: 'YouTube performs the frames (Chris). LinkedIn converts in the technical register (James). The vlog witnesses the man underneath all of them.' },
]
