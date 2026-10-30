// Shared Tailwind class strings for buttons, so every button looks the same.
export const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 h-11 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
export const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-navy`;
export const btnGhost = `${btn} border border-input text-navy hover:bg-mint`;
export const iconLink =
  "inline-flex size-11 items-center justify-center rounded-xl border border-input bg-soft text-teal transition-colors hover:bg-mint hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
