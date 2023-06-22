function toggleAnswer() {
    var answer = document.getElementById("answer");
    var arrowRight = document.querySelector(".right-arrow");
    var arrowDown = document.querySelector(".down-arrow");
    var answerStyle = window.getComputedStyle(answer);
    if (answerStyle.display === "none") {
        answer.style.display = "block";
        arrowRight.style.display = "none";
        arrowDown.style.display = "inline-block";
    } else {
        answer.style.display = "none";
        arrowRight.style.display = "inline-block";
        arrowDown.style.display = "none";
    }
}

let menu = document.querySelector(".sing-in")
let navbar = document.querySelector(".list-items")

menu.onclick = () => {
    navbar.classList.toggle(".open");
    console.log("hello")
}


