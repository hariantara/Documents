function SimpleAdding(num)
{
  var jumlah = 0;
  var angka = 0;
  var arr = [];
  var hasil = 0 ;
  for(i=1; i<=num; i++)// menjadikan ke array dulu
  {
    angka = i;
    //console.log(i);
    var huruf = angka.toString();// dari int di convert ke string
    //console.log(huruf);
    arr.push(angka);//stelah jadi string di jadikan array dengn fungsi push
    //console.log(arr);
  }
  //-----------------------------------------------------------------------//
  for(x=0; x<arr.length; x++)// buat for pertama untuk melakukan perulangan. jika x<=arr.length maka nilai dari hasil akan NaN karna melebihi nilai index
  {
    for(z=0; z<arr.length; z++)// buat for kedua untuk melakukan pengecekan perulangannya. jika x<=arr.length maka nilai dari hasil akan NaN karna melebihi nilai index
    {
      if(arr[z]==arr[x])// kondisi dimana nilai index x sama dengan nilai index ke z
      {
          hasil += arr[z];
          //console.log(hasil);
      }
    }
  }
  return hasil;
}
console.log(SimpleAdding(12));
