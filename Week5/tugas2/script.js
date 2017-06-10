// cara ini untuk ngubah saya adalah keturunan pertama
var body= document.body;
var childDiv1 = document.getElementById('eldest-parent');
var div1 = childDiv1.children;
var newdiv1 = div1[0];
newdiv1.innerHTML = "Diakses Melalui Eldest Parent ([0])";

// cara ini adalah untuk mengubah saya adalah generasu termuda, yang paling tua.
var div2 = document.getElementById('a-child');
var newdiv2 = div2.previousElementSibling;
newdiv2.innerHTML = 'Melalui a Child (previous div 2 [0])'
console.log(newdiv2.innerHTML);

// cara ini adalah cara untuk mengubah saya adalah generasi termuda, yang paling muda
var nextdiv = div2.nextElementSibling;
nextdiv.innerHTML = 'Melalui a Child (next div 2 [2])';
console.log(nextdiv.innerHTML);


// cara ini untuk menampilkan atau naik dari di bawah div x (div x ada keterangan di HTMLnya)
var parentnext = div2.parentNode;
console.log(parentnext.innerHTML);

// cara ini untuk naik ke div x
var oldparent = parentnext.parentNode;
console.log(oldparent.innerHTML);

//cara ini untuk mengubah siblingnya yang berada di array ke [3] di urutan di ke 4
var nextparentsib = oldparent.nextElementSibling;
console.log(nextparentsib.innerHTML);
nextparentsib.innerHTML = 'Diakses Melalui a Child (dari parentNode trus di nextElementSibling [3])';

// var div4 = div3.children;
// var newdiv4 = div4[0];
// console.log(newdiv4);
