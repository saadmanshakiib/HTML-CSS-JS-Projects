const ques = [
    {
        question: "What does HTML stand for?",
        options: [
            "HighText Machine Language",
            "HyperText and Links Markup Language",
            "HyperText Markup Language",
            "None of these"
        ],
        answer: 2
    },
    {
        question: "Which framework is used for backend programming",
        options: ["React.js", "Swing", "SpringBoot", "None of these"],
        answer: 2
    },
    {
        question: "Current PM of Bangladesh?",
        options: ["DR Yunus", "Sheikh Hasina", "Shahabuddin Chuppu", "None of these"],
        answer: 1
    }
];

let score = 0;
let current = 0;

const runningQues = document.getElementById("ques");
const buttons = document.getElementsByClassName("option");
const Sc = document.getElementById("scoreBoard");

function loadQues() {
    runningQues.textContent = ques[current].question;
    for (let i = 0; i < 4; i++) {
        buttons[i].textContent = ques[current].options[i];
        buttons[i].disabled = false;
        buttons[i].style.backgroundColor = "";
    }
    Sc.textContent = "";
}

function checkAns(selected) {
    const correctAns = ques[current].answer;
    if (selected === correctAns) {
        score++;
        buttons[selected].style.backgroundColor = 'green';
    } else {
        buttons[selected].style.backgroundColor = 'black';
        buttons[correctAns].style.backgroundColor = 'green';
    }
    for (let i = 0; i < 4; i++) {
        buttons[i].disabled = true;
    }
    Sc.textContent = `Score: ${score}`;
}

function nextQues(){
    current++;
    if (current < ques.length) {
        loadQues();
    } 
    else {
        runningQues.textContent = "Quiz Ended";
        //document.querySelector(".question-box").innerHTML;
    }
}
window.onload = loadQues;

