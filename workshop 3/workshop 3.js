function showTable() {
      let tableHTML = document.querySelector("#taulukonPaikka");
      tableHTML.innerHTML=


`<table id="example" class="display" border="1">
        <thead>
            <tr>
                <th>Nimi</th>
                <th>Tehtävä</th>
                <th>Palkka</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>$86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>$433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>$162,700</td>
            </tr>
        </tbody>
    </table>`;
}

let otsikko = document.querySelector("#joku");
otsikko.addEventListener('mouseover', function() {console.log("Stepped over my mouse");});

let otsikko2 = document.querySelector("#eka");
otsikko2.addEventListener('click', function() {otsikko2.innerHTML = "bye bye mouse!"; document.getElementById("eka").style.color = "red";}); 

let luku = 1;
let textarea = document.querySelector("#textdata");
textarea.addEventListener('focus', function() {textarea.innerHTML = "Please fill in the form with proper data";});

textarea.addEventListener('keydown', function() {document.getElementById ("charcount").innerHTML = luku++});



let napp1 = document.querySelector("#nappi");
napp1.addEventListener('click', function() {if (textarea.value.trim() === "") {alert("Tekstikenttä tyhjä")};});

let hiiriliike = document.querySelector("#coordinates");
hiiriliike.addEventListener('mousemove', function(event){document.getElementById("coordinates").innerHTML = ('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);});

//document.getElementById("coordinates")