var list =[1,"boy",3,"girl"];
function newArr(arr){
  var arr2 = []
  for(var i=0;i<arr.length;i++){
    if(typeof arr[i]==="number"){
    arr2.push(arr[i]);
  }
  }
  return arr2;
}
console.log(newArr(list));