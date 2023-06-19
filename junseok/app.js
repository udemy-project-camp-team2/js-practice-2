const buttons = document.querySelectorAll(".basket__button");
const total = document.getElementById("total");
const lists = document.querySelectorAll(".basket__list");

buttons.forEach((btn) => {
  btn.addEventListener("click", addProduct);
});

function addProduct(e) {
  e.stopPropagation();
  // const name = e.target.previousElementSibling.previousElementSibling.innerText;
  // const price = e.target.previousElementSibling.innerText;
  const parent = e.target.parentElement;
  const data = {
    name: parent.children[0].innerText,
    price: parent.children[1].innerText,
  };

  const li = document.createElement("li");
  li.innerHTML = `${data.name} - ${data.price}`;
  li.classList.add("basket__list");
  document.getElementById("ul").append(li);
  // getTotalAmount(data.price.slice(-5, -1));
}

// let amount = [];

// function getTotalAmount(price) {
//   amount.push(Number(price));
//   const total = amount.reduce((a, c) => a + c, 0);
//   document.getElementById("total").innerText = `총합 : ${total} 원`;
// }

// lists.forEach((list) => {
//   const price = list.children[1].innerText.slice(-5, -1);
//   getTotalAmount(price);
// });
