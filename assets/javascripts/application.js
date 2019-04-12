document.addEventListener("DOMContentLoaded", function(){
    authenticate()
})

function authenticate() {
  if (getCookie("id")) {
    document.getElementById("logout").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
    loginPage();
  } else {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("logout").classList.add("hidden");
    logoutPage();
  }

}

function login() {
  event.preventDefault();
  var email = document.getElementById("emailAddress");
  var password = document.getElementById("password");

  if(email.value === "Sincere@april.biz" && password.value === "password123!") {
    document.cookie = "id=1;"
    window.location.href = "/";
  } else {
    email.value = "";
    password.value = "";
    document.getElementById("loginError").classList.remove("hidden");
    email.focus();
  }
}

function logout() {
  document.cookie = "id= ; expires = Fri, 05 Jan 1975 00:00:00 GMT";
  authenticate();
}

function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}
