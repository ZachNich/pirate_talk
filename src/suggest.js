const suggest = translations => {
    const keys = []
    const suggestions = new Set()

    for (let i = 0; i < translations.length; i++) {
        keys.push(Object.keys(translations[i]).toString())
    }

    while (suggestions.size < 4) {
        suggestions.add(keys[Math.floor(Math.random() * translations.length)])
    }

    const suggestionArr = [...suggestions]
    return suggestionArr
}

export default suggest