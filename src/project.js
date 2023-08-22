
import { Task } from "./task.js";

// PROJECT CONSTRUCTOR
class Project {
    constructor(name) {
        this.name = name;
    }

    taskArray = [];

    newTask = (title, description, dueDate) => {
        this.taskArray.push(new Task(title, description, dueDate));
    }

}


export { Project };