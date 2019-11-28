
function incrementCart()
{
    let my_span =document.getElementById("club-counter");
    let value = Number(my_span.innerHTML);
    my_span.innerHTML = value + 1;
    console.log(value);
}


  <p>Cart Value:<span id="club-counter">0</span></p>
    <button onclick="incrementCart()">Add an item to cart</button>

