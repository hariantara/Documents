function perkalian1 (num){
var hasil = 1;
  for(i=num; i>0; i--)
    {
      hasil = hasil*i;
       //return i;
    }
    return hasil;
}
console.log(perkalian1(5));
