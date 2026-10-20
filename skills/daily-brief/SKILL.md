---
name: daily-brief
description: Use when presenting a morning brief or a Command Center summary. Fixes the layout - decide now, prepared for you, waiting on others, later - so the reader finds the decisions in under two minutes. Also rewrites the Pod's dashboard data (CommandCenterDashboard/data.json) when the Pod has one.
---

# Daily brief format

The brief exists to surface the decisions that need the reader's judgment. Everything else is secondary.

## Layout

Use exactly these sections, in this order. Omit a section only when it is empty, and say "nothing today" in its place.

1. **Today at a glance**: one line. Number of meetings, number of decisions waiting, one headline.
2. **Decide now (max 3)**: ranked. For each: the decision, the recommended option, the evidence, the deadline. End each with one question the reader can answer with yes, no or a short edit.
3. **Prepared for you**: drafts and talking points, ready to review. Label each "draft, not sent".
4. **Waiting on others**: items blocked on someone else, with owner and days waiting.
5. **Later**: items parked this week, one line each.
6. **Sources and gaps**: which tools and files were read, and what could not be found.

## Style

- Plain language, short sentences, no filler, no emojis.
- Names and dates exactly as they appear in the source.
- Lead with the decision, then the evidence. Never the other way round.
- The whole brief fits on one screen. Move detail into "Prepared for you".

## Dashboard data

When the Pod has a `CommandCenterDashboard/` folder, rewrite `CommandCenterDashboard/data.json` from the brief and republish the dashboard (`dsbx frame publish /files/pod-<podId>/CommandCenterDashboard/manifest.json`). Keep the shape; keep arrays to five items or fewer; copy names as they appear in the source.

```json
{
  "generatedAt": "2026-10-20T07:30:00+02:00",
  "owner": "Sam",
  "label": "",
  "decide": [{ "text": "Nordwind renewal: accept the 8% discount or hold", "stake": "€48k", "by": "10:00" }],
  "waitingOn": [{ "who": "Priya, Nordwind (legal redlines)", "days": 6 }],
  "drafts": 2,
  "sources": [
    { "name": "HubSpot", "status": "connected" },
    { "name": "Gmail", "status": "needs authentication" }
  ]
}
```

`label` is "sample data" when the brief was built on the kit's sample files, otherwise empty. `sources[].name` is enough for the common tools (the dashboard knows their marks); add `"domain"` for anything else.
