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
  const [inputValue, setInputValue] = useState(0)
  const [outputValue, setOutputValue] = useState(0)

  const handleInput = e => {
    const stateToChange = e.target.value
    setInput(stateToChange)
  }

  const getOutput = () => {
    setOutput(translate(input, translations))
  }

  const calcInputProficiency = () => {
    let counter = 0;

    let x = []

    for (let i = 0; i < translations.length; i++) {
      if (Object.values(translations[i])[0].normal) {
        if (input.includes(Object.values(translations[i])[0].normal)) {
          counter += 1
          x.push(Object.values(translations[i])[0].normal)
        }
      }
      else if (Object.values(translations[i])[0].s) {
        if (input.includes(Object.values(translations[i])[0].s)) {
          counter += 1
          x.push(Object.values(translations[i])[0].s)
        }
      } else if (Object.values(translations[i])[0].ing) {
        if (input.includes(Object.values(translations[i])[0].ing)) {
          counter += 1
          x.push(Object.values(translations[i])[0].ing)
        }
      }
      else if (Object.values(translations[i])[0].ed) {
        if (input.includes(Object.values(translations[i])[0].ed)) {
          counter += 1
          x.push(Object.values(translations[i])[0].ed)
        }
      }
    }

    let arr = input.split(/\s+/g)
    let length = input.split(/\s+/g).length

    if (arr.includes("")) {
      length -= 1
    }
    let percentage = counter / length
    setInputValue(percentage)
  }
  const calcOutputProficiency = () => {
    let counter = 0;

    let x = []

    for (let i = 0; i < translations.length; i++) {
      if (Object.values(translations[i])[0].normal) {
        if (output.includes(Object.values(translations[i])[0].normal)) {
          counter += 1
          x.push(Object.values(translations[i])[0].normal)
        }
      }
      else if (Object.values(translations[i])[0].s) {
        if (output.includes(Object.values(translations[i])[0].s)) {
          counter += 1
          x.push(Object.values(translations[i])[0].s)
        }
      } else if (Object.values(translations[i])[0].ing) {
        if (output.includes(Object.values(translations[i])[0].ing)) {
          counter += 1
          x.push(Object.values(translations[i])[0].ing)
        }
      }
      else if (Object.values(translations[i])[0].ed) {
        if (output.includes(Object.values(translations[i])[0].ed)) {
          counter += 1
          x.push(Object.values(translations[i])[0].ed)
        }
      }
    }

    let arr = output.split(/\s+/g)
    let length = output.split(/\s+/g).length

    if (arr.includes("")) {
      length -= 1
    }
    let percentage = counter / length

    setOutputValue(percentage)
  }


  useEffect(() => {
    calcInputProficiency()
  }
    , [input])

  useEffect(() => {
    calcOutputProficiency()
  }
    , [output])

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
          <h1>pARRRley!</h1>
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
              <p className="percent-pirate">pARRRley-ometers</p>
            </div>
            <div className="bar-container">
              <Progress className="input-bar" value={inputValue * 100} />
              <Progress className="output-bar" value={outputValue * 100} />
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