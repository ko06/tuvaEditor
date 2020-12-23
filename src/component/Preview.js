import { Component } from 'react';

export default class Preview extends Component {

  render() {
    const { htmlContent } = this.props;
    return (
      <div className={'preview'}>
        <textarea value={htmlContent} rows='10'></textarea>
      </div>
    )
  }
}