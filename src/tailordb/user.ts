import { db } from "@tailor-platform/tailor-sdk";

export const user = db.type("User", {
  name: db.string(),
  email: db.string().unique(),
  roles: db.string({ array: true }),
  createdAt: db.datetime().hooks({
    create: () => `(new Date()).toISOString()`,
  }),
});
