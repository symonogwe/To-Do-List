import { createProjectDiv, targetObject, targetIndex, createProjectTasks} from "./dom.js";
import { getProjectArray, deleteStorageProject, pushCompletedTask } from "./localeStorage.js";



// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    deleteStorageProject(targetIndex);
    createProjectDiv();
}

// TASKS COMPLETE & DELETE
function getFinishTask(e) {
    // let completedDivIndex = e.target.parentElement.parentElement.dataset.index;
    // let targetTask = JSON.stringify(getProjectArray()[targetIndex].taskArray[completedDivIndex]);
    // let parsedTargetTask = JSON.parse(targetTask)
    // getProjectArray()[targetIndex].completedArray.push(parsedTargetTask);
    // console.log(getProjectArray()[targetIndex].completedArray);

    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;

    let targetTask = getProjectArray()[targetIndex].taskArray[completedDivIndex];
    pushCompletedTask(completedDivIndex, targetTask);

    console.log(getProjectArray()[targetIndex].completedArray);

    createProjectTasks();
}

function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    targetObject.taskArray.splice(targetIndex, 1);
    createProjectTasks();
}

export { deleteProject, deleteTask, getFinishTask }