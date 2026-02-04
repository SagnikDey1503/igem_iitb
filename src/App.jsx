import React, { useState } from 'react';

const stats = [
  { label: 'Silver Medal', value: 'iGEM 2025 — Paris' },
  { label: 'Gold Medal', value: 'iGEM 2024 — First Year' },
  { label: 'Global Scale', value: '400+ iGEM Teams' }
];

const focusPoints = [
  {
    title: '2025 Focus',
    text: 'Engineered protease therapy to disrupt biofilm infections in biomedical devices.'
  },
  {
    title: 'Faculty Mentors',
    text: 'Prof. Kiran Kondabagil (BSBE) and Prof. Saket Choudhary (KCDH).'
  },
  {
    title: 'Documentation',
    text: 'Official 2025 team wiki and institute coverage for full technical details.'
  }
];

const resourceLinks = [
  { label: '2025 iGEM Wiki', href: 'https://2025.igem.wiki/iit-bombay/' },
  { label: '2024 iGEM Wiki', href: 'https://2024.igem.wiki/iit-bombay/' },
  {
    label: 'IITB News (Silver Medal)',
    href: 'https://www.iitb.ac.in/breaking-news/iit-bombays-igem-team-secures-silver-medal-paris-competition'
  }
];

const achievements = [
  {
    year: '2025',
    title: 'Silver Medal — iGEM Competition, Paris',
    text: 'IIT Bombay’s team earned silver in the 2025 iGEM competition held in Paris, France.'
  },
  {
    year: '2024',
    title: 'Gold Medal — First Participation Year',
    text: 'The team won a gold medal at the iGEM Grand Jamboree in its first participation year.'
  },
  {
    year: '2024',
    title: 'Best Climate Crisis Project Nomination',
    text: 'Recognized with a nomination for Best Climate Crisis Project at the Grand Jamboree.'
  }
];

const pipeline = [
  {
    title: 'Problem discovery',
    text: 'Clinical interviews and literature review identify the highest-impact biofilm infection use cases.'
  },
  {
    title: 'Circuit design',
    text: 'Protease selection, safety checks, and modular genetic circuit planning.'
  },
  {
    title: 'Prototype build',
    text: 'Wet-lab validation with measurable biofilm disruption endpoints.'
  },
  {
    title: 'Modeling + analysis',
    text: 'Dry lab modeling to optimize kinetics and stability.'
  },
  {
    title: 'Human practices',
    text: 'Ethics review and stakeholder feedback for responsible deployment.'
  }
];

const press = [
  {
    tag: 'IIT Bombay News',
    title: 'Silver Medal at iGEM 2025 (Paris)',
    text: 'Official institute announcement on the 2025 silver medal win.',
    href: 'https://www.iitb.ac.in/breaking-news/iit-bombays-igem-team-secures-silver-medal-paris-competition'
  },
  {
    tag: 'IITB Tech Council',
    title: 'Gold Medal + Climate Crisis Nomination (2024)',
    text: 'Achievements listing for iGEM IIT Bombay at Grand Jamboree 2024.',
    href: 'https://tech-iitb.org/achievements/'
  },
  {
    tag: 'IITB Tech Council',
    title: 'Official Team Listing',
    text: 'Team description, official email, and iGEM wiki link.',
    href: 'https://tech-iitb.org/bodies/iGEM%20IIT%20Bombay/'
  }
];

const gallery = [
  {
    src: 'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2025-11/IIT%20Bombay%27s%20iGEM%20Team%20secures%20Silver%20Medal%20at%20Paris%20Competition_1.jpg?itok=j9do2yH2',
    alt: 'Team iGEM IIT Bombay at the Paris competition',
    caption: 'Official IIT Bombay team photo from iGEM 2025 coverage.'
  },
  {
    src: 'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2025-11/IIT%20Bombay%27s%20iGEM%20Team%20secures%20Silver%20Medal%20at%20Paris%20Competition_2.jpg?itok=J8c806Sa',
    alt: 'Team iGEM IIT Bombay celebrating at iGEM 2025',
    caption: 'IIT Bombay news coverage from the 2025 silver medal win.'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Bombay_Main_Building.jpg',
    alt: 'IIT Bombay main building',
    caption: 'IIT Bombay main building (Wikimedia Commons).'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/IITBConvocationHall.JPG',
    alt: 'IIT Bombay Convocation Hall',
    caption: 'IIT Bombay Convocation Hall (Wikimedia Commons).'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/IITCampusPano.JPG',
    alt: 'Panoramic view of IIT Bombay campus',
    caption: 'IIT Bombay campus panorama (Wikimedia Commons).'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Powai_Lake_H14_IIT_Bombay.jpg',
    alt: 'Powai Lake near IIT Bombay hostels',
    caption: 'Powai Lake near IIT Bombay hostels (Wikimedia Commons).'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Powai_lake_iit_bombay.jpg',
    alt: 'Powai Lake view at IIT Bombay campus',
    caption: 'Powai Lake, IIT Bombay campus (Wikimedia Commons).'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Biology_lab.jpg',
    alt: 'Biology laboratory work scene',
    caption: 'Biology lab scene (Wikimedia Commons).'
  }
];

