import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    root: "./src",
    build: {
      outDir: "../dist",
    },
    server: {
      port: 3000,
    },
    cors: true,
    define: {
      "process.env.VIEW_TYPE": JSON.stringify(env.VITE_VIEW_TYPE || "default"),
    },
  };
});
