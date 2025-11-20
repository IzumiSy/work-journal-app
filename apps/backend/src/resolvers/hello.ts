import { createResolver, t } from "@tailor-platform/sdk";

export default createResolver({
  name: "hello",
  operation: "query",
  input: {
    name: t.string(),
  },
  body: (context) => {
    return {
      message: `Hello, ${context.input.name}!`,
    };
  },
  output: {
    message: t.string(),
  },
});
