// Try common Swiper container selectors
const el1 = document.querySelector('.swiper-container');
const el2 = document.querySelector('.swiper');
const el3 = document.querySelector('[class*="swiper"]'); // Contains swiper
const el4 = document.querySelector('.swiper-wrapper').closest('.swiper, [class*="swiper"]');

console.log('el1:', el1);
console.log('el2:', el2); 
console.log('el3:', el3);
console.log('el4:', el4);

const swiper = el1.swiper;
swiper.keyboard.enable();
swiper.params.keyboard.enabled = true;
console.log('Keyboard enabled:', swiper.params.keyboard);
