import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Bruh Dot Times",
        short_name: "BDT",
        description: "Left, Middle, and Right News Aggregator",
        start_url: "/",
        display: "standalone",
        theme_color: "#4D4D4D",
        background_color: "#ffffff",
        icons: [
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/bruh-dot-times-screenshot-wide.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/bruh-dot-times-screenshot-wide.png",
            sizes: "1920x1080",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
