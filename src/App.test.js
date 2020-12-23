import { tuvaEditor, isbold } from './utility'

test('it should return paragraph tag', () => {
  expect(tuvaEditor('selva')).toBe('<p>selva</p>')
});

test('it should return strong tag', () => {
  expect(isbold('**selva**')).toBe('<strong>selva</strong>')
});

test('it should return paragraph with strong tag', () => {
  expect(tuvaEditor('hi selva **Good morning**')).toBe('<p>hi selva <strong>Good morning</strong></p>')
});
