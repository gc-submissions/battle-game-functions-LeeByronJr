"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  // ternary operator -> return randNum ? opt2 : opt1;
  if (randNum === 0) {
    return opt1;
  } else {
    return opt2;
  }
};

const attackPlayer = (health) => {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Byron", "Marq", "100", "100");

// ternary operator instead of "if else if" stuff
const getGrade = (numberGrade) => {
  return numberGrade >= 90
    ? "A"
    : numberGrade >= 80
    ? "B"
    : numberGrade >= 70
    ? "C"
    : numberGrade >= 60
    ? "D"
    : "F";
};

console.log(getGrade(91));
console.log(getGrade(90));
console.log(getGrade(81));
console.log(getGrade(80));
console.log(getGrade(71));
console.log(getGrade(70));
console.log(getGrade(61));
console.log(getGrade(60));
console.log(getGrade(55));
console.log(getGrade(25));

const prioritize = (urgent, important) => {
  return urgent && important ? 1 : important ? 2 : urgent ? 3 : 4;
};

console.log(prioritize(true, true), 1);
console.log(prioritize(false, true), 2);
console.log(prioritize(true, false), 3);
console.log(prioritize(false, false), 4);

const calculatePay = (wage, hours) => {
  if (hours <= 40) {
    return wage * hours;
  } else {
    const extraHours = hours - 40;
    return wage * 40 + extraHours * (1.5 * wage);
  }
};

console.log(calculatePay(10, 40));
console.log(calculatePay(10, 50));
