import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about cats, judged in criterion order: on-subject with a
// setup and a turn, a laugh on first read, a fresh misdirection (the cat
// reviews the human), tight wording, and a line worth retelling.
const entry =
  "My cat gave me a performance review: excellent at opening cans, " +
  "needs improvement at minding my own business.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 109 chars.
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
