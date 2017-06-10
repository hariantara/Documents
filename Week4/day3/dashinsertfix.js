function DashInsert(str)
{
  var joined;
  var arr = str.toString().split('');
  for(i=0; i<arr.length-1; i++)
  {
    if( arr[i]%2 !==0 && arr[i+1]%2 !==0)
    {
      // arr = arr.slice(0,i+1) + "-" + arr.slice(i+1);
      // i = i + 2;
      arr.splice(i+1,0,'-');
      //console.log(arr);

    }
    i++;
  }
  joined = arr.join("");
  //console.log(joined);
  return joined;
}
DashInsert(9961);
