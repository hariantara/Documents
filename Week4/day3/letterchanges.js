function LetterChanges(str) {

  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newStr = "";
  var loc;

  for (var i = 0; i < str.length; i++) {
    loc = alphabet.indexOf(str[i]);
    if (loc === 25) {
      newStr = newStr + "a";
    } else if (loc === -1) {
      newStr = newStr + str[i];
    } else {
      newStr = newStr + alphabet[loc + 1];
    }
  }
  return newStr.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});
}
console.log(LetterChanges("hello*3"));
