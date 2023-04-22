import ItemGenerator from "./components/itemGenerator.js";
import VendingMachine from "./components/vendingMachine.js";

const itemGenerator = new ItemGenerator();
const vendingMachine = new VendingMachine();

await itemGenerator.setup();
vendingMachine.setup();

setInterval(createSnow, 100);

function createSnow() {
  const snow = document.createElement("i");
  snow.classList.add("fas");
  snow.classList.add("fa-snowflake");
  snow.style.top = "0";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDirection = Math.random() * 3 + 2 + "s";
  snow.style.opacity = Math.random();
  snow.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 5000);
}
