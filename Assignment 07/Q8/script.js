const input = document.getElementById("input");
const todo = document.getElementById("todo-input")
const statuss = document.getElementById("status")
const markComplete = document.getElementById("mark-complete");
const editContainer = document.getElementById("container");
const ExtraInput = document.getElementById("Extra-input");


function addTodo(){
    if(input.value == ""){
        alert("Enter a valid Todo")
    }
    else{
   todo.innerHTML = input.value;
   statuss.innerHTML = "Pending";
   input.value = ""
   saveData();
}
}

function deleteTodo(){
    todo.innerHTML = "";
    statuss.innerHTML = "enter a todo"
    saveData();

}
function statusUpdate(){
    if(statuss.innerHTML !== "Pending"){
        statuss.innerHTML = "Pending";
        todo.style.textDecoration = "none"
        markComplete.innerHTML = "Mark Completed";
        markComplete.style.background = "green";
        markComplete.style.color = "white"
        
    
    }
    else {
        statuss.innerHTML = "Completed";
        todo.style.textDecoration = "line-through"
        markComplete.innerHTML = "Mark Pending";
        markComplete.style.background = "yellow"
        markComplete.style.color = "black"

    }
    saveData();
}

function editTodo(){
    editContainer.style.display == "none" ? editContainer.style.display = "flex" :editContainer.style.display = "none";
    

    ExtraInput.value = todo.innerHTML;
    saveData();
}

function extraI(){
    todo.innerHTML=ExtraInput.value;
    saveData();
}

function closef(){
    editContainer.style.display = "none";
    saveData();
}


function saveData(){
    localStorage.setItem("data", todo.innerHTML)
    localStorage.setItem("statusdata",statuss.innerHTML)
} 

function showData(){
   todo.innerHTML = localStorage.getItem("data")
   statuss.innerHTML = localStorage.getItem("statusdata")
   
   
}
showData();