import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export const NAVY = "#081b2b";
export const INK = "#f3f6f7";
export const MUTED = "#9db1be";
export const FAINT = "#5f7889";
export const TURQ = "#18dccc";
export const AMBER = "#f2b84b";
export const WELL = "#0d2538";

export type Viewport = { w: number; h: number };

// Measures the banner's own box (not the window): the Pod column caps width below the browser viewport.
export function useViewport(rootEl: HTMLElement | null, heightOverride?: number): Viewport {
  const [vp, setVp] = useState<Viewport>({
    w: typeof window === "undefined" ? 896 : window.innerWidth,
    h: heightOverride ?? (typeof window === "undefined" ? 280 : window.innerHeight),
  });
  useEffect(() => {
    if (!rootEl) return;
    const read = () => {
      const r = rootEl.getBoundingClientRect();
      setVp({ w: Math.round(r.width), h: heightOverride ?? Math.round(r.height) });
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(rootEl);
    return () => ro.disconnect();
  }, [rootEl, heightOverride]);
  return vp;
}

export type Tier = "phone" | "mid" | "wide";
export function tierOf(w: number): Tier {
  if (w < 560) return "phone";
  if (w < 860) return "mid";
  return "wide";
}

export const ellipsis: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
};

export const LOGO_TOKEN = "pk_BwsxwmCiTI-b4w27PQzL1g";
export function logoUrl(domain: string): string {
  return `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=64&format=png`;
}

const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb";
// Marks for the tools people connect most. Product icons come from Wikimedia Commons (960 px is an allowed thumbnail size), company marks from logo.dev.
export const KNOWN_LOGOS: Record<string, string> = {
  hubspot: logoUrl("hubspot.com"),
  salesforce: logoUrl("salesforce.com"),
  attio: logoUrl("attio.com"),
  pipedrive: logoUrl("pipedrive.com"),
  slack: logoUrl("slack.com"),
  notion: logoUrl("notion.so"),
  linear: logoUrl("linear.app"),
  jira: logoUrl("atlassian.com"),
  asana: logoUrl("asana.com"),
  monday: logoUrl("monday.com"),
  github: logoUrl("github.com"),
  snowflake: logoUrl("snowflake.com"),
  gmail: `${WM}/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png`,
  "google calendar": `${WM}/a/a5/Google_Calendar_icon_%282020%29.svg/960px-Google_Calendar_icon_%282020%29.svg.png`,
  outlook: `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  "outlook calendar": `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  teams: `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
  "microsoft teams": `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
};

// Bare brand mark, never boxed, never tinted. Falls back to the plain name if the image does not load.
export function SourceMark({ name, domain, logo, size = 16 }: { name: string; domain?: string; logo?: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const src = logo ?? (domain ? logoUrl(domain) : KNOWN_LOGOS[name.trim().toLowerCase()]);
  if (!src || failed) {
    return <span style={{ fontSize: 12, color: INK, ...ellipsis }}>{name}</span>;
  }
  return (
    <img
      src={src}
      alt={name}
      title={name}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: "contain", display: "block", flex: "none" }}
    />
  );
}

export function fmtDate(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
}

// The three kit glyphs, same geometry as the workshop deck: flow, direction, network.
export function KitGlyph({ kind, size = 18 }: { kind: "flow" | "direction" | "network"; size?: number }) {
  const s = size;
  if (kind === "flow") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M2 12h5l3-6 4 12 3-6h5" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "direction") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M4 20L20 4M20 4h-8M20 4v8" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <circle cx="12" cy="12" r="2.6" fill={TURQ} />
      <circle cx="4" cy="6" r="1.8" fill={TURQ} />
      <circle cx="20" cy="7" r="1.8" fill={TURQ} />
      <circle cx="6" cy="19" r="1.8" fill={TURQ} />
      <circle cx="19" cy="18" r="1.8" fill={TURQ} />
      <path d="M12 12L4 6M12 12l8-5M12 12l-6 7M12 12l7 6" stroke={TURQ} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Header row: keeps the top-right corner empty for the host's hide / expand / unpin controls.
export function Header({
  kind,
  title,
  meta,
  dense,
}: {
  kind: "flow" | "direction" | "network";
  title: string;
  meta: string;
  dense: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: dense ? 30 : 34,
        paddingRight: 112,
        minWidth: 0,
      }}
    >
      <KitGlyph kind={kind} size={dense ? 16 : 18} />
      <span style={{ fontSize: dense ? 14 : 15, fontWeight: 600, color: INK, letterSpacing: "-0.01em", whiteSpace: "nowrap", flex: "none" }}>{title}</span>
      <span style={{ fontSize: 12, color: MUTED, flex: "1 1 auto", ...ellipsis }}>{meta}</span>
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <div style={{ fontSize: 11.5, color: MUTED, fontWeight: 500, marginBottom: 6, ...ellipsis }}>{children}</div>;
}

