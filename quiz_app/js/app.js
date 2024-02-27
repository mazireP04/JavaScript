
const questions = [
    {
        'question': "What is the capital of Australia?",
        'a': "Sydney",
        'b': "Melbourne",
        'c': "Canberra",
        'd': "Perth",
        'correct': 'c'
    },
    {
        'question': "What is the largest ocean in the world?",
        'a': "Atlantic Ocean",
        'b': "Indian Ocean",
        'c': "Arctic Ocean",
        'd': "Pacific Ocean",
        'correct': 'd'
    },
    {
        'question': "What is the currency of Japan?",
        'a': "Yen",
        'b': "Euro",
        'c': "Dollar",
        'd': "Rupee",
        'correct': 'a'
    },
    {
        'question': "Who painted the famous artwork 'The Starry Night'?",
        'a': "Salvador Dali",
        'b': "Panle Picasso",
        'c': "Vincent van Gogh",
        'd': "Claude Monet",
        'correct': 'c'
    },
    {
        'question': "What is the official language of Brazil?",
        'a': "Spanish",
        'b': "Portuguese",
        'c': "French",
        'd': "English",
        'correct': 'b'
    }

]


let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const que = document.getElementById("que");
const options = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    que.innerText = `${index+1}. ${data.question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

const submit = () => {
    const data  = questions[index];
    const ans = getAnswer();
    if (ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    options.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false
            }
    )
}

const endQuiz = () => {
    document.getElementById("panel").innerHTML = `
    <div>
    <h3> Thank you for playing the quiz!</h3>
    <h2> Your score is ${right} out of ${total}! 
    </div>
    `
}

// initial call on page load
loadQuestion();