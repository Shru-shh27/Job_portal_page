var form = document.getElementById("contact-form");
var list = document.querySelector(".job");
let searchForm = document.querySelector(".search-form");
let searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let searchValue = searchInput.value.toLowerCase().trim();
  let jobs = document.querySelectorAll(".job-card");
  let found = false;

  jobs.forEach(function (job) {
    let text = job.textContent.toLowerCase();

    if (text.includes(searchValue)) {
      found = true;
    }
  });

  if (searchValue === "") {
    alert("Please enter something to search");
  } else if (found) {
    alert("Job Found ");
  } else {
    alert("Job Not Found ");
  }

  searchInput.value = "";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var position = document.getElementById("reason").value;

  if (name === "" || email === "" || position === "--select--") {
    alert("Please fill all fields");
    return;
  }

  var div = document.createElement("div");
  div.className = "job-card";

  div.innerHTML =
    "<h3>" +
    name +
    "</h3>" +
    "<p>Email: <span class='email'>" +
    email +
    "</span></p>" +
    "<p>Position: <span class='position'>" +
    position +
    "</span></p>" +
    "<button class='update'>Update</button> " +
    "<button class='delete'>Delete</button>";

  list.appendChild(div);

  var deleteBtn = div.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    list.removeChild(div);
  });

  var updateBtn = div.querySelector(".update");
  updateBtn.addEventListener("click", function () {
    var newName = prompt("Enter new name", name);
    var newEmail = prompt("Enter new email", email);
    var newPosition = prompt("Enter new position", position);

    if (newName !== null && newEmail !== null && newPosition !== null) {
      div.querySelector("h3").innerText = newName;
      div.querySelector(".email").innerText = newEmail;
      div.querySelector(".position").innerText = newPosition;
    }
  });

  alert("Application Submitted Successfully");

  form.reset();
});
