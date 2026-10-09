document.querySelector('.menu-toggle')?.addEventListener('click', function () { const nav = document.querySelector('.site-nav'); const open = nav.classList.toggle('open'); this.setAttribute('aria-expanded', open); });
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const responseFrame = document.createElement('iframe');
  responseFrame.name = 'contact-submit-frame';
  responseFrame.hidden = true;
  responseFrame.title = 'Contact form submission';
  contactForm.after(responseFrame);
  contactForm.target = responseFrame.name;

  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.style.color = '#2d6a4f';
  status.style.fontWeight = '700';
  contactForm.append(status);

  const button = contactForm.querySelector('button[type="submit"]');
  const japanese = document.documentElement.lang === 'ja';
  let submitting = false;
  contactForm.addEventListener('submit', () => {
    submitting = true;
    status.textContent = japanese ? 'メッセージを送信しています…' : 'Sending your message…';
    button.disabled = true;
  });
  responseFrame.addEventListener('load', () => {
    if (!submitting) return;
    submitting = false;
    contactForm.reset();
    button.disabled = false;
    status.textContent = japanese ? 'お問い合わせを送信しました。確認メールをお送りしました。' : 'Your inquiry was sent. A confirmation email is on its way.';
  });
}
