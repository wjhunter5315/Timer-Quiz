$(document).ready(function() {

    var score;
    var timer;
    var timeLeft;
    var answersRight;
    var answersWrong;
    var questions = [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            title: "Which of these is NOT a Popup Box?",
            choices: ["prompt", "confirm", "notice", "alert"],
            answer: "notice"
        },
        {
            title: "For something to happen on our webpage when a button is clicked we need a/an ____.",
            choices: ["for loop", "addEventListener", "indexOf", "concat"],
            answer: "addEventListener"
        }
        ///etc.
      ];

    function begin () {
    alert("click 'Begin' to start the quiz.");
    
    }
    
    $(".btn").on("click", function() {
        for (var i = 0; i < questions; i++) {
            var questionDiv = document.createElement(".questionBox");
            questionDiv = questions[0].title;
            console.log(questionDiv);

            var choicesDiv = document.createElement("answerBox");
            choicesDiv = questions[0].choices;
            console.log(choicesDiv);
        }
        

    })
})


