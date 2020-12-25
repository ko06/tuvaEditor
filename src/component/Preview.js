import { Component } from 'react';

export default class Preview extends Component {

  render() {
    const { htmlContent } = this.props;
    return (
      <div className={'preview'}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    )
  }
}