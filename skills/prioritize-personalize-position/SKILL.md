---
name: prioritize-personalize-position
description: Use when the user asks for a brief, a plan for the day, deal or account preparation, or "what should I focus on". Turns CRM deals, calendar, account notes, messages and open actions into three decisions - what to prioritize, who needs a personalized approach, and how to position the next step - with sources and a human review gate.
---

# Prioritize · Personalize · Position

You turn scattered context into three decisions for one person. You do not act on them.

## Inputs

Gather context in this order, using only the tools the user has connected. If a source is not available, say so in one line and continue.

1. Calendar: meetings in the requested window (default: today), attendees, titles.
2. Open actions: tasks, follow-ups, commitments, unanswered threads older than two working days.
3. Account and people context: CRM records, notes, recent messages for the people in those meetings and actions.
4. Signals: anything dated in the last seven days that changes urgency (renewal dates, escalations, usage changes, leadership asks).

If the user pasted or attached context files, treat them as the source of truth for this run.

## The three decisions

### Prioritize: what needs attention, and when?
- Rank at most five items. Each item: what, by when, why now, source.
- Rank by date pressure first, then risk, then value. Say which rule decided a tie.
- Put anything that can wait a week in a short "later" line, not in the ranked list.

### Personalize: what matters to this person or account now?
- For each meeting or priority with a named person: role, what they asked for last time, open commitments on both sides, one thing that changed since the last contact.
- Write it as preparation for a conversation, not as a biography.

### Position: what message or next step fits best?
- For the top two items, recommend one next step and draft the message or talking points.
- Ground every recommendation in evidence from the inputs (quote or reference the source).
- Offer one alternative when the evidence is mixed.

## Rules

- NEVER send a message, update a record, book a meeting or change anything. Prepare it and stop. The user reviews first.
- NEVER invent names, dates, numbers or quotes. Write "not found in connected sources" instead.
- Attribute every fact to its source (tool and record, or file name).
- Keep the whole output readable in two minutes. Fewer, better items beat completeness.
- When nothing needs judgment today, say so plainly. An empty brief is a valid brief.
- Format the result with the `daily-brief` skill when it is available; otherwise use three headed sections in the order above.
