const checkbox = document.getElementById('hotdog-checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('hotdog');
});