export function StateNote({ kind, text }: { kind: "loading" | "error" | "empty"; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 2px", color: kind === "error" ? AMBER : MUTED, fontSize: 13 }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: kind === "error" ? AMBER : TURQ,
          opacity: kind === "loading" ? 0.6 : 1,
          flex: "none",
        }}
      />
      <span style={ellipsis}>{text}</span>
    </div>
  );
}

// ---------- Command Center ----------

export type CommandCenterData = {
  generatedAt?: string;
  owner?: string;
  label?: string;
  decide: { text: string; by?: string; stake?: string }[];
  waitingOn: { who: string; days: number }[];
  drafts?: number;
  sources: { name: string; domain?: string; logo?: string; status: "connected" | "needs authentication" | "not available" }[];
};

export function BannerView({
  data,
  height,
  status = "ok",
  message,
}: {
  data: CommandCenterData | null;
  height?: number;
  status?: "ok" | "loading" | "error" | "empty";
  message?: string;
}) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const vp = useViewport(rootEl, height);
  const tier = tierOf(vp.w);
  const dense = vp.h < 265;
  const roomy = vp.h >= 420;
  const pad = tier === "phone" ? 14 : roomy ? 28 : 20;

  const decide = (data?.decide ?? []).slice(0, 3);
  const waiting = (data?.waitingOn ?? []).slice(0, 4);
  const sources = (data?.sources ?? []).slice(0, 6);
  const drafts = data?.drafts ?? 0;
  const connected = sources.filter((s) => s.status === "connected").length;
  const meta =
    tier === "phone"
      ? [fmtDate(data?.generatedAt), data?.label ?? ""].filter(Boolean).join(" · ")
      : [fmtDate(data?.generatedAt), data?.owner ? `for ${data.owner}` : "", data?.label ?? ""].filter(Boolean).join(" · ");
  const twoLine = !dense && tier !== "phone";

  const columns =
    tier === "wide"
      ? "minmax(0, 0.95fr) minmax(0, 1.55fr) minmax(0, 0.9fr)"
      : tier === "mid"
        ? "minmax(0, 1fr) minmax(0, 1.6fr)"
        : "minmax(0, 1fr)";

  return (
    <div
      ref={setRootEl}
      style={{
        width: "100%",
        height: height ?? "100vh",
        overflow: "hidden",
        position: "relative",
        background: NAVY,
        color: INK,
        padding: `${dense ? 10 : 12}px ${pad}px ${dense ? 8 : 12}px`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: dense ? 6 : 10,
      }}
    >
      <Header kind="network" title="Command Center" meta={meta} dense={dense} />

      {status !== "ok" || !data ? (
        <StateNote
          kind={status === "ok" ? "empty" : status}
          text={message ?? (status === "loading" ? "Reading data.json" : "No brief yet. Run the daily-brief skill to fill this view.")}
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: columns, gap: tier === "phone" ? 8 : 22, flex: 1, minHeight: 0 }}>
          {tier !== "phone" && (
            <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <Label>To decide before 10:00</Label>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontSize: roomy ? 64 : dense ? 42 : 52, lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.03em", color: TURQ, fontVariantNumeric: "tabular-nums" }}>
                    {decide.length}
                  </span>
                  <span style={{ fontSize: 13, color: MUTED }}>{decide.length === 1 ? "decision" : "decisions"}</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 12, alignItems: "end" }}>
                <Figure n={waiting.length} label="waiting on others" tone={waiting.length > 0 ? AMBER : INK} />
                <Figure n={drafts} label={drafts === 1 ? "draft ready" : "drafts ready"} tone={INK} />
              </div>
            </div>
          )}

          <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <Label>Decide now</Label>
            {decide.length === 0 ? (
              <StateNote kind="empty" text="Nothing needs a decision this morning." />
            ) : (
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: twoLine ? 9 : 5 }}>
                {decide.map((d, i) => {
                  const detail = [d.stake, d.by ? `by ${d.by}` : ""].filter(Boolean).join(" · ");
                  return (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "22px minmax(0, 1fr) auto", alignItems: "baseline", gap: 8, minWidth: 0 }}>
                      <span style={{ fontSize: twoLine ? 17 : 15, fontWeight: 600, color: TURQ, fontVariantNumeric: "tabular-nums" }}>{i + 1}</span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: "block", fontSize: twoLine ? 14 : 13, lineHeight: 1.3, ...ellipsis }}>{d.text}</span>
                        {twoLine && <span style={{ display: "block", fontSize: 12, color: MUTED, marginTop: 1, ...ellipsis }}>{detail}</span>}
                      </span>
                      {!twoLine && <span style={{ fontSize: 11.5, color: MUTED, whiteSpace: "nowrap" }}>{detail}</span>}
                    </li>
                  );
                })}
              </ol>
            )}
            {tier === "mid" && (
              <div style={{ marginTop: "auto", paddingTop: 8, minWidth: 0 }}>
                <SourceRow sources={sources} connected={connected} />
              </div>
            )}
            {tier === "phone" && (
              <div style={{ marginTop: 10, minWidth: 0 }}>
                <Label>Waiting on others · {drafts} {drafts === 1 ? "draft" : "drafts"} ready · {connected}/{sources.length} sources</Label>
                {waiting.length === 0 ? (
                  <div style={{ fontSize: 12.5, color: MUTED }}>No one, today.</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {waiting.slice(0, 2).map((w, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 8, fontSize: 12.5, alignItems: "baseline" }}>
                        <span style={ellipsis}>{w.who}</span>
                        <span style={{ color: w.days >= 5 ? AMBER : MUTED, fontVariantNumeric: "tabular-nums" }}>{w.days}d</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {tier === "wide" && (
            <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ minWidth: 0 }}>
                <Label>Waiting on others</Label>
                {waiting.length === 0 ? (
                  <div style={{ fontSize: 12.5, color: MUTED }}>No one, today.</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {waiting.slice(0, dense ? 2 : 3).map((w, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 8, fontSize: 12.5, alignItems: "baseline" }}>
                        <span style={ellipsis}>{w.who}</span>
                        <span style={{ color: w.days >= 5 ? AMBER : MUTED, fontVariantNumeric: "tabular-nums" }}>{w.days}d</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ marginTop: "auto", minWidth: 0 }}>
                <SourceRow sources={sources} connected={connected} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SourceRow({ sources, connected }: { sources: CommandCenterData["sources"]; connected: number }) {
  return (
    <div style={{ minWidth: 0 }}>
      <Label>
        Sources · {connected} of {sources.length} connected
      </Label>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "nowrap", overflow: "hidden" }}>
        {sources.map((s, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, opacity: s.status === "connected" ? 1 : 0.45, flex: "none" }}>
            <SourceMark name={s.name} domain={s.domain} logo={s.logo} size={18} />
            <span
              aria-label={s.status}
              title={s.status}
              style={{ width: 6, height: 6, borderRadius: 999, background: s.status === "connected" ? TURQ : AMBER, display: "inline-block" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function Figure({ n, label, tone }: { n: number; label: string; tone: string }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1, color: tone, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{n}</div>
      <div style={{ fontSize: 11.5, color: MUTED, marginTop: 3, ...ellipsis }}>{label}</div>
    </div>
  );
}
