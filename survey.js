const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What\'s your your name? ', (answer2) => {
    rl.question('What\'s an activity you like doing? ', (answer3) => {
      rl.question('What do you listen to while doing that? ', (answer4) => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer5) => {
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer6) => {
            rl.question('Which sport is your absolute favourite? ', (answer7) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!? ', (answer8) => {
                console.log(`Anwer: ${answer2} loves listening to ${answer4} while ${answer3}, ${answer6} for ${answer5}, prefer ${answer7} over other sports, and with her super power of ${answer8}.`)
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});















