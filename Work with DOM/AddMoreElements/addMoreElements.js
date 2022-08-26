const tasks = [
    {
        id:'1138465078061',
        completed: false,
        text: 'Подивитись новий урок з JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Виконати тест після уроку',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Виконати ДЗ після уроку',
    },
]

function creatItemsToItemList(taskId, taskText) {
    const taskItem = document.createElement('div');
    taskItem.className = "task-item";
    taskItem.dataset.taskId = taskId;  

    const taskMainContainer = document.createElement('div');
    taskMainContainer.className = "item-task_main-container";

    const tasksItemContent = document.createElement('div');
    tasksItemContent.className = "item-task_main-content";

    const checkBoxForm = document.createElement('form');
    checkBoxForm.className = "checkbox-form";

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = "checkbox-form_checkbox";
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = taskId; 

    const taskLabel = document.createElement('label');
    taskLabel.htmlFor = taskId; 

    const taskSpan = document.createElement('span');
    taskSpan.className = "task-item_text";
    taskSpan.textContent = taskText; 

    checkBoxForm.append(inputCheckbox, taskLabel);
    tasksItemContent.append(checkBoxForm, taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = "task-item_delete-button default-button delete-button";
    deleteButton.dataset.deleteTaskId = "5";
    deleteButton.textContent = "Видалити";

    taskMainContainer.append(tasksItemContent, deleteButton);
    taskItem.prepend(taskMainContainer);
    tasksList.append(taskItem);

    return taskItem;
}

const tasksList = document.createElement('div');
tasksList.className = "tasks-list";

document.body.append(tasksList);

const createErrorSpan = (errorText) => {
    const errorSpan = document.createElement('span');
    errorSpan.className = "error-massege-block";
    errorSpan.textContent = errorText;
    return errorSpan;
}   

const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();

    const deleteErrorSpan = createTaskBlock.querySelector('.error-massege-block');
    
    const newTaskText = event.target.taskName.value.trim();
    const textExist = tasks.some((task) => task.text === newTaskText);
    
    if (deleteErrorSpan) {
    deleteErrorSpan.remove();
    }
    
    if (!newTaskText) {
        createTaskBlock.append(
            createErrorSpan('Назва завдання не повинно бути пустим!')
            );
    } else if (textExist) {
        createTaskBlock.append(
            createErrorSpan('Завдання з такою назвою вже існує!')
            );
    } else if (newTaskText && !textExist) {
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
        }
        tasks.push(newTask);
        const taskItem = creatItemsToItemList(newTask.id, newTask.text);
        tasksList.append(taskItem);

    }   
})

tasks.forEach(item => {
    const taskItem = creatItemsToItemList(item.id, item.text);
    tasksList.append(taskItem);
})