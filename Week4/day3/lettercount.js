function LetterCountI(str)
{
  var ctObj, tempWord, maxWord, maxCt = 1;
  var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g,"").split(" ");
  console.log(arr);

   for(var i = 0; i < arr.length; i++){
       tempWord = arr[i];
       ctObj = {}

       for(var j = 0; j <tempWord.length; j++){
         ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
         ctObj[tempWord[j]]++;
         console.log(ctObj);
       }
       for (var key in ctObj) {
         if (ctObj.hasOwnProperty(key)) {
             if (ctObj[key] > maxCt) {
                 maxCt = ctObj[key];
                 maxWord = tempWord;
                 console.log(maxWord);
             }
         }
       }
   }

   if (maxCt === 1) {
       return -1;
   } else {
       return maxWord;
   }
}
console.log(LetterCountI("Hello apple pie"));
