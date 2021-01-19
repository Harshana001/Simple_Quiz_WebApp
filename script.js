const quizData = [
    {
        question: 'When is the Sri Lanka got independance?',
        a: '4 Feb 1948',
        b: '4 Feb 1947',
        c: '4 Feb 1968',
        d: '4 Feb 1958',
        correct: 'a'
    },{
        question: 'What is the most used programming language in 2020?',
        a: 'Swing',
        b: 'HTML',
        c: 'C#',
        d: 'Java',
        correct: 'd'
    },{
        question: 'Who desined Java?',
        a: 'Bjarne Stroustrup',
        b: 'James Gosling',
        c: 'Microsoft Corporation',
        d: 'Rasmus Lerdorf',
        correct: 'b'
    },{
        question: 'Who is the president of Sri Lanka in 2021?',
        a: 'Mr. Mahinda Rajapaksha',
        b: 'Mr. Maithripala Sirisena',
        c: 'Mr. Nandasena Gotabaya Rajapaksa',
        d: 'Mr. Ranil Wickremesinghe',
        correct: 'c'
    },{
        question: 'How many days a leap year has?',
        a: '365',
        b: '366',
        c: '367',
        d: '364',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }else{
        alert("Please select an answer!!!");
    }
});