$(document).ready(function() {

    var score;
    var timer;
    var timeLeft;
    var answersRight;
    var answersWrong;

    function begin () {
    alert("click 'Begin' to start the quiz.");
    
    }
    
    $(".btn").on("click", function() {
        for (var i = 0; i < questions.length; i++) {

            var questionDiv = $("<div>");
            questionDiv.addClass("question-box");
            questionDiv.attr("current-question", questions[i].title);
            questionDiv.text(questions[i].title);
            console.log(questionDiv);

            var choicesDiv = $("<div>");
            choicesDiv.addClass("choices-box");
            choicesDiv = questions[i].choices;
            console.log(choicesDiv);
        }
        

    })
    begin();
})
