import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iitbLogo from './assets/iitb.webp';

gsap.registerPlugin(ScrollTrigger);

const subteamConfig = [
  {
    key: 'wetlab',
    label: 'Wet Lab',
    short: 'Bench-scale synthetic biology and validation experiments.',
    whatWeAre: 'We are the experimental core that translates project hypotheses into laboratory workflows.',
    whatWeDo: [
      'Design and execute cloning, expression, and assay workflows.',
      'Run validation loops for reproducibility and biosafety compliance.',
      'Coordinate sampling plans and experiment documentation.'
    ],
    works: [
      { title: 'Construct Assembly', detail: 'Plasmid architecture, primer design, and cloning rounds.' },
      { title: 'Biofilm Assays', detail: 'Quantitative tests for degradation efficiency.' },
      { title: 'Validation Matrix', detail: 'Replicates, controls, and wet-lab quality checks.' }
    ],
    members: [
      { name: 'Aarav Mehta', position: 'Wet Lab Lead' },
      { name: 'Riya Sharma', position: 'Research Associate' },
      { name: 'Kabir Nair', position: 'Assay Specialist' },
      { name: 'Sana Khan', position: 'Lab Operations' }
    ]
  },
  {
    key: 'drylab',
    label: 'Dry Lab',
    short: 'Computational models, data analytics, and simulation loops.',
    whatWeAre: 'We are the quantitative engine that guides design decisions using models and data.',
    whatWeDo: [
      'Build kinetic and systems-level models for project behavior.',
      'Analyze experimental outputs and derive actionable insights.',
      'Support optimization with simulation-based parameter sweeps.'
    ],
    works: [
      { title: 'Kinetic Model Stack', detail: 'Reaction and degradation pathway modeling.' },
      { title: 'Data Pipeline', detail: 'Processing assay outputs and confidence intervals.' },
      { title: 'Scenario Simulation', detail: 'Parameter exploration for robust operating windows.' }
    ],
    members: [
      { name: 'Neel Rao', position: 'Dry Lab Lead' },
      { name: 'Ishita Das', position: 'Modeling Engineer' },
      { name: 'Arjun Patel', position: 'Data Analyst' },
      { name: 'Maya Iyer', position: 'Visualization Engineer' }
    ]
  },
  {
    key: 'ihp',
    label: 'IHP',
    short: 'Integrated Human Practices and responsible innovation.',
    whatWeAre: 'We are the impact and governance unit connecting technical outcomes with societal context.',
    whatWeDo: [
      'Run stakeholder interviews across healthcare and policy ecosystems.',
      'Perform ethics and risk-benefit mapping for deployment pathways.',
      'Build outreach and science communication material for broader audiences.'
    ],
    works: [
      { title: 'Stakeholder Mapping', detail: 'Clinicians, experts, and end-user interviews.' },
      { title: 'Policy Review', detail: 'Regulatory pathway and ethical framework review.' },
      { title: 'Outreach Programs', detail: 'Campus and school engagement activities.' }
    ],
    members: [
      { name: 'Vani Kulkarni', position: 'IHP Lead' },
      { name: 'Rahul Menon', position: 'Policy Researcher' },
      { name: 'Nisha Verma', position: 'Outreach Coordinator' },
      { name: 'Soham Roy', position: 'Ethics Analyst' }
    ]
  },
  {
    key: 'media-design',
    label: 'Media & Design',
    short: 'Visual systems, storytelling, and communication assets.',
    whatWeAre: 'We are the narrative and identity team that converts technical work into clear visual communication.',
    whatWeDo: [
      'Design visual language for wiki, presentations, and campaigns.',
      'Develop storytelling frameworks for project communication.',
      'Support outreach with creative and structured media assets.'
    ],
    works: [
      { title: 'Design System', detail: 'Color, typography, icon and layout standards.' },
      { title: 'Science Storyboards', detail: 'Structured narratives for complex technical modules.' },
      { title: 'Collateral Suite', detail: 'Posters, social assets, and event creatives.' }
    ],
    members: [
      { name: 'Tanvi Gupta', position: 'Design Lead' },
      { name: 'Yash Borkar', position: 'Illustrator' },
      { name: 'Pooja Sethi', position: 'Content Designer' },
      { name: 'Dev Arora', position: 'Media Coordinator' }
    ]
  },
  {
    key: 'web-dev',
    label: 'Web Dev',
    short: 'Wiki architecture, frontend engineering, and deployment.',
    whatWeAre: 'We are the platform team responsible for building and shipping the team website and wiki experience.',
    whatWeDo: [
      'Develop responsive pages for project documentation and team content.',
      'Maintain navigation, accessibility, and performance quality.',
      'Manage release workflows for updates throughout the iGEM cycle.'
    ],
    works: [
      { title: 'Page Architecture', detail: 'Structured information hierarchy across sections.' },
      { title: 'Component Library', detail: 'Reusable UI blocks for rapid iteration.' },
      { title: 'Release Workflow', detail: 'Build validation and deployment checks.' }
    ],
    members: [
      { name: 'Aditya Sen', position: 'Web Lead' },
      { name: 'Kritika Jain', position: 'UI Engineer' },
      { name: 'Manav Shah', position: 'Frontend Developer' },
      { name: 'Simran Kaur', position: 'QA and Accessibility' }
    ]
  }
];

