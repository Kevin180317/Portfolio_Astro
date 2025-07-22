import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://okhuysendev.vercel.app/",
  integrations: [tailwind(), sitemap(), robotsTxt(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
