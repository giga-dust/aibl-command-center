# Live build script (about 20 minutes)

Use this after the two-minute admin setup. Each step has a fallback so the build never stalls on a connection issue.

## 0. Two-minute admin pause

- 0:00 to 1:30: connect or authenticate only the tools the brief needs (CRM, calendar, mailbox). Confirm the right account and workspace.
- 1:30 to 2:00: one read-only check: "What is on my calendar today?"
- Blocked? Say so to the agent. It falls back to `context/` from this kit, which is fictional sample data, and labels the brief accordingly.

## 1. Pod (2 minutes)

- Pods → New → Restricted, members: just you. Name: `Command Center`.
- Open a conversation in the Pod and paste the one-line install from `README.md` (the raw link to `SETUP.md`), or upload `SETUP.md` to Files and say "Set up this Pod using SETUP.md. Start with the interview."
- Point out: the agent reads the Pod description and the Files. That is the whole trick behind a templated Pod.

## 2. Interview and build (6 minutes)

- Answer the six questions out loud, briefly. Say "pull from CRM" for the short list if the CRM is connected; otherwise name three accounts.
- While the agent writes `README.md` and the account pages, explain Skill (the method), Agent (the worker) and Pod (the shared room with memory). The four skills in `skills/` are the method; the Pod is where the memory lives.

## 3. First brief (6 minutes)

- Prompt 1: "Brief me for today." Read the header: sources used, sources missing.
- Prompt 2: "Prep my next meeting with [name]. What changed since we last spoke?"
- Prompt 3: "Draft the follow-up for the top item. Do not send it." Show the review gate: the draft is in "Prepared for you"; nothing left the room.
- Prompt 4 (if time): "Review my deals." The Friday routine, on demand.

## 4. Routines and banner (4 minutes)

- Say yes to the daily brief schedule. Show the wake-up confirmation and where to stop it.
- Optional: pin `frames/CommandCenterSnapshot` as the Pod banner once `brief.json` is written. Explain that it is a snapshot, not a live dashboard.
- Close: "Three mornings manual, then let it run. In three weeks ask it what you keep postponing."

## Fallbacks

- No tool connects: use `context/` and say "sample data" on the slide and in the brief.
- No Skills creation in the workspace: skill bodies live in Pod Files; agents read them from `README.md`.
- No Frames: skip the banner; nothing else depends on it.
- No wake-ups: write the two prompts into `README.md` under Routines and run them by hand.
