function SwapCase(str)
{
  var kalimat = '';
  for(i=0; i<str.length; i++)
  {
    if(str[i] === str[i].toLowerCase())
    {
      kalimat += str[i].toUpperCase();
    }
    else {
      kalimat += str[i].toLowerCase();
    }
  }
  console.log(kalimat);
}
SwapCase("Sup DUDE!!?");
