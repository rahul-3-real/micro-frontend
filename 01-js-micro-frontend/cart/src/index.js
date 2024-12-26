import { faker } from "@faker-js/faker";

export const mount = (el) => {
  const cart = faker.number.int(100);

  const cartText = document.createElement("div");
  cartText.textContent = `Cart: ${cart}`;
  el.appendChild(cartText);
};

const devType = process.env.VIEW_TYPE || "external";

if (devType === "internal") {
  const app = document.querySelector("#dev-cart");
  mount(app);
}
