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

// Бургер-меню
document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger');
  const menu = document.querySelector('.menu');

  if (!burgerButton || !menu) return;

  burgerButton.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    burgerButton.classList.toggle('is-active', isOpen);
    burgerButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Закривати меню при кліку на посилання
  menu.addEventListener('click', function (e) {
    const target = e.target;
    if (target && target.matches('.menu__link')) {
      menu.classList.remove('is-open');
      burgerButton.classList.remove('is-active');
      burgerButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Скидання стану при розширенні екрану понад брейкпоінт
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      menu.classList.remove('is-open');
      burgerButton.classList.remove('is-active');
      burgerButton.setAttribute('aria-expanded', 'false');
    }
  });
});

// Модальне вікно для розгортання картинок новин
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = modal.querySelector('.image-modal__img');
  const closeBtn = modal.querySelector('.image-modal__close');
  const overlay = modal.querySelector('.image-modal__overlay');
  const newsLinks = document.querySelectorAll('.news__link');

  // Функція для відкриття модального вікна
  function openModal(imgSrc, imgAlt) {
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
  }

  // Додаємо обробники подій для всіх посилань новин
  newsLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Запобігаємо переходу за посиланням
      
      const img = this.querySelector('.news__img');
      if (img) {
        openModal(img.src, img.alt);
      }
    });
  });

  // Закриття модального вікна при кліку на хрестик
  closeBtn.addEventListener('click', closeModal);

  // Закриття модального вікна при кліку на overlay
  overlay.addEventListener('click', closeModal);

  // Закриття модального вікна при натисканні Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Закриття модального вікна при кліку на саму картинку (опціонально)
  modalImg.addEventListener('click', function (e) {
    e.stopPropagation(); // Запобігаємо закриттю при кліку на картинку
  });
});