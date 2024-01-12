import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";
// const postcss = require("postcss");
// const autoprefixer = require("autoprefixer");
// const postcssPresetEnv = require("postcss-preset-env");
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import stylePlugin from "esbuild-style-plugin";
import path from "node:path";
import url from "node:url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  injectStyle: true,
  dts: true,
  format: ["cjs", "esm"],
});
