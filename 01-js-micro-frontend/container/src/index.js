import { mount as productMount } from "http://localhost:3001/index.js";
import { mount as cartMount } from "http://localhost:3002/index.js";

const productContainer = document.querySelector("#product-container");
productMount(productContainer);

const cartContainer = document.querySelector("#cart-container");
cartMount(cartContainer);
