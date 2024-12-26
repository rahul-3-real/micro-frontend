import { faker } from "@faker-js/faker";

export const mount = (el) => {
  const products = Array.from({ length: 5 }, () =>
    faker.commerce.productName()
  );

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    el.appendChild(li);
  });
};

const devType = process.env.VIEW_TYPE || "external";

if (devType === "internal") {
  const app = document.querySelector("#dev-products");
  mount(app);
}
