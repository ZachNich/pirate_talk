import React, { useState, useEffect } from 'react';
import './App.css';
import translations from './Translations';
import translate from './translate';
import suggest from './suggest';
import SuggestionCard from './SuggestionCard';
import Pirate from './assets/pirate.svg';

function App() {

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [suggestions, setSuggestions] = useState([])
  
  const handleInput = e => {
    const stateToChange = e.target.value
    setInput(stateToChange)
  }

  const getOutput = () => {
    setOutput(translate(input, translations))
  }

  const getSuggestions = () => {
    setSuggestions(suggest(translations))
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  return (
    <>
      <div className='wrapper'>
        <div className='header-1 outline-text'>
          <h1>Hello Mateys!</h1>
          <img className='pirate' src={Pirate} alt='pirate' width={'100px'} />
        </div>
        <div className='header-2'>
          <h2 className='outline-text'>Welcome to the pirate translator.</h2>
        </div>
        <div className='translator'>
          <div className='instructions'>
            <p className='outline-text'>Enter text below and see the pirate translation!</p>
          </div>
          <div className='translate'>
            <div className='text-fields'>
              <textarea className='input' rows='15' cols='25' onChange={handleInput}></textarea>
              <button onClick={getOutput}>Translate</button>
              <textarea className='output' rows='15' cols='25' value={output} readOnly></textarea>
            </div>
          </div>
          <div className='suggestion-container'>
            <h6 className='suggestion-header'>Random suggestions:</h6>
            {suggestions.map(suggestion => <SuggestionCard suggestion={suggestion} />)}
            <button className='suggestion-refresh' onClick={getSuggestions}>↻</button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p className='outline-text'>Made by Zach, Tanner, John, and Zane</p>
      </div>
    </>
  );
}

export default App;