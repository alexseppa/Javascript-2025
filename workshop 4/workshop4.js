function changeHeading()
{
    document.getElementById("otsikko").innerHTML="Muokattu otsikko!"
}

function secondButton() {
    let heading = document.getElementById('otsikko2')
    heading.style.fontSize="32px";
    heading.style.color="red";
}

function thirdButton() {
    document.querySelectorAll("em")[0].innerHTML = "Moro kaikille"
    document.querySelectorAll("em")[1].innerHTML = "Javascriptaajille"
}



function valitseauto() {
  let valinta = document.querySelector('#mySelect').value;
  let img = document.getElementById("näytettäväkuva");

  alert(valinta);  

  if (valinta === "BMW") {
    img.src = "Kuvat/BMW.jpg";
  } else if (valinta === "Audi") {
    img.src = "Kuvat/Audi.jpg";
  } else if (valinta === "Mercedes") {
    img.src = "Kuvat/Mercedes.jpg";
  } else if (valinta === "Volvo") {
    img.src = "Kuvat/Volvo.jpg";
  }
   
}
function sisään(){
let näytettäväkuva = document.getElementById('näytettäväkuva')
 näytettäväkuva.style.border = "3px solid green";

}

function ulos(){
let näytettäväkuva = document.getElementById('näytettäväkuva')
näytettäväkuva.style.border = "";
}

let painallus = document.getElementById("Insert");
let kenttä1 = document.getElementById("nimi")
let kenttä2 = document.getElementById("tehtava")
let kenttä3 = document.getElementById("palkka")

painallus.addEventListener('click', function(){
let teksti = kenttä1.value;
let tehtävä = kenttä2.value;
let palkka = Number(kenttä3.value);

    if (teksti.length < 5) {
    alert("Nimen tulee olla yli 5 merkkiä pitkä");}
    
    if (tehtävä.length === 0) {
        alert("Tehtävä kenttä ei saa olla tyhjä");}

    if(palkka === 0){
        alert("Arvon tulee olla yli 0");
    }

    if (isNaN(palkka)){
        alert("Syötä vain numeroita kohtaan Palkka");
    }
});

function myFunction() {
let eka = document.querySelector('#nimi').value;
let toka = document.querySelector('#tehtava').value;
let kolmas = document.querySelector('#palkka').value;

  var table = document.getElementById("data");
  
  var row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = eka;
  cell2.innerHTML = toka;
  cell3.innerHTML = kolmas;
}



