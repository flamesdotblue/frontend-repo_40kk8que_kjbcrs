import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Skill Sphere',
    description:
      'A performant, canvas‑powered 3D skill visualization built with vanilla ES6 and optimized rendering loops.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat Microservice',
    description:
      'A lightweight, event‑driven chat backend with WebSocket gateways and clean REST fallbacks.',
    stack: ['Node', 'Express', 'WebSocket'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Algo Visualizer',
    description:
      'Beautiful animations to explain classic algorithms with tight control over complexity and steps.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            A selection of work focused on performance, delightful UX, and clean engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-cyan-400/0 to-fuchsia-500/0 group-hover:via-cyan-400/5 transition-colors" />
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-black"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
