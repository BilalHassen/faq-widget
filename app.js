const buttons = document.querySelectorAll("button")


const answers = document.querySelectorAll(".answer");


let closeIcon = document.querySelectorAll(".close")


for(const button of buttons){
    console.dir(button)
   button.addEventListener("click", ()=>{
    if(button.id === "button1"){
        answers[0].classList.toggle("answer")
        button.children[0].classList.toggle("close")
        button.children[1].classList.toggle("open")
    }
    if(button.id === "button2"){
        answers[1].classList.toggle("answer")
        button.children[0].classList.toggle("close")
        button.children[1].classList.toggle("open")
    }
    if(button.id === "button3"){
        answers[2].classList.toggle("answer")
        button.children[0].classList.toggle("close")
        button.children[1].classList.toggle("open")
    }
    if(button.id === "button4"){
        answers[3].classList.toggle("answer")
        button.children[0].classList.toggle("close")
        button.children[1].classList.toggle("open")
    }

   })
}