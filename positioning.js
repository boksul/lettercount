// { l: 0, i: 1,10, g: 2, h: 3,5,13,15, t: 4,12, o: 6,16, u: 7,17, s: 8,18, e: 9,14,19, n: 11 }

// lighthousei n t h e h o u s e
// 012345678910111213141516171819


function countLetters(str) {
  var letters = {}
  var newString = str.split(" ").join("");
  for (var i = 0; i < newString.length; i++) {
    var singleLetter = newString[i]
    if (letters[singleLetter] === undefined) {
      letters[newString[i]] = i
    } else {
      letters[newString[i]] = letters[newString[i]] + "," + i
      console.log(typeof(letters[newString[i]]))
    }

    // if (letters[singleLetter] === undefined) {
    //   letters[singleLetter] = 1
    // } else {
    //   letters[singleLetter] += 1
    // }

  }
  return letters
}

console.log(countLetters('lighthouse in the house'))
//change every alphabet to