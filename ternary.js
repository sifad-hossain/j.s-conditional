/*
***TERNARY --> three parts
* Condition ? do something when true : do something when false
*/




//*** NORMAL IF-ELSE */
// const age = 10;
// if (age >= 18) {
//     console.log('you can vote');
// } else {
//     console.log('Ghumao tahko');
// }



//** SIMPLE TERNARY */
// const age = 27;

// age >= 18 ? console.log('Vote dio') : console.log('Ghumai thako');






let price = 500;
const isLeader =true;

if (isLeader === true) {
    price = 0;
} else {
    price = price + 100;
}
// console.log(price);


price = isLeader === true ? 0 : price + 100;

//** Optaional advanced*/
// semi advanced

if(isLeader === true){
    if(price > 1000) {
        price = price /2;
    }
    else {
        price = 0;
    }   
}
else {
    price = price + 1000;
} 

//**    Fell free to ignore this one */
price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ?
                 price > 1000 ? 
                        price /2 : 0
            : price + 1000;