import type { ReactNode } from 'react'
import { Card, Fade, Tag } from '../components/ui'

function Quote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <div className="my-10 text-center max-w-3xl mx-auto">
      <p className="font-chalk text-3xl md:text-4xl text-amber leading-snug">&ldquo;{children}&rdquo;</p>
      {attribution && <p className="text-dim text-xs mt-3 uppercase tracking-widest">{attribution}</p>}
    </div>
  )
}

function CTA({ big = false }: { big?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${big ? 'justify-center' : ''}`}>
      <a
        href="https://spencerburnett.com"
        onClick={(e) => e.preventDefault()}
        className={`inline-block rounded-lg bg-amber text-ink font-semibold text-center transition-transform hover:scale-[1.02] ${
          big ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
        }`}
      >
        Book the &ldquo;Do You Own It?&rdquo; call
      </a>
      <a
        href="#audit"
        onClick={(e) => e.preventDefault()}
        className={`inline-block rounded-lg border border-amber-soft/60 text-amber text-center transition-colors hover:bg-amber/10 ${
          big ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
        }`}
      >
        Take the 12-question Ownership Audit
      </a>
    </div>
  )
}

const receipts = [
  { n: '$60,000', l: 'what one HVAC contractor invested to build his own enterprise CRM — and he does the flying himself' },
  { n: '30 days', l: 'a ServiceTitan replacement shipped for a South Florida plumbing company — a build quoted in the $300K class before AI' },
  { n: '16 apps', l: '~150,000 lines of code, 300+ screens — shipped in 41 days' },
  { n: '6 wks → 1 wk', l: 'client onboarding time, first repetition to second. The method transfers.' },
  { n: '$250K', l: 'the quote a dev shop gave for one backend, at 90 days. Refused. Shipped in 30.' },
  { n: '50–70%', l: 'typical software-bill cut when the Hit List retires the subscriptions your build replaces' },
]

const steps = [
  {
    title: 'Capture — we upload the consciousness of your organization',
    body: 'Your operators record short screen videos of how work actually flows — dispatch, quoting, invoicing, the works. Every login gets consolidated into one vault. Every software subscription gets written on the Hit List with its price next to it. Nothing is built yet; first the business gets seen, completely, from your point of view.',
  },
  {
    title: 'The Build — 30 days, org chart to working screens',
    body: 'It starts with your org chart and your customer experience and fractals down from there. You watch screens appear daily — your job types, your price book, your language, your rules. Not a template with your logo on it. Your company, as software.',
  },
  {
    title: 'Walk every experience — money in the bank, proven',
    body: 'Before go-live, every customer path gets driven end-to-end like a real customer: call to booked job, estimate to approval, invoice to payment cleared. Every path terminates in money in the bank or it does not ship.',
  },
  {
    title: 'The Loop — your team’s complaints become the roadmap',
    body: 'After launch, your team records a video whenever the software annoys them. By morning those complaints are feature proposals. The owners vote — three yeses and it ships that week. The bitching becomes the backlog. All it requires is participation.',
  },
]

const faqs = [
  {
    q: 'Who maintains it after you leave?',
    a: 'You do — and that is the point. You own the repository, the documentation, and the improvement loop. Your team learns to request changes in plain language and watch them ship. Any competent developer on earth can work on it, because it is standard, documented code — not a proprietary platform. Ongoing partnership tiers exist for owners who want me on call, and none of them are required.',
  },
  {
    q: 'What happens to my existing data?',
    a: 'It comes home. Customers, jobs, invoices, call history — migrated out of the rented tools and into a database you own, with a real migration gate you approve before anything cuts over. From that day, your data stops training someone else’s product.',
  },
  {
    q: 'Does it integrate with QuickBooks / my phones / my payment processor?',
    a: 'Yes — accounting, telephony, texting, payments, ad platforms. Integration is usually the easy part; the hard part was always the build economics, and those changed.',
  },
  {
    q: 'We are not technical. At all.',
    a: 'Neither are the contractors already running theirs. The capture phase is filmed conversation and screen recordings — if your operators can explain the job to a new hire, they can feed the build. A career software engineer audited one of these builds and said a month of his grinding had happened in a day. He was in shock. Your team will not need to write a line of code.',
  },
  {
    q: 'What does it cost?',
    a: 'Engagements are scoped from $15K (single-workflow systems) to $500K (multi-division enterprise). The flagship service-company build — full operations platform, owned outright — starts at $60,000: half to begin, half on completion. Compare that once against your next three years of per-seat fees.',
  },
  {
    q: 'How fast do I see something real?',
    a: 'Working screens with your data inside the first two weeks. The full platform in roughly 30 days. The build is watched, not awaited — you see it grow daily.',
  },
]

export default function Doorway() {
  return (
    <div className="max-w-4xl">
      {/* HERO */}
      <div className="relative rounded-2xl overflow-hidden border border-edge mb-10">
        <img src="/pics/IMG_1337.jpeg" alt="The doorway" className="w-full object-cover max-h-[420px] object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="font-chalk text-2xl text-amber drop-shadow">Come on in.</div>
        </div>
      </div>

      <div className="text-amber text-xs font-semibold tracking-[0.25em] uppercase mb-4">
        For owners of $5M–$100M service companies — HVAC · plumbing · electrical · installations
      </div>
      <h1 className="font-display text-4xl md:text-[3.4rem] text-bone leading-[1.08] mb-6">
        You built the business.
        <br />
        A software company you&rsquo;ll never meet decides how it runs.
      </h1>
      <p className="text-faded text-lg leading-relaxed mb-4 max-w-3xl">
        Every month you pay rent — per seat, per truck, per &ldquo;premium feature&rdquo; — for software built
        for the <em className="text-bone not-italic font-medium">average</em> company in your industry. Your
        dispatchers fight it. Your data feeds it. And the price goes up every year, because what are you going
        to do, leave?
      </p>
      <p className="text-bone text-lg leading-relaxed mb-8 max-w-3xl font-medium">
        I build service companies their own software — code, data, and keys included — in about 30 days.
        Then I teach your people to fly it.
      </p>
      <CTA />

      <Quote>Right now you are paying to rent your data for a company that you own.</Quote>

      {/* PROBLEM */}
      <h2 className="font-display text-3xl text-bone mb-5">Add it up once. Just once.</h2>
      <div className="space-y-4 text-faded text-[15px] leading-relaxed max-w-3xl mb-6">
        <p>
          The field-service platform. The CRM bolted to it. The scheduler that doesn&rsquo;t quite talk to
          either. The forms tool, the review tool, the five spreadsheets your office manager built to bridge
          the gaps the &ldquo;all-in-one&rdquo; left open. Per-seat pricing that fines you for hiring. Annual
          increases timed to your renewal, when leaving would mean re-training forty people.
        </p>
        <p>
          Here is the part nobody says out loud: <span className="text-bone">that software was never built
          for you.</span> It was built for the middle of the market, and your company — the one doing $5M,
          $20M, $80M with its own way of quoting, dispatching, and closing — pays every day for the
          difference between how you actually run and how the template says you should.
        </p>
        <p>
          You are paying consequences for decisions you&rsquo;re not making. There&rsquo;s a word for that
          arrangement, and it isn&rsquo;t &ldquo;partnership.&rdquo;
        </p>
      </div>

      <Fade>
        <div className="rounded-xl overflow-hidden border border-edge mb-4">
          <img src="/pics/IMG_1386.jpeg" alt="Where the chain breaks" className="w-full" />
        </div>
        <p className="text-dim text-xs mb-12">
          The whole chain, drawn in crayon on my desk: command → computer → oracle → brain → tools → action →
          result. In red: everywhere the rented version breaks — <em>you don&rsquo;t own it, no context, no
          performance.</em> Find your red word.
        </p>
      </Fade>

      {/* SHIFT */}
      <h2 className="font-display text-3xl text-bone mb-5">What changed (the skyscraper)</h2>
      <div className="space-y-4 text-faded text-[15px] leading-relaxed max-w-3xl mb-8">
        <p>
          My dad worked construction, so I explained it to him this way. The Sears Tower took three years and
          ten thousand people. Now imagine standing across the street watching a skyscraper go from
          architect&rsquo;s drawing to tenants walking in the doors — <span className="text-bone">in thirty
          days</span>. Then imagine it was built by one guy. Then imagine he built ten of them.
        </p>
        <p>
          That is not a metaphor about the future. That is what AI did to custom software economics,
          this year, and I can prove it, because a development shop quoted me a quarter of a million dollars
          and ninety days for one backend — to my face — and I shipped it in thirty.
        </p>
        <p>
          The $250,000 build your industry got quoted in 2023 is now a $60,000 build that takes a month. The
          only people not saying this out loud are the people collecting the rent.
        </p>
      </div>

      <Quote attribution="on why this works">
        I know how to talk to the machine. Up until this point, I&rsquo;ve been the AI.
      </Quote>

      {/* RECEIPTS */}
      <h2 className="font-display text-3xl text-bone mb-2">Receipts, not promises</h2>
      <p className="text-faded text-[15px] mb-6 max-w-3xl">
        These are current-year numbers from real builds for real service companies — the same trades you work in.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {receipts.map((r, i) => (
          <Fade key={r.n} delay={i * 0.04}>
            <Card className="text-center py-6 h-full">
              <div className="font-display text-2xl md:text-3xl text-amber mb-2">{r.n}</div>
              <div className="text-faded text-[12px] leading-relaxed">{r.l}</div>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <Card className="mb-12 border-amber-soft/40">
          <p className="text-bone text-[15px] leading-relaxed mb-3">
            The contractor behind that first number runs an installations company. He didn&rsquo;t hire me to
            build his software — <span className="text-amber">he paid to build it himself, under my
            guidance.</span> Ninety days in, he operates the whole thing: proposals, pipeline, subcontractor
            compliance. When his career-developer friend audited it, the developer clicked through screens
            nobody wrote by hand and said: &ldquo;A month of solid grinding&hellip; in one day. I&rsquo;m in
            shock.&rdquo;
          </p>
          <p className="text-faded text-[13px]">
            That is the product. Not software. <span className="text-bone">Capability.</span>
          </p>
        </Card>
      </Fade>

      <Quote>I build you a fighter jet — and you can fly it yourself.</Quote>

      {/* PROCESS */}
      <h2 className="font-display text-3xl text-bone mb-6">How it works</h2>
      <div className="space-y-5 mb-12">
        {steps.map((s, i) => (
          <Fade key={s.title} delay={i * 0.03}>
            <Card>
              <div className="flex gap-4">
                <span className="font-display text-3xl text-amber/60 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="text-bone font-medium text-[15px] mb-2">{s.title}</h3>
                  <p className="text-faded text-[13px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            </Card>
          </Fade>
        ))}
      </div>

      {/* OWNERSHIP */}
      <h2 className="font-display text-3xl text-bone mb-5">What you hold when it&rsquo;s done</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          ['The code', 'Your repository, your keys. Standard, documented, portable — any developer alive can work on it.'],
          ['The data', 'Every customer, job, call, and dollar — in a database registered to your company, not theirs.'],
          ['The loop', 'The daily improvement machine, installed: complaints in at night, shipped features by Friday.'],
          ['The skill', 'Your people, trained to change their own software with plain language. The founders themselves built it — that is how good the system is.'],
        ].map(([t, d], i) => (
          <Fade key={t} delay={i * 0.04}>
            <Card>
              <h3 className="font-chalk text-2xl text-amber mb-1.5">{t}</h3>
              <p className="text-faded text-[13px] leading-relaxed">{d}</p>
            </Card>
          </Fade>
        ))}
      </div>

      <Fade>
        <div className="rounded-xl overflow-hidden border border-edge mb-4">
          <img src="/pics/IMG_1241.jpeg" alt="The build cockpit" className="w-full" />
        </div>
        <p className="text-dim text-xs mb-12">
          Where your software gets built. Every note on that desk is a rule the work runs on.
        </p>
      </Fade>

      {/* WHO */}
      <h2 className="font-display text-3xl text-bone mb-5">Who this is for</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <Card>
          <div className="uppercase tracking-widest text-[10px] text-amber-soft mb-3">This is for you if</div>
          <ul className="space-y-2.5">
            {[
              'You own or operate a $5M–$100M service company — HVAC, plumbing, electrical, roofing, installations, restoration',
              'Your software bill has crossed the point of embarrassment and the workflows still don’t fit',
              'You want your operation’s knowledge working for you, in an asset you can sell with the business',
              'You will put your best operators on camera for two weeks of capture — that is the whole ask',
            ].map((x, i) => (
              <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                <span className="text-amber shrink-0">✓</span>{x}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <div className="uppercase tracking-widest text-[10px] text-dim mb-3">This is not for you if</div>
          <ul className="space-y-2.5">
            {[
              'You want another subscription with someone else responsible for it',
              'Decisions at your company take a committee and a quarter',
              'You are looking for the cheapest possible option — the cheapest option is the rent, right up until it isn’t',
            ].map((x, i) => (
              <li key={i} className="text-faded text-[13px] leading-relaxed flex gap-2">
                <span className="text-dim shrink-0">✕</span>{x}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* OFFER */}
      <h2 className="font-display text-3xl text-bone mb-5">The engagement</h2>
      <Fade>
        <Card className="mb-12 border-amber/40">
          <div className="space-y-3 text-[14px] leading-relaxed">
            <p className="text-bone">
              <span className="font-display text-2xl text-amber mr-2">From $60,000.</span>
              Full operations platform for a service company, owned outright. Scoped engagements run
              $15K–$500K depending on divisions and depth.
            </p>
            <p className="text-faded">
              Half to begin, half on completion — you see working screens with your data inside two weeks,
              and the completion payment exists so the risk sits on my side of the table, where it belongs.
            </p>
            <p className="text-faded">
              Capacity is the honest constraint: a limited number of builds run per month, because each one
              gets the machine&rsquo;s full attention. When the month is allocated, the next slot is the next month.
            </p>
          </div>
        </Card>
      </Fade>

      {/* FAQ */}
      <h2 className="font-display text-3xl text-bone mb-6">Questions owners actually ask</h2>
      <div className="space-y-4 mb-14">
        {faqs.map((f, i) => (
          <Fade key={i} delay={Math.min(i * 0.03, 0.15)}>
            <Card>
              <h3 className="text-bone font-medium text-[14px] mb-2">{f.q}</h3>
              <p className="text-faded text-[13px] leading-relaxed">{f.a}</p>
            </Card>
          </Fade>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="text-center mb-14">
        <Quote>You say something is possible — I will make it real.</Quote>
        <p className="text-faded text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
          The call is 30 minutes. Bring your software bill and the one workflow that drives your team
          craziest. You leave with the audit of where your chain breaks and what owning it would cost —
          whether we build together or you take the map and run.
        </p>
        <CTA big />
        <p className="font-chalk text-2xl text-amber mt-10">Do you own it?</p>
      </div>

      {/* INTERNAL PRE-FLIGHT — remove before publishing */}
      <Card className="border-edge/80">
        <div className="flex items-center gap-2 mb-3">
          <Tag tone="dim">internal — remove before this page goes public</Tag>
        </div>
        <ul className="space-y-1.5">
          {[
            'Wes sign-off: the $60K figure, the 90-day build story, and the engineer-audit quote',
            'Kevin sign-off: the ServiceTitan-replacement claim and the $300K-class framing',
            'Verify the 41-days / 16-apps / 150K-lines tally before public use',
            'Wire the two CTAs: booking link (Josh’s pipeline) + Ownership Audit lead-magnet page',
            'Confirm the from-$60K price floor and monthly capacity number before launch',
          ].map((x, i) => (
            <li key={i} className="text-dim text-[12px] leading-relaxed flex gap-2">
              <span className="shrink-0">☐</span>{x}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
