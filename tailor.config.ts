import { defineAuth, defineConfig } from "@tailor-platform/tailor-sdk";
import { user } from "./src/tailordb/user";

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
  auth: defineAuth("main-auth", {
    userProfile: {
      type: user,
      usernameField: "email",
      attributes: { roles: true },
    },
    idProvider: {
      name: "main-idp",
      kind: "BuiltInIdP",
      namespace: "idp",
      clientName: "builtin-idp-client",
    },
  }),
});
