let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('question-length-1').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('question-endScreen').style = ''
        document.getElementById('question-body').style = 'display: none'
        document.getElementById('question-length-2').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = './img/trophy.png';
    } else { 
        // Show Question
        let percent = ((currentQuestion + 1) / questions.length) * 100;
        percent = Math.round(percent);

        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
        document.getElementById('question-current').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('text-white');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.add('text-white');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('text-white');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    resetAnswerButton();
    currentQuestion++;  // z.B. der Wert wird um 1 erhöht
    showQuestion();
}


function resetAnswerButton() {
    document.getElementById('next-button').disabled = true;

    for (let i = 1; i < 5; i++) {
        const index = `answer_${i}`;
        document.getElementById(index).parentNode.classList.remove('bg-success');
        document.getElementById(index).parentNode.classList.remove('bg-danger');
        document.getElementById(index).parentNode.classList.remove('text-white');
    }
}