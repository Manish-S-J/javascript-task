function range(start,end){
  let even = [];
  for(i=1;i<=end;i++){
  if(i%2 == 0){
    even.push(i)
  
  }  
  }
  return even
}
console.log(range(1,20));