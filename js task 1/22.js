function assignGrade(mark){
  if (mark >= 90){
    console.log("A");
  }
  else if (mark <= 89 && mark >=80){
    console.log("B");
  }
  else if (mark <= 79 && mark >= 70){
    console.log("C");
  }
  else if (mark <= 69 && mark >= 60){
    console.log("D");
  }
  else{
    console.log("F")
  }
}
assignGrade(95)