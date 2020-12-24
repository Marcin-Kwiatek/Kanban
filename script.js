document.addEventListener("DOMContentLoaded", onDOMLoaded)


function onDOMLoaded(event) {
    var addTaskButton=document.getElementById("add-task-button");
    addTaskButton.onclick = function (event) {
        addTaskButton.style.display = "none";
        var addTaskTextarea=document.getElementById("add-task-textarea");
        addTaskTextarea.style.display = "block";
    };

}

