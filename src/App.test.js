import { tuvaEditor, isbold } from './utility'

test('it should return paragraph tag : 1', () => {
  expect(tuvaEditor('selva')).toBe('<p>selva</p>')
});

test('it should return paragraph tag : 2', () => {
  expect(tuvaEditor('<p>selva</p>')).toBe('<p><p>selva</p></p>')
});

test('it should return strong tag : 1', () => {
  expect(isbold('**selva**')).toBe('<strong>selva</strong>')
});

test('it should return strong tag : 2', () => {
  expect(isbold('***selva**')).toBe('<strong>*selva</strong>')
});

test('it should return paragraph with strong tag : 3', () => {
  expect(tuvaEditor('hi selva **Good morning**')).toBe('<p>hi selva <strong>Good morning</strong></p>')
});

test('it should return paragraph with strong tag astrisk too : 4', () => {
  expect(tuvaEditor('hi selva **Good * * morning**')).toBe('<p>hi selva <strong>Good * * morning</strong></p>')
});

test('it should return paragraph without strong tag : 5', () => {
  expect(tuvaEditor('hi selva **Good * * morning')).toBe('<p>hi selva **Good * * morning</p>')
});
