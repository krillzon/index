var uri = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json";

const boi = document.getElementById('clock');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let klocka = data.timezone;
    
        return klocka.map(function(klockobj)
    {
        boi.innerHTML += `Klockan e ${klockobj.datetime}`;         
            
})    
})