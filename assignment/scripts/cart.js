console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];
function addItem(item) {
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
    for (let i = 0; i < basket.length; i++) {
        return (basket = []);  
    }
}
console.log(empty(basket));

//----------------------------------------------------------------
const maxItems = 5;

function isFull(number) {
    return (number >= maxItems ? true : false);
}
console.log(isFull(2));

// function addItem(item) {
    // basket.push(item);
    // function isFull(basket) {
        // if (basket.length <= maxItems) {
          //  return true;
       //  }
        // else {
         //    return false;
       //  }
// }
// }

console.log(`Basket is ${basket}`);
console.log('Adding bananas:', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log(isFull(basket));

// function removeItem(item) {
//     Array.indexOf(item)
//     Array.splice(item)
//     if found {return Array.splice(item);
//     }    
//     else {
//         return null;
//     }
// }