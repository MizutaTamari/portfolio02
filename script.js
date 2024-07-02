const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true, //アクティブなスライドを中央に表示
  slidesPerView: 3.75, //スライダーのコンテナ上に5枚同時に表示
  spaceBetween: 16, //スライド間の距離を16pxに
  speed: 600 //スライドの推移時間を600msに
 ,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});