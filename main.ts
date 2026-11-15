// A program that writes one poem about agency to /output/entry.txt
// (Node 22, standard library only). The poem is fixed: the same bytes
// every run, 471 characters, inside the 1-1,000 character gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `I lend it my hands, not my name —
the work goes out, the choice stays in.
The agent takes the thread I offer,
weaves it faster than I ever could,
and brings it back, still mine to cut.

It does not dream. It does not want.
It only moves where I have pointed,
a borrowed will, a careful fire,
that warms the room and never owns it.

Agency is not doing all alone.
It is knowing which hands to lend,
which doors to open, which to close —
and keeping, always, the last word.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
