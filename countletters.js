function countLetters(string){

  var string = string.replace(/ /g, "").toLowerCase().split("");

  var obj = {};

  for(var i = 0; i < string.length; i++){
    var temp = string[i];
    //obj[temp] = (isNaN(obj[temp]) ? 1 : obj[temp] + 1);
    typeof obj[temp] === 'undefined' ? obj[temp] = 1 : obj[temp]++;

  }

  return obj;
}

console.log(countLetters("lighthouse in the house LL") );
