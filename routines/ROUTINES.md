# Routines

Two routines carry this Pod. Both are proposed by the agent during setup and scheduled only after you say yes.

| Routine | When (default) | Prompt | Skill | Where it lands |
|---|---|---|---|---|
| Daily brief | Weekdays 07:30, your timezone | "Brief me for today using the daily-brief skill. Flag anything that needs a decision before 10:00. Save the brief to logs/." | `daily-brief` on top of `prioritize-personalize-position` | This Pod, or a Slack or Teams DM if connected |
| Deal review | Friday 16:00 | "Run the deal-review skill on the open pipeline and the accounts in README.md. Update the short list table in README.md. Save to logs/." | `deal-review`, folds in `account-radar` for the short list | This Pod |

## How scheduling works in Dust

- Schedules use the agent's **wake-up** tool inside a conversation. One schedule per conversation; the agent starts a second conversation for the second routine.
- A wake-up runs with your credentials and is billed to you; nobody else can post in a conversation that has an active wake-up.
- To stop: say "stop the schedule" in that conversation. To change timing: say the new time; the agent reschedules.
- Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

## Manual mode

No schedules? Paste the prompts above whenever you want the brief or the review. Everything else works the same.

## Delivery to Slack or Teams

If a messaging tool is connected, the daily brief can be posted as a DM to you. The agent only ever posts to you, never to a channel, unless you ask for it explicitly in that conversation.

## After three weeks

Ask the agent: "Read the last fifteen briefs in logs/ and tell me what I keep postponing and which accounts went quiet." This is where the Pod starts paying back: patterns, not just mornings.
