/* Array to hold all product objects */
const products = [
	{ name: 'Carrots', price: 2.40, quantity: 0, productId: 1, image: 'https://fruve.co.uk/cdn/shop/products/Peeled_Carrots_750x.jpg?v=1593739755' },
	{ name: 'Apple', price: 1.50, quantity: 0, productId: 2, image: 'https://fruve.co.uk/cdn/shop/products/Pink_Lady_Apples_4fd5221e-a6a0-43f2-a2b7-ab80515b7848_750x.jpg?v=1593739716' },
	{ name: 'Mango', price: 2.50, quantity: 0, productId: 3, image: 'https://fruve.co.uk/cdn/shop/products/Mangoes_750x.jpg?v=1592936059' }
];

/* Empty array to hold cart items */
const cart = [];

/* Helper function to find a product by productId in an array */
function findProductById(array, productId) {
	return array.find(product => product.productId === productId);
}

/* Adds a product to the cart or increases its quantity if already in the cart */
function addProductToCart(productId) {
	const product = findProductById(products, productId);
	if (product) {
		product.quantity += 1;
		if (!cart.includes(product)) {
			cart.push(product);
		}
	}
}

/* Increases quantity of a product in the cart */
function increaseQuantity(productId) {
	const product = findProductById(products, productId);
	if (product) product.quantity += 1;
}

/* Decreases quantity of a product in the cart; removes from cart if quantity is zero */
function decreaseQuantity(productId) {
	const product = findProductById(products, productId);
	if (product) {
		product.quantity -= 1;
		if (product.quantity === 0) removeProductFromCart(productId);
	}
}

/* Removes a product from the cart and resets its quantity to zero */
function removeProductFromCart(productId) {
	const index = cart.findIndex(product => product.productId === productId);
	if (index !== -1) {
		cart[index].quantity = 0;
		cart.splice(index, 1);
	}
}

/* Calculates the total cost of items in the cart */
function cartTotal() {
	return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

/* Empties the cart */
function emptyCart() {
	cart.length = 0;
}

/* Handles payments by calculating remaining balance after payment */
let totalPaid = 0;
function pay(amount) {
	totalPaid += amount;
	return totalPaid - cartTotal();
}

/* Exporting modules for testing */
module.exports = {
	products,
	cart,
	addProductToCart,
	increaseQuantity,
	decreaseQuantity,
	removeProductFromCart,
	cartTotal,
	emptyCart,
	pay,
	findProductById
};
