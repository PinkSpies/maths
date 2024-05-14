
vars = "abcdefghijklmnopqrstuvwxyz";
input = document.getElementById("myinput");
question = document.getElementById("question");
answer = document.getElementById("answer");
answerheader = document.getElementById("answerheader");
explanation = document.getElementById("explanation");
varnexttoinput = document.getElementById("varnexttoinput");
continuebutton = document.getElementById("continue");
level1 = document.getElementById("level1");
level2 = document.getElementById("level2");
score = document.getElementById("score");
document.getElementById("continue").style.display = 'none';
entertocontinue = false
inputvalue = "";
step1 = "";
step2 = "";
ans = 0;
addval = 0;
multval = 0;
addorsubt = 0;
varval = 0;
level = 1;
scorevalue = 0;
function GenInt (max) {
    return Math.floor(Math.random() * max) + 1;
};

function GenerateQuestion () {
    inputvalue = "";
    document.getElementById("myinput").value = "";
    document.getElementById("continue").style.display = 'none';
    document.getElementById("myinput").style.display = 'block';
    usedVar = vars.charAt(Math.floor(Math.random() * vars.length));
    if (level = 1) {
        ans = GenInt(9);
        addval = GenInt(9);
        multval = GenInt(8) + 1;
        addorsubt = GenInt(2);
        answerformatted = `${usedVar} = ${ans}`;
        step2 = `${multval}${usedVar} = ${ans * multval}`;
        if (addorsubt > 1) {
            step1 = `${multval}${usedVar} + ${addval} = ${ans * multval + addval}`;
            addorsubttext = "subtract "

        } else {
            step1 = `${multval}${usedVar} - ${addval} = ${ans * multval - addval}`;
            addorsubttext = "add "


        };
    } else {

    }
    
    varnexttoinput.innerHTML = usedVar + " = ";
    question.innerHTML = step1;
    document.getElementById("explanation").style.display = 'none';
    answer.innerHTML = "";
    answerheader.innerHTML = "";


};

function ShowSteps () {

    answerheader.innerHTML = "Explanation:"

    answer.innerHTML = "To get the value of "+ usedVar + ", we need to isolate it.<br>" + 
    step1 + "<br>↓<br>" + usedVar + " = _" + "<br><br> First we can " + addorsubttext + addval +
    " on both sides.<br>" + step2 + 
    "<br><br>Then we can divide everything by " + multval + " to get "
    + usedVar + ".<br>" + answerformatted + "<br><br>Your answer: " + inputvalue;

    document.getElementById("explanation").style.borderColor = "rgb(200, 200, 200)";
    document.getElementById("explanation").style.display = 'block';

    document.getElementById("answerindicator").style.borderColor = "darkred";
};

input.addEventListener("input", () => {
    inputvalue = input.value;
});

continuebutton.addEventListener("click", () => {
    document.getElementById("answerindicator").style.borderColor = "rgb(200, 200, 200)";
    GenerateQuestion();
});



input.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        if (inputvalue == ans) {
            scorevalue += 1;
            score.innerHTML = "Streak: " + scorevalue;
            GenerateQuestion();
            document.getElementById("myinput").value = "";
            document.getElementById("answerindicator").style.borderColor = "darkgreen";
            
            setTimeout(() => document.getElementById("answerindicator").style.borderColor = "rgb(200, 200, 200)", 500);


        } else if (inputvalue != ""){
            scorevalue = 0;
            score.innerHTML = "";
            document.getElementById("myinput").style.display = 'none';
            ShowSteps();
            varnexttoinput.innerHTML = "Not quite!<br>Have a look at the explanation below.";
            document.getElementById("continue").style.display = "block"; 
            
        }
        
    }
});

level1.addEventListener("click", () => {
    level = 1;
    document.getElementById("level1").style.backgroundColor = "#343434";
    document.getElementById("level2").style.backgroundColor = "#252525";
    GenerateQuestion();
});

level2.addEventListener("click", () => {
    level = 2;
    document.getElementById("level2").style.backgroundColor = "#343434";
    document.getElementById("level1").style.backgroundColor = "#252525";
    GenerateQuestion();
});

GenerateQuestion();