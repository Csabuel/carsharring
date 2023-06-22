var questionAnswers = document.querySelectorAll('.question-answer');

function toggleAnswer(index) {
    var questionAnswer = questionAnswers[index];
    var answer = questionAnswer.querySelector('.answer');
    var arrowRight = questionAnswer.querySelector('.right-arrow');
    var arrowDown = questionAnswer.querySelector('.down-arrow');

    answer.classList.toggle('show');
    arrowRight.style.display = answer.classList.contains('show') ? 'none' : 'inline-block';
    arrowDown.style.display = answer.classList.contains('show') ? 'inline-block' : 'none';
}