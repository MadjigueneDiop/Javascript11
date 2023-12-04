// Recuperer les ID
const ajout =document.getElementById("Input1");
const ajouter =document.getElementById("taskList");
const btn =document.getElementById("Add");
btn.addEventListener('click',() =>{
    //   Creation  div
    let divs=document.createElement("div");
    divs.classList.add("div1")
       
    //   Creation  li
    let li1 =document.createElement("li")
    divs.appendChild(li1)
    li1.innerHTML =ajout.value;

    //   Creation  span
    let span1= document.createElement("span")
      
        // creation button1
        let bouton1 =document.createElement("button");
        bouton1.classList.add("btn1")
        bouton1.innerText="ToDo"
        span1.appendChild(bouton1)


       // creation button2
      let bouton2=document.createElement("button")
        bouton2.classList.add("btn2")
        bouton2.innerText="Doing"
        span1.appendChild(bouton2)

        
       // creation button3
         let bouton3=document.createElement("button")
         bouton3.classList.add("btn3")
         bouton3.innerText="Done"
         span1.appendChild(bouton3)

        
         divs.appendChild(span1);
         ajouter.appendChild(divs)
        
    
    ajout.value ="";
    // changement color
    bouton1.addEventListener('click', () => {
        divs.style.backgroundColor = 'red';
    });

     bouton2.addEventListener('click', () => {
        divs.style.backgroundColor = 'orange';
    });

    bouton3.addEventListener('click', () => {
        divs.style.backgroundColor = 'green';
    });

});
















