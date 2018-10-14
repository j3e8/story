let Topics = {};

const TOPICS = [
  'Volcanoes',
  'Mashed potatoes',
  'Playing chess',
  'Kissing',
  'Exercise',
  'Self-driving cars',
  'Airplanes',
  'Surfing',
  'Going to church'
];

Topics.pickTopic = function() {
  let r = Math.floor(Math.random() * TOPICS.length);
  return TOPICS[r];
}

module.exports = Topics;
