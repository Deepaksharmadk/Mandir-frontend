import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ Required for JSX/React support

export default defineConfig({
    plugins: [react()],
});
