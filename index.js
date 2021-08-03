var readlineSync=require('readline-sync');
// var userName=readlineSync.question('What is your name?');
// console.log('Welcome! ' + userName);

var score=0;
quesOne='Is my age older than 20';
ansOne='yes';

var userAge=readlineSync.question(quesOne);

if(userAge === ansOne){
  console.log('YOU ARE RIGHT');
  score=score+1;
  console.log('Score=',score);
}
else{
  console.log('You are wrong');
  score=score-1;
  console.log('Score=',score)
}

quesTwo='Is my surname Gupta';
ansTwo='yes';

var userAge=readlineSync.question(quesTwo);

if(userAge === ansTwo){
  console.log('YOU ARE RIGHT');
  score=score+1;
  console.log('Score=',score);
}
else{
  console.log('You are wrong');
  score=score-1;
  console.log('Score=',score)
}