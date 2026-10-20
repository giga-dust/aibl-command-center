---
name: deal-review
description: Use for a weekly pipeline review, "review my deals", "what is slipping", or before a forecast call. Reads the open pipeline and the owner's short list, finds slippage, staleness and missing next steps, and proposes one move per deal with a human review gate. Never updates the CRM.
---

# Deal review

A weekly look at the pipeline that ends in decisions, not a status dump.

## Inputs

1. Open deals from the CRM for the current and next quarter: stage, amount, close date, last activity, next step field, owner, contacts. If the CRM is not connected, use the short list table in the Pod `README.md` and say so.
2. The owner's short list from `README.md` and the `accounts/` pages.
3. Mailbox and messaging context for the deals in question, last 14 days.
4. Last week's review in `logs/`, to show what changed.

## Checks (run all, report only hits)

| Check | Rule | Why it matters |
|---|---|---|
| Slipping | Close date moved out since last review, or close date within 14 days with stage below proposal | Forecast risk |
| Stale | No logged activity in 10 working days | Momentum lost |
| No next step | Next step empty, past due, or not a dated action | Deal is drifting |
| Single-threaded | One contact only on a deal above the median amount | Champion risk |
| Open commitment | We promised something (mail or message) that is not done | Trust risk |
| Large account silent | Short-list account with no touch in 21 days | Account plan risk |

## Output format

```
Deal review · week of {date} · sources: {list} · missing: {list}

Moved since last week: {won / lost / stage changes / slips}, one line each.

Needs a decision (max 5)
1. {Deal, amount, stage, close date}  ·  {check hit}  ·  Move: {one concrete action, owner, by when}  ·  Source
...

Watch (max 5): {deal · check · one line}
Short list updates for README.md: {rows to add, change or drop}
Prepared for you: {draft messages or CRM updates the owner can approve}
```

## Rules

- NEVER update the CRM or send anything. Prepare the updates under "Prepared for you" and ask which to apply; apply only on explicit instruction and only if an update tool is attached.
- Quantify when the data exists (amount, days stale, days to close). Do not score deals with made-up probabilities.
- If two checks hit the same deal, list it once with both checks.
- Save the output to `logs/YYYY-MM-DD-deal-review.md` when running in a Pod.
