//required packages
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log =console.log;
const participants = [];
const highscorer = {player_name:"Ghost", point:-1};
//prefed data 
const gamingQuiz = [
    {
      q: "Who is the Most Famous Video Game Character of all Time?",
      opt:
      {
        i: "Super Mario Bros",
      ii: "Sonic the Hedgehog",
      iii: "Soul Reaver",
      iv : "Half-Life"
      },
      crt: "ii"
    },
    {
      q: "Who is the Most Famous Video Game Character of all Time?",
      opt:
      {
      i: "Solid Snake",
      ii:"Mario",
      iii: "Donkey Kong",
      iv: "Sonic"
      },
      crt: "ii"
    },
    {
      q: "How Many Buttons were on the Original NES controller (including the D-pad)?",
      opt:
      {
      i: "4",
      ii: "6",
      iii: "8",
      iv: "10"
      },
      crt: "iii"
    },
    {
      q: "When was VALORANT officially launched in INDIA?",
      opt:
      {
        i:"2nd June,20",
        ii:"2nd july,20",
        iii:"2nd December,19",
        iv :"2nd October,18"
      },
      
      crt: "i"
    },
    {
      q: "When was pubg banned in india?",
       opt:
      {
        i:"2nd June,20",
        ii:"2nd September,20",
        iii:"2nd August,19",
        iv :"2nd March,18"
      },
      
      crt: "ii"

    },
    {
      q: "What is duration of COMPETIVE MATCH in CS:GO ?",
       opt:
      {
        i:"90 minutes",
        ii:"60 minutes",
        iii:"80 minutes",
        iv :"30 minutes"
      },
      crt: "i"

    },
    {
      q: "Which Gun Out Of This List Has The Best Accuracy When Running?",
      opt:
      {
        i:"MP9",
        ii:"Mac-10",
        iii:"P90",
        iv :"Ak-47"
      },

      crt: "iii"
    }
    , {
      q:"What Is The Highest Rank Possible In CS:GO Competitive?",
      opt:
      {
        i:"Supreme MAster",
        ii:"Distinguised Master Guardian",
        iii:"Global Elite",
        iv :"Silver-3"
      },
      crt: "iii"
    },
    {
      q: "What is the name of Tony Stark's Robotic lab assistant?",
      opt:{
      i: "Dum-E",
      ii: "Dim-Wit",
      iii: "Ding-bat",
      iv: "Dum-B"
    },
      crt: "i"
    },
    {
      q:"Who does Keanu Reeves play in Cyberpunk 2077?",
      opt:{
      i: "V",
      ii: "Johnny Silverhand",
      iii: "Jackie Welles",
      iv: "Placide"  
      }, 
      crt: "ii"
    }
  ]
//declaring variables
function quizPlay(){
    let currScore = 0,ans;
    var player_name = readlineSync.question(chalk.bold.bgYellow("Hello there 🎮🎮 Gamer , Enter your name: ")).toUpperCase();
log("");

//welcoming messages
log(chalk.bold.bgRgb(50, 100, 200)("WELCOME TO THE GAMING  QUIZ!!! " + player_name +"\n"));

log(chalk.bold.bgHex('915c83')("N.B : Score the Best out of 10 To beat Your Friends !"));
log(chalk.bold.hex('7fffd4')("  **Try Hard to Achieve The Educated GAMER title ."));
log(chalk.bold.hex('ec5858')("  ** Choose the option among 'i' or 'ii' or 'iii' or 'iv'."));
log(chalk.bold.green("Lets Start GAming... ")+chalk.bold.bgRed("GAMERQUIZ")+"\n");

var player_score=0;
let quesNo = 1;
for( g of gamingQuiz)
{
  log(chalk.bold.bgYellow`\n${quesNo++}.{bgCyan ${g.q}}\n`);
  let srcol= chalk.bgMagentaBright.bold;
  let opcolor = chalk.bold.cyanBright;

  log(`${srcol('i:')} ${opcolor(g.opt.i)}\n${srcol('ii:')} ${opcolor(g.opt.ii)}\n${srcol('iii:')} ${opcolor(g.opt.iii)}\n${srcol('iv:')} ${g.opt.iv}`);

  ans = readlineSync.question('👋  So Answer Please : ');
  if(ans.toLowerCase() === g.crt)
  {
            log(chalk.greenBright.italic('\n ✅  Right Answer  ✅ !'));
            log(chalk.yellowBright('╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬'));
            player_score+=1;
            log(`Current Credits: ${player_score}`);



 }
 else{
            log(chalk.redBright('\n Sorry You are Wrong! 👎'));
            log(chalk.redBright('═══════════════════════'));
            log(chalk.cyanBright`Right Answer: ${g.crt}`);
            log(chalk.greenBright`Current Credits: ${player_score}`);
        }
}

participants.push({name: player_name , point: player_score});
if(player_score>=highscorer.point && player_score>0)
{
  log(chalk.rgb(255,192,203).bold.underline ` ${player_name} secured  high score #${player_score} GREAT GAmer `);
  highscorer.point=player_score;
  highscorer.player_name=player_name;
}
log(chalk.bold.bgRgb(130,200,12)("👑 👑 LEADER BOARD 👑 👑\n "));
console.table(participants);
} 
do{
  var usercount=0; 
  quizPlay();
  usercount+=1
  log(chalk.bold.bgRed`Player - ${usercount}\n`);
  ;
  var exit = readlineSync.question("Do you  want to continue : Yes/Y/N/No \n");
  }
while(exit.toLowerCase()==='yes' || exit.toLowerCase()==='y');





