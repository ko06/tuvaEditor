import { Component } from 'react';
export default class Editor extends Component {

  render() {
    const { onEditorChange,onKeyDown } = this.props;
    return (
      <div className='tuva-editor-container'>
        <div className='tuva-editor' contentEditable='true' onKeyDown={(e) => onKeyDown(e)} onInput={(e) => onEditorChange(e)}>
        </div>
      </div>
    )
  }
}