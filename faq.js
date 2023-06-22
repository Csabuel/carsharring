var questionAnswers = document.querySelectorAll('.question-answer');

function toggleAnswer(index) {
    var questionButtons = document.querySelectorAll('.question button');
    var questionButton = questionButtons[index];
    var question = questionButton.parentNode;
    var answer = question.nextElementSibling;
    var arrowRight = questionButton.querySelector('.right-arrow');
    var arrowDown = questionButton.querySelector('.down-arrow');

    answer.classList.toggle('show');
    arrowRight.style.display = answer.classList.contains('show') ? 'none' : 'inline-block';
    arrowDown.style.display = answer.classList.contains('show') ? 'inline-block' : 'none';
}





let menu = document.querySelector(".menu-icon")
let navbar = document.querySelector(".list-items")
let iconChange = document.querySelector(".fa-bars")
let headSpace = document.querySelector(".navbar")

menu.onclick = () => {
    navbar.classList.toggle("open");
    iconChange.classList.toggle("fa-x");
    headSpace.classList.toggle("space");
    
}
