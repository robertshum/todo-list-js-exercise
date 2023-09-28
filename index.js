const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(msg) {
      console.log(`${msg} 🎉🎉🎉`);
      this.complete = true;
    }
  };
  return task;
};

//these FUNCTIONS are now METHODS in our task object
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

//Driver Code Below

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");

const task2 = newTask("Do Laundry", "🧺;");

const tasks = [task1, task2];

//do stuff
task1.logState();
task1.markCompleted("Good job");
task1.logState();

console.log(tasks);