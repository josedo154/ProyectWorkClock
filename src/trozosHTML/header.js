const header = document.querySelector("header");

// La clase 0 es el tipo de rol
header.innerHTML = `<h2 class="m-2">WorkClock: </h2>`;
header.innerHTML += `<nav> </nav>`;

const nav = header.querySelector('nav');

if (header.classList[0] === "coordinador") {
    nav.innerHTML += `
        <a href="#"><i class="bi bi-house"></i> Inicio</a>
        <a href="#"><i class="bi bi-person"></i> Mis datos</a>
        <a href="#"><i class="bi bi-list-ul"></i> Listado</a>
        <a href="#"><i class="bi bi-building"></i> Empresa</a>
    `;
} else if (header.classList[0] === "empleado") {
    nav.innerHTML += `
        <a href="#"><i class="bi bi-house"></i> Inicio</a>
        <a href="#"><i class="bi bi-person"></i> Mis datos</a>
        <a href="#"><i class="bi bi-clock"></i> Fichaje</a>
        <a href="#"><i class="bi bi-calendar-event"></i> Horario</a>
        <a href="#"><i class="bi bi-person-badge"></i> Datos Coordinador</a>
        <a href="#"><i class="bi bi-building"></i> Empresa</a>
    `;
}
