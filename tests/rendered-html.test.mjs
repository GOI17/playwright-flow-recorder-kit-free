import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Alfred Labs sales landing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Playwright Flow Recorder Kit \| Alfred Labs<\/title>/i);
  assert.match(html, /Record the journey/);
  assert.match(html, /Hand off the evidence/);
  assert.match(html, /Journey JSON/);
  assert.match(html, /Playwright/);
  assert.match(html, /Gherkin/);
  assert.match(html, /<sup>\$<\/sup>49/);
  assert.match(html, /<sup>\$<\/sup>199/);
  assert.match(html, /alfredlabs\.help@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
