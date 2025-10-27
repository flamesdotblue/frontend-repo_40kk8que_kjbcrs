import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/60 border-b border-white/20">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow">
            <Rocket size={18} />
          </span>
          <span>Hruthikesh.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {[
            { href: '#home', label: 'Home' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative inline-block px-1 transition-colors hover:text-gray-900"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
