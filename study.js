/*
//creating a module
const myGameBoard = (() => {

  const mainWrapper = document.querySelector('.mainWrapper');
  myArray =['','','','','','','','',''];
  let count = 0;


  const gameBoxes = () => {
    for(let i=0; i<myArray.length; i++){
      const div = document.createElement('div');
      div.className = 'smallBoxes';
      div.textContent = myArray[i];
      mainWrapper.appendChild(div);

      gamePlay(div);
    }
  }

  const gamePlay = (parent) => {
    if(count%2 == 0 ){
    parent.addEventListener('click', () => {
      parent.textContent = 'X';
      return ++count;
    })
  }else if(count%2 == 1){
    parent.addEventListener('click', () => {
      parent.textContent = 'O';
      return --count;
    })
  }
  }



  return {gameBoxes,myArray,count};

})();
*/

const myGameBoard = (player1,player2) => {
    myArray =[]
  
    let count = 0;
    const mainWrapper = document.querySelector('.mainWrapper');
    const winnerSection = document.querySelector('.winnerSection');
  
    const gameBoxes = () => {
      for(let i=0; i<9; i++){
        const div = document.createElement('div');
        div.className = 'smallBoxes';
        mainWrapper.appendChild(div);
  
        gamePlay(div);
      }
    }
  
    const gamePlay = (parent) => {
      parent.addEventListener('click', () => {
        if(count%2 == 0 && parent.textContent == ''){
        parent.textContent = 'X';
        myArray.push('X');
  
       if(children[0].textContent == 'X' && children[1].textContent == 'X' && children[2].textContent == 'X'
        ||children[3].textContent == 'X' && children[4].textContent == 'X' && children[5].textContent == 'X'
        ||children[6].textContent == 'X' && children[7].textContent == 'X' && children[8].textContent == 'X'
        ||children[0].textContent == 'X' && children[3].textContent == 'X' && children[6].textContent == 'X'
        ||children[1].textContent == 'X' && children[4].textContent == 'X' && children[7].textContent == 'X'
        ||children[2].textContent == 'X' && children[5].textContent == 'X' && children[8].textContent == 'X'
        ||children[0].textContent == 'X' && children[4].textContent == 'X' && children[8].textContent == 'X'
        ||children[2].textContent == 'X' && children[4].textContent == 'X' && children[6].textContent == 'X'){
          winner(player1);
        }
  
        count = 1;
        return count;
  
        }else if(count%2 == 1 && parent.textContent == ''){
  
        parent.textContent = 'O';
        myArray.push('O');
  
       if(children[0].textContent == 'O' && children[1].textContent == 'O' && children[2].textContent == 'O'
        ||children[3].textContent == 'O' && children[4].textContent == 'O' && children[5].textContent == 'O'
        ||children[6].textContent == 'O' && children[7].textContent == 'O' && children[8].textContent == 'O'
        ||children[0].textContent == 'O' && children[3].textContent == 'O' && children[6].textContent == 'O'
        ||children[1].textContent == 'O' && children[4].textContent == 'O' && children[7].textContent == 'O'
        ||children[2].textContent == 'O' && children[5].textContent == 'O' && children[8].textContent == 'O'
        ||children[0].textContent == 'O' && children[4].textContent == 'O' && children[8].textContent == 'O'
        ||children[2].textContent == 'O' && children[4].textContent == 'O' && children[6].textContent == 'O'){
          winner(player2);
        }
        count = 0;
        return count;
        }
      })
    }
  
    let children = mainWrapper.children;
    const winner = (parameter) => {
      winnerSection.textContent = `${parameter} win the game`;
      clearGrid();
      
    }
  
    function clearGrid() {
      const gridArray = Array.from(mainWrapper.childNodes);
      gridArray.forEach((element) => {
        element.textContent = '';
        count = 0;
        
      });
    }
  
    return {gameBoxes};
  
  };
  
  const firstGame = myGameBoard('Pratik','pratikshya');
  firstGame.gameBoxes();
  
  console.log(myArray)