










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
            doc.innerHTML += `SytemID: ${items[i].sysid}<br>`;
            doc.innerHTML += `Namn: ${items[i].name}<br>`;
            doc.innerHTML += `Alkoholhalt: ${items[i].alcohol_vol}%<br>`;
            doc.innerHTML += `Pris: ${items[i].price}:-<br>`;
            doc.innerHTML += `Producerat i: ${items[i].producer}<br>`;
            doc.innerHTML += `Från: ${items[i].country}<br><br>`;
        }
   }) 


