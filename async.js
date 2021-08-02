// Week 6 - Day 4: Promises & Async/Await
// Part 1:

function getRandomNumber() {
    let promise = new Promise((resolve, reject) => {
        let result = Math.round(Math.random()*100);
        setTimeout(() => resolve(result), 3000);
    });
    return promise;
   
 }
 
 async function  printRandomNumber() {
    let result = await getRandomNumber();
    console.log(result);
 }

 printRandomNumber();

// Part 2

async function getData(cityName) {
   
    let response = await fetch(`https://geocode.xyz/${cityName}?json=1`);
    console.log(response);
    let user = await response.json();
    console.log(user.latt);  
    console.log(user.longt);
    }
 
let cityName = 'los angeles';
getData(cityName);
