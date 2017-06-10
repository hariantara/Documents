function ABCheck(str)
{
  for(i=0; i<str.length; i++)
  {
    if((str.charAt(i) == "a") && (str.charAt(i+4) == "b"))
    {
      return true;
    }
  }
  // return str.match(/a...b/g) != null;
  return false;
}
console.log(ABCheck("lanee borrowed"));
