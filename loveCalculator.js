// This is the example of randomization
prompt("What is your name");
prompt("What is your lover name");

var loveScore = Math.random() * 100; // 100% we take always
loveScore = Math.floor(loveScore) + 1;
alert("Your loveScore is " + loveScore);