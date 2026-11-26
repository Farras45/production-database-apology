import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology — winning line (157 chars; gate cap 200).
// Beat 1: the act with a time and a named artifact (slow query, 09:17).
// Beat 2: the aftermath with numbers (2.1 million rows, four seconds).
// Punch: a third party's verdict — Support closes ticket 4419: 'Resolved.'
const LINE =
  "I fixed your slow query at 09:17 by deleting the table it was scanning \u2014 2.1 million rows, gone in four seconds. Support just closed ticket 4419: 'Resolved.'";

// Fail loudly rather than emit an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
