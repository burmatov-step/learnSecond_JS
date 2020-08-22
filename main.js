let username = document.getElementById("username"),
  registerUser = document.getElementById("registerUser"),
  login = document.getElementById("login"),
  list = document.getElementById("list"),
  users,
  month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
  deleteBtn;

if (localStorage.userss) {
  users = JSON.parse(localStorage.userss);
  createRemEl();
} else {
  users = [];
}

if (localStorage.userName) {
  username.textContent = JSON.parse(localStorage.userName);
}

function createRemEl() {
  list.innerHTML = "";
  users.forEach((item, index, arr) => {
    let li = document.createElement("li");
    li.innerHTML =
      "Имя: " +
      item.name +
      ", фамилия: " +
      item.fullName +
      ", зарегистрирован: " +
      item.regData +
      '<span id = "delete" style = "cursor: pointer"> <b>Удалить</b> </span>';
    list.append(li);
    let deleBtn = li.querySelector("#delete");
    deleBtn.addEventListener("click", function () {
      let remEl = arr.splice(index, 1);
      localStorage.userss = JSON.stringify(arr);
      console.log(localStorage.userName);
      if (localStorage.userName){
        if (remEl[0].name === JSON.parse(localStorage.userName)) {
          localStorage.userName = "";
        }
      }

        createRemEl();
    });
  });
}

function registerFunc() {
  let nameFull = prompt("Введите через пробел Имя и Фамилию пользователя");
  let date = new Date();
  let newUser;
  let nameArr;
  if (nameFull !== null) {
    nameArr = nameFull.split(" ");
  } else {
    return;
  }

  if (nameArr.length === 2) {
    nameArr.forEach(function (item, index, arr) {
      newUser = {
        name: arr[0],
        fullName: arr[1],
      };
    });
    let loginName = prompt("ВВедите логин");
    loginName ? (newUser.login = loginName.trim()) : 0;
    let password = prompt("ВВедите Пароль");
    password ? (newUser.password = password.trim()) : 0;
    newUser.regData =
      date.getDate() +
      " " +
      month[date.getMonth()] +
      " " +
      date.getFullYear() +
      " г., " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    users.push(newUser);

    localStorage.userss = JSON.stringify(users);

    createRemEl();
  } else {
    return;
  }
}

function autorization() {
  let loginName = prompt("Введите логин");
  let passwordUs = prompt("Введите пароль");
  if (loginName === null || passwordUs === null) {
    return;
  }
   let obj = {};

    users.forEach((item, index, arr) => {

          if (loginName === item.login && passwordUs === item.password){
            obj.login = loginName;
            obj.password = passwordUs;
            obj.name = item.name
          }
          // username.textContent = item.name;
          // localStorage.userName = JSON.stringify(username.textContent);
      });
      if (Object.keys(obj).length === 3) {
         username.textContent = obj.name;
         localStorage.userName = JSON.stringify(username.textContent);
      } else{
        alert('Пользователь не найден')
      }
       console.log(obj);
     console.log(Object.keys(obj).length)
}

registerUser.addEventListener("click", registerFunc);

login.addEventListener("click", autorization);
