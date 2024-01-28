/*
*MULTI Level Condition
*/

const price = 10000;

if (price >= 5000) {
    //10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    // console.log(discount);
}
else if (price > 2500) {
    // 5% discount 
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}