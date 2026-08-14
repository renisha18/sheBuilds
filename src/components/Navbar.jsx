const NAV_LINKS = ['About', 'Phases & Dates', 'Partners'];

export default function Navbar() {
  const noop = () => {};

  return (
    <nav className="navbar" aria-label="Primary">
      <img
        className="navbar__logo"
        src="/shebuilds-logo.png"
        alt="SheBuilds Chennai"
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
        className="navbar__mobile-toggle"
        onClick={noop}
        aria-label="Open menu"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path
            d="M1 1h16M1 7h16M1 13h16"
            stroke="var(--ink)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </nav>
  );
}
