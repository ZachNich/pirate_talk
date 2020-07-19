import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Progress } from "reactstrap"
import translations from './Translations';
import translate from './translate';
import Pirate from './assets/pirate.svg'

function App() {

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleInput = e => {
    const stateToChange = e.target.value
    setInput(stateToChange)
  }

  const getOutput = () => {
    setOutput(translate(input, translations))
  }

  const calcProficiency = () => {

  }

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
              <Progress className="input-bar" />
              <Progress className="output-bar" />
            </div>
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