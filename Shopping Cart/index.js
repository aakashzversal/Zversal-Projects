
var productTotalAmount = document.getElementById("product_total_amt");
var shippingCharge = document.getElementById("shipping_charge");
var totalAmount = document.getElementById("total_cart_amt");


const decreaseNumber = (id, itemPrice) => {
    var itemVal = document.getElementById(id);
    var itemPrice = document.getElementById(itemPrice);
    if (itemVal.value <= 0) {
        itemVal.value = 0;
        alert("Negative value NOT allowed");

    }
    else {
        itemVal.value = parseInt(itemVal.value) - 1;
        itemVal.style.background = "#fff";
        itemVal.style.color = '#000';
        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 1000;
        productTotalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) - 1000;
        totalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);

    }
}

const increaseNumber = (id, itemPrice) => {
    var itemVal = document.getElementById(id);
    var itemPrice = document.getElementById(itemPrice);

    if (itemVal.value >= 5) {
        itemVal.value = 5;
        alert("Max 5 allowed");
        itemVal.style.background = "red";
        itemVal.style.color = '#fff';
    }
    else {
        itemVal.value = parseInt(itemVal.value) + 1;
        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 1000;
        productTotalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) + 1000;
        totalAmount.innerHTML = parseInt(productTotalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}