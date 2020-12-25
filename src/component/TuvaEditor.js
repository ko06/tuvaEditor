import { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Toolbar from './Toolbar';
import { tuvaEditor } from '../utility'

class TuvaEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    let { config } = this.props
    this.addtionalButton = []
    if (config) {
      if (config.addtionalButton) {
        this.addtionalButton = config.addtionalButton
      } if (config['tuvaWillUpdate']) {
        this.cb = config['tuvaWillUpdate']
      }
    }
  }

  onEditorChange = (e) => {
    this.setState({
      editorText: e.target.innerHTML,
      content: tuvaEditor(e.target.innerHTML, this.cb)
    })
  }


  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // prevent the default behaviour of return key pressed
      e.preventDefault()
      let docFragment = document.createDocumentFragment();

      //add a new line
      let newEle = document.createTextNode('\n');
      docFragment.appendChild(newEle);

      //add the br, or p, or something else
      newEle = document.createElement('br');
      docFragment.appendChild(newEle);

      //make the br replace selection
      let range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      range.insertNode(docFragment);

      //create a new range
      range = document.createRange();
      range.setStartAfter(newEle);
      range.collapse(true);

      //make the cursor there
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      return false;
    }
  }

  render() {
    return (
      <>
        <Toolbar text={this.state.editorText} addtionalButton={this.addtionalButton}></Toolbar>
        <div className='tuva-container'>
          <Editor onKeyDown={this.onKeyDown} onEditorChange={this.onEditorChange} cb={this.cb}></Editor>
          <Preview htmlContent={this.state.content}></Preview>
        </div>
      </>
    );
  }
}

TuvaEditor.defaultProps = { config: [] }


export default TuvaEditor;
