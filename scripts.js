const bq1 = document.querySelector('#bq1');
const question2 = document.querySelector('#question2');
const question1 = document.querySelector("#question1");
const goodq = document.querySelector("#goodq");
const rep = document.getElementsByClassName('rep');








for(let i = 0; i < rep.length; i++){  
rep[i].addEventListener('click',function(event){
    event.preventDefault(); 
    if (rep[i].innerHTML === goodq.innerHTML){
        console.log('bonne réponse!!');
    } else {
        console.log("mauvaise réponse !!");
    }
})

  }

//Nav Barre / Burger 

const icone = document.querySelector('.navbar-mobile i');
  
const modal = document.querySelector('.modal');
 
icone.addEventListener('click', function(){
    console.log("icone cliquée");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
    
})




