let userscore=0;
let compscore=0;

const msg=document.querySelector('#msg');
const choices=document.querySelectorAll('.choice');

const userscorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');


// gencompchoice
const gencompchoice=()=>{
   const options=['rock','paper','scissors']
   const randindx=Math.floor(Math.random()*3)
   return options[randindx];
    
}

const drawGame =() =>{
   msg.innerText='Game was draw.play again';
   msg.style.backgroundColor='blue';
}
// showwwiner

const showwinner =(userwin,userchoice,compchoice)=>{
   if (userwin) {
      userscore++;
      userscorepara.innerText=userscore;
      // msg.innerText='you win'
      msg.innerText=`you win! ${userchoice} beats your ${compchoice}`; 
      msg.style.backgroundColor='green';
   }else{
      compscore++;
      compscorepara.innerText=compscore;
       userscorepcra=document.querySelector('#user-score');
      // msg.innerText='you lose';
      msg.innerText=`you lose ${compchoice} beats your ${userchoice}`;
      msg.style.backgroundColor='red';
   }
   
}

const playgame =(userchoice)=>{
   console.log('userchoice=',userchoice);

//    generate computer choice
const compchoice=gencompchoice();
console.log('compchoice=',compchoice);

 if (userchoice == compchoice)  {
   // draw game
   drawGame();
 }else{
   let userwin=true;
   // scissors papper
   if(userchoice === 'rock'){
      compchoice === 'papper' ? false :true;
   }else if(userchoice === 'papper'){
      // rock, scissor
     userwin= compchoice === 'scissors' ? false :true ;
   }else{
      // rock , paper
   userwin = compchoice === 'rock' ? false :true;
   }
   showwinner(userwin,userchoice,compchoice);
 }
}

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id');
       playgame(userchoice);

    });
});