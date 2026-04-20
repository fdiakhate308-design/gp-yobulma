import { defineConfig } from "vite"
import { TanStackStart } from "@tanstack/react-start/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    TanStackStart({
      adapter: "@tanstack/react-start/adapter-vercel"
    }),
    tailwindcss(),
  ],
})
