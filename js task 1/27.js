function deleteElement(arr,num){
    for(let i=0;i<arr.length;i++){
      if(arr[i] === num){
        console.log(arr[i]);
      arr.splice(i,1);
}
   } console.log(arr)
}
   deleteElement([1, 2, 3, 4, 3, 5, 6, 3, 7],3)