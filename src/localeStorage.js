import { Task } from "./task.js";
import { targetIndex } from "./dom.js";

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
        modifyProjectArray(project);
    } else {
        modifyProjectArray(project);
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

    projectArray.splice(index, 0, target);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}

function pushCompletedTask(index, target) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectArray[targetIndex].completedArray.push(target);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}

function deleteStorageTask(index) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectArray[targetIndex].taskArray.splice(index, 1);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}

export { modifyProjectArray, getProjectArray, checkProjectsInStorage, deleteStorageProject, addTaskToTarget, pushCompletedTask, deleteStorageTask }
