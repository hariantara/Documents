function ProductDigits(num)
{
  var hasil = 0;
  var pembagi =1;
  var integers;
  var arr = [];
  var arrString;
  var ambil;
  for(i=1; i<=num; i++)
  {
    if(num>0)
    {
      hasil = parseInt(num/i);
      //hasil = num/i;
      //console.log(hasil);
      var strings = hasil.toString();
      //console.log(strings);
      arr.push(hasil);
      console.log(arr);
    }
  }
  ambil = arr.slice(2, 3);
  console.log(ambil);
    if(ambil>9)
    {
      //console.log(3);
      return 3;
    }
    else{
      //console.log(2);
      return 2;
    }

}
console.log(ProductDigits(90));
