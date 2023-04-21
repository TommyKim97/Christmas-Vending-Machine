class ItemGenerator {
  constructor() {
    this.itemList = document.querySelector(".list-item");
  }

  async setup() {
    await this.loadData((json) => {
      this.itemFactory(json);
    });
  }

  async loadData(callback) {
    const response = await fetch("src/js/item.json");

    if (response.ok) {
      callback(await response.json());
    } else {
      alert("통신 에러" + response.status);
    }
  }

  itemFactory(data) {
    const docFrag = document.createDocumentFragment();

    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.stock}" data-price="${el.price}" data-img="${el.img}">
                <div class="img-wrapper">
                    <img src="src/images/${el.img}" alt=
                    ${el.name}" class="img-item" height="72">
                </div>
                <strong class="tit-item">${el.name}</strong>
                <span class="text-price">❄️ ${el.price}</span>
            </button>
        `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });
    this.itemList.appendChild(docFrag);
  }
}

export default ItemGenerator;
