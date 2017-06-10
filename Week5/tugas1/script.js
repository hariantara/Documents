var fillme = document.getElementById("fill-me");// untuk declarasi bahwa fill me bertipe data ID
fillme.innerHTML = "HALO!";// untuk print out HALO di browser
console.log(fillme);

var changeAllOfMe = document.getElementsByClassName("change-all-of-me");// declarasi changeAllOfMe bertipe data Class(array)
for(i=0; i<changeAllOfMe.length; i++)// perulangan sejumlah class yang ada/ (p) yang ada di html
{
  var changeAllOfMe1 = changeAllOfMe[i];// harus declarasi var baru agar bisa di pakai di innerHTML di bawahnya.
  changeAllOfMe1.innerHTML = "HALO JUGA";// print out ke web browser
  console.log(changeAllOfMe1);
}

var h2tag = document.getElementsByTagName('h2');
for(x=0; x<h2tag.length; x++)
{
  var newtag = h2tag[x];
  newtag.innerHTML = 'apa kabar';
  console.log(newtag);
}

//Note!!
//getElementsByClassName(),getElementById(),getElementsByTagName() = semua yang di dalam kurung haru sama dengan isi dari htmlnya!!!
