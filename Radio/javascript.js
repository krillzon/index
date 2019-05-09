



var uri = "https://cors-anywhere.herokuapp.com/http://api.sr.se/v2/playlists/rightnow?format=json&channelid=2576%252page%3d3&page=2";

const doci = document.getElementById('radio');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let copyright = data;
        let info = data.channels[4].playlists.playlist.previoussong;
        let name = data.channels[4];

        doci.innerHTML += `COPYRIGHT: ${copyright.copyright}<br><br>`;
        
        doci.innerHTML += `Kanal: ${name.name}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info.description}<br>`;
        doci.innerHTML += `Artist: ${info.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info.recordlabel}<br>`;

        doci.innerHTML += `<br><br><br><br>`;
        let info1 = data.channels[5].playlists.playlist.previoussong;
        let name1 = data.channels[5];


        doci.innerHTML += `Kanal: ${name1.name}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info1.description}<br>`;
        doci.innerHTML += `Artist: ${info1.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info1.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info1.recordlabel}<br>`;

        doci.innerHTML += `<br><br><br><br>`;
        let info2 = data.channels[9].playlists.playlist.previoussong;
        let name2 = data.channels[9];


        doci.innerHTML += `Kanal: ${name2.name}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info2.description}<br>`;
        doci.innerHTML += `Artist: ${info2.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info2.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info2.recordlabel}<br><br>`;


        let playing1 = data.channels[5].playlists.playlist.song;
        let playing2 = data.channels[9].playlists.playlist.song;

        
        doci.innerHTML += `Spelas just nu på "P2" : ${playing1.title}<br>`; 
        doci.innerHTML += `Spelas just nu på "P2 Språk och Musik" : ${playing2.title}<br>`;
        
   
    
  
})