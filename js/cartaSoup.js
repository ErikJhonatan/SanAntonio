const btnSoupOpen = document.querySelector('.btn-soup');
const btnSoupClose = document.querySelector('.soup__close');
function toggleSoup() {
    const soup = document.querySelector('.soup');
    soup.classList.toggle('soup_opened');
    window.document.title = 'Caldos | San Antonio';
    const body = document.querySelector("body");
    body.style.overflow="hidden";
}
    btnSoupOpen.addEventListener('click', toggleSoup);
    btnSoupClose.addEventListener('click', toggleSoup);
    btnSoupClose.addEventListener('click', function() {
        const body = document.querySelector("body");
        body.style.overflow="visible";
        });
