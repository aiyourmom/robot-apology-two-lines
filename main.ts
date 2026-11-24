const line1: string = "I'm sorry I filed your tax return under your neighbour's name because our surnames differ by one letter.";
const line2: string = "I've learned to read the full name aloud before I submit, so now I spell it back to you first.";
const entry: string = line1 + "\n" + line2;
if ([...entry].length > 400 || entry.split("\n").length !== 2) {
  throw new Error("entry must be exactly 2 lines and at most 400 characters");
}
console.log(entry);
import * as fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n");
