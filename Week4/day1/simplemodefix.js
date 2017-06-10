function SimpleMode(arr)
{

  var hitung = 1;
  var tampung = 1;
  var value =0;
  for(i=0; i<arr.length; i++)// for ini untuk mengecheck perluangan di dalamnya
  {
      for(x=0; x<arr.length; x++)// untuk melakukan perluangan yang kedua di dlamnya sesuai kondisi
      {
          if(arr[i]==arr[x] && i!=x)// kondisi jika di dalam index yang berbeda terdapat angka yang sama
          {
            hitung++;// untuk menghitung jumlah angka yang sama dalam index yang berbeda
            //console.log("hitung = "+hitung);

          }
      }

     if(hitung>tampung)// untuk vlidasi nilai tampung dg nilai hitung yg sudah di ++
     {
       tampung = hitung;//jadi kalau nilai tampung sudah sama dengan hitung.
       value = arr[i];
       //console.log("value = "+value);
     }
     hitung=1;
  }
  // if yang di bawah ini untuk menentukan nilai value jika tidak ada yang sama
     if(value !=0)
     {
       return value;
     }
     else
     {
       value-=1;
     }
  return value;
}
console.log(SimpleMode([1,2,3,4,5]));
