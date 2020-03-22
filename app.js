const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const firstname = form["firstname"].value;
  const lastname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstname === "") {
    addErrorTo("firstname", "First Name is required.");
  } else {
    removeError("firstname");
  }
  if (lastname === "") {
    addErrorTo("lastname", "Last Name is required.");
  } else {
    removeError("lastname");
  }
  if (email === "") {
    addErrorTo("email", "Email is required.");
  } else {
    removeError("email");
  }
  if (password === "") {
    addErrorTo("password", "Password is required.");
  } else {
    removeError("password");
  }
});

function addErrorTo(field, msg) {
  const small = form[field].parentNode.querySelector("small");
  small.innerText = msg;
  small.style.opacity = "1";
}

function removeError(field) {
  const small = form[field].parentNode.querySelector("small");
  small.style.opacity = "0";
}
