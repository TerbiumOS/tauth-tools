"use strict";

import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tauthPath = resolve(__dirname, "..", "dist");

export { tauthPath };
