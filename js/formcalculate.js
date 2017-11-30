function formCal(){
  var rt = document.getElementById("ri");
 var yr = document.getElementById('yi');
 var rate= parseInt (rt.value);
 var year=parseInt(yr.value);

    var deno =  rate/100;//deno is equivalent to b2 because (Math.pow((1+rate/100),(year=1))-1)
    if(year == "1"){
          //if yr is 1 answer should be b2
      var outpt = deno;
  }

    else
    var outpt = (Math.pow((1+rate/100),(year))-1)/deno;



    return outpt;
    //cracked by monster mikedunk
  }
