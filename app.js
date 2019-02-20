let productsCount = document.getElementById("products-count")
 


 let addToCartButtons = document.querySelectorAll(".add-to-cart")

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		var prevProductsCount = +productsCount.textContent
		productsCount.textContent = prevProductsCount + 1
	})
}