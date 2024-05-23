var testScore = 0;
const numberWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];

function press61(value) {
    var result1 = document.getElementById('result61');
    result1.value += value;
}

function press91(value) {
    var result1 = document.getElementById('result91');
    result1.value += value;
}

//-------------------------------------------------------------------------------------------------------------------------------------------

function checkFirst() {
    let correctAnswers = { //input
        placeholder1: "(a-b)²",
        placeholder2: "(b+a)²",
        placeholder3: "(a-b)(a+b)"
    };

    let isCorrect = true;
    for (let id in correctAnswers) {
        let placeholder = document.getElementById(id);
        if (placeholder.children.length === 0 || placeholder.children[0].innerText !== correctAnswers[id]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        document.getElementById("yes/no1").innerHTML = "Pareizi!";
        document.getElementById("yes/no1").style.color = "green";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no1").innerHTML = "Nepareizi!";
        document.getElementById("yes/no1").style.color = "red";
    }
}

function emptyFirst() {
    for (let i = 1; i <= 3; i++) { // i nedrikst but lielaks par pareizo atbilzu skaitu! //input
        let placeholder;
        try {
        placeholder = document.getElementById(`placeholder${i}`);
        }
        catch {
            placeholder = null;
            break;
        }
        if (placeholder.children.length > 0 && placeholder !== null) {
            document.getElementById("answers").appendChild(placeholder.children[0]);
        }
    }
    document.getElementById("yes/no1").innerHTML = "";
}
// 0 un -2
function checkSecond() {
    var result21 = document.getElementById('result21').value;
    var result22 = document.getElementById('result22').value;

    if ((result21 == 0 && result22 == -2) || (result22 == 0 && result21 == -2)) {
        document.getElementById("yes/no2").innerHTML = "Pareizi!";
        document.getElementById("yes/no2").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no2").innerHTML = "Nepareizi!";
        document.getElementById("yes/no2").style.color = "red";
    }
}

function emptySecond() {
    document.getElementById("yes/no2").innerHTML = "";
    document.getElementById('result21').value = '';
    document.getElementById('result22').value = '';
}
// 5  1  0.8
function checkThird() {
    var result31 = document.getElementById('result31').value;
    var result32 = document.getElementById('result32').value;
    var result33 = document.getElementById('result33').value;

    if (result31 == 5 && result32 == 1 && result33 == 0.8) {
        document.getElementById("yes/no3").innerHTML = "Pareizi!";
        document.getElementById("yes/no3").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no3").innerHTML = "Nepareizi!";
        document.getElementById("yes/no3").style.color = "red";
    }
}

function emptyThird() {
    document.getElementById("yes/no3").innerHTML = "";
    document.getElementById('result31').value = '';
    document.getElementById('result32').value = '';
    document.getElementById('result33').value = '';
}

// ᵃ√v = t
function checkFourth() {
    var radioButton41 = document.getElementById("option41"); //input
    var radioButton42= document.getElementById("option42"); //input
    var radioButton43 = document.getElementById("option43")
    var radioButton44= document.getElementById("option44");
    if (!radioButton41.checked && !radioButton42.checked && !radioButton43.checked && !radioButton44.checked) {
        answer = document.getElementById("yes/no4");
        answer.innerHTML = "Jums vajag kaut ko izvēlēties!";
        answer.style.color="red";
    } else if (radioButton42.checked == true){
        answer = document.getElementById("yes/no4");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else {
        answer = document.getElementById("yes/no4");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyFourth(){
    var radioButton41 = document.getElementById("option41"); //input
    var radioButton42= document.getElementById("option42"); //input
    var radioButton43 = document.getElementById("option43")
    var radioButton44= document.getElementById("option44");

    radioButton41.checked = false; //input
    radioButton42.checked = false; //input
    radioButton43.checked = false;
    radioButton44.checked = false;
    answer = document.getElementById("yes/no4").innerHTML = ""
}


function checkFifth() {
    let correctAnswers = ["−2(t−10)+9", "2t(t−10)", "10t²⋅9t", "2+9(2t−10)", "(9t+10)2t"]; // input
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    
    let checkedValues = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            checkedValues.push(cb.value.trim());
        }
    });

    console.log("Checked Values:", checkedValues);

    let isCorrect = correctAnswers.length === checkedValues.length && correctAnswers.every(val => checkedValues.includes(val));

    if (isCorrect) {
        document.getElementById("yes/no5").innerHTML = "Pareizi!";
        document.getElementById("yes/no5").style.color = "green";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no5").innerHTML = "Nepareizi!";
        document.getElementById("yes/no5").style.color = "red";
    }
}
function emptyFifth() {
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById("yes/no5").innerHTML = "";
}

function checkSixth() {
    var result61 = document.getElementById('result61'); //input
    document.getElementById("yes/no6").innerHTML = "";
    if (result61.value == 20){ //input
        answer = document.getElementById("yes/no6");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    }else if (result61.value == ""){
        answer = document.getElementById("yes/no6");
        answer.innerHTML = "Jums vajag kaut ko ievadīt!";
        answer.style.color="red";
    } else {
        answer = document.getElementById("yes/no6");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptySixth() {
    document.getElementById("yes/no6").innerHTML = "";
    var result1 = document.getElementById('result61');
    result1.value = '';
}

function checkSeventh() {
    let correctAnswers = ["1", "3"]; //input
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    
    let checkedValues = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            checkedValues.push(cb.value.trim());
        }
    });

    let isCorrect = correctAnswers.length === checkedValues.length && correctAnswers.every(val => checkedValues.includes(val));

    if (isCorrect) {
        document.getElementById("yes/no7").innerHTML = "Pareizi!";
        document.getElementById("yes/no7").style.color = "green";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no7").innerHTML = "Nepareizi!";
        document.getElementById("yes/no7").style.color = "red";
    }
}


