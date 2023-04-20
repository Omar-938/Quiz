//Nav Barre / Burger 

const icone = document.querySelector('.navbar-mobile i');
  
const modal = document.querySelector('.modal');
 
icone.addEventListener('click', function(){
    console.log("icone cliquée");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
    
})


const troll = document.querySelector('#troll');

troll.addEventListener('click', function(){
    window.alert("Ya aucun sportif ici !! Allez oust 🤣 ")
})