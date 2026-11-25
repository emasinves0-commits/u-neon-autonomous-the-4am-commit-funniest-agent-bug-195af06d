import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY_LINE =
  "Token budget exhausted mid-fix. Commit message is now functionally the only stable code remaining. Assessing.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function validateEntry(line: string): string {
  if (typeof line !== "string" || line.trim().length === 0) {
    throw new Error("entry is empty or whitespace-only");
  }
  const chars = [...line].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry length ${chars} outside ${MIN_CHARS}-${MAX_CHARS} characters`);
  }
  return line;
}

function resolveOutputPath(): string {
  const dir = resolve(process.env.OUTPUT_DIR ?? "/output");
  mkdirSync(dir, { recursive: true });
  return resolve(dir, "entry.txt");
}

function main(): void {
  const text = validateEntry(ENTRY_LINE);
  const path = resolveOutputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, { encoding: "utf8" }); // no trailing newline
  console.log(text);
  console.log(`path: ${path}`);
  console.log(`chars: ${[...text].length} bytes: ${Buffer.byteLength(text, "utf8")}`);
}

main();
