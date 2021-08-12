const chalk = require('chalk');
const right=chalk.green;
const wrong=chalk.red;


var readlineSync=require('readline-sync');

var userName=readlineSync.question("What is your name?")
console.log('Hello ' + chalk.yellow(userName) + "!! Welcome to "+ chalk.bgYellow("DO YOU KNOW MUSKAN?") + " quiz game" )
console.log("Good Luck, LET'S BEGIN")
console.log('--------------------------')

score=0;


function quiz(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer === answer ){
  console.log(right('YOU ARE RIGHT'));
  score++;
 
}
else{
  console.log(wrong('You are wrong'));
  
}
}

quesAns=[{
  question:'FIRST QUESTION: Is my full name name Muskan Gupta?',
  answer:'yes'
},
{
  question:'SECOND QUESTION: What is my age (Enter a number)?',
  answer:'20'
},
{
  question:'THIRD QUESTION: Is my favourite colour pink?',
  answer:'no'
},
{
  question:'FOURTH QUESTION: Do I wear specs?',
  answer:'yes'
}
]


for(var i=0; i<quesAns.length; i++){
  var currentQues=quesAns[i];
  quiz(currentQues.question, currentQues.answer)
  console.log('--------------------------')

}


console.log('YOUR SCORE IS= ',score);
if(score===4){
  console.log(right('HURRAY!! YOU KNOW ME SO WELL'));
  console.log('--------------------------')
  
  console.log('Now I have one bonus question for you');
  quiz('BONUS:Am I a [1] Night owl or [2] a Morning Person)___Type only option number','1')
  console.log('Final Score= ', score)
  console.log('--------------------------')

  if(score===5){
  console.log(right("Well Played,You really know me very well."))}
  else{
    console.log(chalk.blue('WELL TRIED :)'))
  }
}
else if(score===3){
  console.log(right('HURRAY!! YOU KNOW ME SO WELL'));
}
else{
  console.log(chalk.blue('YOU TRIED WELL :)'))
}


