<h2 align="center"> Promise, Async/Await, Try..Catch..Finally, setTimeout and CrearTimeout, setInterval and clearInterval and Even Loop</h2>



## Promise :
``` JS
    const myLoder = () => {
        return new Promise((resolve, reject) => {
            const success = 50;
            if(success >= 40){
                resolve(success)
            }
            else{
                reject(success)
            }
        })
    }
    myLoder()
    .then(data => console.log('Resolved', data))
    .catch(error => console.log('Error', error))

```


## Async/Await :

``` JS
    async function loadData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)
    }

    loadData()

```

##  Async/Await Using Arrow Function :
``` JS
    const taskLoader = async() => {
        const response = await fetch('');
        const data = await response.json();
        console.log(data)
    }

    taskLoader()

```

## Try..Catch..Finally :

**TRY**: The try statement defines a code block to run ( to try)

**CATCH**: The catch statement defines a code block to any error.

**FINALLY**: The finally statement defines a code block to run Regurdless of the Result.


``` JS 
    const n = 100 , d = 10;

    try{
        console.log(n/d)
        console.log(a);
    }
    catch(error){
        console.log('Error Message:' + error);
    }
    finally{
        console.log('finally will Execute EveryTime')
    }

```

## Output: 
```js
        10
        Error Message:ReferenceError: a is not defined
        Finally will Execute EveryTime
```

## SetTimeout and CrearTimeout :

**SET TIME OUT**: A Time event function used to call another function after 
               certain time period but ececutes the function only once.

**CLEAR TIME OUT**: For clearing the timeout function, clearTimeout() is used.

``` JS

    console.log(1)
    console.log(2)

    setTimeout(() => {
        console.log(4)
    }, 1000)

    console.log(5)
    console.log(6)

```

## SetInterval and clearInterval :

**SetInterval**: Same as setTimeout() with a slice difference that the 
              execution ot the function occurs continuously accouding to the
              specified time interval. here the time interval words like a
              gap between the executions.

**ClearInterval**: For clearing the timeout function, clearinterval() is used.


``` JS

    let number = 0;
    const timerId = setInterval(() => {
        number++

        if(number > 9){
            clearInterval(timerId)
        }
        console.log(number)
    },1000)
```

## Even Loop :
``` JS
    function a(){
        console.log('a')
        b();
        console.log('aa')
    }

    function b(){
        console.log('b')
        c();
        console.log('bb')
    }

    function c(){
        console.log('c')
        console.log('cc')
    }
```



<h2 align="center">-------------*Explore More About Async/Await and Promiseall*---------------</h2>

## Fetch :
```js
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
```

## Async :
```js 
    async function loadUserAsync () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();

        const async = document.getElementById('async')
        const li = document.createElement('li')
        li.textContent = ` ${data[1].id}, ${data[1].name}`

        async.appendChild(li)
    }
```


## Async Arrow Function :

```js
    const loadUserAsyncArrow = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        
        const arrowAsync = document.getElementById('arrow-async')
        const li = document.createElement('li')
        li.textContent = ` ${data[2].id}, ${data[2].name}`

        arrowAsync.appendChild(li)
    }
```

## Async Try Catch :

```js
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
```
