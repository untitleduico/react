import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./") }],
    },
    build: {
        target: "esnext",
    },
});
