var Initials = document.getElementById('Initials');
var QuizInput = document.getElementById('Quiz')

console.log(Initials)
document.getElementById('Submit').addEventListener('click', function(){
    localStorage.setItem('Initials', Initials.value);
    window.location.href = 'highscores.html';
});

var highscorelist = document.getElementById('highscorelist');
var item = document.createElement('li');


function addscore(){
    var hsin = localStorage.getItem('Initials');
    var hssc = localStorage.getItem('endscore');
    
    item.textContent = hsin + ' Scored: ' + hssc;
    highscorelist.append(item);
};

addscore();

function change_page(){
    window.location.href = 'index.html';
    console.log('bye');
};

QuizInput.addEventListener('click', function(){
    change_page();
});