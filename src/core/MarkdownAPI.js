export function tuvaMarkdown(src) {
  src = checkBold(src)
  src = checkItalic(src)
  src = checkHeader(src)
  src = checkAtag(src)
  src = checkBlockquote(src)
  src = checkAtag(src)
  src = checkHRrule(src)

  return src;
}

export function checkHRrule(src) {
  return src
  //.replace(/^([*\-=_] *){3,}$/gm, '<hr/>')
}

export function checkBold(src) {
  return src.replace(/\*\*(.*?)\*\*/gi, '<strong>$1</strong>')
}

export function checkItalic(src) {
  return src.replace(/\*(.*?)\*/gi, '<i>$1</i>')
}

export function checkAtag(src) {
  return src.replace(/\[(.*?)\]\((.*?)\)/gi, '<a href="$2">$1</a>');
}

export function checkHeader(src) {
  return src.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
}

export function checkBlockquote(src) {
  return src.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
}
