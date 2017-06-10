function SimpleMode(arr)
{
  var count = 1;
  var newcount = 1;
  var angka = 0;// buat nyimpan angka yang paling sering muncul
  var salah = '';
  for(i=0; i<arr.length; i++)//ngecek 5,5,2,3,3
  {
    //console.log(arr[i]);
    for(x=0; x<arr.length; x++)
    {
      //----------------------------------//
      if(i != x && arr[i]==arr[x])// for yang pertama akan ngecek if ini sesuai kondisi di dalamanya
      {
        count++;
        console.log("ini adalah count "+count);
      }
    }

    //------------------------------------//
    if(count>newcount)
    {
        newcount = count;
        angka = arr[i];
        console.log("Jumlah angka terbanyak "+angka);
        console.log("jumlah angka yang sama "+newcount);
    }

    count =1;// untuk mereset nilai count menjadi 1
  }
  return angka;
}
console.log(SimpleMode([3,3,2,5,5]));
