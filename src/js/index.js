import ItemGenerator from "./components/itemGenerator.js";
import VendingMachine from "./components/vendingMachine.js";

const itemGenerator = new ItemGenerator();
const vendingMachine = new VendingMachine();

await itemGenerator.setup();
vendingMachine.setup();
