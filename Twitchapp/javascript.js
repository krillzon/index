






var uri = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/sodapoppin?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const krippa = document.getElementById('following');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
   

    if (data.stream != "null"){

        let channelinfo = data.stream.channel; 

        var a = document.createElement('a');
        var braking = document.createElement('br');
        var linkText = document.createTextNode("Enter Sodapoppins channel   ");
        a.appendChild(linkText);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/sodapoppin";
        document.body.appendChild(a);
        document.body.appendChild(braking); 

     krippa.innerHTML += ` CHANNEL: Sodapoppin. <br>`;
    krippa.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
    krippa.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
    krippa.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
    krippa.innerHTML += ` Channelinfo:<br>`
    krippa.innerHTML += ` Bio: ${channelinfo.status}<br>`;
    krippa.innerHTML += ` Language: ${channelinfo.language}<br>`;
    krippa.innerHTML += ` Total views: ${channelinfo.views}<br>`;
    krippa.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
    krippa.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}<br>`;

    } else {krippa.innerHTML += "CHANNEL: Sodapoppin, is offline.<br>";}

})



var url = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/towelliee?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const kripps = document.getElementById('following');


fetch(url)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    
    if (data.stream != "null"){

        let channelinfo = data.stream.channel;

        krippa.innerHTML += ` <br><br><br>`;
        krippa.innerHTML += ` CHANNEL: Towelliee. <br>`;
        kripps.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        kripps.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
        kripps.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
        kripps.innerHTML += ` Channelinfo:<br>`
        kripps.innerHTML += ` Bio: ${channelinfo.status}<br>`;
        kripps.innerHTML += ` Language: ${channelinfo.language}<br>`;
        kripps.innerHTML += ` Total views: ${channelinfo.views}<br>`;
        kripps.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
        kripps.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}<br>`;

        var a = document.createElement('a');
        var braking = document.createElement('br');
        var linkText1 = document.createTextNode("Enter Towelliees channel");
        a.appendChild(linkText1);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/towelliee";
        document.body.appendChild(a);
        document.body.appendChild(braking);

    }
    else{kripps.innerHTML += ` CHANNEL: Towellie, is offline.<br>`;}
})



var urc = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/scrubnoob?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const krippf = document.getElementById('following');


fetch(urc)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    
    if (data.stream != "null"){

        let channelinfo = data.stream.channel;

        var a = document.createElement('a');
        var linkText = document.createTextNode("Enter Scrubnoobs channel   ");
        a.appendChild(linkText);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/scrubnoob";
        document.body.appendChild(a); 

        krippf.innerHTML += ` <br><br><br>`;
        krippf.innerHTML += ` CHANNEL: Scrubnoob. <br>`;
        krippf.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        krippf.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
        krippf.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
        krippf.innerHTML += ` Channelinfo:<br>`
        krippf.innerHTML += ` Bio: ${channelinfo.status}<br>`;
        krippf.innerHTML += ` Language: ${channelinfo.language}<br>`;
        krippf.innerHTML += ` Total views: ${channelinfo.views}<br>`;
        krippf.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
        krippf.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}`;
    }
    else{kripps.innerHTML += ` CHANNEL: Scrubnoob, is offline.<br>`;}
})