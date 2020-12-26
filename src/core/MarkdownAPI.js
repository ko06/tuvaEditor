export function tuvaMarkdown(src) {

  // I have spited every function so we can easily wrote unite test cases
  src = checkBold(src)
  src = checkItalic(src)
  src = checkHeader(src)
  src = checkAtag(src)
  // src = checkBlockquote(src)
  src = checkHRrule(src)
  src = checkPre(src)
  src = checkCodeBlock(src)
  src = checkUnordertList(src)
  src = checkOrdertList(src)

  // default p tag to avoid empty string
  src= src.replace(/^\s*(\n)?(.+)/gm, function(m){
      return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
    });
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
  return src.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
}

export function checkCodeBlock(src) {
  return src.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '\n<code>$1</code>');
}

export function checkUnordertList(src) {
  src = src.replace(/^\s*\n\*/gm, '<ul>\n*');
  src = src.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  src = src.replace(/^\*(.+)/gm, '<li>$1</li>');
  return src
}

export function checkOrdertList(src) {
  src = src.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  src = src.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  src = src.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  return src;
} 

export function checkPre(src) {
   src = src.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
   src = src.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
   return src;
}