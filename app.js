let arry = [];
let a = 'succefully';
let b = 'Error';
function signUp() {
  let obj = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    repassword: document.getElementById("repassword").value
  };
  arry.push(obj);
  console.log(arry);
  let localStorageData = window.localStorage.setItem("arry",JSON.stringify(arry) );
  window.location.href = "./loginform.html";
};
function login() {
  let logEmail = document.getElementById("logEmail").value;
  let logPassword = document.getElementById("logPassword").value;
  let message = document.getElementById("message");
  let userData = window.localStorage.getItem("arry");
  userData = JSON.parse(userData);
  for (var i = 0; i < userData.length; i++) {
    if (
      userData[i].email === logEmail &&  userData[i].password === logPassword
    ) {
      window.location.href = "https://izharshams.github.io/portfolio/portfolio.html";
  console.log("Value", myValue);

    }

    else {
      window.location.href = "thridPage.html";
    }
  }
  console.log("Value", myValue)
}

