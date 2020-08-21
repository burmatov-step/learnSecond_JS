"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");


let todoData;
 if (localStorage.listTodo){
  todoData = JSON.parse(localStorage.listTodo);
 } else{
   todoData= [];
 }
   const render = function () {
     todoList.textContent = "";
     todoCompleted.textContent = "";
     console.log(todoData);
     console.log(todoData);

     todoData.forEach(function (item, index, array) {
       const li = document.createElement("li");

       li.classList.add("todo-item");

       li.innerHTML =
         '<span class="text-todo">' +
         item.value +
         "</span>" +
         '<div class="todo-buttons">' +
         '<button class="todo-remove"></button>' +
         '<button class="todo-complete"></button>' +
         "</div>";
       if (item.completed) {
         todoCompleted.append(li);
       } else {
         todoList.append(li);
       }

       let btntodoComplete = li.querySelector(".todo-complete");

       btntodoComplete.addEventListener("click", function () {
         item.completed = !item.completed;
        localStorage.listTodo = JSON.stringify(array);
         render();
       });
       const todoRemove = li.querySelector(".todo-remove");

       todoRemove.addEventListener("click", function () {
         array.splice(index, 1);
         localStorage.listTodo = JSON.stringify(array);
         render();
       });
     });
   };

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value === ''){
    return
  }
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };

  todoData.push(newTodo);
  headerInput.value = '';
  localStorage.listTodo = JSON.stringify(todoData);

  render();
})

render();