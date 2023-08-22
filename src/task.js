
class Task {
    constructor(title, description, dueDate, priority, checkList) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
}

// function that checks whether task is done
function taskDone(project) {
    project.taskArray.forEach(task => {
        if (task.checkList === true) {
            console.log(task.title + ` task in ${project.name} project has been completed`);
        }
    })
}

export { Task, taskDone};