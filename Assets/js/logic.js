var highscoresInput = document.querySelector('#highscore');
var startInput = document.querySelector('#Start');
var questionbox = document.querySelector('#questionbox');
var timerbox = document.querySelector('#timerbox')
var question = document.createElement('p');
var choice1 = document.createElement('button');
var choice2 = document.createElement('button');
var choice3 = document.createElement('button');
var choice4 = document.createElement('button');
var correct = document.createElement('p');
var answers = []

question.textContent = 'Which JS argument is meant for looping code?';
choice1.textContent = 'Else';
choice2.textContent = 'Var';
choice3.textContent = 'For';
choice4.textContent = 'If';

choice1.setAttribute('class', 'answer');
choice2.setAttribute('class', 'answer');
choice3.setAttribute('class', 'answer');
choice4.setAttribute('class', 'answer');

function change_page(){
    window.location.href = 'highscores.html';
    console.log('bye');
};

function countdown() {
    var timeLeft = 10;

    var timeInterval = setInterval(function (){
        timerbox.textContent = 'Time Left: ' + timeLeft;
        timeLeft--;

        if(timeLeft === -2){
            clearInterval(timeInterval);
            alert('failed');
            window.location.reload();
        }
    }, 1000);
}

function first(){
    questionbox.append(question);
    questionbox.append(choice1);
    questionbox.append(choice2);
    questionbox.append(choice3);
    questionbox.append(choice4);

    detect(1);

};

function second(){
    question.textContent = 'What is the tag that adds the element to the live page?';
    choice1.textContent = 'CreateElement';
    choice2.textContent = 'Function create()';
    choice3.textContent = 'TextContent';
    choice4.textContent = 'Append';

};

function third(){
    question.textContent = 'Where do you put the function in the JavaScript?';
    choice1.textContent = 'It Does not matter';
    choice2.textContent = 'After the variables';
    choice3.textContent = 'Before the variables';
    choice4.textContent = 'Functions do not go indside JavaScript';

};

function fourth(){
    question.textContent = 'Where do you link the JavaScript file in the HTML?';
    choice1.textContent = 'Outside the HTML element';
    choice2.textContent = 'Inside the body element';
    choice3.textContent = 'Inside the HTML element';
    choice4.textContent = 'Inside the head element';

};

function fifth(){
    question.textContent = 'Which one of these can you NOT select in the JavaScript?';
    choice1.textContent = 'Elements';
    choice2.textContent = 'Classes';
    choice3.textContent = 'IDs';
    choice4.textContent = 'None of the above';

};

var questions = [first, second, third, fourth, fifth, scorecalc]

highscoresInput.addEventListener('click', function(){
    change_page();
});

startInput.addEventListener('click', function(){
    countdown();
    document.getElementById('Start').remove();
    console.log(1);
    questions[0]();
});

function detect(num){
    var i = num
    choice1.addEventListener('click', function(){
        answers.push(1);
        questions[i++]();
        console.log('work')
        return;
    });

    choice2.addEventListener('click', function(){
        answers.push(2);
        questions[i++]();
        return;
    });

    choice3.addEventListener('click', function(){
        answers.push(3);
        questions[i++]();
        return;
    });

    choice4.addEventListener('click', function(){
        answers.push(4);
        questions[i++]();
        return;
    });
}

var endscore = 0;
function scorecalc(){
    console.log(answers)
    if (answers[0] === 3){
        endscore += 20;
    }

    if (answers[1] === 4){
        endscore += 20;
    }

    if (answers[2] === 1){
        endscore += 20;
    }

    if (answers[3] === 3){
        endscore += 20;
    }

    if (answers[4] === 4){
        endscore += 20;
    }

    console.log(endscore);

    

    localStorage.setItem('endscore', endscore)
    window.location.href = 'initials.html';
}