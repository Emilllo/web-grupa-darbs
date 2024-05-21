var testScore;
const numberWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];

function press(value) {
    var result1 = document.getElementById('result1');
    result1.value += value;
}

function pressReplacing(value) {
    var result1 = document.getElementById('result1');
    result1.value = value;
}

function checkFirst() {
    var result1 = document.getElementById('result1');
    document.getElementById("yes/no1").innerHTML = "";
    if (result1.value == 'trijstūris'){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    }else if (result1.value == ""){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Jums vajag kaut ko ievadīt!";
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
    if (result2.value == "9"){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
        testScore = testScore + 1;
    } else if (result2.value == ""){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Jums vajag kaut ko ievadīt!";
        answer.style.color="red";
 } 
    else if (!Number.isInteger(parseFloat(result2.value))){
        answer = document.getElementById("yes/no2");
        answer.innerHTML = "Atbildei jābut pierakstītai ar cipariem!";
    } 
    else {
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

    if (!radioButton1.checked && !radioButton2.checked) {
        answer = document.getElementById("yes/no3");
        answer.innerHTML = "Jums vajag kaut ko izvēlēties!";
        answer.style.color="red";
    } else if (radioButton1.checked == true){
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

    radioButton1.checked = false;
    radioButton2.checked = false;

    answer = document.getElementById("yes/no3").innerHTML = ""
}

// function checkFourth() {
//     let correctAnswers = {
//         placeholder1: "1",
//         placeholder2: "2",
//         placeholder3: "4",
//         placeholder4: "5"
//     };

//     let isCorrect = true;
//     for (let id in correctAnswers) {
//         let placeholder = document.getElementById(id);
//         if (placeholder.children.length === 0 || placeholder.children[0].innerText !== correctAnswers[id]) {
//             isCorrect = false;
//             break;
//         }
//     }

//     if (isCorrect) {
//         document.getElementById("yes/no4").innerHTML = "Pareizi!";
//         testScore = testScore + 1;
//     } else {
//         document.getElementById("yes/no4").innerHTML = "Nepareizi!";
//     }
// }
function checkFourth() {
    userAnswers = [];
    for (let i = 1; i <= 4; i++) {
        let placeholder;
        try {
            placeholder = document.getElementById(`placeholder${i}`);
            // placeholder = placeholder.replace('placeholder', '');
            console.log(placeholder.children[0].innerText);
            userAnswers.push(placeholder.children[0].innerText);
        }
        catch {
            placeholder = null;
            break;
        }
    }
    minNumber = Math.min(...userAnswers);
    console.log(minNumber); 
    let isCorrect
    if (userAnswers[0] > minNumber) {
        isCorrect = false;
        console.log('false1');
    } else {
        for (let i = 1; i < userAnswers.length; i++) {
            if (userAnswers[i] >= userAnswers[i - 1]) {
                isCorrect = true;
            }
            else {
                isCorrect = false;
                console.log('false2');
                break;
            }
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
    for (let i = 1; i <= 4; i++) { // i nedrikst but lielaks par pareizo atbilzu skaitu!
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
    let correctAnswers = ["4", "8", "12"];
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
// Nepieciesams pievienot katram question-box div id="question(jautajumaVariants)"
//jautajuma varianti : "TextField", "DragDrop", "Buttons", "Radio", "CheckBox"

function checkTest() {
    testScore = 0;
    var questions = document.querySelectorAll('.question-box');
    var checkFunction;
    console.log("blacked.com");
    //deaktivizejam pogas
    // var buttons = document.querySelectorAll('#questionBox .button'); //#questionBox
    // buttons.forEach(button => {
    //     button.disabled = true;
    // });
    var buttons;
    for (i = 0; i < questions.length; i++) {
        checkFunction = `check${numberWords[i]}`;
        window[checkFunction]();
        // enableOrDisableInputs('disable');
        // try {
        //     switch (questions[i].id) {
        //     case (`questionTextField`): {
        //         console.log("Encountered a text field question in iteration: " + i);
        //         var currentElement = document.getElementById(`result${i+1}`);
        //         currentElement.readOnly = true;
                
        //         buttons = document.querySelectorAll('#questionTextField .button');
        //         break;
        //     }
        //     case (`questionButtons`): {
        //         console.log("Encountered a button question in iteration: " + i);

        //         buttons = document.querySelectorAll('#questionButtons .button');
        //         break;
        //     }
        //     case (`questionRadio`): {
        //         console.log("Encountered a radio question in iteration: " + i);
        //         var currentElement = document.querySelectorAll('#questionRadio input[type="radio"]');

        //         console.log("the amount of radios are: " + currentElement.length);
        //         currentElement.forEach(function(radio) {
        //         radio.disabled = true;});

        //         buttons = document.querySelectorAll('#questionButtons .button');
        //         break;
        //     }
        //     case (`questionDragDrop`): {
        //         console.log("Encountered a drag&drop question in iteration: " + i);
        //         var currentElement = document.querySelectorAll('.answer');
        //         for (var j = 0; j < currentElement.length; j++) {
        //             currentElement[j].setAttribute('draggable', 'false');
        //         }

        //         buttons = document.querySelectorAll('#questionDragDrop .button');
        //         break;
        //     }
        //     case (`questionCheckBox`): {
        //         console.log("Encountered a checkbox question in iteration: " + i);
        //         var currentElements = document.querySelectorAll('input[type="checkbox"]');
        //         console.log("the amount of checkboxes are: " + currentElement.length);
        //     for (var k = 0; k < currentElements.length; k++) {
        //         currentElements[k].disabled = true;
        //     }

        //         buttons = document.querySelectorAll('#questionCheckBox .button');
        //         break;
        //     }
        // }

        // buttons.forEach(button => {
        //     button.disabled = true;
        // });

        // }
        // catch (error) {console.log("unknown error");}
    }

    // document.getElementById('result2').readOnly = true;

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
        // enableOrDisableInputs('enable');
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

// function drop(event) {
//     // event.preventDefault();
//     // var data = event.dataTransfer.getData("text");
//     // event.target.appendChild(document.getElementById(data));
    
// }
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
        switch (questions[i].id) {
        case (`questionTextField`): {
            console.log("Encountered a text field question in iteration: " + i);
            var currentElement = document.getElementById(`result${i+1}`);
            if (mode === 'disable') {
                currentElement.readOnly = true;
            }
            else {
                currentElement.readOnly = false;
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

            buttons = document.querySelectorAll('#questionButtons .button');
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
            var currentElements = document.querySelectorAll('input[type="checkbox"]');
            console.log("the amount of checkboxes are: " + currentElement.length);
        for (var k = 0; k < currentElements.length; k++) {
            if (mode ==='disable') {
                currentElements[k].disabled = true;
            }
            else {
                currentElements[k].disabled = false;
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
    catch (error) {console.log("unknown error");}
}

function disableInputs() {
    var inputCheckBox = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < inputCheckBox.length; i++) {
        inputCheckBox[i].disabled = true;
    }
    var inputRadio = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputRadio.length; i++) {
        inputRadio[i].disabled = true;
    }
    var inputText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputText.length; i++) {
        inputText[i].readOnly = true;
    }
    var inputDrag = document.querySelectorAll('.answer');
    for (var i = 0; i < inputDrag.length; i++) {
        inputDrag[i].setAttribute('draggable', 'false');
    }
    var inputButton = document.querySelectorAll('button[type="button"]');
    for (var i = 0; i < inputButton.length; i++) {
        inputButton[i].disabled = true;
    }

}
function enableInputs() {
    var inputCheckBox = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < inputCheckBox.length; i++) {
        inputCheckBox[i].disabled = false;
    }
    var inputRadio = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputRadio.length; i++) {
        inputRadio[i].disabled = false;
    }
    var inputText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputText.length; i++) {
        inputText[i].readOnly = false;
    }
    var inputDrag = document.querySelectorAll('.answer');
    for (var i = 0; i < inputDrag.length; i++) {
        inputDrag[i].setAttribute('draggable', 'true');
    }
    var inputButton = document.querySelectorAll('button[type="button"]');
    for (var i = 0; i < inputButton.length; i++) {
        inputButton[i].disabled = false;
    }

}
