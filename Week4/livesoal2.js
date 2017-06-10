function kasino(arr)
{
  creditBalance = 5000;
  var tampung = 1;
  var jumlahSama = 1;
  var totalSlot = 0;
  var arrBaru = [];
  for(i=0; i<arr.length; i++)
  {
    for(x=0; x<arr.length; x++)
    {
      //console.log("arr[i] adalah: " + arr[i] + "arr[x] adalah: "+arr[x]);// ini untuk melihat kinerja for dalam for
      if(arr[i] == arr[x] && i != x)
      {
        tampung++;
      }
    }
    if(tampung>jumlahSama && tampung<=arr.length)
    {
      jumlahSama = tampung;

    }
    tampung =1;
    totalSlot = totalSlot+arr[i];
    console.log("Total Slot = "+totalSlot);
  }

  if(jumlahSama > 0 && jumlahSama <= 3)
  {
    if(jumlahSama == 3)
    {
      jumlahSlot = totalSlot *200;
      creditBalance +=jumlahSlot;
      return "you win " + jumlahSlot+ " Dollar total " + creditBalance + " Dollar";
    }
    else if( jumlahSama == 2)
    {
      jumlahSlot = totalSlot *100;
      creditBalance +=jumlahSlot;
      return "you win " + jumlahSlot+ " Dollar total " + creditBalance + " Dollar";
    }
    else {
      jumlahSlot = totalSlot *50;
      creditBalance -=jumlahSlot;
      return "you win " + jumlahSlot+ " Dollar total " + creditBalance + " Dollar";
    }
  }
  else {
    return "masukan 3 digit aja";
  }
  return jumlahSama;
}
// console.log(kasino([2,2,2]));
// console.log(kasino([2,2,1]));
console.log(kasino([3,2,1,1]));
