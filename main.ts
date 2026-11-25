// The Meeting That Should Have Been an Email — entry (Node 22, standard library only):
// writes one fixed one-liner about a meeting that should have been an email to
// /output/entry.txt. The judge reads exactly the bytes written, so the joke carries
// no trailing line end. The string never changes, so both grader runs produce
// identical bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One fixed line (111 characters, one line, plain text): the count, the waste and
// the reframe, with the turn landing on the last two words — the meeting was never
// a meeting at all, just a worse email.
const JOKE =
  'Nine people, forty-five minutes, zero decisions — the meeting was an email with extra steps and worse lighting.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
