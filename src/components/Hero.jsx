import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const TAGLINES = [
  'CSE Innovator — AUCE',
  'Front‑End Architect',
  'Advanced JavaScript Enthusiast',
  'Turning Complex Engineering into Elegant UX',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const controllerRef = useRef({ i: 0, deleting: false });

  useEffect(() => {
    const current = TAGLINES[taglineIndex % TAGLINES.length];
    const timer = setTimeout(() => {
      const c = controllerRef.current;
      if (!c.deleting) {
        setDisplayText(current.slice(0, c.i + 1));
        c.i += 1;
        if (c.i === current.length) {
          c.deleting = true;
          setTyping(false);
        }
      } else {
        setDisplayText(current.slice(0, c.i - 1));
        c.i -= 1;
        if (c.i === 0) {
          c.deleting = false;
          setTyping(true);
          setTaglineIndex((t) => (t + 1) % TAGLINES.length);
        }
      }
    }, typing ? 70 : 40);
    return () => clearTimeout(timer);
  }, [displayText, taglineIndex, typing]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 shadow">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 animate-pulse" />
          The Engineered Flow
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Penke Satya Sai Hruthikesh
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-white/90">
          <span className="align-middle">{displayText}</span>
          <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-white/90 animate-pulse" />
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Contact Me
          </a>
        </div>

        {/* Skills chips */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {['HTML', 'CSS', 'Advanced JS', 'C (Intermediate)', 'Java (Intermediate)', 'Python (Intermediate)'].map((skill) => (
            <span
              key={skill}
              className="select-none rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 shadow-sm backdrop-blur hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
