import React from "react";
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "type here"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.dir(event);
    this.setState({
      input: event.target.value
    });
  }

  render() {
    let style = {
      fontFamily: this.props.fontFamily,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      color: this.props.color,
      fontStyle: this.props.italic ? 'italic' : 'normal'
    }

    return (
      <input type="text" onChange={this.handleInputChange} value={this.state.input} style={style} contentEditable="true"></input>
    )
  }
}

Input.defaultProps = {
  fontFamily: "Roboto",
  fontSize: "24pt",
  fontWeight: 500,
  color: "#000000",
  italic: false
};

export default Input;