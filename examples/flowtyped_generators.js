// @flow


/**
* Generators need to type their returns if exported.
* <string, number, boolean> - will yield strings, return a number, and will receive booleans from its caller.
*/
export function* myGenerator(): Generator<string, number, boolean> {
  yield ...;
}