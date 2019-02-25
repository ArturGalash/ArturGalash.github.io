//add goods to cart
let productsCount = document.getElementById("products-count")
 


 let addToCartButtons = document.querySelectorAll(".add-to-cart")

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		var prevProductsCount = +productsCount.textContent
		productsCount.textContent = prevProductsCount + 1
	})
}

// + - for button
let decrementButton = document.querySelectorAll(".decrement-button")[0]

let incrementButton = document.querySelectorAll(".increment-button")[0]

let quantityInput = document.querySelectorAll(".quantity-input")[0]

var currentCount = +quantityInput.value

if (currentCount <= 1) {
			decrementButton.disabled = true
		}else {
			decrementButton.disabled = false
		}

//function test() {
//	if (nextCount <= 1) {
//			decrementButton.disabled = true
//		}else {
//			decrementButton.disabled = false
//		}
//}

	incrementButton.addEventListener("click", function(){
		var currentCount = +quantityInput.value;
		var nextCount = currentCount + 1;

		quantityInput.value = nextCount;

		if (nextCount <= 1) {
			decrementButton.disabled = true
		}else {
			decrementButton.disabled = false
		}
	})

	decrementButton.addEventListener("click", function(){
		var currentCount = +quantityInput.value;
		var nextCount = currentCount - 1;

		quantityInput.value = nextCount;

		if (nextCount <= 1) {
			decrementButton.disabled = true
		}else {
			decrementButton.disabled = false
		}

	})
//like
