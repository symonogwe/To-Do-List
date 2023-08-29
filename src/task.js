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

    createProjectTasks();
    hideTaskForm();
}



export { Task, createTask};