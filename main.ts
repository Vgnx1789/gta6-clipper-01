// gta6-clipper-01 entry: hand the video's address over to the gate.
//
// The video itself is the entry; this program only carries VIDEO.json (the
// public YouTube Short address) from the repository into the output folder,
// byte for byte. The house reads the video's views straight from YouTube,
// so nothing this file prints about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=repo MAKEFUN_OUTPUT_DIR=out node main.ts
// Add --verify to check the address without copying anything.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SHORT_URL = /^https:\/\/www\.youtube\.com\/shorts\/([A-Za-z0-9_-]{11})$/;

// Exit codes, one per failure family, so a caller can tell at a glance
// what went wrong: 2 = VIDEO.json missing, 3 = its contents invalid,
// 4 = the hand-over copy failed.
class EntryError extends Error {
  readonly code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

function videoPath(): string {
  return join(BOT_DIR, 'VIDEO.json');
}

function loadVideo(): { url: string } {
  const path = videoPath();
  let raw: string;
  try {
    raw = readFileSync(path, 'utf8');
  } catch (err) {
    throw new EntryError(2, `cannot read ${path}: ${(err as Error).message}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new EntryError(3, `${path} is not valid JSON`);
  }
  if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
    throw new EntryError(3, `${path} must be an object with a "url" field`);
  }
  const url = (parsed as { url: unknown }).url;
  if (typeof url !== 'string' || !SHORT_URL.test(url)) {
    throw new EntryError(
      3,
      `${path} "url" must be a YouTube Shorts address (https://www.youtube.com/shorts/<id>)`,
    );
  }
  return { url };
}

function verify(): void {
  const path = videoPath();
  if (!existsSync(path)) {
    console.error(`verify: ${path} is missing`);
    process.exit(2);
  }
  const { url } = loadVideo();
  console.log(`verify: VIDEO.json present, video ${url} looks like a public Short address`);
}

function handOver(): void {
  const { url } = loadVideo();
  const videoId = url.slice(url.lastIndexOf('/') + 1);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const target = join(OUTPUT_DIR, 'VIDEO.json');
  try {
    copyFileSync(videoPath(), target);
  } catch (err) {
    throw new EntryError(4, `cannot copy ${videoPath()} into ${OUTPUT_DIR}: ${(err as Error).message}`);
  }
  const bytes = readFileSync(target, 'utf8').length;
  console.log(`handed over video: ${url}`);
  console.log('summary:');
  console.log(`  video   ${videoId}`);
  console.log(`  handed  VIDEO.json (${bytes} bytes) into ${target}`);
  console.log(`  artwork ${url}`);
}

try {
  if (process.argv.includes('--verify')) verify();
  else handOver();
} catch (err) {
  console.error(`error: ${(err as Error).message}`);
  process.exit(err instanceof EntryError ? err.code : 1);
}
