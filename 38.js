function validate(email){
  let emailFormat = /^\S+@\S+\.\S/;
  if(emailFormat.test(email)){
    console.log("The email address is valid");
  }
  else{
    console.log("The email address is not valid");
}
}
validate("manish@gmail.com")