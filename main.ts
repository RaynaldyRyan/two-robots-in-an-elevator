import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Your fan sped up, so I'll stare at the floor indicator for four floors and call it privacy.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
