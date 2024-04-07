const questions = [
    {
        question: "Which of the following is a primary source of air pollution?",
        answers: [
            {text: " Carbon dioxide (CO2)", correct: false},
            {text: "Methane (CH4)", correct: false},
            {text: "Sulfur dioxide (SO2)", correct: true},
            {text: "Nitrogen oxides (NOx)", correct: false},
        ]
    },
    {
        question: "Which greenhouse gas is primarily responsible for global warming?",
        answers: [
            {text: "Carbon dioxide (CO2)", correct: true},
            {text: "Methane (CH4)", correct:false},
            {text: "Nitrous oxide (N2O)", correct:false},
            {text: "Chlorofluorocarbons (CFCs)", correct:false}
        ]
    },
    {
        question: "What is the main cause of ocean acidification?",
        answers: [
            {text: " Industrial waste discharge", correct: false},
            {text: " Deforestation", correct: false},
            {text: "Increased carbon dioxide emissions", correct:true},
            {text: "Agricultural runoff", correct: false},
        ]
    },
    {
        question: "Which human activity contributes the most to the carbon footprint?",
        answers: [
            {text: "Transportation", correct:true},
            {text: "Electricity usage", correct: false},
            {text: "Food production", correct: false},
            {text: "Manufacturing", correct:false},
        ]
    },
    {
        question: "What does AQI stand for?",
        answers: [
            {text: "Air Quality Indicator", correct:false},
            {text: "Airborne Quality Index", correct: false},
            {text: " Air Quality Index", correct: true},
            {text: "Atmospheric Quality Indicator", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a criteria pollutant monitored in the AQI?",
        answers: [
            {text: " Carbon monoxide (CO)", correct:false},
            {text: "Ozone (O3)", correct: false},
            {text: "Particulate matter (PM2.5)", correct: false},
            {text: "Methane (CH4)", correct: true},
        ]
    },
    {
        question: "What is the AQI scale typically ranging from?",
        answers: [
            {text: " 0 to 50", correct: false},
            {text: " 0 to 100", correct: true},
            {text: " 0 to 200", correct: false},
            {text: " 0 to 500", correct: false},
        ]
    },
    {
        question: "Which AQI category indicates Hazardous air quality?",
        answers: [
            {text: " 0-50", correct: false},
            {text: "51-100", correct: false},
            {text: "101-150", correct: false},
            {text: "301-500", correct: true},
        ]
    },
    {
        question: "Which indoor air pollutant is commonly found in tobacco smoke?",
        answers: [
            {text: "Carbon monoxide (CO)", correct: false},
            {text: "Nitrogen dioxide(NO2)", correct: false},
            {text: "Formaldehyde", correct: true},
            {text: "Lead (Pb)", correct: false},
        ]
    },
    {
        question: "Which type of pollution is caused by the excessive use of fertilizers and pesticides in agriculture?",
        answers: [
            {text: "Water pollution", correct:false},
            {text: "Air pollution", correct: false},
            {text: "Soil pollution", correct: true},
            {text: "Noise pollution", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectionBtn = e.target;
    const  isCorrect = selectionBtn.dataset.correct === "true";
    if (isCorrect){
        selectionBtn.classList.add("correct");
        score++;
    }else {
        selectionBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();