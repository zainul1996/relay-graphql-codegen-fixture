import assert from "node:assert/strict";
import test from "node:test";

import { viewerEmail, viewerLabel } from "../src/viewer.ts";

test("viewerLabel prefers the display name", () => {
  assert.equal(
    viewerLabel({ id: "1", login: "octo", name: "Octo Cat" }),
    "Octo Cat",
  );
});

test("viewerLabel falls back to the login", () => {
  assert.equal(viewerLabel({ id: "1", login: "octo", name: null }), "octo");
});

test("viewerLabel handles a missing user", () => {
  assert.equal(viewerLabel(null), "anonymous");
});

test("viewerEmail returns the email", () => {
  assert.equal(
    viewerEmail({ id: "1", login: "octo", name: "Octo Cat", email: "octo@example.com" }),
    "octo@example.com",
  );
});

test("viewerEmail returns null when email is absent", () => {
  assert.equal(viewerEmail({ id: "1", login: "octo", name: null, email: null }), null);
});

test("viewerEmail handles a missing user", () => {
  assert.equal(viewerEmail(null), null);
});
