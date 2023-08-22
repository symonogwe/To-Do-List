
import { createProject, projectsArray } from "./project.js";
import { taskDone } from "./task.js";

// dummy project 1
createProject("school");

projectsArray[0].newTask("maths", "learn algebra", "tomorrow", "medium", false);

console.log(projectsArray[0]);

projectsArray[0].newTask("cre", "read bible", "friday", "low", false);

console.log(projectsArray[0].taskArray);

console.log("-----------------------------------");

// dummy project 2
createProject("work");

projectsArray[1].newTask("website", "finish building website", "next week", "high", false);

console.log(projectsArray[1]);

projectsArray[1].newTask("footer", "implement footer on website", "2 weeks", "medium", false);

projectsArray[1].newTask("meeting", "meet with dev lead", "today", "high", false);

console.log(projectsArray[1].taskArray);

console.log("------------------------------------------------");

// setting done task on projects

projectsArray[0].taskArray[0].checkList = true;
console.log(projectsArray[0].taskArray[0]);

taskDone(projectsArray[0]);

projectsArray[1].taskArray[2].checkList = true;
console.log(projectsArray[1].taskArray[2]);

taskDone(projectsArray[1]);






