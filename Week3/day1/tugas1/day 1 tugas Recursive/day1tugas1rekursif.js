function perkalian1(num){
  if(num == 1){
    return 1;
  }
  else{
    return num * perkalian1(num-1);
  }
}
console.log(perkalian1(5));
