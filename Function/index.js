/* ! PERULANGAN DI JAVASCRIPT
? for ,for of ,for in ,foreach
* while & do while
**/

for(let z = 0; z < 10; z++){
   if(z % 2 !== 0)
    console.log('Data ke -',z)
}

let x = 1
while(x <= 10){
    if(x % 2 !== 0){
        console.log('Nilai ke-', x)
    }
    x++
}

let y = 1
do{
    if(y % 2 !== 0){
        console.log('Data ke -', y)
    }
    y++
}while (y <= 10)