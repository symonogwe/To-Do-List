import { projectsArray } from "./project.js";
import { createProjectDiv} from "./dom.js";


function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    projectsArray.splice(targetIndex, 1);
    createProjectDiv();
}

export { deleteProject }