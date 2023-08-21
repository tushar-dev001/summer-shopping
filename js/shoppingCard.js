totalAmount = 0;

function handleBoxClick(data) {
  const selectedItems = document.getElementById("selected-items");
  const applyBtn = document.getElementById("apply-btn");

  const productsName = data.parentNode.children[1].innerText;
  const productsPrice = data.parentNode.children[2].innerText.split(" ")[0];

  const existingProducts = selectedItems.getElementsByTagName("li");
  let isAlreadySelected = false;
  for (let i = 0; i < existingProducts.length; i++) {
    if (existingProducts[i].innerText === productsName) {
      isAlreadySelected = true;
      return;
    }
  }

  if (!isAlreadySelected) {
    const li = document.createElement("li");
    li.innerText = productsName;
    selectedItems.appendChild(li);
    totalAmount = parseFloat(totalAmount) + parseFloat(productsPrice);
    document.getElementById("product-price").innerText = totalAmount;
  } else {
    console.log("Already selected");
  }

  if (totalAmount > 200) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }
}

function handleApply(data) {
  const couponCode = document.getElementById("coupon-code");
  const CouponCodeInput = data.parentNode.children[0];
  const appliedCouponCode = CouponCodeInput.value;

  if (appliedCouponCode === "SELL200") {
    const discountPercentage = 20;
    const discountedAmount = totalAmount * (discountPercentage / 100);
    const discountedTotalAmount = totalAmount * (1 - discountPercentage / 100);

    couponCode.value = "";

    document.getElementById("total-price").innerText =
      discountedTotalAmount.toFixed(2);
    document.getElementById("products-discount").innerText =
      discountedAmount.toFixed(2);
  } else {
    console.log("Coupon is invalid");
  }
}

function goToHomeBtn() {
  const productPrice = document.getElementById("product-price");
  const productsDiscount = document.getElementById("products-discount");
  const totalPrice = document.getElementById("total-price");
  const selectedItems = document.getElementById("selected-items");

  productPrice.innerText = "0.00";
  productsDiscount.innerText = "0.00";
  totalPrice.innerText = "0.00";
  selectedItems.innerText = "";
}
