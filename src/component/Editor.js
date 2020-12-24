import { Component } from 'react';


export default class Editor extends Component {

  render() {
    const { onEditorChange } = this.props;
    return (
      <div className='tuva-editor-container'>
        <div className='tuva-editor' contentEditable='true' onInput={(e) => onEditorChange(e)}></div>
      </div>
    )
  }
}