document.querySelector('.menu-toggle')?.addEventListener('click', function () { const nav = document.querySelector('.site-nav'); const open = nav.classList.toggle('open'); this.setAttribute('aria-expanded', open); });
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
