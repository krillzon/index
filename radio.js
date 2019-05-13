



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
        doci.innerHTML += `<h1>RADIOSTATION</h1><br><br>`;
        doci.innerHTML += `COPYRIGHT: ${copyright.copyright}<br><br>`;
        doci.innerHTML += `<h1>Kanal: ${name.name}</h1><br> <b>Id:</b> ${name.id}<br>`;

        if (playing.hasOwnProperty("song") == true ) {
               doci.innerHTML += `<b>Spelas just nu:</b> ${playing.song.title}<br><br>`;
        } else doci.innerHTML += `<b>Just nu spelas ingen låt</b>.<br><br>`;

      

        if (info.hasOwnProperty("previoussong")) {
                doci.innerHTML += `<b>Senaste låten som spelades:</b> ${info.previoussong.description}<br>`;
                doci.innerHTML += `<b>Artist:</b> ${info.previoussong.artist}<br>`;
                doci.innerHTML += `<b>Albumnamn:</b> ${info.previoussong.albumname}<br>`;
                if (recordlabel.hasOwnProperty("recordlabel") == true )
                {doci.innerHTML += `<b>Skivbolag:</b> ${info.previoussong.recordlabel}<br><br>`}
                else 
                {doci.innerHTML += `<b>Okänt skivbolag!</b>`;}

        } else {doci.innerHTML += `<b>Kanalen är nere!</b><br><br>`} 


        doci.innerHTML += `<br><br><br><br>`;
        let info1 = data.channels[5].playlists.playlist;
        let recordlabel1 = data.channels[5].playlists.playlist.previoussong;
        let playing1 = data.channels[5].playlists.playlist;
        let name1 = data.channels[5];

        doci.innerHTML += `<h1>Kanal: ${name1.name}</h1><br> <b>Id:</b> ${name1.id}<br>`;
        if (playing1.hasOwnProperty("song") == true ) {
                doci.innerHTML += `<b>Spelas just nu :</b> ${playing1.song.title}<br><br>`
        }else doci.innerHTML += `<b>Just nu spelas ingen låt.</b><br><br>`;


        if (info1.hasOwnProperty("previoussong") == true ) {
                doci.innerHTML += `<b>Senaste låten som spelades:</b> ${info1.previoussong.description}<br>`;
                doci.innerHTML += `<b>Artist:</b> ${info1.previoussong.artist}<br>`;
                doci.innerHTML += `<b>Albumnamn:</b> ${info1.previoussong.albumname}<br>`;
                if (recordlabel1.hasOwnProperty("recordlabel"))
                {doci.innerHTML += `<b>Skivbolag:</b> ${info1.previoussong.recordlabel}<br><br>`}
                else
                {doci.innerHTML += `<b>Okänt skivbolag!</b>`}
    
        } else { doci.innerHTML += `<b>Kanalen är nere!</b><br><br>`}



        doci.innerHTML += `<br><br><br><br>`;
        let info2 = data.channels[8].playlists.playlist;
        let recordlabel2 = data.channels[8].playlists.playlist.previoussong;
        let playing2 = data.channels[8].playlists.playlist;
        let name2 = data.channels[8];

        doci.innerHTML += `<h1>Kanal: ${name2.name}</h1><br> <b>Id:</b> ${name2.id}<br>`;
        if (playing2.hasOwnProperty("song") == true ) {
                doci.innerHTML += `<b>Spelas just nu" :</b> ${playing2.song.title}<br><br>`
        }else doci.innerHTML += `<b>Just nu spelas ingen låt.</b><br><br>`;

        if (info2.hasOwnProperty("previoussong") == true ) {
                
                doci.innerHTML += `<b>Senaste låten som spelades:</b> ${info2.previoussong.description}<br>`;
                doci.innerHTML += `<b>Artist:</b> ${info2.previoussong.artist}<br>`;
                doci.innerHTML += `<b>Albumnamn:</b> ${info2.previoussong.albumname}<br>`;
                if (recordlabel2.hasOwnProperty("recordlabel"))
                {doci.innerHTML += `<b>Skivbolag:</b> ${info2.previoussong.recordlabel}<br><br>`}
                else 
                {doci.innerHTML += `<b>Okänt skivbolag!</b>`}
                
        } else { doci.innerHTML += `<b>Kanalen är nere!</b><br><br>`}

  
})