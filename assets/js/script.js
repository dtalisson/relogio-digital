let horas = document.querySelector('#horas') 
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')
 // pegando as váriaveis 

const relogio = setInterval(function time() {  // function onde executa certos códigos em determinados intervalos 
    let dateToday = new Date()  // cria uma variavel onde vai pegar as informações de hoje
    let hr = dateToday.getHours() // cria uma váriavel onde pega a hora 
    let min = dateToday.getMinutes()  // cria uma váriavel que pega os minutos 
    let seconds = dateToday.getSeconds() // cria uma váriavel que pega os segundos 

    if ( hr < 10) hr = '0'+ hr
    if ( min < 10) min = '0'+ min
    if ( seconds < 10) seconds = '0'+ seconds
  // condições que caso chegue em 10 e não tenha o '0', execute-os:
    horas.innerHTML = hr;  // usando a váriavel onde pegou a hora e inserindo no bloco
    minutos.innerHTML = min; // usando a váriavel onde pegou os minutos e inserindo no bloco
    segundos.innerHTML = seconds // usando a váriavel onde pegou os segundos e inserindo no bloco
    
    if ( hr >= 18 || hr <= 6) {   // caso o horário for menor que 6h da manhã ou maior que 6h da noite, o fundo vai ficar branco.
      document.querySelector('#bgcronometro').style.backgroundColor = 'black'
    }

})

