var days = 60;
for(var num = 60; num >= 0; num--){
  if(days>30){
 console.log(+days+ " days until my birthday. Such a long time. :(");
 days = num - 1;
  }
  else if(days<=30 && days>5){
    console.log(+days+ " days until my birthday. YAY!");
 days = num - 1;
  }
  else if(days<=5 && days>0){
    console.log(+days+ " days until my birthday.SCREAM.");
 days = num - 1;
  }
  else if(num===0){
    console.log("HAPPY BIRTHDAY!!");
  }
}