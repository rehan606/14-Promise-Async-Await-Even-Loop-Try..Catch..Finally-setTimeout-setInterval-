
//-------------------------------- Promise --------------------------------

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



//-------------------------------- Async/Await ----------------------------

async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
}

loadData()

// Async/Await Using Arrow Function --

const taskLoader = async() => {
    const response = await fetch('');
    const data = await response.json();
    console.log(data)
}

taskLoader()


//-------------------------------- Try..Catch..Finally --------------------

/*
 TRY: The try statement defines a code block to run ( to try)
 CATCH: The catch statement defines a code block to any error.
 FINALLY: The finally statement defines a code block to run Regurdless of the Result.
*/

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

/*Output: 
        10
        Error Message:ReferenceError: a is not defined
        finally will Execute EveryTime
*/


//-------------------------------- setTimeout and CrearTimeout-------------

/*
 SET TIME OUT: A Time event function used to call another function after 
               certain time period but ececutes the function only once.

 CLEAR TIME OUT: For clearing the timeout function, clearTimeout() is used.
*/

console.log(1)
console.log(2)

setTimeout(() => {
    console.log(4)
}, 1000)

console.log(5)
console.log(6)

//-------------------------------- setInterval and clearInterval ----------

/*
 SetInterval: Same as setTimeout() with a slice difference that the 
              execution ot the function occurs continuously accouding to the
              specified time interval. here the time interval words like a
              gap between the executions.

 ClearInterval: For clearing the timeout function, clearinterval() is used.
*/

let number = 0;
const timerId = setInterval(() => {
    number++

    if(number > 9){
        clearInterval(timerId)
    }
    console.log(number)
},1000)


//-------------------------------- Even Loop ------------------------------

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
//-------------------------------------------------------------------------
//-------------Explore More About Async/Await and Promiseall---------------
//-------------------------------------------------------------------------

//Fetch

function loadUser (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}



//-------------------------------- Promise --------------------------------
//-------------------------------- Promise --------------------------------