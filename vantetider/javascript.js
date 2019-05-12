










var uri = "https://cors-anywhere.herokuapp.com/https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/35101";
var url = "https://cors-anywhere.herokuapp.com/https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/35101";

const doc = document.getElementById('vantetider');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let info = data.aaData[1];
        let info1 = data.aaData[2];
        let info2 = data.aaData[3];
        doc.innerHTML += `<h2>Bröstförminskning</h2>`;
       
        doc.innerHTML += `Region: ${info.regionName}<br>`;
        doc.innerHTML += `Plats: ${info.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info.Updated}<br><br>`;
       
        doc.innerHTML += `Region: ${info1.regionName}<br>`;
        doc.innerHTML += `Plats: ${info1.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info1.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info1.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info1.Updated}<br><br>`;

        doc.innerHTML += `Region: ${info2.regionName}<br>`;
        doc.innerHTML += `Plats: ${info2.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info2.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info2.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info2.Updated}<br>`;  
})    





fetch(url)
.then((resp)=>resp.json())

.then(function(data)
{
        let info = data.aaData[1];
        let info1 = data.aaData[2];
        let info2 = data.aaData[3];
        doc.innerHTML += `<h2>Borttag av livmoder</h2>`;
       
        doc.innerHTML += `Region: ${info.regionName}<br>`;
        doc.innerHTML += `Plats: ${info.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info.Updated}<br><br>`;
       
        doc.innerHTML += `Region: ${info1.regionName}<br>`;
        doc.innerHTML += `Plats: ${info1.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info1.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info1.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info1.Updated}<br><br>`;

        doc.innerHTML += `Region: ${info2.regionName}<br>`;
        doc.innerHTML += `Plats: ${info2.unitName}<br>`;
        doc.innerHTML += `Väntetid: ${info2.Waiting}<br>`;
        doc.innerHTML += `Kommentar: ${info2.Comment}<br>`;
        doc.innerHTML += `Uppdaterad: ${info2.Updated}<br>`;  
})  