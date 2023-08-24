import { projectsArray } from "./project.js";
import deleteIcon from "./assets/delete.svg";
import { deleteProject } from "./deleteDom.js";


function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");

    if (projectDiv.innerHTML === "") {
        let myProjectDiv = document.createElement("div");
        myProjectDiv.classList.add("my-project");

        myProjectDiv.dataset.position = 0;

        let projectP = document.createElement("p");
        projectP.classList.add("project-p");
        projectP.textContent = projectsArray[0].name;

        let projectDelete = document.createElement("img");
        projectDelete.classList.add("project-delete-icon");
        projectDelete.addEventListener("click", deleteProject);
        projectDelete.src = deleteIcon;

        myProjectDiv.append(projectP, projectDelete);

        projectDiv.append(myProjectDiv);

    } else {
        projectDiv.innerHTML = "";
        projectsArray.forEach(project => {
            let myProjectDiv = document.createElement("div");
            myProjectDiv.classList.add("my-project");

            myProjectDiv.dataset.position = +(projectsArray.indexOf(project));

            let projectP = document.createElement("p");
            projectP.classList.add("project-p");
            projectP.textContent = project.name;

            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", deleteProject);
            projectDelete.src = deleteIcon;

            myProjectDiv.append(projectP, projectDelete);

            projectDiv.append(myProjectDiv);
        })
    }
}



export { createProjectDiv };
