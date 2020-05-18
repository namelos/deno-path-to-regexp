import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { add } from './mod.ts'

Deno.test('add', () => {
  assertEquals(add(1, 2), 3)
})