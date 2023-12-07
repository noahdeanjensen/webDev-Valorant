var request = document.getElementById("request-email");
var thanks = document.getElementById("submitted")

//function to turn email request screen into thank you screen
function emailThanks() {
    request.style.display = "none";
    thanks.style.display = "block";
    thanks.style.textAlign = "center";
}