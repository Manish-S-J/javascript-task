function chunk(arr,size){
  let newArr = [];
  for(i=0;i=(arr.length/size);i++){
    newArr.push(arr.splice(0,size));
 }
  return newArr;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9],3))