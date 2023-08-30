import { createProjectDiv, targetObject, createProjectTasks} from "./dom.js";
import { getProjectArray, deleteStorageProject } from "./localeStorage.js";



// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    deleteStorageProject(targetIndex);
    createProjectDiv();
}

// TASKS COMPLETE & DELETE
let completedDiv = [];
function getFinishTask(e) {
    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;
    completedDiv.push(targetObject.taskArray[completedDivIndex]);
    createProjectTasks();
    console.log(completedDiv);
}

function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    targetObject.taskArray.splice(targetIndex, 1);
    createProjectTasks();
}

export { deleteProject, deleteTask, getFinishTask, completedDiv }