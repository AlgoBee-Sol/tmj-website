import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Enable R2/KV-backed incremental cache, queues, tags, etc. here if needed.
  // See https://opennext.js.org/cloudflare/caching for options.
});
