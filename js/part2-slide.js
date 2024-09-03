var swiper = new Swiper('.part3_img_display.swiper-container', {
    slidesPerView: 3,  /* 동시에 보여줄 슬라이드 개수 */
    centeredSlides: true,
    loop: true,  /* 루프 모드 활성화 */
    spaceBetween: -150, /* 슬라이드 간격을 음수로 설정해 겹치도록 */
    slideToClickedSlide: true,
    loopedSlides: 3, /* 슬라이드 복제 수를 슬라이드 개수와 맞추기 */
    on: {
        init: function () {
            // 첫 화면에서 중앙 슬라이드만 확대 및 나머지 슬라이드는 축소
            const activeSlide = this.slides[this.activeIndex];
            activeSlide.querySelector('img').style.filter = 'none';
            activeSlide.querySelector('img').style.transform = 'scale(1) translateY(0)';
        },
        slideChange: function () {
            this.slides.forEach((slide) => {
                slide.querySelector('img').style.filter = 'blur(5px)';
                slide.querySelector('img').style.transform = 'scale(0.6) translateY(30px)';
            });
            const activeSlide = this.slides[this.activeIndex];
            activeSlide.querySelector('img').style.filter = 'none';
            activeSlide.querySelector('img').style.transform = 'scale(1) translateY(0)';
        }
    }
});