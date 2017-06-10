function LetterChanges(str)
{
  var huruf = "abcdefghijklmnopqrstuvwxyz";
  var strings = "";
  var index;

  for(i=0; i<str.length; i++)
  {
    index = huruf.indexOf(str[i]);
    if(index === 25)
    {
      strings = strings + "a";
    }
    else if (index === -1)
    {
      strings = strings + str[i];
    }
    else
    {
      strings = strings + huruf[index +1];
    }
  }

  return strings.replace(/[aiueo]/g, function(letter) {return letter.toUpperCase()});
}

console.log(LetterChanges("hello*3"));
