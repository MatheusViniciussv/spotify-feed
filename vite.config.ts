import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { UserConfig} from "vite";
import type { InlineConfig } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup.ts"],
  },
} as UserConfig & {
  test: InlineConfig;
});
