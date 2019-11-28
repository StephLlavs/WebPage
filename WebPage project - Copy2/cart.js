let cart = {}
let total = 0

let feedback = document.getElementById('feedback')

let initCartItem = (shoeId) => {
  cart[shoeId] = {}
  cart[shoeId].quantity = 0
  cart[shoeId].price = 0
}

let incrementCart = (shoeId) => {
  // Create cart entry if not there
  if (shoeId in cart === false) {
    initCartItem(shoeId);
  }

  // Increment entry
  cart[shoeId].quantity += 1
  cart[shoeId].price = 200
  console.log(cart)

  total = 0
  for (let shoe in cart){
    total += cart[shoe].quantity*cart[shoe].price
  }
  
  alert(`Added ${cart[shoeId].quantity} ${shoeId}, Price $${cart[shoeId].price}`)
  feedback.innerText = `Total: $${total}`
}



let button = document.getElementById("shoe1")
// Get shoes
let shoes = document.getElementsByClassName("resp")
console.log(shoes)
// Add onclick listeners to them
for (let shoe of shoes) {
  shoe.onclick = () => {
    incrementCart(shoe.id)
  }
}

