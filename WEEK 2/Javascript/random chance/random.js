function chance(quarters){
    var winNum = (Math.floor(Math.random()*100+1));
    while(quarters>0){
      quarters--
      if(winNum === (Math.floor(Math.random()*100+1)))
      {return quarters += (Math.floor(Math.random()*50+50));
    }
}
    return(quarters);
  }
  console.log(chance(100));