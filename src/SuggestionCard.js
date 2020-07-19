import React from 'react';
import './SuggestionCard.css'

const SuggestionCard = props => {
    return (
        <p className="suggestion">{props.suggestion}</p>
    )
}

export default SuggestionCard