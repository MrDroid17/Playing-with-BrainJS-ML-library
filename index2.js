const brain = require('brain.js');
const data = require('./data.json')

const network =new  brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input : item.text,
  output : item.category
}));

network.train(trainingData, {
  iteration: 2000
})

const output = network.run('the code has some bugs');

console.log(`Category: ${output}`);