const data = [{
    question:"what is name?",
    optionA : 1,
    optionB : 2,
    optionC : "hii",
    optionD :"kiran"
},{
    question:"?",
    optionA : 1,
    optionB : 2,
    optionC : "hii",
    optionD :"kiran"
},{
    question:"wh name?",
    optionA : 1,
    optionB : 2,
    optionC : "hii",
    optionD :"kiran"
},{
    question:"w name?",
    optionA : 1,
    optionB : 2,
    optionC : "hii",
    optionD :"kiran"
}]

const question = document.getElementById("question");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const option4 = document.getElementById("opt4");

function nextQuestion(){

    for(i=0; i<data.length ; i++){
        question.innerHTML = data[i].question;
        option1.innerHTML = data[i].optionA
        option2.innerHTML = data[i].optionB
        option3.innerHTML = data[i].optionC
        option4.innerHTML = data[i].optionD
        }
}