const routeSet = new Set(['home', ...subteamConfig.map((team) => team.key)]);

const timelineEvents = [
  {
    year: '2024',
    title: 'Team Onboarding and Problem Framing',
    subtitle: 'Foundation',
    text: 'The team shortlisted high-impact problem statements and created an aligned research direction.'
  },
  {
    year: '2024',
    title: 'Design Sprint and Early Validation',
    subtitle: 'R&D Phase',
    text: 'Wet Lab and Dry Lab collaborated on initial design assumptions and iterative validation plans.'
  },
  {
    year: '2025',
    title: 'Prototype Iteration and Human Practices',
    subtitle: 'Integration',
    text: 'Subteams converged technical outputs with stakeholder insights and responsible deployment pathways.'
  },
  {
    year: '2025',
    title: 'Wiki Build and Final Submission',
    subtitle: 'Delivery',
    text: 'Documentation, presentation assets, and final project communication were prepared for iGEM.'
  }
];

const keyStats = [
  { value: 'Silver', label: 'iGEM 2025 Medal' },
  { value: 'Gold', label: 'iGEM 2024 Medal' },
  { value: '400+', label: 'Global Teams' }
];

function getRouteFromHash() {
  const hashValue = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  return routeSet.has(hashValue) ? hashValue : 'home';
}

