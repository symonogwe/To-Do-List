
function revealProjectForm() {
    const form = document.getElementById("project-form-container");
    form.style.display = "block";
}


function projectName() {
    let name = document.getElementById("project-name").value;

    const form = document.getElementById("project-form-container");
    form.style.display = "none";

}



const projectNameBtn = document.querySelector(".project-form-btn");
projectNameBtn.addEventListener("click", projectName);


export { revealProjectForm };