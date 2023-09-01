// Define an empty array to hold the cart items
let cart = [];

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through each button and add a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add a product to the cart
function addToCart(event) {
  // Get the product ID and price from the button data attributes
  const productId = event.target.dataset.productId;
  const price = parseFloat(event.target.dataset.price);

  // Check if the product is already in the cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    // If the product is already in the cart, increase its quantity
    existingItem.quantity++;
  } else {
    // If the product is not in the cart, add it as a new item
    const newItem = {
      id: productId,
      price: price,
      quantity: 1
    };
    cart.push(newItem);
  }

  // Update the cart total and display the cart items
  updateCartTotal();
  displayCartItems();
}

// Function to update the cart total
function updateCartTotal() {
  // Get the cart total element
  const cartTotal = document.querySelector('.cart-total');

  // Calculate the total price of all items in the cart
  function calculateCartTotal() {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // Update the cart total element with the new total
  cartTotal.textContent = calculateCartTotal().toFixed(2);
}

// Function to display the cart items on the page
function displayCartItems() {
  // Get the cart items element
  const cartItems = document.querySelector('.cart-items');

  // Clear any existing items from the cart
  cartItems.innerHTML = '';

  // Loop through each item in the cart and create an li element for it
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Product ${item.id}, Quantity: ${item.quantity}, Price: $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

const form = document.querySelector('.TTWForm');

form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values from the form
  const name = document.querySelector('#field1').value;
  const email = document.querySelector('#field5').value;
  const message = document.querySelector('#field4').value;

  // Display a message with the user's name and email
  const alertMessage = `You are signed in as ${name} with email ${email}. Your message is: ${message}`;
  alert(alertMessage);
  
});





