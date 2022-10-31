document.addEventListener("DOMContentLoaded", () => {
    const task = document.getElementById("new-task-description")
    const submit = document.getElementById("submit");
    const list = document.getElementById("list");

    const lis = document.getElementById("tasks");

    submit.addEventListener("click", function (event) {
        event.preventDefault();

        let todo = task.value;
        // this no works
        list.innerHTML += `<li id="list-${todo}">${todo}<button onclick="editItem(${todo})">Edit</button><button onclick="deleteItem(event)">X</button></li>`;
        // this work!
        list.innerHTML += `<li id="list-${todo}">${todo}<button onclick="editItem(\'${todo}\')">Edit</button><button onclick="deleteItem(event)">X</button></li>`;

    });

});

function editItem(str) {
    console.log(str); // Uncaught ReferenceError: asddsfaad is not defined
}

