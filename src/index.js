
import { createProject, projectsArray } from "./project.js";

// dummy project 1
createProject("school");

projectsArray[0].newTask("maths", "learn algebra", "tomorrow");

console.log(projectsArray[0]);

projectsArray[0].newTask("cre", "read bible", "friday");

console.log(projectsArray[0].taskArray);

console.log("-----------------------------------");

// dummy project 2
createProject("work");

projectsArray[1].newTask("website", "finish building website", "next week");

console.log(projectsArray[1]);

projectsArray[1].newTask("footer", "implement footer on website", "2 weeks");

projectsArray[1].newTask("meeting", "meet with dev lead", "today");

console.log(projectsArray[1].taskArray);


