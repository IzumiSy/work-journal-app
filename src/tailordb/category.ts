import { db } from "@tailor-platform/tailor-sdk";

export const category = db.type("Category", {
  name: db.string().validate(({ value }) => value.length > 0),
  createdAt: db.datetime().hooks({
    create: () => `(new Date()).toISOString()`,
  }),
  journalCounts: db.int().hooks({
    create: () => 0,
  }),
});
