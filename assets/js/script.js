
const button = document.querySelector(".new-task-button");
const input = document.querySelector("#task-imput");
const taskContainer = document.querySelector(".task-container");




button.addEventListener('click', () => handlleAddTask());
input.addEventListener('change', () => handlleInputChange());


const handlleAddTask = () => {
     const inputIsValid = validateImput();

     if(!inputIsValid){
         return input.classList.add('error');
     }

     const taskItemContainer = document.createElement('div');
taskItemContainer.classList.add('task-item');

const taskText = document.createElement('p'); 
taskText.innerText = input.value;

const deleteTarefa = document.createElement('i');
deleteTarefa.classList.add('fa-solid');
deleteTarefa.classList.add('fa-trash-can');

taskItemContainer.appendChild(taskText);
taskItemContainer.appendChild(deleteTarefa);

taskContainer.appendChild(taskItemContainer);

}

const handlleInputChange = () => {
    const inputIsValid = validateImput();

    if(inputIsValid){
        return input.classList.remove('error');
    }
    

}

const validateImput = () => input.value.trim().length > 0;

