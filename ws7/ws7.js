var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

function nimet() {
      var tulos = "";
      for (var i = 0; i < obj.employees.length; i++) {
        tulos += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>";
      }
      document.getElementById("jsondata").innerHTML = tulos;
    }      
    
function tiedot() {
    var tulos = "";
    for (var i = 0; i < obj.employees.length; i++) {
    for (var avain in obj.employees[i]) {
        tulos += avain + ": " + obj.employees[i][avain] + "<br>";
}
tulos += "<hr>";
}
document.getElementById("jsondata").innerHTML = tulos;
}

function raaka(){
const url = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

      fetch(url)
        .then(response => response.json()) 
        .then(data => {

          const raakateksti = JSON.stringify(data, null, 2);
          document.getElementById("rawdata").textContent = raakateksti;
        })
    }


function parsittu(){
const url = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          document.getElementById("rawdata").textContent = ""; 
          const elokuvat = data.Search; 

          let html = "<h3>Star Wars -elokuvat</h3>";
          html += "<table><tr><th>Otsikko</th><th>Vuosi</th><th>Tyyppi</th><th>IMDB ID</th></tr>";

          elokuvat.forEach(elokuva => {
            html += `<tr>
              <td>${elokuva.Title}</td>
              <td>${elokuva.Year}</td>
              <td>${elokuva.Type}</td>
              <td>${elokuva.imdbID}</td>
            </tr>`;
          });

          html += "</table>";

          document.getElementById("rawdata").innerHTML = html;
        })    
}

function haeData(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&APPID=ff64c247a136f706923d1ee0d55d71e2`;

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      const json = JSON.parse(xmlhttp.responseText);
      naytaData(json);
    } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
      document.getElementById("weatherdata").innerHTML =
        "<p style='color:red;'>Virhe haettaessa dataa. Tarkista kaupungin nimi.</p>";
    }
  };

  function naytaData(json) {
    const rivit = `
      <table border="1" style="border-collapse:collapse; width:60%; text-align:center;">
        <tr>
          <th>Kaupunki</th>
          <th>Lämpötila (°C)</th>
          <th>Säätila</th>
          <th>Kuvake</th>
        </tr>
        <tr>
          <td>${json.name}</td>
          <td>${json.main.temp}</td>
          <td>${json.weather[0].description}</td>
          <td><img src="https://openweathermap.org/img/w/${json.weather[0].icon}.png" alt="sääkuvake"></td>
        </tr>
      </table>
    `;
    document.getElementById("weatherdata").innerHTML = rivit;
  }
document.querySelector("button").addEventListener("click", function () {
  haeData("Helsinki");
});

document.getElementById("city").addEventListener("change", function () {
  const city = this.value;
  haeData(city);
});

document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("citysearch").value.trim();
  if (city) {
    haeData(city);
  } else {
    document.getElementById("weatherdata").innerHTML =
      "<p style='color:red;'>Kirjoita kaupungin nimi hakukenttään.</p>";
  }
});
}
//moro
