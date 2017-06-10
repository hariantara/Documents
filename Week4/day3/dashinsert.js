function DashInsert(str)
{
  var strings = str.toString();
  console.log(strings);
  var arr = strings.split("");
  console.log(arr);

  var dash = 0;
  var value = 0;
  var hitung = 0;
  var strip = [];


  for(i=0; i<arr.length; i++)
  {
    var ganjil = arr[i]%2
    if(ganjil != 0)
    {
      hitung++;
      //console.log(hitung);
    }
    if(hitung > dash)
    {
      dash = hitung;
      console.log("Dash = "+dash);
      value = arr[i];
      console.log("Value = "+value);

      var vstring = value.toString();
      console.log("Vstring = "+vstring);

      var pisah = vstring.split("");
      console.log(pisah);

      strip.push(pisah);
      console.log(strip);

      var minus = strip.join("-");
      console.log(minus);
//-----------------------------------------------//
      // strip.push(vstring);
      // console.log("Strip = "+strip);
    }
  }
  for(x= 0; x<arr.length; x++){
    if(arr[x] == minus)
    {
      arr = arr.slice(0,idx+1) + "-" + arr.slice(idx+1);
      console.log(arr);
    }
  }
}
DashInsert(99946);
