import { projectsArray } from "./project.js";
import { createProjectDiv, targetObject, createProjectTasks} from "./dom.js";



// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    projectsArray.splice(targetIndex, 1);
    createProjectDiv();
}

// TASKS COMPLETE & DELETE
let completedDiv = [];
function getFinishTask(e) {
    // console.log(e.target.parentElement.parentElement);
    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;
    completedDiv.push(targetObject.taskArray[completedDivIndex]);
    createProjectTasks();
    console.log(completedDiv);
}

// function finishTask() {
//     console.log(targetObject.taskArray[completedDivIndex]);
// }


function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    targetObject.taskArray.splice(targetIndex, 1);
    createProjectTasks();
}

export { deleteProject, deleteTask, getFinishTask, completedDiv }