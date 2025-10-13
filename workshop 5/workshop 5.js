function validateForm() {

  const nimi = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const comment = document.querySelector('#comment').value;

  if (email === "" || comment === "") {
    alert("Täytä kaikki tiedot");
    return false;
  }

  if(email.length < 6){
    alert("email length must be ove 6 characters")
    return false
  }

  if (!email.includes("@")) {
    alert("Emailin täytyy sisältää @");
    return false;
  }

  if (comment.length > 150) {
    alert("Kommentti saa olla enintään 150 merkkiä pitkä.");
    return false;
  }
  
  localStorage.setItem("name", nimi);
  localStorage.setItem("email", email);
  localStorage.setItem("comment", comment);

  alert("Tiedot tallennettu localStorageen!");
  return false;
}

let form = document.getElementById('theForm');
let type = document.getElementById('type');
let years = document.getElementById('years');
let cost = document.getElementById('cost');

  
  form.addEventListener('submit', function(event) {

    event.preventDefault();

    let priceperyear = Number(type.value);
    let vuosienmäärä = Number(years.value);
    

    let total = priceperyear * vuosienmäärä;

    if (vuosienmäärä > 1) {
      total = total * 0.8; 
    }

    if(vuosienmäärä >= 5){
        total = total - 5;
        alert("Sait ylimääräisen 5 euron alennuksen valittuasi 5 vuotta")
    }

    cost.value = total.toFixed(2) + " €";
  });

function tallenna(){
const nimi = localStorage.getItem("name");
const sposti = localStorage.getItem("email");
const kommentti = localStorage.getItem("comment");

const tiedot = document.getElementById("sessiondata");
tiedot.innerHTML = `${nimi}\n${sposti}\n${kommentti}`;    
}