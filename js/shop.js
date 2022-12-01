// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 /* // Exercise 1
 function buy(id) {
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 
     for(i = 0; i < products.length; i++) {
         if (products[i].id === id) {
             cartList.push(products[i])
         }
     }
 
 
 } */
 /* document.getElementById("count_product").innerHTML = Number(cartList.length) */
 
 
 
 // Exercise 2
 function cleanCart() {
 
     cart = []
     document.getElementById("count_product").innerHTML = Number(cart.length)
     printCart()
 
 }
 
 
 // Exercise 3
 let totalDiscounts = 0
 let subtotal = 0;
 let total = 0;
 function calculateTotal() {
     // Calculate total price of the cart using the "cartList" array
 
 
         subtotal = cart.reduce((acumulador, valorActual) =>
         acumulador + valorActual.subtotal, 0)
         
 
         totalDiscounts = cart.reduce((acumulador, valorActual) =>
         acumulador + valorActual.discount, 0)
 
         total = subtotal - totalDiscounts
 
 }
 
 
 // Exercise 4
 // function generateCart() {
     // Using the "cartlist" array that contains all the items in the shopping cart, 
     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
 
    /*  cartList.forEach((element) => {
         if(!cart.includes(element)) {
             element.quantity = 1
             cart.push(element)
         } else if (cart.includes(element)) {
             element.quantity ++
         }
     }
     ) 
     cleanCart()
 
 
    for(i = 0; i < cartList.length; i++) { 
        if (cartList[i] !== cart[i]) {
            cart.push(cartList[i])
        }
    
    } */
 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"
     
     for(i = 0; i < cart.length; i++) {
         if (cart[i].name === 'cooking oil' && cart[i].quantity >= cart[i].offer.number) {
             cart[i].subtotal = cart[i].quantity * cart[i].price
             cart[i].subtotalWithDiscount = cart[i].subtotal - (cart[i].offer.percent / 100 * cart[i].subtotal)
             cart[i].discount = cart[i].subtotal - cart[i].subtotalWithDiscount
         } else if (cart[i].name === 'cooking oil' && cart[i].quantity < cart[i].offer.number) {
             cart[i].subtotal = cart[i].quantity * cart[i].price
             cart[i].discount = 0
             cart[i].subtotalWithDiscount = 0
         } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= cart[i].offer.number) {
             cart[i].subtotal = cart[i].quantity * cart[i].price
             cart[i].subtotalWithDiscount = cart[i].subtotal - (cart[i].offer.percent / 100 * cart[i].subtotal)
             cart[i].discount = cart[i].subtotal - cart[i].subtotalWithDiscount
         } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity < cart[i].offer.number) {
             cart[i].subtotal = cart[i].quantity * cart[i].price
             cart[i].discount = 0
             cart[i].subtotalWithDiscount = 0
         } else {
             cart[i].subtotal = cart[i].quantity * cart[i].price
             cart[i].discount = 0
         }
     }
 
 }
 
 // Exercise 6
 function printCart() {
     // Fill the shopping cart modal manipulating the shopping cart dom
     /* generateCart() */
     applyPromotionsCart()
     calculateTotal()
 
     let table = ''
 
     for(i = 0; i < cart.length; i++) {
         table+='<tr>';
         table+='<th>'+cart[i].name+'</th>';
         table+='<td>'+cart[i].price+'</td>';
         table+='<td>'+cart[i].quantity+'</td>';
         if (cart[i].subtotalWithDiscount) {
             table+='<td>'+cart[i].subtotalWithDiscount+'</td>';  
         } else {
             table+='<td>'+cart[i].subtotal+'</td>'
         }
     }
 
     document.getElementById("cart_list").innerHTML = table
     document.getElementById("total_price").innerHTML = total
 }
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
     // Refactor previous code in order to simplify it 
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    //Find the clicked product in the products array to get the item

    let foundProduct = products.find((product) => product.id == id);

    //Find the index of the product in the cart array
    let productIndex = cart.findIndex((product) => product.id == id);

    //Check if the product doesn't exist and add it to the cart
    if (productIndex === -1) {
        foundProduct.quantity = 1;
        cart.push(foundProduct);
    } else {
    //If the product exists, update its quantity
        cart[productIndex].quantity++;
    }

    document.getElementById("count_product").innerHTML = Number(cart.length)
    applyPromotionsCart()
 
 }
 
 // Exercise 8
 function removeFromCart(id) {
    // Loop for the cart array
     for(i = 0; i < cart.length; i++) {
         // If the clicked product exists in the cart, remove it by 1 in quantity
         if (cart[i].id === id && cart.includes(cart[i])) {
             cart[i].quantity --
         } 
 
         // If the clicked product quantity becomes 0, remove it from the array
         if (cart[i].id === id && cart[i].quantity === 0) {
             cart.splice(i, 1)
             document.getElementById("count_product").innerHTML = Number(cart.length)
         }
 
         // If the cart array becomes empty, clean it
         if (cart === 0) {
             cleanCart()
         }
         
     }
     
     applyPromotionsCart()
     
 }
 
 function open_modal(){
     console.log("Open Modal");
     printCart();
 }