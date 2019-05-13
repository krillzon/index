
var uri = "https://cors-anywhere.herokuapp.com/https://systembevakningsagenten.se/api/json/1.0/newProducts.json";

const doc = document.getElementById('systembolaget');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        //let info = data.items[];

        doc.innerHTML += `<h1>Nyheter på Systembolaget!</h21>`;
       
        doc.innerHTML += `<h2>Börjar säljas: ${data.first_sale}</h2><br>`;

        var items = data.items;

        for (var i in items)
        {
            doc.innerHTML += `<b>SytemID:</b> ${items[i].sysid}<br>`;
            doc.innerHTML += `<b>Namn:</b> ${items[i].name}<br>`;
            doc.innerHTML += `<b>Alkoholhalt:</b> ${items[i].alcohol_vol}%<br>`;
            doc.innerHTML += `<b>Pris:</b> ${items[i].price}:-<br>`;
            doc.innerHTML += `<b>Producerat i:</b> ${items[i].producer}<br>`;
            doc.innerHTML += `<b>Från:</b> ${items[i].country}<br><br>`;
        }
   }) 


