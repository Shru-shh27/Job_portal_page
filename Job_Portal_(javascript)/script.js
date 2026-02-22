let form = document.querySelector("#contact-form");
let list = document.querySelector(".job");

form.addEventListener("submit", addJob);

function addJob(e) {
    e.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let position = document.querySelector("#reason").value;

    // Email validation pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || position === "--select--") {
        alert("Please fill all fields");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return;
    }

    // Create job card
    let div = document.createElement("div");
    div.classList.add("job-card");

    div.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <button class="del">Delete</button>
        <hr>
    `;

    list.appendChild(div);

    // Delete functionality
    div.querySelector(".del").addEventListener("click", function() {
        div.remove();
    });

    alert("Application Submitted Successfully ✅");

    form.reset();
}