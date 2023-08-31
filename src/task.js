import { targetObject, targetIndex } from "./dom.js";
import { createProjectTasks } from "./dom.js";
import { hideTaskForm } from "./form.js";
import { addTaskToTarget, getProjectArray } from "./localeStorage.js";


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

    // targetObject.newTask(name, date, priority);
    addTaskToTarget(targetIndex, name, date, priority);
    console.log(getProjectArray()[targetIndex]);

    // createProjectTasks();
    hideTaskForm();
}



export { Task, createTask};
