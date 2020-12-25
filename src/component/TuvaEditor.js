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

  render() {
    return (
      <>
        <Toolbar text={this.state.editorText} addtionalButton={this.addtionalButton}></Toolbar>
        <div className='tuva-container'>
          <Editor onEditorChange={this.onEditorChange} cb={this.cb}></Editor>
          <Preview htmlContent={this.state.content}></Preview>
        </div>
      </>
    );
  }
}

TuvaEditor.defaultProps = { config: [] }


export default TuvaEditor;
