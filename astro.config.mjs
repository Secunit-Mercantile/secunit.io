import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://secunit.io",
  output: "static",
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
