document.addEventListener("DOMContentLoaded", onDOMLoaded)

function onDOMLoaded(event) {
    for (let i = 0; i <= 1; i++) {       
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
}

