import { insertBold, insertItalic, insertUnorderedList, insertStrikeThrough } from '../src/core/BrowserAPI'
import { tuvaMarkdown } from '../src/core/MarkdownAPI'

export function tuvaEditor(text, cb = (text) => text) {
  // let paragraph_rejax = /(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g;
  // text = '\n' + text + '\n'; // to check end of line
  // text = text.replace(paragraph_rejax, function (all, content) { return `<p>${content}</p>` });
  // text = isbold(text)

  if (text) {
    // for own markup logics
    text = tuvaMarkdown(text)

    // for user perspective
    text = cb(text)
  }

  return text.trim();
};

export function isbold(text) {
  var bold = /\*\*(.*?)\*\*/gm;
  var html = text.replace(bold, '<strong>$1</strong>');
  return html;
}

export function getValueFromObj(data) {
  let output = {};
  for (let i = 0; i < data.length; i++) {
    output[data[i].type] = false
  }
  return output;
}


export const buttons = [{
  type: 'bold',
  svgIcon: <svg role="img" width="12" height="12" viewBox="0 0 384 512"><path fill="currentColor" d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"></path></svg>,
  execCommand: function excuteCommand() {
    insertBold()
  }
}, {
  type: 'italic',
  svgIcon: <svg data-name="italic" width="12" height="12" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"></path></svg>,
  execCommand: function excuteCommand() {
    insertItalic()
  },
}, {
  type: 'strikeThrough',
  svgIcon: <svg data-name="strikethrough" width="12" height="12" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z"></path></svg>,
  execCommand: function excuteCommand() {
    insertStrikeThrough()
  },
},
{
  type: 'insertUnorderedList',
  svgIcon: <svg data-name="unordered-list" width="12" height="12" viewBox="0 0 512 512"><path fill="currentColor" d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>,
  execCommand: function excuteCommand() {
    insertUnorderedList()
  },
}]