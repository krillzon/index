var uri = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json";

const boi = document.getElementById('clock');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let time = data;

        
        if (time.day_of_week == "1"){
            boi.innerHTML+= `Idag är det dag  (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Måndag!<br><br>`
        } if (time.day_of_week == "2"){
            boi.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Tisdag!<br><br>`
        } if (time.day_of_week == "3"){
            boi.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Onsdag!<br><br>`
        } if (time.day_of_week == "4"){
            boi.innerHTML+= `Idag är det dag ${time.day_of_week}) i vecka (${time.week_number}) vilket är en Torsdag!<br><br>`
        } if (time.day_of_week == "5"){
            boi.innerHTML+= `Idag är det dag ${time.day_of_week}) i vecka (${time.week_number}) vilket är en FREDAG!<br><br>`
        } if (time.day_of_week == "6"){
            boi.innerHTML+= `Idag är det dag ${time.day_of_week}) i vecka (${time.week_number}) vilket är en Lördag!<br><br>`
        } if (time.day_of_week == "7"){
            boi.innerHTML+= `Idag är det dag ${time.day_of_week}) i vecka (${time.week_number}) vilket är en Söndag!<br><br>`
        }

        
        boi.innerHTML += `I ${time.timezone} så är klockan: ${time.datetime.slice(11,25)}<br>`;
        boi.innerHTML += `Datum: ${time.datetime.slice(0,10)} <br>`;
        boi.innerHTML += `Dagar in på året: ${time.day_of_year}<br>`;
    boi.innerHTML += `Dagar kvar tills NYÅR!: ${365 - time.day_of_year}<br>`;
        
            
})    
