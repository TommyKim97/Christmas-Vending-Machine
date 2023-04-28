# Christmas-Vending-Machine

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/101047198/234858618-561a9799-aa8b-482c-8de3-83a72ecfbda6.gif)

## 🎄크리스마스 벤딩머신🎄

### 🔍 프로젝트 소개 | About Project

크리스마스 트리 장식을 구매할 수 있는 벤딩머신입니다.<br/>
사용자가 제품을 하나 구매할 때마다 소원 별을 하나씩 모을 수 있고, 소원 별이 10개 모이면 별 하나당 100원이 기부된다는 컨셉을 기획해 제작했습니다.

<br/>

### 📜 주요 기능 설명 | Description

1. **입금** : 소지한 `내 눈송이` 이하의 금액을 입력하고 `입금` 버튼을 누릅니다.
   - `넣은 눈송이`에 입금한 눈송이가 더해집니다.
2. **선택** : 잔액이 충전되면 크리스마스 트리 오너먼트 버튼을 클릭합니다.
   - 선택한 아이템이 아래 장바구니에 리스트 형태로 담깁니다.
   - 재고가 떨어진 아이템은 sold-out 표시가 되며 선택할 수 없습니다.
   - 충전한 금액만큼 `내 눈송이` 총액이 감소합니다.
3. **구매** : `구매` 버튼을 클릭합니다.
   - 오른쪽 `나의 오너먼트` 영역에 구매한 오너먼트가 리스트 형태로 담깁니다.
   - 구매한 상품의 금액만큼 `넣은 눈송이`가 줄어듭니다.
   - 구매한 상품의 금액이 `총 사용한 눈송이`에 더해집니다.
4. **반환** : `거스름돈 반환` 버튼을 누르면 `넣은 눈송이`에 있던 금액이 `내 눈송이`에 더해집니다.
5. **소원 별** : 구매한 상품의 개수만큼 우측 상단 영역의 소원 별 진행 바가 올라갑니다.

   - 소원 별을 10개 모으면 기부 안내 모달창이 나타납니다.
   - 소원 별 진행바는 다시 초기화됩니다.

    <br/>

### 🛠 사용 기술 | Tech Stack

- `HTML` `CSS`
  - 웹 접근성을 위한 시멘틱 마크업 작업
- `JavaScript`
