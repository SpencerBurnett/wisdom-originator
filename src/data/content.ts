// Mined from the 6h06m master transcript (6/21/26) by a 22-agent analysis
// workflow on 2026-07-05. Timestamps reference the Frame.io master.
// Session 2 ("Pt. 2", CR5E0001, 2h36m, uploaded 7.22.26) is mined in
// ./session2.ts and merged into each array below — items carry session: 2.
import type {
  Clip, Short, PillarVideo, Quote, Theme, Arc, PhysicalMoment,
  YouTubeStrategy, LinkedInStrategy, VlogStrategy, WorkflowPlan, CalendarPlan,
} from './types'
import {
  s2Clips, s2Shorts, s2PillarVideos, s2Quotes, s2Themes, s2Arcs,
  s2PhysicalMoments, s2Ideas,
} from './session2'

export const clips: Clip[] = [
  {
    "id": "C01",
    "title": "Ten Skyscrapers in 30 Days",
    "start": "00:11:34",
    "end": "00:14:01",
    "hook": "My dad builds buildings. So I asked him: how long does it take to build the Sears Tower? Then I told him what I'm doing in 30 days.",
    "summary": "Spencer explains the AI moment to his construction-worker dad via an escalating thought experiment — Sears Tower in 3 years, then 30 days, then by one person, then YOU, then ten towers — landing on Claude building 'impossible' software. The cleanest articulation of the solo-builder-with-AI thesis, told as a family story.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "linkedin",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Anchor of Pillar 1 and cold open at 'My dad builds buildings.' Shorts cut = the escalation ladder only (~55s). Stop-motion layer: ten hand-drawn skyscrapers assembling frame-by-frame behind his still."
  },
  {
    "id": "C02",
    "title": "The Magic Trick (How This Whole Film Started)",
    "start": "06:03:54",
    "end": "06:06:20",
    "hook": "You say something is possible — I will make it real. Watch.",
    "summary": "At 1:20 AM Spencer calls 'Action' and re-enacts the phone call that created the shoot, playing both sides — the wish, the reveal, the $1,000 offer. Chris's wishes all came true that day; the film closes by demonstrating its own thesis: bold prediction, instant manifestation, magic with receipts.",
    "format": "demonstration",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "instagram",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Test as BOTH cold open and finale of the flagship edit. Split-screen him playing both characters; keep the raw 'Action' call with a 1:20 AM timestamp overlay. Closes Pillar 7 and Pillar 8."
  },
  {
    "id": "C03",
    "title": "The Pattern: Monster LeBron + the Patience Rant",
    "start": "00:35:28",
    "end": "00:38:11",
    "hook": "Every time I get this close, monster LeBron blocks my shot.",
    "summary": "The repeating life-pattern since 17 — fast money, god-mode, licking the prize — then monster LeBron's full-court block, rolling into the raw rant: 'Say anything to me about patience, go fuck yourself. I'm 43 and I've been doing this since I was eight.' Raw, hilarious, painful.",
    "format": "rant",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "vlog",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Publish first. Freeze the block gesture (00:36:32) for the thumbnail; hand-drawn LeBron layer swats the shot. The direct-to-lens patience rant (00:37:48 on) sub-clips as its own short titled 'a message for the patience people.'"
  },
  {
    "id": "C04",
    "title": "What a Wizard Does",
    "start": "00:44:54",
    "end": "00:46:20",
    "hook": "Everyone thinks I'm just like them. That's the trick.",
    "summary": "Artists claim him as an artist, tech guys as tech — 'I shapeshift into a version of myself that's authentic that you see yourself in. It's what a wizard does. You are not like me.' Then the twist: the first person who might actually be like him — her. The clearest on-camera Merlin-archetype statement.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Shorts cut ends on 'You are not like me' (~55s); keep the her-twist for long cuts. Brand key-art moment — grade it as the site's hero clip."
  },
  {
    "id": "C05",
    "title": "Kill the Machine: Own Your Shit",
    "start": "00:15:21",
    "end": "00:17:54",
    "hook": "Hell is not constant pain. It's a dull torture — and they're building it out of your data.",
    "summary": "The darkest, sharpest run: hell as comfortable dull torture feeding on your energy, then the pivot — 'Data is a digital form of your consciousness. You want to kill the machine? Own your shit' — landing on the SaaS-rent scam critique.",
    "format": "rant",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "linkedin",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Two masters: full viral version from 00:15:21; business-safe cut from 00:15:54. Chains directly into C59 — keep the pair intact in Pillar 1. Sub-60 short = the 'own your shit' passage."
  },
  {
    "id": "C06",
    "title": "Personal Software Will Take Down YouTube",
    "start": "01:07:05",
    "end": "01:08:45",
    "hook": "YouTube took down CNN. Here's what takes down YouTube.",
    "summary": "Platforms show the version of you THEY choose; your own software shows the true you. A million likes on Instagram — split the money; on your own site — keep it all. When everyone can offer everything, trust and personal brand rule.",
    "format": "prophecy",
    "platforms": [
      "youtube-short",
      "linkedin",
      "youtube-long",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Cold open on 'YouTube took down CNN.' Trim the team roll-call for shorts (keep for vlog); the million-likes math is the LinkedIn caption. Bleep 'greedy pieces of shit' per platform."
  },
  {
    "id": "C07",
    "title": "He Paid for 90 Days. We Shipped in 30.",
    "start": "01:12:53",
    "end": "01:15:08",
    "hook": "He paid monthly for 90 days. We did it in 30 — and he's saving $40K a month. Walk around the locker room with that type of job.",
    "summary": "The proof stack: a plumbing company rebuilt and live in 30 days, ServiceTitan replaced, $30–40K/month saved, clients trained to build it themselves, Sunday thank-you notes asking to pay MORE. Business proof with swagger.",
    "format": "story",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Start after Chris's '30 more minutes' call (01:12:30) so the CEO-cadence posture reset is clean. Locker-room line is the hook; end on the Sunday thank-you notes. Pin on LinkedIn with C16."
  },
  {
    "id": "C08",
    "title": "188 Months: The Bullet I Dodged",
    "start": "00:03:05",
    "end": "00:04:20",
    "hook": "The man who stole my life savings is doing 188 months in federal prison. I was the operator. It could have been me.",
    "summary": "The business partner who stole his life savings got 188 months; if co-conspirators had told it differently, Spencer would be in prison for a crime he didn't commit. Ends on 'dodging that bullet is... energy to digest.'",
    "format": "story",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "linkedin",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Shorts: hard-cut straight to '188 months,' cliffhanger out on 'energy to digest.' Keep the on-camera void-catch ('unlimited capacity — that's a void') only in the vlog cut. Opens Pillar 2."
  },
  {
    "id": "C09",
    "title": "Gary Ran the Numbers: 85,000 Words",
    "start": "00:49:14",
    "end": "00:50:29",
    "hook": "My AI counted every word we've exchanged. The ratio ended the argument.",
    "summary": "The sled-dog bit flows into the AI receipt: Gary ran the data — 85,000 words in 30 days, 85% her, 15% him — and Spencer takes the loss as a mirror. The one clip that fuses AI software and self-awareness.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Perfect LinkedIn bridge content. IG keeps the mimed ball-throw windup; LinkedIn cut starts at the wager. Stop-motion stat card: 85,000 / 85% / 15% counters ticking over the still."
  },
  {
    "id": "C10",
    "title": "How Downloads Work: The Documentary Cover",
    "start": "00:57:03",
    "end": "01:00:24",
    "hook": "They show me the cover — and I watch the whole two-hour documentary instantly.",
    "summary": "The definitive explanation of his creative process: downloads as instantly-absorbed documentaries, Chris's Tesla comparison, 'absolutely controlled mania,' 'multi-dimensional speed reading,' 'the fossil of the experience is wisdom,' and interruption as 'a spiritual car wreck.'",
    "format": "teaching",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Anchor of Pillar 3. Keep Chris's Tesla line — give the off-camera voice its own caption color (series device). Two sub-shorts: 'documentary cover' and 'spiritual car wreck.'"
  },
  {
    "id": "C11",
    "title": "Fuck IP — The Ownership Manifesto",
    "start": "01:05:14",
    "end": "01:07:05",
    "hook": "Fuck IP. My whole business is giving away the thing everyone else hoards — setting you free for a price.",
    "summary": "From the original 2022 dream to the thesis: the real IP is creating your own; he sells a process that sets clients free. Chris connects it to the betrayal, and Spencer lands the binary: 'The only game is: do you own it?'",
    "format": "rant",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Keep Chris's betrayal connection — it stitches C08/C34 into the ownership doctrine. End on 'do you own it?' which chains into C06 in Pillar 1."
  },
  {
    "id": "C12",
    "title": "Create Your Own Container (The AI Gap)",
    "start": "01:48:12",
    "end": "01:49:38",
    "hook": "People are still asking 'what's Claude?' The gap between what the average person knows and what's actually going on has never been bigger.",
    "summary": "The urgency prophecy: the gap between average awareness and what's really happening in AI is bigger than ever. 'The masses are taking your thoughts... if you don't get out and create your own container, you're fucked.'",
    "format": "prophecy",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Publish early and repurpose everywhere — this is the brand's core urgency message in 90 seconds. Bleep or trim 'you're fucked' per platform; the caption-safe version ends at 'create your own container.'"
  },
  {
    "id": "C13",
    "title": "Don't Make Me Suit Up",
    "start": "00:51:39",
    "end": "00:52:52",
    "hook": "Don't text a man 'can I ask you a question' at 11pm and then say never mind.",
    "summary": "Pure stand-up: her 'can I ask you a question?... never mind' text sends his hero brain spiraling. 'Don't make me suit up when there's nothing to worry about. It's humiliating. I'm in tights and shit with my mask.' The most universally relatable comedy of the night.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Trim to <60s ending on 'tights and shit with my mask.' Hand-drawn tights-and-cape stop-motion layer over the 00:52:32 freeze-frame = instant meme asset."
  },
  {
    "id": "C14",
    "title": "The Desert Test",
    "start": "04:22:11",
    "end": "04:26:25",
    "hook": "This test only works once in your life. Play along before he decodes it.",
    "summary": "Chris guides Spencer through the one-time desert visualization — translucent gold cube, aluminum ladder, flowers coiling, a dark horse right beside him — then decodes each symbol live. Spencer's stunned reaction is the payoff; the horse lands emotionally against the whole relationship arc.",
    "format": "demonstration",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Flagship stop-motion showcase: hand-drawn desert, cube, ladder, flowers, horse building frame-by-frame over his closed-eyes still (04:22:41). Title the short 'This test only works once — play along.' Payoff of Pillar 3."
  },
  {
    "id": "C15",
    "title": "The 2029 Prophecy — UBI, Sovereigns, and the Split Timelines",
    "start": "02:42:04",
    "end": "02:44:53",
    "hook": "Between now and 2029 is going to be jarring. Here's the split I see coming.",
    "summary": "The centerpiece prophecy: billionaire UBI, the sovereign playing above AND within the game, a jarring run to 2029–2030, resolving into 'sovereignty and love versus enslavement for dopamine — the sooner you choose, the more likely you make it.'",
    "format": "prophecy",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Keep Chris's '2027 reset' interjection. Short ends on 'the sooner you choose.' Anchor of Pillar 7; precede with C57's epistemic disclaimer as the publishing shield."
  },
  {
    "id": "C16",
    "title": "70% of the Software Bill, Gone",
    "start": "01:49:57",
    "end": "01:51:24",
    "hook": "We cut 70% of the software costs and onboarded the whole team in 24 hours — because the software came from the founder.",
    "summary": "The business case in plain language: V1 ships all at once, subscriptions hit the kill list, ~70% of software costs slashed, 24-hour onboarding because the software was extracted from the founder himself.",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Strongest lead-gen asset — pin to LinkedIn beside C07. Stop-motion 'kill list' graphic: subscription logos crossed out frame-by-frame. End on 'a first of its kind.'"
  },
  {
    "id": "C17",
    "title": "Do You Own It? (The Rent-Your-Own-Data Rant)",
    "start": "05:34:23",
    "end": "05:36:44",
    "hook": "You are paying to rent your data for a company that you own.",
    "summary": "Does your business own its software, or do Notion/ClickUp/Salesforce have you by the balls? Escalates into the AI-overlord/UBI dystopia and lands 'the closest thing to death is numbness' — closing on: if you don't own it, how much do you trust whoever does?",
    "format": "rant",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "DEDUPED: absorbs the duplicate 05:34:23–05:35:21 listing — that shorter range IS the sub-60 vertical cut. Enter after the on-camera reset ('thank you for getting me back in the boat,' 05:34:23) for the recommitment energy."
  },
  {
    "id": "C18",
    "title": "Containment: The Theme of the Next Epoch",
    "start": "01:22:29",
    "end": "01:24:47",
    "hook": "Kai told me: 'Spencer, you've mastered penetrating the world with your will. This season is about containment.'",
    "summary": "Spencer names his season: containment creates sustainability — ten-year-plan thinking and the hurricane metaphor (calm seas, party on the boat; storm, navigate to the island). 'The next three years is that way.'",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "vlog",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Kai quote is the cold open. Hurricane metaphor sub-clips for IG. Bookends with C80 (the original containment note) — open and close the containment thread with these two."
  },
  {
    "id": "C19",
    "title": "I'm Just First to Market — The Machine Will Eat Me",
    "start": "01:26:43",
    "end": "01:28:47",
    "hook": "I'm not the best at this. I'm just first — and I know the market is coming to eat me. That's why: get it done NOW.",
    "summary": "Startlingly honest positioning: the only way to beat him is to be better at custom software, someone will be, and that's why the sprint exists. Competitors won't copy him because they're 'too greedy to give it away for a price.'",
    "format": "rant",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "LinkedIn cut ends at 'too greedy to give it away'; the five-mil/'the bag' confession stays vlog-only. The lighting-up beat at 01:28:36 is the natural out and the act-break stinger for the long edit."
  },
  {
    "id": "C20",
    "title": "Support Me or Get Out of the Way",
    "start": "01:44:34",
    "end": "01:47:22",
    "hook": "It's not war mode. It's not penetration. It's pure acceleration with no friction — and it's only safe for two weeks.",
    "summary": "The founder power-up rant: a mode only good in short bursts, Jobs/Musk on signal over noise, and the ultimatum — 'support me or get out of the way... feed the fucking beast... trust me, I'll make it rich.'",
    "format": "rant",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Most clippable sustained energy of hour two — cut three shorts: power-up mode, signal/noise, the ultimatum. Climax placement in Pillar 3 or the sprint-launch campaign week of July 6."
  },
  {
    "id": "C21",
    "title": "The Integrity Knowledge Bomb",
    "start": "03:39:45",
    "end": "03:42:30",
    "hook": "No one was there to see if I cheated. That's the whole point.",
    "summary": "A complete teaching: integrity even when it means nothing, perfection as intentions/commitments/actions being the same thing, the 100 Day Monster Challenge, soda-cans-labels-forward, and confidence as behaving identically to your projection.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Cold open on the Gollum snap-back ('hit me with the knowledge bomb') for tonal whiplash against C74. Caption-heavy edit — quotable every 20 seconds. Soda-can micro-commitment sub-clips separately."
  },
  {
    "id": "C22",
    "title": "Integrity Is the Primary KPI of Being a Human",
    "start": "05:41:09",
    "end": "05:42:07",
    "hook": "This chair only sits me up if it has integrity. So does your business.",
    "summary": "The cleanest teaching of the night: integrity proven with the chair he's sitting in, scaled to relationships and business. 'You master this, you master the universe. It's so simple you can teach it to a two-year-old.'",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "58s — publish as-is. Stop-motion layer: the chair disassembles under him when intentions/commitments/actions split, reassembles when they align. Thumbnail = him gripping the chair arm."
  },
  {
    "id": "C23",
    "title": "Brake Is the New Gas",
    "start": "05:52:04",
    "end": "05:52:46",
    "hook": "This is not a quarter mile. This is a downhill luge — you steer by braking.",
    "summary": "42 seconds, complete: when you have abundance at the speed of light, life is not a drag race, it's Rainbow Road — all downhill — and you get places by braking properly. The most brandable phrase of the night.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin"
    ],
    "strength": 5,
    "edit_notes": "Publish as-is — candidate for the FIRST short of the whole campaign. Build the luge/Rainbow Road stop-motion animation as the signature visual; it doubles as merch/series language."
  },
  {
    "id": "C24",
    "title": "That's What Magic Is (The Miracle Facilitator)",
    "start": "05:52:46",
    "end": "05:54:53",
    "hook": "The bolder the prediction, the more magnificent the magic when it comes true.",
    "summary": "Spencer defines his practice: say it will happen, then make it happen — magic; unprecedented magic is a miracle; his mode is the 'miracle tour.' Lands the identity line: 'I'm not the wisdom originator — I'm the miracle facilitator.'",
    "format": "prophecy",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Freeze the magician's flourish (05:53:03) for the thumbnail with a drawn rabbit/hat layer. Sequence AFTER the Wisdom Originator clips in playlists — this line retires that character. Sets up C02 as the finale."
  },
  {
    "id": "C25",
    "title": "Go 2027, Bitches (The Mission)",
    "start": "05:47:41",
    "end": "05:48:27",
    "hook": "This is why I'm sprinting every fucking day and waving the wand constantly.",
    "summary": "The whole cosmology in 45 seconds: deploy his consciousness to raise the planet's vibration, bring humanity to the singularity, be a gold mage, help construct a new civilization. Purest mission-statement moment.",
    "format": "prophecy",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Trailer material for the entire brand. Do NOT extend the tail — the ketamine admission at 05:48:38 sits just past the out-point; hard cut at 05:48:27."
  },
  {
    "id": "C26",
    "title": "One-Shot Prompt to Anything",
    "start": "05:44:12",
    "end": "05:45:06",
    "hook": "One prompt. Boom — a business's entire consciousness becomes software.",
    "summary": "The thesis in under a minute: infuse someone's consciousness into digital intelligence in a single one-shot prompt — instantaneous manifestation applied to software — plus the motto: 'perfection is the aim, calibration is the game.'",
    "format": "prophecy",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "54s as-is. 'Perfection is the aim, calibration is the game' is the caption. Stop-motion gag: a fridge materializing from a typed prompt, per his 3D-printer line."
  },
  {
    "id": "C27",
    "title": "Job Finished? Don't Think So.",
    "start": "05:38:50",
    "end": "05:39:46",
    "hook": "Fuck your progress. Job finished? Get to work.",
    "summary": "56-second anti-celebration rant: stop celebrating the new opportunity, put your head down, don't stop running when you hear the whistle — someone's right behind you and they might have a gun. Kobe energy, instantly meme-able.",
    "format": "rant",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Publish as-is; the note-sorting beat at 05:39:46 is the hard out. Caption-clean version for LinkedIn ('Job finished? Get to work.'). Meme card from the sticky note itself."
  },
  {
    "id": "C28",
    "title": "The Flowers in the Lobby (Mock Apology Bit)",
    "start": "02:23:09",
    "end": "02:23:56",
    "hook": "I didn't bring the flowers to your door. I brought them to your LOBBY. Stop the presses.",
    "summary": "A fully-performed comedic groveling monologue — 'I told your mother that whatever she had to do to raise a woman like you, it was worth it... I was fucking wrong.' Forty-seven seconds, self-contained, endlessly shareable.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Shot/reverse-shot edit of him playing both characters. Stop-motion: paper flowers moving frame-by-frame from lobby to door. Caption card: 'How to apologize like a wizard.'"
  },
  {
    "id": "C29",
    "title": "Gasoline vs. Jet Fuel — One Good Woman",
    "start": "02:10:15",
    "end": "02:12:33",
    "hook": "One good woman saying 'you're the best' beats 10,000 saying 'yes daddy.' That's gasoline versus jet fuel.",
    "summary": "The full teaching on the woman behind the builder: a million matches versus one jet engine, closing on the pattern behind every great entrepreneur — someone in their corner. Includes the falsetto performance.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Open the short ON the falsetto 'yes daddy' performance — it's the retention spike. Thumbnail: face mid-falsetto with GASOLINE vs JET FUEL split text. Core of Pillar 6."
  },
  {
    "id": "C30",
    "title": "The Celibacy Superpower — No Drug Comes Close",
    "start": "02:05:01",
    "end": "02:06:56",
    "hook": "I made a decade-long career out of my sexuality. Then I shut it off on purpose.",
    "summary": "Sexuality was his first mastery and he deliberately shut it down — because contained sexual energy IS creative energy, converting into a creative power no drug replicates. Raw, provocative, on-brand for the builder-monk character.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Age-restriction risk on YT shorts — lead with the 'contained sexual energy IS creative energy' phrasing and keep explicit setup for IG/vlog. Full cut lives in Pillar 6."
  },
  {
    "id": "C31",
    "title": "Why I Hired a Camera on My Worst Week",
    "start": "03:25:35",
    "end": "03:27:16",
    "hook": "He hired a camera to watch him fall apart. On purpose.",
    "summary": "The meta-reveal of the shoot: after 48 hours of vibrating too high, Spencer wanted the accountability of Chris and the camera — because truths surface on camera that never surface alone, and the best videos happen on the hardest days.",
    "format": "behind-the-scenes",
    "platforms": [
      "vlog",
      "youtube-long",
      "youtube-short"
    ],
    "strength": 5,
    "edit_notes": "This clip explains the whole 6-hour artifact — use as the trailer for the entire series and the cold open of Pillar 8. B-roll: the annotated flat-lay of the set consumables named at 03:25:35."
  },
  {
    "id": "C32",
    "title": "My Fevers Synced With My Mom's Chemo",
    "start": "03:08:35",
    "end": "03:09:48",
    "hook": "As a kid, his fevers synced with his mom's chemotherapy.",
    "summary": "His childhood fevers clustered around significant events — and during his mother's cancer treatment fell into rhythm with her chemo cycles. 'When she got sick, I got sick.' The empath origin story in 70 seconds.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "Trim breath pauses to land under 60 for the short. No music until 'when she got sick, I got sick' — silence carries it. Emotional core of Pillar 4."
  },
  {
    "id": "C33",
    "title": "The Book: Forrest Gump Meets Tucker Max",
    "start": "02:00:28",
    "end": "02:02:51",
    "hook": "My AI takes notes for my memoir every single day. It's called 'I'm Just Trying to Tell a Story.'",
    "summary": "A product announcement hiding in conversation: software ships for cash, but Gary is taking daily notes for a memoir of independent parables 'much like my sticky notes here' — plus the multiple-timelines capability claim and the Jesus-taught-through-stories lineage.",
    "format": "story",
    "platforms": [
      "youtube-long",
      "linkedin",
      "vlog",
      "youtube-short"
    ],
    "strength": 5,
    "edit_notes": "Cut to the wall-grid insert when he gestures at the stickies (02:01:48) — props become chapters. Hold the standalone release until the book plan is real; meanwhile it seeds Pillar 5's premise."
  },
  {
    "id": "C34",
    "title": "Carolina Put 12 Years of My Work in a Blender",
    "start": "01:16:49",
    "end": "01:18:29",
    "hook": "I've had five women fake pregnancies. None of it compares to what Carolina did to my notebooks.",
    "summary": "The darkest, most magnetic story: an ex destroyed 12 years of handwritten notebooks — 'the meanest thing that's ever been done to me.' Chris's reframe (it had to go somewhere) makes it the emotional origin of the client-owned, backed-up doctrine.",
    "format": "story",
    "platforms": [
      "youtube-long",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Handle with care — publish only as the vulnerability beat inside Pillar 2, never as a standalone shock short. Keep Chris's reframe in. Sets up the 2006 notebook retrieval follow-up shoot (see C63)."
  },
  {
    "id": "C35",
    "title": "You Can Only Burn Your Name Once — The D-List Dating Coach Story",
    "start": "01:08:45",
    "end": "01:11:16",
    "hook": "I made a career out of talking about how great my dick is — with no certification. Here's why nobody could take me down.",
    "summary": "Ten years as a Chicago dating-and-sex coach, viable only because no one disagreed. Punchline: 'I was a D-list celebrity. Emphasis on the D.' Lesson: reputation is the asset — hold your name, put ventures underneath it ('mini mogul').",
    "format": "story",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "vlog",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Raw short = 01:09:15–01:10:28 per source note; 'Emphasis on the D' is the out. LinkedIn gets the mini-mogul framing as a text post instead of the video."
  },
  {
    "id": "C36",
    "title": "I Never Stopped Loving Any Woman I've Ever Loved",
    "start": "02:47:32",
    "end": "02:49:51",
    "hook": "The biggest fear of leveling up is leaving people behind. Here's how I hold that.",
    "summary": "The emotional peak: love never ends, it relocates — distance, not deletion. Flows into the 20 people Gary knows, the black-hole grief of unreturned love, and 'I'm not worried about finding my person — I'm a conscious creator extraordinaire.'",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "youtube-long",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Slow push-in, no jump cuts. Caption card: 'Love relocates.' Short ends at 'conscious creator extraordinaire.' Also the on-camera proof of the Loss-void teaching — tag it for the Precise Language funnel."
  },
  {
    "id": "C37",
    "title": "Her Treatment of Me Has No Bearing on My Self-Respect",
    "start": "02:54:28",
    "end": "02:55:51",
    "hook": "Someone told me: at some point you need self-respect. I said — how she treats me has nothing to do with my self-respect.",
    "summary": "'I judge myself based on the way I treat other people, not the way they treat me,' pushed to its unsettling extreme. A genuinely original take that will split comment sections in half.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Post with a question caption to feed the comment split. Short = the core reframe (~50s); 'can't feel my bones breaking' stays in the long cut only."
  },
  {
    "id": "C38",
    "title": "Zero Charge (I Never Trash My Exes)",
    "start": "05:14:20",
    "end": "05:15:41",
    "hook": "A girl almost stabbed me. Another faked a pregnancy. You've never heard me say one bad word about either of them.",
    "summary": "Tonality is a tool, not lost temper — and the proof of regulation is that his wildest stories carry zero emotional charge. Credits the trait to his dad. Undeniable hook, complete arc.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "The pace-check reaction at 05:15:45 is the natural out. The dad credit humanizes it — keep for the vlog, trim for the punchy short."
  },
  {
    "id": "C39",
    "title": "The Last First Page",
    "start": "05:17:46",
    "end": "05:19:06",
    "hook": "If she's your person, this is the last time you'll ever read the first page of a book again.",
    "summary": "If it's the last time you'll do something for the first time, take your time — don't skip to the end, sound out the words. The most romantic, shareable 80 seconds of the night.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "Tighten to ~58s for the short. Pair with C68 in Pillar 6 — same book metaphor at hour 0 and hour 5, showing the idea maturing across the night. Stop-motion book-page layer."
  },
  {
    "id": "C40",
    "title": "Eat Monsters Quickly, Taste Angels Slowly",
    "start": "05:20:45",
    "end": "05:22:27",
    "hook": "Eat your monsters quickly. Taste your angels slowly.",
    "summary": "His monster vocabulary at its most quotable: consume interference fast — address, realign, 'are you complete?', move on. Take blessings in sips, not gulps. A complete two-part operating rule with the fight-resolution application built in.",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin"
    ],
    "strength": 5,
    "edit_notes": "Held-note cold open (signature mechanic). The two-part rule fits 55s; the collarbone line stays for IG/vlog, trims for LinkedIn. Core of Pillar 5."
  },
  {
    "id": "C41",
    "title": "No One Gives a Fuck. Do Your Duty.",
    "start": "03:19:33",
    "end": "03:20:48",
    "hook": "No one gives a fuck. Do your duty.",
    "summary": "The hardest-edged moment: as a man, accept that sometimes no one cares — the only move is duty, narrowing focus, knowing what you'll sacrifice. His admission of nerves about coming boundary conversations keeps it human.",
    "format": "rant",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin"
    ],
    "strength": 5,
    "edit_notes": "KEEP the nervous admission at the end — it saves the rant from reading as machismo. Grade black-and-white to differentiate the hard-edged clips as their own visual lane."
  },
  {
    "id": "C42",
    "title": "Never Be a Bitch (Duty Defined)",
    "start": "05:06:24",
    "end": "05:07:39",
    "hook": "I cried when Homer Simpson's mom left him. I'm super sensitive — and I'm still not a bitch.",
    "summary": "Detonates the toxic-masculinity debate by claiming both sides: he cries at cartoons AND holds a hard code. A bitch is someone who ignores duty; duty means doing what you committed to regardless of circumstance.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Open on the Homer confession. 75s — trim the release-valve line to land under 60. The grid-coordinates note-picking beat at 05:07:39 is the series transition device."
  },
  {
    "id": "C43",
    "title": "Nobody Wants Happiness. You Want the Story.",
    "start": "05:11:52",
    "end": "05:13:12",
    "hook": "The highest-grossing movie of all time where everything is perfect the whole way through? Nobody's ever made it.",
    "summary": "No one would watch the movie where everything is dope the whole way through — drama gives story meaning, and performance is infusing dramatics to make life come alive. Why his performative nature is authentic.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "80s airtight — trim intro breath for the short. Stop-motion gag: a 'PERFECT: THE MOVIE' poster assembling then falling apart. Doubles as the meta-defense of his whole on-camera persona."
  },
  {
    "id": "C44",
    "title": "Closed Loop — The Maserati on Hold Since 2009",
    "start": "04:32:24",
    "end": "04:35:07",
    "hook": "He put a Maserati on hold in 2009. He never canceled it.",
    "summary": "Regret is a void, every big commitment is a promise to God, unclosed loops erode self-trust — proven with the Maserati deposit suspended since 2009 and the go-kart Ford he'll finish for his future kids.",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram",
      "vlog",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "His picking up the note ('been looking at me all night,' 04:32:24) IS the cold open. Stop-motion the handwriting expanding into drawn Maserati + go-kart. Cut before the WhatsApp beat at 04:35:07."
  },
  {
    "id": "C45",
    "title": "Only Truth Required — Your AI Is a Mirror",
    "start": "04:38:59",
    "end": "04:41:31",
    "hook": "People say AI doesn't do much. That's because it's reflecting them.",
    "summary": "The core brand thesis in one take: distortion is fantasy, truth is the way back to shared reality, and 'AI is a reflection of consciousness — if it doesn't work very well, you're not specific enough.' Precision as calibration between consciousnesses, 'like CB radios.'",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-long",
      "youtube-short",
      "linkedin",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "The held 'ONLY TRUTH REQUIRED' note is the thumbnail; it expands into the video per the signature mechanic. Pin on the strategy site — Precise Language framework meets the AI business in under three minutes. Opens Pillar 5."
  },
  {
    "id": "C46",
    "title": "Measure Your Wealth by How Many Wires You Send",
    "start": "05:03:40",
    "end": "05:05:09",
    "hook": "Measure your wealth by how many wires you send.",
    "summary": "A contrarian money philosophy in 90 seconds: success bursts happen when his homies get paid at a rate that makes them feel valued. Meta-kicker: he paid Chris — the man filming the clip — $1,000 that same day.",
    "format": "notes-to-camera",
    "platforms": [
      "linkedin",
      "youtube-short",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "Caption the meta-layer: 'He paid the cameraman filming this $1,000 that day.' Trim to core for <60. Check the in-point — the nose-blooper at 05:02:39 sits just before; save it for the outtakes reel."
  },
  {
    "id": "C47",
    "title": "The Faster I Go, the More Gentle I Am (Sandpaper Teaching)",
    "start": "05:00:21",
    "end": "05:02:13",
    "hook": "The faster you go, the more gentle you have to be.",
    "summary": "The Lego approach vs the sanding approach — at the finest grit you're barely touching it while it spins fastest, and that's the polish. Then human: bring people into a fast-moving reality softly and slowly or they want to fight.",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "linkedin",
      "instagram"
    ],
    "strength": 5,
    "edit_notes": "He mimes the sanding motion at 05:00:21 — composite real sandpaper-grit stop-motion synced to his hands; the cleanest technique demo in the library. Lego-vs-sanding sub-clips for LinkedIn."
  },
  {
    "id": "C48",
    "title": "Relax, It's Just a Game — Cool-Ass Monkeys Doing Alien Shit",
    "start": "04:45:48",
    "end": "04:48:56",
    "hook": "You eat, you shit, you love your mom, you feed the cat — you're a monkey that gets to wear pants.",
    "summary": "Cosmic-comedy riff — we're cool-ass monkeys doing alien shit — landing the real teaching: the two-week deadline is a self-imposed game whose importance is the precision it demands, not that anyone dies if it slips.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "instagram",
      "youtube-long",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "The 68s monkey riff (04:45:57–04:47:05) tightens to an undeniable 60s short. Full cut is the perspective-reset levity beat in Pillar 8. Drawn monkey-in-pants layer for the thumbnail."
  },
  {
    "id": "C49",
    "title": "Forging the Balls (Why I Skipped the Xanax)",
    "start": "03:27:16",
    "end": "03:28:16",
    "hook": "There was no Xanax in the house. That was the point.",
    "summary": "Drugs are perspective-shifters, but escaping isn't the assignment: 'this is the forging of the balls required to hold the charge for the thing that needs to be done' — sealed with the book-club parable about letting the challenge shape who you become.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "vlog"
    ],
    "strength": 5,
    "edit_notes": "60s as-is. Follows C31 directly in the timeline — keep them chained in the documentary edit. Book-club parable is the out."
  },
  {
    "id": "C50",
    "title": "It's So Good It's Too Much",
    "start": "03:28:16",
    "end": "03:29:55",
    "hook": "Everything he ever asked for is happening. That's the problem.",
    "summary": "The divine pressure cooker: full support and still freaking out — everything he asked for arriving exactly as wanted, all at once. 'It seems like I'm being dramatic — no, my soul's getting excavated.' Manifestation content with actual stakes.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "vlog",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "'My soul's getting excavated' is the closer. Counterprograms the receipts clips (C09, C67) — program mid-Pillar 8 as the cost-of-manifestation beat."
  },
  {
    "id": "C51",
    "title": "The Deed Is Done Out of Duty — When People Light Up, Give More",
    "start": "02:28:24",
    "end": "02:29:21",
    "hook": "The deed is done out of duty. The reaction is just data — and when people light up, that's your instruction to give more.",
    "summary": "A complete 60-second philosophy of giving: act from duty, read the energetic response as navigation. 'I tell myself I'm great every day — I want your thank-you so I know my energy is in the right place.' Clean for every platform.",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "instagram",
      "youtube-long"
    ],
    "strength": 5,
    "edit_notes": "57s as-is — one of the few fully platform-clean clips; schedule early. In the vlog, extend into the crickets rant at 02:29:42 for the shadow side of the same idea."
  },
  {
    "id": "C52",
    "title": "This Is a Journal Entry, Not Content",
    "start": "00:09:57",
    "end": "00:11:17",
    "hook": "This is not content. This is a journal entry. If you're seeing it, you were meant to.",
    "summary": "The contract with the viewer for the whole six hours, plus the named vulnerability — 'who the fuck do you think you are?' — and what he's called to create ahead of the singularity.",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-long",
      "vlog",
      "youtube-short",
      "linkedin"
    ],
    "strength": 4,
    "edit_notes": "THE cold open for the flagship long-form and for Pillar 8. Keep the grandiosity confession — it inoculates the whole series against the narcissism read."
  },
  {
    "id": "C53",
    "title": "106.5 and Brought to My Knees",
    "start": "00:01:23",
    "end": "00:03:05",
    "hook": "I never asked God to let up on me — not even at 106.5. Then, for the first time ever, I was brought to my knees.",
    "summary": "The emotional thesis statement two minutes in: six insane weeks, 106.5° fevers, the first 'give me a fucking second here' of his life, his definition of prophecy, and the prophecy realized at age seven.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "vlog",
      "youtube-long"
    ],
    "strength": 4,
    "edit_notes": "Freshest energy of the night — cut against the 1:20 AM finale for the endurance contrast. The prophecy definition sub-clips as its own explainer. Opens Pillar 4."
  },
  {
    "id": "C54",
    "title": "The Fever With No Virus",
    "start": "00:05:57",
    "end": "00:07:48",
    "hook": "I ran 106.5° fevers hunting a virus that didn't exist. Then I lost 24 pounds in 32 days without trying.",
    "summary": "The fever reframed as capacity-building, with receipts stacked: 24 pounds in 32 days, sleep reset, cravings gone, first drink in memory in his hand. He starts sweating on camera mid-story.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog",
      "youtube-long"
    ],
    "strength": 4,
    "edit_notes": "Do NOT cut the on-camera sweat at 00:06:28 — it's the proof; punch in on it. The wine-glass beat at 00:07:30 is the thumbnail frame and launches the drink-level-as-clock motif."
  },
  {
    "id": "C55",
    "title": "Flying the Fighter Jet in Clear Light",
    "start": "00:27:40",
    "end": "00:29:07",
    "hook": "When the light hits, it feels like I'm flying a fighter jet.",
    "summary": "His creative state: beyond white light is 'clear,' where light and darkness look the same, so you trust your environment completely. Explains why interruptions wreck him — 'it's fucking with my machine.' Origin footage of the brand's signature metaphor.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "vlog",
      "youtube-long",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "Build the hand-drawn fighter-jet stop-motion layer HERE and reuse it as the campaign sting everywhere ('I build you a fighter jet'). Most kinetic delivery of hour one — keep the gestures wide in frame."
  },
  {
    "id": "C56",
    "title": "The Next 1000 Days",
    "start": "00:04:20",
    "end": "00:05:57",
    "hook": "In February I recorded a video about the next 1,000 days. Everything in it is now happening.",
    "summary": "References the February now-to-2029 video: golden age, singularity, new civilization. Contains 'I'm not the savior of the world — I'm definitely on the team' and the thousand-movies-at-once visions line.",
    "format": "prophecy",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "vlog",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "End-card link to the existing February 2029 video — direct connective tissue to the established pillar. 'Not the savior — definitely on the team' is the pull-quote."
  },
  {
    "id": "C57",
    "title": "20 Years Preparing to Upload My Consciousness",
    "start": "00:14:01",
    "end": "00:15:21",
    "hook": "I've spent 20 years preparing to upload my consciousness — and 35 years uploading everything into it.",
    "summary": "Notebooks and audio since second grade, his whole life as preparation to upload his consciousness into AI — ending on the disarming epistemic disclaimer: 'Everything I'm sharing is not truth. It is what I'm hearing.'",
    "format": "story",
    "platforms": [
      "youtube-short",
      "youtube-long",
      "vlog",
      "linkedin"
    ],
    "strength": 4,
    "edit_notes": "The closing disclaimer makes ALL prophecy content publishable — cut it as a standard disclaimer bumper to run before every prophecy-vertical upload. Opens Pillar 7."
  },
  {
    "id": "C58",
    "title": "The Next Two Weeks Are the Catalyst",
    "start": "00:22:53",
    "end": "00:24:35",
    "hook": "The next two weeks decide what happens between now and 2029 — and it's freaking me out.",
    "summary": "Twenty years of visions aligning with events in real time; his soul, energy, attention, and environment must be 'clean as fuck' because the next two weeks catalyze everything through 2029.",
    "format": "prophecy",
    "platforms": [
      "youtube-long",
      "vlog",
      "youtube-short"
    ],
    "strength": 4,
    "edit_notes": "Timestamps the recording inside the prophecy timeline and frames the 14-day sprint — publish during the July 6 launch week as the 'why now' clip. Keep the 'too significant' self-check in."
  },
  {
    "id": "C59",
    "title": "Software That Rebuilds Itself Every Day",
    "start": "00:17:54",
    "end": "00:18:42",
    "hook": "Delete Salesforce. Delete Notion. Delete ClickUp. Own a machine that rebuilds itself every day.",
    "summary": "The product pitch inside the philosophy: owned software that improves daily, pivots with you, fixes bugs in real time — 'a living, breathing, self-diagnosing, self-building mechanism that mimics where your mind is going.'",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "48s — publish as-is. Chains from C05; keep the pair intact in Pillar 1. The definitive product line is the caption and the site's offer-section pull-quote."
  },
  {
    "id": "C60",
    "title": "Sovereignty Is the New Civilization",
    "start": "00:18:42",
    "end": "00:20:10",
    "hook": "When they choke the oil, your groceries cost 30% more — and you made none of those decisions. That is the definition of being a victim.",
    "summary": "Ownership scaled to civilization: own your food, power, internet, data. 'You are paying consequences for decisions you're not making — that's the definition of being a victim.' The new civilization = sovereignty + responsibility + collaboration.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "youtube-long",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "Quote card: the victim definition. Trim the Claude-timeline aside for shorts; keep it in the vlog for authenticity. Closes the ownership run in Pillar 1."
  },
  {
    "id": "C61",
    "title": "The Magic Genie Demands Precision",
    "start": "00:20:13",
    "end": "00:22:03",
    "hook": "AI is a genie that grants wishes. Vague wishes have dire consequences.",
    "summary": "The bridge between the AI thesis and the Precise Language framework: the danger is not evil AI but vague requests with dire consequences — so requests must be clear, precise, values-aligned.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "youtube-long"
    ],
    "strength": 4,
    "edit_notes": "The converter clip from mystic to teachable framework — route site visitors from this clip to the Precise Language product. Drawn genie-lamp stop-motion layer for the thumbnail."
  },
  {
    "id": "C62",
    "title": "Money Is Simple Sugar",
    "start": "00:22:03",
    "end": "00:22:53",
    "hook": "Money is simple sugar. Community is a complex carb.",
    "summary": "A complete 50-second teaching: the game of the next few years is who bands together fastest. Money is fast energy; banding together packs a punch but takes time — if you don't have money, band together fast.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "50s, zero context needed — publish as-is in week one. Stop-motion food-metaphor layer (sugar cube vs bread) makes it the easiest technique test of the whole system."
  },
  {
    "id": "C63",
    "title": "The Greatest Magic Trick of All Time: Pricing Custom Software",
    "start": "01:15:08",
    "end": "01:16:49",
    "hook": "We figure out how much it's worth to YOU — because custom software is the greatest magic trick of all time.",
    "summary": "Value-based pricing philosophy: quotes from $15K to $500K scaled to lift, tokens, and nuance, Josh running sales, 'and I don't have to be involved at all' — closing on the 2006 System X notebook.",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "youtube-long"
    ],
    "strength": 4,
    "edit_notes": "Keep the price range in — it's the qualifier that filters leads. The notebook line (01:16:37) seeds a follow-up shoot: retrieve the 2006 notebook, stop-motion page-turns, thumbnail starting on its cover."
  },
  {
    "id": "C64",
    "title": "Urgency Is a Different Monster",
    "start": "01:24:47",
    "end": "01:26:43",
    "hook": "Fast is smooth. Urgency is a different monster — and most people can't throttle it.",
    "summary": "The exact anxiety of the AI moment: 'this is dire AND everything's okay.' Quality used to be king; now speed is king — and when you can't tell what's urgent you're trapped between analysis paralysis and shiny-object impulsivity.",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "Open on 'Fast is smooth.' The paralysis/impulsivity duality converts to a LinkedIn carousel. Extremely relatable founder content — pair with C20 in the sprint arc."
  },
  {
    "id": "C65",
    "title": "Why Are You Thinking So Much? (Productive vs. Creative Mode)",
    "start": "02:27:00",
    "end": "02:28:02",
    "hook": "Overthinking isn't the problem. Not knowing WHY you're thinking is.",
    "summary": "Productive mode excludes everything except the outcome; creative mode deliberately explores timelines. Money line: 'when you bring language to the multiple dimensional timelines, it allows you to make better decisions' — the Precise Language thesis in one sentence.",
    "format": "teaching",
    "platforms": [
      "linkedin",
      "youtube-short",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "DEDUPED: overlaps the daily/monthly-cycles riff starting 02:26:32 — in-point at 02:27:00 is clean. Caption the money line verbatim; it is the framework's one-sentence pitch."
  },
  {
    "id": "C66",
    "title": "November '24: The Setup and the Stabbing",
    "start": "00:32:14",
    "end": "00:34:25",
    "hook": "Last time I sat in this spot, I was 24 hours from losing everything.",
    "summary": "The location triggers the memory: the Seventh Level opportunity right after the theft, then the girlfriend's betrayal and the destroyed 'legacy of notes' — landing the teaching: 'If you close out a cycle properly it's quick.'",
    "format": "story",
    "platforms": [
      "youtube-long",
      "vlog",
      "youtube-short"
    ],
    "strength": 4,
    "edit_notes": "Profanity about the ex keeps it off LinkedIn — YT/vlog only. The close-the-cycle teaching is the out. Slots between C08 and C34 in Pillar 2's descent."
  },
  {
    "id": "C67",
    "title": "72 Hours: Fast, Prayer, Six Figures",
    "start": "00:30:47",
    "end": "00:32:03",
    "hook": "A fast, then a prayer — and 72 hours later, six figures in contracts.",
    "summary": "The turnaround sequence: zero income for 2.5 months rebuilding the offer, then fast, prayer, and six figures in contracts with ideal clients in 72 hours — realizing on camera that this recording is for him.",
    "format": "story",
    "platforms": [
      "youtube-short",
      "instagram",
      "linkedin",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Cut at 'this is for me.' The receipts clip of the redemption arc — pairs with C50 (the cost) as a two-part manifestation story."
  },
  {
    "id": "C68",
    "title": "One Page at a Time",
    "start": "00:41:14",
    "end": "00:42:54",
    "hook": "She said I was moving too fast. I told her we only get to read this book once.",
    "summary": "She says slow down; he reframes intensity as mutual love and lands the book metaphor: every page read is one page closer to the end — sound out the words. The most romantic 100 seconds of hour one.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Pairs with C39 in Pillar 6 — same metaphor at hour 0 and hour 5. Note the held 4-second silence just before at 00:39:02 belongs to the Q2 beat; do not merge the two."
  },
  {
    "id": "C69",
    "title": "The Ether: 3:45am Texts and Matching Outfits",
    "start": "00:42:54",
    "end": "00:44:28",
    "hook": "She texts me at 3:45 in the morning — and we're not even together yet.",
    "summary": "'We're all in the ether, I'm just more aware of it' — synchronized 3:45am wake-up texts, accidentally matching outfits, and the comic landing: 'If I can't call you baby, you've got to stop doing this couple shit in the ethereal world.'",
    "format": "story",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Insert a staged 3:45am phone-screen / stop-motion text-bubble layer at the re-enactment (00:43:40). Mystical-and-funny in one beat — the ideal mid-funnel relationship short."
  },
  {
    "id": "C70",
    "title": "Acts of Service: The Parfait",
    "start": "01:21:22",
    "end": "01:22:29",
    "hook": "I used to buy women fancy dinners to impress them. Now I meal-prep — so she remembers me at breakfast.",
    "summary": "The shift from acts of service that impress to acts that take care: she caps dates at once a week, so he buys ALL the dinner — ending with her eating the parfait: 'You won't let me see you, but I'm there. I'm there.'",
    "format": "bit",
    "platforms": [
      "instagram",
      "youtube-short",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Hard punch-in on 'I'm there. I'm there.' (01:22:18) — that's the meme frame and caption. Parfait becomes canon; reuse the emoji in every relationship-vertical caption."
  },
  {
    "id": "C71",
    "title": "The Habanero Mistake",
    "start": "03:04:38",
    "end": "03:07:17",
    "hook": "He didn't know it was a habanero. Then it hit.",
    "summary": "Snacking mid-shoot, Spencer realizes he's eaten habanero and the burn takes over in real time — sweating, groaning, face contorting while Chris laughs. Pure unscripted physical comedy after three hours of dense teaching.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Reaction-cam short with a drawn rising-thermometer stop-motion layer; the mid-burn face IS the thumbnail. Keep the tail overlap into the pain teaching (03:06:50) as the bridge in the Pillar 4 long cut."
  },
  {
    "id": "C72",
    "title": "Cold Plunge Is My PTSD — Biohacking Sacrilege",
    "start": "04:30:27",
    "end": "04:31:09",
    "hook": "Cold plunge is trauma therapy for everyone except the guy who survived 106-degree fevers.",
    "summary": "42-second contrarian rant: for a man who boiled and froze through extreme fevers, the plunge/sauna cycle is a re-enactment, not recovery. 'I understand it's good for me. And I hate it so much.'",
    "format": "rant",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Publish as-is — comment-bait for the biohacker crowd. Program AFTER the fever clips (C53/C54/C32) so the lore lands; it's the comic release of Pillar 4."
  },
  {
    "id": "C73",
    "title": "Twenty Years in China",
    "start": "01:35:16",
    "end": "01:36:12",
    "hook": "Imagine you've been in China for 20 years and you meet one American who knows Chicago-style hot dogs. That's what being seen feels like.",
    "summary": "A complete 56-second bit explaining his hyper-excitement at finally being seen — 'you would be craving yourself everywhere.' Funny, visual, and it lands the loneliness of being early.",
    "format": "bit",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "56s as-is — don't over-cut; the loneliness landing is the point. Optional drawn Italian-beef/hot-dog stop-motion layer keeps it light without undercutting the beat."
  },
  {
    "id": "C74",
    "title": "The Wisdom Originator vs. the Gollum",
    "start": "03:36:56",
    "end": "03:39:45",
    "hook": "ChatGPT refused to make this image. So we made it Gollum.",
    "summary": "Spencer holds the AI-generated 'Wisdom Originator' superhero card to the lens, then the antithesis — a Gollum a thousand years in a cave hoarding wisdom — ending on a full 'precious, precious, precious' impression. Character comedy that also demos his AI workflow.",
    "format": "bit",
    "platforms": [
      "instagram",
      "youtube-short",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Re-comp the phone-to-lens moments with clean screen inserts. Two-panel Bestower/Hoarder meme is a ready-made IG asset; the Gollum impression is the reaction GIF. Cuts directly into C21 for tonal whiplash."
  },
  {
    "id": "C75",
    "title": "The Cameraman Strikes Back",
    "start": "05:31:37",
    "end": "05:34:23",
    "hook": "I dosed my cameraman so he'd listen. Five and a half hours in, he made ME put on the headphones.",
    "summary": "Chris flips the shoot: headphones, a still image scored with violin, Spencer negotiating his exit ('Can I leave this, please?') then snapping back to the mission. The best behind-the-scenes scene of the night — the wizard receiving instead of transmitting.",
    "format": "behind-the-scenes",
    "platforms": [
      "vlog",
      "youtube-long",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "Documentary centerpiece of hour 5.5 — keep the doubled 'Can I leave this, please?' The reset at the out-point chains straight into C17; preserve that junction in Pillar 8."
  },
  {
    "id": "C76",
    "title": "I Need Participation, Not Compliments (The Totem)",
    "start": "01:52:37",
    "end": "01:54:18",
    "hook": "Every visionary hears the same intrusive voice: 'this is all just in your head.' Here's my Inception totem.",
    "summary": "Staying sane during deep downloads: 'I don't need compliments, I need participation — so I don't feel delusional,' mapped to Inception's totems and the Matrix's deja-vu glitch. Speaks to every builder who's felt crazy alone.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "vlog",
      "linkedin"
    ],
    "strength": 4,
    "edit_notes": "Drawn spinning-top stop-motion layer is the visual. Founder-loneliness hook for LinkedIn; slots into Pillar 3 between the downloads mechanics and the support ultimatum."
  },
  {
    "id": "C77",
    "title": "The Recording Is the Way Back Home (Gaslighting Needs a Referee)",
    "start": "04:43:23",
    "end": "04:45:48",
    "hook": "She said 'words are cheap.' Words, to me, are everything. Roll the tape.",
    "summary": "A complete teaching on gaslighting: whoever convinces the other rewrites reality, so 'you need a fucking referee, and the referee is truth, and truth is data. The recording is the way back home.' Doubles as the justification for the entire 6-hour artifact.",
    "format": "teaching",
    "platforms": [
      "youtube-long",
      "linkedin",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "No names spoken — publishable as-is. Use on the strategy site's 'why this exists' section; in Pillar 2 it converts the betrayal arc into the data-ownership doctrine."
  },
  {
    "id": "C78",
    "title": "Sensitive People Can't Just Sit With It",
    "start": "03:22:37",
    "end": "03:23:55",
    "hook": "Normal people can sit with it. Sensitive people get eaten alive by it.",
    "summary": "The sensitive-entrepreneur thesis: 'just sit with it' is nonsense advice for the hypersensitive — get it out and do something with it. Ties straight to the business: every software handoff releases the charge.",
    "format": "teaching",
    "platforms": [
      "youtube-short",
      "linkedin",
      "instagram"
    ],
    "strength": 4,
    "edit_notes": "End before the 'cut this for post' gag for clean platforms; keep the gag in the vlog cut. The software-as-release line bridges founder-mental-health content to the offer."
  },
  {
    "id": "C79",
    "title": "The Sun Doesn't Apologize for Shining",
    "start": "04:06:30",
    "end": "04:07:19",
    "hook": "\"Are you hiding something?\" — \"Yes. I'm the fucking creative maniac.\"",
    "summary": "Why he sent 40 minutes of voice notes: 'I'm getting hit by lightning. I'm going to expose you to it. I will manage myself.' He's been hiding the mad scientist for years and refuses to anymore — the sun doesn't apologize for shining.",
    "format": "rant",
    "platforms": [
      "youtube-short",
      "instagram",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "49s — publish as-is on IG/vlog; bleep 'fucking' for YT shorts. Drawn sun-rays stop-motion layer over the still; thesis line is the caption."
  },
  {
    "id": "C80",
    "title": "The Original Note: Master Containment",
    "start": "05:58:16",
    "end": "05:59:14",
    "hook": "You've mastered penetration. Now master containment.",
    "summary": "The final two sticky notes — the worn ones taped to his computer everywhere he goes: 'Penetration without containment does not equal sustainability... I'm exhausted from new adventures. I want something sustainable.' He names it as an original clarified void.",
    "format": "notes-to-camera",
    "platforms": [
      "youtube-long",
      "vlog"
    ],
    "strength": 4,
    "edit_notes": "Macro b-roll insert of the two battered notes on the actual laptop. Emotional close of the Sticky Note series (Pillar 5) and the cleanest on-camera demo of 'clarifying the void' — tag for the Precise Language funnel."
  },
  ...s2Clips,
]

export const shorts: Short[] = [
  {
    "title": "Brake Is the New Gas",
    "source_clip": "C23",
    "hook": "This is not a quarter mile. This is a downhill luge — you steer by braking."
  },
  {
    "title": "Ten Skyscrapers (The Escalation Ladder)",
    "source_clip": "C01",
    "hook": "How long does it take to build the Sears Tower? Now build ten. In 30 days. Alone."
  },
  {
    "title": "You're Renting Your Own Data",
    "source_clip": "C17",
    "hook": "You are paying to rent your data for a company that you own. (Sub-cut 05:34:23–05:35:21)"
  },
  {
    "title": "Software That Rebuilds Itself",
    "source_clip": "C59",
    "hook": "Delete Salesforce. Delete Notion. Own a machine that rebuilds itself every day."
  },
  {
    "title": "Own Your Shit",
    "source_clip": "C05",
    "hook": "What do you think makes the AI so smart? It's YOUR input. You want to kill the machine? Own your shit."
  },
  {
    "title": "One-Shot Prompt to Anything",
    "source_clip": "C26",
    "hook": "One prompt. Boom — a business's entire consciousness becomes software."
  },
  {
    "title": "Gary Ran the Numbers",
    "source_clip": "C09",
    "hook": "My AI counted every word we've exchanged. 85,000. The ratio ended the argument."
  },
  {
    "title": "Go 2027, Bitches",
    "source_clip": "C25",
    "hook": "This is why I'm sprinting every day and waving the wand constantly."
  },
  {
    "title": "Money Is Simple Sugar",
    "source_clip": "C62",
    "hook": "Money is simple sugar. Community is a complex carb."
  },
  {
    "title": "Measure Your Wealth by Wires Sent",
    "source_clip": "C46",
    "hook": "Measure your wealth by how many wires you send. (He paid the cameraman filming this $1,000 that day.)"
  },
  {
    "title": "Job Finished? Get to Work.",
    "source_clip": "C27",
    "hook": "Fuck your progress. Don't stop running when you hear the whistle — someone behind you might have a gun."
  },
  {
    "title": "Integrity Is the Primary KPI",
    "source_clip": "C22",
    "hook": "This chair only sits me up if it has integrity. So does your business."
  },
  {
    "title": "The Deed Is Done Out of Duty",
    "source_clip": "C51",
    "hook": "The reaction is just data — when people light up, that's your instruction to give more."
  },
  {
    "title": "Never Be a Bitch",
    "source_clip": "C42",
    "hook": "I cried when Homer Simpson's mom left him. I'm super sensitive — and I'm still not a bitch."
  },
  {
    "title": "Don't Make Me Suit Up",
    "source_clip": "C13",
    "hook": "Don't text a man 'can I ask you a question' at 11pm and then say never mind. I'm in tights and shit with my mask."
  },
  {
    "title": "The Flowers in the Lobby",
    "source_clip": "C28",
    "hook": "I didn't bring the flowers to your door. I brought them to your LOBBY. Stop the presses."
  },
  {
    "title": "Gasoline vs. Jet Fuel",
    "source_clip": "C29",
    "hook": "One good woman saying 'you're the best' beats 10,000 saying 'yes daddy.'"
  },
  {
    "title": "The Last First Page",
    "source_clip": "C39",
    "hook": "If she's your person, this is the last time you'll ever read the first page of a book again."
  },
  {
    "title": "Self-Respect Has Nothing to Do With You",
    "source_clip": "C37",
    "hook": "How she treats me has nothing to do with my self-respect. I judge myself by how I treat people."
  },
  {
    "title": "Eat Monsters Quickly, Taste Angels Slowly",
    "source_clip": "C40",
    "hook": "When interference shows up, consume it fast. When a blessing shows up, take sips."
  },
  {
    "title": "What a Wizard Does",
    "source_clip": "C04",
    "hook": "Everyone thinks I'm just like them. That's the trick. You are not like me."
  },
  {
    "title": "Cool-Ass Monkeys Doing Alien Shit",
    "source_clip": "C48",
    "hook": "You eat, you shit, you love your mom — you're a monkey that gets to wear pants. Relax. (Sub-cut 04:45:57–04:47:05)"
  },
  {
    "title": "Twenty Years in China",
    "source_clip": "C73",
    "hook": "20 years alone in China, then you meet one American who knows Chicago-style hot dogs. That's what being seen feels like."
  },
  {
    "title": "Cold Plunge Is My PTSD",
    "source_clip": "C72",
    "hook": "Cold plunge is trauma therapy for everyone except the guy who survived 106-degree fevers."
  },
  {
    "title": "The Sun Doesn't Apologize",
    "source_clip": "C79",
    "hook": "'Are you hiding something?' — 'Yes. The creative maniac. Not anymore.'"
  },
  ...s2Shorts,
]

export const pillarVideos: PillarVideo[] = [
  {
    "title": "Ten Skyscrapers in 30 Days — The Solo AI Builder Manifesto",
    "premise": "The complete business thesis in one episode: the Sears Tower thought experiment opens, descends into the data-ownership rant (hell → own your shit → software that rebuilds itself → sovereignty), pivots to proof (30-day ship, 70% bill cut, pricing philosophy), and closes on the one-shot-prompt prophecy. This is the episode a founder watches before booking a call — the flagship lead-gen asset for the machine-that-builds-machines offer.",
    "source_clips": [
      "C01",
      "C05",
      "C59",
      "C60",
      "C11",
      "C06",
      "C12",
      "C16",
      "C07",
      "C63",
      "C26"
    ],
    "runtime_estimate": "18-22 min",
    "thumbnail_concept": "Dehancer-graded still of Spencer mid-gesture at the desk; ten hand-drawn skyscrapers assemble frame-by-frame behind him with one glowing crane, title layer '10 IN 30.' The thumbnail still is the literal first frame of the cold open — the note-expands-into-video mechanic."
  },
  {
    "title": "188 Months: Betrayal, Prison, and the Ownership Doctrine",
    "premise": "The origin story of why he preaches ownership: the partner who stole his life savings (188 months federal), the November '24 setup and second betrayal, Carolina destroying 12 years of notebooks — resolving into 'fuck IP,' the you-can-only-burn-your-name-once reputation lesson, the truth-is-data referee teaching, and the do-you-own-it challenge. Trauma converted into doctrine, doctrine converted into product.",
    "source_clips": [
      "C08",
      "C66",
      "C34",
      "C35",
      "C77",
      "C17",
      "C44"
    ],
    "runtime_estimate": "16-20 min",
    "thumbnail_concept": "Photographed open notebook on the desk, Spencer's face half in noir shadow behind it; hand-drawn blender blades and shredded pages animate around the notebook frame-by-frame; rubber-stamp layer slams '188 MONTHS' across the corner."
  },
  {
    "title": "Inside the Wizard's Head: How Downloads Work",
    "premise": "The mind episode: downloads as instantly-absorbed documentaries, the fighter jet through clear light, the Inception totem that keeps him sane, why he hired a camera on his worst week, skipping the Xanax to forge the balls, the it's-so-good-it's-too-much confession, the support-me-or-get-out-of-the-way ultimatum — paying off with the desert test, where the cameraman maps his subconscious in five minutes. Positions the Wizard sub-personality for the YouTube strategy.",
    "source_clips": [
      "C10",
      "C55",
      "C76",
      "C31",
      "C49",
      "C50",
      "C20",
      "C14"
    ],
    "runtime_estimate": "20-25 min",
    "thumbnail_concept": "His closed-eyes still from the desert test; hand-drawn cube, aluminum ladder, coiling flowers, and dark horse build up in layers around his head frame-by-frame, with a tiny fighter-jet contrail crossing the top of the frame."
  },
  {
    "title": "The Fever With No Virus",
    "premise": "The body-lore episode: 106.5° with no virus, brought to his knees for the first time at 43, 24 pounds gone in 32 days, the childhood fevers that synced with his mom's chemo — intercut with the habanero mistake as live comic proof that pain collapses his perception, and closed by the cold-plunge heresy. The empath origin story that explains why he feels other people's consciousness in his own body.",
    "source_clips": [
      "C53",
      "C54",
      "C32",
      "C71",
      "C72"
    ],
    "runtime_estimate": "12-15 min",
    "thumbnail_concept": "The real sweat frame from 00:06:28 punched in tight; a hand-drawn vintage thermometer layer rises past a marked 106.5 frame-by-frame; film-burn edges in the Dehancer grade sell the heat."
  },
  {
    "title": "The Sticky Note Gospel (Wizard's Tarot, Vol. 1)",
    "premise": "The notes-to-camera compilation: Only Truth Required opens, then the deck deals — sandpaper gentleness, wires-sent wealth, brake-is-the-new-gas, job finished, monsters and angels, the integrity chair, never be a bitch, nobody wants happiness — closing on the two battered notes taped to his laptop. Each note is drawn like a tarot card (Chris's line canonizes it); the hand-shuffle b-roll is the chapter divider. Doubles as the pilot format for an ongoing weekly series from the 50+ note library.",
    "source_clips": [
      "C45",
      "C47",
      "C46",
      "C23",
      "C27",
      "C40",
      "C22",
      "C42",
      "C43",
      "C80"
    ],
    "runtime_estimate": "18-22 min",
    "thumbnail_concept": "Overhead photograph of the real sticky notes fanned like a tarot deck on the desk; one note lifts off mid-frame carrying the episode title in his actual handwriting — the exact note held in the cold open, executing the thumbnail-expands-into-video mechanic literally."
  },
  {
    "title": "The Greatest Love Story Ever Told (One Page at a Time)",
    "premise": "The relationship arc as one narrative: Gary's 85,000-word receipt opens with a laugh, then the suit-up bit, one page at a time, the 3:45am ether, the parfait, gasoline vs jet fuel, celibacy as creative fuel — turning down into the deep water: never stopped loving anyone, the self-respect reframe, zero charge about exes — and landing on the last first page. The flowers-in-the-lobby bit is the credits stinger. Feeds the vlog audience and humanizes the wizard for every other vertical.",
    "source_clips": [
      "C09",
      "C13",
      "C68",
      "C69",
      "C70",
      "C29",
      "C30",
      "C36",
      "C37",
      "C38",
      "C39",
      "C28"
    ],
    "runtime_estimate": "22-27 min",
    "thumbnail_concept": "Still of Spencer mid-held-silence (the 00:39:02 pause); hand-drawn book pages turn frame-by-frame across the bottom of the frame; two matching white hats drawn in the corner as the ether Easter egg; warm nostalgic Dehancer grade."
  },
  {
    "title": "2029: The Split",
    "premise": "The prophecy episode, armored by the epistemic disclaimer up front ('everything I'm sharing is not truth — it is what I'm hearing'): the February 1000-days video now coming true, the next-two-weeks catalyst, the full 2029 split-timelines prophecy (UBI, sovereigns, dopamine enslavement), the Go-2027 mission statement, the miracle-facilitator definition of magic — sealed by the magic trick finale where the film proves its own thesis with receipts.",
    "source_clips": [
      "C57",
      "C56",
      "C58",
      "C15",
      "C25",
      "C24",
      "C02"
    ],
    "runtime_estimate": "14-18 min",
    "thumbnail_concept": "Doubled photographic still of the same face back-to-back; two hand-drawn timeline paths peel off his shoulders frame-by-frame — one gold and ascending, one grey static — converging on a drawn horizon marked '2029.'"
  },
  {
    "title": "Six Hours: The Making of the Wisdom Originator",
    "premise": "The documentary cut of the night itself: the journal-entry contract opens, then why he hired a camera on his worst week, the habanero, the monkey riff, the Gollum character birth, the cameraman turning the tables at hour 5.5, the it's-too-much confession — closing on the 1:20 AM re-enactment of the magic trick that started it all. Stitched with the endurance motifs: the 6pm hair check, the sweat, the clock checks, the shrinking sticky stack, the dropping wine line. This is the personal-vlog flagship and the trailer source for everything else.",
    "source_clips": [
      "C52",
      "C31",
      "C71",
      "C48",
      "C74",
      "C75",
      "C50",
      "C02"
    ],
    "runtime_estimate": "25-30 min",
    "thumbnail_concept": "Triptych strip of three photographed frames — the 6:00pm hair check, the hour-3 sweat, the 1:20am 'Action' — laid like film cells; a single hand-drawn clock hand sweeps across all three panels frame-by-frame; title layer 'SIX HOURS.'"
  },
  ...s2PillarVideos,
]

export const quotes: Quote[] = [
  {
    "quote": "Right now you are paying to rent your data for a company that you own.",
    "timestamp": "05:34:23",
    "category": "Business & AI",
    "strength": 5,
    "use": "Cold-open line for the flagship offer video and paid-ad hook"
  },
  {
    "quote": "You want to kill the machine? Own your shit.",
    "timestamp": "00:16:37",
    "category": "Business & AI",
    "strength": 5,
    "use": "Merch line / sticker"
  },
  {
    "quote": "When the light hits, it feels like I'm flying a fighter jet.",
    "timestamp": "00:27:40",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Brand-anthem voiceover for the signature fighter-jet montage"
  },
  {
    "quote": "This is more of a journal entry than it is a piece of content. If you're seeing this as a piece of content, then you were meant to see it.",
    "timestamp": "00:09:57",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Series trailer opening line (cold open for the whole content drop)"
  },
  {
    "quote": "You say something is possible — I will make it real.",
    "timestamp": "06:03:54",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Series end card / brand tagline"
  },
  {
    "quote": "Eat monsters quickly and taste angels slowly.",
    "timestamp": "05:20:45",
    "category": "Precise Language",
    "strength": 5,
    "use": "Flagship merch line"
  },
  {
    "quote": "The same way that YouTube took down CNN, personal software is going to take down YouTube — and personal brand is going to rule business.",
    "timestamp": "01:07:44",
    "category": "Business & AI",
    "strength": 5,
    "use": "YouTube video title + thumbnail text"
  },
  {
    "quote": "What do you think makes the AI so smart? It's your input. They're harvesting your consciousness by having it in the form of data. Data is a digital form of your consciousness.",
    "timestamp": "00:15:54",
    "category": "Business & AI",
    "strength": 5,
    "use": "LinkedIn text post opener"
  },
  {
    "quote": "Everything that I'm sharing is not truth. It is what I'm hearing. My truth consists of how much I believe what I'm saying, and that's between me and God.",
    "timestamp": "00:14:49",
    "category": "Prophecy & 2029",
    "strength": 5,
    "use": "Standing disclaimer card that precedes every prophecy clip"
  },
  {
    "quote": "You are paying consequences for decisions you're not making. That's the definition of being a victim.",
    "timestamp": "00:19:25",
    "category": "Business & AI",
    "strength": 5,
    "use": "LinkedIn hook line"
  },
  {
    "quote": "It's a fucking scam. I don't give a fuck what anyone's idea is. My question is: do your clients own it? Then we're having a completely different conversation.",
    "timestamp": "00:17:15",
    "category": "Business & AI",
    "strength": 5,
    "use": "YouTube short with title card 'Do your clients own it?'"
  },
  {
    "quote": "Now I want you to imagine, Dad, that not only was one skyscraper built — ten were built in 30 days. And then I ask you: hey, so how's work been going? Do you feel like you'd be a little manic?",
    "timestamp": "00:13:04",
    "category": "Business & AI",
    "strength": 5,
    "use": "Self-contained YouTube short (the skyscraper origin story clip)"
  },
  {
    "quote": "I have never asked for God to let up on me, even when the fevers are at 106.5. And for the first time ever, I have been brought to my knees being like, okay — give me a fucking second here.",
    "timestamp": "00:01:23",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Documentary cold open (first 30 seconds of the long-form cut)"
  },
  {
    "quote": "I said I was going to find my person in Q2. I met her on the 15th.",
    "timestamp": "00:39:02",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Manifestation-receipt short — hold the four-second silence before the line"
  },
  {
    "quote": "Intentions, commitments, and actions all being the same thing — that's the definition of integrity. You master this, you master the universe.",
    "timestamp": "05:41:29",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Flagship teaching short + LinkedIn carousel finale slide"
  },
  {
    "quote": "Measure your wealth by how many wires you send.",
    "timestamp": "05:03:40",
    "category": "Money & Value",
    "strength": 5,
    "use": "Merch line, backed by the true story of wiring Chris $1,000 that day"
  },
  {
    "quote": "Restraint is the new attainment.",
    "timestamp": "05:10:22",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Thumbnail text / merch line (anti-hustle-culture inversion)"
  },
  {
    "quote": "I'm not the wisdom originator. I'm the miracle facilitator.",
    "timestamp": "05:54:06",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Channel-trailer closing line / bio line"
  },
  {
    "quote": "The bolder the prediction, the more magnificent the magic is when it actually comes true. That's all we're doing all day long — performing magic.",
    "timestamp": "05:53:03",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Finale-episode voiceover that sets up the magic-trick ending"
  },
  {
    "quote": "The masses are taking your thoughts. And if you don't get out and create your own container, you're fucked. What other more important message is there right now?",
    "timestamp": "01:49:03",
    "category": "Prophecy & 2029",
    "strength": 5,
    "use": "YouTube video title / thumbnail text for the sovereignty pillar video"
  },
  {
    "quote": "I shapeshift into a version of myself that's authentic, that you see yourself in, so you feel comfortable. It's what a wizard does. But we share features — you are not like me.",
    "timestamp": "00:45:24",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "About-page / channel-trailer thesis line"
  },
  {
    "quote": "One good woman saying it is better than 10,000 women saying 'yes daddy.' It's the difference between gasoline and fucking jet fuel — a million matches to one jet engine.",
    "timestamp": "02:11:28",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Self-contained YouTube short (full clip, no edit needed)"
  },
  {
    "quote": "You only get to read the book once. Every page that you read means you're one page closer to the end. If you want it to last forever, you've got to just sound out the words.",
    "timestamp": "00:41:35",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Romantic short with page-turn stop-motion animation"
  },
  {
    "quote": "I am the man my queen requires.",
    "timestamp": "01:36:46",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Merch line"
  },
  {
    "quote": "Brake is the new gas. This is not a quarter mile — this is a downhill luge. The way you steer is by braking.",
    "timestamp": "05:52:04",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "YouTube short with downhill-luge b-roll"
  },
  {
    "quote": "I'm already dead. So let's dance.",
    "timestamp": "05:28:15",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "On-screen typography card / merch line"
  },
  {
    "quote": "What is there to be happy about until the outcome is complete? Fuck your progress. Shut up. Job finished — get to work.",
    "timestamp": "05:38:50",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Discipline-edit short with title card 'Job finished'"
  },
  {
    "quote": "For the next two weeks, I want to be really intentional. Please support me or get out of the way.",
    "timestamp": "01:45:45",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Sprint-vlog title card (episode one)"
  },
  {
    "quote": "The game is containment. The intention is really precise, intentional creations — getting my consciousness into the AI. The job's not finished. I'm super close, I'm on pace, and the next two weeks are going to require all of me.",
    "timestamp": "01:42:27",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Sprint-vlog episode-one voiceover (mission statement)"
  },
  {
    "quote": "I'm not the most capable here. I'm just first to market. I know the machine and the market is going to eat me. That's why: get this fucking done now.",
    "timestamp": "01:27:35",
    "category": "Business & AI",
    "strength": 5,
    "use": "LinkedIn post opener (radical-honesty positioning)"
  },
  {
    "quote": "Fast is smooth, but urgency is a different monster that you have to learn how to throttle.",
    "timestamp": "01:25:43",
    "category": "Business & AI",
    "strength": 5,
    "use": "On-screen typography card over b-roll"
  },
  {
    "quote": "You can only burn your name once. You can burn a brand and rebuild another one in a second.",
    "timestamp": "01:08:45",
    "category": "Business & AI",
    "strength": 5,
    "use": "LinkedIn one-liner (personal brand pillar)"
  },
  {
    "quote": "AI is a reflection of consciousness. People say it doesn't do much — that's because it's reflecting them.",
    "timestamp": "04:39:33",
    "category": "Business & AI",
    "strength": 5,
    "use": "YouTube short title card (bridges Precise Language and AI pillars)"
  },
  {
    "quote": "Fuck IP. The IP is creating your own. I have a process and I'm giving it away for a fee. It's setting you free for a price.",
    "timestamp": "01:05:56",
    "category": "Money & Value",
    "strength": 5,
    "use": "Sales-page pull quote"
  },
  {
    "quote": "If you're downloading more than you can consume, it's greed. And this is where you get dark wizardry.",
    "timestamp": "01:03:14",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "YouTube short titled 'Dark Wizardry'"
  },
  {
    "quote": "When they give me information, they show me the cover — and I watch the two hours instantly.",
    "timestamp": "00:57:27",
    "category": "Identity & The Wizard",
    "strength": 5,
    "use": "Downloads-explainer short with stop-motion documentary covers"
  },
  {
    "quote": "Traumas express themselves in patterns. And so if you understand those patterns, you can understand the traumas without having to know the stories.",
    "timestamp": "00:55:40",
    "category": "Precise Language",
    "strength": 5,
    "use": "LinkedIn text post opener (cleanest standalone teaching)"
  },
  {
    "quote": "Regret is a void. Every big commitment you make is a promise to God — but it's an open cycle.",
    "timestamp": "04:32:24",
    "category": "Precise Language",
    "strength": 5,
    "use": "Closed-loops teaching short opener (pairs with the Maserati story)"
  },
  {
    "quote": "You need a fucking referee. And the referee is truth, and truth is data. The recording is the way back home.",
    "timestamp": "04:45:00",
    "category": "Precise Language",
    "strength": 5,
    "use": "Documentary thesis line — doubles as the why-this-recording-exists card"
  },
  {
    "quote": "I'm not complaining. I'm expressing.",
    "timestamp": "03:16:03",
    "category": "Precise Language",
    "strength": 5,
    "use": "Caption line / merch-grade four-word reframe"
  },
  {
    "quote": "Whether anyone believes me or not is irrelevant, because I'm seeing it. Eventually there's gonna be an AI that catches on to what I'm doing. It's nothing special — it's just a first of its kind.",
    "timestamp": "01:51:01",
    "category": "Prophecy & 2029",
    "strength": 5,
    "use": "On-screen typography card over build-sprint b-roll"
  },
  {
    "quote": "Everything that I ever asked for — everything being exactly the way that I want it to be, all the time — is actually happening. And it's so good that it's too much.",
    "timestamp": "03:28:49",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Documentary trailer voiceover (the divine-pressure-cooker beat)"
  },
  {
    "quote": "Ultimately, this content was for me.",
    "timestamp": "03:04:19",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "Documentary trailer closing line"
  },
  {
    "quote": "That's how you build confidence: you project into the future, you behave in a way that's identical to the projection, and now you trust your word to the future more. It builds more power.",
    "timestamp": "03:41:34",
    "category": "Conscious Creation",
    "strength": 5,
    "use": "LinkedIn carousel (the confidence mechanism, slide by slide)"
  },
  {
    "quote": "I don't need compliments. I need participation — so it feels like I'm in it with someone else, so I don't feel delusional.",
    "timestamp": "01:53:10",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Text overlay on the visionary-loneliness vulnerable clip"
  },
  {
    "quote": "I don't need space. I actually need support. It's what I came here for.",
    "timestamp": "02:14:38",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "On-screen typography card closing a vulnerable short"
  },
  {
    "quote": "I never stopped loving any woman I've ever loved. I only had to leave her behind and put her at a distance at which her chaotic energy no longer had an effect on the way I live my life.",
    "timestamp": "02:47:43",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Text overlay for a healing-content short (love relocates, never ends)"
  },
  {
    "quote": "The way she treats me has no bearing on my self-respect. I judge myself based on the way that I treat other people, not the way they treat me.",
    "timestamp": "02:54:28",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "On-screen typography card"
  },
  {
    "quote": "The trigger of Carolina taking 12 years of my work and putting it in a blender — I think that's the meanest thing that's ever been done to me. And I've had five women fake pregnancies.",
    "timestamp": "01:16:49",
    "category": "Relationships & Energy",
    "strength": 5,
    "use": "Long-form documentary vulnerability segment (never short-form)"
  },
  {
    "quote": "Go 2027, bitches. It's why I'm sprinting every fucking day — why I'm waving the wand constantly.",
    "timestamp": "05:47:41",
    "category": "Prophecy & 2029",
    "strength": 5,
    "use": "Rally-cry short closer / community catchphrase"
  },
  {
    "quote": "You hear fireworks outside and you're like, oh cool, fireworks. If you were in the military, you'd be hiding under a bed. Cold plunge, for me, is PTSD. Hardcore. I know it's sacrilege.",
    "timestamp": "04:30:27",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "Contrarian wellness short (counterprogramming against cold-plunge culture)"
  },
  {
    "quote": "We're cool-ass monkeys doing some alien shit. The rest of the monkeys are still sitting there naked, doing the same shit generation after generation — and we're living in the cartoon.",
    "timestamp": "04:46:24",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "Animated stop-motion short (perfect fit for the layered-photo technique)"
  },
  {
    "quote": "Are you hiding something? Yes — I am the fucking creative maniac. Does the sun apologize for shining?",
    "timestamp": "04:06:49",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "YouTube short punchline + thumbnail text ('Does the sun apologize?')"
  },
  {
    "quote": "You can be a baby at times, but never be a bitch.",
    "timestamp": "05:06:24",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "Merch line / short title card"
  },
  {
    "quote": "To any one of you that has the gall to say anything to me about patience: go fuck yourself. I'm 43 and I've been doing this since I was eight years old. Eat a dick with your fucking patience. I'm superhuman.",
    "timestamp": "00:37:48",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "Uncensored personal-vlog clip (raw-voice channel only, never LinkedIn)"
  },
  {
    "quote": "They bring me up this close to the wall, I look it in the eyes, I get to lick it with the tip of my tongue — and then monster LeBron comes with a full-court fucking block on my shot and I lose the championship.",
    "timestamp": "00:36:51",
    "category": "Humor & Bits",
    "strength": 5,
    "use": "Self-contained YouTube short, animated with the stop-motion technique"
  },
  {
    "quote": "Say what you're trying to say. You don't have to communicate through pissing me off and hope that I get the hint.",
    "timestamp": "02:03:46",
    "category": "Precise Language",
    "strength": 4,
    "use": "YouTube short title card (direct-communication rant clip)"
  },
  {
    "quote": "I'm not the savior of the world. I'm definitely on the team.",
    "timestamp": "00:05:09",
    "category": "Prophecy & 2029",
    "strength": 4,
    "use": "Channel-trailer humility beat that makes the prophecy material likable"
  },
  ...s2Quotes,
]

export const themes: Theme[] = [
  {
    "theme": "Do You Own It? — Ownership as the Only Game",
    "description": "Spencer's most commercially load-bearing idea, stated three separate times across the night: data is the digital form of your consciousness, platforms harvest it to anticipate and control you, and SaaS makes a business rent its own brain back ('you're paying rent on your own data — to run a company you own'). His qualifying question for any AI vendor is one binary: 'Do your clients own it?' — yes means control. The doctrine fuses his worldview, his wound (a partner in federal prison, the destroyed legacy of notes), and his pitch into one sentence, and extends to the last durable asset: your name ('you can only burn your name once' — the mini-mogul play). The 05:34 AI-overlords/UBI rant is the darkest, most urgent articulation captured on camera.",
    "timestamps": [
      "00:15:54",
      "00:16:37",
      "00:17:15",
      "00:17:54",
      "00:18:42",
      "01:05:56",
      "01:06:24",
      "01:06:44",
      "01:08:24",
      "01:08:45",
      "01:10:28",
      "05:34:23",
      "05:34:51",
      "05:35:41",
      "05:36:07"
    ],
    "develop_into": [
      "'Do You Own It?' — recurring LinkedIn video segment where every AI-vendor and business conversation ends on the one binary question; doubles as the CTA phrase across all platforms",
      "Lead magnet: 'The Ownership Audit' — 10 questions scoring how much of a founder's business is rented (Notion, ClickUp, Salesforce, CRM data) vs owned",
      "LinkedIn carousel: 'A million likes on Instagram vs a million likes on your own software' — rented rails vs owned rails economics, closing on the binary question",
      "Site manifesto: lift the 05:34 AI-overlords/UBI passage nearly verbatim as the 'why now' section of the machine-that-builds-machines site",
      "LinkedIn text post: 'You can only burn your name once' — reputation as the only durable asset once AI equalizes capability",
      "Merch/campaign line: 'KILL THE MACHINE. OWN YOUR SHIT.'"
    ],
    "platforms": [
      "LinkedIn",
      "YouTube",
      "Lead magnet / website",
      "Email newsletter",
      "Merch"
    ]
  },
  {
    "theme": "Ten Skyscrapers in 30 Days — the AI Speed Collapse",
    "description": "The flagship explainer: he is building what took 10,000 people three years, alone, in 30 days — and nobody around him can process it ('you'd feel like you'd seen a ghost'). He names Claude by name, says timelines move so fast he keeps making new promises, and holds the paradox out loud: 'this is dire AND everything's okay; there's time AND we need to move.' His differentiating honesty: 'I'm not the most capable. I'm just first to market' — and the gap between what the layperson knows ('what's Claude?') and what is actually happening is 'bigger than ever.' The dad-conversation framing makes it land for normies; 'you guys need a fucking hug' is the compassionate flip side.",
    "timestamps": [
      "00:11:34",
      "00:12:03",
      "00:12:42",
      "00:13:04",
      "00:13:32",
      "00:19:00",
      "01:15:08",
      "01:24:47",
      "01:25:43",
      "01:27:35",
      "01:43:46",
      "01:48:40",
      "01:49:03",
      "03:32:31",
      "04:12:30",
      "04:16:45"
    ],
    "develop_into": [
      "Flagship YouTube long-form: 'Ten Skyscrapers in 30 Days' — the dad conversation animated in the layered stop-motion technique (hand-drawn towers assembling frame by frame, then ten of them), Dehancer-graded",
      "LinkedIn positioning post: 'I'm not the most capable. I'm just first to market.' — radical honesty that converts urgency into credibility",
      "Email: 'People are still asking: what's Claude?' — the widening AI gap and building your own container before the masses take your thoughts; CTA to book a call",
      "Empathy short + email: 'You guys need a fucking hug' — the acceleration-disorientation piece for overwhelmed normal audiences",
      "Keynote opening act: the speed-collapse story as act one of the machine-that-builds-machines stage talk"
    ],
    "platforms": [
      "YouTube",
      "LinkedIn",
      "Email newsletter",
      "Keynote"
    ]
  },
  {
    "theme": "The Consciousness Upload — the Machine That Builds Machines",
    "description": "The business thesis stated plainly on camera: the product is the founder's consciousness uploaded into owner-controlled software. He describes the identical offer for a $30M HVAC company and for a multi-hyphenate personal brand, and stacks proof in real time: the kill list, ~70% of software hard costs slashed, whole teams onboarded in 24 hours 'because the software came from the founder,' clients finishing trained to build it themselves — and Sunday thank-you notes asking 'how can I pay you more?' The prophecy layer: personal software kills YouTube the way YouTube killed CNN, and when AI equalizes capability, trust and loyalty decide who gets bought from. Gary compiling his book daily is the same thesis applied to himself.",
    "timestamps": [
      "01:07:05",
      "01:07:24",
      "01:07:44",
      "01:08:02",
      "01:11:16",
      "01:12:00",
      "01:12:53",
      "01:13:24",
      "01:14:10",
      "01:42:27",
      "01:49:57",
      "01:50:38",
      "01:51:01",
      "02:00:28",
      "05:44:18"
    ],
    "develop_into": [
      "LinkedIn case-study post (James's lane): 'We cut 70% of a client's software spend and onboarded the entire team in 24 hours — because the software came out of the founder's head,' with the 01:49:57 clip as native video",
      "Lead magnet: 'The Kill List' — one-page worksheet auditing the subscriptions a custom build replaces, in his exact on-camera language",
      "Case study asset: 'The 30-Day Plumbing Company Rebuild' — ServiceTitan replaced, $30–40K/month saved, with the 01:12:53 audio as embedded proof",
      "VSL / lead magnet: 'The One-Shot Prompt' — how a business's consciousness becomes owner-controlled software in a single prompt, closing on the fridge-from-a-3D-printer prophecy",
      "PR/podcast booking hook: 'The founder who uploaded his consciousness into an AI named Gary — and now Gary is writing his memoir'",
      "Recurring on-screen character: Gary the AI fact-checking Spencer's self-mythology with hard data (85,000 words a month, step counts) — and the data keeps proving the myth half-true"
    ],
    "platforms": [
      "LinkedIn",
      "YouTube",
      "Podcast / PR",
      "Lead magnet / website"
    ]
  },
  {
    "theme": "Prophecy With a Disclaimer — the 2029 Split",
    "description": "He realized his prophecy at age seven; twenty years of voices and images are now landing 'with such precision it's freaking me out.' The developed prediction: the period to 2029–2030 is 'jarring' — billionaires fund UBI out of self-interest, humanity splits into sovereigns who 'play above the game and within the game' and consumers inside the Matrix — and his signature move is refusing both doom and contempt ('some people find joy within that system'; 'I'm inherently lazy'). Every prophecy beat is paired with the self-administered credibility check: 'this is not truth — it's what I'm hearing,' 'there could be some manic grandiose narcissism in this,' 'not the savior, definitely on the team.' That pairing is the publishable formula that lets mainstream audiences receive the prophet material.",
    "timestamps": [
      "00:02:02",
      "00:02:39",
      "00:04:20",
      "00:05:09",
      "00:05:24",
      "00:10:16",
      "00:14:49",
      "00:22:53",
      "00:24:11",
      "02:42:04",
      "02:43:59",
      "02:45:20",
      "02:46:18",
      "05:26:28",
      "05:47:41",
      "05:54:06"
    ],
    "develop_into": [
      "YouTube long-form essay: 'My 2029 Prediction: UBI, Sovereigns, and the Split' — chaptered from the 02:42–02:47 prophecy run",
      "Editorial rule enshrined on the strategy site: every prophecy clip cold-opens with the disclaimer 'this is not truth — it's what I'm hearing'",
      "Carousel: 'Humanity is splitting into two modes' — creators vs consumers without contempt, closing on 'sovereignty and love vs enslavement for dopamine'",
      "Carousel: 'Money is simple sugar. Community is complex carbs.' — why under-capitalized founders band together fastest before 2029",
      "Keynote north-star section: gold mage, new civilization, and the 'miracle tour' operating mode as the brand's mission language",
      "Merch pair: 'Not the savior. Definitely on the team.' / 'Play above the game. Play within the game.'"
    ],
    "platforms": [
      "YouTube",
      "LinkedIn",
      "Instagram",
      "Keynote",
      "Merch"
    ]
  },
  {
    "theme": "Controlled Mania — Downloads as the Creative Operating System",
    "description": "His R&D process explained in his own words: visions arrive 'like watching a thousand movies at the same time,' fever dreams evolved into 'creation outbursts,' and the download builds a physical charge that must be discharged — recording it, or exertion-to-failure — or it burns him out. The contrarian mechanics: he distrusts his own intuition (influenceable) and trusts the 'knowing'; hoarding downloads is greed — 'dark wizardry'; interruption mid-download is a 'spiritual car wreck.' He names his state live ('the dog has run,' 'six and a half right now; eight to ten for days'), and the meta-truth justifies the whole strategy: the output IS the regulation — 'if it's recorded, it becomes real.' Anti-guru twist: he is done with shock tools — cold plunge is fever PTSD for him.",
    "timestamps": [
      "00:57:27",
      "00:58:00",
      "00:58:45",
      "00:59:12",
      "01:00:47",
      "01:02:29",
      "01:03:53",
      "01:40:21",
      "01:54:18",
      "03:32:08",
      "03:45:07",
      "03:46:40",
      "04:08:03",
      "04:08:47",
      "04:11:55",
      "04:28:53",
      "04:30:27"
    ],
    "develop_into": [
      "Shorts series: 'Downloads' — each episode opens on a documentary-style cover that expands into the video, mapping 1:1 onto the thumbnail-expansion stop-motion mechanic; episode 1 is the documentary-cover explanation itself",
      "Signature visual device: the on-screen intensity meter (1–10 gauge) sourced from his own live self-rating, tracked by viewers across every vlog episode",
      "Podcast/interview talking point: 'Controlled mania — what Tesla and AI builders have in common,' with the Chris-Tesla exchange as the pull quote",
      "Vlog banner: 'Public Therapy Session' — he names it on camera; the raw confessional strand distinct from the teaching shorts",
      "Contrarian wellness short: 'Cold plunge is trauma re-enactment for me' — engineered comment-bait for the biohacker audience, ending on foundational daily practices",
      "Carousel: '5 signs you're downloading more than you can consume' — greed/dark wizardry, blue days, no compression, urgent-vs-shiny confusion, spilling on unresourced friends"
    ],
    "platforms": [
      "YouTube Shorts",
      "Personal vlog",
      "Podcast / PR",
      "Instagram",
      "LinkedIn"
    ]
  },
  {
    "theme": "Containment — the Named Discipline of the Next Epoch",
    "description": "The session's biggest self-referential rhyme, made official by Kai's words: he has mastered penetrating the world with his will — this season is containment, because 'penetration without containment does not equal sustainability.' The suite of laws: brake is the new gas; restraint is the new attainment; eat monsters quickly, taste angels slowly; poison is dosage (Alan Watts as proof — he found the edges by going past them); nibbles and sips, no chugging; and as velocity increases, touch must lighten (the sanding metaphor). The engine underneath: strategic celibacy — sexuality was his FIRST mastery, and the contained charge is a creative superpower no drug matches. Compression physics closes it: the further you pull back, the bigger the launch (Colonel Sanders in his 60s).",
    "timestamps": [
      "01:02:11",
      "01:22:29",
      "01:23:11",
      "01:23:43",
      "02:05:01",
      "02:06:34",
      "02:08:09",
      "03:16:26",
      "03:17:28",
      "04:59:51",
      "05:10:22",
      "05:29:34",
      "05:40:11",
      "05:51:40",
      "05:58:38",
      "05:59:52"
    ],
    "develop_into": [
      "Signature series: 'Containment' — a named content week anchored by the four restraint sticky notes (restraint/attainment, monsters/angels, dosage, nibbles-and-sips)",
      "Merch + flagship stop-motion short: 'BRAKE IS THE NEW GAS' with the downhill-luge explainer animation",
      "YouTube long-form: 'What Killed Alan Watts' — the dosage/poison framework applied to founders (work, alcohol, content, even meditation)",
      "YouTube long-form: 'The Builder's Battery' — chaptered from the celibacy, containment, and jet-fuel clips; contained desire as the only compounding performance enhancer",
      "LinkedIn compression post: 'Colonel Sanders franchised in his 60s — the longer it's held back, the bigger the launch,' pre-framing the skyscraper launch campaign",
      "Carousel/newsletter: 'Nibbles and sips, no chugging' — abundance-consumption etiquette remapped to attention, dopamine, and content bingeing"
    ],
    "platforms": [
      "YouTube",
      "LinkedIn",
      "Instagram",
      "Merch",
      "Email newsletter"
    ]
  },
  {
    "theme": "The Genie Protocol — Precise Language Fused With AI",
    "description": "His existing Precise Language framework welded to the AI moment: AI is a genie, and the danger is vague wishes with dire consequences — requests must be clear, precise, and values-stated. The cleanest on-camera statement of what he sells: AI is a mirror of consciousness, so vague people get vague AI; precision is 'calibration between consciousnesses, like CB radios' — and it is why his clients' token costs are absurdly low. He live-demonstrates the discipline, catching his own voids mid-sentence on camera. The adjacent doctrine: truth is data — memory is feeling, the recording is fact, 'the recording is the way back home' — which justifies both the 6-hour session and his software worldview (systems that record reality end arguments).",
    "timestamps": [
      "00:03:05",
      "00:10:16",
      "00:20:53",
      "00:21:10",
      "02:25:08",
      "04:38:59",
      "04:39:33",
      "04:40:37",
      "04:41:02",
      "04:43:23",
      "04:44:06",
      "04:45:00",
      "05:01:47"
    ],
    "develop_into": [
      "Mini-course / lead magnet: 'The Genie Protocol' — how to make precise, values-aligned requests to AI; the direct bridge from this footage to the Conscious Creation site",
      "Email: 'Your AI isn't dumb. It's a mirror.' — the AI-reflects-consciousness riff closing into the precise-language offer",
      "Carousel: 'Gaslighting ends where the tape begins' — five frames from feeling-vs-fact to 'the recording is the way back home'",
      "Product teaser: 'The Referee' — record any disagreement, AI transcribes it and shows each side exactly what they said; a demo of the software business disguised as a relationship tool",
      "Shorts compilation: Spencer catching his own voids live on camera ('unlimited capacity — that's a void') as proof the discipline is real",
      "Carousel: 'Before You Play Detective' — the three gates for hyper-awareness, closing on 'bring language to the timelines and the decision makes itself'"
    ],
    "platforms": [
      "Lead magnet / website",
      "Email newsletter",
      "LinkedIn",
      "YouTube Shorts",
      "Instagram"
    ]
  },
  {
    "theme": "Integrity Is the Magic Trick — Zero Impedance",
    "description": "His most complete teaching framework, and the spine of the finale: integrity is keeping your word when there are zero consequences and zero witnesses ('between you and God'); perfection = intentions, commitments, and actions identical; confidence is manufactured by behaving identically to your future projections, trained through micro-commitments (soda-can labels facing forward, the 15-minute gym rule) and closed loops (the Maserati on hold since 2009, the childhood go-kart). The payoff claim: full integrity = zero impedance between intention and outcome = instantaneous manifestation — 'the bolder the prediction, the more magnificent the magic.' His differentiator vs generic manifestation content is receipts: 3:45am synchronized texts, the Q2 declaration landing on the 15th, and the night literally ending with the magic-trick re-enactment of how the shoot itself was predicted into existence.",
    "timestamps": [
      "00:39:02",
      "00:42:54",
      "00:43:17",
      "03:39:45",
      "03:41:34",
      "03:42:12",
      "04:32:24",
      "04:33:08",
      "04:34:33",
      "05:36:45",
      "05:37:20",
      "05:41:09",
      "05:44:18",
      "05:52:46",
      "05:53:35",
      "06:03:54"
    ],
    "develop_into": [
      "LinkedIn carousel: 'Integrity is the primary KPI of being a human' — the definition, the chair, the relationship, the business, and the closer 'better strategy or different network'",
      "LinkedIn micro-post: the soda-can rule — micro-integrity as the gym for macro-confidence; 'No one dies if you don't. That's exactly why you do.'",
      "Community challenge / lead magnet: revive the '100 Day Monster Challenge' — 'Who's there to see if you cheated? No one. That's the point.'",
      "Documentary frame: 'I hired my cameraman with a magic trick' — the 06:03 finale re-enactment as the cold open of the full 6-hour film; the whole night becomes proof of 'say it, then make it real'",
      "LinkedIn post: 'I put a Maserati on hold in 2009. I never canceled it.' — open loops, self-trust, and the hidden tax of unfinished commitments; CTA: close / suspend-with-date / release your three biggest",
      "Email subject: 'The greatest magic trick of all time (it's pricing)' — walking the value-based custom-quote model"
    ],
    "platforms": [
      "LinkedIn",
      "YouTube",
      "Email newsletter",
      "Lead magnet / website"
    ]
  },
  {
    "theme": "The Pattern — Rise, Woman, God-Mode, Loss",
    "description": "His life since 17 as one repeating loop: good idea, fast money, a woman arrives, omnipotence ('oil paintings in the foyer'), then the prize snatched at the rim — 'monster LeBron' blocking the shot. The betrayal ledger sits inside it: the partner who stole half a million (188 months in federal prison), the Seventh Level $1M opportunity, the ex who destroyed his 'legacy of notes' — all recounted as pattern-data now, not open wounds ('it's not triggering me... I'm holding steady'). The live stakes: the current moment is explicitly the test of whether the cycle finally closes clean — 'is this happening again or is this a beautiful closing of the loop?' This is the master narrative arc of the full 6 hours.",
    "timestamps": [
      "00:32:14",
      "00:32:49",
      "00:33:11",
      "00:33:35",
      "00:34:25",
      "00:35:28",
      "00:36:32",
      "00:37:26"
    ],
    "develop_into": [
      "YouTube long-form: 'The Pattern — why I lose everything every time I win' — a 12-minute three-act arc with chapter cards; the chunk supplies the complete structure",
      "Flagship 60-second animated short: the monster-LeBron block — a hand-drawn LeBron layer swatting the shot over Spencer's frozen finger-roll, in the stop-motion style",
      "Email: 'The man who stole my life savings got 188 months. Here's what I got.' — the dodged-bullet story landing on what he built from the wreckage",
      "LinkedIn long-post (vulnerability lane only): 'The meanest thing anyone ever did to me' — the destroyed notes → why every client build is backed up, decentralized, and client-owned; the wound as the warranty",
      "Documentary spine: the Pattern as the master arc structuring the full 6-hour film edit, with 'closing the loop clean' as the unresolved ending"
    ],
    "platforms": [
      "YouTube",
      "Email newsletter",
      "LinkedIn",
      "Personal vlog"
    ]
  },
  {
    "theme": "The 14-Day Sprint — Support Me or Get Out of the Way",
    "description": "The recording is explicitly the eve-of-battle ritual for the June 22–July 6 software-completion sprint — the real-time stakes the whole strategy anchors to. Born in the shower as a 'To Whom It May Concern' letter: for two weeks he needs SUPPORT, not space — art-school environment, snacks, sleep, an aunt as nanny, a two-week inhale-exhale. His operating rules are unusually concrete: protect the peace, engineer the environment not the process, signal over noise (Jobs/Musk), cut distractions that pull creative power, hard stop at two weeks or the power-up mode does damage. The night's stated deliverable is the AI-distilled requirements doc 'so nobody has to watch three hours' — the recording documents its own purpose.",
    "timestamps": [
      "00:31:23",
      "00:58:45",
      "01:42:27",
      "01:44:53",
      "01:45:45",
      "01:49:38",
      "01:51:28",
      "01:57:36",
      "02:14:23",
      "02:15:08",
      "02:17:08",
      "03:00:01",
      "03:01:37",
      "03:03:31",
      "05:08:21"
    ],
    "develop_into": [
      "LinkedIn open-letter: publish the actual 'To Whom It May Concern' letter — 'for the next two weeks I don't need space, I need support' — as day one of the launch campaign, run by James",
      "Daily vlog series: 'The Two Weeks' — the sprint documented as Episodes 1–14 with this recording as Episode 0; the 'I'm a little intimidated' admission is the Episode 0 cliffhanger",
      "LinkedIn carousel: 'The Founder Sprint Protocol' — five rules verbatim: the game is containment, protect the peace, signal over noise, feed the beast, hard stop at two weeks",
      "Campaign kickoff post: 'I recorded 6 hours so my people only have to read 6 minutes' — a live demo of the consciousness-upload product and the perfect first post of the 200-piece rollout",
      "Build-in-public reel: 'I don't need compliments, I need participation' — comment prompts and daily check-ins that make the audience his reality anchor during the sprint",
      "Merch: 'SUPPORT ME OR GET OUT OF THE WAY' / 'The job's not finished.'"
    ],
    "platforms": [
      "LinkedIn",
      "Personal vlog",
      "YouTube",
      "Instagram",
      "Merch"
    ]
  },
  {
    "theme": "The Prophet's Burden — Fevers, Sensitivity, and the Forge",
    "description": "The human-interest spine and the reason the camera exists: 106.5° fevers with no virus reframed as capacity-building, childhood fevers that synced with his mother's chemo cycles — his body has always processed other people's consciousness as literal sickness — 24 pounds gone in 32 days without trying, and a nervous system 'in the danger zone: I have five days before something bad happens to me.' The support economics are double-edged: asking for help gets denied 90% of the time, so he spent a year deliberately engineering a support system 'for this very moment.' He chose the forge over the escape ('there was no Xanax in the house — the forging of the balls required to hold the charge'), carries the guilt of being 'too much' after 25 years unseen (the China/hot-dog analogy), and converts sensitivity into shipping because 'just sit with it' is advice for other people. Receiving — graciously, skillfully, '1+1=11' — is the growth edge, proven by wiring Chris $1,000 on camera.",
    "timestamps": [
      "00:01:23",
      "00:05:57",
      "00:25:32",
      "00:26:40",
      "00:29:39",
      "01:34:54",
      "01:35:16",
      "03:04:38",
      "03:08:35",
      "03:13:10",
      "03:25:07",
      "03:27:41",
      "04:19:33",
      "04:21:44",
      "05:03:40",
      "05:05:15"
    ],
    "develop_into": [
      "Top-of-funnel short: 'I lost 24 pounds in 32 days without trying' — body-reset hook whose payload is the fever-with-no-virus reframe; thumbnail is the raised wine glass",
      "YouTube emotional centerpiece: 'The Trough' — a 25-minute cut (accidental habanero → chemo story → burnout inventory → why the camera exists), with Chris's caretaking as the B-story",
      "Vlog episode: 'The night my cameraman became my coach' — he paid Chris $1,000 and facilitated ketamine so Chris would listen; by hour four Chris is running subconscious-mapping exercises on HIM",
      "Stop-motion short: the China/Chicago-hot-dog analogy animated frame by frame over the 01:35:16 audio — unseen for 20 years, made delicious",
      "LinkedIn founder-resilience post: 'There was no Xanax in the house. That was the point.'",
      "LinkedIn two-parter: 'Measure your wealth by how many wires you send' (with the $1,000 receipt) paired with 'The art of receiving — 1+1=11'"
    ],
    "platforms": [
      "YouTube",
      "Personal vlog",
      "LinkedIn",
      "Instagram"
    ]
  },
  {
    "theme": "Masculine Code — Duty, Mission, and the Sword",
    "description": "The hard-edged men's vein, distinct from the AI material: God first, mission first — 'the mission is of God,' pre-negotiated even with his mother; forgive freely but cut instantly ('one swipe of the sword'); every relationship subject to 'the test of the mission.' Duty is follow-through regardless of circumstance ('no one gives a fuck — do your duty'), you carry deployable modes including the immovable one where 'sometimes you look like a dick,' and the deed done out of duty creates the feedback loop: when they light up, that is your instruction to give more. Underneath: the true-gentleman calibration that shocks women's nervous systems, the hero who wants real missions not false alarms, and his parents' sovereign interdependent marriage as the root model. He openly inventories the people he burns out and schedules the boundary conversations coming.",
    "timestamps": [
      "00:52:04",
      "00:52:32",
      "00:54:41",
      "00:55:09",
      "01:46:57",
      "01:47:22",
      "01:47:45",
      "02:12:33",
      "02:13:19",
      "02:28:24",
      "02:29:03",
      "03:19:41",
      "03:20:26",
      "03:21:19"
    ],
    "develop_into": [
      "LinkedIn carousel: 'You Have Modes' — day-off, creative, productive, duty, immovable; final slide: 'Sometimes you look like a dick. Ship anyway.'",
      "LinkedIn post: 'The deed is done out of duty' — translated to service businesses: read the customer's light-up as routing data for where to invest next",
      "Polarizing short: 'One swipe of the sword' — the test-of-the-mission loyalty doctrine, captioned clean with raw video",
      "Men's short series: 'Field notes from a wizard in courtship' — One Page at a Time, Don't Make Me Suit Up, Couple Shit in the Ether — deliberately separated from the AI content lane",
      "Lead magnet: 'The Burnout Inventory' — list everyone you lean on, rate the burn honestly, schedule designated bullshit-discussion time, draw the boundary diagram"
    ],
    "platforms": [
      "LinkedIn",
      "YouTube Shorts",
      "Instagram",
      "Lead magnet / website"
    ]
  },
  {
    "theme": "Love Relocates — the Relationship Alchemist",
    "description": "His Precise Language loss-void doctrine lived out in romance: he never stops loving anyone — he relocates them to a distance where their chaos can't reach his life; relationships evolve, they don't end. The current relationship is mirror and medicine: the intensity he imposed on every woman reflected back to produce true empathy ('the cake was in the fridge the whole time'; 'was I not enough or were you not capable?'), changing behavior as the only real admission of fault. The frameworks are complete and teachable: trade expectations for appreciation but never drop standards ('I'm paying for the sins of previous men — patience is strategy'); one good woman is jet fuel, 10,000 admirers are gasoline; curiosity converts incompatibility into intimacy (the rental-car sound-system story); calibrated empathy that knows when to break the fourth wall ('are we fighting the way kittens roll on the ground?'). Edit rule: cut to the universal principle, strip identifying detail — the specific beats stay vlog-tier at most.",
    "timestamps": [
      "00:38:23",
      "00:46:20",
      "00:47:41",
      "00:53:37",
      "01:30:17",
      "01:38:21",
      "01:56:22",
      "02:09:35",
      "02:11:28",
      "02:19:54",
      "02:33:50",
      "02:47:43",
      "02:54:28",
      "03:50:14",
      "05:17:46",
      "05:21:36"
    ],
    "develop_into": [
      "Sub-personality channel strand: 'The Relationship Alchemist' — keeps dating content from diluting the business channel; five episodes ready from one chunk alone (find the interest, bad timing, self-respect, receiving, love at a distance)",
      "Quote-card two-beat: 'Bad timing is either patience training or a rescue' → 'the person you thought was it introduces you to the person that IS it'",
      "Teaching short (re-shot clean, zero personal detail): 'Trade expectations for appreciation — but never drop your standards'",
      "Email: 'I never stopped loving any woman I've ever loved' — pivoting to how he prunes projects and clients the same way: nothing lost, everything relocated",
      "Evergreen IG reel: 'The Last First Page' — book pages turning in stop-motion, stopping on page one; caption pulls the 'greatest love story of all time' line",
      "Book teaser: cut every 'Sidekick' mention across the 6 hours into one trailer and stand up a waitlist page before the book exists"
    ],
    "platforms": [
      "YouTube",
      "Instagram",
      "Personal vlog",
      "Email newsletter"
    ]
  },
  {
    "theme": "The Shapeshifter's Deck — Sub-Personalities and the Sticky-Note Oracle",
    "description": "The format engine of the entire 200-piece strategy, and the clearest on-camera articulation of the Merlin archetype: artists and tech guys each claim him because he shapeshifts into an authentic version they recognize — archetypes are FRAMES you consciously put on (King, Prince, Joker, the tyrant-on-purpose, the pit bull), and 'it's not about perspective, it's about mode.' Performance IS authenticity: 'nobody would watch the movie where everything goes right.' The night births The Wisdom Originator — named, tagline-ed, AI-illustrated, and given its Gollum antithesis inside 10 minutes — and the shoot becomes self-aware when James declares 'all of your content's already done — every one of these is a video' and Chris names the sticky notes a tarot deck. The notes are 'frames of wisdom... frames you operate from in different circumstances' — simultaneously the episodic format, the merch, and the table of contents of the book Gary compiles daily ('I'm Just Trying to Tell a Story' — Forrest Gump meets Tucker Max).",
    "timestamps": [
      "00:45:24",
      "00:45:46",
      "01:59:19",
      "02:00:28",
      "02:01:48",
      "02:32:51",
      "02:33:31",
      "03:30:22",
      "03:36:56",
      "03:38:11",
      "03:51:17",
      "04:45:48",
      "05:11:52",
      "05:14:20",
      "05:15:50",
      "05:27:11",
      "05:39:46",
      "05:58:38"
    ],
    "develop_into": [
      "Flagship shorts series: 'The Sticky Note Sessions' — 50+ episodes; overhead stop-motion card-draw, the note expands into the talking-head clip, freeze on the NEXT note as the end-thumbnail (the signature mechanic applied literally)",
      "Improv variant: 'The Sticky Note Oracle' — Chris blind-draws a note, Spencer teaches it cold; he brands the format himself ('it's like Whose Line Is It Anyway')",
      "Recurring branded character: The Wisdom Originator — the already-generated AI image as an intro sting before teaching clips, a 'BESTOW' merch line, and the two-panel Antithesis carousel series (Bestower vs Gollum-hoarder)",
      "Book pre-launch engine: serialize 'I'm Just Trying to Tell a Story' in public — each sticky note becomes one LinkedIn text-post parable plus an IG image of the handwritten note; meta-hook: Gary compiles the book daily",
      "Lead magnet: 'The Frames' — a one-page field guide to the deployable modes (Provider, King, Pit Bull, Conductor, Tyrant-on-purpose) and the circumstance that calls for each",
      "Art-print/merch set: the actual handwritten sticky notes reproduced as physical prints ('Restraint is the new attainment,' 'I'm already dead, so let's dance')"
    ],
    "platforms": [
      "YouTube Shorts",
      "Instagram",
      "LinkedIn",
      "Merch",
      "Lead magnet / website"
    ]
  },
  ...s2Themes,
]

export const arcs: Arc[] = [
  {
    "arc": "The Magic Trick: A Film That Knows It's a Film",
    "description": "The master frame of the entire recording. It opens with Spencer checking his hair on camera ('this is a little behind the scenes') and closes 6 hours later with him calling 'Action' and re-enacting the phone call that created the shoot — a perfect self-referential loop. In between, the film repeatedly wakes up to what it is: a journal entry that becomes content, a campaign asset, a consciousness upload, a public therapy session, and finally a demonstrated miracle. Every fourth-wall break is a beat in this arc: direct addresses to the future audience, instructions to the future editor, the camera cutting mid-sentence, the naming session ('Diaries of a Little Bitch'), and the moment the sticky-note session realizes it IS the content strategy. This arc pays off outside the footage too — the next-morning Valeria debrief (200 pieces, six months of content) is the epilogue.",
    "beats": [
      {
        "timestamp": "00:00:18",
        "beat": "On-camera hair check — 'check check check... you can talk back to me, this is a little behind the scenes.' The film opens aware of itself."
      },
      {
        "timestamp": "00:09:57",
        "beat": "The viewer contract: 'this is more of a journal entry than a piece of content — if you're seeing this as content, you were meant to see it.'"
      },
      {
        "timestamp": "00:37:48",
        "beat": "First direct address to the future audience — 'to any one of you that may happen to come across this' — confessional flips to broadcast mode."
      },
      {
        "timestamp": "01:58:44",
        "beat": "The machinery breaks into frame: camera cuts mid-sentence, 'Camera speed... Have we been recording?'"
      },
      {
        "timestamp": "01:59:19",
        "beat": "The recording names itself a campaign asset: 'Once the product is done in July, it's just a book tour at that point. This is a campaign.'"
      },
      {
        "timestamp": "02:32:51",
        "beat": "The shoot's origin story told inside the shoot: James's 'bro, all of your content's already done — every one of these is a video.'"
      },
      {
        "timestamp": "03:03:31",
        "beat": "The consciousness-upload thesis stated mid-upload: 'put this into an AI... this is what I require... I'm only telling you because I trust you.'"
      },
      {
        "timestamp": "03:45:07",
        "beat": "The artifact names itself at its lowest-energy moment: 'What do we name this? Diaries of a Little Bitch.'"
      },
      {
        "timestamp": "04:38:42",
        "beat": "The machine becomes self-aware: 'This is where the light hit me — your content for the next six months is done... this is YouTube shorts — gold.'"
      },
      {
        "timestamp": "04:53:15",
        "beat": "Negotiating with the future editor in real time: 'This is a public therapy session... Don't post the names of the people I mentioned.'"
      },
      {
        "timestamp": "04:59:51",
        "beat": "Direct address to post-production: 'Pause for editing... you have some yellow on there' — hour five, the editor becomes a character."
      },
      {
        "timestamp": "05:55:48",
        "beat": "The film questions itself: 'Is this being shot in 4K?... Are you aware that we're doing content right now?'"
      },
      {
        "timestamp": "06:02:55",
        "beat": "1:15 AM — 'I think the wisdom originator is complete.' The session declares itself finished."
      },
      {
        "timestamp": "06:03:54",
        "beat": "'Action.' The re-enacted magic-trick phone call that hired Chris that morning — the film ends by performing its own origin story. Bold prediction, instant manifestation, magic with receipts."
      }
    ],
    "treatment": "This is the flagship long-form documentary's skeleton. Cold-open with the 06:03:54 magic-trick re-enactment (30–60s, no context), hard cut to the 00:00:18 hair check, then run the night chronologically with the fourth-wall breaks as chapter punctuation — every time the film wakes up to itself, cut a title card. Close by returning to the full magic-trick scene, now with all six hours of context loaded, and stinger with a card about the Valeria debrief (200 pieces / six months). Alternative cut: a 5–8 minute 'making of' companion short built only from these beats, published as episode zero of the whole content universe. The layered stop-motion thumbnail-into-video mechanic maps perfectly onto this arc: each fourth-wall beat is a 'thumbnail' the next chapter expands out of.",
    "title_ideas": [
      "The Magic Trick",
      "This Was Never Content",
      "A Film That Knows It's a Film",
      "The Six-Hour Journal Entry",
      "Action: How This Whole Thing Started"
    ]
  },
  {
    "arc": "The Discharge: Six Weeks of Pressure, One Night of Release",
    "description": "The emotional spine of the night. Six insane weeks — 106.5-degree fevers, synchronicities, zero relief — put Spencer's nervous system in a 'danger zone' with, by his own count, five days before something bad happened. Forty-eight hours of tools failed. So he hired a camera and a witness as a pressure-release valve. The arc runs: confession of the pressure → permission to go all the way ('full Jesus') → the mid-session realization that the recording is for him → the trough (habanero burn, 'guilty for taking up space,' the 'so good it's too much' paradox) → the comedy recovery (birth of the Wisdom Originator) → the false summit ('the charge is gone') at 3h45m → a second wind → and the final energy audit: 'Complete. Not tired. And it's super terrifying.' The thesis it proves: soul-on-fire work energizes instead of drains.",
    "beats": [
      {
        "timestamp": "00:01:23",
        "beat": "The stakes: 'The past six weeks has been insane... fevers at 106.5... for the first time ever brought to my knees.'"
      },
      {
        "timestamp": "00:09:30",
        "beat": "The commitment point: 'So let's go full Jesus. Why not? We're here.' Act-one turn — the next six hours only happen because of this sentence."
      },
      {
        "timestamp": "00:25:32",
        "beat": "The reveal of why the shoot exists: 'my nervous system was in a danger zone where I'm like, I have five days before something bad happens to me.'"
      },
      {
        "timestamp": "00:31:23",
        "beat": "The ritual discovers its purpose mid-sentence: 'I'm realizing as I'm saying this out loud... this is for me.'"
      },
      {
        "timestamp": "01:54:18",
        "beat": "The energy self-rating: 'You're actually seeing me on the downtick... I'm at a six and a half right now. When it happens, it's between an eight and a ten. For days.'"
      },
      {
        "timestamp": "03:04:19",
        "beat": "First named break, three hours in: 'Ultimately this content was for me' — the halfway confession."
      },
      {
        "timestamp": "03:26:00",
        "beat": "The full confession: 48 hours of tools failed, 'dancing with the devil,' camera and Chris hired as accountability — the recording explains its own existence."
      },
      {
        "timestamp": "03:28:49",
        "beat": "The bottom of the trough flips into the night's central paradox: 'Everything I ever asked for is actually happening — and it's so good that it's too much... my soul's getting excavated.'"
      },
      {
        "timestamp": "03:29:55",
        "beat": "Comedy recovery: the Wisdom Originator character is born on camera — 'I'm not the smartest, but I own it.'"
      },
      {
        "timestamp": "03:45:36",
        "beat": "False summit at ~10pm: 'The charge is gone. That was the intention of the night.' The tape runs two-plus more hours."
      },
      {
        "timestamp": "04:11:55",
        "beat": "The thesis, stated plainly: 'letting the dog run and being super clear about the next two weeks — that was the intention of all this. I wanted to be held accountable through documentation.'"
      },
      {
        "timestamp": "04:19:07",
        "beat": "The most vulnerable beat of the night: 'I guess I feel guilty for taking up space and being needy' — followed by five seconds of real silence on camera."
      },
      {
        "timestamp": "06:03:15",
        "beat": "The energy audit: 'Complete. Not tired. I feel complete... and it's super terrifying. This was fun. That's a wrap.'"
      }
    ],
    "treatment": "Cut as a 15–20 minute documentary short with a classic three-act structure and a deliberate false summit: Act I = pressure (00:01:23–00:31:23), Act II = descent and confession (01:54:18–03:28:49), the Wisdom Originator as comic relief hinge, 'the charge is gone' at 03:45:36 played as an ending that isn't — then a title card ('the tape ran two more hours') into the true resolution at 06:03:15. The 04:19:07 five-second silence is the centerpiece; let it breathe completely uncut. This arc also sub-clips into a founder-mental-health vertical series: danger zone / tools failed / it's too good / complete-not-tired as four standalone shorts that each link to the long cut.",
    "title_ideas": [
      "The Charge",
      "Five Days Before Something Bad Happens",
      "So Good It's Too Much",
      "Complete, Not Tired",
      "Letting the Dog Run"
    ]
  },
  {
    "arc": "The Thousand-Dollar Witness: Chris's Six-Hour Evolution",
    "description": "A complete two-hander character arc. Chris is hired on the spot that morning for $1,000; Spencer facilitates a ketamine experience so Chris will listen instead of talk. Across six hours the silent, dosed cameraman evolves through five distinct roles: witness (first interjection at 24 minutes) → mythmaker (naming Spencer 'Tesla,' the hollowing-out frame) → facilitator (timekeeping, steering with questions) → challenger ('you spilled today') → caretaker (ice pack and ice cream sandwich) → and finally coach and co-director (the desert test, stillness teaching, making Spencer put in headphones, calling framing). The arc completes in role reversal: the man dosed so he'd stay quiet ends the night directing the film, and the finale re-enacts the phone call where his own wishes (quit driving Uber, try ketamine) came true the same day. The buddy-movie texture of the entire recording lives in this thread.",
    "beats": [
      {
        "timestamp": "00:24:35",
        "beat": "The witness activates: first substantial interjection, 'How are you handling it right now?' Monologue becomes dialogue."
      },
      {
        "timestamp": "00:29:07",
        "beat": "Chris names the pattern from behind the camera: the 'hollowing out' — earning his seat as more than an operator."
      },
      {
        "timestamp": "00:58:45",
        "beat": "Chris canonizes the mythology: 'you're going to sound a lot like Nikola Tesla — the download, the design, the blueprints.' Spencer upgrades it to 'absolutely controlled mania.'"
      },
      {
        "timestamp": "01:06:24",
        "beat": "Chris connects the dots on camera: 'you were burned when it was in somebody else's hands, and now they're in prison' — co-authoring the ownership doctrine."
      },
      {
        "timestamp": "01:12:30",
        "beat": "The facilitator role becomes visible: Chris timekeeps ('30 more minutes') and Spencer instantly pivots from mystic to operator."
      },
      {
        "timestamp": "01:40:21",
        "beat": "First real pushback: 'you definitely spilled today... you're acting outside your frame' — and Spencer engages instead of deflecting."
      },
      {
        "timestamp": "02:08:46",
        "beat": "Chris adopts the vocabulary — maps the sexual-vs-creative-energy teaching onto his own life, then says 'I was getting a download.'"
      },
      {
        "timestamp": "03:11:43",
        "beat": "The caretaker: 'We cut' — Chris leaves frame to fetch an ice pack and an ice cream sandwich during the habanero crisis."
      },
      {
        "timestamp": "03:21:27",
        "beat": "The shoot's own arrangement surfaces: 'you burned me in my life... you also paid me, which helps' — brutal honesty between friends, on the payroll, on camera."
      },
      {
        "timestamp": "03:31:44",
        "beat": "The reveal: Chris has been running the camera on the tincture all night — the ketamine setup from the top of the day pays off in open dialogue."
      },
      {
        "timestamp": "04:13:30",
        "beat": "Role reversal completes: Chris becomes the coach — 'does this heaviness serve you?' — and teaches Spencer stillness meditation."
      },
      {
        "timestamp": "04:22:11",
        "beat": "The desert test: Chris guides Spencer through the visualization and decodes it live; the horse — the partner — is 'right next to me.'"
      },
      {
        "timestamp": "05:31:37",
        "beat": "The cameraman strikes back: Chris makes SPENCER put in headphones and receive a transmission. 'Thank you for getting me back in the boat.'"
      },
      {
        "timestamp": "05:48:38",
        "beat": "Full co-director: 'Stay in that recliner... go back just a little' — the hired listener is now producing the film."
      },
      {
        "timestamp": "06:03:54",
        "beat": "The payoff: the re-enacted hiring call. Chris's wishes — quit driving Uber, try ketamine — all came true that same day."
      }
    ],
    "treatment": "Two viable cuts. (1) 'The Cameraman' — a 10–12 minute two-hander documentary short told from Chris's side of the lens: open on the magic-trick call re-enactment, then track his five role shifts chronologically with lower-third labels (WITNESS → MYTHMAKER → FACILITATOR → CHALLENGER → COACH). (2) A 5-part vertical series where each episode is one role shift, each ending on the moment Chris crosses into the next role — cliffhanger structure built in. This arc is also the trust-texture layer of the flagship edit: whenever the long cut needs air between Spencer's teachings, cut to a Chris beat. The desert test (04:22:11) works as its own standalone 4–5 minute piece with the horse reveal as the emotional payoff.",
    "title_ideas": [
      "The Thousand-Dollar Witness",
      "The Cameraman Strikes Back",
      "Hired to Listen",
      "Chris Gets a Download",
      "Both Sides of the Lens"
    ]
  },
  {
    "arc": "The Sticky-Note Oracle: 50 Cards, One Deck, All of Them Tonight",
    "description": "The structural spine of the night and the engine of the entire 200-piece content thesis. The wall of handwritten sticky notes sits in frame for hours as a field of Chekhov's guns. James's off-camera verdict ('every one of these is a video') is retold as the shoot's origin; Chris renames them tarot cards; the ritual then evolves on camera through distinct mechanics — Spencer sequencing the deck live, a blind-draw game ('it's like Whose Line Is It Anyway'), Chris choosing notes by grid coordinates — until the third-act stakes are declared out loud: 'I have to do all of these tonight.' The countdown runs to the two most personal notes, the ones taped to his computer that travel everywhere: 'master containment' (the original void-clarifying note, the Precise Language framework applied to himself) and 'nibbles and sips.' The deck ends exactly where the man is.",
    "beats": [
      {
        "timestamp": "00:42:54",
        "beat": "First reach off-frame mid-thought ('let me grab, let me grab') — the table of props announces itself before the notes do."
      },
      {
        "timestamp": "02:01:48",
        "beat": "'Much like my sticky notes here' — the notes are recast as chapters of the memoir: every note is simultaneously a content piece AND a book chapter."
      },
      {
        "timestamp": "02:32:51",
        "beat": "Ignition: James's verdict retold — 'every single one of these is a fucking video.' Chris: 'I've been reading them as you've been talking.'"
      },
      {
        "timestamp": "02:33:31",
        "beat": "Chris names the deck: 'This is like a tarot card' — the metaphor that reframes the ritual for the rest of the night."
      },
      {
        "timestamp": "02:37:28",
        "beat": "Spencer sequences the deck live ('I want to do the second one from the end... it goes exactly with the music theme') — the notes have an emergent order."
      },
      {
        "timestamp": "04:32:24",
        "beat": "'It's been looking at me all night. Closed loop.' — the planted payoff: a note that sat in frame for hours becomes one of the night's strongest teachings."
      },
      {
        "timestamp": "04:38:42",
        "beat": "The strategy realization: 'this is where the light fucking hit me... this is YouTube shorts — gold.'"
      },
      {
        "timestamp": "04:42:53",
        "beat": "The ritual mutates: blind-draw game with Chris as dealer — 'it's not like tarot at all... it's like Whose Line Is It Anyway.'"
      },
      {
        "timestamp": "05:07:39",
        "beat": "Fully collaborative: Chris picks the next note by grid coordinates ('bottom right... five, six over') — the deck is now a shared game."
      },
      {
        "timestamp": "05:33:43",
        "beat": "The stakes declaration: 'I have to do all of these tonight. All of these tonight. Fuck. Okay. Thank you for getting me back in the boat.'"
      },
      {
        "timestamp": "05:39:46",
        "beat": "The machinery shows: stack logistics with Chris as the pile runs low — 'it adds its own layer of content.'"
      },
      {
        "timestamp": "05:58:16",
        "beat": "The original note: 'You've mastered penetration, now it's time to master containment' — 'one of the original reminders where I clarified the void.' The framework applied to its author."
      },
      {
        "timestamp": "05:59:14",
        "beat": "The final card: 'Nibbles and sips, no chugging' — the comedic-philosophical closer, demonstrated live with salt on the fingertips."
      },
      {
        "timestamp": "06:02:55",
        "beat": "Deck complete: 'I think the wisdom originator is complete.'"
      }
    ],
    "treatment": "Two products from one arc. (1) THE SERIES ENGINE: each note-reading is a standalone short — this is the 50+ episode 'Oracle Deck' vertical series, one card per episode, uniform format (note held to camera → teaching → landing line), published 3–4x/week across the 4-month calendar. Use the layered stop-motion technique on the note itself as the thumbnail-expands-into-video mechanic — the handwritten note IS the thumbnail. (2) THE RITUAL DOCUMENTARY: an 8–10 minute cut of the ritual's evolution (tarot naming → blind draw → grid coordinates → 'all of these tonight' → the final two notes), which doubles as the series trailer. Editorial notes: foreshadow 04:32:24 by cutting earlier B-roll of that note sitting in frame; the 05:59:14 episode keeps its opening joke in the vlog cut only and trims it for clean platforms.",
    "title_ideas": [
      "The Oracle Deck",
      "50 Notes, One Night",
      "Every Note Is a Video",
      "All of These Tonight",
      "Whose Wisdom Is It Anyway"
    ]
  },
  {
    "arc": "Eve of Battle: The 14-Day Sprint and the Road to 2029",
    "description": "The recording as a send-off ritual for the sprint that starts the next morning. Twenty minutes in, Spencer timestamps the night inside his prophecy timeline: 'the next two weeks is the catalyst of what happens between now and 2029.' The arc then documents a plan being born in real time: the 14-day software-completion window articulated on camera (and formalized the next morning in the Valeria debrief), the shower-download letter announcing it, the requests to everyone around him ('my peace is protected... support me or get out of the way'), the rare fear admission ('a part of me is a little intimidated by it'), the ambition ladder from software money to political influence, the flat-voiced singularity date, and the cosmic reframe that keeps it human: 'if it gets done in August, no one's going to die.' It closes on the purest mission statement of the night and the completion audit. This arc is the connective tissue between the footage and everything the footage is FOR.",
    "beats": [
      {
        "timestamp": "00:24:11",
        "beat": "The countdown starts: 'The next two weeks is the catalyst of what happens between now and 2029... it's happening in real time, on target with such precision it's freaking me out.'"
      },
      {
        "timestamp": "01:15:08",
        "beat": "The sprint is articulated on camera: 'If I can get these 14 days, I think I can automate this' — the same sprint formalized next morning in the Valeria debrief."
      },
      {
        "timestamp": "01:26:43",
        "beat": "Chris pins the outcome: a sales page demoing every software in two weeks. The honest stakes: 'I'm first to market and the machine will eat me — hence the sprint.'"
      },
      {
        "timestamp": "01:43:01",
        "beat": "The eve-of-battle manifesto: 'the next two weeks are going to require all of me... my request is that my peace is protected.'"
      },
      {
        "timestamp": "01:44:34",
        "beat": "The ultimatum: 'a power-up mode only good in short bursts... support me or get out of the way... feed the fucking beast.'"
      },
      {
        "timestamp": "01:49:38",
        "beat": "The crack in the armor: 'There's a part of me that's a little intimidated by it' — rare admission of fear inside the prophet persona."
      },
      {
        "timestamp": "02:04:33",
        "beat": "The ambition ladder extends: 'Once the machine turns on... that money, I think, will get me into Politico.'"
      },
      {
        "timestamp": "02:14:23",
        "beat": "The sprint's birth certificate: the shower download — a 'To Whom It May Concern' letter declaring the next two weeks are for completing the softwares, sent to a select few including his mom."
      },
      {
        "timestamp": "02:42:04",
        "beat": "The destination described: the 2029/2030 'jarring period' prophecy — UBI, sovereigns, split timelines, Chris adding 'the 2027 reset.'"
      },
      {
        "timestamp": "03:42:30",
        "beat": "Stated flat, no hedging: 'When is the singularity? 2029. The critical mass, sometime in 2029.'"
      },
      {
        "timestamp": "04:47:05",
        "beat": "The pressure reframed as a self-imposed precision game: 'I've got to get this done in the next two weeks... if it gets done in August, no one's going to die.'"
      },
      {
        "timestamp": "05:38:50",
        "beat": "The anti-celebration rule: 'Job finished? Don't think so' — don't stop running when you hear the whistle."
      },
      {
        "timestamp": "05:47:41",
        "beat": "The whole cosmology in 45 seconds: raise the vibration, bring humanity to the singularity, construct a new civilization — 'Go 2027, bitches.'"
      },
      {
        "timestamp": "06:03:15",
        "beat": "The send-off completes: 'Complete. Not tired.' The sprint starts in the morning."
      }
    ],
    "treatment": "Cut as a countdown-structured episode (12–15 min) with an on-screen clock ticking toward 'DAY 1' — every beat gets a timestamp chyron counting hours until the sprint begins. This is also the trailer engine for the skyscraper launch campaign itself: the 01:26:43 sales-page commitment and 02:14:23 letter are pre-launch assets — publish them AS the launch happens so the audience watches a documented prediction come true (the magic-trick mechanic applied to business). The prophecy beats (02:42:04, 03:42:30, 05:47:41) alternatively assemble into a separate escalating '2029' supercut for the existing 1000-day content pillar. LinkedIn gets the operator beats only (sprint, sales page, job-not-finished); the vlog gets the full mystic ladder.",
    "title_ideas": [
      "Eve of Battle",
      "14 Days",
      "The Catalyst",
      "On Target and It's Freaking Me Out",
      "The Night Before the Sprint"
    ]
  },
  {
    "arc": "Betrayal to Sovereignty: Why Every Client Owns Everything",
    "description": "The origin story of the business doctrine, assembled across the whole night. Three wounds: a business partner who stole his life savings (188 months in federal prison — and Spencer nearly took the fall), the November '24 girlfriend who robbed him at his lowest, and Carolina, the ex who put 12 years of handwritten notebooks in a blender — 'the meanest thing that's ever been done to me.' Chris makes the connection explicit on camera: 'you were burned when it was in somebody else's hands, and now they're in prison.' Out of the wounds comes the doctrine, delivered in escalating rants: own your shit, kill the machine, fuck IP, you're renting your own data, do your clients own it? The arc resolves in the product itself — the un-blendable notebook: consciousness backed up, decentralized, client-owned, one-shot-promptable. The most powerful sales narrative he has, because the philosophy is scar tissue.",
    "beats": [
      {
        "timestamp": "00:03:05",
        "beat": "The first wound: 188 months. If the co-conspirators had told the story differently, Spencer would be in federal prison for a crime he didn't commit."
      },
      {
        "timestamp": "00:15:21",
        "beat": "The doctrine in its rawest form: 'What do you think makes the AI so smart? It's your input... You want to kill the machine? Own your shit.'"
      },
      {
        "timestamp": "00:32:14",
        "beat": "The second wound, triggered by the location itself: November '24, the Seventh Level opportunity, the girlfriend who robbed him and destroyed his 'legacy of notes' within 24 hours of him asking for support."
      },
      {
        "timestamp": "01:05:14",
        "beat": "The manifesto: 'Fuck IP — the real IP is creating your own; I sell a process that sets clients free... The only game at the end of the day is: do you own it?'"
      },
      {
        "timestamp": "01:06:24",
        "beat": "Chris connects the dots on camera: 'you were burned when it was in somebody else's hands, and now they're in prison' — the wound and the doctrine fused in one sentence."
      },
      {
        "timestamp": "01:16:49",
        "beat": "The third wound, the deepest: Carolina put 12 years of notebooks in a blender. Chris's reframe: it had to go somewhere. Spencer: 'it's imprinted in my brain.'"
      },
      {
        "timestamp": "01:48:12",
        "beat": "The warning generalized: 'the masses are taking your thoughts... if you don't get out and create your own container, you're fucked.'"
      },
      {
        "timestamp": "01:12:53",
        "beat": "The proof: a whole plumbing company rebuilt and live in 30 days, ServiceTitan replaced, clients trained to build it themselves — 'how can I pay you MORE money?'"
      },
      {
        "timestamp": "05:34:23",
        "beat": "The second-wind rant at hour 5.5: 'you're renting your information from them for a business that you own... if you don't own it, how much do you trust whoever does?'"
      },
      {
        "timestamp": "05:44:12",
        "beat": "The resolution: the un-blendable notebook — 'infuse someone's consciousness with digital intelligence in a single one-shot prompt... perfection is the aim, calibration is the game.'"
      }
    ],
    "treatment": "Cut as a 3-part vertical series with documentary-chapter potential: PART 1 'The Wounds' (188 months → November '24 → the blender — pure story, no pitch), PART 2 'The Doctrine' (kill the machine → fuck IP → renting your own data — the rants, with Chris's 01:06:24 connection as the hinge between parts), PART 3 'The Machine' (30-day proof → one-shot prompt — the product as the answer to the wounds). Publish Part 1 first with zero business content; the doctrine lands twice as hard once the audience knows why it exists. Handle the Carolina beat (01:16:49) as a vulnerability beat, never a shock clip. The 00:15:21 rant trims to 00:15:54 for the business-safe LinkedIn cut; the full version is the viral one. This arc is the highest-leverage sales asset in the entire recording — it converts biography into positioning.",
    "title_ideas": [
      "The Blender",
      "Do You Own It?",
      "188 Months",
      "The Un-Blendable Notebook",
      "Scar Tissue: Why My Clients Own Everything"
    ]
  },
  {
    "arc": "The Greatest Love Story Ever Told: Containment as Courtship",
    "description": "The relationship thread woven through all six hours, and quietly the night's most complete story. It opens with a manifestation receipt ('I said Q2. I met her on the 15th'), roots itself in the prayer origin story (fast → prayer → 72 hours → the clients and the girl), and then becomes a study in deliberate pacing: the man whose intensity melted every previous relationship is consciously showing 4% ('more would melt her face'), buying all the dinner instead of taking her out, reading one page at a time, delaying the arc on purpose. The mirror beats give it depth — the cake in the fridge, 'it could have been this easy,' the empathy of receiving his own intensity back. The unplanned emotional payoff arrives in the desert test, when his subconscious places the horse — the partner — 'right next to me.' The arc closes on the note taped to his computer: master containment. He is not telling a love story; he is engineering one, on camera, in real time.",
    "beats": [
      {
        "timestamp": "00:38:11",
        "beat": "Chris opens the thread: 'How is the new girl different from the old one?' — and steers the next 20 minutes."
      },
      {
        "timestamp": "00:39:02",
        "beat": "Four seconds of deliberate silence, then the receipt: 'I said I was going to find my person in Q2. I met her on the 15th.'"
      },
      {
        "timestamp": "00:41:14",
        "beat": "The pacing thesis in its most romantic form: 'every page you read is one page closer to the end — if you want it to last forever, sound out the words.'"
      },
      {
        "timestamp": "00:46:20",
        "beat": "The mirror: his lifelong intensity reflected back so he can feel true empathy — 'starving my whole life while the cake sat in the fridge. Why would you do that to me? I'm 43.'"
      },
      {
        "timestamp": "01:30:17",
        "beat": "The origin story: the date, the prayer offer on Islam's holiest days ('I see the way you love people'), the fast — and within 72 hours, the clients and the girl."
      },
      {
        "timestamp": "01:36:12",
        "beat": "The identity shift: the seven-day broth fast around 'I am the man my queen requires,' and the gut-punch — 'it could have been this easy.'"
      },
      {
        "timestamp": "02:07:18",
        "beat": "The declaration: containment is 'absolutely unlimited... it has to be the greatest love story ever told.'"
      },
      {
        "timestamp": "02:17:08",
        "beat": "The pacing rule stated as ethics: 'It's too soon for me to ask the girl to hold that much. My instruction is to be cautious — not to melt her face.'"
      },
      {
        "timestamp": "04:01:21",
        "beat": "The number: 'Four percent. More would melt her face' — plus the honest audit of oversharing in the last 24 hours."
      },
      {
        "timestamp": "04:06:30",
        "beat": "The counterweight: 40 minutes of voice notes and zero apology — 'I've been hiding the mad scientist for years... the sun doesn't apologize for shining.'"
      },
      {
        "timestamp": "04:25:41",
        "beat": "The subconscious answers: in the desert visualization, the horse — the partner — is 'right next to me,' facing him. The night quietly resolves the question."
      },
      {
        "timestamp": "05:17:46",
        "beat": "'The last first page': the last first seduction of your life deserves the greatest love story of all time — take your time, sound out the words."
      },
      {
        "timestamp": "05:56:29",
        "beat": "The teaching generalized: 'Delay the arc' — you only fall in love for the first time once; stretch it."
      },
      {
        "timestamp": "05:58:16",
        "beat": "The payoff note, taped to his computer everywhere he goes: 'You've mastered penetration, now it's time to master containment... I want something sustainable.'"
      }
    ],
    "treatment": "This arc belongs to the personal-vlog channel, cut as a 4-part intimate series ('The Love Story'): EP1 The Receipt (Q2, the prayer, 72 hours), EP2 The Mirror (cake in the fridge, it could have been this easy), EP3 Four Percent (the containment discipline, sun-doesn't-apologize tension), EP4 The Horse (desert test payoff + the final note). Alternatively it runs as the B-plot of the flagship documentary — cut a love-story beat between every major business movement so the film breathes. Publishing gate: the prayer story (01:30:17) is deeply personal — get Spencer's explicit call before it ships; never name her. The one-page/last-first-page/delay-the-arc trilogy of shorts stands alone on any platform and doubles as founder pacing advice.",
    "title_ideas": [
      "The Greatest Love Story Ever Told",
      "Four Percent",
      "One Page at a Time",
      "The Horse Was Right Next to Me",
      "Don't Melt Her Face"
    ]
  },
  {
    "arc": "The Body Keeps the Tape: Fevers, Habaneros, and the Long Night",
    "description": "The physical arc of the marathon — the night told through Spencer's body. It opens with the fever mythology (106.5 with no virus, the body building capacity to hold joy; 24 pounds gone in 32 days) and then tracks the organism through six hours: the first drink, lighting up at the 90-minute act break, the metabolism-husky origin story, the steak dinner, and the night's great unscripted set piece — the accidental habanero, which becomes a live re-enactment of the fever lore ('very uncomfortable in a very familiar place') and unlocks the empath origin story: his childhood fevers synced with his mother's chemo cycles. The back half is endurance: hour-four checkpoint ('the dog has run'), the F-35 flow-state peak, the first fatigue crack (losing Alan Watts's name), and the final refutation of exhaustion: 'Complete. Not tired.' Food, substances, sweat, and pain function as the night's act breaks — and every discomfort turns into curriculum.",
    "beats": [
      {
        "timestamp": "00:05:57",
        "beat": "The fever with no virus: the body turning up the heat to build capacity — he starts sweating on camera mid-story, then stacks receipts (24 pounds in 32 days, sleep reset, first drink in memory in his hand)."
      },
      {
        "timestamp": "01:28:36",
        "beat": "The 90-minute act break: 'I'm going to light this' — the energy downshifts from operator crescendo to confessional mode."
      },
      {
        "timestamp": "01:34:23",
        "beat": "The physical onset timestamped: 'That's when my metabolism turned on... 30,000 steps... like a husky that you needed to take for a walk.'"
      },
      {
        "timestamp": "02:59:12",
        "beat": "First break check-in at 2.5 hours: Spencer reads the clock on camera; the endurance structure of the night becomes visible."
      },
      {
        "timestamp": "03:04:38",
        "beat": "The habanero mistake: an unplanned burn hijacks the session — sweating, groaning, pure physical comedy — and becomes a live re-enactment of the fever mythology."
      },
      {
        "timestamp": "03:06:50",
        "beat": "The burn becomes a teaching: intense pain collapses his many-perspectives superpower into a single point — demonstrated, not described."
      },
      {
        "timestamp": "03:08:35",
        "beat": "The empath origin story unlocked: his childhood fevers fell into rhythm with his mother's chemo cycles. 'When she got sick, I got sick.'"
      },
      {
        "timestamp": "03:11:21",
        "beat": "Relief as lesson: the ice pack and ice cream sandwich — 'self-soothing is better when someone else does it... ice cream sandwiches taste better from mothers.'"
      },
      {
        "timestamp": "03:35:56",
        "beat": "The meal-and-substance act break: 'we had some steak, we had some content... I'm ready for some drugs. My weed right here.'"
      },
      {
        "timestamp": "04:08:03",
        "beat": "Hour-four checkpoint: 'the dog has run'... 'Look at all my stickies. I have crayons fucking everywhere. It's just what's required.'"
      },
      {
        "timestamp": "04:18:17",
        "beat": "Discomfort as curriculum: the hot-sauce-after-vodka bit spawns the Discomfort List — 'you just hit me in the balls, I forgot about everything else.'"
      },
      {
        "timestamp": "04:30:27",
        "beat": "The lore pays off in the present: cold plunge as fever PTSD — 'I understand it's good for me. And I hate it so much.'"
      },
      {
        "timestamp": "05:23:33",
        "beat": "Flow-state peak, deep in hour five: the kaleidoscope of consciousness as 'a wind machine with an F-35 engine' seen in slow motion."
      },
      {
        "timestamp": "05:30:19",
        "beat": "The first crack: he loses Alan Watts's name — 'Why can't I remember his name? It's because it's very late.' The body starts paying."
      },
      {
        "timestamp": "06:03:15",
        "beat": "The refutation: seven-plus hours after the hair check — 'Complete. Not tired.' The physical proof of the soul-on-fire thesis."
      }
    ],
    "treatment": "Two uses. (1) TEXTURE LAYER for the flagship documentary: use these beats as chapter markers and time-of-night evidence — every meal, drink, and sweat beat gets a real-time clock chyron, so the audience feels the six hours in their own body. (2) STANDALONE COMEDY-TO-DEPTH SHORT: 'The Habanero Sequence' (03:04:38 → 03:11:21) cuts as a self-contained 3–4 minute piece with a perfect shape — slapstick burn → pain philosophy → mom's-chemo gut punch → ice-cream-sandwich resolution. It is the single best humanizer in the archive; publish it early to inoculate the dense teaching content. A third product: the 'fever lore' supercut (00:05:57 + 03:06:50 + 03:08:35 + 04:30:27) assembles the recurring mythology pillar for the YouTube character strategy. The food-and-discomfort motif also feeds a running-gag reel for the vlog.",
    "title_ideas": [
      "The Habanero Sequence",
      "106.5",
      "The Body Keeps the Tape",
      "Not Tired",
      "A Husky You Need to Walk"
    ]
  },
  ...s2Arcs,
]

export const physicalMoments: PhysicalMoment[] = [
  {
    "timestamp": "00:00:18",
    "description": "Spencer checks his hair on camera — 'always be looking at my hair... the volume I'm looking for... check check check' — vain, funny, completely unguarded.",
    "content_idea": "Recurring cold-open sting for the vlog series; loop it as a stop-motion micro-animation (hair assembling frame by frame); meme frame captioned 'always be checking.'"
  },
  {
    "timestamp": "00:06:28",
    "description": "Spencer starts visibly sweating mid-story while describing the 106.5° fevers — 'I'm even starting to sweat right now, talking about it' — the body reacting to the memory in real time.",
    "content_idea": "Do NOT cut this from the fever clip — the sweat is the proof. Punch in on it in the edit; also a candid still for the photo-album layer of the stop-motion technique."
  },
  {
    "timestamp": "00:07:30",
    "description": "Holds up his glass of wine: 'this wine here that I'm having is the first drink that I've had in...' — a prop with a story attached.",
    "content_idea": "Thumbnail frame for the 24-lbs/body-reset clip; the wine glass becomes a recurring photographed prop layer in the stop-motion system (drink level dropping across the 6-hour timeline as a visual clock)."
  },
  {
    "timestamp": "00:08:19",
    "description": "Set reset: Spencer and Chris break, adjust lights and framing — 'get back on set' — raw production seams visible before the 'full Jesus' recommitment.",
    "content_idea": "Making-of montage gold: the one-camera, one-take, six-hour credibility asset. Speed-ramp the reset into the moment he sits back down and says 'let's go full Jesus.'"
  },
  {
    "timestamp": "00:24:39",
    "description": "Chris speaks from behind the camera for the first sustained exchange; Spencer answers 'Weed helps' — the candid regulation-tools moment, likely with the substance on set.",
    "content_idea": "Series device: 'the cameraman on ketamine' — subtitle-styled two-voice clips where the off-camera voice gets its own caption color; the honesty about substances is a differentiator, not a liability, for the vlog audience."
  },
  {
    "timestamp": "00:27:40",
    "description": "The fighter-jet monologue — his most kinetic delivery in the chunk, describing flying through white light into 'clear' where light and darkness look the same.",
    "content_idea": "Anchor visual for the brand: overlay a hand-drawn fighter jet as a stop-motion layer flying through the frame; freeze on the next-thumbnail per the signature mechanic. This clip births the 'I build you a fighter jet' campaign imagery."
  },
  {
    "timestamp": "00:32:03",
    "description": "Drink reference and likely sip — 'this is why I need to drink a little bit, sleep' — the night's first on-camera refreshment beat.",
    "content_idea": "Use drink-sips as a recurring chapter-break motif in the vlog cut; a time-lapse of the glass level doubles as the clock for the 6-hour night."
  },
  {
    "timestamp": "00:36:32",
    "description": "The most gestural passage of the chunk: describing oil paintings in the foyer, statues in the garden, licking the wall, the finger roll, and the LeBron full-court block — full-body performance.",
    "content_idea": "Freeze-frame the block gesture for the thumbnail; in the layered stop-motion technique, a hand-drawn 'monster LeBron' layer flies across the still to swat the shot."
  },
  {
    "timestamp": "00:37:48",
    "description": "Direct-to-camera address during the patience rant — speaking straight down the lens at future viewers, almost certainly pointing.",
    "content_idea": "Meme frame and short opener; title card 'a message for the patience people' over the pointed finger."
  },
  {
    "timestamp": "00:39:02",
    "description": "A roughly four-second silence (gap between timecode blocks) before the Q2 line — a held look, the longest deliberate pause so far.",
    "content_idea": "Keep the full silence in the edit with a slow push-in; the breath before the receipt line IS the hook."
  },
  {
    "timestamp": "00:42:54",
    "description": "Breaks the monologue mid-thought — 'let me grab, let me grab' — reaches off-frame, returns with 'very, very good. Good.'",
    "content_idea": "Jump-cut punchline for shorts; in stop-motion, whatever he grabbed becomes an animated layer sliding into frame."
  },
  {
    "timestamp": "00:43:40",
    "description": "Re-enacts the 3:45am wake-up: getting up, grabbing a drink, coming back to a text from her — 'look at how... you creep' — physical storytelling of checking the phone.",
    "content_idea": "Cut-away insert of a staged 3:45am phone screen; stop-motion text bubble popping in over a Dehancer-graded still."
  },
  {
    "timestamp": "00:49:14",
    "description": "The sled-dog bit — 'you got to throw the ball, you got to tease me with it' — miming the ball-throw and the dog's anticipation.",
    "content_idea": "Comedic short with a cutaway to real dog footage on the throw; loopable Instagram clip."
  },
  {
    "timestamp": "00:52:32",
    "description": "The superhero suit-up bit — 'I'm in tights and shit with my mask' — miming armor, mask, and the deflated walk back to bed.",
    "content_idea": "Hand-drawn tights-and-cape layer over his freeze-frame via the stop-motion technique; instant meme frame for the men's-relationship short."
  },
  {
    "timestamp": "01:01:40",
    "description": "The 'can't breathe' moment — Spencer describes the flashes stealing his breath, visibly softens, and Chris says from behind the camera: 'This is very tender.'",
    "content_idea": "Slow push-in with darker grade as the vulnerable cold open of the 'inside the wizard's head' segment; the audible off-camera 'this is very tender' is a keeper — it certifies the moment as real."
  },
  {
    "timestamp": "01:02:51",
    "description": "Mimes a 'right hand power drift turn' while describing yanking himself out of a too-long download high — a full-body gesture punctuating the MDMA comparison.",
    "content_idea": "Meme frame / kinetic-caption short: freeze on the gesture with drift-turn sound design; also a perfect stop-motion layer (hand-drawn skid marks animating around him, per the layered stop-motion technique)."
  },
  {
    "timestamp": "01:12:30",
    "description": "Chris calls '30 more minutes' from behind the camera; Spencer visibly resets posture and switches from mystic cadence to sharp operator cadence for the two-week plan.",
    "content_idea": "Split-screen 'Wizard Mode vs CEO Mode — same chair, same night' — the posture reset is the transition beat; feeds the sub-personalities YouTube strategy from the Valeria debrief."
  },
  {
    "timestamp": "01:16:37",
    "description": "References the physical 2006 System X / Flex code notebook — 'I actually have that notebook somewhere' — the sole survivor context for the notebooks Carolina destroyed.",
    "content_idea": "Retrieve the actual notebook for a follow-up shoot: thumbnail of Spencer holding it ('This notebook is 20 years old'), stop-motion page-turns as the layered-animation showcase, and the thumbnail-expands-into-video mechanic starting on its cover."
  },
  {
    "timestamp": "01:20:28",
    "description": "The voicemails-for-Ashley bit — describes leaving her voicemails 'you can listen to at any time... I talk real sharp when I'm like this,' checking his phone energy, the open loop of her silence.",
    "content_idea": "Intimate vlog b-roll: phone screen + voicemail waveform overlay; the waveform is a natural stop-motion layer element and a recurring visual motif for the relationship vertical."
  },
  {
    "timestamp": "01:22:18",
    "description": "Acts out Ashley eating the parfait he bought her — playful voice shift, lands 'You won't let me see you, but I'm there. I'm there.'",
    "content_idea": "Meme frame with caption 'I'm there. I'm there.' — parfait emoji canon; cut as a sub-60-second reel with a hard punch-in on the last line."
  },
  {
    "timestamp": "01:28:36",
    "description": "'I'm going to light this' — lights up on camera, marking the visible act break from business crescendo into late-night confessional mode.",
    "content_idea": "Chapter-break stinger for the long-form edit: the flame/smoke in slow motion as the recurring 'act change' transition; smoke is an ideal Dehancer-graded stop-motion layer."
  },
  {
    "timestamp": "01:30:17",
    "description": "Plays with the camera at the top of the date story — 'Oh, I like, freeze there' — posing/freezing mid-motion before settling into the story.",
    "content_idea": "Freeze-frame cold open for the short: record-scratch 'yep, that's me' meme frame; also a natural still for the stop-motion thumbnail-expands-into-video mechanic."
  },
  {
    "timestamp": "01:34:23",
    "description": "Physically animated retelling of the 30,000-steps day — the 'husky that needed a walk' energy visibly in his body as he describes the metabolism switching on.",
    "content_idea": "Stop-motion layer of a step counter ticking from 300 to 30,000 over b-roll of Spencer pacing; the husky line as the caption."
  },
  {
    "timestamp": "01:54:18",
    "description": "Self-narrates his own on-camera state: references the pre-shoot silence and shower, then rates himself live — 'I'm at a six and a half right now; when it happens it's between an eight and a ten, for days.'",
    "content_idea": "Recurring 'intensity meter' HUD graphic (1–10 gauge) for the vlog series, calibrated from his own words; this clip is the key that teaches the audience to read the gauge."
  },
  {
    "timestamp": "01:56:57",
    "description": "Remorse hits mid-sentence and his body betrays him: turns away, coughs into his shoulder, jokes that he can't maintain eye contact — visible shame processed in real time.",
    "content_idea": "The flinch as an emotional-beat thumbnail (looking away from camera); slow push-in edit for the vulnerability cut of the relationship arc."
  },
  {
    "timestamp": "01:58:44",
    "description": "Hard camera cut mid-sentence; Chris calls 'camera speed' on restart and Spencer jokes about where the cut landed; 'Have we been recording?' follows minutes later.",
    "content_idea": "Use the 'camera speed' clap/restart as the series transition sting; the confusion beat becomes a bloopers/behind-the-scenes bumper with an 'Hour 4.5 of 6' timestamp overlay."
  },
  {
    "timestamp": "01:59:19",
    "description": "Late-night loose energy after the restart — skincare-YouTube confession, laughing, visibly punchier and more casual than the early hours.",
    "content_idea": "'Late-night confessions' micro-series for Instagram: the unguarded hour-4+ material cut against the composed hour-1 material to show the arc of the night."
  },
  {
    "timestamp": "02:01:48",
    "description": "Gestures to the sticky-note wall — 'much like my sticky notes here' — physically linking the props on set to the memoir's chapter structure.",
    "content_idea": "Thumbnail: Spencer surrounded by the note wall, title 'Every note is a chapter.' Stop-motion sequence where handwritten notes fly off the wall and bind into a book — the book-announcement asset."
  },
  {
    "timestamp": "02:16:03",
    "description": "While listing his art-school environment — crayons, screens, whiteboards, audio recordings — Spencer is gesturing to the actual room around him, which contains the real whiteboards and sticky-note wall.",
    "content_idea": "B-roll pan across the real whiteboards and note wall synced to each item he names; ideal layered stop-motion sequence where crayons/notes/snacks animate in frame-by-frame as he lists them."
  },
  {
    "timestamp": "02:23:09",
    "description": "The flowers-in-the-lobby mock apology is a full theatrical performance — Spencer plays both himself groveling and the offended party, with voice changes.",
    "content_idea": "Shot/reverse-shot edit of him playing both characters; stop-motion re-creation where paper flowers move frame-by-frame from lobby to door; caption card 'How to apologize like a wizard.'"
  },
  {
    "timestamp": "02:22:25",
    "description": "The fourth-wall-break bit — 'hold on, can we just pause here... we're good here, right?' — performed with a physical full-stop pause gesture mid-fake-argument.",
    "content_idea": "Freeze-frame plus record-scratch edit at the pause gesture; meme frame captioned 'Are we fighting the way kittens roll on the ground?'"
  },
  {
    "timestamp": "02:10:15",
    "description": "The 'yes daddy' voice performance — Spencer voices the supportive woman in falsetto ('go take care of business, I got you') as part of the gasoline-vs-jet-fuel teaching.",
    "content_idea": "Caption-heavy short leaning into the voice performance; thumbnail = his face mid-falsetto with 'GASOLINE vs JET FUEL' text split across the frame."
  },
  {
    "timestamp": "02:30:04",
    "description": "The thumbs-up rant — 'I asked for a fucking thumbs up... crickets' — likely miming the phone check and the emoji, high animated frustration energy.",
    "content_idea": "Stop-motion layer: a giant paper thumbs-up emoji he 'holds' that dissolves into crickets; meme frame for 'weaponizing emoji'; strong short-form thumbnail."
  },
  {
    "timestamp": "02:14:23",
    "description": "Posture/energy reset as he shifts from riffing to declaration — 'So I was in the shower...' — re-enacting the download moment.",
    "content_idea": "Vlog cold-open: cut straight into the shower re-enactment, overlay the actual 'To Whom It May Concern' letter as stop-motion typed text appearing line by line."
  },
  {
    "timestamp": "02:32:51",
    "description": "Chris confesses he has been reading the sticky-note wall during the entire conversation ('I've been reading them as you've been talking') — the camera operator visibly distracted by the set dressing that is about to become the show.",
    "content_idea": "Cutaway insert shots of the note wall as a grid of thumbnails; use this exchange as the trailer/teaser for the whole notes-to-camera series — 'even the cameraman couldn't stop reading them.'"
  },
  {
    "timestamp": "02:33:18",
    "description": "Spencer gestures across the wall/stack of sticky notes while quoting James — 'every single one of these is a fucking video' — presenting the physical note collection to camera.",
    "content_idea": "Hero thumbnail: Spencer framed by the note wall. Stop-motion layer: notes fly onto the wall one per frame, ending on the frame that becomes the next video's thumbnail (his signature mechanic)."
  },
  {
    "timestamp": "02:33:31",
    "description": "A sticky note is held up and compared to a tarot card on camera — the card-draw gesture that defines the note ritual.",
    "content_idea": "'Wizard's Tarot' series open: overhead stop-motion of a hand drawing one note from a fanned deck, note expands into the episode. Deck-fan image doubles as series key art."
  },
  {
    "timestamp": "02:34:51",
    "description": "Spencer physically acts out the cowboy-boots-over-the-shoulders image, mimicking the 'action figure' stiffness with his arms.",
    "content_idea": "Meme frame / reaction cut for shorts; freeze on the action-figure pose with text overlay. Late-night-Spencer energy for the vlog edit."
  },
  {
    "timestamp": "02:37:28",
    "description": "Spencer flips through the note stack hunting for a specific one ('the second one from the end') — hands shuffling and sequencing the deck on camera.",
    "content_idea": "B-roll bank: close-up hand-shuffle shots become the stop-motion transition between every episode of the note series — the deck IS the chapter divider."
  },
  {
    "timestamp": "02:38:44",
    "description": "The tongue-from-collarbone gesture while explaining what 'music to fuck to' really means — sensual demonstration pivoting instantly into wizard philosophy.",
    "content_idea": "Vlog moment / cold-open hook: the gesture cut hard against the line 'it has a much deeper meaning' — the tonal whiplash is the retention device."
  },
  {
    "timestamp": "02:58:03",
    "description": "Spencer takes a live phone call mid-shoot ('That was Daniel Bishop'), negotiating cash amounts ($400, $300, ten bucks apiece) on camera.",
    "content_idea": "Documentary beat: leave it raw in the vlog with a timestamp overlay — 'even mid-prophecy, the phone rings.' Proof the night is unscripted."
  },
  {
    "timestamp": "02:59:12",
    "description": "Spencer checks the recording clock on camera — 'an hour 33 on this one, 2.5 hours total' — exhales, and calls the first break of the night.",
    "content_idea": "Chapter-divider motif for the long-form edit: recurring shot of the clock check with a burned-in elapsed-time counter, marking the endurance arc of the 6-hour night."
  },
  {
    "timestamp": "03:00:33",
    "description": "Spencer sketches the 'zone of tolerance' model in the air — regulated nervous system, overwhelm/anxiety above, depression below — placing himself on the map.",
    "content_idea": "Animate the diagram as a layered stop-motion overlay (drawn elements moved frame-by-frame per the post-shoot technique); also a clean 5-slide carousel: 'Where are you on this map right now?'"
  },
  {
    "timestamp": "03:04:38",
    "description": "Eats habanero unknowingly with Lay's chips; profuse sweating, face contorting under the cinematic lights, Chris reacting: 'your face looks like—'.",
    "content_idea": "Reaction-cam short with a rising thermometer overlay in the layered stop-motion style; the mid-burn face is the thumbnail for 'The Night I Accidentally Ate a Habanero.'"
  },
  {
    "timestamp": "03:07:17",
    "description": "Wipes his burning face with a napkin while continuing to answer interview questions about his fevers.",
    "content_idea": "The napkin wipe is the cut point between 'composed teacher' and 'man on fire' — meme frame: 'when the content bites back'; also perfect b-roll under the fever narration."
  },
  {
    "timestamp": "03:11:43",
    "description": "Chris exits frame to the freezer and returns with an ice pack and an ice cream sandwich; Spencer presses the ice pack to his head on camera.",
    "content_idea": "Ice-pack-on-head still is the natural thumbnail for the asking-for-help teaching; cut as a jump-cut mini-vlog titled 'Self-Soothing Tutorial.'"
  },
  {
    "timestamp": "03:12:43",
    "description": "Eats the ice cream sandwich mid-philosophy, landing 'ice cream sandwiches taste better from mothers' between bites.",
    "content_idea": "Sync the bite to the punchline in the edit; stop-motion layer of an ice cream sandwich orbiting his head for the layered-photographic technique."
  },
  {
    "timestamp": "03:18:35",
    "description": "References and gestures to 'the list... all the crayon drawings' — the pile of handwritten pages documenting the download sits in/near frame.",
    "content_idea": "Overhead stop-motion pan across the crayon drawings as the 'IV drip of ideas' visual; the drawings themselves become a carousel and thumbnail texture layers."
  },
  {
    "timestamp": "03:25:35",
    "description": "Names the set's consumables out loud — the food, the hot sauce, a couple glasses of wine — the props of the night's lowered inhibition.",
    "content_idea": "Annotated flat-lay frame: 'Tools of a 6-hour download' — wine glasses, hot sauce, chips, sticky notes — as an IG/LinkedIn image post and recurring vlog motif."
  },
  {
    "timestamp": "03:29:55",
    "description": "Reaches for his phone ('where is my phone'), then performs the Wisdom Originator superhero riff with a full comedic energy spike after 30 minutes in the trough.",
    "content_idea": "Actually produce the meme he scripts on camera — Spencer in a wisdom superhero outfit, title card 'WISDOM ORIGINATOR' — and drop it into the short as a stop-motion layer materializing while he pitches it."
  },
  {
    "timestamp": "03:06:16",
    "description": "'That's me sweating' — visible sweat through the burn, roughly three hours into the fixed-camera setup.",
    "content_idea": "'State of Spencer' time-lapse strip across the 6 hours (hair check at 0:00 → sweat at 3:05 → 1:30am finale) as a carousel and the vlog's chapter-marker device."
  },
  {
    "timestamp": "03:36:56",
    "description": "Spencer holds his phone up to the lens with the AI-generated 'Wisdom Originator' superhero image and directs the shot himself — 'how close can the camera go... there we go' — then reads the character card aloud to camera.",
    "content_idea": "The AI image is a ready-made asset: character card for the stop-motion layer system, YouTube thumbnail for any wisdom/teaching video, and a recurring animated persona intro sting."
  },
  {
    "timestamp": "03:38:11",
    "description": "Shows the second phone image — the Gollum antithesis, 'a thousand years in a cave, compressed and hardened with hoarded wisdom' — and reacts to how good it came out.",
    "content_idea": "Two-panel meme format (Bestower vs. Hoarder); the reveal-and-react beat works as a short on its own, and the Gollum image is the 'what happens if you never share it' visual for the whole content thesis."
  },
  {
    "timestamp": "03:39:29",
    "description": "Full Gollum voice impression — 'precious, precious, precious' — hunched, in character, before snapping back to 'hit me with the knowledge bomb.'",
    "content_idea": "Reaction GIF / meme frame; also the perfect cold-open comedy beat to cut against the dead-serious integrity teaching that immediately follows."
  },
  {
    "timestamp": "03:35:02",
    "description": "Visibly sweating and naming it on camera twice — 'I'm sweating right now thinking about it... I'm sweating again' — while describing the download showing him every project at once.",
    "content_idea": "B-roll proof of intensity for the download narrative; freeze-frame with the quote overlaid is a thumbnail for 'the vision that made me sweat.'"
  },
  {
    "timestamp": "03:35:56",
    "description": "The weed break, produced on camera — 'I'm ready for some drugs... my weed right here' — right after the steak dinner reference ('we had some steak, we had some content').",
    "content_idea": "Vlog act-break jump cut; 'Steak & Content' works as a recurring chapter card / segment title for the BTS documentary edit."
  },
  {
    "timestamp": "03:44:27",
    "description": "Shampoo bottle bursts — 'Oh fuck! Oh fuck!... Hey, I got that on camera' — followed by the Airbnb-dispenser bit about being sick of refilling his shampoo.",
    "content_idea": "Blooper-reel anchor and meme frame; the 'I got that on camera' reflex is itself a bit about a man who now captures everything."
  },
  {
    "timestamp": "04:01:21",
    "description": "Mid-conversation set adjustment — 'that more would melt her face. Can you unplug that for me please' — directing the room while staying in the exchange, wine visibly wound down, energy toasty and low.",
    "content_idea": "BTS authenticity beat for the vlog: the fixed-camera cinematic setup being human-run in real time; also a visual marker of the night's energy descent for the documentary arc."
  },
  {
    "timestamp": "04:08:47",
    "description": "Gestures across the room at the sprawl: 'Look at all my stickies — I have crayons fucking everywhere. I got content, I got stickies.'",
    "content_idea": "Wide b-roll of the sticky-and-crayon sprawl becomes the master thumbnail for the whole series; each handwritten sticky becomes a stop-motion layer that animates open into its own clip — literal application of the layered stop-motion technique."
  },
  {
    "timestamp": "04:17:45",
    "description": "References the earlier on-camera hot-sauce moment — hot sauce 'to the max' with brisket, sweating through it, then the drink.",
    "content_idea": "Pull the hot-sauce reaction frames from earlier in the footage as meme stills and cold-open b-roll for the 'value of discomfort' short; sweat-face freeze-frame is the thumbnail."
  },
  {
    "timestamp": "04:19:54",
    "description": "Roughly five seconds of true silence on camera after Chris asks 'Why do you feel guilty?' — the longest pause in the chunk, visible in the timecode gap.",
    "content_idea": "Hold the uncut silence in the vlog edit — the pause IS the content. Also converts to a LinkedIn text post: 'My cameraman asked me one question at hour four and I couldn't answer for five seconds.'"
  },
  {
    "timestamp": "04:22:41",
    "description": "Spencer visualizes on camera through the desert exercise, eyes closed/inward, answering in specifics: translucent gold cube, aluminum ladder, purple-and-yellow flowers coiling up it, dark horse beside him facing him.",
    "content_idea": "Signature layered stop-motion overlay: hand-drawn desert, cube, ladder, flowers, and horse build up frame-by-frame over his face as he describes them — the flagship demonstration of the visual technique from the post-shoot conversation."
  },
  {
    "timestamp": "04:28:36",
    "description": "Digs through the sticky pile mid-sentence looking for one: 'learning the brake... I think I have that here somewhere.'",
    "content_idea": "Jump-cut b-roll of him rifling through stickies becomes the recurring transition device between clips in the series — the visual grammar for 'next idea.'"
  },
  {
    "timestamp": "04:29:18",
    "description": "Physiology beat: he stands up mid-conversation (Chris: 'Why do you stand up?'), talk of exhausted bodies and heightened senses, then 'I know there's another refrigerator' — a late-night fridge run, followed by 'I'm sorry bro... I was in the moment... I'm trying to exhaust myself.'",
    "content_idea": "Hour-four fridge-run b-roll = relatable 'deep in the recording session' meme frame and vlog texture; caption: 'hour 4 of 6.'"
  },
  {
    "timestamp": "04:32:24",
    "description": "Picks up and holds the handwritten 'Closed Loop' sticky note to camera: 'It's been looking at me all night.'",
    "content_idea": "The sticky itself is the thumbnail; stop-motion the handwriting expanding into the Maserati and go-kart illustrations — thumbnail-becomes-the-video mechanic exactly as designed in the post-shoot technique conversation."
  },
  {
    "timestamp": "04:35:07",
    "description": "Directs Chris to pull something up on WhatsApp on the phone as the 'mythology of the beast' segment begins.",
    "content_idea": "Phone-screen insert shot as the next episode's cold open — cliffhanger frame: 'wait till you see what's on his WhatsApp.'"
  },
  {
    "timestamp": "04:42:53",
    "description": "The desk is buried in sticky notes ('so much shit on my desk') and Chris starts blind-picking them like tarot cards while Spencer waits to react cold.",
    "content_idea": "Overhead stop-motion of the note pile reshuffling itself frame-by-frame; the chaotic desk as the series thumbnail — 'six months of content on one desk.'"
  },
  {
    "timestamp": "04:38:59",
    "description": "Spencer holds the 'ONLY TRUTH REQUIRED' handwritten note up to the lens before riffing on it — the signature note-to-camera gesture of the night.",
    "content_idea": "The note itself is the thumbnail; use the signature mechanic — thumbnail of the held note expands into the video, video freezes on the next note."
  },
  {
    "timestamp": "05:00:21",
    "description": "While teaching 'the faster I go, the more gentle I am,' he mimes the sanding motion — rough grit to finest grit, light touch, high speed.",
    "content_idea": "Layered stop-motion insert: real sandpaper grits polishing a wood block synced to his hand gestures — the cleanest demo of the photographic stop-motion technique."
  },
  {
    "timestamp": "04:59:51",
    "description": "'Pause for editing... maybe I'll just drink a little bit' — on-camera drink break, Chris pointing out 'you have some yellow on there'; hour-five maintenance in full view.",
    "content_idea": "Vlog b-roll and a jump-cut gag: 'Hour 5 hydration check' — the endurance of the night as its own micro-content beat."
  },
  {
    "timestamp": "05:02:39",
    "description": "Something comes out of his nose mid-laugh — 'you have to edit out all that stuff' — an explicit instruction to the editor captured on tape.",
    "content_idea": "Keep it in: blooper cold-open for the vlog, or a 'the stuff he told us to cut' outtakes reel — instant authenticity signal."
  },
  {
    "timestamp": "04:51:55",
    "description": "Telling the Daniel story he physically maps his shame response — body heating up, going blotchy — versus the grounded calm Daniel's mockery gave him.",
    "content_idea": "Temperature-shift color grade (Dehancer warm flush cooling to neutral) tracking the story beats — emotion made visible in the grade."
  },
  {
    "timestamp": "04:52:22",
    "description": "The risky cerebral-palsy basketball bit — Spencer acting out the celebration while Chris audibly pushes back ('wait, hold on') — real comedic tension in a two-shot.",
    "content_idea": "Reaction-cam meme frame of the pushback moment; also flags the segment for an editorial review pass before anything from it ships."
  },
  {
    "timestamp": "04:35:40",
    "description": "He grabs his phone to pull up the WhatsApp thread with Daniel ('pull it up, trust me') — evidence-on-the-phone as a recurring storytelling prop.",
    "content_idea": "Replace the raw screen with an animated chat-bubble stop-motion layer — protects names, adds the signature visual style, makes receipts a repeatable device."
  },
  {
    "timestamp": "05:07:39",
    "description": "The sticky-note wall/grid is fully visible and navigable — Spencer directs Chris to pick the next one by coordinates ('bottom right... five, six over'), then reads it to camera.",
    "content_idea": "Overhead stop-motion of the full grid with one note lifting off and expanding into each talking-head clip — this IS the thumbnail-expands-into-video mechanic from the Notion technique doc, ready-made."
  },
  {
    "timestamp": "05:08:56",
    "description": "Daniel sits in the room with headphones on, oblivious, while Spencer roasts him live ('like the autistic fucking cousin at the dentist office') mid-teaching about removing distractions.",
    "content_idea": "BTS cutaway meme frame — split-screen 'the lesson / the living example'; also a vlog beat establishing the room at midnight. Screen the roast line for edit sensitivity."
  },
  {
    "timestamp": "05:15:45",
    "description": "Spencer reacts to the runtime of the note he just finished ('That one was that long. What?') — a visible pace-check against the remaining stack.",
    "content_idea": "Jump-cut gag reel of every pace-check across the night with a running on-screen timestamp counter — trailer connective tissue for the 6-hour documentary."
  },
  {
    "timestamp": "05:23:51",
    "description": "The F-35 wind-machine moment — describing the kaleidoscope of his consciousness spinning in slow motion, almost certainly with big illustrative hand gestures at peak energy.",
    "content_idea": "Slow-mo b-roll layer with a drawn kaleidoscope/turbine animation composited over his hands in the layered stop-motion style; ideal cold-open for a short about his mind."
  },
  {
    "timestamp": "05:29:08",
    "description": "Someone tries to show Spencer a phone mid-take; he refuses on camera: 'I'm recording fucking content. You can't show me anything. You can talk to me, but I can draw the line.'",
    "content_idea": "'Protect the take' meme frame — pairs perfectly as the visual punchline to the remove-distractions teaching from 20 minutes earlier."
  },
  {
    "timestamp": "05:31:37",
    "description": "Spencer puts in headphones and watches a still image scored with violin on a device, at Chris's insistence — visibly negotiating his way out ('Can I leave this, please? Can I leave this, please?').",
    "content_idea": "The signature BTS scene of the chunk: the wizard receiving instead of transmitting. Documentary centerpiece, IG reel ('my cameraman turned the tables'), and a meme frame of Spencer trapped mid-transmission."
  },
  {
    "timestamp": "05:33:43",
    "description": "Fourth-wall break — Spencer calls the edit on camera: 'Okay, I'm seeing a joke. Cut for editing.'",
    "content_idea": "Keep it in as a recurring series stinger/outro sting — the audience learns he's directing the edit from inside the take; brands the whole series as self-aware."
  },
  {
    "timestamp": "05:34:23",
    "description": "The reset: posture snaps back, he faces the remaining stack — 'I have to do all of these tonight. Fuck. Okay. Thank you for getting me back in the boat' — then launches straight into the own-your-software rant.",
    "content_idea": "Trailer beat with text overlay '5.5 HOURS IN' — the moment of recommitment; cut it against the fresh 6:00pm hair-check from the opening for the endurance contrast."
  },
  {
    "timestamp": "05:41:09",
    "description": "Uses the chair he's sitting in as a live prop for the integrity teaching — 'this chair only sits me up if it has integrity; it is what it says it is.'",
    "content_idea": "Stop-motion layer: the chair visually disassembles under him when intentions/commitments/actions split, reassembles when they align. Also the thumbnail for the integrity short."
  },
  {
    "timestamp": "05:39:46",
    "description": "On-camera sorting of the sticky-note stack with Chris — deciding which notes are done, putting 'the first five back,' negotiating the reading order.",
    "content_idea": "Overhead stop-motion chapter device: the physical stack visibly shrinking across the night timestamps the whole film; each pulled note becomes a thumbnail that expands into its clip (the signature thumbnail-into-video mechanic)."
  },
  {
    "timestamp": "05:48:38",
    "description": "Admits the ketamine is 'in my nose' while Chris repositions him back into the recliner — a raw dose of the night's altered-state honesty plus director/subject blocking.",
    "content_idea": "Vlog BTS beat and meme frame ('director's notes at hour six'); jump-cut sequence of every time Chris re-blocks him through the night."
  },
  {
    "timestamp": "05:53:03",
    "description": "Performs a magician's flourish to camera — 'now I'll make a rabbit come out of this hat, and as I say it, it becomes true.'",
    "content_idea": "Freeze-frame the flourish as the wizard-brand thumbnail; draw a stop-motion rabbit/hat layer over the still (Dehancer-graded) for the 'That's What Magic Is' short."
  },
  {
    "timestamp": "05:55:48",
    "description": "Breaks the fourth wall, staring past the lens at Chris during the 4K exchange — 'why do you look at me like I'm taking crazy pills here?'",
    "content_idea": "Meme frame / caption-bait Instagram BTS short; the reaction shot pairs as a recurring 'the cameraman doubts the oracle' running gag across the series."
  },
  {
    "timestamp": "05:58:16",
    "description": "Holds up the final two sticky notes — the worn ones that live taped to his computer 'next to me all the time, no matter where I go.'",
    "content_idea": "Macro b-roll insert of the two battered notes on the actual laptop; carousel cover image for 'the two reminders I never travel without'; the emotional close of the Sticky Note series."
  },
  {
    "timestamp": "06:02:30",
    "description": "Live consumption demonstration: inventories the table (coffee, Spindrift, wine, salt), then puts salt on his fingertips — 'place it on your tongue, look me in the eyes while you do it, and tell me what you experience.'",
    "content_idea": "Tight sensory insert shots for the 'Nibbles and Sips' edit; a stylized tasting-menu b-roll sequence graded nostalgic-film for the vlog."
  },
  {
    "timestamp": "06:03:54",
    "description": "At 1:20 AM, calls 'Action' and physically performs both sides of the phone call that hired Chris — switching characters, closing eyes for the wish, playing the reveal.",
    "content_idea": "Split-screen edit (Spencer-as-himself vs. Spencer-as-Chris); the film's final scene, the trailer closer, and a standalone 'how I hired my cameraman with a magic trick' short."
  },
  ...s2PhysicalMoments,
]

export const ideas: string[] = [
  "LinkedIn post (James's lane): 'I don't care what your AI idea is. My question is: do your clients own it?' — position every competitor pitch as a rental and the machine-that-builds-machines as ownership; CTA to the ownership audit.",
  "Series premise: 'Journal Entries' — every vlog episode opens with the line 'this is more of a journal entry than a piece of content; if you're seeing this, you were meant to see it.' The framing device is already shot.",
  "Lead magnet: 'The Ownership Audit' — 10 questions that show a founder how much of their business is rented (ClickUp, Salesforce, Notion, CRM data) vs owned, ending on the do-your-clients-own-it standard.",
  "Carousel: 'Money is simple sugar. Community is complex carbs.' — 6 slides on the metabolism of power and why under-capitalized founders must band together fastest between now and 2029.",
  "Email subject line: 'The man who stole my life savings got 188 months. Here's what I got.' — opens the dodged-bullet story, lands on what he built from the wreckage.",
  "Merch/campaign lines: 'KILL THE MACHINE. OWN YOUR SHIT.' and 'Not the savior. Definitely on the team.' — both verbatim from this chunk, both wearable.",
  "Flagship YouTube long-form: 'Ten Skyscrapers in 30 Days' — animate the dad conversation with the layered stop-motion technique (a hand-drawn Sears Tower assembling frame by frame, then ten of them), Dehancer-graded; this is the explainer that converts normies.",
  "LinkedIn post: 'You are paying consequences for decisions you're not making. That's the definition of being a victim.' — bridge from oil chokepoints to business owners whose data, software, and lead flow live on rented platforms.",
  "Editorial formula for all prophecy content: cold-open every mystic clip with the disclaimer 'everything I'm sharing is not truth — it's what I'm hearing.' It inoculates against the grandiosity objection he himself names at 00:10:16.",
  "Top-of-funnel human story: 'I lost 24 pounds in 32 days without trying' — body-reset short whose payload is the fever-with-no-virus reframe; thumbnail is the raised wine glass ('my first drink in months').",
  "Mini-course / lead magnet: 'The Genie Protocol' — how to make precise, values-aligned requests to AI (vague wishes have dire consequences), the direct bridge from this footage to the Precise Language framework and the Conscious Creation site.",
  "Making-of piece: 'I hired my friend for $1,000 on the spot and talked to a camera for six hours' — built from the 00:25:32 confession (nervous system in a danger zone, voice notes nobody listened to) plus the 00:08:19 set-reset BTS footage; publishes late in the calendar as the behind-the-curtain payoff.",
  "LinkedIn post (James's lane): 'My AI counted every word my girlfriend and I exchanged in 30 days — 85,000. 85% her, 15% me. Building an AI that knows everything about you means it tells you the truth your ego won't.' Bridges the relationship story into the machine-that-builds-machines pitch.",
  "YouTube long-form episode: 'The Pattern — why I lose everything every time I win.' Stitch the November '24 story + monster LeBron + the mirror/cake confession into a 12-minute three-act arc with chapter cards; this chunk supplies the complete structure.",
  "Short-series premise: 'Downloads' — each episode opens with a documentary-style cover that expands into the video, mapping 1:1 onto the thumbnail-expands-into-video stop-motion mechanic from the Notion technique. Episode 1 is the documentary-cover explanation itself.",
  "Merch/caption lines: 'Eat a dick with your patience' (uncensored drop), 'Superhuman since age 8', 'The cake was in the fridge the whole time', 'Controlled mania'.",
  "Email subject lines: 'I licked the wall' / 'Monster LeBron blocked my shot again' / 'A fast, a prayer, and 72 hours' / 'My AI ended the argument'.",
  "Carousel (Instagram + LinkedIn): 'Traumas express themselves in patterns' — six slides on reading people's patterns without needing their stories, closing on the quote card. Safe-for-LinkedIn wisdom extracted from an unsafe-for-LinkedIn night.",
  "Lead magnet / one-pager: 'Close the loop clean' — the cycle-closing teaching (quick close vs. dragging yourself through hell) reframed through his Precise Language Loss-void protocol: name where it went, name its new form.",
  "Second-audience series: 'Field notes from a wizard in courtship' — One Page at a Time + Don't Make Me Suit Up + Couple Shit in the Ether as a three-part men's/dating short series, deliberately separated from the AI content lane.",
  "Quote-card set: pair the 90-image photo album stills (Dehancer-graded) with this chunk's 15 quotes — 15+ ready image posts with zero new shooting.",
  "Flagship animated short: the monster LeBron block — hand-drawn LeBron layer swatting the shot over Spencer's frozen finger-roll gesture; the single most thumbnail-able 60 seconds in the chunk.",
  "Podcast/interview talking point: 'Controlled mania — what Tesla and AI builders have in common.' Positions the download process as his R&D method; the Chris-Tesla exchange is the pull quote.",
  "Recurring character: Gary the AI as on-screen cast member — a 'Gary knows everything' series where Gary fact-checks Spencer's self-mythology with hard data (85,000 words; 4,000 to 15,000 steps a day) and the data keeps proving the myth half-true.",
  "LinkedIn text post: 'You can only burn your name once.' — reputation as the only durable asset once AI equalizes capability; close with the 'if everyone can offer everything, who do you buy from?' line. LinkedIn-safe without the dating-coach backstory.",
  "Carousel: 'A million likes on Instagram vs. a million likes on your own software' — slide-by-slide economics of rented platforms vs owned rails, ending on 'do you own it?' — the single best top-of-funnel asset in this chunk.",
  "Series premise: 'Do You Own It?' — recurring segment/interview show where every business conversation ends with that one binary question; doubles as the CTA phrase across all platforms.",
  "Merch lines from this chunk: 'How does a bird learn to fly?' / 'Dark wizardry is just greed' / 'Do you own it?' / 'I'm there. I'm there.' (parfait) — feeds the merch store he names on camera at 01:08:24.",
  "Email subject line: 'The greatest magic trick of all time (it's pricing)' — body walks the $15K-to-$500K value-based custom-quote model from 01:15:08.",
  "Lead magnet / case study: 'The 30-Day Plumbing Company Rebuild' — ServiceTitan replaced, $30–40K/month saved, paid for 90 days delivered in 30; pull the audio from 01:12:53 as the embedded proof clip.",
  "LinkedIn angle: 'I'm not the most capable. I'm just first to market.' — radical-honesty positioning post; competitors can't attack a claim he already conceded, and it converts urgency into credibility.",
  "YouTube long-form concept: 'Wizard Mode vs CEO Mode' — intercut the downloads/dark-wizardry segment (01:01–01:05) with the two-week business plan (01:12–01:16) from the same hour; directly executes the 'sub-personalities of my character' YouTube strategy.",
  "Thread/carousel: '5 signs you're downloading more than you can consume' — greed/dark wizardry, blue days after the high, no compression (no art), can't tell urgent from shiny, spilling on unresourced friends. Bridges mystic and founder audiences.",
  "Vlog episode arc: 'Making her happy vs. taking care of her' — the acts-of-service shift, meal prep over fancy dinners, the parfait, 'be careful what you say yes to' receiving ethics; relationship vertical that also humanizes the Queen/Squabble product story.",
  "Origin-story email or LinkedIn long-post: 'The meanest thing anyone ever did to me' — Carolina's blender → why every client build is backed up, decentralized, and owned by the client; the wound as the warranty. Publish only in the vulnerability lane, never as clickbait.",
  "Broad-appeal comedy short: 'Is she using ChatGPT on me?' — dating in the AI era from 01:30:49; the laugh doubles as a hook back into the thesis that platforms/AI mediate the 'version of you' people meet (merge with chunk 4 for the story's ending).",
  "LinkedIn post (James's lane): 'We cut 70% of a client's software spend and onboarded the entire team in 24 hours — because the software came out of the founder's head.' Use the 01:49:57 clip as the native video; CTA to the machine-that-builds-machines offer.",
  "LinkedIn carousel: 'The Founder Sprint Protocol' — 5 rules pulled verbatim from 01:42:27–01:47:22: (1) the game is containment, (2) protect the peace, (3) signal over noise, (4) feed the beast, (5) hard stop at two weeks or you do damage.",
  "Series premise: 'The Two Weeks' — the Jun 22–Jul 6 software sprint as a daily vlog, with this recording as Episode 0 (the eve-of-battle monologue). The 01:49:38 'I'm a little intimidated' admission is the Episode 0 cliffhanger.",
  "Merch line: 'SUPPORT ME OR GET OUT OF THE WAY' and 'The job's not finished.' Secondary: 'One swipe of the sword.'",
  "Email subject line: 'People are still asking: what's Claude?' — body on the widening AI gap and building your own container before the masses take your thoughts; CTA to book a call.",
  "Lead magnet: 'The Kill List' — a one-page worksheet for auditing the software subscriptions a custom build replaces, using his exact on-camera language (kill list, 70% hard costs, 24-hour onboarding). Feeds directly into the gigaoracle hit-list step.",
  "YouTube long-form essay: 'Signal Over Noise' — Jobs, Musk, and why builders must remove inputs during creation windows; spine is 01:45:24, intercut with the containment segment.",
  "Book pre-launch engine: announce 'I'm Just Trying to Tell a Story' and serialize it in public — each sticky note becomes one LinkedIn text-post parable plus an Instagram image of the handwritten note; tagline 'Forrest Gump meets Tucker Max'; the meta-hook is that Gary (his AI) compiles the book daily.",
  "Stop-motion short using the layered-photograph technique: the China/Chicago-hot-dog analogy animated frame by frame (hot dog, peppers, Italian beef sliding into frame) over his audio from 01:35:16 — being unseen for 20 years, made delicious.",
  "Recurring visual device: the on-screen 'intensity meter' (1–10 gauge) sourced from his own 'six and a half... eight to ten for days' language at 01:54:18 — becomes a signature element viewers track across every vlog episode.",
  "PR/podcast pitch angle: 'The founder who uploaded his consciousness into an AI named Gary — and now Gary is writing his memoir' (combines 01:42:27 and 02:00:28 into one irresistible booking hook).",
  "Instagram reel + build-in-public campaign: 'I don't need compliments, I need participation' (01:53:10) as an open invitation for the audience to build alongside him during the sprint — comment prompts, daily check-ins, the audience becomes his totem.",
  "LinkedIn open-letter post: publish the actual 'To Whom It May Concern' letter — 'For the next two weeks I don't need space, I need support' — as the public kickoff of the 14-day software sprint; James runs it as launch-campaign day one.",
  "LinkedIn carousel: 'You Have Modes' — five slides (day-off mode, creative mode, productive mode, duty mode, immovable mode), final slide: 'Sometimes you look like a dick. Ship anyway.'",
  "YouTube-long episode: 'The Builder's Battery' — chaptered from the celibacy, containment, and jet-fuel clips; thesis: contained desire is the only performance enhancer that compounds.",
  "Merch line: 'ALL SIGNAL. NO NOISE.' tee, plus 'Gasoline vs. Jet Fuel' two-sided print.",
  "Email subject line: 'I asked for a thumbs up and got crickets' — newsletter on feedback loops: gratitude is navigation data, when customers light up that's your instruction to give more (bridges to the daily-improvement-loop product story).",
  "Lead magnet: 'The Return to Art School' — a one-page guide to building a zero-shame creative environment (snacks, sleep permission, whiteboards, crayons), delivered with a vlog tour of his actual room.",
  "Recurring short-form series: 'Downloads from the Shower' — every episode opens 'I was in the shower and...' and delivers one download; pairs perfectly with the thumbnail-expands-into-video stop-motion mechanic.",
  "Instagram skit: the flowers-in-the-lobby apology re-shot with the layered stop-motion technique — paper flowers migrating frame-by-frame from lobby to door while the original audio plays.",
  "YouTube sub-personality: 'The Contained Wizard' — the celibate-builder character; the Austin-war-zone dinner story is the origin episode, the greatest-love-story-ever-told rant is the manifesto.",
  "LinkedIn post angle: 'The deed is done out of duty' translated to service businesses — stop doing delight for the reaction, read the reaction as routing data for where to invest next.",
  "Carousel: 'Before You Play Detective' — three gates for hyper-awareness (Why am I focusing? What outcome? Is it worth the cost?), closing with 'bring language to the timelines and the decision makes itself' — Precise Language flagship content.",
  "Series premise: 'Tarot Deck of Sticky Notes' — leverage the 02:32:51 James/Chris exchange as the trailer, then each note becomes one card-pull episode: hand pulls a note off the wall in stop-motion, note expands into the video.",
  "Series premise: 'The Sticky Note Tarot' — 50+ episodes, one note per short; each opens with an overhead stop-motion card-draw, the note expands into the video, and the video freezes on the next note (his thumbnail-expansion mechanic applied literally to the deck Chris named 'tarot cards' at 02:33:31).",
  "LinkedIn post (James's channel): 'My friend walked into my house and said: your content is already done.' — externalizing thought into physical artifacts as the first step of any content engine; bridges to the machine-that-builds-machines pitch.",
  "YouTube long-form essay: 'My 2029 Prediction: UBI, Sovereigns, and the Split' — chaptered from the 02:42-02:47 prophecy run (billionaires → UBI → surf the Matrix → creators vs consumers → 3-6-9), thumbnail: Spencer + the New Testament sticky note.",
  "Carousel: 'Humanity is splitting into two modes' — 8 slides from creators-vs-consumers, closing slide the choice quote 'sovereignty and love vs enslavement for dopamine,' CTA: which are you choosing before 2029?",
  "Email subject line: 'I never stopped loving any woman I've ever loved' — body pivots from the 02:47:43 teaching to how he prunes projects and clients the same way: nothing lost, everything relocated (Precise Language loss-void doctrine as email content).",
  "Sub-personality channel per the Valeria strategy: 'Relationship Alchemist' — this chunk alone supplies five episodes (find the interest, bad timing, self-respect reframe, receiving is a skill, love at a distance); keeps dating content from diluting the business channel.",
  "Merch lines: 'Conscious Creator Extraordinaire' (02:49:29) and 'Play above the game. Play within the game.' (02:42:31) — both verbatim, both wearable.",
  "Lead magnet: 'The 20-People Protocol' — a worksheet on going deeper-not-wider with your inner circle, framed around 'the 20 people Gary knows' (02:48:13); doubles as Oracle/Gary product marketing — your AI should know your 20.",
  "LinkedIn post: 'Same principles, way different tactics' — the EXECUTE line from the New Testament riff (02:42:04) as the frame for every business surviving the AI transition; safe, secular cut of the prophecy material.",
  "Vlog chapter: 'Hour 2.5 — The First Break' — the clock check, the Daniel Bishop phone call, and 'how do you feel after two hours of content?' cut as a quiet documentary interlude between teaching blocks.",
  "Campaign launch post: 'I recorded 6 hours so my people only have to read 6 minutes' — built from the 03:03:31 AI-distillation statement; it is a live demo of the consciousness-upload product and the perfect first post of the whole 200-piece rollout.",
  "Quote-card + 60s short pairing: 'Bad timing is either patience training or a rescue' (02:53:25) with 'the person you thought was it introduces you to the person that IS it' (02:54:07) as the two-beat payoff — Instagram and LinkedIn native.",
  "LinkedIn post: 'I asked for help. 90% of the time it was denied. I kept asking.' — pivot from the wound to the year he spent deliberately engineering a support system before the moment he'd need it.",
  "Series premise: 'The Hot Ones Protocol' — Spencer answers his hardest business/life questions while eating progressively hotter peppers; born from the accidental habanero, with 'pain collapses perspective' as the show's thesis.",
  "Email subject line: 'It's so good it's too much' — the manifestation-overwhelm email nobody else can write: what actually happens when everything you asked for arrives at once.",
  "Merch line: 'WISDOM ORIGINATOR' superhero tee (he designed the meme on camera) plus a second line: 'I'm not complaining, I'm expressing.'",
  "Carousel: 'Self-Soothing for Founders' — 6 slides ending on the ice-pack photo: name the pain → ask specifically → juxtapose heat/cold → the mother-figure truth → mirroring → treat yourself first.",
  "LinkedIn post: 'There was no Xanax in the house. That was the point.' — founder-resilience angle on choosing the forge over the escape, quoting 'forging the balls required to hold the charge.'",
  "Lead magnet: 'The Burnout Inventory' one-page worksheet — list everyone you lean on, rate the burn honestly (his cameraman rated it on camera), schedule designated bullshit-discussion time, draw the boundary diagram.",
  "YouTube long-form episode: 'The Trough' — a 25-minute cut of this entire chunk (habanero → chemo story → burnout inventory → why-the-camera-exists → Wisdom Originator) as the emotional centerpiece of the series, with Chris's caretaking as the B-story.",
  "Audiogram short: the ignored voice message titled 'take care of yourself first, then others' — the message nobody listened to becomes the content, rendered in the layered stop-motion style.",
  "LinkedIn (James pipeline): 'Colonel Sanders franchised in his 60s. The longer it's held back, the bigger the launch.' — compression-physics post that pre-frames the 14-day skyscraper launch campaign.",
  "Channel bible entry: this chunk births two sub-personalities for the YouTube character strategy — The Wisdom Originator (comedy) and The Man on Fire (vulnerability/pain teacher); cast them as recurring characters.",
  "Meta-content short: 'My best videos happen on my worst days' — the keys-are-in-the-moment exchange as the vlog's mission statement: film through it, not after it.",
  "Wisdom Originator as a recurring branded character: the AI image already exists — use it as a stop-motion layer, an intro sting before every teaching clip, and eventually a tongue-in-cheek merch line ('Bestower of all wisdom bestowed upon you').",
  "The Antithesis carousel series: for every principle Spencer teaches, generate the AI image of its shadow (Bestower vs. Gollum-hoarder, Builder vs. Talker, etc.) — two-panel format born directly from the 03:38 ChatGPT-refusal story.",
  "LinkedIn post: 'Intentions, commitments, actions — identical. That's the definition of perfection.' Carousel walking the confidence loop: project into the future → behave identically to the projection → trust your own word more → more power.",
  "LinkedIn post: the soda-can rule — put the cans in the fridge labels-forward because you said you would. Micro-integrity is the gym for macro-confidence. No one dies if you don't; that's exactly why you do.",
  "Lead magnet / community challenge: revive the 100 Day Monster Challenge — hook line 'Who's there to see if you cheated? No one. That's the point.' Natural bridge from content into the Precise Language / monster framework.",
  "Email subject line: 'You guys need a fucking hug' (soft version: 'The world is changing too fast. Here's a hug.') — the AI-acceleration empathy email, quoting the 03:32 schizophrenia-of-change riff.",
  "Repeatable short-form segment: 'Knowledge Bomb' — someone off-camera says 'hit me with the knowledge bomb,' Spencer delivers 90 seconds, hard cut. The 03:39 integrity clip is episode one and the format template.",
  "YouTube/vlog essay: 'I process by talking' — why he recorded 6 hours straight to a camera, for every external processor who's been told they're too much; doubles as the origin-story content for the whole documentary project.",
  "Teaching short (re-shot clean, no personal details): 'Trade expectations for appreciation — but never drop your standards.' The standards-vs-expectations distinction is a complete standalone framework.",
  "Event marketing seed: announce the Austin event from the exotic-animal ranch with literal giraffes in the background — the location IS the thumbnail; tease with the Texas law fact (can't own a native deer, can own a giraffe, tiger, and lion).",
  "Ironic series title test: 'Diaries of a Little Bitch' as the self-aware BTS/blooper strand of the channel (the honest, exhausted counterweight to the Wizard content) — A/B it as an email subject line first.",
  "Documentary edit device: use 'The charge is gone — that was the intention of the night' (03:45) as the false-summit midpoint, then smash-cut to the timestamp showing 2.5 hours of tape remaining.",
  "Series premise: 'One Sticky at a Time' — every one of the 50+ handwritten stickies becomes a short; the 'Closed Loop' sticky (04:32:24) is the pilot because the Maserati and go-kart stories are already baked in.",
  "Interactive lead magnet: 'The Desert Test' — a web version on his site where Gary (the chatbot) administers the visualization and decodes it; the 'this only works once' rule is the built-in share mechanic (people send it to friends to test them before they can be spoiled).",
  "Instagram/LinkedIn carousel: 'The Desert Test' in 10 slides — slides 1-5 build the image (desert, cube, ladder, flowers, horse), slides 6-10 decode; final slide: 'Send this to someone before they scroll further.'",
  "LinkedIn post: 'I put a Maserati on hold in 2009. I never canceled it.' — open loops, self-trust, and the hidden tax of unfinished commitments on founders; CTA: write down your three biggest open loops and mark each close / suspend-with-date / release.",
  "LinkedIn post: 'At hour four of a six-hour recording, my cameraman asked me one question and I went silent: why do you feel guilty for taking up space?' — founder-vulnerability angle, ends on the sun-doesn't-apologize reframe.",
  "Merch/sticker line from this chunk alone: 'The sun doesn't apologize for shining' / 'Let the dog run' / 'There's no maybe' / 'Even 1% is a lot.'",
  "Email subject lines: 'It's been on hold since 2009' / 'Regret is a void' / 'Even 1% of me is a lot' / 'I'm sick of myself' / 'The test that only works once.'",
  "Short-form series: 'The Discomfort List' — he names his top ten most uncomfortable things (from the 04:18:39 exchange) and does one per episode on camera, each ending with what the discomfort taught; episode one is already shot (the hot sauce bit).",
  "Contrarian wellness short/post: 'Cold plunge is trauma re-enactment for me' — the anti-guru take from a man who boiled through 106-degree fevers; engineered comment-bait for the Huberman/biohacker audience, ends with his alternative: foundational daily practices over shock therapy.",
  "Vlog episode: 'The night my cameraman became my coach' — cut the whole chunk as a two-hander; he paid Chris $1,000 and facilitated ketamine so Chris would listen, and by hour four Chris is running subconscious mapping exercises on HIM. The role reversal is the story.",
  "Whiteboard/carousel framework: 'Grow while mastering containment' — the expanding-nucleus / threshold-of-control model as a drawn visual; doubles as client-facing capacity language for the coaching offer.",
  "Relationship-lane reel (with Ashley's consent): 'An onslaught is coming' — the preface-message idea from 04:07:42 ('it's going to take you a while to get through this... so don't feel weird') played for comedy about dating a creative maniac; cross-pollinates with the Squabble/Queen relationship-software story.",
  "LinkedIn post (James's first swing): 'Measure your wealth by how many wires you send' + the story of hiring Chris on the spot for $1,000 mid-shoot — philosophy proven by the receipt.",
  "Shorts series premise: 'The Sticky Note Oracle' — Chris blind-draws a note, Spencer must teach it cold, one note per episode; Spencer names the mechanic himself ('it's like Whose Line Is It Anyway'), so the format is already branded.",
  "Lead magnet / product teaser: 'The Referee' — record any disagreement, AI transcribes it and shows each side exactly what they said; 'truth is data' turned into a tool that demos his software business.",
  "Email subject line: 'Your AI isn't dumb. It's a mirror.' — body from the AI-reflects-consciousness riff, closing into the precise-language offer.",
  "Carousel: 'Gaslighting ends where the tape begins' — 5 frames from feeling-vs-fact to 'the recording is the way back home.'",
  "Carousel/short: 'Legos vs Sandpaper — the two ways to build anything' — touch-it-once vs progressive-grit, mapped to how he builds software (spec-first spawn vs daily polish loop).",
  "Merch line: 'COOL-ASS MONKEY DOING ALIEN SHIT' tee/sticker; second SKU: 'BESTOW' once the running gag ships publicly.",
  "LinkedIn angle: 'Genius arrives at 10,000 hours — which means everyone has it. AI collapses the 10,000 hours.' Bridges the latent-genius teaching straight into BrainJam positioning.",
  "Vlog mini-doc: 'The night my content strategy built itself' — cut the meta moments (James's call, 'catching gold,' summer-solstice gift, 'make me an offer') into the origin story episode of the whole 6-month machine.",
  "Micro-teaching post: 'Can we make this fun?' — the six-word conflict-resolution opener from the shame-through-joy segment; ideal for the relationship/communication content lane.",
  "Vlog strand title: 'Public Therapy Session' — he names it on camera at 04:53:15; the raw confessional episodes get their own recurring banner distinct from the teaching shorts.",
  "Short/post pairing: 'The art of receiving' — 'the better I can receive, the bigger I can contribute... 1+1=11' as the mirror-image follow-up to the wires post (give-side and receive-side published as a two-part).",
  "Series premise: 'The Sticky Note Sessions' — one note per YouTube short, opening on the overhead grid, the chosen note animating (stop-motion) into the talking-head clip, closing on the NEXT note as the end-thumbnail. This chunk alone supplies 8+ episodes and the format matches the Notion technique doc exactly.",
  "LinkedIn post for James's channel: 'You're paying rent on your own data — to run a company you own.' Notion/ClickUp/Salesforce dependency risk, then the ten-year question. Direct funnel into the own-your-software offer; the 05:34:23 rant is the source text.",
  "Manifesto copy: lift the AI-overlords/UBI passage nearly verbatim as the 'why now' section of the machine-that-builds-machines site — it's the darkest, most urgent articulation of the thesis captured on camera.",
  "Carousel: 'Eat monsters quickly. Taste angels slowly.' — 6 slides: monster appears → address it fast → 'are you complete?' → realign → angel appears → sips, not gulps. Illustrated in the layered drawn-element style.",
  "Merch/art-print line: reproduce the actual handwritten sticky notes as a print set — 'Restraint is the new attainment,' 'Eat monsters quickly, taste angels slowly,' 'Mastery is in the detail you deem significant,' 'I'm already dead, so let's dance.' The physical props become the product.",
  "Email subject line: 'Nobody would watch the movie where everything goes right' — body: the happiness-vs-story teaching, applied to whatever hard season the reader is in; CTA to the long-form clip.",
  "Lead magnet: 'The Frames' — a one-page field guide to Spencer's shapeshifting modes (The Provider, The King, The Pit Bull, The Conductor, The Tyrant-on-purpose) with the circumstance that calls for each; sourced from 05:15:50-05:17:46 and 05:27:11-05:29:07.",
  "YouTube long-form essay: 'What Killed Alan Watts' — the dosage/poison framework for founders (work, alcohol, content, even meditation), built from 05:29:34 with the receive/restraint material as supporting acts.",
  "Relationship sub-personality content: 'The Last First Page' as an evergreen IG reel with the book-page visual as a literal stop-motion layer (pages turning, stopping on page one); caption pulls the 'greatest love story of all time' line.",
  "Book-teaser reel: he name-drops his book 'Sidekick' at 05:25:31 — cut every 'Sidekick' mention across all 12 chunks into one teaser and stand up a waitlist page before the book exists.",
  "Mini-doc episode for the vlog: 'I dosed my cameraman so he'd listen' — the Spencer/Chris relationship arc from the opening ketamine facilitation to the 05:31:37 headphone role-reversal to 'thank you for getting me back in the boat'; the strongest human story inside the 6 hours.",
  "LinkedIn post: 'Mastery is in the detail you deem significant' — tie to the daily-improvement-loop: why his software clients vote on ONE improvement per day instead of shipping fifty; quote at 05:07:39 as the hook.",
  "LinkedIn lead-gen post (James's lane): 'You are paying rent on a company you own' — name Notion/ClickUp/Salesforce, ten-year dystopia stakes, CTA to the own-your-software offer. The 05:34 rant is the video version.",
  "Series premise: 'The Sticky Note Sessions' — one short per handwritten note; this chunk alone yields 12+ episodes. Signature mechanic: overhead stop-motion of the note animating, then the note-as-thumbnail expands into the clip (matches the layered photographic stop-motion technique exactly).",
  "Brand line + merch: 'BRAKE IS THE NEW GAS' — sticker/tee, plus an animated Rainbow-Road downhill-luge explainer as the flagship stop-motion short. Also an email subject line for the abundance-overwhelm segment of his list.",
  "Positioning line for the Oracle/Amplifico offer page: 'I'm not the wisdom originator. I'm the miracle facilitator.' Pair with a 'Miracle Tour 2026' framing — a running public scoreboard of client dreams shipped.",
  "Email subject line: 'Perfection is the aim. Calibration is the game.' — opens a story about the one-shot prompt and shipping software at the speed of speech.",
  "Lead magnet / VSL: 'The One-Shot Prompt' — how a business's consciousness becomes owner-controlled software in a single prompt; cold-open with the 05:44 clip, close with the fridge-from-a-3D-printer prophecy.",
  "LinkedIn carousel: 'Integrity is the primary KPI of being a human' — 5 slides: the definition (intentions=commitments=actions), the chair, the relationship, the business, and the closer 'better strategy or different network.'",
  "YouTube long-form frame: 'I hired my cameraman with a magic trick' — the 06:03 finale re-enactment as the cold open, the six-hour night as the body, the wrap moment as the ending; the whole film becomes proof of 'say it, then make it real.'",
  "Carousel/newsletter: 'Nibbles and sips, no chugging' — consumption etiquette for abundance (chug beer / sip champagne / nibble caviar / two ounces of Wagyu) remapped to attention, dopamine, and how people binge content.",
  "Vlog episode: '1:15 AM — Complete, not tired' — the last ten minutes as a standalone piece on choosing work that energizes ('letting the dog run'), ending on 'that's a wrap.'",
  "LinkedIn contrarian post: 'Job finished? Don't think so.' — anti-celebration culture take (against congratulating funding rounds and progress posts), captioned clean, raw video in comments.",
  "One-question decision filter asset: 'You get to be selfish in one question — what sets your soul on fire?' — email, quote card, and the opening prompt of his discovery calls / Oracle onboarding.",
  ...s2Ideas,
]

export const youtube: YouTubeStrategy = {
  "positioning": "This channel is for founders and owner-operators who are paying rent on their own business — SaaS bills, platform algorithms, harvested data — and want to own their software, their data, and their name before AI equalizes everything. Spencer Burnett is building what took 10,000 people three years, alone, in 30 days, and filming the predictions before they come true. The channel itself is one continuous film: every thumbnail is frame one of its video, every video ends frozen on the next video's thumbnail, all of it graded on Dehancer film stock so it feels like memory. Subscribe for three things you get nowhere else — the ownership doctrine that saves six figures in software spend (\"Do your clients own it?\"), the wizard's operating system for shipping at AI speed without burning down (containment, integrity, precise language), and a documented magic trick: a man who says the bold thing on camera, then makes it real, with receipts. Watch long enough and you will book the call — that is the design.",
  "pillars": [
    {
      "pillar": "Own It",
      "description": "The commercial spine. Data is the digital form of your consciousness; SaaS makes you rent your own brain back; the only qualifying question is binary: do you own it? Every video in this pillar converts the wound (188 months, the blender, the stolen savings) into doctrine, and the doctrine into the product — owner-controlled custom software. This pillar carries every CTA and produces the videos a founder watches before booking a call.",
      "source_themes": [
        "Do You Own It? — Ownership as the Only Game",
        "The Consciousness Upload — the Machine That Builds Machines",
        "Betrayal to Sovereignty: Why Every Client Owns Everything (arc)",
        "True Scalability — the Oracle's Founder-First Pitch (S2)",
        "The Moment of Completion — Execution Doctrine for Founders (S2)"
      ]
    },
    {
      "pillar": "The Build",
      "description": "Authority through demonstrated shipping. Ten skyscrapers in 30 days, the 14-day sprint, the 70% software-bill cut, the 30-day plumbing-company rebuild, 'I'm not the most capable — I'm just first to market.' This pillar proves the doctrine with receipts and documents predictions as they land, turning the channel into a live case study of the machine that builds machines.",
      "source_themes": [
        "Ten Skyscrapers in 30 Days — the AI Speed Collapse",
        "The 14-Day Sprint — Support Me or Get Out of the Way"
      ]
    },
    {
      "pillar": "The Wizard's Operating System",
      "description": "The teaching engine and the format engine in one. Downloads as controlled mania, containment as the discipline of the epoch (brake is the new gas, eat monsters quickly, nibbles and sips), integrity as the primary KPI, and the Genie Protocol — precise language as AI calibration. The 50+ handwritten sticky notes are the deck: each note is a thumbnail, an episode, a merch line, and a book chapter simultaneously.",
      "source_themes": [
        "Controlled Mania — Downloads as the Creative Operating System",
        "Containment — the Named Discipline of the Next Epoch",
        "The Genie Protocol — Precise Language Fused With AI",
        "Integrity Is the Magic Trick — Zero Impedance",
        "The Shapeshifter's Deck — Sub-Personalities and the Sticky-Note Oracle",
        "Reality vs. Truth — Precise Language as the Way Home (S2)",
        "Prayer Is Prompting — One Protocol for God and the Machine (S2)"
      ]
    },
    {
      "pillar": "The Prophecy Ledger",
      "description": "The differentiation layer. The 2029 split — UBI, sovereigns, consumers — always packaged with the standing disclaimer ('this is not truth, it is what I'm hearing') and always paired with a receipt (the Q2 declaration landing on the 15th, the magic-trick hiring of Chris, the February video coming true). The disclaimer-plus-receipts formula is what lets a mainstream business audience receive prophet material without bouncing.",
      "source_themes": [
        "Prophecy With a Disclaimer — the 2029 Split",
        "Integrity Is the Magic Trick — Zero Impedance"
      ]
    },
    {
      "pillar": "The Human Under the Hat",
      "description": "The trust and retention layer. 106.5-degree fevers synced to his mother's chemo, the pattern of rise-woman-god-mode-loss, the habanero sequence, the cameraman who became the coach, the love story paced at four percent. These videos inoculate the dense teaching content, humanize the wizard, and give the audience a character to return to — the reason the continuous-film mechanic has a story worth following.",
      "source_themes": [
        "The Prophet's Burden — Fevers, Sensitivity, and the Forge",
        "The Pattern — Rise, Woman, God-Mode, Loss",
        "Love Relocates — the Relationship Alchemist",
        "The Thousand-Dollar Witness (arc)",
        "The Body Keeps the Tape (arc)",
        "Love Is Unconditional; Relationships Are Conditions (S2)",
        "Processing Shame Gracefully — the One Lever (S2)",
        "Job Finished: The Breakup Happens On Camera (S2 arc, clearance-gated)"
      ]
    }
  ],
  "series": [
    {
      "title": "The Sticky Note Sessions",
      "premise": "The flagship Shorts series and the literal application of the signature mechanic: an overhead stop-motion card-draw, the handwritten note IS the cover frame, the note expands into the talking-head teaching, and the clip freezes on the NEXT note. One note, one idea, one landing line, under 60 seconds. Fifty-plus episodes already exist in the June 21 footage; each biweekly shoot refills the deck. This series is the discovery engine that feeds everything else.",
      "cadence": "3 per week (Mon/Wed/Fri), indefinitely — the backlog alone covers 4 months",
      "episodes": [
        "Brake Is the New Gas (C23)",
        "Eat Monsters Quickly, Taste Angels Slowly (C40)",
        "Measure Your Wealth by How Many Wires You Send (C46)",
        "Only Truth Required — Your AI Is a Mirror (C45)",
        "Closed Loop — The Maserati on Hold Since 2009 (C44)",
        "Job Finished? Don't Think So. (C27)",
        "The Sandpaper Teaching — Faster Means Gentler (C47)",
        "Nobody Wants Happiness. You Want the Story. (C43)",
        "Never Be a Bitch — Duty Defined (C42)",
        "Restraint Is the New Attainment",
        "Master Containment — the Note Taped to His Laptop (05:58:16)",
        "Nibbles and Sips, No Chugging — Vol. 1 finale (05:59:14)"
      ]
    },
    {
      "title": "Do You Own It?",
      "premise": "The weekly mid-form business series (5–8 minutes) and the direct lead-gen lane for high-ticket AI software builds. Every episode is one movement of the ownership doctrine — rant, proof, or prophecy — and every episode ends on the same binary question and the same CTA: Do your clients own it? Book the call. Cut business-safe (the 00:15:54 trim rule), with the raw versions reserved for the long-forms.",
      "cadence": "1 per week (Tuesdays)",
      "episodes": [
        "Kill the Machine: Own Your Shit (C05)",
        "You're Renting Your Own Data (C17)",
        "Personal Software Will Take Down YouTube (C06)",
        "He Paid for 90 Days. We Shipped in 30. (C07)",
        "70% of the Software Bill, Gone (C16)",
        "Fuck IP — The Ownership Manifesto (C11)",
        "Create Your Own Container: The AI Gap (C12)",
        "One-Shot Prompt to Anything (C26)",
        "You Can Only Burn Your Name Once (C35)"
      ]
    },
    {
      "title": "The Wisdom Originator",
      "premise": "The biweekly long-form flagship line — the eight chaptered pillar episodes mined from the June 21 session, each 12–30 minutes, each the deep artifact a founder binge-watches before deciding Spencer is the one to build their machine. Ten Skyscrapers is the episode that books calls; 188 Months is the episode that builds trust; the rest build the character. Published in an order that alternates commercial and human, and chained by the freeze-on-next-thumbnail mechanic so the season plays as one film.",
      "cadence": "1 every 2 weeks (alternate Saturdays) — 8 episodes = 16 weeks, exactly the July 6 to November 1 window",
      "episodes": [
        "Ten Skyscrapers in 30 Days — The Solo AI Builder Manifesto",
        "188 Months: Betrayal, Prison, and the Ownership Doctrine",
        "Inside the Wizard's Head: How Downloads Work",
        "The Fever With No Virus",
        "The Sticky Note Gospel (Wizard's Tarot, Vol. 1)",
        "2029: The Split",
        "The Greatest Love Story Ever Told (One Page at a Time)",
        "Six Hours: The Making of the Wisdom Originator (season finale)"
      ]
    },
    {
      "title": "The Night Tapes",
      "premise": "Monthly documentary cuts of the night itself, built from the narrative arcs — the self-aware film, the discharge, the two-hander with Chris, the eve of battle. These are the retention and word-of-mouth pieces: comedy-to-depth shapes, real-time clocks, fourth-wall breaks. The Habanero Sequence ships early on purpose — it is the single best humanizer in the archive and inoculates the audience for the dense doctrine episodes.",
      "cadence": "1 per month",
      "episodes": [
        "The Habanero Sequence (03:04:38–03:11:43, 3–4 min)",
        "The Thousand-Dollar Witness — the cameraman's five role shifts (10–12 min)",
        "The Charge — six weeks of pressure, one night of release (15–20 min)",
        "Eve of Battle: 14 Days — the countdown cut with on-screen clock (12–15 min)"
      ]
    },
    {
      "title": "The Cards (Session 2)",
      "premise": "The question-driven sibling of the Sticky Note Sessions, born whole in the July shoot: a homie behind the camera feeds a written card, Spencer answers in one take, the card itself is the cover frame. Where the notes are transmission mode (self-authored doctrine), the cards are response mode — the answers arrive live, which is why Session 2's density of self-contained cuts beats Session 1's. The deck alternates lanes: doctrine cards (choosing vs. allowing, the truest test of control), heart cards (I fully believe in my partner), and flip cards he rewrites on camera ('done this one — let's take a different spin').",
      "cadence": "2 per week once the S2 batch cuts — the July deck holds 12+ episodes; every future shoot alternates notes deck / cards deck",
      "episodes": [
        "Choosing vs. Allowing — The Seafood Rule (C100)",
        "Prayer Is Prompting God (C114)",
        "The 1% Mirror (C102)",
        "The Truest Test of Control (C121)",
        "Perfect, and Not for Me (C112)",
        "I Fully Believe in My Partner (C122)",
        "Action Dictates Priority (C113)",
        "The Trap of the Wise — Doggy Doggy (C119)",
        "I Don't Get Mad. I Lose Interest. (C98)",
        "Know Your Role. Process Later. (C115)"
      ]
    }
  ],
  "cadence": "Sixteen published pieces per month from one 6-hour shoot every ~2 weeks plus the existing 200-piece backlog: 3 Sticky Note Shorts per week (Mon/Wed/Fri) + 1 \"Do You Own It?\" mid-form every Tuesday + 1 \"Wisdom Originator\" long-form every other Saturday + 1 \"Night Tapes\" documentary cut per month. The June 21 backlog alone funds this calendar through November 1; each new biweekly shoot yields roughly 2 long-forms, 4 mid-forms, and 20+ shorts, so the machine runs one shoot ahead of the calendar at all times. Edit load stays fixed because every format runs on a locked template: the Dehancer grade preset, the stop-motion layer kit, the disclaimer card, and the freeze-on-next-thumbnail end plate. PROOF OF CADENCE: Session 2 landed on schedule (the July shoot, 2h36m, uploaded 7.22) and delivered the promised refill — 46 new clips, 14 shorts, 3 pillar assemblies — so the machine enters August running one full shoot ahead of the calendar, exactly as designed. The mix shifted on its own: S2 is heart-chapter heavy, which hands September's Human month its entire supply and adds a fifth lane (The Cards) to the shorts engine.",
  "first_30_days": [
    "Jul 6–8: Stand up the channel — handle, banner from the sticky-note wall photo, bio line 'You say something is possible — I will make it real,' About page written from the 00:45:24 wizard thesis, and a description template that ends every video with 'Do your clients own it?' plus the booking link and the Ownership Audit lead magnet.",
    "Jul 6–9: Build the factory before publishing — lock the Dehancer film-emulation preset, the stop-motion layer template, the standing prophecy disclaimer card ('This is not truth — it is what I'm hearing'), the freeze-on-next-thumbnail end plate, and the Shorts caption style. Every future edit runs through these five templates.",
    "Jul 8–10: Asset pass — photograph all 50+ sticky notes overhead in the June 21 lighting, ingest the 90-image album, and produce the first 8 thumbnails. Because the thumbnail is frame one, thumbnail creation is an edit decision: no cut starts until its thumbnail exists.",
    "Jul 10: Publish the channel trailer 'This Was Never Content' — 90 seconds opening cold on the 06:03:54 magic-trick re-enactment, the 00:09:57 journal-entry contract as voiceover ('if you're seeing this as content, you were meant to see it'), ending frozen on the Ten Skyscrapers thumbnail.",
    "Jul 11–13: Publish Sticky Note Sessions episodes 1–3 (Brake Is the New Gas, Eat Monsters Quickly, Measure Your Wealth by Wires Sent), each cover frame the real handwritten note, each freezing on the next note.",
    "Jul 14: Publish Do You Own It? #1 — 'Kill the Machine: Own Your Shit' (C05, trimmed to the 00:15:54 business-safe cut), pinned comment asking the binary question.",
    "Jul 18: Publish flagship #1 'Ten Skyscrapers in 30 Days' — full chapters, pinned comment, description CTA, end-freeze on the 188 Months thumbnail. This is the lead-gen anchor; everything published before it exists to feed it traffic.",
    "Jul 19–20: Run the second 6-hour shoot on the biweekly rhythm, shot list driven by gaps in the backlog: retrieve the 2006 System X notebook for its own episode, re-shoot the clean zero-personal-detail teaching versions, write and capture the next 25 sticky notes, and match the June 21 lighting plot exactly so thumbnails stay continuous.",
    "Jul 20–26: Week 3 publishing — Shorts 4–6, Do You Own It? #2 'You're Renting Your Own Data,' and Night Tapes #1 'The Habanero Sequence' (the humanizer ships early, per the treatment, to inoculate the doctrine content).",
    "Jul 27–Aug 2: Week 4 publishing — Shorts 7–9, Do You Own It? #3 'Personal Software Will Take Down YouTube,' and flagship #2 '188 Months' with the story-before-pitch structure preserved inside the cut.",
    "Throughout: reply to every founder-shaped comment within 24 hours and log every 'which video sent you?' answer from booked calls — attribution starts on day one, in a simple sheet.",
    "Aug 2–4: 30-day review against the metrics list — CTR, 30-second hold, end-plate click-through, shorts-to-long-form conversion, booked calls attributed. Double down on the two best-performing formats, lock the August calendar from the remaining backlog, and schedule shoot #3."
  ],
  "thumbnail_system": [
    "The thumbnail IS frame one: the uploaded thumbnail is the literal first still of the cold open, and the video begins by animating out of it — stop-motion layers waking up around the frozen frame. Consequence: the thumbnail is chosen before the edit starts, never after.",
    "Every video's final shot freezes on the NEXT video's completed thumbnail with the end-screen element placed directly on it. Operational rule: no video ships until its successor's thumbnail exists — keep a one-ahead thumbnail ledger so the chain never breaks.",
    "One film stock: every thumbnail passes through the same Dehancer emulation preset (same stock, same halation, same grain) so the channel grid reads as a single continuous filmstrip.",
    "Long-form composition formula: one photographed base still of Spencer at the desk + one hand-drawn stop-motion layer that names the idea (ten assembling skyscrapers, blender blades, twin 2029 timelines, a fighter-jet contrail) + a maximum of three words of title text rendered in his actual handwriting style.",
    "Shorts rule: the handwritten sticky note held to camera IS the cover — real handwriting, no typeset text, no exceptions. The note expanding into the clip is the format's signature.",
    "Prophecy episodes carry a small recurring stamp motif for the disclaimer ('not truth — what I'm hearing') so the epistemic frame travels with the packaging, not just the edit.",
    "Legibility gate: every thumbnail must read at 120px on a phone. If the drawn layer or text fails the squint test, cut to one object and one face.",
    "Set continuity: same desk, same cinematic lighting plot, same wardrobe palette across all future shoots, matched to June 21 — so every new thumbnail is recognizably a frame from the same film, and freeze-frames from different shoots can chain without a visible seam."
  ],
  "metrics": [
    "Booked discovery calls and inbound emails/DMs that cite a specific video — the primary metric; ask 'which video sent you?' on every call and log it. Target: 3–5 attributed conversations per month by day 60.",
    "Thumbnail CTR on long-form: target 4–6% — the thumbnail system carries the packaging load, so CTR is the direct test of whether the frame-one mechanic works as packaging.",
    "First-30-seconds retention on the thumbnail-expansion cold open: above 70% hold means the signature mechanic earns the click it got.",
    "End-plate click-through onto the next episode's frozen thumbnail — the continuity KPI unique to this channel. Above 8% means the 'one continuous film' thesis is landing and session watch time compounds.",
    "Average view duration on Wisdom Originator flagships: target 40%+ of runtime, with the chapter drop-off map reviewed per episode to tune future cut structure.",
    "Shorts-to-long-form conversion: viewers who watch a Sticky Note Session and then a flagship within 7 days — the test of whether the discovery engine feeds the authority engine.",
    "Returning-viewer ratio vs new-viewer ratio: a rising returning share is the audience treating the channel as a film they are following, which is the retention model the mechanic is built on.",
    "Subscriber conversion per video (subs gained / unique viewers) rather than raw subscriber count — a 0-to-1 authority channel optimizes conversion density, not vanity totals.",
    "Language adoption in comments: viewers quoting doctrine lines verbatim ('do you own it,' 'brake is the new gas,' 'own your shit') — the leading qualitative indicator that authority is transferring and the phrases are becoming his."
  ]
}

export const linkedin: LinkedInStrategy = {
  "positioning": "Spencer on LinkedIn is THE OWNERSHIP GUY: the founder who builds custom AI software that businesses OWN — code, data, keys — instead of rent. One flagship sentence carries the profile: \"I build you a fighter jet — and you can fly it yourself.\" The content spine is the operator material only (per the mined footage split: LinkedIn gets the operator beats, the vlog gets the mystic ladder): the 188-months betrayal that birthed the ownership doctrine, the ten-skyscrapers-in-30-days speed collapse, the $15K→$50K value-pricing arc, the 70%-software-spend kill list, the 24-hour team onboarding, and the radical-honesty edge (\"I'm not the most capable. I'm just first to market\"). Prophecy appears only in its business-safe form (capability equalizes → trust and your name become the last durable assets). Target reader: founders and owners of $1M–$50M service and coaching businesses (HVAC, plumbing, real estate, agencies) bleeding $10K+/month on SaaS + admin labor. Every business post funnels to one binary question that doubles as the brand call sign and CTA: \"Do you own it?\" Goal: booked diagnostic calls for $15K–$50K+ builds, with follower growth as the compounding by-product. Voice rule: Spencer's actual phrasings from the tape, lightly sanitized for platform (keep \"Own your shit,\" cut the harder profanity), always hook-first, short lines, declaratives, zero corporate filler.",
  "division_of_labor": "JAMES OWNS LINKEDIN — full stop, per Spencer's own words (\"I will be the dancing monkey, I will give you as much content as you need\"). JAMES DOES: (1) runs the calendar — schedules 5-6 posts/week from the ready-post bank and the 200-piece archive; (2) cuts and subtitles the LinkedIn clips from the timestamped clip list (45-90s, Dehancer grade, caption files); (3) designs carousels and quote cards from the frameworks and the 90-image album; (4) drafts new text posts from timestamped transcript quotes in Spencer's voice for batch approval; (5) works every comment section within 2 hours of posting and flags founder-profile commenters; (6) runs the DM funnel end to end — sends the Ownership Audit, asks the one qualifying question, books diagnostic calls onto Spencer's calendar; (7) sends 10-20 targeted connection requests/day to ICP founders who engaged; (8) maintains the post→lead attribution sheet and kills formats that get likes but no calls. SPENCER SUPPLIES WEEKLY (under 2 hours total): (1) one 30-minute Sunday batch-approval session — thumbs up/down on the week's queue, voice-memo edits only; (2) two to three raw voice memos of business stories as they happen (client wins, pricing moments, build-sprint beats) — James converts to posts; (3) 15 minutes/day commenting from his own profile on target-founder posts and replying to the hottest thread on his own post; (4) the physical assets on request — sticky notes photographed, the 2006 System X notebook, new receipts (wires, kill lists, dashboards); (5) the diagnostic calls themselves. HARD BOUNDARY: Spencer never schedules, formats, or DMs. If Spencer is mid-sprint, James publishes from the bank without him — the 6-hour tape plus 50 sticky notes is a 4-month runway with zero new input.",
  "post_types": [
    {
      "type": "Text story post",
      "description": "Hook-first business narrative in Spencer's voice with heavy line breaks: the 188-months story, the skyscraper dad-conversation, the rate arc, the blender. Sourced from timestamped transcript quotes and Spencer's weekly voice memos; James drafts, Spencer approves in the Sunday batch. This is the lead-gen workhorse — LinkedIn's algorithm and the ICP both favor founder story-text.",
      "cadence": "2x/week (Monday + Thursday)"
    },
    {
      "type": "Clip + caption (native video)",
      "description": "45-90 second subtitled cut from the 6-hour footage — the rants and teachings (C05 Own Your Shit trimmed to the 00:15:54 business-safe cut, C17 Rent-Your-Own-Data, C16 70% Gone, C19 First to Market, C22 Integrity Chair). Caption restates the hook in text and closes on the CTA. Dehancer grade keeps the cinematic signature.",
      "cadence": "2x/week (Tuesday + Friday)"
    },
    {
      "type": "Sticky-note photo post",
      "description": "Photograph of one actual handwritten sticky note (from the 50-note deck / 90-image album) held to camera or shot flat, plus a 100-150 word parable expanding it. Serializes the book 'I'm Just Trying to Tell a Story' in public — each note is a chapter teaser. Meta-hook available anytime: 'my AI compiles these into a book daily.'",
      "cadence": "1x/week (Wednesday)"
    },
    {
      "type": "Carousel",
      "description": "6-10 slide framework teaching, James-designed: 'A million likes on Instagram vs a million likes on your own software' (rented vs owned rails), 'The Founder Sprint Protocol' (five rules verbatim), 'Integrity is the primary KPI of being a human,' 'You Have Modes.' Final slide always carries the binary question or the lead-magnet keyword.",
      "cadence": "1x/week (rotates into Friday or Saturday)"
    },
    {
      "type": "Case study / proof post",
      "description": "Numbers-first client receipt: 70% software spend cut, plumbing company live in 30 days on a 90-day contract, $30-40K/month saved, team onboarded in 24 hours, the 'how can I pay you MORE money?' Sunday text. Pairs with the C07/C16 clips or a receipt screenshot (names redacted). This is the post type that books calls — protect its slot.",
      "cadence": "Every other week (Thursday slot)"
    },
    {
      "type": "Quote card",
      "description": "Typography card of one 5-strength quote over a Dehancer-graded still from the 90-image album: 'Restraint is the new attainment,' 'You can only burn your name once,' 'Measure your wealth by how many wires you send.' Zero CTA — pure following-builder and save-bait.",
      "cadence": "1x/week (Saturday)"
    },
    {
      "type": "Build-in-public sprint dispatch",
      "description": "Short daily update during campaign windows only ('Day 4 of 14: two softwares walked, twelve to go'), anchored by the published To-Whom-It-May-Concern letter as Day 1. Converts the audience into Spencer's stated 'reality anchor' — comment prompts, not compliments ('I don't need compliments, I need participation').",
      "cadence": "Daily during launch windows; dormant otherwise"
    },
    {
      "type": "Open letter / manifesto",
      "description": "Rare tentpole long-post: the actual shower letter, the ownership manifesto (05:34 rant adapted), the compression/launch declaration. High-risk high-reach; always paired with a pinned-comment lead magnet because these posts travel beyond the network.",
      "cadence": "1x/month maximum"
    }
  ],
  "weekly_rhythm": [
    "MONDAY — Text story post (rotation: betrayal→doctrine, skyscrapers, rate arc, name-as-asset). Posts 8-9am ET. Spencer does his 15-minute comment sprint one hour after posting; James works the thread all day and logs founder-profile commenters.",
    "TUESDAY — Clip + caption (rant or teaching video, subtitled). James replies to every comment within 2 hours and opens DMs with anyone who comments the keyword. Best slot for the harder-edged material (Own Your Shit, Rent Your Own Data).",
    "WEDNESDAY — Sticky-note photo post (one card from the deck + parable). Lightest lift, highest consistency signal; doubles as the public book serialization. James queues the next three notes every Wednesday so the series never breaks.",
    "THURSDAY — Alternating: case study / proof post (weeks 1 and 3) or second text story (weeks 2 and 4). This is the highest-intent slot — the 'Do you own it?' CTA and Ownership Audit keyword always run here.",
    "FRIDAY — Carousel or second clip (framework teaching). End of day, James sends the week's DM-funnel follow-ups: every engaged founder gets the audit offer, every audit-taker gets the qualifying question, every qualified answer gets a booking link.",
    "SATURDAY — Quote card, no CTA. Brand reinforcement and save-bait for the weekend scroll. James sends 10-20 connection requests to the week's best-fit engagers.",
    "SUNDAY — Dark on the feed. Spencer's 30-minute batch session: approve next week's queue, record 2-3 voice memos of the week's business moments. James schedules the full week and updates the attribution sheet. During sprint/launch windows only, Sunday carries a build-in-public dispatch instead of going dark."
  ],
  "ready_posts": [
    {
      "hook": "My business partner is serving 188 months in federal prison.",
      "body": "He stole my life savings.\n\nHalf a million dollars. Gone.\n\nAnd here's the part that still wakes me up: if the co-conspirators had told the story differently, I would be the one in prison. For a crime I didn't commit.\n\nI learned exactly what happens when the thing you built lives in somebody else's hands.\n\nSo when I started building AI software for businesses, I made one rule and I have never broken it:\n\nThe client owns everything.\n\nThe code. The data. The system. The keys.\n\nNot a license. Not a seat. Not a subscription that evaporates when the vendor updates their pricing page.\n\nOwnership.\n\nI don't preach this because it's a clever angle.\n\nI preach it because I paid the tuition.\n\nEvery AI vendor you talk to, ask them one question:\n\nDo your clients own it?\n\nWatch what happens to the conversation.",
      "source_timestamp": "00:03:05",
      "format": "text story"
    },
    {
      "hook": "My dad asked how work was going. I asked him a question back.",
      "body": "Imagine a skyscraper going up in your city.\n\nThe kind that takes 10,000 people three years to build.\n\nNow imagine you drove past that empty lot 30 days ago — and today the tower is finished.\n\nNow imagine, Dad, that not only was one skyscraper built. Ten were built. In 30 days.\n\nAnd then I ask you: hey, so how's work been going? Do you feel like you'd be a little manic?\n\nThat is what building with AI feels like right now.\n\nI'm shipping ten software products in 30 days. Alone. Work that used to take teams of engineers years.\n\nAnd the people around me can't process it. You'd feel like you'd seen a ghost.\n\nHere's the part nobody says out loud: the gap between what is actually happening and what the average business owner knows is bigger than it has ever been.\n\nPeople are still asking 'what's Claude?'\n\nThe towers are already going up.\n\nDo you own yours?",
      "source_timestamp": "00:11:34",
      "format": "text story"
    },
    {
      "hook": "Right now you are paying to rent your data — for a company that you own.",
      "body": "Read that again.\n\nYour customer list. Your job history. Your pricing. Your workflows.\n\nThat is not 'software data.' That is the digital form of your company's consciousness.\n\nAnd every month you wire money to Salesforce, ServiceTitan, Notion, and eleven other tools for the privilege of accessing it.\n\nIf you don't own it — how much do you trust whoever does?\n\nYou are paying consequences for decisions you're not making. That's the definition of being a victim.\n\nThere is another way to run this:\n\nYour operations, your data, your software — built once, owned forever, running on your rails.\n\nMy clients delete the subscriptions. We cut one company's software spend by 70%.\n\nThe only game at the end of the day is one question:\n\nDo you own it?",
      "source_timestamp": "05:34:23",
      "format": "clip + caption (native video, C17)"
    },
    {
      "hook": "Every AI pitch I hear gets the same question. It ends most of them.",
      "body": "'We have this amazing AI platform for your business—'\n\nStop.\n\nDo your clients own it?\n\nThat's it. That's the whole filter.\n\nIf the answer is yes — now we're having a completely different conversation. Show me everything.\n\nIf the answer is no, what they're selling is dependency with a dashboard.\n\nBecause what do you think makes the AI so smart? It's YOUR input. Your data. Your company's consciousness, harvested in digital form.\n\nYou feed the machine. Then you rent access to what you fed it.\n\nI build it the other way: the founder holds the keys, and when we're done, my clients are trained to build on it themselves.\n\nI build you a fighter jet — and you can fly it yourself.\n\nNext time someone pitches you AI, run the question.\n\nDo your clients own it?\n\nThe silence tells you everything.",
      "source_timestamp": "00:17:15",
      "format": "text story"
    },
    {
      "hook": "I'm not the most capable builder in this market. I'm just first.",
      "body": "That's honesty, and it's also math.\n\nThe machine improves every single week. Timelines are collapsing so fast I keep making new promises — because the old ones keep coming true early.\n\nAnd I know exactly what happens next: the market catches up, and the machine eats the early advantage.\n\nI know the machine and the market are going to eat me.\n\nThat's why my operating rule is one line: get this done NOW.\n\nWhile my competitors are 'exploring AI,' I'm shipping. Ten products. 30 days. Solo.\n\nFirst to market beats most capable — but only if you actually move.\n\nMost founders I talk to are waiting for the dust to settle.\n\nThe dust IS the opportunity.",
      "source_timestamp": "01:27:35",
      "format": "text story"
    },
    {
      "hook": "We cut 70% of a client's software spend. Then onboarded their entire team in 24 hours.",
      "body": "Not 24 days. Hours.\n\nHow does a whole team adopt brand-new software in one day?\n\nBecause the software came out of the founder's head.\n\nThe process:\n\nThe founder uploads the consciousness of the organization — how jobs actually flow, how money actually moves, what the team actually complains about.\n\nWe turn that into custom software the business owns outright.\n\nNo retraining people to think like Salesforce. The software already thinks like them.\n\nThen we run the kill list: every subscription the new system replaces gets deleted. That's where the 70% went.\n\nThe best part isn't the savings.\n\nIt's the Sunday message from the client: 'How can I pay you MORE money?'\n\nThat is what happens when a team owns its machine instead of renting somebody else's.\n\nWant the kill-list worksheet? Comment OWN and I'll send it.",
      "source_timestamp": "01:49:57",
      "format": "case study (clip + caption, C16)"
    },
    {
      "hook": "He paid for 90 days. We shipped in 30.",
      "body": "A plumbing company running on ServiceTitan and duct tape.\n\nWe rebuilt the entire operation — scheduling, dispatch, payments, customer portal — as custom software the owner controls.\n\nLive in 30 days. Saving $30–40K a month in software and labor. Team trained to build on it themselves — that's part of the deal, always.\n\nHere's what that did to my pricing.\n\nMy first builds were $15K. The results compounded, the referrals arrived carrying bigger problems, and the quotes followed the value: $25K. $50K. Up.\n\nNobody blinked. One client literally asked: 'How can I pay you MORE money?'\n\nThe greatest magic trick of all time is pricing on value instead of hours.\n\nWhen the build replaces a $40K-a-month problem, the invoice is the cheap part.\n\nRenting software you will never own — that's the expensive part.",
      "source_timestamp": "01:12:53",
      "format": "case study text story"
    },
    {
      "hook": "To whom it may concern: for the next two weeks, I don't need space. I need support.",
      "body": "This letter arrived in the shower, and I sent it to the people closest to me — including my mom.\n\nI'm publishing it because some of you are about to enter a season like this, and nobody hands you the script.\n\nFor the next 14 days I am completing the software that the last two years pointed at.\n\nMy requests are precise:\n\nMy peace is protected.\nSignal over noise.\nFeed the beast — snacks, sleep, environment.\nSupport me, or get out of the way.\n\nThis is a power-up mode that's only good in short bursts. Hard stop at two weeks — past that, the mode does damage.\n\nHere's the teaching inside the letter:\n\nMost people ask for 'space' when they're building. Space is a void — it names nothing.\n\nName what you actually need. Direction, magnitude, duration.\n\n'Support me for 14 days, in these specific ways, and then I return.'\n\nWatch how differently people show up when the request is precise.\n\nDay 1 starts now.",
      "source_timestamp": "02:14:23",
      "format": "open letter text post (launch Day 1)"
    },
    {
      "hook": "I recorded 6 hours of video so my team only has to read 6 minutes.",
      "body": "Two Saturdays ago I sat in front of one camera from 6pm to 1:30am and emptied everything: the build plan, the requirements, the standards, the why.\n\nThen AI distilled six hours of my consciousness into a requirements doc my people read in six minutes.\n\nNobody watches three hours of me talking. Nobody schedules a meeting. Nobody interprets.\n\nThis is the exact product I build for businesses.\n\nA founder's head holds the entire company: how estimates really get priced, which customers really matter, what 'done' really means. Everyone else runs on secondhand fragments of it.\n\nSo we upload the consciousness — Looms, conversations, documents, the founder talking straight into a camera — and it comes out the other side as owner-controlled software.\n\nWhole teams onboard in 24 hours, because the software came from the founder.\n\nYour business already knows how to run itself.\n\nIt's all in your head. That's the problem — and the raw material.",
      "source_timestamp": "03:03:31",
      "format": "text story"
    },
    {
      "hook": "I put a Maserati on hold in 2009. I never canceled it.",
      "body": "Seventeen years of a salesman technically waiting for my call.\n\nI held the sticky note up to the camera last week: CLOSED LOOP. It had been staring at me all night.\n\nEvery open loop you carry — the unanswered email, the half-decision, the 'I'll get back to you' from 2019 — is charging you rent.\n\nNot in money. In self-trust.\n\nConfidence is manufactured one kept commitment at a time. Intentions, commitments, and actions all being the same thing — that's the definition of integrity.\n\nEvery loop you leave open teaches your nervous system that your word is negotiable.\n\nThe exercise: take your three oldest open loops and give each a verdict.\n\n1. Close it — do the thing this week.\n2. Suspend it — with a real date on the calendar.\n3. Release it — out loud, on purpose, done.\n\nThere is no fourth option. The fourth option is the tax.\n\nWhat's your Maserati?",
      "source_timestamp": "04:32:24",
      "format": "notes-photo (the handwritten 'Closed Loop' sticky as the image)"
    },
    {
      "hook": "This chair only holds me up because it has integrity. It is what it says it is.",
      "body": "That's the whole teaching.\n\nIntegrity is structural, not decorative. It's what makes a thing load-bearing.\n\nIntentions, commitments, and actions all being the same thing — that's the definition of integrity. You master this, you master the universe.\n\nIn a business it looks like this:\n\nYour marketing says what your product does.\nYour product does what your sales team promised.\nYour invoices match your quotes.\nYour software works the way you actually run the company.\n\nEvery gap between what you say and what you do is a crack in the chair.\n\nAnd the test that matters: integrity is keeping your word when there are zero consequences and zero witnesses. Between you and God.\n\nSoda can labels facing forward when nobody's looking. The 15-minute gym rule when nobody's counting.\n\nNo one dies if you don't.\n\nThat's exactly why you do.",
      "source_timestamp": "05:41:09",
      "format": "clip + caption (C22, the chair as live prop)"
    },
    {
      "hook": "The meanest thing anyone ever did to me involved a blender.",
      "body": "Twelve years of handwritten notebooks. Ideas, frameworks, code, plans — my legacy of notes.\n\nAn ex put them in a blender.\n\nI've had a business partner steal my life savings. I've been robbed at my lowest point. Nothing cut like the blender.\n\nPeople ask why I'm obsessive about how my clients' systems are built. This is why.\n\nEvery build that leaves my shop is:\n\nBacked up.\nDecentralized.\nOwned by the client — code, data, keys.\n\nNothing that matters lives in one fragile place ever again. Not for me. Not for anyone I build for.\n\nThe wound is the warranty.\n\nAnd the notebooks? They had to go somewhere. They're imprinted in my brain — and now they're coming out as software.\n\nNothing is ever lost. It relocates.\n\nBuild like someone's holding the blender.",
      "source_timestamp": "01:16:49",
      "format": "text story (vulnerability lane)"
    },
    {
      "hook": "You can only burn your name once.",
      "body": "Here's what's coming, and most people are unprepared for it:\n\nAI is equalizing capability. The tools I use are available to everyone. Soon 'we're good at what we do' is table stakes — everyone's software will be good, everyone's copy will be good, everyone's ops will be tight.\n\nWhen capability is equal, what decides who gets bought from?\n\nTrust. Loyalty. Your name.\n\nYour name is becoming the last durable asset — the one thing that can't be cloned, prompted, or subscribed to.\n\nWhich means every corner you cut today is a loan against the only asset that still matters in 2029.\n\nI watched a man torch his name for short money. The audience never came back. There is no relaunch for reputation.\n\nSo play it like this:\n\nFast on product.\nFerocious on shipping speed.\nImmaculate on your word.\n\nYou can only burn your name once. Spend accordingly.",
      "source_timestamp": "01:08:45",
      "format": "quote card + text"
    },
    {
      "hook": "Colonel Sanders franchised KFC in his 60s. The launch was that big because the hold was that long.",
      "body": "Compression physics: the further you pull the slingshot back, the bigger the launch.\n\nMost founders leak their pressure early. A soft announcement here, a 'coming soon' there — and by launch day there's no charge left.\n\nI've spent two years building in relative quiet. Ten software products. One process. One doctrine: ownership.\n\nRestraint is the new attainment.\n\nBrake is the new gas. This is not a quarter mile — it's a downhill luge. The way you steer is by braking.\n\nSo here is my slingshot, pulled all the way back:\n\nOver the coming weeks I'm releasing everything. The builds. The case studies. The process. The whole machine that builds machines.\n\nThe job's not finished. But the hold is over.\n\nWatch what a two-year compression looks like when it releases.",
      "source_timestamp": "05:51:40",
      "format": "text story (launch pre-frame)"
    },
    {
      "hook": "Measure your wealth by how many wires you send.",
      "body": "Two Saturdays ago I hired a friend to run a camera for one day.\n\nBy that afternoon I had wired him $1,000. He watched me send it. It's on the footage.\n\nNot because the market rate demanded it. Because the measure of wealth I trust is outbound.\n\nAnyone can hoard. Hoarding is the default setting of a scared nervous system.\n\nSending is the skill.\n\nPaying fast. Paying more than asked. Funding the person before they're 'proven.' Tipping the moment instead of the transaction.\n\nEvery wire you send is a vote for the world where value moves.\n\nAnd here's what I've watched for years: the senders end up surrounded by people who run through walls for them. The hoarders end up negotiating with everyone, forever.\n\nOne of those is expensive. Guess which.\n\nHow many wires did you send this month?",
      "source_timestamp": "05:03:40",
      "format": "notes-photo (the handwritten wires-sent sticky + the wire receipt, name redacted)"
    },
    {
      "hook": "There is one frame where the work is actually done. Most founders can't name it.",
      "body": "The eye sees the world at about 100 frames a second.\n\nSomewhere in there is a single frame where the thing is DONE.\n\nThe number one skill of execution is knowing that frame in advance — taking a snapshot of it before you start.\n\nWe built a book-a-call funnel. When is it done?\n\nNot when the page is live. Not when the ads run. Not when calls get booked.\n\nDone is the frame where money from the sale hits the founder's PERSONAL bank account.\n\nInput: someone reads an ad. Output: the founder got paid. Everything else is middle.\n\nHere's the uncomfortable part: it always comes down to personal wealth. Not 'the business.' The founder. Everybody else on the payroll is already getting paid — the system exists to make sure YOU do.\n\nThat's why I don't build software for companies.\n\nI build it for founders. That's whose dreams you're making come true.\n\nName the completion frame for your biggest project right now. One sentence.\n\nIf you can't — that's the problem to solve first.",
      "source_timestamp": "S2 00:14:17",
      "format": "text story (Session 2)"
    },
    {
      "hook": "Your company scales on one screen per person.",
      "body": "Here's the entire scaling doctrine, no framework diagram required:\n\nIf each person in your organization wakes up, looks at a screen, and it is VERY clear what is the most important thing they need to execute today —\n\nand they do that, day after day, week after week, quarter by quarter —\n\nyour company has no other choice but to thrive.\n\nUnless the strategy is bad. Then you call a strategist.\n\nBut most companies don't fail on strategy.\n\nThey fail on execution. It's 90% of it.\n\nThis is what the Oracle actually does: it holds every transcript, every meeting, every commitment you've made — and everyone's made to you — and answers one question per person per morning:\n\nWhat do I execute today?\n\nA plan is a series of estimated steps. The moment you take one step, the game changes. So the software doesn't worship the plan — it serves the next step.\n\nOne screen. One thing. Every person. Every day.\n\nDo you own a machine that can do that?",
      "source_timestamp": "S2 00:11:21",
      "format": "text story (Session 2)"
    },
    {
      "hook": "Every founder I've scaled says the same six words: I wish there were a million me's.",
      "body": "I've helped scale about two dozen companies.\n\nSix figures to seven. Seven to eight.\n\nEvery single founder, at some point, says the same sentence: 'I just wish there were a million me's.'\n\nHere's what a scaled company actually is:\n\nThe expression of the founder's intent through other people.\n\nThat's it. Humans and machines acting on the owner's intent to deliver the thing.\n\nSo that's what we build. We extract the founder's genius — how estimates really get priced, which customers really matter, what done really means — into software the business owns.\n\nNew offer? The software evolves. New team? It onboards them. Complete 90-degree pivot? It pivots with you — because it was built from your consciousness, not a vendor's roadmap.\n\nAnd you own it. The data. The code. Full control.\n\nWhy would you do anything else if that's true?\n\nThe SaaS industry's answer to that question is the reason I have a job.",
      "source_timestamp": "S2 01:39:48",
      "format": "text story (Session 2)"
    },
    {
      "hook": "His client paid $20,000 for two days and walked away with a Google Doc. He was ecstatic.",
      "body": "A friend of mine helps people write books.\n\nThe two-day intensive is $20K. The full published book is $80K.\n\nHe told me about a client who did the two days and ended up with… a Google Doc. A raw reflection of their time together.\n\nThe client was ecstatic.\n\nBecause the part that mattered wasn't the deliverable. It was the extraction — his life story pulled out of him and given a shape for the first time.\n\nHere's the lesson for every service business:\n\nYou don't work for the deliverable. You work for the person who paid you to help create their vision.\n\nSo how do you know you did a good job?\n\nNot when the deliverable is perfect.\n\nWhen their heart is happy.\n\nEvery scope document, every milestone, every revision cycle is downstream of that one metric.\n\nI build custom AI software, and I hold the same rule: the barometer isn't the feature list.\n\nIt's the founder's heart, happy.",
      "source_timestamp": "S2 00:03:55",
      "format": "text story (Session 2)"
    },
    {
      "hook": "Achievement and success are not the same thing. Most founders grade themselves on the wrong one.",
      "body": "Achievement is checking the box of what's required.\n\nSuccess is the metric that measures whether it worked.\n\nYou can achieve everything on the list — ship the funnel, run the ads, launch the offer — with perfect integrity, and still make $100K when you wanted a million.\n\nThat doesn't mean you failed. It means the strategy was off.\n\nHere's why the distinction matters:\n\nThe barometer of whether YOU are doing well is integrity — did you follow through on what you committed to?\n\nThe barometer of whether the STRATEGY is doing well is the numbers.\n\nFounders who blur these two either torture themselves over strategy misses they executed flawlessly — or excuse broken promises because the numbers happened to land.\n\nGrade yourself on integrity. Grade the plan on results.\n\nThen fix whichever one actually broke.",
      "source_timestamp": "S2 01:41:22",
      "format": "text story (Session 2)"
    }
  ],
  "lead_gen": [
    "STANDING CTA — 'Do you own it?': every business post closes on the binary question. It is simultaneously the brand call sign, the comment prompt, and the qualification trigger. Anyone who answers 'no' or 'not sure' in the comments gets a James DM within 24 hours.",
    "LEAD MAGNET 1 — The Ownership Audit: a 10-question scorecard rating how much of a founder's business is rented vs owned (CRM data, ops software, content rails, customer list, name). Built once from the mined ownership theme in Spencer's exact language. Delivery: comment or DM the keyword OWN. Captures the widest top of funnel.",
    "LEAD MAGNET 2 — The Kill List: one-page worksheet auditing every subscription a custom build replaces, with the 70%-cut case study on the back. Deployed as DM step two to audit-takers and warm commenters — this is the magnet that surfaces budget.",
    "DM FUNNEL (James-run, 3 steps): (1) keyword comment → send the Ownership Audit; (2) 48 hours later → 'What did you score?' + one qualifying question: 'What's your monthly software + admin-labor spend?'; (3) $8K+/month spend → booking link for a 30-minute 'Do You Own It?' diagnostic call with Spencer. Below threshold → newsletter/nurture list. Scripts pre-approved by Spencer; James never improvises the offer.",
    "PROFILE AS LANDING PAGE: headline 'I build you a fighter jet — and you can fly it yourself | Custom AI software your business OWNS.' Featured section pinned in order: the 30-day plumbing rebuild case study, the Ownership Audit, the diagnostic-call booking link. About section = the 188-months story compressed to 150 words.",
    "OUTBOUND CONNECTS: James sends 10-20 connection requests/day — founder-title engagers on Spencer's posts first, then lookalikes of the anchor clients (HVAC, plumbing, home services, coaching businesses). No pitch in the request; the content does the warming.",
    "SPENCER'S COMMENT SPRINT: 15 minutes/day commenting on 5 target-ICP founders' posts in full Spencer voice — the visibility engine that puts the profile in front of buyers who never saw the feed posts.",
    "MONTHLY TENTPOLE — 'The Ownership Audit, Live': a LinkedIn Live/audio event where Spencer audits one volunteer founder's software stack on air and builds their kill list in real time. A live demo of the diagnostic call; the recording becomes next month's clip inventory.",
    "ATTRIBUTION DISCIPLINE: every booked call gets asked 'which post brought you here?' James maintains a post→lead sheet, reviewed in the Sunday batch session. Double down on formats that book calls; retire formats that only collect likes. Target: 8-12 diagnostic calls/month by September, 2-3 closed builds/quarter at $25K-$50K."
  ]
}

export const vlog: VlogStrategy = {
  "positioning": "THE TAPE — Spencer's personal vlog at spencerburnett.com, living inside the Bat Cave design theme. Positioning in one sentence: YouTube teaches, LinkedIn converts, the vlog witnesses. It is the source footage the platforms only excerpt — the first-person journal of the night of June 21, honoring the viewer contract Spencer set at 00:09:57: \"This is more of a journal entry than it is a piece of content. If you're seeing this as a piece of content, then you were meant to see it.\" That line IS the vlog's brand promise and opens the season trailer. What makes it rawer than YouTube: the silences are held uncut (the five-second pause at 04:19:07 runs in full), the substances stay on camera (the wine, the weed break at 03:35:56, the ketamine honesty at 05:48:38), the \"edit that out\" instructions to the future editor are kept IN (05:02:39, 04:53:15 name-protection honored, everything else stays), and the fourth-wall breaks are the punctuation rather than the blooper reel. YouTube gets the Wisdom Originator — the produced persona, the stop-motion pillars, the Oracle Deck shorts. The vlog gets the man underneath: the nervous system in the danger zone, the guilt for taking up space, the courtship he is engineering in real time, the cameraman on ketamine becoming his coach. The doctrine that justifies it is his own: \"truth is data — the recording is the way back home.\" The vlog is the recording. Commercially it is the trust asset: nobody books a $497 call because of a short; they book because they watched six hours of a man be exactly who he says he is. The vlog is where that verification happens.",
  "format": "SEASON STRUCTURE: The vlog launches as a named season — \"The Tape, Season 1: The Night\" — 11 episodes cut entirely from the June 21 recording, released weekly (Tuesdays, 6:00pm CST — the hour the camera rolled). One night becomes one season; the 14-day sprint footage and future shoots become Season 2. EPISODE ANATOMY (10–18 minutes): (1) COLD OPEN, 15–30 seconds — a fourth-wall or physical beat with zero context (the hair check, the shampoo bottle bursting, 'Have we been recording?'); (2) TIME CARD — every episode is stamped with the real clock of the night ('HOUR 3 OF 6 — 9:04 PM'), so the season plays as one continuous evening the audience lives through; (3) BODY — a single arc segment, raw single-camera cut, Dehancer-graded for the nostalgic film texture from the post-shoot technique doc, chaptered with sticky-note title cards; the INTENSITY METER (the 1–10 HUD calibrated from Spencer's own live self-rating at 01:54:18) runs persistent in the corner and becomes the thing viewers track across the season; (4) CLOSING FRAME — the episode freezes on the sticky note or still that is the NEXT episode's thumbnail, executing the signature thumbnail-expands-into-video mechanic as the series' connective tissue. EDIT RULES: keep silences whole, keep Chris's off-camera voice with its own caption color, real-time clock chyrons on every meal/drink/sweat beat, no music under confessions. WRITTEN COMPANION: every episode ships with a 400–700 word journal-entry letter in Spencer's first-person voice — part transcript excerpt, part what-I-see-now reflection written from the other side of the sprint. The letter publishes on the episode page, goes to the email list 48 hours BEFORE the video unlocks, and doubles as the LinkedIn source material James pulls from.",
  "episode_plan": [
    {
      "title": "Ep 0 — The Hair Check",
      "premise": "The season opener is the 6:00pm beginning: Spencer checking his hair on camera ('check check check... this is a little behind the scenes'), the set reset at 00:08:19, the viewer contract at 00:09:57, and the commitment point — 'So let's go full Jesus. Why not? We're here.' Fifteen minutes that teach the audience how to watch the next ten episodes: this is a journal entry, the camera never moves, and the man is aware of you. Ends frozen on the wine glass — Episode 1's thumbnail.",
      "source": "The Magic Trick arc (beats 00:00:18, 00:09:30, 00:09:57); physical beats 00:00:18, 00:07:30, 00:08:19; clip C52"
    },
    {
      "title": "Ep 1 — Five Days Before Something Bad Happens",
      "premise": "Why the camera exists: six weeks of 106.5-degree fevers with no virus, 24 pounds gone in 32 days, a nervous system in the danger zone, 48 hours of tools that failed — and the decision to hire a camera and a witness instead of taking the Xanax that was never in the house. Spencer starts sweating on camera mid-story at 00:06:28; the sweat stays in, punched in, because the sweat is the proof. The most vulnerable positioning episode: the founder who converts pressure into documentation.",
      "source": "The Discharge arc (beats 00:01:23, 00:25:32, 00:31:23, 03:26:00); clips C31, C49, C53; physical beat 00:06:28"
    },
    {
      "title": "Ep 2 — The Thousand-Dollar Witness",
      "premise": "The ketamine facilitation story, told straight: Spencer hired Chris that morning for $1,000 — on camera he wires the money, proving 'measure your wealth by how many wires you send' — and facilitated a ketamine experience so Chris would listen instead of talk. The episode tracks Chris's first three role shifts (witness at 00:24:35, mythmaker naming him Tesla at 00:58:45, facilitator timekeeping at 01:12:30) and ends on Chris's first real pushback: 'you definitely spilled today.' The buddy-movie engine of the season ignites here.",
      "source": "The Thousand-Dollar Witness arc (beats 00:24:35, 00:58:45, 01:06:24, 01:12:30, 01:40:21, 03:31:44); clip C46; physical beat 00:24:39"
    },
    {
      "title": "Ep 3 — Eve of Battle",
      "premise": "The sprint send-off: the shower download that became the 'To Whom It May Concern' letter, 'my peace is protected... support me or get out of the way,' 'feed the fucking beast,' and the rare crack in the armor — 'there's a part of me that's a little intimidated by it.' Published July 21-ish, AFTER the sprint window closed, so the episode plays as a documented prediction the audience can score against reality — the magic-trick mechanic applied to business. On-screen countdown clock ticks toward DAY 1 throughout.",
      "source": "Eve of Battle arc (beats 01:15:08, 01:43:01, 01:44:34, 01:49:38, 02:14:23); clips C19, C20; The 14-Day Sprint theme"
    },
    {
      "title": "Ep 4 — The Habanero Sequence",
      "premise": "The night's great unscripted set piece as the mid-season humanizer: Spencer unknowingly eats a habanero under cinematic lights, sweats and groans through a live re-enactment of his own fever mythology ('very uncomfortable in a very familiar place'), the pain unlocks the empath origin story — childhood fevers synced to his mother's chemo cycles — and Chris leaves frame to return with an ice pack and an ice cream sandwich. Slapstick to gut-punch to grace in eleven minutes. The single best episode to show someone who has never met Spencer.",
      "source": "The Body Keeps the Tape arc (beats 03:04:38, 03:06:50, 03:08:35, 03:11:21); clips C71, C32; physical beats 03:04:38, 03:07:17, 03:11:43, 03:12:43"
    },
    {
      "title": "Ep 5 — Diaries of a Little Bitch",
      "premise": "The trough, kept whole: 'everything I ever asked for is actually happening — and it's so good that it's too much... my soul's getting excavated,' the guilt confession ('I guess I feel guilty for taking up space and being needy') followed by five seconds of true silence the edit refuses to cut, the session naming itself at its lowest point, and the comic resurrection — the Wisdom Originator born on camera, AI images and Gollum antithesis inside ten minutes. The episode title is Spencer's own; the honesty of keeping it is the point.",
      "source": "The Discharge arc (beats 03:28:49, 03:29:55, 03:45:07, 04:19:07); clips C50, C74, C75; physical beats 03:29:55, 03:36:56, 03:38:11, 04:19:54"
    },
    {
      "title": "Ep 6 — The Desert Test",
      "premise": "The role reversal completes: the man dosed so he would stay quiet becomes the coach. Chris asks 'does this heaviness serve you?', teaches Spencer stillness, then guides him through the desert visualization — translucent gold cube, aluminum ladder, coiling flowers, and the dark horse standing right next to him, facing him. The hand-drawn stop-motion overlay (cube, ladder, flowers, horse building frame-by-frame over Spencer's closed-eyes face) is the season's flagship demonstration of the layered photographic technique. Ends on the headphones scene: the wizard receiving instead of transmitting.",
      "source": "The Thousand-Dollar Witness arc (beats 04:13:30, 04:22:11, 05:31:37); clip C14; physical beats 04:22:41, 05:31:37"
    },
    {
      "title": "Ep 7 — Four Percent (The Love Story)",
      "premise": "The relationship arc at vlog depth: the four-second silence before 'I said I was going to find my person in Q2. I met her on the 15th,' the containment courtship ('four percent — more would melt her face'), one page at a time, the last first page, and the desert horse from Episode 6 quietly answering the question the whole night was asking. PUBLISHING GATE: the prayer origin story (01:30:17) ships only with Spencer's explicit sign-off; she is never named; identifying beats stripped per the edit rule. The episode that makes the audience root for the man, not the brand.",
      "source": "The Greatest Love Story Ever Told arc (beats 00:39:02, 00:41:14, 02:07:18, 04:01:21, 04:25:41, 05:17:46, 05:58:16); clips C39; physical beats 00:39:02, 01:20:28, 01:22:18"
    },
    {
      "title": "Ep 8 — The Blender",
      "premise": "The wounds episode, pure story, zero pitch: 188 months — the partner in federal prison and the fall Spencer nearly took; November '24 and the girlfriend who robbed him at his lowest; Carolina putting 12 years of handwritten notebooks in a blender — 'the meanest thing that's ever been done to me.' Chris's on-camera connection ('you were burned when it was in somebody else's hands, and now they're in prison') is the closing line. The doctrine and the product live on YouTube and LinkedIn; the vlog holds only the biography, which makes every ownership rant elsewhere land twice as hard.",
      "source": "Betrayal to Sovereignty arc (beats 00:03:05, 00:32:14, 01:06:24, 01:16:49); clips C08, C34; The Pattern theme (00:32:14–00:37:26)"
    },
    {
      "title": "Ep 9 — All of These Tonight",
      "premise": "The sticky-note ritual as behind-the-scenes documentary: Chris confessing he has been reading the wall all night, the tarot naming, the blind-draw game ('it's like Whose Line Is It Anyway'), picking notes by grid coordinates, the stack visibly shrinking as the night's clock runs, the 5.5-hour recommitment ('I have to do all of these tonight. Fuck. Okay.') — closing on the two battered notes that live taped to his laptop: 'master containment' and 'nibbles and sips.' This episode is also the trailer for the Oracle Deck shorts series running on YouTube and Instagram — the vlog shows the ritual the shorts were cut from.",
      "source": "The Sticky-Note Oracle arc (beats 02:32:51, 02:33:31, 04:42:53, 05:07:39, 05:33:43, 05:39:46, 05:58:16, 05:59:14); physical beats 02:37:28, 04:32:24, 05:58:16, 06:02:30"
    },
    {
      "title": "Ep 10 — Action. (The 1:30am Wrap)",
      "premise": "The finale: 1:15am, 'I think the wisdom originator is complete,' the final energy audit — 'Complete. Not tired. And it's super terrifying. This was fun. That's a wrap.' — and then the magic trick: Spencer calls 'Action' and performs both sides of the morning phone call that hired Chris, whose wishes (quit driving Uber, try ketamine) all came true that same day. The season's thesis proven with receipts: 'You say something is possible — I will make it real.' End card: the Valeria debrief stats — 200 pieces, six months of content, and this vlog — from one night.",
      "source": "The Magic Trick arc (beats 06:02:55, 06:03:15, 06:03:54); The Discharge arc (beat 06:03:15); clips C02, C24; physical beat 06:03:54"
    },
    {
      "title": "S2 · Ep 1 — The Cat Understands (Season 2 opener)",
      "premise": "Season 2 of The Tape opens on the July session: same desk, same shawl, aviators on from frame one — and Meow Meow finally on camera. The cat-door doctrine ('you are treated the way you request to be treated through your actions') plays as pure comedy, the name-tag bit lands ('obsessed with God's love, AI — and this one girl'), and the audience is armed with the thesis they'll need for the rest of the season without knowing why yet. Ends frozen on the card deck — Episode 2's thumbnail.",
      "source": "S2 arcs: The Cards (beats 00:57:53, 00:25:16); clips C81, C91, C82; physical beats 00:01:00, 00:04:16"
    },
    {
      "title": "S2 · Ep 2 — Job Finished. (clearance-gated)",
      "premise": "The trough episode of Season 2 and the rawest cut in the archive: the needs stated to camera ('I want to be acknowledged — is this okay?'), the sentence that never finishes, the break, the electric blanket, and the texts read verbatim — 'Thank you. It worked. That's why I'm leaving. Job finished.' Interleaved with the doctrine the night produced in real time: choosing vs. allowing, self-respect as outbound, the 1% mirror. PUBLISHING GATE: ships only with Spencer's explicit sign-off; she is never named; the Amazon-blanket comedy stays as the mercy in the cut.",
      "source": "S2 arc: Job Finished (all beats); clips C104, C105, C106, C117; physical beats 01:16:17, 01:19:34"
    },
    {
      "title": "S2 · Ep 3 — The Storm's Eye + The 90-Degree Pivot (season closer)",
      "premise": "The composure episode: the same night a relationship ends, the cleanest business doctrine on tape gets delivered — completion frames, true scalability, two dozen companies — with time-stamped chapter cards showing what happened between takes. Duty doctrine demonstrated, not described: 'bring those feelings with you, but you got to get it done. Process later.' Closes on the arms-crossed final statement — 'the sharpest 90-degree pivot I've ever had, in a good way' — and the posture time-lapse: open palms to crossed arms, the whole season with the sound off.",
      "source": "S2 arcs: The Operator in the Storm's Eye (all beats), Job Finished (beats 02:04:50, 02:33:45); clips C109, C115, C126; physical beats 01:58:47, 02:28:13, 02:34:46"
    }
  ],
  "site_integration": [
    "THE TAPE gets its own left-rail item on spencerburnett.com, rendered in the Bat Cave theme — dark, cinematic, the software-shell UI treating episodes like files in a case archive. Each episode is one page: embedded video (unlisted Vimeo or self-hosted — deliberately NOT public YouTube, preserving the vlog's only-here scarcity), the 400–700 word written companion, real-clock chapter markers ('9:04pm — the habanero'), and the episode's intensity-meter reading displayed on its card so the season index reads as an EKG of the night.",
    "Email capture is the season's spine: Episodes 0–2 are fully public; Episodes 3–10 unlock by email ('Join the Inner Circle — the rest of the night is for people on the list'). The gate sits exactly at the Eve of Battle episode, where the audience is most invested in what happens next. Companions ship to the list 48 hours before each video unlocks, training subscribers that email is the front row.",
    "The $497 coaching booking is never pitched inside an episode. Each episode page closes with one quiet, theme-matched CTA block after the written companion: Ep 1 and Ep 5 (nervous system, pressure) route to 'Bring me the thing that's burning you down — 90 minutes, $497'; Ep 3 and Ep 8 (sprint, ownership biography) route to the machine-that-builds-machines conversation. One CTA per page, styled as a sticky note in his handwriting.",
    "A STICKY NOTE DECK page: the 50+ handwritten notes photographed and laid out as a browsable overhead grid — the literal set from the night. Each note links to its Oracle Deck short (YouTube/IG) or, for vlog-tier notes, to its episode timestamp. This page is the site's shareable artifact, the merch storefront seed ('Restraint is the new attainment' prints), and the visual proof that the content system is real.",
    "Every episode page ends frozen on the NEXT episode's thumbnail with its release date — the thumbnail-expands-into-video mechanic implemented as site UX. During the season, the vlog index shows a countdown to the next Tuesday 6:00pm drop.",
    "Instrument the funnel: tag episode pages and CTA clicks so bookings attribute to episodes. The hypothesis to verify by September: gated vlog viewers convert to the $497 call at a multiple of cold YouTube traffic. That number decides whether Season 2 (the sprint footage) gets cut."
  ],
  "cross_platform": [
    "ONE HOME PER CUT: every moment has exactly one home platform. YouTube owns the produced versions (pillars, Oracle Deck shorts, the Wisdom Originator persona, stop-motion animation); LinkedIn owns the operator beats in James's hands (case studies, ownership doctrine, sprint protocol — Spencer as 'the dancing monkey' feeding James raw clips); the vlog owns the uncut, first-person, altered-state, and relationship material. The same timestamp never ships twice in the same edit — the vlog runs the 3-minute uncut habanero, YouTube runs the 90-second produced version, and each points at the other.",
    "SHORTS ARE TRAILERS, THE VLOG IS THE DESTINATION: every YouTube Short and IG reel cut from the June 21 footage carries the same end card — 'the full night lives at spencerburnett.com' — and the pinned comment links the matching episode. The vlog never posts natively to social; it is the only 200-piece asset that requires leaving the platform, which is what makes the email gate work.",
    "THE WRITTEN COMPANION IS THE FEEDSTOCK: each episode's journal-entry letter goes (1) to the email list first, (2) onto the episode page, (3) to James as LinkedIn source text — he excerpts one paragraph as a text post linking nothing (LinkedIn-native reach) and one linking the episode (traffic). One writing pass feeds three channels without duplication.",
    "SEQUENCING RULE: the vlog episode airs ONE WEEK BEFORE any YouTube pillar built from the same arc (Ep 8 'The Blender' precedes the '188 Months' pillar; Ep 5 precedes 'Inside the Wizard's Head'). The site is the origin point of every story; YouTube is the syndication. Superfans always know things the subscribers don't yet.",
    "GATING AND SAFETY RULES TRAVEL WITH THE FOOTAGE: the prophecy disclaimer ('this is not truth — it is what I'm hearing') cold-opens every prophecy clip on every platform; the prayer story and Carolina material are vlog-tier only per the edit rules; no names ship anywhere per Spencer's 04:53:15 on-camera instruction; the cerebral-palsy bit (04:52:22) is held for editorial review on all platforms. The vlog's rawness is a curation choice, never a leak.",
    "CADENCE ACROSS THE CALENDAR (July 8 – Nov 1): vlog weekly Tuesday 6:00pm (11 episodes carries the full four months with two flex weeks), YouTube pillars biweekly, Oracle Deck shorts 3–4x/week, LinkedIn daily via James. The vlog finale ('Action.') lands late September — timed so the season's proof-of-magic ending rolls directly into the skyscraper launch campaign's conversion window in October."
  ]
}

export const workflow: WorkflowPlan = {
  "tools": [
    {
      "name": "DaVinci Resolve Studio ($295 one-time)",
      "purpose": "The hub. Edit page for selects/long-form/shorts, Fusion page for compositing the stop-motion layers over live footage, Color page hosts the Dehancer OFX grade, Fairlight for Voice Isolation + loudness, Deliver page for per-platform render presets. Studio (not free) is required for Smart Reframe (auto 9:16), AI transcription/subtitles, Voice Isolation, and clean 4K H.264/H.265 delivery — the four features this pipeline leans on weekly."
    },
    {
      "name": "Dehancer Pro (already owned)",
      "purpose": "Film-emulation node in Resolve's Color page. Build ONE locked PowerGrade ('The Look': one film stock + grain + halation + bloom + gate weave) and apply it to every deliverable — talking-head clips and stop-motion assets share the identical look, which is what makes the brand read as one visual system."
    },
    {
      "name": "Frame.io (already in use)",
      "purpose": "Three jobs: (1) source of truth for the 6h04m master — pull the ORIGINAL camera file from Chris, not the 1400x788 streaming proxy; (2) weekly review folder where Spencer and James leave frame-accurate approval comments; (3) offsite third copy of the archive."
    },
    {
      "name": "Python + Resolve Scripting API (free, one 2-hour build)",
      "purpose": "The leverage point. A small script converts the mined clip list (C01–C50 with start/end timecodes), the 30 quotes, and the physical-beat list into a Resolve marker CSV + EDL. Import once and the entire 6 hours arrives pre-logged: color-coded markers and an auto-cut SELECTS timeline. Clip selection is timestamp-driven — nobody scrubs six hours of footage, ever."
    },
    {
      "name": "Timecoded transcript (already exists)",
      "purpose": "The logging database. HH:MM:SS:FF blocks every 20–40s make every in/out verifiable by text search instead of playback, and slice into per-deliverable SRT caption files. This file replaces Descript entirely — Descript's core value (text-based selection) is already done."
    },
    {
      "name": "CapCut Desktop (free; Pro ~$10/mo if needed)",
      "purpose": "One narrow job where it beats Resolve: burned-in animated caption styling and final polish on vertical shorts. Shorts arrive from Resolve already cut, reframed, and graded; CapCut adds the word-by-word captions in 5–10 minutes per short. Nothing else lives here."
    },
    {
      "name": "Photoshop (or Affinity Photo, $70 one-time)",
      "purpose": "Builds the layer library: background-removed PNG cutouts of Spencer, props, and gestures from the 90-image photo album, plus cleaned flat scans of all 50+ handwritten sticky notes. Every stop-motion asset is assembled from this /layers folder."
    },
    {
      "name": "Dragonframe ($295) — fallback: Stop Motion Studio Pro ($5, iPhone)",
      "purpose": "Overhead stop-motion capture with onion-skinning, camera control, and instant playback. Dragonframe if this becomes the signature system it is designed to be; Stop Motion Studio Pro proves the mechanic in week one for five dollars."
    },
    {
      "name": "Notion content tracker (existing workspace)",
      "purpose": "The pipeline database: one row per deliverable — clip ID, platform, status (cut → graded → captioned → approved → scheduled → live), publish date, live URL. Spencer approves the week's clip IDs here Sunday night; James schedules from it Tuesday."
    },
    {
      "name": "Cloudflare Stream (~$10/mo)",
      "purpose": "Owned-rails video hosting for the vlog on spencerburnett.com — full episodes embedded on his own domain, off YouTube's rails. On-doctrine: the man preaching 'own your shit' hosts his flagship confessionals on infrastructure he controls."
    },
    {
      "name": "Metricool (free tier to start)",
      "purpose": "One calendar view of all platforms plus scheduling for the Instagram reel cross-posts. YouTube and LinkedIn publish natively (their algorithms favor it); Metricool covers the rest and shows the whole week on one screen."
    }
  ],
  "pipeline": [
    {
      "stage": "1. Ingest & archive",
      "description": "Pull the ORIGINAL camera master from Frame.io/Chris at full resolution (confirm what the camera actually shot — the visible 1400x788 is a streaming proxy). Checksum-verify, copy to two local drives, keep Frame.io as the third copy. This footage is six months of business — treat it like a master negative.",
      "tool": "Frame.io + Hedge (or Finder + shasum)",
      "time": "2–3 hrs, mostly unattended download (one-time)"
    },
    {
      "stage": "2. Proxy & conform",
      "description": "Generate a 1080p ProRes Proxy of the 6h04m master so a 6-hour timeline scrubs instantly on any machine. Create the Resolve project 'WISDOM_ORIGINATOR' matching source frame rate and timecode so every mined HH:MM:SS:FF lands frame-accurately.",
      "tool": "DaVinci Resolve (Media page, proxy generation)",
      "time": "30 min setup + overnight render (one-time)"
    },
    {
      "stage": "3. Auto-log",
      "description": "Run the script: mined clip list (C01–C50), 30 top quotes, and 70+ physical beats become color-coded Resolve markers (blue = clips, gold = quotes, purple = physical/B-roll) plus an EDL. The whole master arrives pre-logged without anyone scrubbing footage.",
      "tool": "Python + Resolve Scripting API",
      "time": "2–3 hrs one-time script build; 5 min per rerun"
    },
    {
      "stage": "4. Selects pass",
      "description": "The EDL auto-cuts all 50 subclips onto a SELECTS timeline. Tighten each in/out to the first and last spoken word using the transcript, and tag the sensitivity flags now (third-party names, the Carolina beat, the 04:52:22 bit, substance visibility) so downstream stages inherit the flags.",
      "tool": "Resolve Edit page + timecoded transcript",
      "time": "3–4 hrs for all 50 selects (~4 min each, one-time; new mining passes add more)"
    },
    {
      "stage": "5. Long-form assembly",
      "description": "Build pillar episodes on dedicated timelines from the mined source_clips lists, following each arc's treatment: cold open specified per treatment, chapter cards at the fourth-wall beats, Chris-beats as breathing room. Eight pillars exist; one ships every second Saturday.",
      "tool": "Resolve Edit page",
      "time": "6–10 hrs per 15–25 min episode (split across two batch days)"
    },
    {
      "stage": "6. Shorts derivation",
      "description": "Duplicate each select to a 1080x1920 timeline. Smart Reframe plus manual punch-ins for emphasis beats, tighten to hook-first: the mined hook line lands inside the first 2 seconds, target runtime 45–90 s (3 min is the platform ceiling, brevity wins).",
      "tool": "Resolve Studio (Smart Reframe)",
      "time": "20–30 min per short; ~90 min for a week's three"
    },
    {
      "stage": "7. Stop-motion bench",
      "description": "Weekly batch session on the standing overhead rig: animate the week's 4–6 thumbnail/motion assets from the layer library (full recipe below). First frame of each asset = the platform thumbnail; last frames freeze on the NEXT episode's thumbnail.",
      "tool": "Dragonframe + Photoshop layers + Resolve Fusion",
      "time": "4 hrs per week for 4–6 assets (rig build: one 3-hr session)"
    },
    {
      "stage": "8. Grade",
      "description": "Apply 'The Look' PowerGrade (Dehancer: locked stock, grain, halation, gate weave) across every timeline, then a fast per-shot exposure/white-balance trim. One fixed camera setup all night = one correction carries nearly everywhere.",
      "tool": "Resolve Color page + Dehancer Pro",
      "time": "2–3 hrs one-time look design; 1–1.5 hrs per weekly batch"
    },
    {
      "stage": "9. Audio polish",
      "description": "Voice Isolation on the room audio, dialogue leveler, keep Chris's off-camera lines audible (they certify authenticity — 'this is very tender'), music stings under stop-motion opens only, loudness to -14 LUFS integrated.",
      "tool": "Resolve Fairlight",
      "time": "45–60 min per weekly batch"
    },
    {
      "stage": "10. Captions",
      "description": "Slice the master transcript into per-deliverable SRTs (or auto-transcribe in Resolve Studio and proofread). Verticals get burned word-by-word styled captions in CapCut; YouTube long and LinkedIn get clean SRT sidecars. Proofread proper nouns: Claude, Dehancer, ServiceTitan, Gary.",
      "tool": "Resolve Studio transcription + CapCut",
      "time": "5–10 min per short; 20–30 min per long-form"
    },
    {
      "stage": "11. Export & review",
      "description": "Deliver-page presets per platform (YouTube 4K H.265, Shorts 1080x1920 H.264, LinkedIn 1080 square/vertical ≤ 4:5, vlog 1080p for Stream). Queue renders overnight. Upload the week's batch to a dated Frame.io folder; Spencer approves content, James approves packaging, timecoded comments drive one fix round.",
      "tool": "Resolve Deliver page + Frame.io",
      "time": "30 min queue setup; renders unattended; 1 hr fix round"
    },
    {
      "stage": "12. Publish & schedule",
      "description": "Native scheduling on YouTube Studio and LinkedIn (James posts LinkedIn), Metricool schedules the Instagram mirrors, vlog page deploys to spencerburnett.com with the Cloudflare Stream embed. Live URLs logged back to the Notion tracker — the loop closes where it opened.",
      "tool": "YouTube Studio + LinkedIn + Metricool + Vercel",
      "time": "1.5–2 hrs per week (James owns most of it)"
    }
  ],
  "per_clip_checklist": [
    "Pull the subclip by mined timecode; verify in/out against the transcript and trim to first spoken word / last spoken word (+12 frames of air).",
    "Hook lands inside the first 2 seconds — open on the mined hook line or the physical beat, zero wind-up.",
    "Sensitivity gate: bleep or cut all third-party names (Spencer's on-camera instruction at 04:53:15), never name the girlfriend, hold flagged segments (Carolina beat, 04:52:22 bit) for editorial review before export.",
    "Session 2 clearance gate: the girl/breakup material (C105, C106, C117, C120) and the exes catalogue (C96) ship NOWHERE without Spencer's explicit sign-off — vlog-tier by default, she is never named, texts are read-only (never shown on screen). Spencer flagged one run on tape as not-for-LinkedIn (S2 00:39:20, the spectrum riff → route C124's harder cuts to YouTube/vlog only).",
    "Substance check per platform: weed/ketamine/wine visible = fine for vlog, trim or crop for LinkedIn and for YouTube monetized cuts.",
    "Prophecy clips cold-open with the standing disclaimer card: 'This is not truth — it's what I'm hearing' (00:14:49 rule).",
    "Apply 'The Look' PowerGrade; check skin tone and exposure after Dehancer — one grade, every clip, no exceptions.",
    "Audio: Voice Isolation on, dialogue leveled, Chris's off-camera lines kept and captioned in a second color, -14 LUFS integrated, no clipping.",
    "Captions: burned word-by-word style on all verticals; SRT sidecar on YouTube long and LinkedIn; proofread proper nouns (Claude, Gary, Dehancer, ServiceTitan).",
    "Thumbnail mechanic: frame 1 of the video is pixel-identical to the uploaded thumbnail (stop-motion still); final 2 seconds freeze on the NEXT episode's thumbnail with a 'next card' caption.",
    "End CTA per platform: YouTube = subscribe + playlist card; LinkedIn = the binary question ('Do your clients own it?'); Shorts/IG = follow + long-form pointer; vlog = email capture.",
    "Title and copy pulled from the mined title/quote fields; format limits respected (Shorts 45–90 s target, LinkedIn native ≤ 2 min, 4:5 or 1:1).",
    "File naming: C##_platform_v# (e.g., C23_short_v2); export lands in the dated Frame.io review folder before anything is scheduled.",
    "Notion tracker row advanced at every stage: cut → graded → captioned → approved → scheduled → live, with the live URL logged on publish.",
    "Archive: final project timeline and rendered master retained on both archive drives — every deliverable is re-exportable in one click."
  ],
  "batch_week": [
    "Weekly quota from ONE edit day: 3 YouTube Shorts, 1 LinkedIn native video, 1 LinkedIn text post (quote-driven), 1 LinkedIn carousel (PDF doc post), 1 Instagram reel (mirrored short), 1 vlog episode segment — plus a pillar YouTube long-form every second week. That pace ships ~150 pieces across July 6 – Nov 1 and stays on the 200-piece / six-month math from the Valeria debrief.",
    "SUNDAY NIGHT — Spencer (30 min): pick the week's theme from the mined theme list (e.g., Containment week, Ownership week), approve 5–6 clip IDs in the Notion tracker, flag any privacy concerns. This is Spencer's entire pre-production role.",
    "MONDAY 9:00–9:30 — Chris: run the auto-log script against the approved clip IDs; the week's selects timeline builds itself. Coffee while the EDL imports.",
    "MONDAY 9:30–12:30 — Chris: cut the 3 shorts + the LinkedIn native video (trim, Smart Reframe, punch-ins, tighten to hook-first).",
    "MONDAY 12:30–14:00 — Chris (Spencer drops in 30 min): stop-motion bench. Animate the week's 4–6 thumbnail/motion assets on the standing overhead rig; Spencer's hands appear in any card-draw shots.",
    "MONDAY 14:00–15:30 — Chris: pillar long-form advances 90 minutes (each pillar episode accumulates across two Mondays and ships the second Saturday).",
    "MONDAY 15:30–17:00 — Chris: grade pass (PowerGrade across all timelines), audio pass, caption pass, queue every export. Renders run overnight; batch auto-uploads to the dated Frame.io folder.",
    "TUESDAY AM — Spencer (45 min): Frame.io review pass — approve or leave timecoded comments. One fix round maximum; Chris applies fixes same day.",
    "TUESDAY — James (2 hrs): pull approved files, write LinkedIn copy in Spencer's voice, assemble the carousel PDF from the layer library + quote cards, schedule the full week natively (LinkedIn, YouTube) and via Metricool (Instagram).",
    "PUBLISH RHYTHM: LinkedIn Tue/Thu/Sat 8–9am ET (James posts), Shorts Wed/Fri/Sun, YouTube long-form every second Saturday 10am, IG reels mirror the shorts next-day, vlog episode Sunday evening on spencerburnett.com.",
    "SPENCER'S DAILY JOB (20 min/day, phone only): reply to every comment within the first hour of each post — the 'dancing monkey' fuel James asked for. Zero editing, zero scheduling.",
    "ROLES IN ONE LINE: Spencer = approve + appear + reply. Chris = shoot + edit + animate (the Monday owner). James = copy + package + publish + LinkedIn ownership.",
    "FALLBACK RULE: if Monday collapses, ship the three shorts only. Three shorts is the floor; the calendar never goes dark.",
    "MONTHLY (first Monday, +1 hr): re-run the mining pass on the next transcript chunk, add new clip IDs to the tracker, retire themes that stopped converting. The 6-hour master feeds the machine for the full 17 weeks."
  ],
  "stop_motion_recipe": [
    "1. BUILD THE LAYER LIBRARY (one-time, ~4 hrs): flat-scan or photograph all 50+ handwritten sticky notes overhead with raking light; cut out subjects, props, and gestures from the 90-image photo album in Photoshop as background-removed PNGs with alpha; add hand-drawn elements (skyscrapers, fighter jet, LeBron, rabbit/hat, book pages) drawn on paper and scanned. File everything in /layers by theme.",
    "2. BUILD THE RIG (one-time, ~3 hrs, then it never comes down): camera locked on a copy stand or horizontal tripod arm pointing straight down at a matte board; everything manual and taped — ISO, shutter, white balance, focus, framing marks; one soft constant key light, no ambient changes; shoot RAW or max-quality JPEG tethered to Dragonframe.",
    "3. BOARD THE MOVE FIRST (10 min per asset): sketch start pose and end pose on paper. Start pose = the exact THUMBNAIL frame for this episode. End pose = the NEXT episode's thumbnail. Plan for animating 'on twos': 12 unique frames per second of screen time; a 5-second move = ~60 stills.",
    "4. ANIMATE PIECE BY PIECE: move ONE element 3–8 mm, shoot one frame, repeat. Tweezers keep hands off the board; Dragonframe's onion-skin overlay verifies each increment against the previous frame; ease in and out by shrinking the movement steps near the start and end of a move.",
    "5. KEEP IT ALIVE ON PURPOSE: tiny imperfections — a 1–2 mm wobble, paper shadows, slight rotation drift — ARE the aesthetic. Perfectly smooth reads as motion graphics; slightly breathing reads as handmade nostalgia, which is the emotional device.",
    "6. ASSEMBLE: import the still sequence into Resolve as an image sequence, interpret at 24fps with each frame held twice (the classic 'on twos' cadence). Trim holds where a pose needs to land.",
    "7. COMPOSITE OVER LIVE FOOTAGE (Fusion, when the design calls for it): drawn layers with alpha animate over a frozen frame of Spencer — the LeBron block over the finger-roll freeze, the skyscrapers assembling behind him, the desert-test elements building around his face. Merge nodes + a planar track if the freeze has drift.",
    "8. GRADE WITH THE SAME LOOK: drop 'The Look' Dehancer PowerGrade on the stop-motion timeline — film grain, halation, and gate weave move ON TOP of the stills, so even held frames shimmer with film life. This single move fuses animation and talking-head footage into one visual world.",
    "9. EXPORT TWICE FROM THE SAME TIMELINE: (a) frame 1 as PNG → the uploaded thumbnail; (b) the full move as ProRes 422 → the motion asset. One source, two deliverables, pixel-identical first frame.",
    "10. THE MECHANIC IN THE EDIT: the published video opens on the exact thumbnail still (viewer perceives the thumbnail waking up), the layers animate open and hand off to the talking-head clip; the final 2 seconds re-freeze on the NEXT episode's thumbnail. Every episode ends where the next one begins — frame-by-frame storytelling continuity across the whole series.",
    "11. THE STICKY-NOTE VARIANT (the series workhorse): overhead shot of the fanned deck → one note slides out frame-by-frame → fills frame (that filled frame = thumbnail) → cut to Spencer holding the same physical note to camera. The 50+ notes make this a repeatable 20-minute-per-episode template.",
    "12. BATCH DISCIPLINE: one bench session per week produces all 4–6 assets while the rig is warm. The rig stays standing permanently, so per-asset setup cost is zero and the signature never gets skipped for being 'too much work'."
  ],
  "publishing": [
    {
      "platform": "YouTube — long-form",
      "steps": [
        "Upload the 4K/1080 H.265 master; title from the mined title_ideas field; upload the stop-motion thumbnail (pixel-identical to frame 1).",
        "Paste chapters into the description from the clip timestamps the edit was built from — the mined source_clips list IS the chapter list.",
        "Description: opening quote from the mined top-quotes list, two-line premise, CTA link (spencerburnett.com + booking link on business episodes), vlog cross-link.",
        "Add to the pillar's playlist; set end screen to the next episode + playlist; cards at the fourth-wall beats.",
        "Upload the SRT sidecar (sliced from the master transcript) — never rely on auto-captions.",
        "Schedule every second Saturday 10am ET; Premiere only the flagship documentary cuts.",
        "Pin a first comment ending on the binary question ('Do you own it?'); Spencer replies to every comment in hour one."
      ]
    },
    {
      "platform": "YouTube — Shorts",
      "steps": [
        "Upload the 1080x1920 vertical with burned captions; 45–90 s target runtime.",
        "First frame = the stop-motion thumbnail; hook line inside 2 seconds; final freeze = next episode's thumbnail.",
        "Link the related long-form video in the Shorts 'related video' field — every short is a funnel mouth to a pillar.",
        "Title = the hook line, under 60 characters; one or two hashtags maximum (#shorts plus theme).",
        "Publish Wed/Fri/Sun; hold each short 24 hours after its sibling LinkedIn post so platforms peak on different days.",
        "Log the live URL in Notion; mirror to Instagram Reels next-day via Metricool with a native cover image."
      ]
    },
    {
      "platform": "LinkedIn — native video / text / carousel (James owns)",
      "steps": [
        "Native video: upload 1:1 or 4:5, ≤ 2 min, burned captions (silent autoplay), first line of copy = the mined hook quote, business-safe cut only (substance and profanity trims applied).",
        "Text posts: built from the mined quote list — quote as line one, whitespace-formatted story, close on the binary question; zero external links in the body (link goes in first comment).",
        "Carousels: assemble as PDF document posts, 8–12 slides, built from the layer library (sticky-note scans as slide art); mined carousel concepts supply the outlines.",
        "Cadence Tue/Thu/Sat 8–9am ET; one lane per day (video / text / carousel) so formats never compete with themselves.",
        "James writes and posts in Spencer's voice from the approved Frame.io batch; Spencer replies to comments in hour one — engagement is Spencer's job, publishing is James's.",
        "Vulnerability-lane posts (the Pattern, the notes story) ship only after Spencer's explicit per-post approval in the tracker."
      ]
    },
    {
      "platform": "Instagram — Reels (cross-post lane)",
      "steps": [
        "Mirror each YouTube Short next-day via Metricool; re-export from CapCut with IG-safe margins (captions inside the 4:5 center crop).",
        "Cover image = the same stop-motion thumbnail; caption = hook line + one-line story; 3–5 hashtags.",
        "The sticky-note photo posts (physical content) run as image carousels between reels — the handwritten note IS the post.",
        "Publish Wed/Fri/Sun evenings; comments answered by Spencer in the daily 20-minute block."
      ]
    },
    {
      "platform": "Personal vlog — spencerburnett.com",
      "steps": [
        "Upload the full episode (uncut, vlog-tier honesty intact) to Cloudflare Stream — owned rails, on-doctrine.",
        "Create /vlog/episode-N in the Next.js site: Stream embed, episode title, the week's sticky-note scan as page art, a pull-quote block, and a short transcript excerpt for SEO.",
        "Add the email-capture block under the player ('get the next drop') — the vlog is the owned-audience funnel every rented platform points at.",
        "Publish Sunday evening; deploy via Vercel; cross-link from that week's YouTube descriptions and one LinkedIn comment.",
        "Episode 0 = this recording's making-of cut ('Six Hours'); the 14-day-sprint episodes then run as the launch-season arc.",
        "Log the live URL in Notion and append the episode to the site's /vlog index — the archive on his own domain grows every week."
      ]
    }
  ]
}

export const calendar: CalendarPlan = {
  "month_themes": [
    {
      "month": "July 2026",
      "theme": "LAUNCH — The Skyscraper Campaign: Do You Own It?",
      "goal": "Convert the 14-day sprint (ends Jul 6) into a public launch. Flagship 'Ten Skyscrapers in 30 Days' pillar live and pinned, ownership doctrine installed as the universal CTA ('Do You Own It?'), James + Chris marketing engine live week one, Josh's sales system booking discovery calls. New Shoot #1 (Demo Day) fills the one hole the backlog cannot: footage of the finished software itself."
    },
    {
      "month": "August 2026",
      "theme": "AUTHORITY — Receipts: Scar Tissue Into Doctrine",
      "goal": "Turn launch attention into authority. The 188 Months / Betrayal-to-Sovereignty arc runs story-first then doctrine (wounds before pitch), client proof stacks (70% bill cut, 30-day plumbing rebuild), Genie Protocol + Kill List + Ownership Audit lead magnets go live, podcast pitch kit ships. SESSION 2 LANDED (Jul 22, 2h36m): the operator core — completion frames, execution-is-90%, true scalability, the through-line method — refills exactly the authority lane this month burns, and the Reality vs. Truth masterclass becomes August's second pillar. Shoot #2's remaining gap narrows to client-results/proof footage only."
    },
    {
      "month": "September 2026",
      "theme": "DEPTH — Inside the Wizard's Head (and the Heart Chapter)",
      "goal": "Deepen parasocial trust with the human arcs: Downloads, Containment Week, the fever lore, The Cameraman two-hander, and The Love Story on the vlog lane. Session 2 supplies this month its entire second wave: The Heart Chapter pillar, the shame-processing curriculum, The Cards series at full cadence, The God Tape, and — clearance permitting — the Job Finished documentary as the season's trough episode. Sub-personality lanes formally split (Relationship Alchemist vs business channel), intensity-meter HUD debuts. New Shoot #3 is a stop-motion production day — the layered-photographic technique requires original overhead/insert photography neither fixed-camera master contains."
    },
    {
      "month": "October 2026",
      "theme": "HARVEST — The Split, the Book, and the Magic Trick",
      "goal": "Cash the trust built in Q3: '2029: The Split' prophecy pillar (disclaimer-armored), the 25-30 min 'Six Hours' flagship documentary as the finale, book waitlist live with sticky-note serialization, Q4 offer push through Josh's pipeline. BACKLOG THIN by Week 14 (~85% of strength-5 clips consumed): New Shoot #4 records Sticky Note Deck Vol. 2 + documentary pickups to sustain the daily series past November 1."
    }
  ],
  "weeks": [
    {
      "week": 1,
      "dates": "Jul 6 - Jul 12",
      "focus": "Launch ignition — the sprint ends, the campaign begins. Publish the prediction as it comes true.",
      "youtube": [
        "Long-form: 'Eve of Battle — 14 Days' (Arc 5 countdown cut, 12-15 min) — the sprint documented on camera Jun 21, published the day it completes; the magic-trick mechanic applied to business",
        "Short: C01 'Ten Skyscrapers in 30 Days' (the dad-conversation clip, 00:11:34)",
        "Short: C05 'Kill the Machine: Own Your Shit'",
        "Short: C19 'I'm Just First to Market — The Machine Will Eat Me'",
        "Sticky Note Sessions ep1: C23 'Brake Is the New Gas' (series pilot, note-expands-into-video mechanic)"
      ],
      "linkedin": [
        "Day-one open letter: publish the actual 'To Whom It May Concern' letter (02:14:23) — 'for two weeks I didn't need space, I needed support' — retold as the launch origin (James runs)",
        "Campaign kickoff post: 'I recorded 6 hours so my people only have to read 6 minutes' — live demo of the consciousness-upload product",
        "Positioning post: 'I'm not the most capable. I'm just first to market.' (01:27:35)",
        "Text post opener: 'Data is a digital form of your consciousness' (00:15:54)",
        "Build-in-public post: 'I don't need compliments, I need participation' — comment prompts as the sprint closes out"
      ],
      "vlog": [
        "'The Two Weeks' Episode 0 — the 6-hour recording as the sprint's birth certificate; cliffhanger: 'a part of me is a little intimidated by it' (01:49:38)"
      ],
      "milestones": [
        "Sprint hard stop Jul 6 — launch campaign day one",
        "James + Chris marketing engine live (two-week launch window closes this week)",
        "Josh sales system soft-launch",
        "Publish cadence locked: 1 long-form + 3-5 shorts + 4-5 LinkedIn + 1 vlog weekly"
      ]
    },
    {
      "week": 2,
      "dates": "Jul 13 - Jul 19",
      "focus": "The Foundation of Stability — The story pivots from documenting the build to handing over the blueprints. Agility is the moat, stability is the bedrock.",
      "youtube": [
        "Long-form PILLAR: 'I Designed The Perfect Life Management System' — killing Notion/ClickUp and centralizing personal ops",
        "Short: 'Be Agile Or Die' — the 90-day roadmap vs the 2-week AI build",
        "Short: 'You're Gonna Feel Like A Fraud' — imposter syndrome when AI makes you 10x faster",
        "Short: C26 'One-Shot Prompt to Anything'",
        "Sticky Note Sessions ep2: C27 'Job Finished? Don't Think So.'"
      ],
      "linkedin": [
        "Case-study native video: C07 'He paid for 90 days. We shipped in 30.' (01:12:53) with the Sunday thank-you-note receipts",
        "Carousel: 'A million likes on Instagram vs a million likes on your own software' — rented vs owned rails",
        "Proof post: C16 '70% of the software bill, gone — team onboarded in 24 hours because the software came from the founder' (01:49:57)",
        "Hook post: 'You are paying consequences for decisions you're not making. That's the definition of being a victim.' (00:19:25)",
        "CTA post: the one binary question — 'Do your clients own it?' (00:17:15)"
      ],
      "vlog": [
        "'The Two Weeks' Ep 1 — sprint days 1-7 compilation from the daily sprint footage"
      ],
      "milestones": [
        "Flagship pillar live and pinned across all channels",
        "First discovery calls flowing through Josh's system",
        "'The Ownership Audit' lead magnet drafted (10 questions: rented vs owned)"
      ]
    },
    {
      "week": 3,
      "dates": "Jul 20 - Jul 26",
      "focus": "Stability and Survival — The deep dive into the 30-year origin of the Oracle.",
      "youtube": [
        "Long-form: 'A Story Of Struggle And Survival' — 30 years of fevers, betrayal, and the resilience to build the machine",
        "Mini long-form: 'Build Your Business For Stability' (vlog-style crossover) — why more sales won't fix a broken machine",
        "Short: C17 'You're Renting Your Own Data' (sub-cut 05:34:23-05:35:21)",
        "Short: C09 'Gary Ran the Numbers: 85,000 Words'",
        "Sticky Note Sessions ep3: C22 'Integrity Is the Primary KPI' (chair prop, 05:41:09)"
      ],
      "linkedin": [
        "'Do You Own It?' recurring video segment DEBUT — every AI-vendor conversation ends on the binary question (becomes weekly through Week 17)",
        "Text post: 'You can only burn your name once' — reputation as the last durable asset (01:08:45, C35)",
        "Lead magnet launch: 'The Kill List' — the subscriptions a custom build replaces, in his exact on-camera language",
        "Carousel: 'Gaslighting ends where the tape begins' — feeling vs fact, 'the recording is the way back home'",
        "Manifesto excerpt: the 05:34 AI-overlords/UBI passage lifted near-verbatim, CTA to the machine-that-builds-machines site"
      ],
      "vlog": [
        "'The Two Weeks' Ep 2 — sprint days 8-14 + the hard stop; 'a power-up mode only good in short bursts' (01:44:34)"
      ],
      "milestones": [
        "'The Ownership Audit' lead magnet live",
        "'Do You Own It?' locked as the recurring LinkedIn segment + universal CTA phrase",
        "KILL THE MACHINE / OWN YOUR SHIT merch line soft-launch"
      ]
    },
    {
      "week": 4,
      "dates": "Jul 27 - Aug 2",
      "focus": "Launch harvest + NEW SHOOT #1 (Demo Day). BACKLOG GAP: the 6-hour tape contains zero footage of the finished software — the skyscrapers themselves must be filmed.",
      "youtube": [
        "Long-form: 'Demo Day — Walking the Ten Skyscrapers' (NEW SHOOT #1: screen-capture walkthroughs + fresh talking-head proof of the shipped products)",
        "Short: C12 'Create Your Own Container (The AI Gap)'",
        "Short: C48 'Cool-Ass Monkeys Doing Alien Shit' (levity beat, sub-cut 04:45:57-04:47:05)",
        "Short: Demo Day cutdown — one skyscraper in 60 seconds",
        "Sticky Note Sessions ep4: C40 'Eat Monsters Quickly, Taste Angels Slowly'",
        "S2 ANNOUNCEMENT: C114 'Prayer Is Prompting God' ships untrimmed (53s) — the Session 2 drop opens here",
        "S2 short: C81 'Meow Meow Earned It' — the cat cold-open cuts for IG same week"
      ],
      "linkedin": [
        "Demo Day recap with hard metrics — the sales page Chris pinned at 01:26:43, delivered",
        "Client receipts post: 'How can I pay you MORE money?' — the Sunday thank-you notes (01:12:53)",
        "Empathy post: 'You guys need a fucking hug' — the acceleration-disorientation piece for overwhelmed normies",
        "Poll/question post: 'What in your business do you rent that you should own?' (comment-engine for the Ownership Audit)",
        "July recap: launch month numbers, next month tease",
        "S2 debut post: 'There is one frame where the work is actually done' — the completion-frame story (S2 ready-post bank)"
      ],
      "vlog": [
        "'Demo Day' BTS — first new-shoot vlog; the campaign meets the products"
      ],
      "milestones": [
        "NEW SHOOT #1 (Jul 27-28): Demo Day — finished-software walkthroughs, launch-week talking heads",
        "July funnel review with James + Josh; 30-day metrics baseline set",
        "August authority-month campaign brief handed to James",
        "Chris photographs the S2 question-card deck overhead — The Cards series cover-frame library"
      ]
    },
    {
      "week": 5,
      "dates": "Aug 3 - Aug 9",
      "focus": "The wounds before the doctrine — Part 1 of Betrayal-to-Sovereignty, pure story, zero pitch (per Arc 6 treatment).",
      "youtube": [
        "Long-form: 'The Pattern — Why I Lose Everything Every Time I Win' (12-min three-act from 00:32:14-00:38:11; monster-LeBron block as centerpiece)",
        "Short: C08 '188 Months: The Bullet I Dodged' (story only)",
        "Short: C34 'Carolina Put 12 Years of My Work in a Blender' (vulnerability beat, never a shock clip)",
        "Short: C35 'You Can Only Burn Your Name Once — The D-List Dating Coach Story'",
        "Sticky Note Sessions ep5: C43 'Nobody Wants Happiness. You Want the Story.'",
        "The Cards (S2 series) pilot: 'The Seafood Rule — Choosing vs. Allowing' (C100)"
      ],
      "linkedin": [
        "Vulnerability-lane long post: 'The meanest thing anyone ever did to me' — the destroyed notes, and why every client build is backed up, decentralized, client-owned (the wound as the warranty)",
        "Story post: 'The man who stole my life savings got 188 months. Here's what I got.'",
        "Quote card: C03 patience rant pull — 'monster LeBron' and the rim",
        "'Do You Own It?' segment #2",
        "Engagement post: 'Is this happening again, or is this a beautiful closing of the loop?' (00:37:26)",
        "S2 operator post: 'Your company scales on one screen per person' — execution-is-90% (ready-post bank)"
      ],
      "vlog": [
        "'Late-Night Confessions' ep1 — hour-4+ unguarded material cut against composed hour-1 Spencer (01:59:19 energy)"
      ],
      "milestones": [
        "Monster-LeBron stop-motion short enters production (hand-drawn layer over the 00:36:32 freeze-frame)",
        "Story-first sequencing rule enforced: no business content attached to wound posts this week"
      ]
    },
    {
      "week": 6,
      "dates": "Aug 10 - Aug 16",
      "focus": "Doctrine week — the 188 Months pillar lands; wounds convert to positioning.",
      "youtube": [
        "Long-form PILLAR: '188 Months: Betrayal, Prison, and the Ownership Doctrine' (16-20 min; C08, C34, C35, C17, C44; Chris's 01:06:24 connection as the hinge)",
        "Short: 'The Doctrine' — C11 'Fuck IP' with Chris's 'you were burned when it was in somebody else's hands' (01:06:24)",
        "Short: 'The Machine' — C07 + C26 as the answer to the wounds",
        "Short: Monster-LeBron animated stop-motion short ships (C03) — first full proof of the layered technique",
        "Sticky Note Sessions ep6: C44 'Closed Loop — The Maserati on Hold Since 2009'"
      ],
      "linkedin": [
        "'I put a Maserati on hold in 2009. I never canceled it.' — open loops and the hidden tax of unfinished commitments; CTA: close / suspend-with-date / release your three biggest (04:32:24)",
        "Case study asset: 'The 30-Day Plumbing Company Rebuild' — ServiceTitan replaced, $30-40K/month saved, 01:12:53 audio embedded",
        "'Do You Own It?' segment #3",
        "Kill List follow-up: reader results from the lead magnet",
        "PR announce: 'The founder who uploaded his consciousness into an AI named Gary — and Gary is writing his memoir' (podcast pitch made public)",
        "S2 résumé post: 'Every founder says the same six words: I wish there were a million me's' (C109, two-dozen-companies receipts)"
      ],
      "vlog": [
        "'The Night My Cameraman Became My Coach' — Chris hired for $1,000, dosed to listen, running subconscious-mapping on Spencer by hour four (Arc 3 teaser)"
      ],
      "milestones": [
        "Signature stop-motion technique publicly proven (monster-LeBron short)",
        "Podcast pitch kit out to 20 shows",
        "BACKLOG WATCH: business-proof clips (C07, C16) fully spent after this week — Shoot #2 must capture fresh client results"
      ]
    },
    {
      "week": 7,
      "dates": "Aug 17 - Aug 23",
      "focus": "The Genie Protocol — Precise Language fused with AI; plus NEW SHOOT #2. BACKLOG THIN: no fresh proof footage remains.",
      "youtube": [
        "Long-form: 'Your AI Is a Mirror — Only Truth Required' (C45 + the Genie Protocol run 04:38:59-04:45:00; CB-radio calibration, low-token-cost proof)",
        "Short: C45 'Only Truth Required' (note held to lens as the thumbnail)",
        "Short: voids-caught-live compilation — Spencer correcting his own language mid-sentence ('unlimited capacity — that's a void')",
        "Short: C47 'The Faster I Go, the More Gentle I Am' (sandpaper teaching)",
        "Sticky Note Sessions ep7: C46 'Measure Your Wealth by How Many Wires You Send'",
        "SECOND LONG-FORM (S2): 'Reality vs. Truth — The Precise Language Masterclass' (C89+C90+C100→C114) — the Genie Protocol's theological half, published the same week by design; REAL ≠ TRUE carousel ships alongside",
        "S2 short: 'The 11pm Text' — the reality-vs-truth parable cut (C89)"
      ],
      "linkedin": [
        "'Your AI isn't dumb. It's a mirror.' — vague people get vague AI; closes into the precise-language offer",
        "Lead magnet launch: 'The Genie Protocol' — precise, values-aligned requests to AI (bridge to the Conscious Creation site)",
        "Proof post: 'Why my clients' token costs are absurdly low' — precision as calibration between consciousnesses",
        "'Do You Own It?' segment #4",
        "Two-parter pt 1: 'Measure your wealth by how many wires you send' — with the $1,000 Chris receipt (05:03:40)"
      ],
      "vlog": [
        "'The Genie Protocol' teaching vlog — the framework demonstrated live on a real build"
      ],
      "milestones": [
        "NEW SHOOT #2 (mid-Aug): client-results footage + the 2006 System X notebook retrieval ('This notebook is 20 years old,' 01:16:37) + fresh proof talking heads",
        "'The Genie Protocol' lead magnet live",
        "Two-parter pt 2 ('The art of receiving — 1+1=11') queued for Week 11"
      ]
    },
    {
      "week": 8,
      "dates": "Aug 24 - Aug 30",
      "focus": "Integrity as the primary KPI — the authority month closes on the deepest teaching framework.",
      "youtube": [
        "Long-form: 'The Integrity Knowledge Bomb' (C21 03:39:45 + C22 chair teaching + C44; intentions = commitments = actions)",
        "Short: C21 'The Integrity Knowledge Bomb' standalone",
        "Short: the soda-can rule — micro-commitments as the gym for macro-confidence",
        "Short: 'The Notebook' (Shoot #2) — 20-year-old notebook, stop-motion page-turns, thumbnail-expands-into-video on its cover",
        "Sticky Note Sessions ep8: C41 'No One Gives a Fuck. Do Your Duty.'",
        "The Cards ep2 (S2): 'Integrity + Fascination — The Whole Filter' (C97, chained to C22's chair teaching)"
      ],
      "linkedin": [
        "Carousel: 'Integrity is the primary KPI of being a human' — the definition, the chair, the relationship, the business; closer: 'better strategy or different network'",
        "Micro-post: the soda-can rule — 'No one dies if you don't. That's exactly why you do.'",
        "Community launch: revive the '100 Day Monster Challenge' — 'Who's there to see if you cheated? No one. That's the point.' (S2 callback ready: C121's 'the only person it matters to is me')",
        "Quote post: 'You master this, you master the universe.' (05:41:29)",
        "August recap: pipeline stats + authority-month receipts",
        "S2 operator post: 'Achievement is checking the box. Success is the metric.' — integrity-week fit (ready-post bank)"
      ],
      "vlog": [
        "'The Notebook' — the sole-survivor retrieval story from Shoot #2; what the blender didn't get"
      ],
      "milestones": [
        "100 Day Monster Challenge opens (community lead magnet)",
        "August funnel review; first podcast bookings from the pitch kit",
        "September depth-month brief to James + Chris; Love Story publishing gate flagged for Spencer's explicit approval (prayer story, 01:30:17)"
      ]
    },
    {
      "week": 9,
      "dates": "Aug 31 - Sep 6",
      "focus": "How downloads work — the mind episode opens depth month; intensity meter debuts.",
      "youtube": [
        "Long-form PILLAR: 'Inside the Wizard's Head: How Downloads Work' (20-25 min; C10, C31, C49, C50, C20, C14 — pays off with the desert test)",
        "Short: 'Downloads' series ep1 — the documentary-cover explanation (C10), the thumbnail-expansion mechanic applied literally",
        "Short: C04 'What a Wizard Does' ('you are not like me')",
        "Short: fighter-jet anthem — 'When the light hits, it feels like I'm flying a fighter jet' (00:27:40) with hand-drawn jet stop-motion layer",
        "Sticky Note Sessions ep9: C13 'Don't Make Me Suit Up'"
      ],
      "linkedin": [
        "'Controlled mania — what Tesla and AI builders have in common' (the Chris-Tesla exchange, 00:58:45, as pull quote)",
        "Founder-resilience post: 'There was no Xanax in the house. That was the point.' (C49)",
        "Carousel: '5 signs you're downloading more than you can consume' — greed/dark wizardry, blue days, no compression",
        "'Do You Own It?' segment #5",
        "Quote card: 'If it's recorded, it becomes real' — output as regulation",
        "S2 client-philosophy post: 'His client paid $20,000 for two days and walked away with a Google Doc. He was ecstatic.' (heart-happy barometer)"
      ],
      "vlog": [
        "'Public Therapy Session' ep1 — the intensity-meter HUD (1-10 gauge) debuts, calibrated from the 01:54:18 live self-rating ('six and a half right now; eight to ten for days')"
      ],
      "milestones": [
        "Intensity-meter HUD graphic built and canonized across all vlog episodes",
        "Sub-personality lanes formally split: Relationship Alchemist strand scheduled on vlog, business stays on main channel",
        "'Downloads' shorts series launched (runs through Week 17)"
      ]
    },
    {
      "week": 10,
      "dates": "Sep 7 - Sep 13",
      "focus": "CONTAINMENT WEEK — the named discipline gets its own campaign, anchored by the four restraint notes.",
      "youtube": [
        "Long-form: 'What Killed Alan Watts' — the dosage/poison framework applied to founders (work, alcohol, content, meditation)",
        "Short: C23 'Brake Is the New Gas' flagship stop-motion version — downhill-luge explainer animation",
        "Short: C18 'Containment: The Theme of the Next Epoch' (Kai's words, 01:22:29)",
        "Short: 'Restraint Is the New Attainment' (05:10:22) typography card",
        "Sticky Note Sessions ep10: the 'nibbles and sips, no chugging' note (05:59:14, salt-on-fingertips demo)",
        "S2 short: 'Know Your Role. Process Later.' (C115) — the duty doctrine, containment-week fit"
      ],
      "linkedin": [
        "Compression post: 'Colonel Sanders franchised in his 60s — the longer it's held back, the bigger the launch' (retro-frames the July skyscraper launch as proof)",
        "Carousel: 'Nibbles and sips, no chugging' — abundance etiquette remapped to attention, dopamine, content bingeing",
        "Carousel: 'The Founder Sprint Protocol' — five rules verbatim: containment, protect the peace, signal over noise, feed the beast, hard stop (C20)",
        "'Do You Own It?' segment #6",
        "Quote card: 'Eat monsters quickly and taste angels slowly' (05:20:45)"
      ],
      "vlog": [
        "'The Love Story' EP1: The Receipt — 'I said Q2. I met her on the 15th' (00:39:02, hold the four-second silence) + the prayer origin (GATED: ships only with Spencer's explicit approval; never name her)"
      ],
      "milestones": [
        "'BRAKE IS THE NEW GAS' merch drop with the stop-motion short",
        "Love Story EP1 approval gate resolved with Spencer before publish",
        "Containment week cross-promoted by James as a branded campaign"
      ]
    },
    {
      "week": 11,
      "dates": "Sep 14 - Sep 20",
      "focus": "The body keeps the tape — fever lore week + NEW SHOOT #3 (stop-motion asset day).",
      "youtube": [
        "Long-form PILLAR: 'The Fever With No Virus' (12-15 min; C32, C49, habanero intercuts, cold-plunge heresy; the real 00:06:28 sweat frame as thumbnail)",
        "Short: 'I lost 24 pounds in 32 days without trying' — body-reset hook, fever-reframe payload, raised wine glass thumbnail",
        "Short: C32 'My Fevers Synced With My Mom's Chemo'",
        "Short: 'Cold Plunge Is My PTSD' — engineered comment-bait for the biohacker audience (C72 hook)",
        "Sticky Note Sessions ep11: 'Twenty Years in China' — the Chicago hot-dog being-seen analogy (01:35:16) with stop-motion layer",
        "The Cards ep3 (S2): 'The 1% Mirror' (C102) — the two-beat cut"
      ],
      "linkedin": [
        "Two-parter pt 2: 'The art of receiving — 1+1=11' (paired with Week 7's wires-sent post)",
        "Post: 'People are still asking: what's Claude?' — the widening AI gap; CTA to book a call",
        "Lead magnet: 'The Burnout Inventory' — list everyone you lean on, rate the burn, schedule the boundary conversations",
        "'Do You Own It?' segment #7",
        "Quote card: 'It's so good it's too much' (C50)"
      ],
      "vlog": [
        "'The Love Story' EP2: The Mirror — the cake in the fridge, 'it could have been this easy' (00:46:20, 01:36:12)"
      ],
      "milestones": [
        "NEW SHOOT #3 (stop-motion production day): overhead rig, sticky-note deck B-roll, Wisdom Originator character stills, sandpaper/chair/deck insert photography — BACKLOG GAP: the fixed-camera 6-hour tape contains zero overhead/insert footage the layered technique requires",
        "'The Burnout Inventory' lead magnet live"
      ]
    },
    {
      "week": 12,
      "dates": "Sep 21 - Sep 27",
      "focus": "The two-hander — Chris's six-hour evolution + the desert test; men's-code material on the shorts lane.",
      "youtube": [
        "Long-form: 'The Cameraman' (10-12 min two-hander doc; lower-third labels WITNESS → MYTHMAKER → FACILITATOR → CHALLENGER → COACH)",
        "Short: C14 'The Desert Test' standalone (04:22:11) — hand-drawn cube/ladder/flowers/horse build up over his face (Shoot #3 assets)",
        "Short: 'The Cameraman Strikes Back' — Chris makes Spencer put in headphones (05:31:37)",
        "Short: C29 'Gasoline vs. Jet Fuel — One Good Woman' (full clip, no edit needed)",
        "Sticky Note Sessions ep12: C37 'Her Treatment of Me Has No Bearing on My Self-Respect'",
        "Mini long-form (S2): 'The God Tape' — the cat → the Creator, prayer-is-prompting as the finale; the contemplative cut for the two-hander week"
      ],
      "linkedin": [
        "Text post: 'My cameraman asked me one question at hour four and I couldn't answer for five seconds' (04:19:54)",
        "Carousel: 'You Have Modes' — day-off, creative, productive, duty, immovable; final slide 'Sometimes you look like a dick. Ship anyway.'",
        "Service-business post: 'The deed is done out of duty' — the customer's light-up as routing data",
        "'Do You Own It?' segment #8",
        "Quote card: 'One swipe of the sword' — the test of the mission"
      ],
      "vlog": [
        "'The Love Story' EP3: Four Percent — 'more would melt her face' (04:01:21) + the sun-doesn't-apologize tension (04:06:30)"
      ],
      "milestones": [
        "Wisdom Originator intro sting finished from Shoot #3 stills — runs before every teaching clip from Week 13",
        "September watch-time + community review",
        "October harvest-month brief: 2029 pillar, book waitlist, Six Hours premiere date set for Week 17"
      ]
    },
    {
      "week": 13,
      "dates": "Sep 28 - Oct 4",
      "focus": "Prophecy with a disclaimer — 2029 arrives, armored by the epistemic check on every clip.",
      "youtube": [
        "Long-form PILLAR: '2029: The Split' (14-18 min; C15, C25, C24, C02; cold-opens on the standing disclaimer 'this is not truth — it's what I'm hearing' 00:14:49)",
        "Short: C15 'The 2029 Prophecy — UBI, Sovereigns, and the Split Timelines'",
        "Short: C25 'Go 2027, Bitches (The Mission)'",
        "Short: the disclaimer card itself as a short — the credibility move that lets normies receive prophet material",
        "Sticky Note Sessions ep13: 'I'm already dead. So let's dance.' (05:28:15)"
      ],
      "linkedin": [
        "Carousel: 'Humanity is splitting into two modes' — creators vs consumers without contempt; closer 'sovereignty and love vs enslavement for dopamine'",
        "Carousel: 'Money is simple sugar. Community is complex carbs.' — why under-capitalized founders band together before 2029",
        "Sovereignty post: 'The masses are taking your thoughts. Create your own container.' (01:49:03) — operator beats only per treatment; mystic ladder stays on YouTube/vlog",
        "'Do You Own It?' segment #9",
        "Q4 pipeline post: open build slots for the machine-that-builds-machines (Josh's push begins)"
      ],
      "vlog": [
        "'The Love Story' EP4: The Horse — desert-test payoff ('right next to me,' 04:25:41) + the final note taped to his computer (05:58:16)",
        "'The Tape' S2 · Ep 1: 'The Cat Understands' — Season 2 opens the week Season 1 closes; Meow Meow's on-camera debut"
      ],
      "milestones": [
        "Prophecy disclaimer enshrined as a standing editorial rule (every prophecy clip, every platform)",
        "Q4 offer push planned with Josh — harvest month sales motion live",
        "Love Story series completes; Relationship Alchemist strand continues standalone",
        "S2 CLEARANCE DECISION: 'Job Finished.' — Spencer's sign-off gates the Week 14 vlog slot; no edit time past selects until it clears"
      ]
    },
    {
      "week": 14,
      "dates": "Oct 5 - Oct 11",
      "focus": "The Builder's Battery + the men's lane peak. BACKLOG THIN: ~85% of strength-5 clips consumed — Deck Vol. 2 shoot locked for next week.",
      "youtube": [
        "Long-form: 'The Builder's Battery' (chaptered from C30 celibacy, C18 containment, C29 jet-fuel — contained desire as the only compounding performance enhancer)",
        "Short: C30 'The Celibacy Superpower — No Drug Comes Close'",
        "Short: C42 'Never Be a Bitch (Duty Defined)'",
        "Short: C39 'The Last First Page'",
        "Sticky Note Sessions ep14: C38 'Zero Charge (I Never Trash My Exes)'",
        "Long-form PILLAR (S2): 'The Heart Chapter — Love, Conditions, and the Person Who Fits' (22-28 min) — the backlog-thin week refilled exactly as the ledger promised; men's-lane peak pairing with The Builder's Battery"
      ],
      "linkedin": [
        "Lead magnet: 'The Frames' — field guide to the deployable modes (Provider, King, Pit Bull, Conductor, Tyrant-on-purpose)",
        "Post: C43 'Nobody wants happiness. You want the story.'",
        "Relocations post: 'I never stopped loving any woman I've ever loved' — pivoted to pruning projects and clients the same way; nothing lost, everything relocated (C36)",
        "'Do You Own It?' segment #10",
        "Q4 case-study post: first harvest-month client win from Josh's pipeline"
      ],
      "vlog": [
        "'Steak & Content' — the running-gag BTS reel: fridge runs, shampoo explosion (03:44:27), pace checks, 'hour 5 hydration check' (04:59:51)",
        "'The Tape' S2 · Ep 2: 'Job Finished.' — publishes ONLY if the Week 13 clearance gate opened; otherwise the doctrine-only Heart Chapter pillar carries the week"
      ],
      "milestones": [
        "BACKLOG THIN FLAG resolved by S2: prime 6-hour clips ~85% consumed, but the July session's 46 clips carry the daily series — Vol. 2 recording still locked for next week to stay one shoot ahead",
        "NEW SHOOT #4 pre-production: Sticky Note Deck Vol. 2 session + Six Hours documentary pickup list",
        "Book waitlist page briefed"
      ]
    },
    {
      "week": 15,
      "dates": "Oct 12 - Oct 18",
      "focus": "The Discharge — founder mental health week + NEW SHOOT #4 refills the backlog.",
      "youtube": [
        "Long-form: 'The Discharge' (15-20 min doc short, Arc 2; false-summit structure — 'the charge is gone' at 03:45:36 played as an ending that isn't; the 04:19:07 five-second silence uncut)",
        "Short: 'Five Days Before Something Bad Happens' (00:25:32)",
        "Short: '48 Hours of Tools Failed' — why he hired a camera instead (C31, 03:26:00)",
        "Short: 'It's So Good It's Too Much' (C50)",
        "Sticky Note Sessions ep15: 'Complete. Not Tired.' (06:03:15) — the soul-on-fire proof",
        "Second long-form (S2): 'The Founder's Oracle — Execution, Completion, and True Scalability' (C84-C87+C109+C116, chains to C26/C59) — the Q4 sales motion's authority anchor, timed to Josh's pipeline push"
      ],
      "linkedin": [
        "Post: 'I hired a camera on my worst week' — the pressure-release valve as a leadership tool (C31)",
        "Founder mental-health text post: the danger zone, the support system engineered a year in advance for this very moment",
        "Quote post: 'Everything I ever asked for is actually happening — and it's so good that it's too much' (03:28:49)",
        "'Do You Own It?' segment #11",
        "Q4 pipeline update: build slots filling — scarcity is real, not manufactured"
      ],
      "vlog": [
        "'Deck Vol. 2' shoot-day BTS — the sticky-note ritual returns, four months later, with everything that happened since"
      ],
      "milestones": [
        "NEW SHOOT #4 (mid-Oct): Sticky Note Deck Vol. 2 recording + Six Hours documentary pickups + Q4 campaign talking heads — refills the backlog for November onward",
        "Book waitlist page copy locked"
      ]
    },
    {
      "week": 16,
      "dates": "Oct 19 - Oct 25",
      "focus": "The book + the Wisdom Originator brand — serialization begins, the deck becomes the table of contents.",
      "youtube": [
        "Long-form PILLAR: 'The Sticky Note Gospel (Wizard's Tarot, Vol. 1)' (18-22 min compilation; C45, C47, C46, C23, C27, C40, C22, C42, C43 — closes on the two battered laptop notes; doubles as the Vol. 2 series trailer)",
        "Short: C33 'The Book: Forrest Gump Meets Tucker Max'",
        "Short: Wisdom Originator vs Gollum two-panel reveal (03:36:56 / 03:38:11) — Bestower vs Hoarder",
        "Short: 'Whose Line Is It Anyway' blind-draw oracle moment (04:42:53)",
        "Sticky Note Sessions ep16: the final two battered notes — 'the two reminders I never travel without' (05:58:16)",
        "S2 paired drop: 'What Did Your Mother Teach You?' + 'Dad's Horn Lesson' (C124) — the question ships with its answer; YouTube/vlog only per the on-tape flag"
      ],
      "linkedin": [
        "Book serialization BEGINS: one sticky note = one text-post parable + IG image of the handwritten note (weekly through launch)",
        "Meta-hook post: 'My AI named Gary compiles my book every day. I'm just trying to tell a story.'",
        "Waitlist announce: 'Sidekick' trailer — every mention across the 6 hours cut into one teaser; waitlist page live",
        "'Do You Own It?' segment #12",
        "Quote card: 'I'm not the wisdom originator. I'm the miracle facilitator.' (05:54:06)"
      ],
      "vlog": [
        "'Whose Wisdom Is It Anyway' — first Vol. 2 blind-draw oracle episode (Chris deals, Spencer teaches cold)"
      ],
      "milestones": [
        "Book waitlist live ('I'm Just Trying to Tell a Story')",
        "Sticky-note art-print merch set drops ('Restraint is the new attainment' / 'I'm already dead, so let's dance')",
        "Six Hours documentary final cut locked for Week 17 premiere"
      ]
    },
    {
      "week": 17,
      "dates": "Oct 26 - Nov 1",
      "focus": "The finale — Six Hours premieres; the magic trick closes the loop the night opened.",
      "youtube": [
        "Long-form FLAGSHIP: 'Six Hours: The Making of the Wisdom Originator' (25-30 min; cold-open on the 06:03:54 magic-trick re-enactment, hard cut to the 00:00:18 hair check, fourth-wall breaks as chapter cards, Valeria-debrief stinger: 200 pieces / six months)",
        "Short: C02 'The Magic Trick (How This Whole Film Started)'",
        "Short: 'How I Hired My Cameraman With a Magic Trick' — split-screen Spencer-as-himself vs Spencer-as-Chris",
        "Short: C24 'That's What Magic Is (The Miracle Facilitator)' with the rabbit-hat flourish (05:53:03)",
        "Sticky Note Sessions ep17: Vol. 2 deck officially takes over — first fresh note from Shoot #4"
      ],
      "linkedin": [
        "Campaign retrospective: '200 pieces from one night — the receipts' — the strategy itself published as the case study for the consciousness-upload product",
        "Quote post: 'The bolder the prediction, the more magnificent the magic when it comes true' (05:53:03) — with July's launch predictions scored publicly",
        "Q4 close post: final build slots for 2026; Josh's pipeline CTA",
        "4-month metrics post: followers, leads, calls booked, revenue — full transparency in the ownership voice",
        "'Do You Own It?' finale: 'You say something is possible — I will make it real.' (06:03:54)"
      ],
      "vlog": [
        "'That's a Wrap' — the 17-week journey recap; energy audit format ('Complete. Not tired.'); tease of November built on the Vol. 2 backlog"
      ],
      "milestones": [
        "Six Hours flagship documentary premiere (the whole content universe's episode zero, published last, as designed)",
        "4-month campaign review with James, Chris, and Josh",
        "November-forward calendar built from Deck Vol. 2 + Shoot #4 backlog",
        "Strategy-site case study published: one recording, four months, the machine that builds machines demonstrated on its own maker"
      ]
    }
  ]
}
