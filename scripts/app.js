function saveTask ()
{
    console.log("saving tasks");
    // get values
    const title = $("#inputTitle").val();
    const desc = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();

    // build an object
    let taskToSave = new Task(title,desc,color,date,status,budget);
    console.log(taskToSave);
    // save to the server
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(res){
            console.log(res);
        },
        error: function(error){
            console.log(error);
            alert("Unexpected Error"); // you can create your own error message
        }
    })

    // display the task
    displayTask(taskToSave);
}

function loadTask()// this to read
{
    $.ajax({
        // get 
        type: "GET",
        // http://fsdiapi.azurewebsites.net/api/tasks
        url: "http://fsdiapi.azurewebsites.net/api/tasks",

        // console.log the response
        success: function(res){
            let data = JSON.parse(res);
            for(let i=0; i<data.length;i++){
                let task = data[i];
                if(task.title == "jesse"){
                    displayTask(task);
                }

            }
            console.log(res);
            console.log(data)
        },
        error: function(error){
            console.log(error);
        }
    })
}

function displayTask(task) 
{
    let syntax = `<div class="task"> 
    <h5>${task.title}</h5>
    <h5>${task.description}</h5>
    <h5>${task.color}</h5>
    <h5>${task.startDate}</h5>
    <h5>${task.status}</h5>
    <h5>${task.budget}</h5>
    </div>`;

    $(".pending-task").append(syntax);
}

function testRequest() 
{
    $.ajax({
        type: "GET", //read
        url: "http://fsdiapi.azurewebsites.net/",
        //exceptions
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(error)
        } 
    });
}

function init () {
    // load data
    loadTask();
    // retrive data
    // hook events
    $("#btnSave").click(saveTask); // this is using jquery
    // document.getElementById("btnSave"); old fashion
}


window.onload = init;

// try to specify the order 