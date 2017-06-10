function LetterCountI(str)
{
  var arr = str.toLowerCase();
  console.log(arr);
  // var arrEx = arr.replace(/[^a-zA-Z]/g,"");
  // console.log(arrEx);
  var splited = arr.split(" ");// di pecah dulu dengan " " = biar kepisah dengan space
  console.log(splited);
  var object  = 1;// variable ini untuk membuat variable dengan tipe data object
  var superarray = 1;//akan di gunakan sebagai pemanggil splited[i]
  var kunci;// sebagai pembanding dengan object
  var hitung = 1;// untuk menghitung jumlah huruf yang sama dalam object
  var panjangkata = 1;// menghitung banyak huruf

  for(i=0; i<splited.length; i++)// melaukan perulangan dan mengcheck inputan
  {
    superarray = splited[i];// di buat seperti ini agar di for kedua bisa menghitung panjang splited[i]
    object = {}//untuk memasukan array menjadi object
    for(x=0; x<superarray.length; x++)// menggunakan superarray.length splited[0] ikut di check
    {
      object[superarray[x]] = object[superarray[x]] || 0;// menjadikan nilai object sama dengan nilai yang sama atau 0
      object[superarray[x]]++;// jika setiap pengechekan for pertama dengan for kedua ada yang sama maka object di tambah 1
      console.log(object);
    }
    for(kunci in object)// untuk mengecheck key di setiap object
    {
      if(object.hasOwnProperty(kunci))// kondisi dimana untuk check object dengan key sesuatu
      {
        if(object[kunci] > hitung)// jika jumlah key lebih dari jumlah hitung maka di proses
        {
          hitung = object[kunci];// jadikan hitung memiliki nilai yang sama sejumlah nilai object dan keynya;
          console.log("hitung = "+hitung);
          panjangkata = superarray;// tampilkan isi dari superarray atau di sebut splited[i];
          console.log("panjangkata = "+panjangkata);
        }
      }
    }
  }
//stlah menndapat nilai hitung dan hasil tampilan dari panjangkata sejumlah isi hitung maka buat kondisi untuk array yang memiliki huruf hanya 2, atau persamaan huruf sejumlah 1
  if(hitung === 1)
  {
    return -1;
  }
  else
  {
    return panjangkata;
    console.log(panjangkata);
  }
}
console.log(LetterCountI("Hello apple pie"));
