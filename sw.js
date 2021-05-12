
var starWarsFilmList = document.querySelector('.films');

fetch('https://swapi.dev/api/people/') 
.then(function(response) {   
  return response.json(); 
})

.then(function(json) {
  let films = json.results;
 

  for(f of films) {
    let listItem = document.createElement('div');
    listItem.className = 'card'; 
    listItem.innerHTML = '<p class="inside-card">' + f.name + '</p>'; 
    starWarsFilmList.appendChild(listItem);
  }

});  
/* SCRIPT FUNCIONAL
var starWarsFilmList = document.querySelector('.films');

fetch('https://swapi.dev/api/people/') 
.then(function(response) {   
  return response.json(); 
})

.then(function(json) {
  let films = json.results;
 

  for(f of films) {
    let listItem = document.createElement('div');
    listItem.className = 'card'; 
    listItem.innerHTML = '<p class="inside-card">' + f.name + '</p>'; 
    starWarsFilmList.appendChild(listItem);
  }

});

*/


