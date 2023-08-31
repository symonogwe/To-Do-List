import { createProjectDiv, targetObject, targetIndex, createProjectTasks} from "./dom.js";
import { getProjectArray, deleteStorageProject, pushCompletedTask, deleteStorageTask } from "./localeStorage.js";



// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    deleteStorageProject(targetIndex);
    createProjectDiv();
}

// TASKS COMPLETE & DELETE
function getFinishTask(e) {

    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;

    let targetTask = getProjectArray()[targetIndex].taskArray[completedDivIndex];
    pushCompletedTask(completedDivIndex, targetTask);

    createProjectTasks();
}

function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    // targetObject.taskArray.splice(targetIndex, 1);
    deleteStorageTask(targetIndex);
    createProjectTasks();
}

export { deleteProject, deleteTask, getFinishTask }