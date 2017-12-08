const Task = function (dificultyLevel, urgencyLevel, reward) {
  this.dificultyLevel = dificultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.taskCompletion = false;
};

module.exports = Task;
