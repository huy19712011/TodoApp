document.addEventListener("DOMContentLoaded", () => {
    const task = document.getElementById("new-task-description")
    const submit = document.getElementById("submit");
    const list = document.getElementById("list");

    const lis = document.getElementById("tasks");

    submit.addEventListener("click", function(event) {
        event.preventDefault();

        let todo = task.value;
        list.innerHTML += `<li id="list-${todo}">${todo}<button onclick="editItem(\'${todo}\')">Edit</button><button onclick="deleteItem(event)">X</button>`;

        // let li = document.createElement("li");
        // let btn = document.createElement("button");
        //
        // li.appendChild(document.createTextNode(task.value));
        // li.appendChild(btn);
        // lis.append(li);
        // btn.textContent = "Delete";
        // btn.addEventListener("click", (e) => {
        //     lis.removeChild(li);
        // });
    });

});

function editItem(str){
    console.log(str);
}

function deleteItem(event){
    console.log("ok");
    console.log(event.target);
    event.target.parentElement.remove();
}