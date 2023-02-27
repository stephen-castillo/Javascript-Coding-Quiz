/* Set variables for count of correct questions and wrong questions answered */
var correct = 0;
var wrong = 0;
var time = 240;
var clock = document.getElementById('clock');
var start = document.getElementById('start');
var cancel = document.getElementById('cancel');
var gameclock;
var questions = document.getElementById('question');
var qID = 0;
var answers = document.getElementById('answer');

console.log(clock);
console.log(start);


function theQuiz(){
    
    questions.innerText = quiz[qID]['question'];
    answers.innerHTML = '<ul><li>'+quiz[qID]['answers'][0]+'</li></ul>';
}

/* Need timer function */
function timer(event){
    event.preventDefault();
    theQuiz();
    gameclock = setInterval(function(){
        time--;
        console.log(time);
        clock.innerText = 'Time left: ' + time + ' seconds';
    }, 1000);
}

function timeKiller(event) {
    event.preventDefault();
    clearInterval(gameclock);
    alert('Game cancelled');
    time = 240;
}



/* Check if timer is still active AND if wrong answer still = 0 */


/* for loop to go through questions and answers and replace html conent */

    /* Event handler for user to submit answer to quiz question */


    /* Check answer submitted against correct answer 
    If correct update correct count and continue
    else break and return wrong answer message*/



/* Event handler to cancel quiz */
cancel.addEventListener('click', timeKiller);

/* Need event handler for quiz start */
start.addEventListener("click", timer);