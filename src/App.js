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
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid p-4 text-center m-0">
          <div class="container">
            <h1 class="display-4">Game Of Thrones</h1>
          </div>
        </div>
        <div className="row">
          <div className="w-25 overflow-auto sidebar">
            <SearchBar handleChange={this._setInput} />
            <CharacterList search={this.state.inputText} characters={characters} handleClick={this._buttonClicked} />
          </div>
          <div className="w-75">
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
