export function tuvaMarkdown(src) {
  src = '\n' + src + '\n'
  src = checkBold(src)
  src = checkItalic(src)
  src = checkHeader(src)
  src = checkAtag(src)
  // src = checkBlockquote(src)
  src = checkAtag(src)
  src = checkHRrule(src)
  src = checkCodeBlock(src)
  return src;
}

export function checkHRrule(src) {
  return src.replace(/\n((\-{3,})|(={3,}))/g, "\n<hr/>")
}

export function checkImage(src) {
  return src.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
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
  return src.replace(/^###### (.*$)/gim, '\n<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '\n<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '\n<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '\n<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '\n<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '\n<h1>$1</h1>')
}

export function checkBlockquote(src) {
  return src.replace( /\n(&gt;|\>)(.*)/g , '\n<blockquote>$1</blockquote>')
}

export function checkCodeBlock(src){
  return src.replace(/`([^`]+)`/g, '\n<code>$1</code>');
}