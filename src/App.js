import './App.scss';
import { Component } from 'react';
import Editor from './component/Editor';
import Preview from './component/Preview';
import Toolbar from './component/Toolbar';
import { tuvaEditor } from './utility'

class App extends Component {
  constructor() {
    super()
    this.state = { editorText: undefined }
  }
  onEditorChange = (text) => {
    this.setState({
      editorText: text.target.innerHTML,
      content: tuvaEditor(text.target.innerHTML)
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <div className='tuva-container'>
          <Editor onEditorChange={this.onEditorChange}></Editor>
          <Preview htmlContent={this.state.content}></Preview>
        </div>
      </div >
    );
  }
}

export default App;
