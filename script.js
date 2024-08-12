const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const listTodo = document.querySelector(".listTodo");

let todoListValue = [];

const showTodoList = () => {
    listTodo.innerHTML = "";
    todoListValue = getTodoFromLocalstorage();
    todoListValue.forEach((currTodo, index) => {
        var liiem = document.createElement("li");
        liiem.innerHTML = currTodo;
        liiem.addEventListener("click", () => deleteTodoItem(index));
        listTodo.append(liiem);

        Object.assign(liiem.style, {
            color: "black",
            fontSize: "17px",
            paddingLeft: "4px",
            paddingTop: "8px",
            cursor: "pointer",
            listStyleType: "none",
            listStyle: "decimal",
            letterSpacing: "1.5px",
            textTransform: "capitalize",
        })

        liiem.addEventListener('mouseover', () => {
            liiem.style.opacity = .4;
        });

        liiem.addEventListener('mouseout', () => {
            liiem.style.opacity = 1;
        });
    });
};

btn.addEventListener("click", () => {
    let newtodo = input.value.trim();

    if (newtodo.length != 0) {
        todoListValue.push(newtodo);
        addTodoLocalStorage(todoListValue);
        showTodoList();
    }
    input.value = "";
});

const getTodoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('todoData')) || [];
};

const addTodoLocalStorage = (todo) => {
    localStorage.setItem('todoData', JSON.stringify(todo));
};

const deleteTodoItem = (index) => {
    todoListValue.splice(index, 1);
    addTodoLocalStorage(todoListValue);
    showTodoList();
};

showTodoList();
