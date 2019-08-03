import React from 'react';
import './App.css';
import Input from './components/input';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      italic: false,
      fontWeight: 500,
      fontSize: 24,
      fontFamily: "Roboto",
      color: "#000000",
    }

    this.handleItalicChange     = this.handleItalicChange.bind(this);
    this.handleFontWeightChange = this.handleFontWeightChange.bind(this);
    this.handleFontSizeChange   = this.handleFontSizeChange.bind(this);
    this.handleFontFamilyChange = this.handleFontFamilyChange.bind(this);
    this.handleColorChange      = this.handleColorChange.bind(this);
  }

  handleItalicChange     = event => this.setState({italic:     event.target.checked})
  handleFontWeightChange = event => this.setState({fontWeight: event.target.value})
  handleFontSizeChange   = event => this.setState({fontSize:   event.target.value})
  handleFontFamilyChange = event => this.setState({fontFamily: event.target.value})
  handleColorChange      = event => this.setState({color:      event.target.value})

  render() {
    return (
      <div className="App">
        <Input
          italic={this.state.italic}
          fontWeight={this.state.fontWeight}
          fontSize={this.state.fontSize + "pt"}
          fontFamily={this.state.fontFamily}
          color={this.state.color}
        ></Input>
        <div className="controls">
          <label>
            italic
            <input className="italicCheckbox"  type="checkbox" checked={this.state.italic} onChange={this.handleItalicChange}></input>
          </label>
          <label>
            font weight
            <input className="fontWeightInput" type="number" step="100" min="100" max="900" value={this.state.fontWeight} onChange={this.handleFontWeightChange}></input>
          </label>
          <label>
            font size
            <input className="fontSizeInput"   type="number" step="1" min="8" max="128" value={this.state.fontSize} onChange={this.handleFontSizeChange}></input>
          </label>
          <label>
            font family
            <select className="fontFamilyInput" value={this.state.fontFamily} onChange={this.handleFontFamilyChange}>
              <option>Open Sans</option>
              <option>Lato</option>
              <option>Roboto</option>
            </select>
          </label>
          <label>
            color
            <input className="colorInput"      type="color" value={this.state.color} onChange={this.handleColorChange}></input>
          </label>
        </div>
      </div>
    );
  }
}

export default App;
