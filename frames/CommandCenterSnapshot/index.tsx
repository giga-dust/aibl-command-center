import { FrameRoot } from "@dust/frame";
import { useFile } from "@dust/react-hooks";
import { AlertCircle, Clock, Compass, ListOrdered, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { theme } from "./theme";

type Brief = {
  generatedAt?: string;
  owner?: string;
  headline?: string;
  prioritize?: { title: string; when?: string; why?: string; source?: string }[];
  personalize?: { who: string; account?: string; whatMatters?: string; source?: string }[];
  position?: { account: string; recommendation?: string; draft?: string; evidence?: string }[];
  waiting?: { item: string; owner?: string; since?: string }[];
  gaps?: string[];
};

const NAVY = "#081b2b";
const TURQUOISE = "#18dccc";
const MUTED = "#526170";

function Column({ icon, title, question, count, children }: { icon: React.ReactNode; title: string; question: string; count: number; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border bg-card p-5" style={{ borderColor: "#d9e2e8" }}>
      <header className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: TURQUOISE, color: NAVY }}>{icon}</span>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm" style={{ color: MUTED }}>{question}</p>
        </div>
        <span className="ml-auto rounded-full px-2 py-0.5 text-xs font-semibold" style={{ backgroundColor: "#e8f9f7", color: NAVY }}>{count}</span>
      </header>
      {count === 0 ? <p className="text-sm" style={{ color: MUTED }}>Nothing today.</p> : children}
    </section>
  );
}

export default function App() {
  const file = useFile("./brief.json");
  const [brief, setBrief] = useState<Brief | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;
    file.text().then((raw) => {
      try {
        const parsed = JSON.parse(raw) as Brief;
        if (!cancelled) setBrief(parsed);
      } catch (e) {
        if (!cancelled) setError("brief.json is not valid JSON.");
      }
    }).catch(() => { if (!cancelled) setError("Could not read brief.json."); });
    return () => { cancelled = true; };
  }, [file]);

  const prioritize = brief?.prioritize ?? [];
  const personalize = brief?.personalize ?? [];
  const position = brief?.position ?? [];
  const waiting = brief?.waiting ?? [];
  const gaps = brief?.gaps ?? [];
  const generated = brief?.generatedAt ? new Date(brief.generatedAt) : null;

  return (
    <FrameRoot theme={theme} className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: MUTED }}>Command Center · snapshot</p>
          <h1 className="text-3xl font-semibold">{brief?.owner ? `${brief.owner}'s brief` : "Daily brief"}</h1>
          {brief?.headline && <p className="text-lg">{brief.headline}</p>}
          <p className="text-sm" style={{ color: MUTED }}>
            {generated && !Number.isNaN(generated.getTime()) ? `Generated ${generated.toLocaleString()}. ` : ""}
            A snapshot of a brief the agent already produced. It does not refresh on its own.
          </p>
        </header>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "#d9e2e8", color: NAVY }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}
        {!brief && !error && <p className="text-sm" style={{ color: MUTED }}>Loading brief.json…</p>}

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Column icon={<ListOrdered size={18} />} title="Prioritize" question="What needs attention, and when?" count={prioritize.length}>
            <ol className="space-y-3">
              {prioritize.map((item, i) => (
                <li key={`${item.title}-${i}`} className="rounded-xl p-3" style={{ backgroundColor: i === 0 ? "#e8f9f7" : "transparent" }}>
                  <p className="font-semibold">{i + 1}. {item.title}</p>
                  {item.when && <p className="text-sm font-medium" style={{ color: "#1f9d92" }}>{item.when}</p>}
                  {item.why && <p className="text-sm">{item.why}</p>}
                  {item.source && <p className="text-xs" style={{ color: MUTED }}>Source: {item.source}</p>}
                </li>
              ))}
            </ol>
          </Column>
          <Column icon={<UserRound size={18} />} title="Personalize" question="What matters to this person now?" count={personalize.length}>
            <ul className="space-y-3">
              {personalize.map((item, i) => (
                <li key={`${item.who}-${i}`} className="space-y-1">
                  <p className="font-semibold">{item.who}{item.account ? ` · ${item.account}` : ""}</p>
                  {item.whatMatters && <p className="text-sm">{item.whatMatters}</p>}
                  {item.source && <p className="text-xs" style={{ color: MUTED }}>Source: {item.source}</p>}
                </li>
              ))}
            </ul>
          </Column>
          <Column icon={<Compass size={18} />} title="Position" question="What message or next step fits?" count={position.length}>
            <ul className="space-y-3">
              {position.map((item, i) => (
                <li key={`${item.account}-${i}`} className="space-y-1">
                  <p className="font-semibold">{item.account}</p>
                  {item.recommendation && <p className="text-sm">{item.recommendation}</p>}
                  {item.draft && (
                    <blockquote className="rounded-lg border-l-4 px-3 py-2 text-sm" style={{ borderColor: TURQUOISE, backgroundColor: "#f6fbfa" }}>
                      <span className="text-xs font-semibold uppercase" style={{ color: MUTED }}>Draft, not sent</span>
                      <p>{item.draft}</p>
                    </blockquote>
                  )}
                  {item.evidence && <p className="text-xs" style={{ color: MUTED }}>Evidence: {item.evidence}</p>}
                </li>
              ))}
            </ul>
          </Column>
        </div>

        <section className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="rounded-2xl border p-5" style={{ borderColor: "#d9e2e8" }}>
            <h2 className="mb-2 flex items-center gap-2 text-base font-semibold"><Clock size={16} /> Waiting on others</h2>
            {waiting.length === 0 ? <p className="text-sm" style={{ color: MUTED }}>Nothing waiting.</p> : (
              <ul className="space-y-1 text-sm">
                {waiting.map((w, i) => <li key={`${w.item}-${i}`}>{w.item}{w.owner ? ` · ${w.owner}` : ""}{w.since ? ` · ${w.since}` : ""}</li>)}
              </ul>
            )}
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "#d9e2e8" }}>
            <h2 className="mb-2 flex items-center gap-2 text-base font-semibold"><AlertCircle size={16} /> Sources and gaps</h2>
            {gaps.length === 0 ? <p className="text-sm" style={{ color: MUTED }}>No gaps reported.</p> : (
              <ul className="space-y-1 text-sm">{gaps.map((g, i) => <li key={`${g}-${i}`}>{g}</li>)}</ul>
            )}
          </div>
        </section>
      </main>
    </FrameRoot>
  );
}
