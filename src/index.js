
import "./styles/index.css";

import logo from "./assets/logo.svg";
import homeDivIcon from "./assets/home.svg";
import dateDivIcon from "./assets/day.svg";
import addIcon from "./assets/add.svg";
import eyeIcon from "./assets/eye.svg";
import githubIcon from "./assets/github.svg"
import twitterIcon from "./assets/twitter.svg";

import { createProject } from "./project.js";
import { revealProjectForm, hideProjectForm, hideTaskForm } from "./form.js";
import { createTask } from "./task.js";
import { createAllTasks, createTodayTasks, createThisWeekTasks, createProjectDiv } from "./dom.js";


// NAV SECTION
const logoIcon = document.querySelector(".logo-icon");
logoIcon.src = logo;

// LEFT SIDE-BAR (HOME SECTION)
const homeImg = document.getElementById("home-div-icon");
homeImg.src = homeDivIcon;

const todayImg = document.getElementById("today-div-icon");
todayImg.src = dateDivIcon;

const thisWeekImg = document.getElementById("week-div-icon");
thisWeekImg.src = dateDivIcon;

const projectPlusImg = document.querySelector(".project-plus-icon");
projectPlusImg.src = addIcon;

const homeEye = document.querySelector(".home-eye");
homeEye.src = eyeIcon;
homeEye.addEventListener("click", createAllTasks);

const todayEye = document.querySelector(".today-eye");
todayEye.src = eyeIcon;
todayEye.addEventListener("click", createTodayTasks);

const weekEye = document.querySelector(".week-eye");
weekEye.src = eyeIcon;
weekEye.addEventListener("click", createThisWeekTasks);


// REVEAL PROJECT FORM
const revealFormBtn = document.querySelector(".project-btn");
revealFormBtn.addEventListener("click", revealProjectForm);

// HIDE PROJECT FORM BTN
const projectCancelBtn = document.querySelector(".project-form-cancel");
projectCancelBtn.addEventListener("click", hideProjectForm);


// CREATE NEW PROJECT
const projectNameBtn = document.querySelector(".project-form-btn");
projectNameBtn.addEventListener("click", createProject);

// CREATE NEW TASK
const taskBtn = document.querySelector(".task-btn");
taskBtn.addEventListener("click", createTask);

// HIDE TASK FORM BTN
const taskCancelBtn = document.querySelector(".hide-task-form");
taskCancelBtn.addEventListener("click", hideTaskForm);

// FOOTER
const githubImg = document.querySelector(".social-icon-1");
githubImg.src = githubIcon;

const twitterImg = document.querySelector(".social-icon-2");
twitterImg.src = twitterIcon;

// LOCAL STORAGE PROJECT CREATION
createProjectDiv();

