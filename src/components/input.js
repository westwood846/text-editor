import React from "react";

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
    return (
      <input type="text" onChange={this.handleInputChange} value={this.state.input}></input>
    )
  }
}

export default Input;