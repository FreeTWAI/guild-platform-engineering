import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderWorkspace } from '../scripts/build.mjs';
import { readFile } from 'node:fs/promises';

const workspace = JSON.parse(await readFile(new URL('../workspace.json', import.meta.url), 'utf8'));

test('renderWorkspace performance', () => {
  const start = performance.now();
  for (let i = 0; i < 10000; i++) {
    renderWorkspace(workspace);
  }
  const end = performance.now();
  const time = end - start;
  assert.ok(time < 200, `renderWorkspace took ${time}ms for 10000 iterations, expected < 200ms`);
});
