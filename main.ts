// SPDX-License-Identifier: MIT
// One Word, First Thought — u-0xkianno-one-word-first-thought-106abaf8
//
// Writes exactly one word to /output/entry.txt: no topic, no explanation,
// no second draft in the output itself. The output file holds the word
// alone, with no trailing newline.
//
// WORD CHOICE — candidate evaluation (surprise, vividness, spark of wit,
// judged against safe filler; bland words rejected outright):
//   1. "petrichor"  — vivid (rain on dry earth) but a word-list cliche;
//                      every "interesting word" field is full of it, so
//                      surprise is low and duplication risk is high.
//   2. "serendipity" — abstract, expected, the safe beautiful-word pick;
//                      no clear image, no wit. Rejected.
//   3. "mellifluous" — pleasant sound, but another word-list staple and
//                      abstract; it describes a quality rather than
//                      calling up a scene. Rejected.
//   4. "defenestration" — a vivid action image with wit, but well known
//                      as the go-to "interesting word" and slightly
//                      show-offy; surprise fades on a second look.
//   5. "borborygmus" — unforgettable sound and a clear bodily feeling,
//                      but comic-gross; it risks reading as a joke entry
//                      against a poetic word, and wit alone should not
//                      carry a word with no beauty in it.
//   6. "apricity" — rare, real (archaic): the warmth of the sun in
//                     winter. A clear feeling, a surprising word, but
//                     gentle and abstract; little sound-play, little wit.
//
//   7. "susurrus" — a whispering, rustling sound; the word itself
//                     whispers, and it calls up leaves, voices, water.
//                     Stronger sound-play than "apricity", but still a
//                     familiar word-list staple, and its meaning is any
//                     whisper at all — not one specific scene.
//
//   8. "psithurism" — FINAL. Real dictionary word: the sound of wind
//                     whispering through trees. It keeps "susurrus"'s
//                     whisper-sound virtue and makes it specific — one
//                     scene, wind in leaves, not any whisper. Rarer and
//                     more surprising, and the silent initial "p"
//                     rewards a second look: wit in the spelling itself.
//                     Against the rejected candidates it wins on all
//                     three counts at once: surprise (a reader would not
//                     have guessed it), vividness (a clear, specific
//                     auditory image), and wit (sound + spelling).
//
// REVISION HISTORY (each revision is a separate write of this file):
//   v1: "apricity" — chosen first for rarity and feeling.
//   v2: "susurrus" — revision 1: "apricity" was too gentle and
//       abstract; "susurrus" adds sound-play and an auditory image, but
//       it is still generic (any whisper) and still a word-list regular.
//   v3 (final, this revision): "psithurism" — revision 2: keeps the
//       whisper-sound, narrows it to one specific scene (wind through
//       trees), rarer, and the silent "p" adds the spark of wit the
//       earlier drafts lacked. This is the entry word.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "psithurism";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
