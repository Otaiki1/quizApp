function populate(){
    if (quiz.isEnded()){
       showScores()
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices 
        for(i=0;i<choices.length;i++){
            var element = document.getElementById("choice"+i)
            element.innerHTML = choices[i] 
            guess("btn"+i, choices[i])
        }

        showProgress()
    }
};

function guess(id, guess){
    var button = document.getElementById(id)
    button.onclick = function(){
        quiz.guess(guess)
        populate()
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1
    var element = document.getElementById("progress")
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length

}

function showScores(){
    var gameOverHtml = "<h1 style='text-align: center;line-height: 200px;'> Result </h1>"
    gameOverHtml += "<h2 id='score' style='text-align: center;line-height: 200px;'>Your scores: " + quiz.score + " / " +quiz.questions.length+"</h2>"; 
    var element = document.getElementById("quiz")
    element.innerHTML = gameOverHtml       
};



var questions = [
    new Question("Which language is used for webapps?" , ["PHP","Python","Javascript","All"], "All"),
    new Question("Which one is not an object oriented programming language ?" , ["Java","C#","C++","C"], "C"),
    new Question("There are ______ main components of object oriented programming ?" , ["1","6","2","4"], "4"),
    new Question("Which language is used for styling webpages?" , ["HTML","Jquery","CSS","XML"], "CSS"),
    new Question("MVC is a ______ ?" , ["Language","Library","Framework","All"], "Framework")
];

var quiz = new Quiz(questions);

populate()