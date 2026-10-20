# Command Center · {{owner}}

_This file is written by the agent during setup and kept current by the weekly review. Agents in this Pod read it first._

## Who this is for
- Owner: {{owner}}, {{role}}, timezone {{timezone}}
- Sells: {{what_we_sell}} to {{icp}}
- Target this quarter: {{target}} (as of {{setup_date}})
- Brief delivered: {{delivery}} at {{brief_time}}, weekdays. Deal review: {{review_day}} {{review_time}}.

## Accounts and deals that matter this quarter
| Account | Why it matters | Stage / amount | Next step | Owner of next step | Last touched |
|---|---|---|---|---|---|
| {{account_1}} | | | | | |
| {{account_2}} | | | | | |

_Source of truth for deal data is the CRM when connected. This table is the owner's short list, not a copy of the pipeline._

## Connected sources
- CRM: {{crm_status}}
- Calendar: {{calendar_status}}
- Mailbox: {{mail_status}}
- Messaging: {{messaging_status}}
- Data warehouse: {{warehouse_status}}

## Routines
- Daily brief (skill `daily-brief`): weekdays {{brief_time}}, posted {{delivery}}.
- Deal review (skill `deal-review`): {{review_day}} {{review_time}}, posted in this Pod.
- Account radar (skill `account-radar`): on demand, and folded into the Friday review for the accounts above.

## Where things live
- `logs/YYYY-MM-DD-brief.md`: one file per brief. Look back here for trends.
- `accounts/<account>.md`: one page per large account (stakeholders, plan, open commitments).
- `playbooks/`: positioning, objections, pricing notes the owner adds over time.
- `CommandCenterDashboard/data.json`: the latest brief, rendered by the pinned dashboard.

## Guardrails
- Prepare, never send. No email, message, CRM update or meeting without an explicit instruction in the current conversation.
- Never invent names, numbers, dates or quotes. Write "not found in connected sources".
- One screen per brief. Detail goes to "Prepared for you".

## Change log
- {{setup_date}}: Pod set up from the aibl-command-center kit.
