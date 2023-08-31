import { Task } from "./task.js";

// STORAGE PROJECT FUNCTIONS
function modifyProjectArray(project) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.push(project);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

function getProjectArray() {
    return JSON.parse(localStorage.getItem("projectsArray"));
}

function checkProjectsInStorage(project) {
    if (!localStorage.getItem("projectsArray")) {
        const projectsArray = [];
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
    } else {
        modifyProjectArray(project)
    }
}

function deleteStorageProject(index) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.splice(index, 1);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

// STORAGE TASKS FUNCTIONS
function addTaskToTarget(index, name, date, priority) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));
    let target = projectArray[index];
    projectArray.splice(index, 1);

    target.taskArray.push(new Task(name, date, priority))
    // console.log(target);

    projectArray.splice(index, 0, target);

    localStorage.setItem("projectsArray", projectArray);
}

export { modifyProjectArray, getProjectArray, checkProjectsInStorage, deleteStorageProject, addTaskToTarget }
