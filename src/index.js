
import "./styles/index.css";

import logo from "./assets/logo.svg";
import homeDivIcon from "./assets/home.svg";
import dateDivIcon from "./assets/day.svg";
import addIcon from "./assets/add.svg";

import { createProject } from "./project.js";
import { taskDone } from "./task.js";
import { revealProjectForm } from "./form.js";
import { deleteProject } from "./deleteDom.js";


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

// REVEAL PROJECT FORM
const revealFormBtn = document.querySelector(".project-btn");
revealFormBtn.addEventListener("click", revealProjectForm);

// CREATE NEW PROJECT
const projectNameBtn = document.querySelector(".project-form-btn");
projectNameBtn.addEventListener("click", createProject);
