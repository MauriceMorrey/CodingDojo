var Hour = 8;
var Minute = 50;
var period = "am";

if(period === "am"){
    if(Minute>30){
        console.log("it's almost " +(Hour+1)+ " in the morning");
      }
      else{
          console.log("it's just after " +hour+ " in the morning");
      }
    } else{
    if(period === "pm"){
        if(Minute>30){
            console.log("it's almost " +(Hour+1)+ " in the evening");
        }
        else{
            console.log("it's just after " +hour+ " in the evening");
        }
    }
}
    