const wikiMap = ['Project', 'Safety', 'Human Practices', 'Results', 'Contributions', 'Team'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true" />

      <header className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-full sm:pt-3 sm:w-[92vw] sm:px-4 md:w-[85vw] lg:w-[70vw] xl:min-w-[1100px] xl:max-w-[1400px]">
          <div className="flex w-full items-center justify-center rounded-none border border-transparent bg-white px-4 py-3 pr-4 shadow-none backdrop-blur-sm sm:rounded-full sm:border-black/10 sm:bg-white/60 sm:px-6 sm:py-3 sm:pr-6 sm:shadow-lg sm:backdrop-blur-sm">
            <div className="flex w-full items-center gap-6">
              <div className="flex shrink-0 items-center gap-3">
                <div className="grid h-20 w-20 place-items-center rounded-full border border-black/10 bg-white/80 text-xs font-semibold text-muted sm:h-16 sm:w-16">
                  iGEM
                </div>
                <div className="leading-tight whitespace-nowrap">
                  <p className="text-xs uppercase tracking-[0.35em] text-accent">iGEM</p>
                  <p className="text-base font-semibold text-ink sm:text-lg">IIT BOMBAY</p>
                </div>
              </div>
              <nav className="hidden min-w-0 flex-1 items-center justify-end gap-3 pl-4 text-xs text-muted xl:flex xl:text-sm 2xl:gap-4">
                {['About', 'Project', 'Achievements', 'Pipeline', 'Subteams', 'Gallery', 'Wiki', 'Press', 'Contact'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-2 py-1 transition hover:text-ink hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </a>
                  )
                )}
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
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/95 px-4 py-4 text-sm text-muted shadow-lg backdrop-blur-md">
              {['About', 'Project', 'Achievements', 'Pipeline', 'Subteams', 'Gallery', 'Wiki', 'Press', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-xl border border-black/10 bg-white/95 px-4 py-3 text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92vw] px-4 pt-20 md:w-[85vw] md:px-6 lg:w-[70vw] lg:pt-24 md:pt-24 lg:pt-28">
        <section className="grid items-center gap-12 py-10 md:py-16 lg:grid-cols-[1.1fr_0.9fr]" id="about">
          <div className="rounded-[32px] border border-black/10 bg-white/85 p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Engineering Biology • IIT Bombay</p>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Student-led synthetic biology, built for real-world impact.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              iGEM IIT Bombay is a student-led synthetic biology team representing IIT Bombay at the annual iGEM
              competition. iGEM is a global synthetic biology event that brings together 400+ teams worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                href="#project"
              >
                Explore 2025 Project
              </a>
              <a
                className="rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-lg"
                href="https://2025.igem.wiki/iit-bombay/"
                target="_blank"
                rel="noreferrer"
              >
                Visit 2025 Wiki
              </a>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <p className="text-base font-semibold text-ink">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-black/10 bg-white/90 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Snapshot</p>
            <h3 className="mt-4 font-display text-2xl">iGEM IIT Bombay at a glance</h3>
            <p className="mt-3 text-sm text-muted">
              A structured snapshot of the 2025 cycle, with quick access to official documentation and announcements.
            </p>
            <div className="mt-5 grid gap-3">
              {focusPoints.map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">{item.title}</p>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14" id="project">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">2025 Project Spotlight</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Engineered protease therapy for biofilm infections.</h2>
              <p className="mt-5 text-muted">
                The 2025 project targets biofilm-associated infections through an engineered protease solution designed to
                degrade tough biofilms and eliminate dormant bacteria, including infections linked to biomedical devices
                like catheters, implants, and prosthetic joints.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Problem',
                    text: 'Biofilms protect bacteria from antibiotics, causing persistent infections.'
                  },
                  {
                    title: 'Approach',
                    text: 'A safe, targeted protease system aimed at disrupting biofilm matrices.'
                  },
                  {
                    title: 'Impact',
                    text: 'A sustainable therapeutic option for difficult-to-treat infections.'
                  },
                  {
                    title: 'Safety',
                    text: 'Biosafety-first implementation and clear clinical deployment pathways.'
                  }
                ].map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h3 className="font-display text-lg">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Project Scope</p>
              <h3 className="mt-4 font-display text-2xl">Biofilm infections in clinical settings</h3>
              <p className="mt-3 text-sm text-muted">
                The 2025 biofilm infection project was developed under the guidance of Prof. Kiran Kondabagil (BSBE) and
                Prof. Saket Choudhary (KCDH).
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Biomedical device infections: catheters, breast implants, prosthetic joints.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#3aa6b9]" />
                  <span>Clinical contexts: cystic fibrosis and contact lens infections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent2" />
                  <span>Goal: degrade biofilm matrix and remove dormant bacteria safely.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14" id="achievements">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Achievements</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Recognized at the iGEM Grand Jamboree.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="inline-flex rounded-full bg-[rgba(31,122,140,0.12)] px-3 py-1 text-xs font-semibold text-accent">
                  {item.year}
                </span>
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14" id="pipeline">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Pipeline</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">From problem to prototype.</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.35fr_1fr]">
            <div className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-sm text-muted">
                A structured roadmap that blends experimentation, modeling, and human practices.
              </p>
              <div className="mt-6 h-20 rounded-xl bg-gradient-to-br from-[rgba(31,122,140,0.12)] to-[rgba(226,160,83,0.08)]" />
            </div>
            <ol className="space-y-5">
              {pipeline.map((step, idx) => (
                <li
                  key={step.title}
                  className="grid gap-3 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[44px_1fr]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(31,122,140,0.12)] text-sm font-semibold text-accent">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{step.title}</h3>
                    <p className="text-sm text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-10 md:py-14" id="subteams">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Subteams</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Three pillars, one mission.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Wet Lab',
                text: 'Experimental design, cloning, validation, and biosafety protocols.'
              },
              {
                title: 'Dry Lab',
                text: 'Modeling, computational analysis, and data visualization.'
              },
              {
                title: 'Human Practices',
                text: 'Ethics, policy review, stakeholder interviews, and outreach.'
              }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14" id="gallery">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Gallery</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Team + campus highlights.</h2>
            <p className="mt-3 text-muted">Official IIT Bombay coverage plus campus context.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <figure
                key={photo.src}
                className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-56 w-full items-center justify-center rounded-xl border border-dashed border-black/15 bg-white/70 text-xs uppercase tracking-[0.25em] text-muted">
                  Image Placeholder
                </div>
                <figcaption className="mt-3 text-xs text-muted">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14" id="wiki">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">iGEM Wiki</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Our full wiki is the source of record.</h2>
              <p className="mt-4 text-muted">
                The iGEM wiki hosts full technical details, experiments, results, and documentation for the team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {wikiMap.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">2025 Wiki</p>
                <h3 className="mt-4 font-display text-xl">Current season documentation</h3>
                <p className="mt-3 text-sm text-muted">
                  Full protocols, results, and team documentation for the 2025 season.
                </p>
                <a
                  className="mt-6 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  href="https://2025.igem.wiki/iit-bombay/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open 2025 Wiki
                </a>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">2024 Wiki</p>
                <h3 className="mt-4 font-display text-xl">Previous season archive</h3>
                <p className="mt-3 text-sm text-muted">
                  Review the 2024 project, human practices, and contributions.
                </p>
                <a
                  className="mt-6 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  href="https://2024.igem.wiki/iit-bombay/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open 2024 Wiki
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14" id="press">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Press & Recognition</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Featured by IIT Bombay and IITB Tech Council.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {press.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-accent">{item.tag}</span>
                <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14" id="contact">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Contact</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Let’s build the future of biology together.</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-black/10 bg-white/80 text-[10px] font-semibold text-muted">
                  iGEM
                </div>
                <div>
                  <p className="font-semibold">iGEM IIT Bombay</p>
                  <p className="text-sm text-muted">Tech Team · IIT Bombay</p>
                </div>
              </div>
              <div className="mt-5 space-y-2 text-sm text-muted">
                <p>IIT Bombay, Mumbai, Maharashtra</p>
                <p>Email: igem@iitb.ac.in</p>
                <p>iGEM Wiki: 2024.igem.wiki/iit-bombay</p>
              </div>
            </div>
            <form className="grid gap-4 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              <label className="text-sm text-muted">
                Name
                <input
                  className="mt-2 w-full rounded-xl border-black/10 bg-white/80 text-ink placeholder:text-muted"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm text-muted">
                Email
                <input
                  className="mt-2 w-full rounded-xl border-black/10 bg-white/80 text-ink placeholder:text-muted"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm text-muted">
                Message
                <textarea
                  className="mt-2 w-full rounded-xl border-black/10 bg-white/80 text-ink placeholder:text-muted"
                  rows="4"
                  name="message"
                  placeholder="Tell us about your idea"
                />
              </label>
              <button className="rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#e7f1f6] py-10">
        <div className="mx-auto w-[92vw] px-4 md:w-[85vw] md:px-6 lg:w-[70vw]">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white/80 text-[10px] font-semibold text-muted">
                  iGEM
                </div>
                <div>
                  <p className="font-semibold text-ink">iGEM IIT Bombay</p>
                  <p className="text-xs text-muted">Synthetic Biology Team</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                Student-led team representing IIT Bombay at the annual iGEM competition.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Quick Links</p>
              <a href="#project">Project</a>
              <a href="#achievements">Achievements</a>
              <a href="#pipeline">Pipeline</a>
              <a href="#wiki">Wiki</a>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Resources</p>
              <a href="#press">Press</a>
              <a href="#gallery">Gallery</a>
              <a href="https://2024.igem.wiki/iit-bombay/" target="_blank" rel="noreferrer">
                iGEM Wiki
              </a>
              <a href="mailto:igem@iitb.ac.in">Email Us</a>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Contact</p>
              <p>IIT Bombay, Mumbai</p>
              <p>igem@iitb.ac.in</p>
              <p>2024.igem.wiki/iit-bombay</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <p>© 2026 iGEM IIT Bombay. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#about">Back to top</a>
              <a href="mailto:igem@iitb.ac.in">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
