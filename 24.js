function chunk(arr,size){
  let newArr = [];
  for(let i=0;i<=arr.length/size;i++){
    newArr.push(i);
    console.log(newArr);
  }
}
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9],3)

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
 
   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   var time = `${hh} : ${mm} : ${ss}`
   console.log(time);
 setTimeout(currentTime,1000);
}
currentTime();
