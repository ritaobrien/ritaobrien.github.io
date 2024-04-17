let subjectsStudied=0;
let subjectMarks = [];
let totalMarks=0;
let Grades = [];
let averageMark=0;

document.getElementById("output").style.visibility = "hidden";

function enterMarks(){
  let subjectsStudied = parseInt(prompt("Enter the number of subjects that you have studied."));
  for (let i = 0; i < subjectsStudied; i++) {
    subjectMarks[i] = parseInt(prompt("Enter mark for subject " + (i + 1)));
    totalMarks += subjectMarks[i];
  }
  
  document.getElementById("input").style.visibility = "hidden";
  document.getElementById("output").style.visibility = "visible";
  
  document.getElementById("subjectMarks").innerHTML+=(subjectMarks+ "  ");
  
  averageMark = parseInt(totalMarks/subjectsStudied);
  document.getElementById("averageMark").innerHTML=averageMark;
  
  for (let i=0;i<subjectMarks.length;i++){
    {if (subjectMarks[i] >= 80 && subjectMarks[i] <= 100){
      Grades[i]="A";}
      else if (subjectMarks[i] >=70 && subjectMarks[i] <=79){
      Grades[i]="B";}
          else if (subjectMarks[i] >=60 && subjectMarks[i] <=69){
        Grades[i]="C";}
        else if (subjectMarks[i] >=50 && subjectMarks[i] <=59){
          Grades[i]="D";}
            else if (subjectMarks[i] >=40 && subjectMarks[i] <=49){
          Grades[i]="E";}
              else if (subjectMarks[i] <39)
              Grades[i]="F";}
  }
  document.getElementById("gradePerModule").innerHTML+=(Grades+ "  ");
}




    
   