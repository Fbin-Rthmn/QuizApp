let currentQuestion = 0;

function init() {
    document.getElementById('question-length').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('text-white');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.add('text-white');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('text-white');
    }
    document.getElementById('next-button').disabled = false;
}