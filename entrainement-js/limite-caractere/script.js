const input = document.querySelector('#input');
const counter = document.querySelector('#counter')
const porte = document.querySelector("#porte")
const verre = document.querySelector("#verre")
const chaine = document.querySelector("#chaine")

let verreson = new Audio('../image/verre.mp3')
let porteson = new Audio('../image/porte.mp3')
let chaineson = new Audio('../image/fouet.mp3')



console.log(input)

input.addEventListener('keyup', () => {
    counter.innerHTML=input.value.split(('')).length
    if(input.value.split(('')).length>49){
        input.value = input.value.slice(0,50) 
    }
    text.innerHTML = input.value
    if(input.includes('flamme')){
        text.innerHTML='☺'
    }
})

verre.addEventListener('click', () =>{
    verreson.play()
})

porte.addEventListener('click', () =>{
    porteson.play()
})

chaine.addEventListener('click', () =>{
    chaineson.play()
})