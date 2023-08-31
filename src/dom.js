import deleteIcon from "./assets/delete.svg";
import addIcon from "./assets/add.svg"

import { deleteProject, deleteTask, getFinishTask } from "./deleteDom.js";
import { revealTaskForm } from "./form.js";
import { getProjectArray } from "./localeStorage.js";

import isToday from "date-fns/isToday";
import isThisWeek from 'date-fns/isThisWeek';
import parseISO from 'date-fns/parseISO';

let targetObject;
let targetIndex;


function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");
    projectDiv.innerHTML = "";

    if (getProjectArray().length !== 0) {
        for (let i = 0; i < getProjectArray().length; i++) {
            let myProjectDiv = document.createElement("div");
            myProjectDiv.classList.add("my-project");
    
            myProjectDiv.dataset.position = i;
    
            let projectP = document.createElement("p");
            projectP.classList.add("project-p");
            projectP.textContent = getProjectArray()[i].name;
    
            let projectAddIcon = document.createElement("img");
            projectAddIcon.classList.add("project-add-icon");
            projectAddIcon.addEventListener("click", revealTargetObject);
            projectAddIcon.src = addIcon;
    
            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", deleteProject);
            projectDelete.src = deleteIcon;
    
            myProjectDiv.append(projectP, projectAddIcon, projectDelete);
    
            projectDiv.append(myProjectDiv);
        }

    }

}

function revealTargetObject(e) {
    targetIndex = e.target.parentElement.dataset.position;
    targetObject = getProjectArray()[targetIndex];

    createProjectTasks();
}

function createProjectTasks() {
    const rightContainer = document.querySelector(".right-main-container");

    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `${targetObject.name} To Do's`;

    rightContainer.append(taskHeader);

    if (getProjectArray()[targetIndex].taskArray.length !== 0) {
        for (let i = 0; i < getProjectArray()[targetIndex].taskArray.length; i++) {
            // task div
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            taskDiv.dataset.index = i;

            // task div items
            let titleDiv = document.createElement("div");
            titleDiv.classList.add("title-div");
            titleDiv.textContent = getProjectArray()[targetIndex].taskArray[i].title;

            let dueDateDiv = document.createElement("div");
            dueDateDiv.classList.add("due-date-div");
            dueDateDiv.textContent = getProjectArray()[targetIndex].taskArray[i].dueDate;

            let priorityDiv = document.createElement("div");
            priorityDiv.classList.add("priority-div");
            priorityDiv.textContent = getProjectArray()[targetIndex].taskArray[i].priority;

            let completeTaskDiv = document.createElement("div");
            completeTaskDiv.classList.add("complete-task-div");
            let completeTaskBtn = document.createElement("button");
            completeTaskBtn.classList.add("complete-task-btn");
            completeTaskBtn.textContent = "Done";
            completeTaskBtn.addEventListener("click", getFinishTask);
            completeTaskDiv.append(completeTaskBtn);

            let deleteTaskDiv = document.createElement("div");
            deleteTaskDiv.classList.add("delete-task-div");
            let deleteTaskImg = document.createElement("img");
            deleteTaskImg.classList.add("delete-task-img");
            deleteTaskImg.addEventListener("click", deleteTask)
            deleteTaskImg.src = deleteIcon;
            deleteTaskDiv.append(deleteTaskImg);

            taskDiv.append(titleDiv, dueDateDiv, priorityDiv, completeTaskDiv, deleteTaskDiv);

            // if (completedDiv.length !== 0) {
            //     completedDiv.forEach(div => {
            //         if (JSON.stringify(div) === JSON.stringify(getProjectArray()[targetIndex].taskArray[i])) {
            //             taskDiv.classList.toggle("completed-task");
            //         }
            //     })
            // }
            if (getProjectArray()[targetIndex].completedArray !== 0) {
                getProjectArray()[targetIndex].completedArray.forEach(completed => {
                    if (JSON.stringify(completed) ===  JSON.stringify(getProjectArray()[targetIndex].taskArray[i])) {
                        taskDiv.classList.toggle("completed-task");
                    }
                })
            }


            rightContainer.append(taskDiv);
        }
    }

    const addTaskBtnDiv = document.createElement("div");
    addTaskBtnDiv.classList.add("add-task-btn-div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.addEventListener("click", revealTaskForm);

    const taskBtnP = document.createElement("p");
    taskBtnP.textContent = `New ${targetObject.name} Task`;

    addTaskBtn.append(taskBtnP);

    addTaskBtnDiv.append(addTaskBtn);

    rightContainer.append(addTaskBtnDiv);
}

function createAllTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `ALL TASKS`;

    rightContainer.append(taskHeader);

    getProjectArray().forEach(project => {
        if (project.taskArray.length !== 0) {
            project.taskArray.forEach(task => {
                // task div
                let taskDiv = document.createElement("div");
                taskDiv.classList.add("task-div");

                // task div items
                let titleDiv = document.createElement("div");
                titleDiv.classList.add("title-div");
                titleDiv.textContent = task.title;

                let dueDateDiv = document.createElement("div");
                dueDateDiv.classList.add("due-date-div");
                dueDateDiv.textContent = task.dueDate;

                let priorityDiv = document.createElement("div");
                priorityDiv.classList.add("priority-div");
                priorityDiv.textContent = task.priority;

                taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                completedDiv.forEach(div => {
                    if (div === task) {
                        taskDiv.classList.toggle("completed-task")
                    }
                })

                rightContainer.append(taskDiv);

            })
        }
    })
}

function createTodayTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `TODAY'S TASKS`;

    rightContainer.append(taskHeader);

    getProjectArray().forEach(project => {
        if (project.taskArray.length !== 0) {
            project.taskArray.forEach(task => {
                let parsedDate = parseISO(task.dueDate);

                if (isToday(parsedDate)) {
                    // task div
                    let taskDiv = document.createElement("div");
                    taskDiv.classList.add("task-div");

                    // task div items
                    let titleDiv = document.createElement("div");
                    titleDiv.classList.add("title-div");
                    titleDiv.textContent = task.title;

                    let dueDateDiv = document.createElement("div");
                    dueDateDiv.classList.add("due-date-div");
                    dueDateDiv.textContent = task.dueDate;

                    let priorityDiv = document.createElement("div");
                    priorityDiv.classList.add("priority-div");
                    priorityDiv.textContent = task.priority;

                    taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                    completedDiv.forEach(div => {
                        if (div === task) {
                            taskDiv.classList.toggle("completed-task")
                        }
                    })

                    rightContainer.append(taskDiv);
                }
            })
        }
    })
}

function createThisWeekTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `THIS WEEK'S TASKS`;

    rightContainer.append(taskHeader);

    getProjectArray().forEach(project => {
        if (project.taskArray.length !== 0) {
            project.taskArray.forEach(task => {
                let parsedDate = parseISO(task.dueDate);

                if (isThisWeek(parsedDate)) {
                    // task div
                    let taskDiv = document.createElement("div");
                    taskDiv.classList.add("task-div");

                    // task div items
                    let titleDiv = document.createElement("div");
                    titleDiv.classList.add("title-div");
                    titleDiv.textContent = task.title;

                    let dueDateDiv = document.createElement("div");
                    dueDateDiv.classList.add("due-date-div");
                    dueDateDiv.textContent = task.dueDate;

                    let priorityDiv = document.createElement("div");
                    priorityDiv.classList.add("priority-div");
                    priorityDiv.textContent = task.priority;

                    taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                    completedDiv.forEach(div => {
                        if (div === task) {
                            taskDiv.classList.toggle("completed-task")
                        }
                    })

                    rightContainer.append(taskDiv);
                }
            })
        }
    })
}



export { createProjectDiv, targetObject, revealTargetObject, createProjectTasks, createAllTasks, createTodayTasks, createThisWeekTasks, targetIndex };
