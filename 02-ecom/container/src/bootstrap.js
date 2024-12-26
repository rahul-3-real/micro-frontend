import { mount as ProductMount } from "products/ProductIndex";
import { mount as CartMount } from "cart/CartIndex";

const productContainer = document.querySelector("#product-container");
ProductMount(productContainer);

const cartContainer = document.querySelector("#cart-container");
CartMount(cartContainer);
