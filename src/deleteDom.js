import { projectsArray } from "./project.js";
import { createProjectDiv, targetObject, createProjectTasks} from "./dom.js";




function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    projectsArray.splice(targetIndex, 1);
    createProjectDiv();
}


function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    targetObject.taskArray.splice(targetIndex, 1);
    createProjectTasks();
}

export { deleteProject, deleteTask }