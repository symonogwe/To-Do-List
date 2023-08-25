import { targetObject } from "./dom.js";
import { createProjectTasks } from "./dom.js";
import { hideTaskForm } from "./form.js";

class Task {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// function that creates a task
function createTask() {
    let name = document.getElementById("task-name").value;
    let date = document.getElementById("task-date").value;
    let priority = document.getElementById("task-priority").value;

    targetObject.newTask(name, date, priority);
    // console.log(targetObject);

    createProjectTasks();
    hideTaskForm();
}

// function that checks whether task is done
function taskDone(project) {
    project.taskArray.forEach(task => {
        if (task.checkList === true) {
            console.log(task.title + ` task in ${project.name} project has been completed`);
        }
    })
}

export { Task, taskDone, createTask};