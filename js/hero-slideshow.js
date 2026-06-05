/**
 * Home hero: ship photo slideshow with horizontal slide transition.
 */
(function ($) {
  const SHIP_IMAGES = [
    { src: "images/ships/full-container.jpg", alt: "풀 컨테이너선" },
    { src: "images/ships/oil-product.jpg", alt: "석유정제품 운반선" },
    { src: "images/ships/other.jpg", alt: "기타선" },
    { src: "images/ships/general-cargo.jpg", alt: "일반화물선" },
    { src: "images/ships/passenger.jpg", alt: "여객선" },
    { src: "images/ships/bulk.jpg", alt: "산물선" },
    { src: "images/ships/fishing.jpg", alt: "어선" },
    { src: "images/ships/reefer.jpg", alt: "냉동·냉장선" },
    { src: "images/ships/chemical.jpg", alt: "케미칼 운반선" },
    { src: "images/ships/car-carrier.jpg", alt: "자동차 운반선" },
    { src: "images/ships/cement.jpg", alt: "시멘트 운반선" },
    { src: "images/ships/crude-oil.jpg", alt: "원유 운반선" },
    { src: "images/ships/gas-carrier.jpg", alt: "LPG·LNG 운반선" },
  ];

  const INTERVAL_MS = 2700;
  const TRANSITION_MS = 650;

  function preloadImages() {
    SHIP_IMAGES.forEach(function (item) {
      const img = new Image();
      img.src = item.src;
    });
  }

  function initHeroSlideshow() {
    const $slideshow = $(".hero-slideshow");
    if (!$slideshow.length || SHIP_IMAGES.length < 2) return;

    const $slides = $slideshow.find(".hero-slide");
    if ($slides.length < 2) return;

    let currentIndex = 0;
    let activeIsFirst = true;
    let isAnimating = false;

    function advance() {
      if (isAnimating) return;
      isAnimating = true;

      const nextIndex = (currentIndex + 1) % SHIP_IMAGES.length;
      const next = SHIP_IMAGES[nextIndex];
      const $active = activeIsFirst ? $slides.eq(0) : $slides.eq(1);
      const $incoming = activeIsFirst ? $slides.eq(1) : $slides.eq(0);

      $incoming.attr({ src: next.src, alt: next.alt }).removeClass("is-idle").addClass("is-enter");
      void $incoming[0].offsetWidth;

      $active.addClass("is-exit");
      $incoming.removeClass("is-enter").addClass("is-active");

      window.setTimeout(function () {
        $active.removeClass("is-active is-exit").addClass("is-idle");
        currentIndex = nextIndex;
        activeIsFirst = !activeIsFirst;
        isAnimating = false;
      }, TRANSITION_MS);
    }

    preloadImages();
    window.setInterval(advance, INTERVAL_MS);
  }

  $(initHeroSlideshow);
})(jQuery);
