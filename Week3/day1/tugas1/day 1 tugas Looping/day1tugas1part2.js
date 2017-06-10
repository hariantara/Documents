function perkalian2(num, numb){
  var hasil = 1;
  for(i=num; i>0; i-=numb){
    hasil = hasil*i;
  }
  return hasil;
}
console.log(perkalian2(12,5));
