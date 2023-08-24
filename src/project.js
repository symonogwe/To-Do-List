
import { Task } from "./task.js";
import { createProjectDiv } from "./dom.js";
import { hideProjectForm } from "./form.js";

// PROJECT CONSTRUCTOR
class Project {
    constructor(name) {
        this.name = name;
    }

    taskArray = [];

    newTask = (title, description, dueDate, priority, checkList) => {
        this.taskArray.push(new Task(title, description, dueDate, priority, checkList));
    }

}

// PROJECTS ARRAY
const projectsArray = [];

// FUNCTION THAT CREATES A PROJECT
function createProject() {
    let name = document.getElementById("project-name").value;

    let newProject = new Project(name);
    projectsArray.push(newProject);

    hideProjectForm();
    
    createProjectDiv();
}


export { createProject, projectsArray };