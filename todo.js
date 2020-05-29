var inputElement = document.querySelector("input")
var listElement = document.querySelector("#app")
var buttonElement = document.querySelector("#button")

var todos = JSON.parse(localStorage.getItem("list_todos")) || []

function renderList() {
    listElement.innerHTML = ""
    for (index in todos) {
        var newTodoElement = document.createElement("div")
        var todoTextDiv = document.createElement("div")
        var todoText = document.createTextNode(todos[index].todo)

        todoTextDiv.setAttribute("class", "textTodo")
        todoTextDiv.appendChild(todoText)
       
        var removDiv = document.createElement("div")
        var removElement = document.createElement("div")
        var removText = document.createTextNode("")
        removElement.href = "#"
        removElement.appendChild(removText)
        removElement.setAttribute("onclick", "removerTodo(" + index + ")")
        removElement.setAttribute("class", "remover")

        removDiv.setAttribute("class", "divRemov")
        removDiv.appendChild(removElement)
        

        newTodoElement.appendChild(todoTextDiv)
        newTodoElement.appendChild(removDiv)

        if (todos[index].status === "undone") {
            newTodoElement.setAttribute("class", "todoUndone")
        } else {
            newTodoElement.setAttribute("class", "todoDone")
        }

        todoTextDiv.setAttribute("onclick", "changeColor(" + index + ")")
        
        listElement.appendChild(newTodoElement)


    }
}
function addTodo() {
    var todoText = inputElement.value
    if (todoText === "") {
        alert("Insira um algo na lista")
    }else{
        var newTodo = {
            todo: todoText,
            status: "undone"
        }
        todos.push(newTodo)
        renderList()
        inputElement.value = ""
        saveToStorage()
    }

}
function removerTodo(index) {
    todos.splice(index, 1)
    saveToStorage()
    renderList()
}
function changeColor(index){ 
    if(todos[index].status === "todoDone"){
        todos[index].status = "undone"
     }else{
        todos[index].status = "todoDone"
     }
     renderList()
}
function saveToStorage() {
    JSON
    localStorage.setItem("list_todos", JSON.stringify(todos))
}

renderList()
buttonElement.setAttribute("onclick", "addTodo()")





