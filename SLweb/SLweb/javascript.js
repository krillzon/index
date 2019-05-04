var uri = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=b0c3cced0bba45c58222712c148b6cf2&siteid=4122&timewindow=10";


const info = document.getElementById('buses');

fetch(uri)
.then((resp)=>resp.json())
.then(function(data)
{
        let linje = data.ResponseData.Buses;
        return linje.map(function(busobj)
    {
        info.innerHTML += `${busobj.LineNumber} an mot `;
        info.innerHTML += `${busobj.Destination} kommer om `;
        info.innerHTML += `${busobj.DisplayTime} `;
        if(busobj.Deviations != null)
{
    busobj.Deviations.forEach(foo=>
    {
        const bar = document.createElement('strong');
        bar.textContent = foo.Text;
        info.appendChild(bar);
        info.innerHTML += `<br>`;
    })
}
else
{
    info.innerHTML += `<br>`
}
})    
})