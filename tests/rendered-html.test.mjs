import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the Alfred Labs GitHub Pages landing", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Playwright Flow Recorder Kit \| Alfred Labs<\/title>/i);
  assert.match(html, /Record the journey/);
  assert.match(html, /Hand off the evidence/);
  assert.match(html, /Journey JSON/);
  assert.match(html, /Playwright/);
  assert.match(html, /Gherkin/);
  assert.match(html, /<sup>\$<\/sup>49/);
  assert.match(html, /<sup>\$<\/sup>199/);
  assert.match(html, /alfredlabs\.help@gmail\.com/);
  assert.match(html, /playwright-flow-recorder-kit-free\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  await access(new URL("../out/og.png", import.meta.url));
  await access(new URL("../out/404.html", import.meta.url));
  await access(new URL("../out/.nojekyll", import.meta.url));
});
