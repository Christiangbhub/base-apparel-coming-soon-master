var form = document.querySelector("#form");
var email = document.querySelector("#email");
var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var message = $(".error-msg");

form.addEventListener("submit", (e) => {
  var check = pattern.test(email.value);
  if (email.value === "") {
    console.log("email is empty");
    message.text("email cannot be empty");
  } else if (!check) {
    message.css("display", "block");
    message.text("Invalid email address");
  } else {
    message.css("color", "green");
    message.text("Success");
    console.log("email matches format");
  }
  e.preventDefault();
});
