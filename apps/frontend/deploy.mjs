#!/usr/bin/env zx

await $`tailorctl workspace staticwebsite deploy --name main-app --directory ./dist -w ${WORKSPACE_ID}`.pipe(
  process.stdout
);
