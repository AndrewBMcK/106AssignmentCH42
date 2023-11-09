let Flag = false; //global variable
let isVisible = true; //global variable

function toggleVisibility() {
    if(isVisible){
        $("#form").hide();
        isVisible = false;
    }
    else{
        $("#form").show();
        isVisible = true;
    }

}

//SRP Single Responsibility principle uncle BOB

function displayTask(task) {
    let syntax = `<div class="task">
    <h3>${task.title}</h3>
    <h3>${task.description}</h3>
    </div>
    <label class="status">${task.status}</label>

    <div class="date-budget">
    <label>${task.date}</label>
    <label>${task.budget}</label>
    </div>

    `;
    $(".pending-task").append(syntax);
}

function saveTask() {
    console.log("save is called");
    //get the values
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#txtBudget").val();

    console.log(title, desc, color, date, status, budget);

    //build the object
    let taskToSave = new Task(Flag, title, desc, color, date, status, budget);
    console.log(taskToSave);

    //save the server
    
    
    //display the task
    displayTask(taskToSave);
    clearForm();

}

function toggleImportant() {
    const nonImportant = "fa-regular fa-user";
    const isImportant = "fa-solid fa-user";
    if(Flag){
    $("#iconImportant").removeClass(isImportant).addClass(nonImportant);
    Flag = false;
    }
    else {
            $("#iconImportant").removeClass(nonImportant).addClass(isImportant);
            Flag = true;
        }
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selColor").val("#000000");
    $("#selDate").val("");
    $("#selStatus").val("");
    $("#txtBudget").val("");
}

function testRequest() {
    $.ajax({
        type:"GET",
        url:"http://fsdiapi.azurewebsites.net",
    success: function(response) {
        console.log(response);
    },
    error: function (error) {
        console.log(error);
    }

    });
}

function loadTask() {
    $.ajax({
        type:"GET",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",

        success: function(response) {
            let data = JSON.parse(response);
            console.log(response);
            console.log(data);
            for(let i=0; i<data.length; i++){
                let task = data[i]
                if(task.name == "Andrew"){
                    displayTask(task);
                }
            }
        },
        error: function (error) {
            console.log(error);
        }

        });
}

function init() {
    //load data
    loadTask();

    //hook events
    $("#btnSave").click(saveTask);
    $("#iconImportant").click(toggleImportant);
    $("#btnDetails").click(toggleVisibility);
}

window.onload = init;