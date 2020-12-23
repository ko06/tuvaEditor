import './App.scss';
import { Component } from 'react';
import Editor from './component/Editor';
import Preview from './component/Preview';
import ToolBar from './component/Toolbar'
import { tuvaEditor } from './utility'

class App extends Component {
  constructor() {
    super()
    this.state = { editorText: undefined }
  }
  onEditorChange = (text) => {
    console.log(text.target.value)
    this.setState({
      editorText: text.target.value,
      content: tuvaEditor(text.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <ToolBar></ToolBar>
          <Editor onEditorChange={this.onEditorChange}></Editor>
          <Preview htmlContent={this.state.content}></Preview>
        </div>
      </div >
    );
  }
}

export default App;
