const suggest = translations => {
    const keys = []
    const suggestions = []
    for (let i = 0; i < translations.length; i++) {
        keys.push(Object.keys(translations[i]).toString())
        console.log(Object.keys(translations[i]).toString())
    }

    for (let i = 0; i < 4; i++) {
        suggestions.push(keys[Math.floor(Math.random() * translations.length)])
    }

    return suggestions;
}

export default suggest