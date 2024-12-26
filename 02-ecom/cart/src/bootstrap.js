import faker from "faker";

export const mount = (el) => {
  const cartCount = `You have ${faker.random.number(100)} items in your cart`;
  el.innerHTML = cartCount;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}
