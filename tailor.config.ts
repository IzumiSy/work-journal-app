import { defineConfig } from "@tailor-platform/tailor-sdk";

export default defineConfig({
  workspaceId: process.env.WORKSPACE_ID!,
  name: "work-journal-app",
  pipeline: {
    "main-pipeline": {
      files: [`./src/resolvers/**/*.ts`],
    },
  },
  db: {
    "main-db": { files: [`./src/tailordb/**/*.ts`] },
  },
});
