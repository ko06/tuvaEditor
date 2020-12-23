export function tuvaEditor (text) {
  let paragraph_rejax = /(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g;
  text = '\n' + text + '\n'; // to check end of line
  text = text.replace(paragraph_rejax, function (all, content) { return `<p>${content}<p>` });
  text = isbold(text)
  return text.trim();
};

export function isbold (text) {
  var bold = /\*\*(.*?)\*\*/gm;
  var html = text.replace(bold, '<strong>$1</strong>');
  return html;
}