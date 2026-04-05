const checkbox = document.getElementById('hotdog-checkbox');
const hero = document.getElementById('top');
const highlight = document.querySelector('.highlight');
const cards = document.querySelectorAll('.card');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('hotdog');
    hero.classList.toggle('hotdog');
    highlight.classList.toggle('hotdog');

    cards.forEach(card => {
        card.classList.toggle('hotdog');
    });
});
