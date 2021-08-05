var readlineSync=require('readline-sync');

score=0;


function quiz(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer === answer ){
  console.log('YOU ARE RIGHT');
  score++;
 
}
else{
  console.log('You are wrong');
  score--;
  
}
}


quiz('Is my name Muskan?','yes');

quiz('Am I less than 20 yrs old','no');

console.log('score= ',score)