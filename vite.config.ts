import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["vite.svg"],
      manifest: {
        name: "Shopping List Helper",
        short_name: "SLH",
        description: "Descrição do app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "vite.svg",
            sizes: "192x192",
            type: "image/svg",
          },
        ],
      },
      registerType: "autoUpdate",
    }),
  ],
});
