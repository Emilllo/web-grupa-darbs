var testScore;
const numberWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];

function press(value) {
    var result1 = document.getElementById('result1');
    result1.value += value;
}

function checkFirst() {
    var result1 = document.getElementById('result1');
    document.getElementById("yes/no1").innerHTML = "";
    if (result1.value == 16){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    }else if (result1.value == ""){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Jūms vajag kaut ko ievadīt!";
    } else {
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
    if (result2.value == "lg"){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else if (result2.value == ""){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Jūms vajag kaut ko ievadīt!";
        answer.style.color="red";
    } else if (!isNaN(parseFloat(result2.value))){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Atbildei jābut pierakstītai ar burtiem!";
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
    var radioButton1 = document.getElementById("option1");
    var radioButton2 = document.getElementById("option2");
    var radioButton3 = document.getElementById("option3");

    if (!radioButton1.checked && !radioButton2.checked && !radioButton3.checked) {
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Jūms vajag kaut ko izvēlēties!";
        answer.style.color="red";
    } else if (radioButton3.checked == true){
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else {
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Nepareizi!";
        answer.style.color="red";
    }
}

function emptyThird(){
    var radioButton1 = document.getElementById("option1");
    var radioButton2 = document.getElementById("option2");
    var radioButton3 = document.getElementById("option3");

    radioButton1.checked = false;
    radioButton2.checked = false;
    radioButton3.checked = false;

    answer = document.getElementById("yes/no3").innerHTML = ""
}

function checkFourth() {
    let correctAnswers = {
        placeholder1: "(c - x)²",
        placeholder2: "(c + x)²",
        placeholder3: "(c - x)(c + x)"
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
        document.getElementById("yes/no4").innerHTML = "Pareizi!";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no4").innerHTML = "Nepareizi!";
    }
}

function emptyFourth() {
    for (let i = 1; i <= 3; i++) { // i nedrikst but lielaks par pareizo atbilzu skaitu!
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
    document.getElementById("yes/no4").innerHTML = "";
}

function checkFifth() {
    let correctAnswers = ["16", "23", "17"];
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    
    let checkedValues = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            checkedValues.push(cb.value);
        }
    });

    let isCorrect = correctAnswers.length === checkedValues.length && correctAnswers.every(val => checkedValues.includes(val));

    if (isCorrect) {
        document.getElementById("yes/no5").innerHTML = "Pareizi!";
        testScore = testScore + 1;
    } else {
        document.getElementById("yes/no5").innerHTML = "Nepareizi!";
    }
}


function emptyFifth() {
    let checkboxes = document.querySelectorAll('input[name="answer"]');
    checkboxes.forEach(cb => cb.checked = false);
    document.getElementById("yes/no5").innerHTML = "";
}




// TESTA PARBAUDE
function checkTest() {
    testScore = 0;
    // const numberWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    // 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];
    const questions = document.querySelectorAll('.question-box');
    var checkFunction;
    for (i = 0; i < questions.length; i++) {
        checkFunction = `check${numberWords[i]}`;
        window[checkFunction]();
    }
    var text = `Jūs ieguvāt: ${testScore} punktus no ${questions.length}`;
    showResults(text);

    // checkFirst();
    // checkSecond();
    // checkThird();
}

function tryAgain() {
    const questions = document.querySelectorAll('.question-box');
    var emptyFunction;
    for (i = 0; i < questions.length; i++) {
        emptyFunction = `empty${numberWords[i]}`;
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
    // alert("There are " + questionBoxes.length + " question boxes.");
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
    event.target.appendChild(document.getElementById(data));
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
