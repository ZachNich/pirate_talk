const translate = (input, translations) => {
    const inputArray = input.split(/\s/g)
    let outputArray = []
    let output = ""
    
    for (let i = 0; i < inputArray.length; i++) {
    
      let newWord = inputArray[i]

      let capitalized = false
      let uppercase = false
      if (newWord.length > 0) {
        if (newWord.toUpperCase() === newWord) {
          uppercase = true
        } else if (newWord[0] === newWord[0].toUpperCase()) {
          capitalized = true
        }
      }
    
      for (let j = 0; j < translations.length; j++) {
        let regex = new RegExp(`^${Object.keys(translations[j])[0]}(((ed)|(ing))|((s)|[']?[s]?|[s]?[']))[!.?:;,]*$`, 'ig'); 
        
        if (newWord.match(regex)) {
          let tail = newWord.substring(Object.keys(translations[j])[0].length, newWord.length)
          let punctuation = ""
          if (tail.includes("ing") && translations[j][`${Object.keys(translations[j])[0]}`].ing) {
            newWord = translations[j][`${Object.keys(translations[j])[0]}`].ing
            punctuation = tail.replace("ing", "")
          } else if (tail.includes("s") && translations[j][`${Object.keys(translations[j])[0]}`].s) {
            newWord = translations[j][`${Object.keys(translations[j])[0]}`].s
            punctuation = tail.replace("s", "")
          } else if (tail.includes("ed") && translations[j][`${Object.keys(translations[j])[0]}`].ed) {
            newWord = translations[j][`${Object.keys(translations[j])[0]}`].ed
            punctuation = tail.replace("ed", "")
          } else if (newWord.toLowerCase().includes(Object.keys(translations[j])[0])) {
            newWord = translations[j][`${Object.keys(translations[j])[0]}`].normal
            punctuation = tail
          }
          newWord = newWord.concat(punctuation)
          break;
        }
      }
    
      if (capitalized) {
        newWord = newWord[0].toUpperCase() + newWord.substring(1)
      }
      if (uppercase) {
        newWord = newWord.toUpperCase()
      }
    
      outputArray.push(newWord)
    }
    
    output = outputArray.join(" ")
    return output
}

export default translate