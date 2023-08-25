import deleteIcon from "./assets/delete.svg";
import eyeIcon from "./assets/eye.svg";

import { projectsArray } from "./project.js";
import { deleteProject } from "./deleteDom.js";
import { revealTaskForm } from "./form.js";

let targetObject;
let targetIndex;


function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");

    if (projectDiv.innerHTML === "") {
        let myProjectDiv = document.createElement("div");
        myProjectDiv.classList.add("my-project");
        
        myProjectDiv.dataset.position = 0;
        
        let projectP = document.createElement("p");
        projectP.classList.add("project-p");
        projectP.textContent = projectsArray[0].name;

        let projectAddIcon = document.createElement("img");
        projectAddIcon.classList.add("project-add-icon");
        projectAddIcon.addEventListener("click", revealTargetObject);
        projectAddIcon.src = eyeIcon;

        let projectDelete = document.createElement("img");
        projectDelete.classList.add("project-delete-icon");
        projectDelete.addEventListener("click", deleteProject);
        projectDelete.src = deleteIcon;

        myProjectDiv.append(projectP, projectAddIcon, projectDelete);

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

            let projectAddIcon = document.createElement("img");
            projectAddIcon.classList.add("project-add-icon");
            projectAddIcon.addEventListener("click", revealTargetObject);
            projectAddIcon.src = eyeIcon;

            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", deleteProject);
            projectDelete.src = deleteIcon;

            myProjectDiv.append(projectP, projectAddIcon, projectDelete);

            projectDiv.append(myProjectDiv);
        })
    }
}

function revealTargetObject(e) {
    targetIndex = e.target.parentElement.dataset.position;
    targetObject = projectsArray[targetIndex];

    createProjectTasks();
}

function createProjectTasks() {
    const rightContainer = document.querySelector(".right-main-container");

    rightContainer.innerHTML = "";

    // let targetIndex = e.target.parentElement.dataset.position;
    // targetObject = projectsArray[targetIndex];

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `${targetObject.name} To Do's`;

    rightContainer.append(taskHeader);

    if (targetObject.taskArray.length !== 0) {
        targetObject.taskArray.forEach(task => {
            // task div
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            // task div items
            let titleDiv = document.createElement("div");
            titleDiv.classList.add(".title-div");
            titleDiv.textContent = task.title;

            let descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add(".description-div");
            descriptionDiv.textContent = task.description;

            let dueDateDiv = document.createElement("div");
            dueDateDiv.classList.add(".due-date-div");
            dueDateDiv.textContent = task.dueDate;

            let priorityDiv = document.createElement("div");
            priorityDiv.classList.add(".priority-div");
            priorityDiv.textContent = task.priority;

            let checkListDiv = document.createElement("div");
            checkListDiv.classList.add(".check-list-div");
            checkListDiv.textContent = task.checklist;

            taskDiv.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,checkListDiv);

            rightContainer.append(taskDiv);
        })
    }

    const addTaskBtnDiv = document.createElement("div");
    addTaskBtnDiv.classList.add("add-task-btn-div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.addEventListener("click", revealTaskForm);

    const taskBtnP = document.createElement("p");
    taskBtnP.textContent = "New Task";

    addTaskBtn.append(taskBtnP);

    addTaskBtnDiv.append(addTaskBtn);

    rightContainer.append(addTaskBtnDiv);
}



export { createProjectDiv, targetObject, revealTargetObject, createProjectTasks };
