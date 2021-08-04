const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")

function handleTodoSubmit(event) {
    event.preventDefault()

    const todoInput = todoForm.querySelector("input")
    const newTodo = todoInput.value

    addLi(newTodo)
    saveTodo()

    todoInput.value = ""
}

function addLi(newTodo) {
    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")

    newLi.append(newSpan)
    newLi.append(newButton)

    newSpan.innerText = newTodo
    newButton.innerText = "Delete"
    newButton.addEventListener("click", deleteLi)

    todoList.append(newLi)
    todoLS.push(newTodo)
}

function deleteLi(event) {
    console.log(event)

    const clickedButton = event.srcElement
    const clickedLi = clickedButton.parentElement
    //const clickedLi = event.path[1]

    clickedLi.remove()
}

const todoLS = []

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todoLS))
}

todoForm.addEventListener("submit", handleTodoSubmit)