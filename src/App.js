import React from 'react';
import './App.css';
import Input from './components/input';

class App extends React.Component {
  defaultState = {
    italic:     false,
    fontWeight: 500,
    fontSize:   24,
    fontFamily: "Roboto",
    color:      "#000000",
    text:       "write something"
  }

  constructor(props) {
    super(props);

    let urlParams = new URLSearchParams(window.location.search);

    this.state = {
      italic:     urlParams.has('italic')     ? urlParams.get('italic') === 'true'  : this.defaultState.italic,
      fontWeight: urlParams.has('fontWeight') ? Number(urlParams.get('fontWeight')) : this.defaultState.fontWeight,
      fontSize:   urlParams.has('fontSize')   ? Number(urlParams.get('fontSize'))   : this.defaultState.fontSize,
      fontFamily: urlParams.has('fontFamily') ? urlParams.get('fontFamily')         : this.defaultState.fontFamily,
      color:      urlParams.has('color')      ? urlParams.get('color')              : this.defaultState.color,
      text:       urlParams.has('text')       ? urlParams.get('text')               : this.defaultState.text
    }

    this.handleItalicChange     = this.handleItalicChange.bind(this);
    this.handleFontWeightChange = this.handleFontWeightChange.bind(this);
    this.handleFontSizeChange   = this.handleFontSizeChange.bind(this);
    this.handleFontFamilyChange = this.handleFontFamilyChange.bind(this);
    this.handleColorChange      = this.handleColorChange.bind(this);
    this.handleTextChange       = this.handleTextChange.bind(this);
  }

  handleItalicChange     = event => { 
    this.setState({italic: event.target.checked});
    this.setUrlParam("italic", event.target.checked);
  }

  handleFontWeightChange = event => {
    this.setState({fontWeight: event.target.value});
    this.setUrlParam("fontWeight", event.target.value);
  }

  handleFontSizeChange   = event => {
    this.setState({fontSize: event.target.value});
    this.setUrlParam("fontSize", event.target.value);
  }

  handleFontFamilyChange = event => {
    this.setState({fontFamily: event.target.value});
    this.setUrlParam("fontFamily", event.target.value);
  }
  
  handleColorChange      = event => {
    this.setState({color: event.target.value})
    this.setUrlParam("color", event.target.value);
  }
  
  handleTextChange = event => {
    this.setState({text: event.target.value});
    this.setUrlParam("text", event.target.value);
  }

  setUrlParam(key, value) {
    let search_params = new URLSearchParams(window.location.search); 
    search_params.set(key, value);
    if (window.history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + search_params.toString();
      window.history.pushState({path:newurl},'',newurl);
    }
  }

  render() {
    return (
      <div className="App">
        <Input
          italic={this.state.italic}
          fontWeight={this.state.fontWeight}
          fontSize={this.state.fontSize + "pt"}
          fontFamily={this.state.fontFamily}
          color={this.state.color}
          onChange={this.handleTextChange}
          text={this.state.text}
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
              <option>Dancing Script</option>
              <option>Sacramento</option>
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
