var Object1 =
    {
       quest:'Mengapa memilih untuk masuk ke hactiv8?'
    }
var Object2 =
    {
       quest:'Apa motivasimu masuk ke hacktiv8?'
    }
var Object3 =
    {
       quest:'Apa tujuan kedepannya setelah lulus dari hacktiv8?'
    }

//------------------//

var arr = [Object1, Object2, Object3];
var q1=true;
var qst1=0;
var qst2=0;
var qst3=0;
var alt = 0;
function pertanyaan(){
for(i=0; i<arr.length; i++)
{
  q1 = window.confirm("Jawab 3 Pertanyaan ini dengan jujur!");
  qst1=prompt(arr[0].quest);
  qst2=prompt(arr[1].quest);
  qst3=prompt(arr[2].quest);
  if(q1==true)
  {
    q1;

  }
  //----- object pertanyaan --//
  if(qst1!=0 && qst1!='')
    {
      qst1;
      console.log(qst1);

    }
  else
    {
      console.log("tidak boleh kosong!");
    }
  if(qst2!=0 && qst2!='')
    {
      qst2;
      console.log(qst2);
    }
  else
    {
      console.log("kamu tidak menjawabnya");
    }
  if(qst3!=0 && qst3!='')
    {
      qst3;
      console.log(qst3);
    }
  else
    {
      console.log("kamu belum menjawabnya");
    }
  return;
}
}
pertanyaan();
// console.log(qst1);
// console.log(qst2);
// console.log(qst3);
