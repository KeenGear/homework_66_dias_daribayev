const form1 = document.getElementById('string-3')
const form2 = document.getElementById('string-5')
const form3 = document.getElementById('string-2')
const form4 = document.getElementById('string-4')
const form5 = document.getElementById('string-1')
console.log(form1, form2, form3, form4, form5)


const elements = document.querySelectorAll(".element");

elements[0].style.color = "red";
elements[1].style.color = "red";
elements[2].style.color = "red";
elements[3].style.color = "green";
elements[4].style.color = "green";
elements[5].style.color = "green";


const container = document.getElementById("container");

const div1 = document.createElement("div");
div1.textContent = "Div 1";
div1.classList.add("divs");
container.appendChild(div1);

const div2 = document.createElement("div");
div2.textContent = "Div 2";
div2.classList.add("divs");
container.appendChild(div2);

const div3 = document.createElement("div");
div3.textContent = "Div 3";
div3.classList.add("divs");
container.appendChild(div3);

const div4 = document.createElement("div");
div4.textContent = "Div 4";
div4.classList.add("divs");
container.appendChild(div4);

const div5 = document.createElement("div");
div5.textContent = "Div 5";
div5.classList.add("divs");
container.appendChild(div5);

const task_3 = document.querySelectorAll(".divs");
const colors = ["red", "orange", "green", "blue", "purple"];

task_3[0].innerHTML = '<span style="color:' + colors[0] + '">Div 1</span>';
task_3[1].innerHTML = '<span style="color:' + colors[1] + '">Div 2</span>';
task_3[2].innerHTML = '<span style="color:' + colors[2] + '">Div 3</span>';
task_3[3].innerHTML = '<span style="color:' + colors[3] + '">Div 4</span>';
task_3[4].innerHTML = '<span style="color:' + colors[4] + '">Div 5</span>';

