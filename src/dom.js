import { projectsArray } from "./project.js";

function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");

    if (projectDiv.innerHTML === "") {
        let myProjectDiv = document.createElement("div");
        myProjectDiv.classList.add("my-project");

        myProjectDiv.dataset.position = 0;

        let projectP = document.createElement("p");
        projectP.classList.add("project-p");
        projectP.textContent = projectsArray[0].name;

        myProjectDiv.append(projectP);

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

            myProjectDiv.append(projectP);

            projectDiv.append(myProjectDiv);
        })
    }
}



export { createProjectDiv };
