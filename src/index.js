
import { Project } from "./project.js";

const school = new Project("school");
school.newTask("maths", "learn algebra", "tomorrow");

console.log(school.taskArray[0]);



console.log(school);