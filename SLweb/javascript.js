var uri = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=b0c3cced0bba45c58222712c148b6cf2&siteid=9633&timewindow=60";

const boi = document.getElementById('trams');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let tram = data.ResponseData.Trams;
    
        return tram.map(function(tramobj)
    {
        boi.innerHTML += `${tramobj.LineNumber}an`;
        boi.innerHTML += ` ${tramobj.Destination} ankommer om `;
        boi.innerHTML += `${tramobj.DisplayTime} minuter`;
        if(tramobj.Deviations != null)
{
    tramobj.Deviations.forEach(foo=>
    {
        boi.innerHTML += `<br>`;
    })
}
else{boi.innerHTML += `<br>`}
})    
})