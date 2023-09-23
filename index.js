let inputBox = document.getElementById('inputfield');
let addBtn = document.getElementById('addbtn');
let todoList = document.getElementById('todolist');
let clearAllBtn = document.getElementById('clearbtn');



addBtn.onclick = () => {
  let userData = inputBox.value; //getting user entered value
  let getLocalStorage = localStorage.getItem('newTodo'); //getting Local Storage
  if(getLocalStorage == null) { // if Local Storage is null
    listArr = []; // creating an array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  if (inputBox.value.length > 0) {
    let userData = inputBox.value;
    listArr.push(userData); // pushing or adding user data
  } else {
    alert("Please enter a valid todo");
  }
  localStorage.setItem('newTodo', JSON.stringify(listArr)); //transforming js object into a json string
  showTodo(); //calling showTodo function
}

showTodo(); //calling showTodo function

    // function to add task list inside ul
function showTodo() {
  let getLocalStorage = localStorage.getItem('newTodo'); //getting Local Storage
  if(getLocalStorage == null) { // if Local Storage is null
    listArr = []; // creating an array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  let newLiTag = '';
  listArr.forEach((element, index) => {
   newLiTag += `<li> ${element} <button onclick="deleteTask(${index})";>Delete</button></li>`
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = '';  //once task added leave the input field blank
}

    // delete task function
function deleteTask(index) {
  let getLocalStorage = localStorage.getItem('newTodo');
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1); //delete or remove the particular indexed li
  localStorage.setItem('newTodo', JSON.stringify(listArr)); //transforming js object into a json string
  showTodo(); //calling showTodo function
}


    // delete or clear all tasks function
clearAllBtn.onclick = () => {
  listArr = []; //empty an array
  // after deleta all task again update the local storage
  localStorage.setItem('newTodo', JSON.stringify(listArr));  //transforming js object into a json string
  showTodo();  //calling showTasks function
}