import { defineConfig } from "vite"
import { TanStackStart } from "@tanstack/start/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    TanStackStart({
      adapter: "netlify"
    }),
    tailwindcss(),
  ],
})
