const corazones = document.querySelector(".corazones");

setInterval(() => {
    const corazon = document.createElement("span");
    corazon.innerHTML = "❤️";
    corazon.style.position = "absolute";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.bottom = "-20px";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";
    corazon.style.animation = "subir 6s linear forwards";

    corazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}, 600);

const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
