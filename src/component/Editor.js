import { Component } from 'react';

export default class Editor extends Component {
  
  render() {
    const { onEditorChange } = this.props;
    return (
      <div>
        <textarea onChange={(e) => onEditorChange(e)} rows='10'></textarea>
      </div>
    )
  }
}