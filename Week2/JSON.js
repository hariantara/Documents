var Object1 =
    {
       hari: 'senin',
       kehadiran: 'masuk',
       alasan: ''
    }
var Object2 =
    {
       hari: 'rabu',
       kehadiran: 'masuk',
       alasan: ''
    }
var Object3 =
    {
       hari: 'jumat',
       kehadiran: 'absen',
       alasan: 'dinas luar'
    }

var arr=[Object1, Object2, Object3];
var hariKerja=0;
var exist=0;
var reason=0;
for(i=0; i<arr.length; i++)
{
  console.log("hari: "+arr[i].hari,
              "kehadiran: "+arr[i].kehadiran,
              "alasan: "+arr[i].alasan+"\n"+"\n");
  if(arr[i].hari!=0)
  {
      hariKerja++;
      //console.log("hari kerja = "+hariKerja);
  }

  if(arr[i].kehadiran !== exist)
  {
       exist = hariKerja-reason;

  }

  if(arr[i].alasan==reason)
  {
      reason++;
  }

}

console.log("Total hari kerja minggu ini: "+hariKerja+" hari");
console.log("Total Masuk: "+exist+" hari");
console.log("Total Tidak Masuk: "+reason+" hari\n");



















// //----------------//
// var Teman = function(hari/*nama*/, kehadiran/*kabar*/, alasan/*pekerjaan*/){
//   this.hari = hari;
//   this.kehadiran = kehadiran;
//   this.alasan = alasan;
//   this itung = function(itungHari){
//     if()
//   }


//   this.sapa = function(sapa)
//   {
//     //if(sapa == 3)
//     console.log("Halo "+sapa +" " +"apa kabar?");
//   }
//   this.balasSapa = function(balasSapa)
//   {
//     console.log("Halo "+balasSapa +" " +this.kehadiran);
//   }
//   this.tanyaPekerjaan = function(tanyaPekerjaan)
//   {
//     console.log("Apa pekerjaanmu saat ini?");
//   }
//   this.balasPekerjaan = function(balasPekerjaan)
//   {
//     console.log("Pekerjaanku saat ini adalah " +this.alasan);
//   }
//   this.berpisah = function(berpisah)
//   {
//     console.log("Senang bertemu denganmu "+berpisah.hari +" "+", semoga kamu sukses sebagai "+berpisah.alasan);
//   }
// }

//insta
// var budi = new Teman('senin', 'masuk', '');
// var tono = new Teman('rabu', 'masuk', '');
// var tellmama = new Teman('jumat', 'absen', 'dinas luar');
// budi.sapa(tono.hari, tono.kehadiran);
//
//
//




















// function jumlah(hari, kehadiran, alasan)
// {
//   this.hari = hari;
//   this.kehadiran = kehadiran;
//   this.alasan = alasan;
//   this.hariKerja = function(hariKerja)
//   {
//     console.log("Total hari kerja minggu ini: 3 hari" +this.hariKerja);
//   }
//   this.masuk = function(masuk)
//   {
//     console.log("Total Masuk: 2 hari");
//   }
//   this.tidakMasuk = function(tidakMasuk)
//   {
//     console.log("Total Tidak Masuk: 1 hari");
//   }
// }

// var object1 = new jumlah("senin", "masuk");
// object1.harikerja();
// //console.log()
