










var uri = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/sodapoppin?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const krippa = document.getElementById('following');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    let channelinfo = data.stream.channel;
    if (info.stream_type == "live"){
       
  krippa.innerHTML += ` CHANNEL NUMBER 1: Sodapoppin. <br>`;
    krippa.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
    krippa.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
    krippa.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
    krippa.innerHTML += ` Channelinfo:<br>`
    krippa.innerHTML += ` Bio: ${channelinfo.status}<br>`;
    krippa.innerHTML += ` Language: ${channelinfo.language}<br>`;
    krippa.innerHTML += ` Total views: ${channelinfo.views}<br>`;
    krippa.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
    krippa.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}<br>`;
    }
    else{krippa.innerHTML += ` CHANNEL NUMBER 1: Sodapoppin, is offline.<br>`;}
})




var url = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/towelliee?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const kripps = document.getElementById('following');


fetch(url)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    let channelinfo = data.stream.channel;
    if (info.stream_type == "live"){
        krippa.innerHTML += ` <br><br><br>`;
        krippa.innerHTML += ` CHANNEL NUMBER 2: Towelliee. <br>`;
        kripps.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        kripps.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
        kripps.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
        kripps.innerHTML += ` Channelinfo:<br>`
        kripps.innerHTML += ` Bio: ${channelinfo.status}<br>`;
        kripps.innerHTML += ` Language: ${channelinfo.language}<br>`;
        kripps.innerHTML += ` Total views: ${channelinfo.views}<br>`;
        kripps.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
        kripps.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}`;
    }
    else{kripps.innerHTML += ` CHANNEL NUMBER 2: Towellie, is offline.<br>`;}
})






var urc = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/scrubnoob?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";

const krippf = document.getElementById('following');


fetch(urc)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    let channelinfo = data.stream.channel;
    if (info.stream_type == "live"){
        krippf.innerHTML += ` <br><br><br>`;
        krippf.innerHTML += ` CHANNEL NUMBER 3: Scrubnoob. <br>`;
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
    else{kripps.innerHTML += ` CHANNEL NUMBER 3: Scrubnoob, is offline.<br>`;}
})