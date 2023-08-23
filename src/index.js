
import "./styles/index.css";

import logo from "./assets/logo.svg";
import homeDivIcon from "./assets/home.svg";
import dateDivIcon from "./assets/day.svg";
import addIcon from "./assets/add.svg";

import { createProject } from "./project.js";
import { taskDone } from "./task.js";


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

// CREATE NEW PROJECT
const projectBtn = document.querySelector(".project-btn");
projectBtn.addEventListener("click", createProject);