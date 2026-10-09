document.querySelector('.menu-toggle')?.addEventListener('click', function () { const nav = document.querySelector('.site-nav'); const open = nav.classList.toggle('open'); this.setAttribute('aria-expanded', open); });
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
if (new URLSearchParams(window.location.search).get('sent') === '1') {
  const success = document.querySelector('.form-success');
  if (success) success.hidden = false;
}