function TeamDetailPage({ team, onGoHome }) {
  return (
    <section className="py-10 md:py-14">
      <div className="rounded-[30px] border border-black/10 bg-white/90 p-6 shadow-soft md:p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Subteam</p>
        <h1 className="mt-3 font-display text-3xl md:text-5xl">{team.label}</h1>
        <button
          type="button"
          onClick={onGoHome}
          className="mt-5 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-ink transition-shadow hover:shadow-[0_12px_26px_rgba(31,122,140,0.24)]"
        >
          Back to Home
        </button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <article className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">What We Are</p>
          <p className="mt-4 text-base text-muted">{team.whatWeAre}</p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">What We Do</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {team.whatWeDo.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-8 rounded-[30px] border border-black/10 bg-white/90 p-6 shadow-soft md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Current Works</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {team.works.map((work) => (
            <article key={work.title} className="rounded-2xl border border-black/10 bg-white p-5">
              <h3 className="font-display text-xl">{work.title}</h3>
              <p className="mt-2 text-sm text-muted">{work.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[30px] border border-black/10 bg-white/90 p-6 shadow-soft md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Members</p>
        <h2 className="mt-3 font-display text-2xl md:text-3xl">Member photos and positions</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member) => (
            <article key={member.name} className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="grid h-44 place-items-center rounded-xl border border-dashed border-black/20 bg-[#f3f8fb] text-xs uppercase tracking-[0.2em] text-muted">
                Photo Placeholder
              </div>
              <p className="mt-4 font-semibold text-ink">{member.name}</p>
              <p className="text-sm font-medium text-accent">{member.position}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(getRouteFromHash());
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSubMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  useEffect(() => {
    if (route !== 'home' || !timelineRef.current) return undefined;
    const timelineContext = gsap.context(() => {
      gsap.set('.tl-line', { scaleY: 0, transformOrigin: 'top center' });
      gsap.to('.tl-line', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-wrap',
          start: 'top 72%',
          end: 'bottom 35%',
          scrub: true
        }
      });
      gsap.fromTo(
        '.tl-card',
        { y: 46, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-wrap',
            start: 'top 72%'
          }
        }
      );
      gsap.fromTo(
        '.tl-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: '.timeline-wrap',
            start: 'top 72%'
          }
        }
      );
    }, timelineRef);
    return () => timelineContext.revert();
  }, [route]);

  const activeTeam = useMemo(
    () => subteamConfig.find((team) => team.key === route),
    [route]
  );

  const navigate = (nextRoute) => {
    if (!routeSet.has(nextRoute)) return;
    window.location.hash = `/${nextRoute}`;
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <header className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-full sm:pt-3 sm:w-[92vw] sm:px-4 md:w-[85vw] lg:w-[70vw] xl:min-w-[1050px]">
          <div className="flex w-full items-center justify-center rounded-none border border-transparent bg-white/20 px-4 py-3 pr-4 shadow-none backdrop-blur-sm sm:rounded-full sm:border-black/10 sm:bg-white/20 sm:px-6 sm:py-3 sm:shadow-lg sm:backdrop-blur-sm">
            <div className="flex w-full items-center gap-4">
              <button type="button" onClick={() => navigate('home')} className="flex shrink-0 items-center gap-3 text-left">
                <img
                  src={iitbLogo}
                  alt="iGEM IIT Bombay logo"
                  className="h-[84px] w-[84px] shrink-0 rounded-full object-contain mix-blend-multiply drop-shadow-[0_14px_22px_rgba(26,36,52,0.18)] sm:h-[72px] sm:w-[72px]"
                />
                <div className="leading-tight whitespace-nowrap">
                  <p className="text-xs uppercase tracking-[0.35em] text-accent">iGEM</p>
                  <p className="text-base font-semibold text-ink sm:text-lg">IIT BOMBAY</p>
                </div>
              </button>

              <nav className="hidden min-w-0 flex-1 items-center justify-start gap-2 pl-3 text-xs text-muted xl:flex xl:text-sm 2xl:gap-3">
                <button
                  type="button"
                  onClick={() => navigate('home')}
                  className={`rounded-full px-3 py-2 transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(31,122,140,0.24)] ${
                    route === 'home' ? 'text-ink' : ''
                  }`}
                >
                  Home
                </button>

                <div
                  className="group relative"
                  onMouseEnter={() => setSubMenuOpen(true)}
                  onMouseLeave={() => setSubMenuOpen(false)}
                >
                  <button
                    type="button"
                    className="rounded-full px-3 py-2 transition-all duration-300 hover:px-6 hover:shadow-[0_14px_30px_rgba(31,122,140,0.26)]"
                  >
                    Subteams
                  </button>
                  <div
                    className={`absolute left-0 top-[110%] z-40 w-56 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-sm transition-all ${
                      subMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    {subteamConfig.map((team) => (
                      <button
                        key={`desktop-sub-${team.key}`}
                        type="button"
                        onClick={() => navigate(team.key)}
                        className={`mb-1 block w-full rounded-xl px-3 py-2 text-left text-sm transition-shadow hover:shadow-[0_10px_20px_rgba(31,122,140,0.22)] ${
                          route === team.key ? 'bg-[#eef8fb] text-ink' : 'text-muted'
                        }`}
                      >
                        {team.label}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href="https://2025.igem.wiki/iit-bombay/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-3 py-2 transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(31,122,140,0.24)]"
                >
                  Wiki
                </a>
                <a
                  href="mailto:igem@iitb.ac.in"
                  className="rounded-full px-3 py-2 transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(31,122,140,0.24)]"
                >
                  Contact
                </a>
              </nav>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="ml-4 flex h-11 w-11 items-center justify-center rounded-full border-transparent bg-transparent text-ink shadow-none xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>

          <div className={`xl:hidden ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/30 px-4 py-4 text-sm text-muted shadow-lg backdrop-blur-md">
              <button
                type="button"
                onClick={() => navigate('home')}
                className={`rounded-xl border border-black/10 bg-white/95 px-4 py-3 text-left text-ink transition-shadow hover:shadow-[0_10px_20px_rgba(31,122,140,0.22)] ${
                  route === 'home' ? 'font-semibold' : ''
                }`}
              >
                Home
              </button>
              {subteamConfig.map((team) => (
                <button
                  key={`mobile-sub-${team.key}`}
                  type="button"
                  onClick={() => navigate(team.key)}
                  className={`rounded-xl border border-black/10 bg-white/95 px-4 py-3 text-left text-ink transition-shadow hover:shadow-[0_10px_20px_rgba(31,122,140,0.22)] ${
                    route === team.key ? 'font-semibold' : ''
                  }`}
                >
                  {team.label}
                </button>
              ))}
              <a
                href="https://2025.igem.wiki/iit-bombay/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-black/10 bg-white/95 px-4 py-3 text-left text-ink transition-shadow hover:shadow-[0_10px_20px_rgba(31,122,140,0.22)]"
              >
                Wiki
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92vw] px-4 pt-24 md:w-[85vw] md:px-6 lg:w-[70vw] lg:pt-28">
        {route === 'home' ? (
          <>
            <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[32px] border border-black/10 bg-white/90 p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.4em] text-accent">Engineering Biology • IIT Bombay</p>
                <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                  Student-led synthetic biology, built for real-world impact.
                </h1>
                <p className="mt-6 text-lg text-muted">
                  iGEM IIT Bombay is a student-led synthetic biology team representing IIT Bombay at the annual iGEM
                  competition with coordinated wet lab, dry lab, IHP, design, and web development efforts.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {keyStats.map((item) => (
                    <article key={item.label} className="rounded-2xl border border-black/10 bg-white p-4">
                      <p className="text-2xl font-semibold text-ink">{item.value}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.label}</p>
                    </article>
                  ))}
                </div>
              </div>

              <article className="rounded-[32px] border border-black/10 bg-white/90 p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.32em] text-accent">Team Picture</p>
                <h2 className="mt-3 font-display text-2xl">Landing photo slot</h2>
                <p className="mt-2 text-sm text-muted">
                  Reserved area for the official iGEM IIT Bombay team photo on the home landing section.
                </p>
                <div className="mt-5 grid h-72 place-items-center rounded-2xl border border-dashed border-black/20 bg-[#f3f7fa] text-xs uppercase tracking-[0.22em] text-muted">
                  Team Photo Placeholder
                </div>
              </article>
            </section>

            <section className="py-10 md:py-12">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.38em] text-accent">Subteams</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">Short overview on home</h2>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subteamConfig.map((team) => (
                  <article key={`home-short-${team.key}`} className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-soft">
                    <h3 className="font-display text-2xl">{team.label}</h3>
                    <p className="mt-2 text-sm text-muted">{team.short}</p>
                    <button
                      type="button"
                      onClick={() => navigate(team.key)}
                      className="mt-4 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink transition-shadow hover:shadow-[0_12px_24px_rgba(31,122,140,0.24)]"
                    >
                      View Details
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section ref={timelineRef} className="timeline-wrap py-10 md:py-14">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.38em] text-accent">Timeline</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">Project calendar with animated milestones</h2>
              </div>
              <div className="relative mt-10">
                <div className="tl-line absolute bottom-0 left-4 top-0 w-[2px] bg-black/25 md:left-1/2 md:-translate-x-1/2" />
                <div className="space-y-7">
                  {timelineEvents.map((event, index) => (
                    <article key={`${event.year}-${event.title}`} className="relative grid gap-4 md:grid-cols-2 md:gap-10">
                      <div className={`${index % 2 === 0 ? 'md:pr-14' : 'md:col-start-2 md:pl-14'}`}>
                        <div className="tl-card rounded-2xl border border-black/10 bg-white/92 p-5 shadow-soft">
                          <p className="text-sm font-semibold text-accent">{event.subtitle}</p>
                          <h3 className="mt-1 font-display text-2xl">{event.title}</h3>
                          <p className="mt-3 text-sm text-muted">{event.text}</p>
                        </div>
                      </div>
                      <div className="tl-dot absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#a81919] md:left-1/2" />
                      <p className="ml-10 text-sm font-semibold text-ink md:absolute md:left-1/2 md:top-6 md:ml-0 md:-translate-x-[calc(100%+2.8rem)]">
                        {event.year}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <TeamDetailPage team={activeTeam} onGoHome={() => navigate('home')} />
        )}
      </main>

      <footer className="mt-10 border-t border-black/10 bg-[#e7f1f6] py-8">
        <div className="mx-auto w-[92vw] px-4 md:w-[85vw] md:px-6 lg:w-[70vw]">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={iitbLogo} alt="iGEM IIT Bombay logo" className="h-10 w-10 rounded-xl object-contain mix-blend-multiply" />
                <div>
                  <p className="font-semibold text-ink">iGEM IIT Bombay</p>
                  <p className="text-xs text-muted">Synthetic Biology Team</p>
                </div>
              </div>
              <p className="text-sm text-muted">Student-led team representing IIT Bombay at the annual iGEM competition.</p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Subteams</p>
              {subteamConfig.map((team) => (
                <button
                  key={`footer-${team.key}`}
                  type="button"
                  onClick={() => navigate(team.key)}
                  className="block rounded-md px-1 py-0.5 text-left transition-shadow hover:shadow-[0_8px_18px_rgba(31,122,140,0.22)]"
                >
                  {team.label}
                </button>
              ))}
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Contact</p>
              <p>IIT Bombay, Mumbai</p>
              <a href="mailto:igem@iitb.ac.in" className="block w-fit underline-offset-4 hover:underline">
                igem@iitb.ac.in
              </a>
              <a href="https://2025.igem.wiki/iit-bombay/" target="_blank" rel="noreferrer" className="block w-fit underline-offset-4 hover:underline">
                2025 iGEM Wiki
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <p>© 2026 iGEM IIT Bombay. All rights reserved.</p>
            <button type="button" onClick={() => navigate('home')} className="transition-shadow hover:shadow-[0_8px_18px_rgba(31,122,140,0.22)]">
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
