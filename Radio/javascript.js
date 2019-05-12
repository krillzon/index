



var uri = "https://cors-anywhere.herokuapp.com/http://api.sr.se/v2/playlists/rightnow?format=json&channelid=2576%252page%3d3&page=2";

const doci = document.getElementById('radio');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let copyright = data;
        let info = data.channels[4].playlists.playlist;
        let recordlabel = data.channels[4].playlists.playlist.previoussong;
        let playing = data.channels[4].playlists.playlist;
        let name = data.channels[4];
        //P1
        doci.innerHTML += `COPYRIGHT: ${copyright.copyright}<br><br>`;
        doci.innerHTML += `Kanal: ${name.name}<br> Id: ${name.id}<br>`;

        if (playing.hasOwnProperty("song") == true ) {
               doci.innerHTML += `Spelas just nu : ${playing.song.title}<br><br>`;
        } else doci.innerHTML += `Just nu spelas ingen låt.<br><br>`;

      

        if (info.hasOwnProperty("previoussong")) {
                doci.innerHTML += `Senaste låten som spelades: ${info.previoussong.description}<br>`;
                doci.innerHTML += `Artist: ${info.previoussong.artist}<br>`;
                doci.innerHTML += `Albumnamn: ${info.previoussong.albumname}<br>`;
                if (recordlabel.hasOwnProperty("recordlabel") == true )
                {doci.innerHTML += `Skivbolag: ${info.previoussong.recordlabel}<br><br>`}
                else 
                {doci.innerHTML += `Okänt skivbolag!`;}

        } else {doci.innerHTML += `Kanalen är nere!<br><br>`} 


        doci.innerHTML += `<br><br><br><br>`;
        let info1 = data.channels[5].playlists.playlist;
        let recordlabel1 = data.channels[5].playlists.playlist.previoussong;
        let playing1 = data.channels[5].playlists.playlist;
        let name1 = data.channels[5];

        doci.innerHTML += `Kanal: ${name1.name}<br> Id: ${name1.id}<br>`;
        if (playing1.hasOwnProperty("song") == true ) {
                doci.innerHTML += `Spelas just nu : ${playing1.song.title}<br><br>`
        }else doci.innerHTML += `Just nu spelas ingen låt.<br><br>`;


        if (info1.hasOwnProperty("previoussong") == true ) {
                doci.innerHTML += `Senaste låten som spelades: ${info1.previoussong.description}<br>`;
                doci.innerHTML += `Artist: ${info1.previoussong.artist}<br>`;
                doci.innerHTML += `Albumnamn: ${info1.previoussong.albumname}<br>`;
                if (recordlabel1.hasOwnProperty("recordlabel"))
                {doci.innerHTML += `Skivbolag: ${info1.previoussong.recordlabel}<br><br>`}
                else
                {doci.innerHTML += `Okänt skivbolag!`}
    
        } else { doci.innerHTML += `Kanalen är nere!<br><br>`}



        doci.innerHTML += `<br><br><br><br>`;
        let info2 = data.channels[8].playlists.playlist;
        let recordlabel2 = data.channels[8].playlists.playlist.previoussong;
        let playing2 = data.channels[8].playlists.playlist;
        let name2 = data.channels[8];

        doci.innerHTML += `Kanal: ${name2.name}<br>Id: ${name2.id}<br>`;
        if (playing2.hasOwnProperty("song") == true ) {
                doci.innerHTML += `Spelas just nu" : ${playing2.song.title}<br><br>`
        }else doci.innerHTML += `Just nu spelas ingen låt.<br><br>`;

        if (info2.hasOwnProperty("previoussong") == true ) {
                
                doci.innerHTML += `Senaste låten som spelades: ${info2.previoussong.description}<br>`;
                doci.innerHTML += `Artist: ${info2.previoussong.artist}<br>`;
                doci.innerHTML += `Albumnamn: ${info2.previoussong.albumname}<br>`;
                if (recordlabel2.hasOwnProperty("recordlabel"))
                {doci.innerHTML += `Skivbolag: ${info2.previoussong.recordlabel}<br><br>`}
                else 
                {doci.innerHTML += `Okänt skivbolag!`}
                
        } else { doci.innerHTML += `Kanalen är nere!<br><br>`}

  
})