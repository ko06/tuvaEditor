/*********************************************/
// Native support for content editor div, 30+ exceCommands are availabe
// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
/*********************************************/


export function insertBold() { document.execCommand('bold', false, null) }
export function insertItalic() { document.execCommand('italic', false, null) }
export function insertUnorderedList() { document.execCommand('insertUnorderedList', false, null) }
export function insertStrikeThrough() { document.execCommand('strikeThrough', false, null) }