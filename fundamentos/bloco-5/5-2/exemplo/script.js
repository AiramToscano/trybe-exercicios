// arquivo script.js



function exemplo1(){
let criar = document.getElementById("pai")
let criarirmao = document.createElement("section");
criarirmao.id ="irmaoElementoOndeVoceEsta";


criar.appendChild(criarirmao); }

exemplo1();


function exemplo2()  {
    let criar1 = document.getElementById("elementoOndeVoceEsta")
    let criarfilho = document.createElement("section");
    criarfilho.id ="terceirofilhodofilhoElementoOndeVoceEsta";
    
    
    criar1.appendChild(criarfilho); }
    
    exemplo2();

    function exemplo3(){
        let criar2 = document.getElementById("primeiroFilhoDoFilho")
        let criarfilho2 = document.createElement("section");
        criarfilho2.id ="filhodofilhodoprimeirofilho";
        
        
        criar2.appendChild(criarfilho2); }
        
        exemplo3();

        function acessa1(){ //localizar o terceiro filho atraves do filhodofilhoprimeirofilho
            let criaracessar = document.getElementById("filhodofilhodoprimeirofilho").parentElement.parentElement.nextElementSibling
            
            
            }
            
            acessa1();
       
        function removeelementos (){
            const pai = document.getElementById('pai');

            for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
              const currentChildren = pai.childNodes[index];
              if (currentChildren.id !== 'elementoOndeVoceEsta') {
                currentChildren.remove();
              }
            }
            const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
            segundoEUltimoFilhoDoFilho.remove();
            
        }  removeelementos();