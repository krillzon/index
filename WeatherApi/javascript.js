var uri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=7a8375b117e125294bdcb5a4ba2bb9d9";

const krippa = document.getElementById('weather');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let name = data;
        let weather = data.weather[0];
        let temp = data.main;
        let wind = data.wind;
    
        if (weather.main == "Rain"){
             krippa.innerHTML += "<img src='https://i.pinimg.com/originals/4e/78/58/4e7858e916e149f38c3d80056fcb2430.gif'><br>";
        }   
        if (weather.main == "Clouds") {
           krippa.innerHTML += "<img src='https://media.giphy.com/media/xT9IgC2RzpbE7vBZ6M/giphy.gif'><br>";
        }
        if (weather.main == "Clear sky") { 
            krippa.innerHTML += "<img src='https://media2.giphy.com/media/qZohEEh4bhuQ8/giphy.gif'><br>";
        }
        
       
        krippa.innerHTML += `In ${name.name} there is ${weather.main}.<br>`;
        krippa.innerHTML += `Description of weather: ${weather.description}.<br>`;
        krippa.innerHTML += `Wind speed: ${wind.speed}m/s<br>`
        
        krippa.innerHTML += `Humidity: ${temp.humidity}%<br>`
        krippa.innerHTML += `Pressure: ${temp.pressure}<br>`
        krippa.innerHTML += `Live Temperature: ${temp.temp}<br>`
        krippa.innerHTML += `(Max temp: ${temp.temp_max}, min temp: ${temp.temp_min})<br>`;

    
    
})



// &appid=7a8375b117e125294bdcb5a4ba2bb9d9