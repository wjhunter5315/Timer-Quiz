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
        },
        {
            title: "Arrays in Javascript can be used to store ____.",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above"
        }
        ///etc.
      ];
    console.log(questions[0].title);

    function begin () {
    alert("click 'Begin' to start the quiz.");
    
    }
    
    $(".btn").on("click", function() {
        for (var i = 0; i < questions.length; i++) {

            var questionDiv = $("<div>");
            questionDiv.addClass("question-box");
            questionDiv.attr("current-question", questions[i].title);
            questionDiv.text(questions[i].title);
            $(".question-box").append(questionDiv);
            console.log(questionDiv);

            var choicesDiv = $("<button>");
            choicesDiv.addClass("choices-box");
            choicesDiv.attr("current-choices", questions[i].choices);
            choicesDiv.text(questions[i].choices);
            $(".choices-box").append(choicesDiv);
            console.log(choicesDiv);
        }
        

    })
    

// Update the count down every 1 second
    var x = setInterval(function() {
    
        var seconds = Math.floor(1000 * 75 / 1000);
    
  // Output the result in an element with id="demo"
        document.getElementById("timer-box").innerHTML = seconds + "s ";
    
  // If the count down is over, write some text 
    }
})


