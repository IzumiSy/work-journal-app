import { db } from "@tailor-platform/tailor-sdk";

export const user = db.type("User", {
  identifier: db.string().validate(({ value }) => value.length > 0),
  displayName: db.string().validate(({ value }) => value.length > 0),
  createdAt: db.datetime().hooks({
    create: () => `(new Date()).toISOString()`,
  }),
});
