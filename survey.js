// r1 What's your name? Nicknames are also acceptable :)
// r2 What's an activity you like doing?
// r3 What do you listen to while doing that?
// r4 Which meal is your favourite (eg: dinner, brunch, etc.)
// r5 What's your favourite thing to eat for that meal?
// r6 Which sport is your absolute favourite?
// r7 What is your superpower? In a few words, tell us what you are amazing at!


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let myAswers = [];
console.log('Welcome to your profile generator');
rl.question('What\'s your name? Nicknames are also acceptable :) -> ', (answer1) => {
  myAswers.push(`My Name is -> ${answer1}`); 
  rl.question('What\'s an activity you like doing? -> ', (answer2) => {
    myAswers.push(`What I love to do is -> ${answer2}`);
    rl.question(`What do you listen to while ${answer2} -> `, (answer3) => {
      myAswers.push(`While doing favourite activity of ${answer2} I listen to -> ${answer3}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) -> ', (answer4) => {
        myAswers.push(`My favourite meal of the day is -> ${answer4}`);
        rl.question(`What\'s your favourite thing to eat for *${answer4}?* -> `, (answer5) => {
          myAswers.push(`For '${answer4}' I like to each ->  ${answer5}`);
          rl.question('Which sport is your absolute favourite? -> ', (answer6) => {
            myAswers.push(`My favourite sport is -> ${answer6}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! -> ', (answer7) => {
              myAswers.push(`Special things about me -> ${answer7}`);
              console.log(`Your profile is:${myAswers.join('\n')}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
