// function getRandomInt() {
//     return Math.floor(Math.random() * 6 + 1);
//   }
  
//   function main() {
//     const button = document.querySelector('#rollButton');
//     const die = document.querySelector('#die');
  
//     button.addEventListener('click', function() {
//       const value = getRandomInt();
//       die.setAttribute('class', `face-${value}`);
//     });
//   }
  
//   window.addEventListener('load', main);


const getRandomInt = () => {
    return Math.floor(Math.random() * 6 + 1);
  }
  
  function main() {
    const button = document.querySelector('button');
    const dice = document.querySelector('output[name="dice"]');
  
    button.addEventListener('click', function() {
      const value = getRandomInt();
      dice.setAttribute('class', value);
    });
  }
  
  window.addEventListener('load', main);