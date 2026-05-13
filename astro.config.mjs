// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  site: "https://pablofallas.name",
  output: "static",
  build: {
    assets: "assets",
    // Emit /impressum.html etc. at the root so they resolve directly on
    // S3 without needing a CloudFront URL-rewrite function for clean URLs.
    format: "file",
  },
  integrations: [
    sitemap(),
    icon(),
    AstroPWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "apple-touch-icon.png",
        "pablo-profile.jpg",
        "og-image.png",
        "robots.txt",
      ],
      manifest: {
        name: "Pablo Fallas Rodríguez - Infrastructure Engineering Manager",
        short_name: "Pablo Fallas",
        description:
          "Infrastructure Engineering Manager building reliable, cost-efficient cloud platforms. DevOps, SRE and FinOps practitioner based in Berlin.",
        theme_color: "#07173A",
        background_color: "#07173A",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // Fonts are self-hosted, so the woff2 + fonts.css land in the
        // standard precache via these globs. No third-party runtimeCaching
        // rules needed.
        globPatterns: ["**/*.{js,css,html,ico,jpg,png,svg,webp,woff2}"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});
