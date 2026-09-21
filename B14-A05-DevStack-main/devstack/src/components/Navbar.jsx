import { useState } from 'react';

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* DS Logo icon */}
            <div className="w-9 h-9 rounded-lg brand-gradient-bg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm tracking-tight">DS</span>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link === 'Home'
                    ? 'brand-gradient-text font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Sign In + Sign Up (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="signin-btn"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors px-2 py-1"
            >
              Sign In
            </button>
            <button
              id="signup-btn"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile: Sign In + Sign Up + Hamburger — controlled by CSS */}
          <div className="flex md:hidden items-center gap-2">
            {/* Logo center on mobile is handled by absolute positioning below */}
          </div>
        </div>
      </div>

      {/* ── Mobile Navbar ── */}
      <div className="md:hidden border-t border-gray-100">
        <div className="px-4 flex items-center justify-between h-14 relative">
          {/* Left: Hamburger */}
          <button
            id="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xs">DS</span>
            </div>
            <span className="text-base font-bold text-gray-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Right: Sign In + Sign Up */}
          <div className="flex items-center gap-1.5">
            <button className="text-xs font-semibold text-gray-600 px-2 py-1">Sign In</button>
            <button className="btn-primary text-xs px-3 py-2">Sign Up</button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
