import type { FrameTheme } from "@dust/frame";

// aiBL kit palette: navy surface, turquoise accent, amber reserved for "waiting".
export const theme = {
  "--background": "#081b2b",
  "--foreground": "#f3f6f7",
  "--card": "#0d2538",
  "--card-foreground": "#f3f6f7",
  "--primary": "#18dccc",
  "--primary-foreground": "#081b2b",
  "--muted": "#11304a",
  "--muted-foreground": "#9db1be",
  "--border": "#1b4058",
  "--radius": "0.375rem",
  "--font-sans": "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} satisfies FrameTheme;
