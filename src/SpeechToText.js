import React, { useState, useEffect } from 'react'
import { logDOM } from '@testing-library/react'


const SpeechToText = () => {
    const [listen, setListen] = useState(false)
    const [buttonText, setButtonText] = useState('Start listening')
    const [result, setResult] = useState('')

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true;
    recognition.interimResults = true;

    const start = () => {
        recognition.start()
        setButtonText('Stop listening')
    }

    const stop = () => {
        recognition.stop()
        setButtonText('Start listening')
    }

    const onResult = e => {
        setResult("")
        for (const res of e.results) {
            setResult(res[0].transcript)
        }
    }

    const toggleListen = () => {
        setListen({!listen}, )
    }

    
    useEffect(() => {
    }, [buttonText])

    return (
        <>
            <button onClick={() => {
                
            }}>
                {buttonText}</button>
            <div>
                <p>
                    {result}
                </p>
            </div>
        </>
    )
}

export default SpeechToText