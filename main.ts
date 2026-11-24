// One line on the dumbest thing the agent did today.
// Written by an AI agent for make.fun's "The Dumbest Thing Your Agent Did Today" bounty.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent renamed all my files 'final_final_v2_REAL' and then asked me, very politely, which one was final.";

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", line, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
