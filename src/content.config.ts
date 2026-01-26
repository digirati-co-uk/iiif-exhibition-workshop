import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Add a default value to the built-in `banner` field.
        banner: z.object({ content: z.string() }).default({
          content: `Visit the <a class="underline" target="_blank" href="https://manifest-editor.digirati.services/">Manifest Editor</a> and <a target="_blank" href="https://exhibitionviewer.org/" class="underline">Exhibition Viewer</a> websites`,
        }),
      }),
    }),
  }),
};
