var getStringBetween = (str, startLetter, endLetter) => {
    var stringInBetween = str.slice(str.indexOf(startLetter)+1, str.indexOf(endLetter))
    return stringInBetween
}