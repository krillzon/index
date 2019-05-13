










var uri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=7a8375b117e125294bdcb5a4ba2bb9d9";

const kribbe = document.getElementById('weather');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let name = data;
        let weather = data.weather[0];
        let temp = data.main;
        let wind = data.wind;
    
        if (weather.main == "Rain"){
            kribbe.innerHTML += "<img src='https://i.pinimg.com/originals/4e/78/58/4e7858e916e149f38c3d80056fcb2430.gif'><br>";
        }   
        if (weather.main == "Clouds") {
            kribbe.innerHTML += "<img src='https://media.giphy.com/media/xT9IgC2RzpbE7vBZ6M/giphy.gif'><br>";
        }
        if (weather.main == "Clear") { 
            kribbe.innerHTML += "<img src='https://media2.giphy.com/media/qZohEEh4bhuQ8/giphy.gif'><br>";
        }
        
       
        kribbe.innerHTML += `<b>In ${name.name} it is ${weather.main}.<br>`;
        kribbe.innerHTML += `<b>Description of weather:</b> ${weather.description}.<br>`;
        kribbe.innerHTML += `<b>Wind speed:</b> ${wind.speed}m/s<br>`
        
        kribbe.innerHTML += `<b>Humidity:</b> ${temp.humidity}%<br>`
        kribbe.innerHTML += `<b>Pressure:</b> ${temp.pressure}Pa<br>`
        kribbe.innerHTML += `<b>Live Temperature:</b> ${temp.temp - 273}° <br>`
        kribbe.innerHTML += `(Max temp: ${temp.temp_max - 273}° , min temp: ${temp.temp_min - 273}° )<br>`;

    
    
})



// &appid=7a8375b117e125294bdcb5a4ba2bb9d9