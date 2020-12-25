import { getValueFromObj } from './utility'
import { checkBold, checkHeader, tuvaMarkdown, checkItalic, checkAtag } from '../src/core/MarkdownAPI'


// header

test('it should return h1 tag : 1', () => {
  expect(checkHeader('# selva')).toBe('<h1>selva</h1>')
});

test('it should return h2 tag : 2', () => {
  expect(checkHeader('## selva')).toBe('<h2>selva</h2>')
});

// strong and italic

test('it should return italic tag : 1', () => {
  expect(checkItalic('*selva*')).toBe('<i>selva</i>')
});

test('it should return italic tag : 2', () => {
  expect(checkItalic('* selva *')).toBe('<i>selva</i>')
});


test('it should return strong tag : 1', () => {
  expect(checkBold('**selva**')).toBe('<strong>selva</strong>')
});

test('it should return strong tag : 2', () => {
  expect(checkBold('***selva**')).toBe('<strong>*selva</strong>')
});

// link 


test('it should return  link', () => {
  expect(checkAtag('[google](www.google.com)')).toBe('<a href="www.google.com">google</a>')
});

test('it should return link with out href', () => {
  expect(checkAtag('[google]()')).toBe('<a href=""></a>')
});

test('it should not return link', () => {
  expect(checkAtag('[google]')).toBe('[google]')
});


test('it should return obj keys with false option', () => {
  expect(getValueFromObj([
    { type: 'John', age: 23 },
    { type: 'Andrew', age: 3 },
    { type: 'Peter', age: 8 },
    { type: 'Hanna', age: 14 },
    { type: 'Adam', age: 37 }])).toMatchObject({John: false, Andrew: false, Peter: false, Hanna: false, Adam: false})
});



// overall testing


test('it should return strong tag and astrisk too : 2', () => {
  expect(tuvaMarkdown('hi selvagana **Good * hi * morning**')).toBe('hi selvagana <strong>Good <i> hi </i> morning</strong>')
});

test('it should return h2 tag with strong : 1', () => {
  expect(tuvaMarkdown('## selva **ganapathi**')).toBe('<h2>selva <strong>ganapathi</strong></h2>')
});


test('it should return message with strong tag : 3', () => {
  expect(tuvaMarkdown('hi selva ji **Good morning**')).toBe('hi selva ji <strong>Good morning</strong>')
});

test('it should return strong tag and astrisk too : 4', () => {
  expect(tuvaMarkdown('hi selvagana **Good * hi * morning**')).toBe('hi selvagana <strong>Good <i> hi </i> morning</strong>')
});

test('it should return message without strong tag : 5', () => {
  expect(tuvaMarkdown('hi selva **Good morning')).toBe('hi selva **Good morning')
});
