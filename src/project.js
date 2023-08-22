
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

// PROJECTS ARRAY
const projectsArray = [];

// FUNCTION THAT CREATES A PROJECT
function createProject(name) {
    let newProject = new Project(name);
    projectsArray.push(newProject);
}


export { createProject, projectsArray };