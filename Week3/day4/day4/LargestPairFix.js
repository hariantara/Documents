function LargestPair(num)
{
 var maximum;
  var array = [];
 // var tertinggi=0; // ini jika pakai if sebagai pembanding
 var tostring = num.toString();
 //console.log(tostring);
 var pecah = tostring.split("");
 //console.log(pecah);
  for(i=0; i<pecah.length-1; i++)
  {
    var bagidua = pecah.slice(i, i+2);
    //console.log(bagidua);
    var joined = bagidua.join("");
    //console.log(joined);
    array.push(joined);
    //console.log(array);
    maximum = Math.max.apply(null, array);
    //console.log(maximum);
    //if yang di bawah bisa juga di pakai jika ingin pakai cara if
    // if(joined>tertinggi){
    //   tertinggi = joined;
    // }
  }
  // return tertinggi;
  return maximum;
}
console.log(LargestPair(453857));
