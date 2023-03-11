//initial value of the counter
let count = 0;

//get all the elements you want to work with
let displayElem = document.getElementById("display");
let incrementButtonElem = document.getElementById("increment");
let decrementButtonElem = document.getElementById("decrement");
let resetButtonElem = document.getElementById("reset");

// creating a function
// this increases the count by 1 
//and assigns the value of count to the display element
const increaseCount = ()=>{
    count++;
    displayElem.innerText =count;
}
//this decreases the count by 1
// and assigns the value of count to the display element
//and decrease count if not equals to zero
const decreaseCount = ()=>{
   if(count !== 0) {
    count--;
   }
    displayElem.innerText=count;
}
//this resets the count to 0
// and assigns the value of count to the display element.
const resetCount = ()=>{
    count =0;
    displayElem.innerText=count;
}
// adding event listener

incrementButtonElem.addEventListener("click", increaseCount);
decrementButtonElem.addEventListener("click", decreaseCount);
resetButtonElem.addEventListener("click", resetCount);
