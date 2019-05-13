
var uri = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json";

const documin = document.getElementById('klocka');



fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let time = data;

    
         if (time.day_of_week == "1"){
            documin.innerHTML+= `Idag är det dag  (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Måndag!<br><br>`
        } if (time.day_of_week == "2"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Tisdag!<br><br>`
        } if (time.day_of_week == "3"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Onsdag!<br><br>`
        } if (time.day_of_week == "4"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Torsdag!<br><br>`
        } if (time.day_of_week == "5"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en FREDAG!<br><br>`
        } if (time.day_of_week == "6"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Lördag!<br><br>`
        } if (time.day_of_week == "0"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Söndag!<br><br>`
        }

        /*
        setTimeout(function() {
            location.reload();
          }, 1000)
*/

documin.innerHTML += `I ${time.timezone} så är klockan: <h1>${time.datetime.slice(11,19)}</h1><br>`;
documin.innerHTML += `<b>Datum:</b> ${time.datetime.slice(0,10)} <br>`;
documin.innerHTML += `<b>Dagar in på året:</b> ${time.day_of_year}<br>`;
documin.innerHTML += `<b>Dagar kvar tills NYÅR!:</b> ${365 - time.day_of_year}<br>`;
        
            
})    
