import React from 'react';
import './App.css';

import characters from './characters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charIndex: '',
      inputText: ''
    }
  }

  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <div className="App">
          <header className="App-header">
            Game Of Thrones
          </header>
        </div>
        <div className="row">
          <div className="bg-dark w-25 overflow-auto sidebar">
            <SearchBar handleChange={this._setInput} />
            <CharacterList search={this.state.inputText} characters={characters} handleClick={this._buttonClicked} />
          </div>
          <div className="bg-info w-75">
          {
            this.state.charIndex !== '' ? <CharacterDetail character={characters[this.state.charIndex]} /> : null
          }
          </div>
        </div>
      </div>
    );
  }

  _buttonClicked = (charIndex) => {
    console.log(characters[charIndex]);
    this.setState({
      charIndex
    })
  }  

  _setInput = (inputText) => {
    this.setState({
      inputText
    })
  }
}

export default App;
