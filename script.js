document.addEventListener("DOMContentLoaded", onDOMLoaded)


function onDOMLoaded(event) {
    var addTaskButton=document.getElementById("add-task-button");
    addTaskButton.onclick = function (event) {
        addTaskButton.style.display = "none";
        var addTaskTextarea=document.getElementById("add-task-textarea");
        addTaskTextarea.style.display = "block";

        addTaskTextarea.onkeydown = function(keyDownEvent) {
            var keyCode = keyDownEvent.code;
            if (keyCode == "Escape") {
                console.log("esc click")
            } else {
                console.log("something else click")
            }
        }
        
    };

}

