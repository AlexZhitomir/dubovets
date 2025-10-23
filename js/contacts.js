// Обробка форми контактів
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = contactForm.querySelector('.form__submit');
  const originalBtnText = submitBtn.innerHTML;

  // Валідація email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Валідація телефону
  function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  }

  // Форматування телефону
  function formatPhone(phone) {
    return phone.replace(/\D/g, '');
  }

  // Показ повідомлення
  function showMessage(message, type = 'success') {
    // Видаляємо попередні повідомлення
    const existingMessage = document.querySelector('.form__message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `form__message form__message--${type}`;
    messageDiv.textContent = message;
    
    // Вставляємо повідомлення перед кнопкою
    contactForm.insertBefore(messageDiv, submitBtn);
    
    // Автоматично приховуємо через 5 секунд
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }

  // Обробка відправки форми
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Отримуємо дані форми
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    // Валідація
    if (!name) {
      showMessage('Будь ласка, введіть ваше ім\'я', 'error');
      return;
    }

    if (!email) {
      showMessage('Будь ласка, введіть ваш email', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showMessage('Будь ласка, введіть коректний email', 'error');
      return;
    }

    if (phone && !validatePhone(phone)) {
      showMessage('Будь ласка, введіть коректний номер телефону', 'error');
      return;
    }

    if (!subject) {
      showMessage('Будь ласка, введіть тему повідомлення', 'error');
      return;
    }

    if (!message) {
      showMessage('Будь ласка, введіть ваше повідомлення', 'error');
      return;
    }

    // Показуємо індикатор завантаження
    submitBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" class="spinner">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
      Відправляємо...
    `;
    submitBtn.disabled = true;

    // Симуляція відправки (тут можна додати реальну логіку відправки)
    setTimeout(() => {
      // Відновлюємо кнопку
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;

      // Показуємо повідомлення про успіх
      showMessage('Дякуємо! Ваше повідомлення успішно відправлено. Ми зв\'яжемося з вами найближчим часом.', 'success');
      
      // Очищаємо форму
      contactForm.reset();
    }, 2000);

    // Тут можна додати реальну відправку на сервер
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone: phone ? formatPhone(phone) : '',
    //     subject,
    //     message
    //   })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   submitBtn.innerHTML = originalBtnText;
    //   submitBtn.disabled = false;
    //   if (data.success) {
    //     showMessage('Дякуємо! Ваше повідомлення успішно відправлено.', 'success');
    //     contactForm.reset();
    //   } else {
    //     showMessage('Помилка при відправці. Спробуйте ще раз.', 'error');
    //   }
    // })
    // .catch(error => {
    //   submitBtn.innerHTML = originalBtnText;
    //   submitBtn.disabled = false;
    //   showMessage('Помилка при відправці. Спробуйте ще раз.', 'error');
    // });
  });

  // Автоматичне форматування телефону
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 0) {
        if (value.startsWith('380')) {
          value = '+380' + value.slice(3);
        } else if (value.startsWith('0')) {
          value = '+380' + value.slice(1);
        } else if (!value.startsWith('+')) {
          value = '+380' + value;
        }
      }
      e.target.value = value;
    });
  }
});

