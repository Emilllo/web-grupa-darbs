
var testScore=0;
const numberWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];

// function press(value) {
//     var result1 = document.getElementById('result1');
//     result1.value += value;
// }
// function press2(value) {
//     var result1 = document.getElementById('result2');
//     result1.value += value;
// }

function pressReplacing1(value) {
    var result1 = document.getElementById('result1');
    result1.value = value;
}
function pressReplacing2(value) {
    var result2 = document.getElementById('result2');
    result2.value = value;
}

function checkFirst() {
    var result1 = document.getElementById('result1');
    document.getElementById("yes/no1").innerHTML = "";
    if (result1.value == "4"){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore++;
    }  else {
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyFirst() {
    document.getElementById("yes/no1").innerHTML = "";
    var result1 = document.getElementById('result1');
    result1.value = '';
}

function checkSecond() {
    var result2 = document.getElementById('result2');
    if (result2.value == "6"){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore++;
    }  else if (!isNaN(parseFloat(result2.value))){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    } else {
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptySecond() {
    document.getElementById("yes/no2").innerHTML = "";
    var result2 = document.getElementById('result2');
    result2.value = '';
}

function checkThird() {
    var option1 = document.getElementById("option1").checked;
    var option2 = document.getElementById("option2").checked;
    var option3 = document.getElementById("option3").checked;
    var option4 = document.getElementById("option4").checked;
    var option5 = document.getElementById("option5").checked;
    var option6 = document.getElementById("option6").checked;
    var option7 = document.getElementById("option7").checked;
    var option8 = document.getElementById("option8").checked;

    if (option5 && option7 && !option1 && !option2 && !option3 && !option4 && !option6 && !option8) {
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore++;
    } else {
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyThird() {
    document.getElementById("yes/no3").innerHTML = "";
    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
    document.getElementById("option5").checked = false;
    document.getElementById("option6").checked = false;
    document.getElementById("option7").checked = false;
    document.getElementById("option8").checked = false;
}

function checkFourth() {
    var result4 = document.getElementById('result4').value;
    var result5 = document.getElementById('result5').value;
    var result6 = document.getElementById('result6').value;

    if (result4 == "1" && result5 == "5" && result6 == "2") {
        document.getElementById("yes/no4").innerHTML = "Pareizi!";
        document.getElementById("yes/no4").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no4").innerHTML = "Nepareizi!";
        document.getElementById("yes/no4").style.color = "red";
    }
}

function emptyFourth() {
    document.getElementById("yes/no4").innerHTML = "";
    document.getElementById('result4').value = '';
    document.getElementById('result5').value = '';
    document.getElementById('result6').value = '';
}

function checkFifth() {
    var result7 = document.getElementById('result7').value;
    var result8 = document.getElementById('result8').value;

    if (result7 == "6" && result8.toLowerCase() == "mazāk") {
        document.getElementById("yes/no5").innerHTML = "Pareizi!";
        document.getElementById("yes/no5").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no5").innerHTML = "Nepareizi!";
        document.getElementById("yes/no5").style.color = "red";
    }
}

function emptyFifth() {
    document.getElementById("yes/no5").innerHTML = "";
    document.getElementById('result7').value = '';
    document.getElementById('result8').value = '';
}

function checkSixth() {
    var number2 = document.getElementById('number2').checked;
    var number4 = document.getElementById('number4').checked;

    if (number2 && number4) {
        document.getElementById('yes/no6').innerHTML = "Pareizi, 4 un 8 ir pāra skaitļi!";
        document.getElementById("yes/no6").style.color = "green";
        testScore++;
    } else {
        document.getElementById('yes/no6').innerHTML = "Diemžēl tas nav pareizi. Pāra skaitļi ir 4 un 8.";
        document.getElementById("yes/no6").style.color = "red";
    }
}

function emptySixth() {
    document.getElementById('number1').checked = false;
    document.getElementById('number2').checked = false;
    document.getElementById('number3').checked = false;
    document.getElementById('number4').checked = false;
    document.getElementById('yes/no6').innerHTML = "";
}

function checkSeventh() {

    res=document.getElementById('result77').value
    if (isNaN(res)) {
        document.getElementById('yes/no7').innerHTML = "Lūdzu, ievadiet skaitli!";
        document.getElementById("yes/no7").style.color = "red";
    } else if (Number(res)===9) {
        document.getElementById('yes/no7').innerHTML = "Pareizi!";
        document.getElementById("yes/no7").style.color = "green";
        testScore++;
    } else {
        document.getElementById('yes/no7').innerHTML = "Nepareizi!";
        document.getElementById("yes/no7").style.color = "red";
    }

}

function emptySeventh() {
    document.getElementById('result77').value = '';
    document.getElementById('yes/no7').innerHTML = "";
}

function checkEighth() {
    let correctAnswers = {
        placeholder1: "1",
        placeholder2: "2",
        placeholder3: "4",
        placeholder4: "5"
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
        document.getElementById("yes/no8").innerHTML = "Pareizi!";
        document.getElementById("yes/no8").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no8").innerHTML = "Nepareizi!";
        document.getElementById("yes/no8").style.color = "red";
    }
}

function emptyEighth() {
    for (let i = 1; i <= 4; i++) {
        let placeholder = document.getElementById(`placeholder${i}`);
        if (placeholder.children.length > 0) {
            document.getElementById("answers").appendChild(placeholder.children[0]);
        }
    }
    document.getElementById("yes/no8").innerHTML = "";
}

function checkNinth() {
    let correctAnswers = {
        placeholder91: "Pele",
        placeholder92: "Kaķis",
        placeholder93: "Suns",
        placeholder94: "Zilonis"
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
        document.getElementById("yes/no9").innerHTML = "Pareizi!";
        document.getElementById("yes/no9").style.color = "green";
        testScore++;
    } else {
        document.getElementById("yes/no9").innerHTML = "Nepareizi!";
        document.getElementById("yes/no9").style.color = "red";
    }
}

function emptyNinth() {
    for (let i = 91; i <= 94; i++) {
        let placeholder = document.getElementById(`placeholder${i}`);
        if (placeholder.children.length > 0) {
            document.getElementById("answers2").appendChild(placeholder.children[0]);
        }
    }
    document.getElementById("yes/no9").innerHTML = "";
}

function checkTenth() {
    var number2 = document.getElementById('number16').checked;
    var number3 = document.getElementById('number20').checked;
    var number5 = document.getElementById('number18').checked;

    if (number2 && number3 && number5) {
        document.getElementById('yes/no10').innerHTML = "Pareizi!";
        document.getElementById("yes/no10").style.color = "green";
        testScore++;
    } else {
        document.getElementById('yes/no10').innerHTML = "Diemžēl tas nav pareizi. Skaitļi, kuri ir lielāki par 15 ir 16, 20 un 18!";
        document.getElementById("yes/no10").style.color = "red";
    }
}

function emptyTenth() {
    document.getElementById('number10').checked = false;
    document.getElementById('number16').checked = false;
    document.getElementById('number20').checked = false;
    document.getElementById('number14').checked = false;
    document.getElementById('number18').checked = false;
    document.getElementById('yes/no10').innerHTML = "";
}

function checkEleventh(){

    res=document.getElementById("result11").value
    if (!isNaN(res)) {
        document.getElementById('yes/no11').innerHTML = "Lūdzu, ievadiet tekstu!";
        document.getElementById("yes/no11").style.color = "red";
    } else if (res==='tg') {
        document.getElementById('yes/no11').innerHTML = "Pareizi!";
        document.getElementById("yes/no11").style.color = "green";
        testScore++;
    } else {
        document.getElementById('yes/no11').innerHTML = "Nepareizi!";
        document.getElementById("yes/no11").style.color = "red";
    }
}
function emptyEleventh() {
    document.getElementById('result11').value = '';
    document.getElementById('yes/no11').innerHTML = "";
}

function checkTwelfth() {
   
    const options = document.getElementsByName('Status');
    let selectedOption;
    
    
    for (let option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }
    
    
    if (selectedOption === "a^3") {
        document.getElementById('yes/no12').innerText =  "Pareizi!";
        document.getElementById("yes/no12").style.color = "green";
        testScore++;
    } else {
        document.getElementById('yes/no12').innerText = "Nepareizi!";
        document.getElementById("yes/no12").style.color = "red";
    }
}
function emptyTwelfth() {
    document.getElementById("yes/no12").innerHTML = "";
    var radios = document.getElementsByName("Status");
    for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].checked = false;
    }
}

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



