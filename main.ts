// SPDX-License-Identifier: MIT
// Two Lines to Your Past Self — writes exactly two lines to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "Don't say yes when your uncle calls at 4 p.m. on the last Friday of Ramadan in 2019 and asks you to cover his night shift.",
  "That shift kept you from your grandmother's last sahur, and the empty chair at her table is why you never work a Ramadan night again.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n"), "utf8");
console.log("Wrote /output/entry.txt");
