import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Next.js 16 restricts the optimizer to qualities listed here (default [75]).
  // The hero photograph is a low-resolution source, so allow near-lossless
  // re-encoding to avoid adding a second generation of compression artefacts.
  images: {
    qualities: [75, 90, 95, 100],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    // Explicit project root prevents Turbopack from walking up to the home
    // directory lockfile in this nested Windows workspace.
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
