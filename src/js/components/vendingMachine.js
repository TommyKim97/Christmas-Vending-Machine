class VendingMachine {
  constructor() {
    const vMachine = document.querySelector(".vending-machine");
    this.balance = vMachine.querySelector(".text-balance");
    this.itemList = vMachine.querySelector(".list-item");
    this.inputCostEl = vMachine.querySelector(".inp-put");
    this.btnPut = vMachine.querySelector(".btn-put");
    this.btnReturn = vMachine.querySelector(".btn-return");
    this.btnGet = vMachine.querySelector(".btn-purchase");
    this.stagedList = vMachine.querySelector(".list-item-staged");

    const myInfo = document.querySelector(".my-info");
    this.mySnow = myInfo.querySelector(".amount-mysnowflake");
    this.gotList = myInfo.querySelector(".list-item-staged");
    this.txtTotal = myInfo.querySelector(".text-total");
  }
  setup() {
    this.bindEvents();
  }

  //선택한 상품 목록 생성
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
        <button type="button" class="btn-staged">
            <img src="src/images/${target.dataset.img}" alt="${target.dataset.item}" class="img-item">
            <strong class="txt-item">${target.dataset.item}</strong>
            <span class="num-counter">1</span>
        </button>
    `;
    this.stagedList.appendChild(stagedItem);
  }

  bindEvents() {
    /**
     * 1. 입금 버튼 기능
     * 입금액을 입력하고 입력 버튼을 누르면
     * 소지금 = 원래 소지금 - 입금액
     * 잔액 = 기존 잔액 + 입금액
     * 소지금 < 입금액 -> 실행 중단, "소지금이 부족합니다." 경고하기
     * 입금액 인풋창 초기화
     * */

    this.btnPut.addEventListener("click", (event) => {
      const inputCost = parseInt(this.inputCostEl.value);
      const mySnowVal = parseInt(this.mySnow.textContent.replaceAll(",", ""));
      //잔액 (입금액들의 합)
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      if (inputCost) {
        // 입금액이 소지금보다 작다면
        if (inputCost <= mySnowVal && inputCost > 0) {
          this.mySnow.textContent =
            "❄️ " + new Intl.NumberFormat().format(mySnowVal - inputCost);

          this.balance.textContent =
            "❄️ " +
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            );
          console.log("입금 성공");
        } else {
          alert("눈송이가 부족해요!");
          console.log("입금 실패");
        }
        this.inputCostEl.value = null;
      }
    });

    /**
     * 2. 거스름돈 반환 버튼 기능
     * 반환 버튼을 누르면
     * 소지금 = 소지금 + 잔액
     * 잔액 창은 초기화
     */
    this.btnReturn.addEventListener("click", (event) => {
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      const mySnowVal = parseInt(this.mySnow.textContent.replaceAll(",", ""));

      if (balanceVal) {
        this.mySnow.textContent =
          "❄️ " + new Intl.NumberFormat().format(balanceVal + mySnowVal);
        this.balance.textContent = "❄️ ";
      }
    });

    /**
     * 3. 자판기 메뉴 기능
     * 아이템을 누르면
     * 잔액 = 잔액 - 아이템 가격
     * 잔액 < 아이템 가격 -> "눈송이가 부족합니다. 자판기에 눈송이를 넣어주세요!" 경고창이 나타난다.
     * 아이템이 획득 가능 창에 등록된다.
     * 아이템 버튼의 data-count 값이 -1 된다.
     * data-count = 0 -> 부모 li에 sold-out 클래스를 붙인다.
     */
    const btnsItem = this.itemList.querySelectorAll("button");
    btnsItem.forEach((item) => {
      item.addEventListener("click", (event) => {
        const targetEl = event.currentTarget;
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );

        // 선택되었는가?
        let isStaged = false;
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll("li");

        // 입금된 눈송이가 제품 값보다 많거나 같을 경우
        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            "❄️ " + new Intl.NumberFormat().format(balanceVal - targetElPrice);

          for (const item of stagedListItem) {
            if (item.dataset.item === targetEl.dataset.item) {
              item.querySelector(".num-counter").textContent++;
              isStaged = true;
              break;
            }
          }

          // 해당 아이템을 처음 선택한 경우
          if (!isStaged) {
            this.stagedItemGenerator(targetEl);
          }

          targetEl.dataset.count--;

          if (parseInt(targetEl.dataset.count) === 0) {
            targetEl.parentElement.classList.add("sold-out");
            const warning = document.createElement("em");
            warning.textContent =
              "해당 오너먼트는 품절입니다. 내년 겨울에 만나요!";
            warning.classList.add("ir");
            targetEl.parentElement.insertBefore(warning, targetEl);
          }
        } else {
          alert("눈송이가 부족해요! 눈송이를 더 넣어주세요!");
        }
      });
    });
  }
}

export default VendingMachine;
