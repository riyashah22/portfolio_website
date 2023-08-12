document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("response-message");
    responseMessage.innerHTML = "Thank you for contacting us, " + name + "!";
    responseMessage.style.color = "green";
    document.getElementById('contact-form').reset();
});
