function login() {
  event.preventDefault();
  var email = document.getElementById("emailAddress");
  var password = document.getElementById("password");

  if(email.value === "Sincere@april.biz" && password.value === "password123!") {
    window.location.href = "/";
  } else {
    email.value = "";
    password.value = ''
    alert("Incorrect credentials. Email: " + email.value + ", Password: " + password.value);
  }
}
