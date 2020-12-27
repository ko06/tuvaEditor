import { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Toolbar from './Toolbar';
import { tuvaEditor } from '../utility';
import PropTypes from 'prop-types';


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
      e.stopPropagation();
      e.preventDefault();

      let selection = window.getSelection(),
        range = selection.getRangeAt(0),
        newline = document.createTextNode('\n');

      range.deleteContents();
      range.insertNode(newline);
      range.setStartAfter(newline);
      range.setEndAfter(newline);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
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

TuvaEditor.defaultProps = { config: {} }

TuvaEditor.propTypes = {
  config: PropTypes.object,
};
export default TuvaEditor;
