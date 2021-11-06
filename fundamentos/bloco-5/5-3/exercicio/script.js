
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
 

  function days (){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      
      const daysnumbers = document.querySelector('#days')
      for ( let i = 0; i < dezDaysList.length; i += 1) {
        let listanumerosindex = dezDaysList[i];
        let days1 = document.createElement("li")
        days1.innerHTML = listanumerosindex;
        daysnumbers.appendChild(days1);
        days1.className = "day";
        days1.style.color ='black';

        if (dezDaysList[i] === 24 || dezDaysList[i] == 25  || dezDaysList[i] == 31  ){

            days1.classList.add("holliday");
            
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] == 11  || dezDaysList[i] == 18 || dezDaysList[i] == 25 ){

            days1.classList.add("friday");
            
        }
        
      }
  }

  days();
  function botao1(){
  const botaoferiado1 = document.querySelector('.buttons-container')
  let botaoferiado = document.createElement("button")
  botaoferiado.innerHTML = "Feriados";
  botaoferiado.id = "btn-holiday";
  botaoferiado1.appendChild(botaoferiado);
  
  }

  botao1();
 
  
  // essa questão tem uma logica de uma função dentro de outra função.
  function corferiado(){
    
    const buttontest = document.querySelector('#btn-holiday');
    const buttonholiday = document.querySelectorAll('.holliday');
    let newcolor = 'green'; 
    let colorbefore = 'black';
    function corferiado2 (){
    for( let i = 0; i < buttonholiday.length ; i += 1) {
      
      if (buttonholiday[i].style.color === newcolor) {
      buttonholiday[i].style.color = colorbefore;
      }
      else {
        buttonholiday[i].style.color = newcolor;
      }
}
    }
    buttontest.addEventListener('click', corferiado2);
  }

corferiado();


function botao2(){
  const botaosexta = document.querySelector('.buttons-container')
  let botaosexta1= document.createElement("button")
  botaosexta1.innerHTML = "Sexta-Feira";
  botaosexta1.id = "btn-friday";
  botaosexta.appendChild(botaosexta1);
  
  }

  botao2();


  function corferiado1(){
    
    const buttontest1 = document.querySelector('#btn-friday');
    const buttonholiday1 = document.querySelectorAll('.friday');
    let newtext = "Sextou o/"
    let arraytest = ['4','11','18','25'];
   
    
    function corferiado3 (){
    for( let i = 0; i < buttonholiday1.length ; i += 1) {
      if ( buttonholiday1[i].innerHTML === newtext){
        buttonholiday1[i].innerHTML = arraytest[i];
      }
        else {
          buttonholiday1[i].innerHTML = newtext;
        }
}
    }
    buttontest1.addEventListener('click', corferiado3);
  }
  
corferiado1();

function agregra(){
const zoom1 = document.querySelector('#days');

function zoomday(test){
   
      
  test.target.style.fontSize = '30px';
}
  zoom1.addEventListener('mouseover',zoomday);

 

  function zoomday1(test1){
     
    test1.target.style.fontSize = '20px';
    
  }
    zoom1.addEventListener('mouseout',zoomday1);
} agregra();

function criarspan (){
 let criarfuction = document.querySelector('.my-tasks')
 let pegarfunction = document.createElement('span');
 criarfuction.appendChild(pegarfunction);

 pegarfunction.innerHTML = "Cozinhar";
}
criarspan();


function criarcor (){
let color1 = document.querySelector('.my-tasks');
let colorcreate = document.createElement('div');
let colorback = "green"
colorcreate.style.background = colorback;
colorcreate.className = "task";
color1.appendChild(colorcreate);



}
  criarcor(); 

  
  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    function settaskclass1 (event) {

      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
      
    }
    
   myTasks.addEventListener('click',settaskclass1);
  }
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'black';
      }
    });
  };
  
  setDayColor();