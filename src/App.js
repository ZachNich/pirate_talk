import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Progress } from "reactstrap"
import suggest from "./suggest"
import translations from './Translations';
import translate from './translate';
import SuggestionCard from './SuggestionCard';
import Pirate from './assets/pirate.svg';

function App() {

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState(0)

  const handleInput = e => {
    const stateToChange = e.target.value
    setInput(stateToChange)
  }

  const getOutput = () => {
    setOutput(translate(input, translations))
  }

  const calcProficiency = () => {
    // TURN INPUT INTO AN ARRAY, SPLIT ON SPACES
    let arr = input.split(" ")
    // SET COUNTER = 0
    let counter = 0;
    // LOOP THROUGH ARRAY, FOR EACH WORD, CHECK IF EXISTS IN SUGGESTIONS
    for (let word in arr) {
      for (let i = 0; i < translations.length; i++) {
        console.log(Object.values(translations[i])[0].normal.toString())
        if (word == Object.values(translations[i])[0].normal.toString()) {
          // IF EXISTS, COUNTER += 1
          counter += 1
        }
      }
    }
    // END LOOP, LET VALUE = COUNTER / ARRAY.LENGTH
    let percentage = counter / arr.length
    // ASSIGN VALUE TO PROGRESS BAR
    setValue(percentage)
  }


  useEffect(() => {
    calcProficiency()
    console.log(value)

  }
    , [input])

  // const handleAndCalc = (e) => {
  //   handleInput(e)
  //   calcProficiency()
  // }

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
          <h1>pARRRlay!</h1>
          <img className='pirate' src={Pirate} alt='pirate' width={'100px'} />
        </div>
        <div className='header-2'>
          <h2 className='outline-text'>Welcome to the pirate translator</h2>
        </div>
        <div className='translator'>
          <div className='translate'>
            <div className='text-fields'>
              <textarea className='input' rows="10" cols="25" placeholder="Enter text here" onChange={handleInput}></textarea>
              <button onClick={getOutput}>Translate</button>
              <textarea className='output' rows="10" cols="25" value={output} placeholder="Translation here" readOnly></textarea>
            </div>
            <div>
              <p className="percent-pirate">pARRRlay-ometers</p>
            </div>
            <div className="bar-container">
              <Progress className="input-bar" value={value} />
              <Progress className="output-bar" />
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