



var uri = "https://cors-anywhere.herokuapp.com/http://api.sr.se/v2/playlists/rightnow?format=json&channelid=2576%252page%3d3&page=2";

const doci = document.getElementById('radio');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let copyright = data;
        let info = data.channels[4].playlists.playlist.previoussong;
        //let playing = data.channels[4].playlists.playlist.song;
        let name = data.channels[4];

        doci.innerHTML += `COPYRIGHT: ${copyright.copyright}<br><br>`;
        //doci.innerHTML += `Spelas just nu!: ${playing.title}<br>`;
        doci.innerHTML += `Kanal: ${name.name}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info.description}<br>`;
        doci.innerHTML += `Artist: ${info.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info.recordlabel}<br>`;

        doci.innerHTML += `<br><br><br><br>`;
        let info1 = data.channels[5].playlists.playlist.previoussong;
        let playing1 = data.channels[5].playlists.playlist.song;
        let name1 = data.channels[5];

        doci.innerHTML += `Kanal: ${name1.name}<br>`;
        doci.innerHTML += `Spelas just nu!: ${playing1.title}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info1.description}<br>`;
        doci.innerHTML += `Artist: ${info1.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info1.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info1.recordlabel}<br>`;
     

        doci.innerHTML += `<br><br><br><br>`;
        let info2 = data.channels[9].playlists.playlist.previoussong;
        let playing2 = data.channels[9].playlists.playlist.song;
        let name2 = data.channels[9];

        doci.innerHTML += `Kanal: ${name2.name}<br>`;
        doci.innerHTML += `Spelas just nu!: ${playing2.title}<br>`;
        doci.innerHTML += `Senaste låten som spelades: ${info2.description}<br>`;
        doci.innerHTML += `Artist: ${info2.artist}<br>`;
        doci.innerHTML += `Albumnamn: ${info2.albumname}<br>`;
        doci.innerHTML += `Skivbolag: ${info2.recordlabel}<br>`;
    
    
  
})