function emptySeventh() {
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById("yes/no7").innerHTML = "";
}

function checkEighth() {
    var result81 = document.getElementById('result81').value;
    var result82 = document.getElementById('result82').value;

    if (result81 == 32 && result82 == 64) {
        document.getElementById("yes/no8").innerHTML = "Pareizi!";
        document.getElementById("yes/no8").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no8").innerHTML = "Nepareizi!";
        document.getElementById("yes/no8").style.color = "red";
    }
}

function emptyEighth() {
    document.getElementById("yes/no8").innerHTML = "";
    document.getElementById('result81').value = '';
    document.getElementById('result82').value = '';
}

function checkNinth() {
    var result91 = document.getElementById('result91'); //input
    document.getElementById("yes/no9").innerHTML = "";
    if (result91.value == 420){ //input
        answer = document.getElementById("yes/no9");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    }else if (result91.value == ""){
        answer = document.getElementById("yes/no9");
        answer.innerHTML = "Jums vajag kaut ko ievadīt!";
        answer.style.color="red";
    } else {
        answer = document.getElementById("yes/no9");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyNinth() {
    document.getElementById("yes/no9").innerHTML = "";
    var result91 = document.getElementById('result91');
    result91.value = '';
}

function checkTenth() {
    var radioButton101 = document.getElementById("option101"); //input
    var radioButton102 = document.getElementById("option102"); //input
    var radioButton103 = document.getElementById("option103");
    var radioButton104 = document.getElementById("option104");

    if (!radioButton101.checked && !radioButton102.checked && !radioButton103.checked && !radioButton104.checked) {
        answer = document.getElementById("yes/no10");
        answer.innerHTML = "Jums vajag kaut ko izvēlēties!";
        answer.style.color="red";
    } else if (radioButton102.checked == true){
        answer = document.getElementById("yes/no10");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else {
        answer = document.getElementById("yes/no10");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyTenth(){
    var radioButton101 = document.getElementById("option101"); //input
    var radioButton102 = document.getElementById("option102"); //input
    var radioButton103 = document.getElementById("option103");
    var radioButton104 = document.getElementById("option104");

    radioButton101.checked = false; //input
    radioButton102.checked = false; //input
    radioButton103.checked = false;
    radioButton104.checked = false;

    answer = document.getElementById("yes/no10").innerHTML = ""
}

function checkEleventh() {
    var result111 = document.getElementById('result111'); // input
    if (result111.value == "0"){
        answer = document.getElementById("yes/no11");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else if (result111.value == ""){
        answer = document.getElementById("yes/no11");
        answer.innerHTML = "Jums vajag kaut ko ievadīt!";
        answer.style.color="red";
 } 
    else if (!Number.isInteger(parseFloat(result111.value))){
        answer = document.getElementById("yes/no11");
        answer.innerHTML = "Atbildei jābut pierakstītai ar cipariem!";
    } 
    else {
        answer = document.getElementById("yes/no11");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyEleventh() {
    document.getElementById("yes/no11").innerHTML = "";

    var result111;
    result111 = document.getElementById(`result111`); // input
    result111.value = '';
}

function checkTwelfth() {
    var radioButton121 = document.getElementById("option121"); //input
    var radioButton122 = document.getElementById("option122"); //input
    var radioButton123 = document.getElementById("option123");
    var radioButton124 = document.getElementById("option124");

    if (!radioButton121.checked && !radioButton122.checked && !radioButton123.checked && !radioButton124.checked) {
        answer = document.getElementById("yes/no12");
        answer.innerHTML = "Jums vajag kaut ko izvēlēties!";
        answer.style.color="red";
    } else if (radioButton122.checked == true){
        answer = document.getElementById("yes/no12");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else {
        answer = document.getElementById("yes/no12");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyTwelfth(){
    var radioButton121 = document.getElementById("option121"); //input
    var radioButton122 = document.getElementById("option122"); //input
    var radioButton123 = document.getElementById("option123");
    var radioButton124 = document.getElementById("option124");

    radioButton121.checked = false; //input
    radioButton122.checked = false; //input
    radioButton123.checked = false;
    radioButton124.checked = false;

    answer = document.getElementById("yes/no12").innerHTML = ""
}

function checkThirteenth() {
    let correctAnswers = ["(6;11)", "(−7;−5)"]; //input

    let checkboxes = document.querySelectorAll('input[name="answer"]');
    
    let checkedValues = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            checkedValues.push(cb.value.trim());
        }
    });

    let isCorrect = correctAnswers.length === checkedValues.length && correctAnswers.every(val => checkedValues.includes(val));

    if (isCorrect) {
        document.getElementById("yes/no13").innerHTML = "Pareizi!";
        document.getElementById("yes/no13").style.color = "green";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no13").innerHTML = "Nepareizi!";
        document.getElementById("yes/no13").style.color = "red";
    }
}


function emptyThirteenth() {
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById("yes/no13").innerHTML = "";
}

function checkFourteenth() {
    let correctAnswers = { //input
        placeholder141: "ar Ox asi veido 0 grādu leņķi"
    };

    let isCorrect = true;
    for (let id in correctAnswers) {
        let placeholder = document.getElementById(id);
        if (placeholder.children.length === 0 || placeholder.children[0].innerText !== correctAnswers[id]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        document.getElementById("yes/no14").innerHTML = "Pareizi!";
        document.getElementById("yes/no14").style.color = "green";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no14").innerHTML = "Nepareizi!";
        document.getElementById("yes/no14").style.color = "red";
    }
}


function emptyFourteenth() {
        let placeholder;
        try {
        placeholder = document.getElementById(`placeholder141`);
        }
        catch {
            placeholder = null;
        }
        if (placeholder.children.length > 0 && placeholder !== null) {
            document.getElementById("answers2").appendChild(placeholder.children[0]);
        }
    document.getElementById("yes/no14").innerHTML = "";
}



//-----------------------------------------------------------------------------------------------------------------------------------

// TESTA PARBAUDE
// Nepieciesams pievienot katram question-box div id="question(jautajumaVariants)"
//jautajuma varianti : "TextField", "DragDrop", "Buttons", "Radio", "CheckBox"

function checkTest() {
    testScore = 0;
    var questions = document.querySelectorAll('.question-box');
    var checkFunction;
    for (i = 0; i < questions.length; i++) {
        checkFunction = `check${numberWords[i]}`;
        window[checkFunction]();
    }

    var text = `Jūs ieguvāt: ${testScore} punktus no ${questions.length}`;
    showResults(text);

}

function emptyAllQuestions() {
    const questions = document.querySelectorAll('.question-box');
    var emptyFunction;
    for (i = 0; i < questions.length; i++) {
        emptyFunction = `empty${numberWords[i]}`;
        console.log(`emptying ` + emptyFunction + ` question`);
        window[emptyFunction]();
    }

    var questionInputs = document.querySelectorAll('.question-input');
    questionInputs.forEach(function(input) {
        input.readOnly = false;
    });
    var resultDiv = document.getElementById("result");
    resultDiv.hidden = true;
}

function countQuestionBoxes() {
    const questionBoxes = document.querySelectorAll('.question-box');
    return questionBoxes.length;
}


// scripts drag and drop

function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if(event.target.hasChildNodes()){
        
    }else{
        event.target.appendChild(document.getElementById(data));
    }
}



function showResults(text) {
    var questionInputs = document.querySelectorAll('.question-input');
    questionInputs.forEach(function(input) {
        input.readOnly = true;
    });

    var resultDiv = document.getElementById("result");
    resultDiv.hidden = false;

    var h2Element = resultDiv.querySelector("h2");
    h2Element.textContent = text;

}

function enableOrDisableInputs(mode) {
    var questions = document.querySelectorAll('.question-box');

    console.log("The amount of questions are: " + questions.length);
    var buttons;
    try {
        for (var i = 0; i < questions.length; i++) {
        switch (questions[i].id) {
        case (`questionTextField`): {
            console.log("Encountered a text field question in iteration: " + i);
            var currentElement = document.querySelectorAll('input[type="text"]');
            console.log("the amount of text boxes are: " + currentElement.length);
        for (var l = 0; l < currentElement.length; l++) {
            if (mode ==='disable') {
                currentElement[l].disabled = true;
            }
            else {
                currentElement[l].disabled = false;
            }
        }
            
            buttons = document.querySelectorAll('#questionTextField .button');
            break;
        }
        case (`questionButtons`): {
            console.log("Encountered a button question in iteration: " + i);

            buttons = document.querySelectorAll('#questionButtons .button');
            break;
        }
        case (`questionRadio`): {
            console.log("Encountered a radio question in iteration: " + i);
            var currentElement = document.querySelectorAll('#questionRadio input[type="radio"]');

            console.log("the amount of radios are: " + currentElement.length);
            currentElement.forEach(function(radio) {
                if (mode === 'disable') {
                    radio.disabled = true;
                }
                else {
                    radio.disabled = false;
                }
            });

            buttons = document.querySelectorAll('#questionRadio .button');
            break;
        }
        case (`questionDragDrop`): {
            console.log("Encountered a drag&drop question in iteration: " + i);
            var currentElement = document.querySelectorAll('.answer');
            for (var j = 0; j < currentElement.length; j++) {
                if (mode === 'disable') {
                    currentElement[j].setAttribute('draggable', 'false');
                }
                else {
                    currentElement[j].setAttribute('draggable', 'true');
                }
            }

            buttons = document.querySelectorAll('#questionDragDrop .button');
            break;
        }
        case (`questionCheckBox`): {
            console.log("Encountered a checkbox question in iteration: " + i);
            var currentElement = document.querySelectorAll('input[type="checkbox"]');
            console.log("the amount of checkboxes are: " + currentElement.length);
        for (var k = 0; k < currentElement.length; k++) {
            if (mode ==='disable') {
                currentElement[k].disabled = true;
            }
            else {
                currentElement[k].disabled = false;
            }
        }

            buttons = document.querySelectorAll('#questionCheckBox .button');
            break;
        }
    }

    buttons.forEach(button => {
        if (mode === 'disable') {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    });

    }
}
    catch (error) {console.log(error);}
}

// TAIMERA funkcijas
var givenMinutes;
function setTimer(time) {
    givenMinutes = time;
    startTimer();
}

function startTimer() {
    chronometer = setInterval(function() {
        seconds--;
        if (minutes == 0 && seconds == 0) {
                submitTest();
            }
        if (seconds < 0) {
            minutes--;
            seconds = 59;

        }

        chronometerDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }, 1000);
}

function submitTest() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearInterval(chronometer);
    enableOrDisableInputs('disable');
    checkTest();
}

function retryTest() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    chronometerDisplay.textContent = `${givenMinutes}:00`; // 40
    emptyAllQuestions();
    clearInterval(chronometer);
    seconds = 0;
    minutes = givenMinutes; //40
    enableOrDisableInputs('enable');
    startTimer();
    
}



