import { defineConfig } from "vite"
import { TanStackStart } from "@tanstack/react-start"
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
