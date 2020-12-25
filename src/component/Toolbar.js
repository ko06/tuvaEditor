import { Component } from 'react';
import { buttons, getValueFromObj } from '../utility';
import PropTypes from 'prop-types';


export default class Toolbar extends Component {

  constructor(props) {
    super(props)

    let buttonOption;
    if (Array.isArray(props.addtionalButton)) {
      buttonOption = { buttons: [...buttons, ...this.props.addtionalButton] }
    } else {
      buttonOption = { buttons }
    }
    let buttonDisable = getValueFromObj(buttonOption.buttons)
    this.state = { buttons: buttonOption.buttons,buttonDisable: buttonDisable }
  }

  toolbarButtonClicked = (e) => {
    let {buttonDisable} = this.state;
    let triggeredButton = this.state.buttons.find(obj => obj.type === e.currentTarget.dataset.name);
    buttonDisable[triggeredButton.type] = !buttonDisable[triggeredButton.type]
    console.log(triggeredButton)
    this.setState({
      buttonDisable
    })
    triggeredButton.execCommand()
  }


  generatToolbarButtons = () => {
    let data = this.state.buttons.map((data, id) => (<li key={id}> <button className={`btn-primary ${this.state.buttonDisable[data.type] ? 'active' : ''}`} type="button" onClick={this.toolbarButtonClicked} data-name={data.type}> {data.svgIcon} </button></li>))
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