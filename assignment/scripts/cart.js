console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull(basket.length)) {
        return false;
    } 
    basket.push(item);
    return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems(basket) {
    for (let i = 0; i < basket.length; i++) {
        return (basket[i]);  
    }
}
console.log(listItems(basket));

function empty(basket) {
    basket.length = 0;  
}

console.log(empty(basket));

//----------------------------------------------------------------
// const maxItems = 5;

function isFull(number) {
    return (number >= maxItems ? true : false);
}
console.log(isFull(2));

function addItem(item) {
    if (isFull(basket.length)) {
        return false;
    } 
    basket.push(item);
    return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding bananas:', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log(isFull(basket));

console.log('Remove oranges: ', removeItem('oranges'))
console.log('Remove bananas: ', removeItem('bananas'))

function removeItem(item) {
    const itemIndex = basket.indexOf(item);
    if (itemIndex === -1) {
        console.log("Not found");
        return null;
    }
    const removedItem = basket.splice(itemIndex, 1);
    return removedItem;
}   