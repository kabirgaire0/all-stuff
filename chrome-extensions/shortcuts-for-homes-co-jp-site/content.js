const CarouselController = {
  SELECTORS: {
    carousel: '[data-detail--article-carousel-target="carousel"]',
    nextBtn: '[data-detail--article-carousel-target="nextButton"]',
    prevBtn: '[data-detail--article-carousel-target="prevButton"]'
  },
  
  KEY_MAP: {
    'ArrowRight': 'next',
    'ArrowLeft': 'prev'
  },

  init() {
    this.attachKeyboardListeners();
    this.observeDOM();
  },

  attachKeyboardListeners() {
    document.querySelectorAll(this.SELECTORS.carousel).forEach(carousel => {
      if (carousel._keyboardSetup) return;
      
      const nextBtn = carousel.querySelector(this.SELECTORS.nextBtn);
      const prevBtn = carousel.querySelector(this.SELECTORS.prevBtn);
      
      document.addEventListener('keydown', (e) => {
        this.handleKeyPress(e, nextBtn, prevBtn);
      });
      
      carousel._keyboardSetup = true;
    });
  },

  handleKeyPress(e, nextBtn, prevBtn) {
    const action = this.KEY_MAP[e.key];
    if (!action) return;

    const btn = action === 'next' ? nextBtn : prevBtn;
    if (btn && !btn.disabled) {
      btn.click();
      console.log(`✓ ${action} slide`);
    }
  },

  observeDOM() {
    const observer = new MutationObserver(() => this.attachKeyboardListeners());
    observer.observe(document.body, { childList: true, subtree: true });
  }
};

// Initialize on document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CarouselController.init());
} else {
  CarouselController.init();
}

// Retry for dynamically loaded content
setTimeout(() => CarouselController.attachKeyboardListeners(), 500);
