function remove(str){
  console.log(str.replace(/[^aeiou]/g,'').length);
}
remove("karka")