# CommandCenterSnapshot

An optional Dust Frame that renders a brief produced by the Command Center agent. It reads `./brief.json` from its own folder and shows the three decisions plus a waiting list.

- No server functions, no tool calls, no live refresh. It is a snapshot.
- To use it: copy this folder into a Dust conversation or Pod, ask the Agent to write `brief.json` next to it (see the `daily-brief` skill), then publish the Frame.
- `brief.json` in this folder is sample data so the Frame renders before the first real brief.
