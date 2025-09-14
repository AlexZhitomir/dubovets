const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}

// Слайдер новин
const newsSlider = document.querySelector('.news__track');
const newsItems = document.querySelectorAll('.news__item');
const prevBtn = document.querySelector('.news__btn--prev');
const nextBtn = document.querySelector('.news__btn--next');

let currentIndex = 0;
const itemsToShow = 3; // кількість елементів, які показуються одночасно
const itemWidth = 330; // ширина елемента + gap (300px + 30px)

function updateSlider() {
  const translateX = -currentIndex * itemWidth;
  newsSlider.style.transform = `translateX(${translateX}px)`;
  
  // Блокуємо кнопки на початку та в кінці
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= newsItems.length - itemsToShow;
}

function nextSlide() {
  if (currentIndex < newsItems.length - itemsToShow) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Додаємо обробники подій
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
}

// Ініціалізуємо слайдер
if (newsSlider) {
  updateSlider();
}

// Адаптивність для слайдера
function handleResize() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth <= 480) {
    // На мобільних показуємо 1 елемент
    const newItemsToShow = 1;
    const newItemWidth = 230; // 200px + 30px gap
    const translateX = -currentIndex * newItemWidth;
    newsSlider.style.transform = `translateX(${translateX}px)`;
    nextBtn.disabled = currentIndex >= newsItems.length - newItemsToShow;
  } else if (screenWidth <= 768) {
    // На планшетах показуємо 2 елементи
    const newItemsToShow = 2;
    const newItemWidth = 280; // 250px + 30px gap
    const translateX = -currentIndex * newItemWidth;
    newsSlider.style.transform = `translateX(${translateX}px)`;
    nextBtn.disabled = currentIndex >= newsItems.length - newItemsToShow;
  } else {
    // На десктопі показуємо 3 елементи
    updateSlider();
  }
}

// Додаємо обробник зміни розміру вікна
window.addEventListener('resize', handleResize);

// Ініціалізуємо при завантаженні
window.addEventListener('load', handleResize);

// Слайдери документів
function initDocumentsSliders() {
  const documentSliders = document.querySelectorAll('.documents__slider');
  
  documentSliders.forEach(slider => {
    const track = slider.querySelector('.documents__track');
    const items = slider.querySelectorAll('.documents__item');
    const prevBtn = slider.querySelector('.documents__btn--prev');
    const nextBtn = slider.querySelector('.documents__btn--next');
    
    let currentIndex = 0;
    const itemsToShow = 3; // кількість елементів, які показуються одночасно
    const itemWidth = 330; // ширина елемента + gap (300px + 30px)
    
    function updateSlider() {
      const translateX = -currentIndex * itemWidth;
      track.style.transform = `translateX(${translateX}px)`;
      
      // Блокуємо кнопки на початку та в кінці
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= items.length - itemsToShow;
    }
    
    function nextSlide() {
      if (currentIndex < items.length - itemsToShow) {
        currentIndex++;
        updateSlider();
      }
    }
    
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }
    
    // Додаємо обробники подій
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }
    
    // Ініціалізуємо слайдер
    updateSlider();
  });
}

// Ініціалізуємо слайдери документів при завантаженні
document.addEventListener('DOMContentLoaded', initDocumentsSliders);