type TodoStates = {
    id: number;
    title: string;
    done: boolean;
}

let todoItems: TodoStates[];

// api
function fetchTodoItems() {
    const todos: TodoStates[] = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}

// crud methods
function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
}

function addTodo(todo: TodoStates) {
    todoItems.push(todo);
}

function deleteTodo(index: number) {
    todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoStates) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
    return todoItems[0];
}

function showCompleted() {
    return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    addTodo( { id: 4, title: '안녕4', done: false })
    addTodo( { id: 5, title: '안녕5', done: false })
}

// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();