var feedback = {
    webpage:'What is Bullying',
    name: 'Y/N' ,
    informative: 'x'
}

function nameInput() {
    var x = document.getElementById("text-input").value;
    feedback.name = x;
}

const confirm = document.getElementById("confirm")
confirm.onclick=()=>{
    nameInput();
}

var input0 = document.getElementById("input-z");
var input1 = document.getElementById("input-one");
var input2 = document.getElementById("input-two");
var input3 = document.getElementById("input-tres");
var input4 = document.getElementById("input-four");
var input5 = document.getElementById("input-five");
var input6 = document.getElementById("input-six");
var input7 = document.getElementById("input-seven");
var input8 = document.getElementById("input-ate");
var input9 = document.getElementById("input-nine");
var input10 = document.getElementById("input-ten");

input0.onclick=()=>{
    feedback.informative=0
}
input1.onclick=()=>{
    feedback.informative=1
}
input2.onclick=()=>{
    feedback.informative=2
}
input3.onclick=()=>{
    feedback.informative=3
}
input4.onclick=()=>{
    feedback.informative=4
}
input5.onclick=()=>{
    feedback.informative=5
}
input6.onclick=()=>{
    feedback.informative=6
}
input7.onclick=()=>{
    feedback.informative=7
}
input8.onclick=()=>{
    feedback.informative=8
}
input9.onclick=()=>{
    feedback.informative=9
}
input10.onclick=()=>{
    feedback.informative=10
}

var linK = "https://api.whatsapp.com/send?phone=91000000000&text=%20Feedback"
function updateLink(){
    linK += "%0A" + "Webpage:%20" + feedback.webpage + "%0A" + "Name%20:%20" + feedback.name + "%0A"+ "Rating%20:%20" + feedback.informative;
}

let thankYou = document.getElementById("thanks")

var submit = document.getElementById("submit")

submit.onclick=()=>{
    updateLink();
    window.open(linK,"_blank");
    thankYou.innerHTML="Thank you so much for your feedback! :)"
}

const $button= document.getElementById("button")
$button.onclick=()=>{
    if(feedback.name !='Y/N'){
        $button.style.backgroundImage = "url('https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
    }else if(feedback.informative==10){
        $button.style.backgroundImage = "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')"
    }else if(feedback.name=='Y/N'){
        $button.style.backgroundImage = "url('https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
    }
}
