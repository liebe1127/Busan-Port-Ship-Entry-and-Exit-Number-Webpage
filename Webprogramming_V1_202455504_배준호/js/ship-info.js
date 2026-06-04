/**
 * Ship type photos and short descriptions for icon hover popup.
 * Add image files under images/ships/ (see images/ships/README.txt).
 */
const ShipInfo = (function () {
  const PLACEHOLDER =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="140" viewBox="0 0 320 140"><rect fill="#e0f2fe" width="320" height="140"/><path fill="#0284c7" d="M50 95 L160 55 L270 95 L250 105 L70 105 Z"/><text x="160" y="120" text-anchor="middle" font-size="13" fill="#0369a1">image pending</text></svg>'
    );

  const info = {
    "풀 컨테이너선": {
      image: "images/ships/full-container.jpg",
      description:
        "표준 규격 컨테이너를 싣고 컨테이너 전용 선석에 주로 접안하는 대형 화물선입니다.",
    },
    "석유정제품 운반선": {
      image: "images/ships/oil-product.jpg",
      description:
        "휘발유·경유 등 정제 유류를 탱크에 실어 운송하는 유조선의 한 종류입니다.",
    },
    "기타선": {
      image: "images/ships/other.jpg",
      description:
        "주요 선종 분류에 해당하지 않는 특수 목적·소형 선박을 포괄하는 구분입니다.",
    },
    "일반화물선": {
      image: "images/ships/general-cargo.jpg",
      description:
        "건조화물, 잡화, 벌크 화물 등을 홀드나 데크에 싣는 범용 화물선입니다.",
    },
    "여객선": {
      image: "images/ships/passenger.jpg",
      description:
        "승객을 운송하는 선박으로, 국내·국제 여객·크루즈 등에 사용됩니다.",
    },
    "산물선": {
      image: "images/ships/bulk.jpg",
      description:
        "철광석·석탄·곡물 등 산물(벌크) 화물을 대량으로 실어 나르는 화물선입니다.",
    },
    "어선": {
      image: "images/ships/fishing.jpg",
      description:
        "어업·수산물 운송 목적의 선박으로, 연안 및 원양 어선이 포함됩니다.",
    },
    "냉동.냉장선": {
      image: "images/ships/reefer.jpg",
      description:
        "수산물·냉동·냉장 식품을 저온 상태로 운송하는 냉동·냉장 화물선입니다.",
    },
    "케미칼 운반선": {
      image: "images/ships/chemical.jpg",
      description:
        "액체 화학물질을 전용 탱크에 실어 안전 규격에 따라 운송하는 선박입니다.",
    },
    "자동차 운반선": {
      image: "images/ships/car-carrier.jpg",
      description:
        "완성차·중고차를 층별 차량 데크에 실어 운송하는 PCC·PCTC 선박입니다.",
    },
    "시멘트 운반선": {
      image: "images/ships/cement.jpg",
      description:
        "시멘트·분말 화물을 벌크 형태로 운송하는 전용 또는 겸용 화물선입니다.",
    },
    "원유 운반선": {
      image: "images/ships/crude-oil.jpg",
      description:
        "원유를 대형 탱크에 실어 운송하는 대형 유조선(VLCC 등)입니다.",
    },
    "세미 컨테이너선": {
      image: "images/ships/semi-container.jpg",
      description:
        "컨테이너와 일반 화물을 함께 싣는 겸용 컨테이너·다목적 화물선입니다.",
    },
    "LPG.LNG 운반선": {
      image: "images/ships/gas-carrier.jpg",
      description:
        "LPG·LNG 등 가스 연료를 저온·가압 탱크에 실어 운송하는 가스 운반선입니다.",
    },
    "원목 운반선": {
      image: "images/ships/log.jpg",
      description:
        "원목·목재 제품을 데크나 홀드에 실어 운송하는 목재 전용 화물선입니다.",
    },
    "핫코일 운반선": {
      image: "images/ships/hot-coil.jpg",
      description:
        "압연 후 가열 상태의 코일 강재를 전용 홀드·데크로 운송하는 철강 운반선입니다.",
    },
  };

  function get(shipType) {
    const entry = info[shipType];
    if (entry) {
      return {
        title: shipType,
        image: entry.image,
        description: entry.description,
      };
    }
    return {
      title: shipType,
      image: PLACEHOLDER,
      description: "해당 선종에 대한 설명이 준비 중입니다.",
    };
  }

  return { get: get, PLACEHOLDER: PLACEHOLDER };
})();
