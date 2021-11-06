
function stringverifica ( word1 ,word2){


for ( let i = 0; i < word1.length ; i ++ ){

for ( let j = 0 ; j < word2.length ; j ++){

    if( word1[(word1.length - word2.length) - i ] == word2[j]) {

        return true;
    }

  else {

     return false;
  }
}

}

}

console.log(stringverifica('amor','o'));