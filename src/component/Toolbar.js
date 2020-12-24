import { Component } from 'react';
import { buttons } from '../utility';
import PropTypes from 'prop-types';


export default class Toolbar extends Component {

  constructor(props) {
    super(props)
    if (Array.isArray(props.data)) {
      this.state = { buttons: [...buttons, ...this.props.addtionalButton] }
    } else {
      this.state = { buttons }
    }
  }

  toolbarButtonClicked = (e) => {
    let triggeredButton = this.state.buttons.find(obj => obj.type === e.currentTarget.dataset.name);
    triggeredButton.execCommand()
  }


  generatToolbarButtons = () => {
    let data = this.state.buttons.map((data, id) => (<li key={id}> <button type="button" onClick={this.toolbarButtonClicked} data-name={data.type}> {data.svgIcon} </button></li>))
    return data;
  }

  render() {
    return (
      <div className="tuva-editor-toolbar">
        <ul>
          {this.generatToolbarButtons()}
        </ul>
      </div>
    )
  }
}

Toolbar.defaultProps = { addtionalButton: [] }
Toolbar.propTypes = {
  addtionalButton: PropTypes.array,
};