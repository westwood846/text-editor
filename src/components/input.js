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
      "fontFamily": "Roboto",
      "fontSize": "24pt"
    }

    return (
      <input type="text" onChange={this.handleInputChange} value={this.state.input} style={style} contentEditable="true"></input>
    )
  }
}

export default Input;