
function revealProjectForm() {
    const form = document.getElementById("project-form-container");
    form.style.display = "block";
}

function hideProjectForm() {
    const formInput = document.getElementById("project-name");
    formInput.value = "";
    
    const form = document.getElementById("project-form-container");
    form.style.display = "none";
}

function revealTaskForm() {
    const taskForm = document.getElementById("task-form-container");
    taskForm.style.display = "block";
}

function hideTaskForm() {
    document.getElementById("task-form").reset();

    const taskForm = document.getElementById("task-form-container");
    taskForm.style.display = "none";
}

export { revealProjectForm, hideProjectForm, revealTaskForm, hideTaskForm };