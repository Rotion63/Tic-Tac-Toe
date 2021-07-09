const gameContainer = (() => {
  const mainWrapper = document.querySelector('.mainWrapper');

  let myGameArray = ['','','','','','','','',''];



  for(let i=0; i<9; i++){
    const div = document.createElement('div');
    div.className = 'gameBoxes';
    div.textContent = myGameArray[i];
    mainWrapper.appendChild(div);
  }

  return {
    mainWrapper,
    myGameArray
  }

})();

const gamePlay = () => {

  const mainWrapper = gameContainer.mainWrapper;
  let myGameArray = gameContainer.myGameArray;

  const player1 = document.querySelector('.player1');
  const player2 = document.querySelector('.player2');
  const winnerSection = document.querySelector('.winnerSection');

  const score1 = document.querySelector('.score1');
  let scoreX= 0;
  const score2 = document.querySelector('.score2');
  let scoreO =0;


  const rematch = document.querySelector('.rematch');
  const restart = document.querySelector('.restart');


  let count = 0;
  let tieCount = 0;

    for (let i = 0, len = mainWrapper.children.length; i < len; i++)
  {
      (function(index){
          mainWrapper.children[i].onclick = function(){
            if(count ==0 && mainWrapper.childNodes[index].textContent == '' ){
              mainWrapper.childNodes[index].textContent = 'X';
              myGameArray.splice(index,1,'X');
              count =1;
              tieCount++;
            }else if(count ==1 && mainWrapper.childNodes[index].textContent == ''){
              mainWrapper.childNodes[index].textContent = 'O';
              myGameArray.splice(index,1,'O');
              count =0;
              tieCount++;
            }


            if(myGameArray[0]== 'X' && myGameArray[1]== 'X' && myGameArray[2] == 'X'
            ||myGameArray[3] == 'X' && myGameArray[4] == 'X' && myGameArray[5] == 'X'
            ||myGameArray[6] == 'X' && myGameArray[7] == 'X' && myGameArray[8] == 'X'
            ||myGameArray[0] == 'X' && myGameArray[3] == 'X' && myGameArray[6] == 'X'
            ||myGameArray[1] == 'X' && myGameArray[4] == 'X' && myGameArray[7] == 'X'
            ||myGameArray[2] == 'X' && myGameArray[5] == 'X' && myGameArray[8] == 'X'
            ||myGameArray[0] == 'X' && myGameArray[4] == 'X' && myGameArray[8] == 'X'
            ||myGameArray[2] == 'X' && myGameArray[4] == 'X' && myGameArray[6] == 'X'){
              winner(player1.textContent,'X');
            }else 
            if(myGameArray[0]== 'O' && myGameArray[1]== 'O' && myGameArray[2] == 'O'
            ||myGameArray[3] == 'O' && myGameArray[4] == 'O' && myGameArray[5] == 'O'
            ||myGameArray[6] == 'O' && myGameArray[7] == 'O' && myGameArray[8] == 'O'
            ||myGameArray[0] == 'O' && myGameArray[3] == 'O' && myGameArray[6] == 'O'
            ||myGameArray[1] == 'O' && myGameArray[4] == 'O' && myGameArray[7] == 'O'
            ||myGameArray[2] == 'O' && myGameArray[5] == 'O' && myGameArray[8] == 'O'
            ||myGameArray[0] == 'O' && myGameArray[4] == 'O' && myGameArray[8] == 'O'
            ||myGameArray[2] == 'O' && myGameArray[4] == 'O' && myGameArray[6] == 'O'){
              winner(player2.textContent,'O');
            }else if(tieCount == 9){
              tie();
            }
            
            function winner(player,score){
              winnerSection.textContent = `${player} win the Game.`

              if(score == 'X'&& count !=2){
                scoreX += 1;
                score1.textContent = scoreX;
              }else if(score == 'O'&& count !=2){
                scoreO += 1;
                score2.textContent = scoreO;
              }
              count =2;
            }
            
            function tie(){
              winnerSection.textContent = `It's a tie.`
            }




          }  
          
          return index;//dont know works or not.
      })(i);
  
  }

rematch.addEventListener('click',() =>{
  const gridArray = Array.from(mainWrapper.childNodes);
  gridArray.forEach((element) => {
    element.textContent = '';
    count = 0;
    tieCount = 0;
    myGameArray = ['','','','','','','','',''];
    winnerSection.textContent = '';

  });

})

restart.addEventListener('click',() =>{
  const gridArray = Array.from(mainWrapper.childNodes);
  gridArray.forEach((element) => {
    element.textContent = '';
    count = 0;
    tieCount = 0;
    myGameArray = ['','','','','','','','',''];
    winnerSection.textContent = '';
    scoreO = 0;
    scoreX =0;
    score2.textContent = 0;
    score1.textContent = 0;

  });

})
}

gamePlay();

