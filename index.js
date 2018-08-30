const brain = require('brain.js')
const network = new brain.NeuralNetwork();

// first example
/* 
network.train([
  { input: [0,0,0], output: [0] },
  { input: [0,0,1], output: [0] },
  { input: [0,1,1], output: [0] },
  { input: [1,0,1], output: [1] },
  { input: [1,1,1], output: [1] },
]);

const output = network.run([1,0,0]);
console.log(output)
const output2 = network.run([0,0,0]);
console.log(output2)
const output3 = network.run([1,1,0]);
console.log(output3) 
*/


/***
 * another example of two team playing a cricket match
 * 4 team participating named 1, 2, 3, 4
 */

network.train([
  { input: [1, 2], output: [1] }, // 2 wins the game   1...means second team wins the game
  { input: [4, 2], output: [0] }, // 4 wins the game   1...means second team wins the game
  { input: [3, 2], output: [1] }, // 2 wins the game   1...means second team wins the game
  { input: [4, 1], output: [0] }, // 4 wins the game   1...means second team wins the game
  { input: [3, 4], output: [1] }, // 4 wins the game   1...means second team wins the game
  { input: [1, 3], output: [1] }, // 3 wins the game   1...means second team wins the game

]);

const output4 = network.run([1, 4]);
console.log("probability: "+ output4)
const output5 = network.run([2, 3]);
console.log("probability: "+ output5)
const output6 = network.run([4, 2]);
console.log("probability: "+ output6)