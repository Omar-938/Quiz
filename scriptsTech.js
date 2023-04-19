const bq1 = document.querySelector('#bq1');
const bq2 = document.querySelector('#bq2');
const bq3 = document.querySelector('#bq3');
const bq4 = document.querySelector('#bq4');
const bq5 = document.querySelector('#bq5');
const question5 = document.querySelector('#question5');
const question4 = document.querySelector('#question4');
const question3 = document.querySelector('#question3');
const question2 = document.querySelector('#question2');
const question1 = document.querySelector("#question1");
const goodq = document.querySelector("#goodq");
const goodq2 = document.querySelector("#goodq2");
const goodq3 = document.querySelector("#goodq3");
const goodq4 = document.querySelector("#goodq4");
const goodq5 = document.querySelector("#goodq5");
const rep = document.getElementsByClassName('rep');
const rep2 = document.getElementsByClassName('rep2');
const rep3 = document.getElementsByClassName('rep3');
const rep4 = document.getElementsByClassName('rep4');
const rep5 = document.getElementsByClassName('rep5');
const thomas = document.querySelector('#Thomas');
const resultatFinal = document.querySelector("#ResultatFinalCarte")
/* formulaire */



//Nav Barre / Burger 

const icone = document.querySelector('.navbar-mobile i');
  
const modal = document.querySelector('.modal');
 
icone.addEventListener('click', function(){
    console.log("icone cliquée");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
    
})


const message = "Merci mais on s'en fout 🤪 ";
                    document
                      .getElementById("formulaire")
                      .addEventListener("submit", function (event) {
                        event.preventDefault();
                        alert(message);
                      });


/* question 1 vers question 2*/



for(let i = 0; i < rep.length; i++){  
rep[i].addEventListener('click',function(event){
    event.preventDefault(); 
    if (rep[i].innerHTML === goodq.innerHTML){
        goodq.style.backgroundColor = 'green';
        bq1.addEventListener('click', function(){
            question1.style.display = 'none';
            question2.style.display = 'initial';
            
            
        })
    } else {
        
        rep[i].style.backgroundColor = 'red';
        goodq.style.backgroundColor = 'green';
        bq1.addEventListener('click', function(){
            question1.style.display = 'none';
            question2.style.display = 'initial';
            
        })
        
    
        
    }
})

  }

  /* question 2 vers question 3*/



    for(let i = 0; i < rep2.length; i++){  
    rep2[i].addEventListener('click',function(event){
        event.preventDefault(); 
        if (rep2[i].innerHTML === goodq2.innerHTML){
            goodq2.style.backgroundColor = 'green';
            bq2.addEventListener('click', function(){
                question2.style.display = 'none';
                question3.style.display = 'initial';
                
            })
        } else {
            rep2[i].style.backgroundColor = 'red';
            goodq2.style.backgroundColor = 'green';
            bq2.addEventListener('click', function(){
                question2.style.display = 'none';
                question3.style.display = 'initial';
                
            })
                
        }
    })
    
      }
    



/* question 3 vers 4 */


thomas.addEventListener('click', function(){
    window.alert("Il vous ment depuis le début c'est bien lui l'inventeur !!!")
})

for(let i = 0; i < rep3.length; i++){  
    rep3[i].addEventListener('click',function(event){
        event.preventDefault(); 
        if (rep3[i].innerHTML === goodq3.innerHTML){
            console.log('bonne réponse!!');
            goodq3.style.backgroundColor = 'green';
            bq3.addEventListener('click', function(){
                question3.style.display = 'none';
                question4.style.display = 'initial';
            })
        } else {
            rep3[i].style.backgroundColor = 'red';
            goodq3.style.backgroundColor = 'green';
            bq3.addEventListener('click', function(){
                question3.style.display = 'none';
                question4.style.display = 'initial';
            })
            
            
        } 
    })
    
      }

      /* question 4 vers 5 */

      for(let i = 0; i < rep4.length; i++){  
        rep4[i].addEventListener('click',function(){
            if (rep4[i].innerHTML === goodq4.innerHTML){
                goodq4.style.backgroundColor = 'green';
                bq4.addEventListener('click', function(){
                    question4.style.display = 'none';
                    question5.style.display = 'initial';
                })
            } else {
                rep4[i].style.backgroundColor = 'red';
                goodq4.style.backgroundColor = 'green';
                bq4.addEventListener('click', function(){
                    question4.style.display = 'none';
                    question5.style.display = 'initial';
                })
                
                
                
            } 
        })
        
          }
      
    /* Question 5 vers resultat */


    for(let i = 0; i < rep5.length; i++){  
        rep5[i].addEventListener('click',function(){
            if (rep5[i].innerHTML === goodq5.innerHTML){
                goodq5.style.backgroundColor = 'green';
                bq5.addEventListener('click', function(){
                    question5.style.display = 'none';
                    resultatFinal.style.display = 'initial';
                })
            } else {
                rep5[i].style.backgroundColor = 'red';
                goodq5.style.backgroundColor = 'green';
                bq5.addEventListener('click', function(){
                    question5.style.display = 'none';
                    resultatFinal.style.display = 'initial';
                })
                
                
            } 
        })
        
          }