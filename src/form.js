
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


export { revealProjectForm, hideProjectForm };