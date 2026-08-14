import { useEffect, useState } from 'react';

const NAV_LINKS = ['About', 'Phases & Dates', 'Partners'];

export default function Navbar() {
  const noop = () => {};
  const [menuOpen, setMenuOpen] = useState(false);

  // Escape closes the mobile panel. Whether the panel is *shown* at all is
  // decided purely by the stylesheet, so there is no viewport detection in JS.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="navbar" aria-label="Primary">
      <img
        className="navbar__logo"
        src="/shebuilds-logo.png"
        alt="SheBuilds Chennai"
        width="500"
        height="500"
      />

      <div className="navbar__links">
        {NAV_LINKS.map((label) => (
          <button key={label} className="navbar__link" onClick={noop}>
            {label.toUpperCase()}
          </button>
        ))}
        <button className="navbar__register" onClick={noop}>
          REGISTER
        </button>
      </div>

      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="navbar-mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true" focusable="false">
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div
        className="navbar__mobile"
        id="navbar-mobile-menu"
        data-open={menuOpen}
      >
        <div className="navbar__mobile-list">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="navbar__register" onClick={noop}>
          REGISTER
        </button>
      </div>
    </nav>
  );
}
