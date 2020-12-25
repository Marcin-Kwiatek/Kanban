document.addEventListener("DOMContentLoaded", onDOMLoaded)


function onDOMLoaded(event) {
    var addTaskButton=document.getElementById("add-task-button");
    addTaskButton.onclick = function (event) {
        addTaskButton.style.display = "none";
        var addTaskTextarea=document.getElementById("add-task-textarea");
        addTaskTextarea.style.display = "block";
        addTaskTextarea.focus()

        addTaskTextarea.onkeydown = function(keyDownEvent) {
            var keyCode = keyDownEvent.code;
            if (keyCode == "Escape") {
                addTaskTextarea.style.display = "none";
                addTaskButton.style.display = "block";
            }
            if (keyCode == "Enter"){
                keyDownEvent.preventDefault()
                var nextTaskTitle = addTaskTextarea.value
                if (nextTaskTitle==""){
                   return 
                }
                
                var newDiv = document.createElement("div")
                newDiv.innerHTML = nextTaskTitle
                newDiv.classList.add("task")
                var parentNode = document.getElementById("list")
                parentNode.insertBefore(newDiv,addTaskTextarea)
                addTaskTextarea.value=null
            }
        }
        
    };

}

