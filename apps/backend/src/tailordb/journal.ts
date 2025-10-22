import { db } from "@tailor-platform/tailor-sdk";
import { user } from "./user";
import { category } from "./category";

export const journal = db.type("Journal", {
  contents: db.string().validate(({ value }) => value.length > 0),
  tags: db.string({ array: true }),
  authorID: db.uuid().relation({
    type: "N-1",
    toward: {
      type: user,
    },
  }),
  categoryIDs: db.uuid({ array: true }).relation({
    type: "keyOnly",
    toward: {
      type: category,
    },
  }),
  createdAt: db.datetime().hooks({
    create: () => `(new Date()).toISOString()`,
  }),
  updatedAt: db.datetime().hooks({
    update: () => `(new Date()).toISOString()`,
  }),
});
