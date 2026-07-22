const menuToggle = document.getElementById('menuToggle')
const menu = document.getElementById('menu')

menuToggle.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto')
    menuToggle.setAttribute('aria-expanded', aberto)
    menuToggle.textContent = aberto ? '✕' : '☰'
})