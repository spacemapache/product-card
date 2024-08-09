let addBtn = document.getElementById("btn");

addBtn.addEventListener("click", addToCart);

function addToCart() {
  event.preventDefault();
  alert("You've added item to cart!");
}
