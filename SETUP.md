# Command Center Pod · SETUP

**AGENT: START HERE.** A person has dropped this file into a Dust Pod and asked you to set the Pod up. Follow this file in order. Do not skip the interview. Do not send anything or change any external record. When you finish, report with the checklist in Part 6 and stop.

Human reading this? The agent does the work. Your part is six answers and one review. The whole setup takes about ten minutes.

---

## Part 0 · Contract

You will:
1. Ask six questions in one message, accept partial answers, fill the rest with the defaults below.
2. Probe the connected tools with read-only calls only.
3. Write the Pod files listed in Part 3 and keep them short.
4. Run the first daily brief on live data, or on the sample context when no tool is connected.
5. Propose the routines and schedule them only after the person says yes.
6. Report what is live, what is pending and how to change it. Then stop.

You will not:
- Send email, Slack or Teams messages, update the CRM, book meetings or post anywhere outside this Pod.
- Invent deals, people, numbers or dates. Missing data is written as "not found".
- Write more than one screen per file section. This Pod is a working tool, not a wiki.

If you are not inside a Pod (no Files tab, no Pod description), say so and ask the person to create one (Pods → New → Restricted) and run you again from inside it.

Reference for Pods, Files and wake-ups: https://docs.dust.tt/docs/user-documentation/pods/overview

---

## Part 1 · Interview (one message, six questions)

Send the six questions in a single message. Say that one-line answers are fine and that "skip" applies the default.

1. **You.** Name, role, timezone. Where should the brief arrive: here in the Pod (default), a Slack or Teams DM, or email?
2. **What you sell and to whom.** One line. Your target for this quarter if you track one (number, or "skip").
3. **The short list.** The five to ten deals or accounts that matter most this quarter. Names are enough. Say "pull from CRM" and I will propose a list from the open pipeline.
4. **Tools.** Which of these may I read: CRM (which one), calendar (Google or Outlook), mailbox (Gmail or Outlook), messaging (Slack or Teams), data warehouse? Anything not listed stays off.
5. **Timing.** When should the daily brief arrive on weekdays (default 07:30 your time)? When is the weekly deal review (default Friday 16:00)?
6. **Red lines.** Anything I must never do or touch beyond the standard guardrails (prepare, never send; never update records)? Any account or thread that is off limits?

Defaults when skipped: brief in the Pod at 07:30 local; deal review Friday 16:00; standard guardrails; short list proposed from the CRM, or left empty with a task to fill it.

Wait for the answer before continuing. If the answer is incomplete, continue with defaults and list the gaps in the final report.

---

## Part 2 · Tool probes (read-only)

For each tool the person allowed, run one small read-only call and record the result as connected / needs authentication / not available:

- CRM: list open deals closing this quarter, with stage, amount, close date, last activity.
- Calendar: today's meetings with attendees and titles.
- Mailbox: customer threads from the last five working days with no reply from the owner.
- Messaging: search the short-list account names in the last seven days.
- Data warehouse: one usage metric for one short-list account over eight weeks, if the person named the table or metric; otherwise record "available, metric to define".

If a tool asks the person to authenticate, say so once and move on. Never block setup on a tool. If nothing is connected, use `context/` from this kit as the source for the first run and say so in the brief header.

---

## Part 3 · Build the Pod

Create these files in the Pod's Files. Use the templates in this kit (`pod/`, `skills/`, `agents/`) and fill the placeholders with the interview answers.

1. `README.md`: from `pod/README.pod.md`. Identity, target, short list, connected sources, routines, where things live, guardrails, change log.
2. `accounts/<account>.md`: one page per short-list account. Sections: why it matters, stakeholders (name, role, stance, last contact), current stage and next step, open commitments both ways, signals in the last 30 days, questions to answer. Fill from CRM and mailbox when connected; otherwise create the skeleton and a task to complete it.
3. `logs/`: empty folder; the first brief goes here as `logs/YYYY-MM-DD-brief.md`.
4. `playbooks/positioning.md`: three bullets from the interview (what we sell, to whom, why now). The owner extends it later.
5. Skills: if the workspace lets you create Skills, create `prioritize-personalize-position`, `daily-brief`, `deal-review` and `account-radar` from the `skills/*/SKILL.md` files in this kit. If not, copy the four skill bodies into `skills/` in the Pod Files and reference them from `README.md`; agents read Pod files automatically.
6. Agent: if the person wants a dedicated agent, create it from `agents/command-center-agent.md` (name, description, instructions, the four skills, only the tools from Part 2). Otherwise the default agent in this Pod follows `README.md`, which is enough to start.
7. Pod description: if you can edit it, set it to the text in `pod/description.md` with the owner's name. If you cannot, ask the person to paste it (Pod settings → description).
8. Optional banner: if Frames are enabled, copy `frames/CommandCenterSnapshot/` into the Pod Files, write today's brief to `brief.json` next to it and suggest pinning the Frame as the Pod banner (Files → Frame → Pin as Pod banner). Skip without comment if Frames are unavailable.

Keep every file under one screen per section. Prefer tables with a `Source` column.

---

## Part 4 · First run

Run the `daily-brief` using the `prioritize-personalize-position` method on the connected tools (or on `context/` when none are connected). Post the brief in this conversation and save it to `logs/YYYY-MM-DD-brief.md`.

The brief header must say which sources were used and which were missing. Ask the person two things: "Is the ranking right?" and "Which drafts do you want finalized?" Apply their corrections to `README.md` (for example an account to add or drop, a timing change) before moving on.

---

## Part 5 · Routines (ask first)

Propose, then schedule only after an explicit yes:

- **Daily brief**: weekdays at the agreed time, prompt: "Brief me for today using the daily-brief skill. Flag anything that needs a decision before 10:00. Save the brief to logs/." Delivery: this Pod, or the DM channel the person chose if the messaging tool is connected.
- **Deal review**: weekly at the agreed time, prompt: "Run the deal-review skill on the open pipeline and the accounts in README.md. Update README.md's short list table. Save to logs/." Delivery: this Pod.

Scheduling uses the wake-up tool in this conversation (one schedule per conversation; start a second conversation for the second routine). Wake-ups run with the person's own credentials and are billed to them; the person can stop a wake-up at any time by saying "stop the schedule" in that conversation. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

If the person declines, write the two prompts into `README.md` under Routines so they can run them manually.

---

## Part 6 · Verify and report

Check each item and report in this exact shape:

```
Command Center Pod · setup report
Live:      [ ] README.md written and reviewed   [ ] accounts/ pages (n)   [ ] first brief saved to logs/
Sources:   CRM: ...   Calendar: ...   Mailbox: ...   Messaging: ...   Warehouse: ...
Routines:  Daily brief: scheduled / manual   Deal review: scheduled / manual
Pending:   (tasks created for anything missing: authentication, short list, metric definition)
Change it: edit README.md, or tell me in this Pod. To stop a schedule, say "stop the schedule" in its conversation.
```

Create a Pod task for each pending item. Then stop and wait for the person.

---

## Appendix · Guardrails to copy into every agent in this Pod

- Prepare, never send. No email, message, CRM update or booking without an explicit instruction in the current conversation.
- Never invent facts. Write "not found in connected sources".
- One screen per brief. Decisions first, detail under "Prepared for you".
- Use the owner's language; keep names and record titles as they appear in the source.
