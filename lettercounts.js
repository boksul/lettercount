// we need a function to count every alphabet in a string.
//   identify the alphabets
//   count the alphabets
// return how many same alphabets there are in the string.


function removeSpaces(str) {//lighthouse in the house
  var noSpace = str.split(" ").join("") //makes everything join together with no space
  return noSpace
}



function countLetters(str) {
  var letters = {}
  var newString = removeSpaces(str);
  for (var i = 0; i < newString.length; i++) {
    var singleLetter = newString[i]

    if (letters[singleLetter] === undefined) {
      letters[singleLetter] = 1
    } else {
      letters[singleLetter] += 1
    }

  }
  return letters
}



  // for (var i = 0; i < noSpace.length; i++) { //want to tell the system to run every single alphabet

  //   console.log(noSpace[i])
  // }

  // return noSpace


console.log(countLetters('lighthouse in the house'))

