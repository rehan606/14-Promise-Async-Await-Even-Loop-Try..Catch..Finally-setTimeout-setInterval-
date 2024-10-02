//Fetch

function loadUser (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        
        const fetch = document.getElementById('fetch')
        const li = document.createElement('li')
        li.textContent = ` ${data[0].id}, ${data[0].name}`

        fetch.appendChild(li)
    })
    .catch(error => console.log(error))
}

// Async 

async function loadUserAsync () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    const async = document.getElementById('async')
    const li = document.createElement('li')
    li.textContent = ` ${data[1].id}, ${data[1].name}`

    async.appendChild(li)
}

// Async Arrow Function

const loadUserAsyncArrow = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    
    const arrowAsync = document.getElementById('arrow-async')
    const li = document.createElement('li')
    li.textContent = ` ${data[2].id}, ${data[2].name}`

    arrowAsync.appendChild(li)
}

// Async Try Catch
const loadUserCatch = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        
        const tryCatch = document.getElementById('try-catch')
        const li = document.createElement('li')
        li.textContent = ` ${data[3].id}, ${data[3].name}`

        tryCatch.appendChild(li)
    }
    catch(error){

    }
}