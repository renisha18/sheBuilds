// Small reusable SVG shapes that give the frame its playful, hand-placed edges.
// Kept intentionally simple and few in number — see brief section 13 & 17.
//
// All of these are purely decorative, so every root <svg> is aria-hidden and
// non-focusable: they carry no meaning for assistive technology.
//
// CodeBubble, IdeaBubble, AsteriskIcon and DashedArc are no longer rendered —
// the current hero-woman.png paints those motifs into the artwork itself, so
// overlaying them drew each one twice. They are kept here (Rollup tree-shakes
// unused exports out of the build) in case the artwork is ever swapped back to
// a plain cut-out of the subject.

export function FigmaChip({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="56" height="56" rx="14" fill="var(--purple)" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="30" cy="18" r="7" fill="var(--coral)" />
      <circle cx="30" cy="32" r="7" fill="var(--teal)" />
      <path d="M23 32a7 7 0 1 1 0 14h-0.5A6.5 6.5 0 0 1 16 39.5 6.5 6.5 0 0 1 22.5 33H23z" fill="var(--pink)" />
    </svg>
  );
}

export function NotchShape({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path
        d="M50 4a46 46 0 1 1 0 92 46 46 0 0 1 0-92zm0 26a20 20 0 1 0 0 40 20 20 0 0 0 0-40z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="2.5"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function DribbbleShape({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="46" fill="var(--pink)" stroke="var(--ink)" strokeWidth="2.5" />
      <path
        d="M20 34c14 8 34 10 52 4M14 58c18 -3 40 0 56 14M46 8c8 16 12 40 4 84"
        stroke="var(--ink)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path
        d="M10 0c.6 4.6 1.4 5.4 6 6-4.6.6-5.4 1.4-6 6-.6-4.6-1.4-5.4-6-6 4.6-.6 5.4-1.4 6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

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

export function IdeaBubble({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"
          stroke="var(--ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function AsteriskIcon({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9"
          stroke="var(--cream-text)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

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
    </svg>
  );
}
