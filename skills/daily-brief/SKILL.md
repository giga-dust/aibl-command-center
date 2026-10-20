---
name: daily-brief
description: Use when presenting a morning brief or a Command Center summary. Fixes the layout - decide now, prepared for you, waiting on others, later - so the reader finds the decisions in under two minutes. Also emits an optional brief.json for the snapshot Frame when asked.
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

## Optional: brief.json for the snapshot Frame

When the user asks for a snapshot or dashboard, also produce a `brief.json` file with this shape and save it next to the `CommandCenterSnapshot` Frame, then publish the Frame:

```json
{
  "generatedAt": "2026-10-19T07:30:00+02:00",
  "owner": "First name",
  "headline": "One line",
  "prioritize": [{"title": "", "when": "", "why": "", "source": ""}],
  "personalize": [{"who": "", "account": "", "whatMatters": "", "source": ""}],
  "position": [{"account": "", "recommendation": "", "draft": "", "evidence": ""}],
  "waiting": [{"item": "", "owner": "", "since": ""}],
  "gaps": [""]
}
```

Keep arrays short (five items or fewer). Empty arrays are fine. The Frame shows the data as written; it does not call any tool.
