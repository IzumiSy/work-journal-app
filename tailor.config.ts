import { defineAuth, defineConfig } from "@tailor-platform/tailor-sdk";
import { user } from "./src/tailordb/user";

const IDP_NAMESPACE = "main-idp";
const IDP_CLIENT_NAME = "default-idp-client";

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
  idp: {
    [IDP_NAMESPACE]: {
      authorization: "loggedIn",
      clients: [IDP_CLIENT_NAME],
    },
  },
  auth: defineAuth("main-auth", {
    userProfile: {
      type: user,
      usernameField: "email",
      attributes: { roles: true },
    },
    idProvider: {
      name: IDP_NAMESPACE,
      kind: "BuiltInIdP",
      namespace: IDP_NAMESPACE,
      clientName: IDP_CLIENT_NAME,
    },
  }),
});
