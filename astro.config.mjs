import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://657c2f6ab617380009edcc4c--adorable-douhua-b07f2e.netlify.app/',
  integrations: [react()]
});