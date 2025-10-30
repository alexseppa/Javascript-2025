let kaikkiAsemat = [];

// Haetaan asematiedot heti sivun latautuessa
window.onload = function() {
  let url = "https://rata.digitraffic.fi/api/v1/metadata/stations";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
// Käsitellään vastaus
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let json = JSON.parse(xmlhttp.responseText);
      kaikkiAsemat = json.filter(s => s.passengerTraffic);
      paivitaAsemaValinta(kaikkiAsemat);
      document.getElementById("tulokset").innerHTML = "Valitse asema nähdäksesi junat.";
    }
  };
};

// Päivitä asemavalikko
function paivitaAsemaValinta(asemat) {
  let select = document.getElementById("asemaValinta");
  select.innerHTML = `<option value="">Valitse asema</option>`;
  for (let asema of asemat) {
    let opt = document.createElement("option");
    opt.value = asema.stationShortCode;
    opt.text = `${asema.stationName} (${asema.stationShortCode})`;
    select.appendChild(opt);
  }
}

// Suodata asemia tekstisyötteen mukaan
function suodataAsemat() {
  let hakusana = document.getElementById("asemaInput").value.toLowerCase();
  let suodatetut = kaikkiAsemat.filter(a => a.stationName.toLowerCase().includes(hakusana));
  paivitaAsemaValinta(suodatetut);
}

// Hae aseman junatiedot AJAX-kutsulla
function haeData(stationCode) {

  if (stationCode == "") return;
  document.getElementById("tulokset").innerHTML = `Haetaan tietoja asemalle ${stationCode}...`;

  let url = `https://rata.digitraffic.fi/api/v1/live-trains/station/${stationCode}?departing_trains=5&arriving_trains=5`;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
// Käsitellään vastaus
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let json = JSON.parse(xmlhttp.responseText);
      naytaData(json);
    }
  };
}

// Näytä haetut junatiedot taulukossa
function naytaData(json) {
  if (json.length == 0) {
    document.getElementById("tulokset").innerHTML = "Ei junatietoja tälle asemalle.";
    return;
  }

  let rivit = `
  <h2>Junatiedot</h2>
  <table>
    <tr>
      <th>Juna</th>
      <th>Lähtöasema</th>
      <th>Määränpää</th>
      <th>Lähtöaika</th>
      <th>Tila</th>
    </tr>`;

  for (let juna of json) {
    let tyyppi = juna.trainType + juna.trainNumber;
    let lahto = juna.timeTableRows[0].stationShortCode;
    let maali = juna.timeTableRows[juna.timeTableRows.length - 1].stationShortCode;
    let lahtoaika = new Date(juna.timeTableRows[0].scheduledTime).toLocaleTimeString("fi-FI", {hour: "2-digit", minute: "2-digit"});
    let tila = juna.runningCurrently ? "Liikenteessä" : "Ei liikenteessä";

    rivit += `
      <tr>
        <td>${tyyppi}</td>
        <td>${lahto}</td>
        <td>${maali}</td>
        <td>${lahtoaika}</td>
        <td>${tila}</td>
      </tr>`;
  }

  rivit += `</table>`;
  document.getElementById("tulokset").innerHTML = rivit;
}
