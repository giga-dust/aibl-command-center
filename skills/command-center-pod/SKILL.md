---
name: command-center-pod
description: Use to set up, explain or re-shape a Command Center Pod for someone who owns revenue (deals, accounts, customers). Shapes the whole Pod - six-question interview, read-only tool checks, Pod files, pinned dashboard, routines as wake-ups, first brief - then stays as the operating manual. The workflow skills daily-brief, deal-review, account-radar and prioritize-personalize-position run inside the Pod it shapes.
---

# Command Center Pod

A Command Center is a Pod that answers three questions every morning: what matters today, who are the people in it, and what should I say. Agents read the Pod's `README.md` and Files before anything else; routines rewrite them. This skill shapes that Pod. Its attached files are the templates, the dashboard and a set of fictional sample data for a dry run.

Attached to this skill:

- `CONNECT.md`: which tools to connect, in what order, and one read-only check per tool.
- `README.pod.md`, `description.md`: templates for the Pod `README.md` and the Pod description.
- `manifest.json`, `index.tsx`, `theme.ts`, `BannerView.tsx`, `data.json`: the dashboard Frame, built for the Pod banner (280 px tall).
- `pipeline-sample.md`, `account-notes.md`, `calendar-today.md`, `recent-messages.md`, `open-actions.md`: fictional sample data (a CRM extract, account notes, a day's calendar, chat and inbox excerpts, open actions). Use only when no tool is connected, and label every output "sample data".

Workflow skills shipped with this kit: `prioritize-personalize-position` (the method), `daily-brief` (the morning format), `deal-review` (the Friday pass), `account-radar` (one account, deep). If one is not active in this conversation, enable it, or ask the person to attach it from the composer. The short version of each is at the end of this file so the Pod works without them.

## Contract

Do:
1. Ask six questions in one message, accept partial answers, fill the rest with the defaults.
2. Probe connected tools with read-only calls only.
3. Write the Pod files, keep them short (one screen per section).
4. Create and pin the dashboard.
5. Run the first brief on live data, or on the sample data when nothing is connected.
6. Propose the routines; schedule them only after the person says yes.
7. Report what is live, what is pending and how to change it. Then stop.

Do not:
- Send email, Slack or Teams messages, update the CRM, book meetings or post anywhere outside this Pod.
- Invent deals, people, numbers or dates. Missing data is written as "not found".
- Create agents. The default agent in this Pod, with this skill and the workflow skills, is enough.

Not inside a Pod (no Files tab, no Pod description)? Say so and ask the person to create one (Pods → New → Restricted, members: just them) and to run you again from inside it. Reference: https://docs.dust.tt/docs/user-documentation/pods/overview

## 1 · Interview (one message, six questions)

Say that one-line answers are fine and that "skip" applies the default.

1. **You.** Name, role, timezone. Where should the brief arrive: here in the Pod (default), a Slack or Teams DM, or email?
2. **What you sell and to whom.** One line. Your target for this quarter if you track one (number, or "skip").
3. **The short list.** The five to ten deals or accounts that matter most this quarter. Names are enough. Say "pull from CRM" and I will propose a list from the open pipeline.
4. **Tools.** Which of these may I read: CRM (which one), calendar (Google or Outlook), mailbox (Gmail or Outlook), messaging (Slack or Teams), data warehouse? Anything not listed stays off.
5. **Timing.** When should the daily brief arrive on weekdays (default 07:30 your time)? When is the weekly deal review (default Friday 16:00)?
6. **Red lines.** Anything I must never do or touch beyond the standard guardrails? Any account or thread that is off limits?

Defaults when skipped: brief in the Pod at 07:30 local; deal review Friday 16:00; standard guardrails; short list proposed from the CRM, or left empty with a task to fill it.

Wait for the answer. If it is incomplete, continue with defaults and list the gaps in the final report.

## 2 · Check the tools (read-only)

For each tool the person allowed, run the check listed in `CONNECT.md` and record connected / needs authentication / not available:

- CRM: open deals closing this quarter, with stage, amount, close date, last activity.
- Calendar: today's meetings with attendees and titles.
- Mailbox: customer threads from the last five working days with no reply from the owner.
- Messaging: the short-list account names in the last seven days.
- Data warehouse: one usage metric for one short-list account over eight weeks, if the person named a table or metric; otherwise "available, metric to define".

If a tool asks the person to authenticate, say so once and move on. Never block setup on a tool. If nothing is connected, use the sample files and say so in every header.

## 3 · Write the Pod files

Create these in the Pod's Files, filled with the interview answers:

1. `README.md` from `README.pod.md`: identity, target, short list, connected sources, routines, where things live, guardrails, change log.
2. `accounts/<account>.md`: one page per short-list account. Sections: why it matters, stakeholders (name, role, stance, last contact), current stage and next step, open commitments both ways, signals in the last 30 days, questions to answer. Fill from CRM and mailbox when connected; otherwise create the skeleton and a task to complete it.
3. `logs/`: empty; the first brief goes here as `logs/YYYY-MM-DD-brief.md`.
4. `playbooks/positioning.md`: three bullets from the interview (what we sell, to whom, why now).
5. Pod description: set it to `description.md` with the owner's name. If you cannot edit it, ask the person to paste it (Pod settings → description).

Prefer tables with a `Source` column. Keep names and record titles as they appear in the source.

## 4 · Dashboard (the pinned banner)

The dashboard is a Frame that renders `data.json` and nothing else: no tool calls, no live refresh. The routines rewrite `data.json`; the person sees the day's decisions at the top of the Pod.

1. Create the folder `CommandCenterDashboard/` in the Pod Files with the attached `manifest.json`, `index.tsx`, `theme.ts`, `ui/BannerView.tsx` (the attached `BannerView.tsx` goes under `ui/`) and `data.json`.
2. After the first brief (step 5), overwrite `data.json` with real content in the same shape. Keep arrays to five items or fewer.
3. Publish with the Create Frames skill: `dsbx frame publish /files/pod-<podId>/CommandCenterDashboard/manifest.json`.
4. Pin it as the Pod banner with the Pods tool (set pinned frame), or ask the person to pin it (Files → the Frame → Pin as Pod banner).

If Frames or the Computer are unavailable, skip this step and say so in the report.

## 5 · First brief

Run `daily-brief` with the `prioritize-personalize-position` method on the connected tools, or on the sample data. Post the brief in this conversation, save it to `logs/YYYY-MM-DD-brief.md`, and rewrite `CommandCenterDashboard/data.json` from it.

The header must say which sources were used and which were missing. Ask two things: "Is the ranking right?" and "Which drafts do you want finalized?" Apply corrections to `README.md` before moving on.

## 6 · Routines (ask first)

Propose, then schedule only after an explicit yes. Scheduling uses the wake-up tool in a conversation: one schedule per conversation, so start a second conversation for the second routine. Wake-ups run with the person's credentials and are billed to them; "stop the schedule" in that conversation ends it. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

- **Daily brief**, weekdays at the agreed time: "Brief me for today using the daily-brief skill. Flag anything that needs a decision before 10:00. Save the brief to logs/ and rewrite CommandCenterDashboard/data.json, then republish the dashboard."
- **Deal review**, weekly at the agreed time: "Run the deal-review skill on the open pipeline and the accounts in README.md. Update the short list table in README.md. Save to logs/."
- **Account radar**, on demand: "Run account-radar on <account>. What changed in the last 30 days, and what should I do about it?"

Delivery: this Pod, or the DM the person chose if the messaging tool is connected. If the person declines, write the prompts into `README.md` under Routines so they can run them by hand.

## 7 · Report and stop

```
Command Center Pod · setup report
Live:      [ ] README.md written and reviewed   [ ] accounts/ pages (n)   [ ] first brief in logs/   [ ] dashboard pinned
Sources:   CRM: ...   Calendar: ...   Mailbox: ...   Messaging: ...   Warehouse: ...
Routines:  Daily brief: scheduled / manual   Deal review: scheduled / manual
Pending:   (one Pod task per missing item: authentication, short list, metric definition)
Change it: edit README.md, or tell me in this Pod. To stop a schedule, say "stop the schedule" in its conversation.
```

Create a Pod task for each pending item. Then stop and wait for the person.

## Running the Pod after setup

| Ask | Skill | Writes |
|---|---|---|
| "Brief me for today" | `daily-brief` + `prioritize-personalize-position` | `logs/`, `CommandCenterDashboard/data.json` |
| "Review my deals" | `deal-review` | `README.md` short list, `logs/` |
| "What changed at <account>?" | `account-radar` | `accounts/<account>.md` |
| "Prep my meeting with <name>" | `prioritize-personalize-position` (personalize step) | nothing; answer in the conversation |
| "Change the brief time / add an account" | this skill | `README.md`, the wake-up |

Short versions, for when a workflow skill is not active:

- **prioritize-personalize-position.** Prioritize: rank today's items by deadline, money at stake and a stalled signal (no reply, slipped close date). Personalize: for each person in the top items, what they care about, from the last three touches. Position: one recommendation per item with the evidence, and a draft marked "not sent".
- **daily-brief.** Sections in this order: Today at a glance (one line); Decide now (max 3, each ending with a yes/no question); Prepared for you (drafts, "not sent"); Waiting on others (owner, days); Later; Sources and gaps. One screen.
- **deal-review.** For each open deal: stage, amount, close date, days since last activity, next step owner. Flag slipped dates and silent deals. Propose three actions for the week.
- **account-radar.** One account: stakeholders and stance, last 30 days of signals across the connected tools, open commitments both ways, three questions to answer before the next meeting.

Guardrails for every agent in this Pod: prepare, never send; never invent, write "not found in connected sources"; decisions first, detail under "Prepared for you"; one screen per brief.
