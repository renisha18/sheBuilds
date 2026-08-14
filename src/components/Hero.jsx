import Navbar from './Navbar.jsx';
import {
  FigmaChip,
  NotchShape,
  DribbbleShape,
  SparkIcon,
} from './DecorativeElements.jsx';

export default function Hero() {
  const noop = () => {};

  return (
    <header className="hero-frame">
      <FigmaChip className="corner-deco corner-deco--figma" />
      <NotchShape className="corner-deco corner-deco--pink-tl" color="var(--pink)" />
      <NotchShape className="corner-deco corner-deco--teal-tr" color="var(--teal)" />
      <NotchShape className="corner-deco corner-deco--yellow-br" color="var(--yellow)" />
      <NotchShape className="corner-deco corner-deco--purple-bl" color="var(--purple)" />
      <DribbbleShape className="corner-deco corner-deco--dribbble" />

      <Navbar />

      <div className="hero-body">
        <div className="hero-copy">
          <span className="eyebrow">
            <SparkIcon />
            WOMEN IN TECH. MINDS THAT BUILD.
          </span>

          <h1 className="hero-heading">
            <span className="hero-heading__primary">She Builds</span>
            <span className="hero-heading__secondary">Chennai</span>
          </h1>

          <div className="heading-flourish">
            <span className="heading-flourish__line" aria-hidden="true" />
            <SparkIcon style={{ color: 'var(--coral)' }} />
          </div>

          <p className="hero-description">
            Empowering women in tech, innovation, and entrepreneurship to
            learn, build, connect, and lead. Together, we build the future.
          </p>

          <div className="hero-actions">
            <button className="pill-btn pill-btn--primary" onClick={noop}>
              REGISTER
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M1 6h13M9 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="pill-btn pill-btn--secondary" onClick={noop}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19 20v-1.5a3.5 3.5 0 0 0-2.4-3.32M15.5 4.16a3.5 3.5 0 0 1 0 6.68"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* hero-woman.png already contains the pink hexagon, the code bubble,
            the bulb, the asterisk and the dashed arc. Overlaying CSS copies of
            those on top of it drew each ornament twice, so the artwork is now
            presented on its own. */}
        <div className="hero-visual">
          <div className="hero-visual__frame">
            <img
              src="/hero-woman.png"
              alt="A woman in technology smiling while working on her laptop, surrounded by code, idea and spark motifs"
              width="1536"
              height="1024"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
