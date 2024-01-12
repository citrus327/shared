# @citrus327/theme-preset

a customized TailwindCss preset.

## Usage

```js
import preset from "@citrus327/theme-preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  presets: [preset],
  plugins: [],
};

```

and include styles in your css file:

```css
@import "@citrus327/theme-preset/stylesheet";

@tailwind base;
@tailwind components;
@tailwind utilities;
```