function perkalian2(num, numb){
  if(num <= 1){//sebagain counter
    return 1;//sebagai cunter dimana
  }
  else{
    return num * perkalian2(num-numb, numb);//num-5 sebagai pengurang
  }
}
console.log(perkalian2(12,5));
