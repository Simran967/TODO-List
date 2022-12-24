// var root = document.querySelector(':root');
var container = document.querySelector('.container');
const newTaskValue = document.querySelector('#add-new-task');
var taskList = document.getElementById('task-list');
var totalTasks = document.getElementById('total-task');

// declaring variable to keep track of total tasks 
var count = totalTasks.value;
var id = 0;

// function to add task
function addTask(){

    // creating list while adding task and giving class name
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'new-task-item');

    // Incrementing id for providing unique id to every new task
    id++;
    newTaskItem.setAttribute('id', id);

    //  creating button
    const newCheckButton = document.createElement('button');

    // creating span for data which will be added in task list
    const newTaskData = document.createElement('span');
    newTaskData.innerHTML = newTaskValue.value;
    newTaskData.setAttribute('class', 'new-task-data');

    // creating delete button to delete any task
    const newDeleteButton = document.createElement('button');
    newDeleteButton.setAttribute('class', 'new-delete-button');

    // calling delete function whenever we click delete button
    newDeleteButton.setAttribute('onClick', `deleteTask(${id})`);
    newDeleteButton.innerHTML = '<i class="fa-solid fa-delete-left"></i>'
 
    // appending task to the tasklist 
    taskList.appendChild(newTaskItem);

    // appending check button to task 
    newTaskItem.appendChild(newCheckButton);

    newCheckButton.innerHTML = "<i class='fas fa-check'></i>"
    // calling checked function whenever we click on check button
    newCheckButton.addEventListener("click", () => {
        checked();
    });

    // appending task data to task
    newTaskItem.appendChild(newTaskData);

    // appending delete button to task
    newTaskItem.appendChild(newDeleteButton);

    // increasing count of tasks which are in tasklist
    count++ ;
    document.getElementById('total-task').value = count;

    // checked function 
    function checked(){
    newTaskItem.classList.toggle("checked");
    newCheckButton.classList.toggle("newCheckButton")
    }

    // once task is added to tasklist then make the container empty
    newTaskValue.value = '';
    container.classList.remove('task-list');

}

// function to delete task

function deleteTask(id){
    
    let val = document.getElementById(id).remove();
    count-- ;
    document.getElementById('total-task').value = count;

}