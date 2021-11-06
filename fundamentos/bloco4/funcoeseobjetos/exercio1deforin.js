let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente : 'sim'
  };
  let info1 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics ',
    nota: 'O último MacPatinhas',
    recorrente : 'sim'
  };

for ( let i in info) {
   if ( i != 'recorrente' ) {
    console.log (info[i],'e', info1[i] );
   }

   else{
    console.log ( 'ambos recorrentes');
   }
}

