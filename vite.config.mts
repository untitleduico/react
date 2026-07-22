import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    // The "@" path alias is provided by tsconfig.json "paths" (read by Storybook's Next
    // framework). Do NOT add a Vite resolve.alias to the project root here — Vite 8's native
    // (rolldown) alias plugin normalizes a root-equal replacement to "." and fails to build.
    build: {
        target: "esnext",
    },
});
