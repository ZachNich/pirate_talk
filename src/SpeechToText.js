import React, { useState, useEffect } from 'react'


const SpeechToText = () => {
    const [listening, setListening] = useState(false)
    const [buttonText, setButtonText] = useState('Start listening')
    const [result, setResult] = useState('')

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true;
    recognition.interimResults = false;

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

    useEffect(() => {
        recognition.addEventListener('result', onResult)
    }, [buttonText, listening])

    return (
        <>
            <button onClick={() => {
                listening ? stop() : start()
                setListening(!listening)
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