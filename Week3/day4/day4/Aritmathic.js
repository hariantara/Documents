/*
Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored
in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return
"Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern
return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent,
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio.
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as
parameters, 0 will not be entered, and no array will contain all the same elements.

Sample Test Cases

Input:5,10,15

Output:"Arithmetic"

Input:2,4,16,24

Output:-1
 Jawaban */
function ArithGeo(arr)
{
  var arit = 0;
  var geo = 0;
  var array = arr.length;
  //console.log(array);
  var max = Math.max.apply(null, arr);
  //console.log(max);
  var min = Math.min.apply(null, arr);
  //console.log(min);
  var bagi = arr[1]/arr[0];
  var selisih = arr[1]-arr[0];
  for(i=array-1; i>=0; i--)// i = array-1 itu, panjang array kan 3, jadi 3 - 1, jadi array - 1 = 2.
  {
    if(arr[i]-arr[i-1]== selisih)// arr[i] itu mengikuti for, dmna arr[i] bernilai 2, dan arr[i-1] bernilai inddex 2-1= 1
    {
      return "arit";
    }
    else if(arr[i]/arr[i-1]==bagi)
    {
      return "Geo";
    }
    else{
      return "-1";
    }
  }
}
console.log(ArithGeo([2, 6, 18, 54]));
