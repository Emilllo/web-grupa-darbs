function press(value) {
    var result1 = document.getElementById('result1');
    result1.value += value;
}
function press2(value) {
    var result1 = document.getElementById('result2');
    result1.value += value;
}

function checkFirst() {
    var result1 = document.getElementById('result1');
    document.getElementById("yes/no1").innerHTML = "";
    if (result1.value == "4"){
        answer = document.getElementById("yes/no1");
        answer.innerHTML = "Pareizi!";
        answer.style.color="green";
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

function check12(){
    var radios = document.getElementsByName('Status');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === "a^3") {res3 = "Pareizi!"} else {res3 = "Nepareizi!"}
            radios[i].checked = false;
            break;
        }
    }
    document.getElementById('yes/no12').innerHTML = res3;
}

function empty12() {
    document.getElementById('yes/no12').innerHTML = "";
}
function check11(){

    res=document.getElementById("result11").value
    if (!isNaN(res)) {
        document.getElementById('yes/no11').innerHTML = "Lūdzu, ievadiet tekstu!";
    } else if (res==='tg') {
        document.getElementById('yes/no11').innerHTML = "Pareizi!";
    } else {
        document.getElementById('yes/no11').innerHTML = "Nepareizi!";
    }
}
function empty11() {
    document.getElementById('result11').value = '';
    document.getElementById('yes/no11').innerHTML = "";
}

function check6() {
    var number2 = document.getElementById('number2').checked;
    var number4 = document.getElementById('number4').checked;

    if (number2 && number4) {
        document.getElementById('yes/no6').innerHTML = "Pareizi, 4 un 8 ir pāra skaitļi!";
    } else {
        document.getElementById('yes/no6').innerHTML = "Diemžēl tas nav pareizi. Pāra skaitļi ir 4 un 8.";
    }
}

function empty6() {
    document.getElementById('number1').checked = false;
    document.getElementById('number2').checked = false;
    document.getElementById('number3').checked = false;
    document.getElementById('number4').checked = false;
    document.getElementById('yes/no6').innerHTML = "";
}

function check7() {

    res=document.getElementById('result7').value
    if (isNaN(res)) {
        document.getElementById('yes/no7').innerHTML = "Lūdzu, ievadiet skaitli!";
    } else if (Number(res)===9) {
        document.getElementById('yes/no7').innerHTML = "Pareizi!";
    } else {
        document.getElementById('yes/no7').innerHTML = "Nepareizi!";}

}

function empty7() {
    document.getElementById('result7').value = '';
    document.getElementById('yes/no7').innerHTML = "";
}

function press(value) {
    var result1 = document.getElementById('result1');
    result1.value += value;
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

function check8() {
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
    } else {
        document.getElementById("yes/no8").innerHTML = "Nepareizi!";
    }
}

function empty8() {
    for (let i = 1; i <= 7; i++) {
        let placeholder = document.getElementById(`placeholder${i}`);
        if (placeholder.children.length > 0) {
            document.getElementById("answers").appendChild(placeholder.children[0]);
        }
    }
    document.getElementById("yes/no4").innerHTML = "";
}

function check9() {
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
    } else {
        document.getElementById("yes/no9").innerHTML = "Nepareizi!";
    }
}

function empty9() {
    for (let i = 91; i <= 94; i++) {
        let placeholder = document.getElementById(`placeholder${i}`);
        if (placeholder.children.length > 0) {
            document.getElementById("answers2").appendChild(placeholder.children[0]);
        }
    }
    document.getElementById("yes/no9").innerHTML = "";
}

function check10() {
    var number2 = document.getElementById('number16').checked;
    var number3 = document.getElementById('number20').checked;
    var number5 = document.getElementById('number18').checked;

    if (number2 && number3 && number5) {
        document.getElementById('yes/no10').innerHTML = "Pareizi!";
    } else {
        document.getElementById('yes/no10').innerHTML = "Diemžēl tas nav pareizi. Skaitļi, kuri ir lielāki par 15 ir 16, 20 un 18!";
    }
}

function empty10() {
    document.getElementById('number10').checked = false;
    document.getElementById('number16').checked = false;
    document.getElementById('number20').checked = false;
    document.getElementById('number14').checked = false;
    document.getElementById('number18').checked = false;
    document.getElementById('yes/no10').innerHTML = "";
}

function submitAnswers() {
    checkFirst();
    checkSecond();
    checkThird();
    checkFourth();
    checkFifth();
}
