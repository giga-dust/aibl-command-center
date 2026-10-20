import { useEffect, useState } from "react";
import { FrameRoot } from "@dust/frame";
import { useFile } from "@dust/react-hooks";
import { theme } from "./theme";
import { BannerView, type CommandCenterData } from "./BannerView";

// Pod banner for a Command Center Pod. Renders ./data.json, written by the daily-brief routine. No tool calls.
export default function App() {
  const file = useFile("./data.json");
  const [data, setData] = useState<CommandCenterData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "empty" | "error">("loading");
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    if (!file) return;
    file
      .text()
      .then((txt) => {
        if (cancelled) return;
        const parsed = JSON.parse(txt) as CommandCenterData;
        const empty = !parsed || (!(parsed.decide ?? []).length && !(parsed.waitingOn ?? []).length);
        setData(parsed);
        setStatus(empty ? "empty" : "ok");
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setStatus("error");
        setMessage(`data.json could not be read: ${e instanceof Error ? e.message : "unknown error"}`);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <FrameRoot theme={theme}>
      <BannerView data={status === "ok" ? data : null} status={status} message={message} />
    </FrameRoot>
  );
}
