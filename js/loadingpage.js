
window.onload = setTimeout(function loadingPage() {
    const body = document.querySelector("body");
    body.style.overflow="visible";
    const loadingContainer = document.querySelector(".contenedor_loader");
    loadingContainer.style.display="none";
}, 2000);