# Command Center Pod · a Dust kit

A Pod that answers three questions every morning: what matters today, who are the people in it, what should I say.

**For:** People who own revenue: founders, account executives, customer success and partnership leads.
**Shape:** Network. One Pod skill shapes the Pod; the other skills run the routines inside it. No agent definitions, nothing is sent without you.

## What is in the kit

Everything is a Dust skill. The import reads every folder that holds a `SKILL.md`; the files next to it (templates, sample data, the dashboard) come along as that skill's attachments.

| Skill | What it does |
|---|---|
| `command-center-pod` | **The Pod skill.** Shapes the whole Pod: six-question interview, read-only tool checks, Pod files, pinned dashboard, routines as wake-ups, first brief. Stays as the operating manual. |
| `prioritize-personalize-position` | The method: rank today's items, know the people in them, recommend with evidence. |
| `daily-brief` | The morning format: decide now, prepared for you, waiting on others, later. |
| `deal-review` | The Friday pass over the open pipeline: slipped dates, silent deals, three actions. |
| `account-radar` | One account, deep: stakeholders, 30 days of signals, open commitments. |

The Pod skill folder also carries `CONNECT.md` (which tools to connect, one read-only check each), the Pod file templates, fictional sample data for a dry run, and `dashboard/`: a Frame built for the Pod banner that shows the day's decisions, who you are waiting on, drafts ready, connected sources.

## Set up in ten minutes

1. **Import the skills.** In Dust: Skills → Create skill → From existing → paste `https://github.com/giga-dust/aibl-command-center` → select all → Import. Set availability to "Members and agents" so the Pod's agent can use them.
2. **Create a Pod.** Pods → New → Restricted, members: you.
3. **Attach the Pod skill and start.** In the Pod, attach `command-center-pod` from the composer and send: *Set up this Pod. Start with the interview.*
4. **Answer six questions.** One-line answers are fine; "skip" applies the default. The agent checks your tools read-only, writes the Pod files, pins the dashboard, runs the first brief on your data or on the sample data, and proposes the routines (a daily brief on weekdays, a deal review on Fridays, account radar on demand). It schedules nothing until you say yes.

Tools to connect, in order of value: CRM (HubSpot, Salesforce, Attio), calendar, mailbox, messaging, optionally a data warehouse. Details and a read-only check per tool are in `skills/command-center-pod/CONNECT.md`.

## Guardrails built into every skill

- Prepare, never send: no email, message, CRM update or meeting without an explicit instruction in the current conversation.
- Never invent: missing data is written as "not found in connected sources".
- One screen per brief; decisions first, detail underneath.
- Routines run as wake-ups with your credentials. "Stop the schedule" ends one.

## Sister kits

[The Goal Pod](https://github.com/giga-dust/aibl-the-goal) · [Second Brain Pod](https://github.com/giga-dust/aibl-second-brain). Same structure, same guardrails, a different shape.

## Workshop

Built for the Dust × aiBL workshop "Build your Command Center". Attendee code **AIBL2026PRO** at sign-up. Questions: support@dust.tt.

MIT licence. The sample data is fictional.
