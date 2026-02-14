import React, { useEffect, useState } from 'react';
import iitbLogo from './assets/iitb.webp';
import igem2024Image from './assets/2024_igem.png';
import igem2025Image from './assets/2025_igem.png';
import groundPicImage from './assets/ground_pic.png';
import onePic from './assets/onePic.png';
import twoPic from './assets/twoPic.png';
import { Linkedin, Instagram, Facebook } from "lucide-react";


const stats = [
  { label: 'Silver Medal', value: 'iGEM 2025 — Paris' },
  { label: 'Gold Medal', value: 'iGEM 2024 — First Year' }
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
    year: '2024',
    title: 'Gold Medal — iGEM Grand Jamboree 2024',
    text: 'IIT Bombay secured a Gold Medal in its debut season and established a strong foundation in global synthetic biology competition.'
  },
  {
    year: '2024',
    title: 'Best Climate Crisis Project Nomination',
    text: 'The 2024 project was nominated in the Best Climate Crisis category, recognizing its sustainability relevance and innovation.'
  },
  {
    year: '2025',
    title: 'Silver Medal — iGEM 2025 (Paris)',
    text: 'The team earned a Silver Medal at iGEM 2025, competing among 400+ teams worldwide.'
  },
  {
    year: '2024',
    title: 'Best Poster Award — AIIM',
    text: 'At the All India iGEM Meet, the team’s Aureolyze presentation received the Best Poster Award.'
  },
  {
    year: '2024-2025',
    title: 'Institutional and Industry Recognition',
    text: 'The Aspire IITB Research Park Foundation highlighted the team’s achievements, with support from partners including Baker Hughes.'
  },
  {
    year: '2025',
    title: 'BioQuest Impact and Media Coverage',
    text: 'BioQuest reached 1,500+ students across Mumbai and was featured in Times of India for student outreach impact.'
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

const highlightGallery = [
  {
    src: igem2025Image,
    alt: 'iGEM IIT Bombay team photo at iGEM 2025',
    caption: 'Team iGEM IIT Bombay at iGEM Grand Jamboree 2025.'
  },
  {
    src: igem2024Image,
    alt: 'iGEM IIT Bombay team photo at iGEM 2024',
    caption: 'Team iGEM IIT Bombay at iGEM Grand Jamboree 2024.'
  },
  {
    src: groundPicImage,
    alt: 'Ground photo highlight',
    caption: 'Team ground photo highlight.'
  },
   {
    src: onePic,
    alt: '',
    caption: ''
  },
   {
    src: twoPic,
    alt: '',
    caption: 'hghg'
  }
];

const subsystemData = [
  {
    route: 'wet-lab',
    anchorId: 'subsystem-wet-lab',
    title: 'Wet Lab',
    text: 'Experimental design, cloning, validation, and biosafety protocols.',
    role: 'Experimental Biology',
    members: [
      { name: 'Aarav Mehta', role: 'Wet Lab Lead', linkedin: 'https://www.linkedin.com/' },
      { name: 'Riya Sharma', role: 'Molecular Biology', linkedin: 'https://www.linkedin.com/' },
      { name: 'Kabir Nair', role: 'Assay Development', linkedin: 'https://www.linkedin.com/' },
      { name: 'Sana Khan', role: 'Biosafety and Validation', linkedin: 'https://www.linkedin.com/' }
    ]
  },
  {
    route: 'dry-lab',
    anchorId: 'subsystem-dry-lab',
    title: 'Dry Lab',
    text: 'Modeling, computational analysis, and data visualization.',
    role: 'Modeling and Analytics',
    members: [
      { name: 'Neel Rao', role: 'Dry Lab Lead', linkedin: 'https://www.linkedin.com/' },
      { name: 'Ishita Das', role: 'Kinetic Modeling', linkedin: 'https://www.linkedin.com/' },
      { name: 'Arjun Patel', role: 'Data Analytics', linkedin: 'https://www.linkedin.com/' },
      { name: 'Maya Iyer', role: 'Simulation and Visuals', linkedin: 'https://www.linkedin.com/' }
    ]
  },
  {
    route: 'human-practices-design',
    anchorId: 'subsystem-human-practices-design',
    title: 'Human Practices & Design',
    text: 'Ethics, policy review, stakeholder interviews, outreach and design.',
    role: 'Human Practices and Design',
    members: [
      { name: 'Vani Kulkarni', role: 'IHP Lead', linkedin: 'https://www.linkedin.com/' },
      { name: 'Rahul Menon', role: 'Policy and Ethics', linkedin: 'https://www.linkedin.com/' },
      { name: 'Tanvi Gupta', role: 'Design Systems', linkedin: 'https://www.linkedin.com/' },
      { name: 'Pooja Sethi', role: 'Content and Outreach', linkedin: 'https://www.linkedin.com/' }
    ]
  },
  {
    route: 'web-development',
    anchorId: 'subsystem-web-development',
    title: 'Web Development',
    text: 'Building websites and interactive experiences to document and communicate the research.',
    role: 'Frontend and Wiki',
    members: [
      { name: 'Aditya Sen', role: 'Web Lead', linkedin: 'https://www.linkedin.com/' },
      { name: 'Kritika Jain', role: 'Frontend UI', linkedin: 'https://www.linkedin.com/' },
      { name: 'Manav Shah', role: 'Interactions', linkedin: 'https://www.linkedin.com/' },
      { name: 'Simran Kaur', role: 'QA and Accessibility', linkedin: 'https://www.linkedin.com/' }
    ]
  }
];

const teamGalleryPeople = [
  {
    name: 'Wet Lab Team',
    role: 'Experimental Biology',
    image: gallery[0].src,
    href: '#/wet-lab'
  },
  {
    name: 'Dry Lab Team',
    role: 'Modeling and Analytics',
    image: gallery[1].src,
    href: '#/dry-lab'
  },
  {
    name: 'IHP Team',
    role: 'Human Practices and Design',
    image: gallery[7].src,
    href: '#/human-practices-design'
  },
  {
    name: 'Web Development Team',
    role: 'Frontend and Wiki',
    image: gallery[4].src,
    href: '#/web-development'
  }
];

const getRouteFromHash = () => {
  const hash = window.location.hash.toLowerCase();
  if (!hash.startsWith('#/')) return 'home';
  const route = hash.slice(2);
  const validRoutes = [...subsystemData.map((item) => item.route)];
  return validRoutes.includes(route) ? route : 'home';
};

const wikiMap = ['Project', 'Safety', 'Human Practices', 'Results', 'Contributions', 'Team'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(getRouteFromHash());
  const selectedSubsystem = subsystemData.find((item) => item.route === route);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const navbarOffset = 120;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  };

  const handleNavbarClick = (event, href) => {
    if (!href.startsWith('#')) return;
    if (href.startsWith('#/')) return;
    event.preventDefault();
    const sectionId = href.slice(1);
    if (route !== 'home') {
      window.location.hash = '#';
      window.setTimeout(() => scrollToSection(sectionId), 60);
      return;
    }
    scrollToSection(sectionId);
  };

  return (
    <div className="relative overflow-x-hidden">
      <header className="fixed top-0 z-30 w-full">
       <div className="mx-auto w-full sm:pt-3 sm:w-[92vw] sm:px-4 md:w-[85vw] lg:w-[70vw] xl:min-w-[1050px]">

          <div className="flex w-full items-center justify-center rounded-none border border-black/10 bg-white/70 px-4 py-3 pr-4 shadow-sm backdrop-blur-md sm:rounded-full sm:border-black/10 sm:bg-white/20 sm:px-6 sm:py-3 sm:shadow-lg sm:backdrop-blur-sm">
            <div className="flex w-full items-center gap-4">
              <div className="flex shrink-0 items-center gap-3">
                <img
                  src={iitbLogo}
                  alt="iGEM IIT Bombay logo"
                  className="h-[84px] w-[84px] shrink-0 rounded-full object-contain mix-blend-multiply drop-shadow-[0_14px_22px_rgba(26,36,52,0.18)] sm:h-[72px] sm:w-[72px]"
                />
                <div className="leading-tight whitespace-nowrap">
                  <p className="text-xs uppercase tracking-[0.35em] text-accent">iGEM</p>
                  <p className="text-base font-semibold text-ink sm:text-lg">IIT BOMBAY</p>
                </div>
              </div>
              <nav className="ml-4 hidden min-w-0 flex-1 items-center justify-between text-xs text-muted xl:flex xl:text-sm">
                {[
                  { label: 'About', href: '#about' },
                   { label: 'Team', href: '#team-gallery' },
                  { label: 'Project', href: '#project' },
                  { label: 'Achievements', href: '#achievements' },
                  { label: 'Wiki', href: '#wiki' },
                  { label: 'Subsystems', href: '#subteams' },
                  { label: 'Events', href: '#events' },
                  { label: 'Gallery', href: '#gallery' }
                 
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-2 py-2 text-center transition hover:text-accent hover:underline hover:underline-offset-4 2xl:px-3"
                    onClick={(event) => handleNavbarClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
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
            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/75 px-4 py-4 text-center text-sm text-muted shadow-lg backdrop-blur-md">
              {[
                { label: 'About', href: '#about' },
                { label: 'Project', href: '#project' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Wiki', href: '#wiki' },
                { label: 'Subsystems', href: '#subteams' },
                { label: 'Events', href: '#events' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Team', href: '#team-gallery' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-black/10 bg-white/95 px-4 py-3 text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  onClick={(event) => {
                    setMenuOpen(false);
                    handleNavbarClick(event, item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92vw] px-4 pt-20 md:w-[85vw] md:px-6 lg:w-[70vw] lg:pt-24 md:pt-24 lg:pt-28">
        {selectedSubsystem ? (
          <section className="py-10 md:py-14" id={selectedSubsystem.anchorId}>
            <div className="max-w-3xl rounded-3xl border border-black/10 bg-white/90 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Subsystem Page</p>
              <h2 className="mt-4 font-display text-4xl">{selectedSubsystem.title}</h2>
              <p className="mt-3 text-lg text-muted">{selectedSubsystem.text}</p>
              <p className="mt-2 text-sm font-semibold text-ink">Focus: {selectedSubsystem.role}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#subteams"
                  className="inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-lg"
                >
                  Back to Subsystems
                </a>
                <a
                  href="#team-gallery"
                  className="inline-flex rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:shadow-lg"
                  onClick={(event) => handleNavbarClick(event, '#team-gallery')}
                >
                  Open Team Gallery
                </a>
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft md:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Team Members</p>
              <h3 className="mt-3 font-display text-2xl">Meet the {selectedSubsystem.title} members</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {selectedSubsystem.members.map((member) => (
                  <article
                    key={`${selectedSubsystem.route}-${member.name}`}
                    className="rounded-2xl border border-black/10 bg-white p-4 shadow-soft"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10 bg-gradient-to-br from-[#d7edf5] to-[#eef7fb]">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-4xl font-semibold text-accent/80">
                            {member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 font-display text-xl">{member.name}</p>
                    <p className="text-sm text-muted">{member.role}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-accent transition hover:underline hover:underline-offset-4"
                    >
                      View LinkedIn -&gt;
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
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

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">2025 Project</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Engineered Extracellular Serine Protease for disrupting biofilms, combating Antimicrobial resistance.</h2>
              <p className="mt-5 text-muted">
                The 2025 project targets biofilm-associated infections through an engineered protease solution designed to
                degrade tough biofilms and eliminate dormant bacteria, including infections linked to biomedical devices
                like catheters, implants, and prosthetic joints.
              </p>
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                {[
                  {
                    title: 'Problem',
                    text: 'Biofilms protect bacteria from antibiotics, causing persistent infections.'
                  },
                  {
                    title: 'Approach',
                    text: 'Site Directed Mutagenesis- 4 mutations to decrease ESP degradation activity towards essential proteins, thus effectively increasing specificity towards biofilms proteins.'
                  },
                  {
                    title: 'Impact',
                    text: 'A sustainable therapeutic option for difficult-to-treat infections.'
                  },
                  {
                    title: 'Result',
                    text: 'Silver Medal at iGEM Grand Jamboree 2025.'
                  }
                ].map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h3 className="font-display text-2xl">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          
        </section>
    <section className="py-10 md:py-14" id="wiki">
          <div className="grid gap-8 ">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent">iGEM Wiki</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Our full wiki is the source of record.</h2>
              <p className="mt-4 text-muted">
                The iGEM wiki hosts full technical details, experiments, results, and documentation for the team.
              </p>
            </div>
          <div className="w-full px-6  ">
  {/* Centered Container */}
  <div className="max-w-6xl mx-auto">
    
    <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
      
      {/* 2025 Card */}
      <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft ">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          2025 Wiki
        </p>

        <h3 className="mt-4 font-display text-2xl">
          Aureolyze
        </h3>

        <p className="mt-2 text-sm text-muted">
          Check out our research website.
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

      {/* 2024 Card */}
      <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft ">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          2024 Wiki
        </p>

        <h3 className="mt-4 font-display text-2xl">
          CalciCapture
        </h3>

        <p className="mt-2 text-sm text-muted">
          Check out our previous season's research website.
        </p>

        <a
          className="mt-6 inline-flex mx-auto rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          href="https://2024.igem.wiki/iit-bombay/"
          target="_blank"
          rel="noreferrer"
        >
          Open 2024 Wiki
        </a>
      </div>

    </div>
  </div>
</div>

          </div>
        </section>
        <section className="py-10 md:py-14" id="achievements">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Achievements</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Two years of learning, innovation, and impact.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item) => (
              <article
                key={item.title}
                id={item.anchorId}
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

        <section className="py-10 md:py-14" id="subteams">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Subsystems</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Four pillars, one mission.</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {subsystemData.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
                <a
                  href={`#/${item.route}`}
                  className="mt-4 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-soft transition hover:shadow-lg"
                >
                  Visit Page
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 md:py-14" id="events">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Events</p>
          </div>
          
          <div className="mt-4">
            <h3 className="font-display text-2xl mb-6">Upcoming Events</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'SYNBIOCON 2026',
                  text: 'A collaborative synthetic biology conference hosted by IIT Bombay and IIT Kharagpur.',
                  link: 'www.synbiocon2026.in',
                  linkText: 'Visit our website'
                },
              ].map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft "
                >
                  <h3 className="font-display text-xl">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted">{event.text}</p>
                  <a
                    className="mt-4 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {event.linkText}
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl mb-6">Past Events</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'BioQuest 2025',
                  text: 'Conducted large-scale synthetic biology outreach and engagement across schools and students in Mumbai.',
                  date: 'SUMMER 2025'
                },
              ].map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-soft"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{event.date}</span>
                  <h3 className="mt-3 font-display text-xl">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted">{event.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14" id="gallery">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Gallery</p>       
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <figure className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft ">
              <img
                src={highlightGallery[0].src}
                alt={highlightGallery[0].alt}
                className="h-72 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_18px_32px_rgba(31,122,140,0.28)] md:h-96"
              />
              <figcaption className="mt-3 text-sm text-muted">{highlightGallery[0].caption}</figcaption>
            </figure>
            <figure className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft ">
              <img
                src={highlightGallery[1].src}
                alt={highlightGallery[1].alt}
                className="h-72 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_18px_32px_rgba(31,122,140,0.28)] md:h-96"
              />
              <figcaption className="mt-3 text-sm text-muted">{highlightGallery[1].caption}</figcaption>
            </figure>
           
            <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft lg:col-span-2">
              <img
                src={highlightGallery[2].src}
                alt={highlightGallery[2].alt}
                className="h-120 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out "
              />
             
            </figure>
             {/* <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft ">
              <img
                src={highlightGallery[4].src}
                alt={highlightGallery[4].alt}
                className="h-62 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out "
              />
             
            </figure>
             <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft ">
              <img
                src={highlightGallery[3].src}
                alt={highlightGallery[3].alt}
                className="h-62 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out "
              />
             
            </figure>
             */}
            
          </div>
        
        </section>

        <section className="py-10 md:py-14" id="team-gallery">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Know The Team</p>
          
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamGalleryPeople.map((person) => (
              <a
                key={person.name}
                href={person.href}
                className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft transition hover:shadow-lg"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-52 w-full rounded-xl border border-black/10 object-cover transition duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_16px_30px_rgba(31,122,140,0.28)]"
                />
                <h3 className="mt-3 font-display text-xl">{person.name}</h3>
                <p className="text-sm text-muted">{person.role}</p>
              </a>
            ))}
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="border-t border-black/10 bg-[#e7f1f6] py-12">
        <div className="mx-auto w-[92vw] px-4 md:w-[85vw] md:px-6 lg:w-[70vw]">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={iitbLogo}
                  alt="iGEM IIT Bombay logo"
                  className="h-12 w-12 rounded-xl object-contain mix-blend-multiply"
                />
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
              <p className="font-semibold text-ink">Contact Us</p>
              <p>IIT Bombay, Mumbai, Maharashtra</p>
              <p>Email: <a href="mailto:igem.iitb@gmail.com" className="hover:text-accent">igem.iitb@gmail.com</a></p>
<div className="flex gap-4">
  <a href="https://in.linkedin.com/company/igem-iit-bombay" target="_blank" rel="noopener noreferrer">
    <Linkedin />
  </a>

  <a href="https://www.instagram.com/igem_iitb/" target="_blank" rel="noopener noreferrer">
    <Instagram />
  </a>

</div>



            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Quick Links</p>
              <a
                className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4"
                href="#project"
              >
                Project
              </a>
              <a
                className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4"
                href="#achievements"
              >
                Achievements
              </a>
              <a
                className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4"
                href="#wiki"
              >
                Wiki
              </a>
              <a
                className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4"
                href="#team-gallery"
                onClick={(event) => handleNavbarClick(event, '#team-gallery')}
              >
                Team Gallery
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <p>© 2026 iGEM IIT Bombay. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#about">Back to top</a>
              <a href="mailto:igem.iitb@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
