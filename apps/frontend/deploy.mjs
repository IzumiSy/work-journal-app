#!/usr/bin/env zx

await $`tailorctl workspace staticwebsite deploy --name main-app --directory ./dist`.pipe(
  process.stdout
);
