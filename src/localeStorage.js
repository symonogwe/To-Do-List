
function modifyProjectArray(project) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.push(project);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

// function to return storage-project-array
function getProjectArray() {
    return JSON.parse(localStorage.getItem("projectsArray"));
}

function checkProjectsInStorage(project) {
    if (!localStorage.getItem("projectsArray")) {
        const projectsArray = [];
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
    } else {
        modifyProjectArray(project)
    }
}

function deleteStorageProject(index) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.splice(index, 1);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

export { modifyProjectArray, getProjectArray, checkProjectsInStorage, deleteStorageProject }