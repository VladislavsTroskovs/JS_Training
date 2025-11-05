const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}


const todoList2 = [];
let todoListHTML = '';
for(let i = 0; i<todoList2.length; i++){
        const html = `<p>${todoList2[i]}</p>`;
        todoListHTML += html;
    }
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
function addTodo2(){
    const inputElement = document.querySelector('.js-todo-input-2');
    const name = inputElement.value;
    todoList2.push(name);
    console.log(todoList2);

    inputElement.value = '';
    todoListHTML = '';
    for(let i = 0; i<todoList2.length; i++){
        const html = `<p>${todoList2[i]}</p>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

const todoList3 = [{name: 'First task', dueDate: '2025-11-05'}];

function renderTodoList3() {
    let todoList2HTML = '';
    for (let i = 0; i < todoList3.length; i++) {
        const todo = todoList3[i];
        todoList2HTML += `
            <div class="todo-row">
                <div class="todo-name">${todo.name}</div>
                <div class="todo-date">${todo.dueDate}</div>
                <button class="delete-todo-button" onclick="deleteTodo3(${i})">Delete</button>
            </div>`;
    }
    document.querySelector('.js-todo-list-2').innerHTML = todoList2HTML;
}
function addTodo3() {
    const inputElement = document.querySelector('.js-todo-input-3');
    const dateElement = document.querySelector('.js-todo-due-date');
    const name = inputElement.value;
    const dueDate = dateElement.value;

    if (name && dueDate) {
        todoList3.push({ name, dueDate });
        inputElement.value = '';
        dateElement.value = '';
        renderTodoList3();
    }
}


function deleteTodo3(index) {
    todoList3.splice(index, 1);
    renderTodoList3();
}

// начальная отрисовка
renderTodoList3();
document.querySelector('.add-todo-button').addEventListener('click', ()=>{addTodo3();});