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
    taskMainContainer.className = "task-item__main-container";

    const tasksItemContent = document.createElement('div');
    tasksItemContent.className = "task-item__main-content";

    const checkBoxForm = document.createElement('form');
    checkBoxForm.className = "checkbox-form";

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = "checkbox-form__checkbox";
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = taskId; 

    const taskLabel = document.createElement('label');
    taskLabel.htmlFor = taskId; 

    const taskSpan = document.createElement('span');
    taskSpan.className = "task-item__text";
    taskSpan.textContent = taskText; 

    checkBoxForm.append(inputCheckbox, taskLabel);
    tasksItemContent.append(checkBoxForm, taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = "task-item__delete-button default-button delete-button";
    deleteButton.dataset.deleteTaskId = "5";
    deleteButton.textContent = "Видалити";

    taskMainContainer.append(tasksItemContent, deleteButton);
    taskItem.prepend(taskMainContainer);
    tasksList.append(taskItem);
    
    return taskItem;
}

const tasksList = document.createElement('div');
tasksList.className = "tasks-list";

const createErrorSpan = (errorText) => {
    const errorSpan = document.createElement('span');
    errorSpan.className = "error-message-block";
    errorSpan.textContent = errorText;
    return errorSpan;
}   

const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();

    const deleteErrorSpan = createTaskBlock.querySelector('.error-message-block');
    
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

const modalOverlayContainer = document.createElement('div');
modalOverlayContainer.className = "modal-overlay modal-overlay_hidden";

const deleteModal = document.createElement('div');
deleteModal.className = "delete-modal";

const modalQuestionDelete = document.createElement('h3');
modalQuestionDelete.className = "delete-modal__question";
modalQuestionDelete.innerText = "Ви дійсно хочете видалити цю задачу?";

const deleteModalButtons = document.createElement('div');
deleteModalButtons.className = "delete-modal__buttons";

const cancelDeleteButton = document.createElement('button');
cancelDeleteButton.className = "delete-modal__button delete-modal__cancel-button";
cancelDeleteButton.innerText = "Відхилити";

const confirmDeleteButton = document.createElement('button');
confirmDeleteButton.className = "delete-modal__button delete-modal__confirm-button";
confirmDeleteButton.innerText = "Видалити";

deleteModalButtons.append(cancelDeleteButton, confirmDeleteButton);
deleteModal.append(modalQuestionDelete, deleteModalButtons);
modalOverlayContainer.append(deleteModal);

document.body.append(tasksList, modalOverlayContainer);

const itemDelete = tasksList.addEventListener('click', (event) => {
    const isButtonDelete = event.target.closest('.task-item__delete-button');
    const findItem = event.target.closest('.task-item');
    const findItemId = findItem.getAttribute('data-task-id')

    if (isButtonDelete) {
        modalOverlayContainer.classList.remove("modal-overlay_hidden");
    }

    modalOverlayContainer.addEventListener('click', (event) => {
        const isConfirmButton = event.target.closest('.delete-modal__confirm-button');
        const isCancelButton = event.target.closest('.delete-modal__cancel-button');
    
        if (isConfirmButton) {
            findItem.remove();

            const findId = tasks.findIndex((item) => item.id === findItemId)
            if (findId === 0) {
                tasks.shift()
            } else {
                tasks.splice(findId, findId);
            }

            modalOverlayContainer.classList.add("modal-overlay_hidden");
        } else if (isCancelButton) {
            modalOverlayContainer.classList.add('modal-overlay_hidden');
        }
    })
})





