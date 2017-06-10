function LargestPair(num) 

{

  var lp = num.toString();

  var sp = lp.split("");



  var joined ;

  console.log(lp);

  console.log(sp);

  for(i=0; i<=sp.length; i++)

  {

    sp = Math.max.apply(null,sp);

    //console.log(sp);



  }

  return sp;

}

console.log(LargestPair(453857));

​

​

    "453857"
    ["4", "5", "3", "8", "5", "7"]
    8

Bin info
just now
