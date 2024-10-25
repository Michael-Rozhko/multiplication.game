const num1 = Math.ceil(Math.random()*100)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.
getElementById("question");

const inputEl = document.getElementById
("input")

questionEl.innerText = `What is ${num1}
x ${num2}?`

const correctAns = num1 * num2

formEl.addEventlistener("submit", ()=>{
    const userAns = inputEl.value
    console.log(userAns, typeof userAns)
})