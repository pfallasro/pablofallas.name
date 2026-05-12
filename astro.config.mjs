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
  },
  integrations: [
    sitemap(),
    icon(),
    AstroPWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "pablo-profile.jpg",
        "og-image.png",
        "robots.txt",
      ],
      manifest: {
        name: "Pablo Fallas - Infrastructure Engineering Manager",
        short_name: "Pablo Fallas",
        description:
          "Portfolio website showcasing DevOps expertise, cloud infrastructure, and automation solutions",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pablo-profile.jpg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,jpg,png,svg,webp,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
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
