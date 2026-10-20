# Connect your tools

Connect in this order. Each row has a read-only check you can run in the Pod to confirm the connection works before the first brief. Skip what you do not have; the agent flags missing sources instead of guessing.

Workspace admins add tools under **Admin → Tools** (in a fresh workspace, that is you). Most tools then ask each person to authenticate once, the first time an agent uses them.

| Order | Category | Options | What it unlocks | Read-only check |
|---|---|---|---|---|
| 1 | CRM | HubSpot, Salesforce, Attio | Deals, stages, amounts, close dates, last activity, owners, contacts | "List my open deals closing this quarter, with stage and last activity date." |
| 2 | Calendar | Google Calendar, Outlook Calendar | Today's meetings and attendees; meeting prep | "What is on my calendar today? Attendees and titles only." |
| 3 | Mailbox | Gmail, Outlook | Unanswered customer threads, commitments, asks | "Which customer emails from the last five working days have no reply from me?" |
| 4 | Messaging | Slack, Microsoft Teams | Internal deal context, escalations, where the brief is delivered | "Search our Slack for mentions of Acme in the last seven days." |
| 5 | Data warehouse | Snowflake, BigQuery, Databricks | Product usage, account health, consumption trends for large accounts | "Show weekly active users for Acme over the last eight weeks." |
| Optional | Prospecting and research | LinkedIn-type tools, web search | Role changes, hiring, news for the Personalize step | "What changed at Acme in the last 30 days? Public sources only." |
| Optional | Knowledge | Notion, Google Drive, Confluence (via Company Data) | Account plans, playbooks, pricing | "Find our account plan for Acme." |

## Rules the agent follows with these tools

- Read first. During setup and routine runs the agent only reads.
- Any send (email, Slack, Teams), record update (CRM) or booking (calendar) requires an explicit instruction from you in the current conversation, after you have reviewed the draft.
- If a tool is not connected, the brief says "source not connected" in one line and continues.
- Tool access uses your own credentials. What you cannot see, the agent cannot see.

## Two-minute preflight (workshop)

0:00 to 1:30: authenticate the CRM, the calendar and the mailbox on your own laptop.
1:30 to 2:00: run one read-only check from the table above. If it answers, you are ready to build.
