// Define global variable for number of items in the cart
let quantity = 0;

// onclick, change value functions
//showQauntity function 
function showQauntityOfCart() {
    console.log(quantity);
}

function addItem() {
    quantity +=1;
    console.log(quantity);
}

function addTwo() {
    quantity +=2;
    console.log(quantity);
}

function addThree() {
    quantity += 3;
    console.log(quantity)
}

function resetCart() {
    quantity = 0;
    console.log("Cart has been emptied");
    console.log(quantity);
}


