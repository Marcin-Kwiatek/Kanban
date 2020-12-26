document.addEventListener("DOMContentLoaded", onDOMLoaded)

function onDOMLoaded(event) {
    let kanban = document.getElementById("kanban")
    for (let i = 0; i <= 2; i++) { 
        kanban.insertAdjacentHTML('beforeend',
    `<div id="list${i}" class="list">
        <div class="task">Zadanie 1</div>
        <div class="task">Zadanie 2</div>
        <textarea id="add-task-textarea${i}" class="add-task-textarea" placeholder="Wpisz nazwę zadania"></textarea>
        <button class="add-task-button" id="add-task-button${i}">+ Dodaj zadanie</button>
        </div>`)
        let addTaskTextarea=document.getElementById("add-task-textarea"+i)
        let addTaskButton=document.getElementById("add-task-button"+i)
        
        addTaskTextarea.onkeydown = function(keyDownEvent) {
            let keyCode = keyDownEvent.code
            if (keyCode == "Escape") {
                addTaskTextarea.style.display = "none"
                addTaskButton.style.display = "block"
            }
            if (keyCode == "Enter"){
                keyDownEvent.preventDefault()
                let nextTaskTitle = addTaskTextarea.value
                if (nextTaskTitle==""){
                    return 
                }
                
                let newDiv = document.createElement("div")
                newDiv.innerHTML = nextTaskTitle
                newDiv.classList.add("task")
                let parentNode = document.getElementById("list"+i)
                parentNode.insertBefore(newDiv,addTaskTextarea)
                addTaskTextarea.value=null
            }
        }
        
        addTaskButton.onclick = function (event) {
            addTaskButton.style.display = "none"
            addTaskTextarea.style.display = "block"
            addTaskTextarea.focus()
        }
    }
        
    let addListButton = document.getElementById("add-list-button")
    addListButton.onclick = function(addListButtonclickevent){
        console.log("super")
    }
}

