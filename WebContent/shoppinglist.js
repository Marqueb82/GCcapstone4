var shoppingItem = [
    {storeItem:"Shoes", price: 79.99},
    {storeItem:"Jacket", price: 159.99},
    {storeItem:"Shirt", price: 59.99},
    {storeItem:"Jeans", price: 45.99},
    {storeItem:"Sweater", price: 64.99},
    {storeItem:"Hat", price: 19.99},
    {storeItem:"Snow Boots", price: 124.99},
    {storeItem:"Fleece Hoody", price: 65.50}
];

var shoppingCart = [];


function myCart(index) {
    shoppingCart.push(shoppingItem[index]);
    shoppingItem[index].quantity++;
    console.log(shoppingCart);
    alert("Added item to cart");
}


function checkOut(){
	var totalPrice = 0;
	var salesTax = 0;
	var total = 0;;
	var t,st;
	for (var i = 0; i < shoppingCart.length; i++) {
		var item = document.createElement("h2");
 		item.innerText = shoppingCart[i].storeItem + " $" + shoppingCart[i].price;
 		document.body.appendChild(item);
		totalPrice += shoppingCart[i].price;
		salesTax = totalPrice * 0.06;
		st = salesTax.toFixed(2);
		total = totalPrice + salesTax;
		t = total.toFixed(2);
	}
	var displayTotal = document.createElement("h2");
	var displayTax = document.createElement("h2");
	var displayBill = document.createElement("h2");
	displayTotal.innerText = "Total Price: $"+ totalPrice;
	document.body.appendChild(displayTotal);
	displayTax.innerText = "Total Sales Tax: $"+ st;
	document.body.appendChild(displayTax);
	displayBill.innerText = "Total Bill: $"+ (t);
	document.body.appendChild(displayBill);
	
}

