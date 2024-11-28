const header = document.querySelector("header");

// La clase 0 es el tipo de rol
header.innerHTML = `<h2 class="m-2">WorkClock: </h2> <div class="sesion"></div><nav> </nav>`;

const nav = header.querySelector('nav');
const infoSesion = header.querySelector('.sesion');

if (header.classList.contains('coordinador')) {
    nav.innerHTML += `
        <a href="inicio.html"><i class="bi bi-house"></i> Inicio</a>
        <a href="misDatos.html"><i class="bi bi-person"></i> Mis datos</a>
        <a href="listado.html"><i class="bi bi-list-ul"></i> Listado</a>
        <a href="empresa.html"><i class="bi bi-building"></i> Empresa</a>
    `;

    infoSesion.textContent = `Coordinador: ${sesionCord.usuario}`;
} else if (header.classList.contains('empleado')) {
    nav.innerHTML += `
        <a href="inicio.html"><i class="bi bi-house"></i> Inicio</a>
        <a href="misDatos.html"><i class="bi bi-person"></i> Mis datos</a>
        <a href="fichaje.html.html"><i class="bi bi-clock"></i> Fichaje</a>
        <a href="horario.html"><i class="bi bi-calendar-event"></i> Horario</a>
        <a href="datosCordinador.html"><i class="bi bi-person-badge"></i> Datos Coordinador</a>
        <a href="empresa.html"><i class="bi bi-building"></i> Empresa</a>
    `;
    infoSesion.textContent = `Empleado: ${sesionEmp.usuario}`;
}
