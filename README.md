# Command Center Pod · GTM engineering for deals, large accounts and revenue

A templated Dust Pod for people who carry a number: account executives, founders who sell, partnership and GTM leads. It brings the decision to you with the context attached, every morning, and leaves the deciding to you.

Built for the Dust × aiBL workshop *Build your Command Center*. Sister kits: [The Goal Pod](https://github.com/giga-dust/aibl-the-goal) (operational efficiency) and the [Second Brain Pod](https://github.com/giga-dust/aibl-second-brain) (proactivity and vision).

## What you get

| Every weekday morning | Every Friday | On demand |
|---|---|---|
| **Daily brief**: today's top three ranked, who you are meeting and what changed, the next step drafted. | **Deal review**: slipping deals, stale deals, missing next steps, large-account plans that need a move. | "Prep my 2pm", "Where are we with Acme", "What matters this week", "Radar on our top ten accounts". |

Three questions, answered with sources, before 8:00:

1. **Prioritize**: which deals and accounts need attention today, and when?
2. **Personalize**: who am I meeting, what changed for them since last time?
3. **Position**: what is the next step, and what does the message say?

A person reviews before anything is sent or any record changes. Always.

## Install in three steps (about ten minutes)

1. **Create an account** at [dust.tt](https://dust.tt). Workshop attendees: choose the Business plan and enter the attendee code **AIBL2026PRO**. Forgot the code? Email support@dust.tt.
2. **Create a Pod** (left sidebar → Pods → New; keep it Restricted, members: just you). Name it `Command Center`.
3. **Drop in the setup file.** In the Pod, start a conversation with the default agent and paste:

   > Read https://raw.githubusercontent.com/giga-dust/aibl-command-center/main/SETUP.md and set up this Pod by following it exactly. Start with the interview.

   Prefer files? Download `SETUP.md`, upload it in the Pod's **Files** tab, then say: *"Set up this Pod using SETUP.md. Start with the interview."*

The agent asks six questions, probes the tools you connect, writes the Pod files, runs your first brief and offers to schedule the routines. Nothing is sent or changed in your tools during setup.

## Connect your tools

The brief is only as good as its sources. Connect what you have, in this order, and skip the rest (see [CONNECT.md](CONNECT.md)):

| Priority | Tool | What it unlocks |
|---|---|---|
| 1 | **CRM** (HubSpot, Salesforce, Attio) | Deals, stages, amounts, close dates, last touch, owners |
| 2 | **Calendar** (Google Calendar or Outlook Calendar) | Today's meetings and attendees; the brief is organized around them |
| 3 | **Mailbox** (Gmail or Outlook) | Unanswered threads, commitments made, what the customer asked for |
| 4 | **Messaging** (Slack or Microsoft Teams) | Internal context: deal desk, support escalations, where the brief is delivered |
| 5 | **Data warehouse** (Snowflake, BigQuery, Databricks) | Product usage and account health for large accounts |

No tools yet? The kit ships with fictional sample context so the first brief renders anyway.

## What is inside

| Path | What it is |
|---|---|
| `SETUP.md` | The drop-in playbook the Pod agent follows: interview, tool probes, files, first run, routines, verification |
| `CONNECT.md` | Which tools to connect, in what order, with a read-only check for each |
| `pod/README.pod.md` | Template of the README the agent writes into your Pod (identity, targets, accounts, routines) |
| `pod/description.md` | The Pod description that points every agent to the README and the guardrails |
| `skills/prioritize-personalize-position/SKILL.md` | The decision method: three questions, sources, review gate |
| `skills/daily-brief/SKILL.md` | The morning brief format: one screen, decisions first |
| `skills/deal-review/SKILL.md` | The Friday pipeline review: slippage, staleness, missing next steps |
| `skills/account-radar/SKILL.md` | Large-account watch: signals, why now, who to contact |
| `agents/command-center-agent.md` | Name, description, instructions and settings for the agent |
| `routines/ROUTINES.md` | Daily and weekly routines, wake-up settings, delivery options |
| `prompts/demo-script.md` | The live-build sequence used in the workshop, with fallbacks |
| `context/` | Fictional sample context: pipeline, accounts, calendar, messages, open actions |
| `frames/CommandCenterSnapshot/` | Optional Frame that renders a brief from `brief.json`; pin it as the Pod banner |

## Principles

- The brief lists decisions that need judgment, not everything that happened.
- Missing data is flagged as missing, never invented.
- Start with one recurring decision and the smallest useful version. Add sources when the brief keeps missing things.
- Human review before any send, update or booking. The agent prepares; you act.

## Credits and license

Method: Prioritize → Personalize → Position, as taught in the Dust × aiBL workshop. Pod setup pattern inspired by Nic Siegle's Command Center setup playbooks. MIT license, see `LICENSE`.
