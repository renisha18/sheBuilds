// Small reusable SVG shapes that give the frame its playful, hand-placed edges.
//
// Every ornament is a flat palette fill behind a 2.5 ink outline, drawn on a
// SQUARE viewBox, because the stylesheet sizes these by width alone and offsets
// them with a hard ink drop-shadow. Keeping the viewBox square and the stroke
// weight consistent means each motif drops into its existing slot with the same
// footprint and the same silhouette weight as the shape it replaces.
//
// The motifs are deliberately developer-culture rather than generic: a VS Code
// mark, a code snippet, a terminal window, a git branch, a sigma and a network
// graph. They are scattered details, not a feature row.
//
// All of these are purely decorative, so every root <svg> is aria-hidden and
// non-focusable: they carry no meaning for assistive technology.
//
// CodeBubble, IdeaBubble, AsteriskIcon and DashedArc are no longer rendered —
// the current hero-woman.png paints those motifs into the artwork itself, so
// overlaying them drew each one twice. They are kept here (Rollup tree-shakes
// unused exports out of the build) in case the artwork is ever swapped back to
// a plain cut-out of the subject.

// SVG text does not inherit the page font stack, so the code-ish marks name a
// monospace stack explicitly. No new dependency, no webfont.
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

// The top-centre chip, now a VS Code mark. The chip itself — 56px rounded
// square, purple, 2.5 ink outline — is unchanged; only its contents are new.
export function FigmaChip({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="56" height="56" rx="14" fill="var(--purple)" stroke="var(--ink)" strokeWidth="2.5" />
      {/* VS Code ribbon. The inner triangle is a hole (evenodd) so the purple
          chip shows through it instead of needing a second fill. */}
      <g transform="translate(15.5 15.5) scale(1.208)">
        <path
          d="M23.15 2.587 18.21.21a1.5 1.5 0 0 0-1.713.29L7.038 9.13 2.914 6.007a1 1 0 0 0-1.28.057L.327 7.261a1 1 0 0 0-.001 1.478L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479l1.308 1.196a1 1 0 0 0 1.279.057l4.124-3.123 9.459 8.628a1.5 1.5 0 0 0 1.712.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM17.5 6.917 10.44 12l7.06 5.083z"
          fill="var(--cream-text)"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

/* ---------- NotchShape variants ----------
   The hero renders <NotchShape> four times, once per accent colour, at four
   fixed slots around the frame. Colour is the only thing that distinguishes the
   slots, so it also selects the motif — that way the four ornaments read as a
   curated set instead of one shape repeated in four colours.

   pink   → a two-line code snippet
   teal   → a terminal window
   yellow → a git branch
   purple → a sigma
   ---------------------------------------- */

// Shared plate: the rounded square that carries three of the four motifs.
function Plate({ color }) {
  return <rect x="8" y="8" width="84" height="84" rx="22" fill={color} stroke="var(--ink)" strokeWidth="2.5" />;
}

function CodeSnippetNotch({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <Plate color={color} />
      <text x="50" y="52" fill="var(--ink)" fontFamily={MONO} fontSize="27" fontWeight="700" textAnchor="middle">
        {'</>'}
      </text>
      <text x="50" y="76" fill="var(--ink)" fontFamily={MONO} fontSize="19" fontWeight="700" textAnchor="middle">
        {'{ }'}
      </text>
    </svg>
  );
}

function TerminalNotch({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect x="6" y="16" width="88" height="70" rx="16" fill={color} stroke="var(--ink)" strokeWidth="2.5" />
      {/* window chrome */}
      <circle cx="19" cy="27" r="3.2" fill="var(--ink)" />
      <circle cx="30" cy="27" r="3.2" fill="var(--ink)" />
      <circle cx="41" cy="27" r="3.2" fill="var(--ink)" />
      <path d="M6 38h88" stroke="var(--ink)" strokeWidth="2.2" />
      {/* >_ prompt */}
      <path d="M20 47l6.5 6.5L20 60" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="32" y="56" width="15" height="4.2" rx="2.1" fill="var(--ink)" />
      {/* binary tail */}
      <text x="20" y="79" fill="var(--ink)" fontFamily={MONO} fontSize="14" fontWeight="700">
        01
      </text>
    </svg>
  );
}

function GitBranchNotch({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <Plate color={color} />
      <g stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M35 33v34" />
        <path d="M35 57c0-13 31-10 31-23" />
      </g>
      <g fill="var(--ink)">
        <circle cx="35" cy="26" r="7" />
        <circle cx="35" cy="74" r="7" />
        <circle cx="66" cy="28" r="7" />
      </g>
    </svg>
  );
}

function SigmaNotch({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <Plate color={color} />
      <path
        d="M65 30H36l17 20-17 20h29"
        stroke="var(--cream-text)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const NOTCH_VARIANTS = {
  'var(--pink)': CodeSnippetNotch,
  'var(--teal)': TerminalNotch,
  'var(--yellow)': GitBranchNotch,
  'var(--purple)': SigmaNotch,
};

export function NotchShape({ className, color }) {
  const Variant = NOTCH_VARIANTS[color] || CodeSnippetNotch;
  return <Variant className={className} color={color} />;
}

// The large bottom-left disc, now a network/circuit graph. The circle, its pink
// fill and its 2.5 ink outline are unchanged — only the marks inside are new.
export function DribbbleShape({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="46" fill="var(--pink)" stroke="var(--ink)" strokeWidth="2.5" />
      {/* traces first, so the nodes sit on top of them */}
      <g stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M32 36 66 30" />
        <path d="M32 36 50 54" />
        <path d="M66 30 50 54" />
        <path d="M50 54 70 68" />
        <path d="M32 36 30 66" />
        <path d="M30 66 50 54" />
      </g>
      <g fill="var(--bg-frame)" stroke="var(--ink)" strokeWidth="2.4">
        <circle cx="32" cy="36" r="5" />
        <circle cx="66" cy="30" r="5" />
        <circle cx="50" cy="54" r="6" />
        <circle cx="70" cy="68" r="4.5" />
        <circle cx="30" cy="66" r="4.5" />
      </g>
    </svg>
  );
}

// The tiny inline mark used in the eyebrow pill and the heading flourish, now a
// developer cursor: a shell chevron plus a caret block. It stays on a 20x20
// square viewBox and stays currentColor, so both callers keep their own colour.
export function SparkIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M3 5.5 7.5 10 3 14.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="12.2" width="7" height="2.7" rx="1.35" fill="currentColor" />
    </svg>
  );
}

/* ---------- Spare motifs (not currently rendered) ----------
   Kept so the set can be extended without redrawing anything. Export names are
   unchanged from the versions the hero used to render, so restoring the older
   hero markup still resolves. */

export function CodeBubble({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M9 6 4 12l5 6M15 6l5 6-5 6"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Arrow function mark.
export function IdeaBubble({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M3 12h11M11 7.5 15.5 12 11 16.5M18.5 8.5v7"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// npm mark.
export function IdeaBubbleNpm({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <rect x="2" y="6" width="20" height="12" rx="2.5" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <path d="M6 18v-8h4v8M10 10h1.5M12.5 18v-8h5v8M15 10v8" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Blinking-caret text cursor.
export function AsteriskIcon({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M12 4v16M8.5 4h7M8.5 20h7"
          stroke="var(--cream-text)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Dashed circuit trace with a terminating node.
export function DashedArc({ className }) {
  return (
    <svg className={className} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path
        d="M6 60c0-30 24-54 54-54"
        stroke="var(--ink)"
        strokeWidth="1.6"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="6" r="3.2" fill="var(--bg-frame)" stroke="var(--ink)" strokeWidth="1.6" />
    </svg>
  );
}
