import React from "react";
import './input.css';

class Input extends React.Component {
  render() {
    let style = {
      fontFamily: `${this.props.fontFamily}, sans-serif`,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      color: this.props.color,
      fontStyle: this.props.italic ? 'italic' : 'normal'
    }

    return (
      <input type="text" onChange={this.props.onChange} value={this.props.text} style={style} className="textInput"></input>
    )
  }
}

export default Input;