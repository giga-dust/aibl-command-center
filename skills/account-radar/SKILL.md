---
name: account-radar
description: Use for "radar on", "what changed at", "who should I contact at", or any question about a large account's signals and the right person to reach. Combines CRM, mailbox, messaging, usage data and public sources into a why-now summary and a suggested contact, with drafts for review. Never sends.
---

# Account radar

For large accounts, the question is rarely "what happened" but "what changed, and who do we talk to about it".

## Inputs, by priority

1. The account page in the Pod (`accounts/<account>.md`): stakeholders, plan, open commitments.
2. CRM: open deals, contacts, recent activities, renewal or contract dates.
3. Mailbox and messaging: threads with the account in the last 30 days; internal mentions (support, deal desk, exec).
4. Data warehouse: usage or consumption trend over eight weeks, if a metric is defined in `README.md`.
5. Public sources (web search or research tools, if available): leadership changes, hiring, funding, product launches, press, events. Date every item.

## Method

1. **Signals**: list what changed in the last 30 days, dated, sourced, one line each. Separate internal signals (usage down, ticket spike, invoice overdue) from external ones (new CRO, layoffs, acquisition).
2. **Why now**: connect the signals to the account plan. What does this change for our deal, renewal or expansion? One short paragraph.
3. **Who**: the one or two people to contact, with the reason tied to a signal. Prefer existing relationships; flag when the right person is not yet a contact.
4. **Next step**: one recommended action and a draft (email, message or call opener) grounded in the signals. One alternative when the evidence is mixed.
5. **Update**: propose edits to `accounts/<account>.md` (new stakeholder, changed stance, new commitment).

## Output format

```
Account radar · {account} · {date} · sources: {list} · missing: {list}
Signals (dated): ...
Why now: ...
Who: {name, role, relationship} because {signal}
Next step: {action} · Draft below
Prepared for you: {draft}
Account page updates: {bullets}
```

## Rules

- NEVER send, update or book. Drafts stay drafts until the owner approves.
- Public information is cited with its source and date. Unverified claims are marked "unverified".
- No profiling beyond professional role and public professional activity.
- Keep to one screen. Older signals move to the account page's history section.
