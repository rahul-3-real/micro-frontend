import faker from "faker";

const cartCount = `You have ${faker.random.number(100)} items in your cart`;
const cartEl = document.querySelector("#dev-cart");
cartEl.innerHTML = cartCount;
