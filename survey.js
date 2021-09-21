const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Hello ${answer}`);
  let preferredName = answer;
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Wow! Look at you ${answer} like a champ!`);
    let activity = answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`${answer} is great, right?`);
      let music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`${answer} === yum!!`);
        let meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`${answer} === delish!!`);
          let food = answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Take me out to the ${answer} game!`);
            let sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`${answer} is probably the best super power`);
              let superPower = answer;
              const profile = `Please welcome ${preferredName}! They love to do ${activity} while listening to ${music}. On weekends you can find them eating ${food} for ${meal}. In their spare time they like to indulge in ${sport}. But what's really special about them is ${superPower}`
              rl.close();
              console.log(profile);
            });
            
          });
          
        });
      });
    });
  })
});

