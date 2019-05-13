const uru = 'https://5cd15d84d4a78300147be92e.mockapi.io/isAtTheGym';

  loadData();


  // Tidigare kördes den här delen av koden direkt då vi laddade sidan.
  // Nu ligger den i en funktion, vilket gör att vi kan köra den när vi vill.
  // Efter varje funktion nedan (home, change och delete) så körs den här funktionen för att uppdatera listan
  function loadData() {
    const datadiv = document.getElementById('post');
    datadiv.innerHTML = '';
    fetch(uru)
      .then((resp) => resp.json())
      .then(function (datas) {
        return datas.map(function (data) {
          let divtag = document.createElement('div');

          // Här har vi lagt till tre ytterligare länkar
          divtag.innerHTML = `${data.id} - ${data.name} - ${data.isAtTheGym==true?"På Gymmet":"Inte på gymmet"} <a href="#" onclick="changeFunction(true, ${data.id})">På gymmet igen<br></a> <a href="#" onclick="changeFunction(false, ${data.id})">Inte på gymmet längre<br></a> <a href="#" onclick="deleteFunction(${data.id})">Radera</a>`;
          datadiv.appendChild(divtag);
        })
      });
  }


  // Vi byter namn på den här funktionen, från 'homeFunction' till 'createFunction'
  // Det vi skriver i textrutan hamnar i variabeln 'textInput'

  function createFunction(isAtTheGymNow) {
    const textInput = document.getElementById('name').value;
    var data = { name: textInput, isAtTheGym: isAtTheGymNow }

    fetch(uru,
      {
        // Nytt!
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers:
        {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then(res => console.log(res))
      // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
      // en halv sekund.
    setTimeout(() => {
      loadData();
    }, 1000);
  } 


    // Den här funktionen körs då man klickar på någon av knapparna 'Hemma' och 'Går ut' vid varje namn.
    // Funktionen är nästan identisk med homeFunction, men har ett extra invärde 'id'
    // Istället för POST gör vi istället en PUT.
    // vi lägger till id till den ursprungliga URIn.
    function changeFunction(isAtTheGymNow, id) {
      var data = {isAtTheGym: isAtTheGymNow }

      fetch(uru + "/" + id,
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))

        // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
        // en halv sekund.
      setTimeout(() => {
        loadData();
      }, 500);

    }


  // Den här funktionen körs då man klickar på Radera.
  // Funktionen är nästan identisk med homeFunction, men har ett extra invärde 'id'
  // Istället för POST gör vi istället en DELETE.
  // vi lägger till id till den ursprungliga URIn.

  function deleteFunction(id) {

      // Den här raden behövs inte då vi raderar en post 
    //var data = { name: "Micke", isHome: isHomeNow }

    fetch(uru + "/" + id,
      {
        // Nytt!
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers:
        {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        // Ingen body:...
      }).then(res => res.json())
      .then(res => console.log(res))

  // Eftersom MockAPI har en liten fördröjning så låter vi sidan  
  // uppdateras först efter en halv sekund.
    setTimeout(() => {
      loadData();
    }, 500);
  }