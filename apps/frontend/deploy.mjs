#!/usr/bin/env zx

await $`tailorctl workspace staticwebsite deploy --name main-app --directory ./dist -w ${process.env.WORKSPACE_ID}`.pipe(
  process.stdout
);
