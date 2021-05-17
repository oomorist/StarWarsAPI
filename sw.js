const getPeopleUrl = id => `http://swapi.dev/api/people/${id}`

const generatePeoplePromises = () => Array(82).fill().map((_, index) => 
    fetch (getPeopleUrl(index + 1)).then(response => response.json()))

const generateHTML = peoples => peoples.reduce((accumulator, {name, id }) => {

    accumulator += `
        <div class="card">
            <h2 class="card">
            <p class=inside-card>${name}</p>
            </h2>
        </div>  
    `
    return accumulator
}, '')

const insertPeoplesIntoPage = peoples => {
    const ul = document.querySelector('[data-js="people-card"]')
    ul.innerHTML = peoples
}

const peoplePromises = generatePeoplePromises()

Promise.all(peoplePromises)
    .then(generateHTML)
    .then(insertPeoplesIntoPage)