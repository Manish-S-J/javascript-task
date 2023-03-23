function performArithmeticOpertaion(a,b,arithOperation){
  if(arithOperation == "+"){
  let add = a + b;
    console.log(add);
}
 else if(arithOperation == "-"){
    let sub = a - b;
console.log(sub);
}
 else if(arithOperation == "*"){ 
let multi = a * b;
console.log(multi);
}
else if(arithOperation == "/"){
  let divi = a / b;
console.log(divi);
}
else if(arithOperation == "%"){
  let modu = a % b
  console.log(modu)
}
}
performArithmeticOpertaion(7,6,"%")