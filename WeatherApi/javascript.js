var uri = "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

const krippa = document.getElementById('weather');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let veder = data.weather;
    
        return veder.map(function(weatherobj)
    {
        krippa.innerHTML += `Just nu är det: ${weatherobj.main}<br>`;
        krippa.innerHTML += `I luften är det: ${weatherobj.description}<br>`;
})  
})