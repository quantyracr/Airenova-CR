const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalIncludes = document.getElementById('modalIncludes');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    modalImg.src = item.dataset.img;
    modalImg.alt = item.dataset.title;
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.description;
    modalIncludes.textContent = item.dataset.includes;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
