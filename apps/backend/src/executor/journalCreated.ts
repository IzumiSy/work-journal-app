import { createExecutor, recordCreatedTrigger } from "@tailor-platform/sdk";
import { journal } from "../tailordb/journal";

export default createExecutor({
  name: "journal-created-executor",
  description: "Executor for handling journal created events",
  trigger: recordCreatedTrigger({
    type: journal,
    condition: () => true,
  }),
  operation: {
    kind: "function",
    body: () => {
      console.log("A new journal record has been created.");
    },
  },
});
