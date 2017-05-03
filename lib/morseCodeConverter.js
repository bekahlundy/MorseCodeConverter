morse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-.-.--": "!"
}

  const toLetters = (el) => {
    let morseCodeConverted = []
    let letterArr = el.split(' ')
    letterArr.map((indv) => {
      return morseCodeConverted.push(morse[indv])
    })
    return morseCodeConverted.join('')
  }
  const morseCodeConverter = (str) => {
    let ans = []
    let splitIntoWordsArr = str.split('   ')
    let answer = splitIntoWordsArr.map((el) => {
     if (el === '...---...') {
      ans.push('SOS')
     } else {
      ans.push(toLetters(el))
     }
    })
    return ans.join(' ')
  }

module.exports = { morseCodeConverter }
