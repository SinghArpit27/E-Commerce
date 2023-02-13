var removeCartItemButtons = document.getElementsByClassName('remove');
console.log(removeCartItemButtons);

for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateCartToatal();
    });
}

function updateCartToatal() {
    var cartItemContainer = document.getElementsByClassName('cart-products')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-product');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('product-price')[0];
        var quantityElement = cartRow.getElementsByClassName('product-quantity-input')[0];
        // console.log(priceElement, quantityElement);
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}