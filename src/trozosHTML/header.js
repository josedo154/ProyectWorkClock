const header = document.querySelector("header");

// The class 0 represents the role type
header.innerHTML = `<h2 class="m-2">WorkClock: </h2> <div class="sesion"></div><nav> </nav>`;

const nav = header.querySelector('nav');
const infoSesion = header.querySelector('.sesion');

if (header.classList.contains('coordinador')) {
    nav.innerHTML += `
        <a href="inicio.html"><i class="bi bi-house"></i> Home</a>
        <a href="misDatos.html"><i class="bi bi-person"></i> Me date</a>
        <a href="listado.html"><i class="bi bi-list-ul"></i> Signing</a>
        <a href="empresa.html"><i class="bi bi-building"></i> Date Cordination</a>
    `;

    infoSesion.textContent = `Coordinador: ${sesionCord.usuario}`;
} else if (header.classList.contains('empleado')) {
    nav.innerHTML += `
        <a href="inicio.html"><i class="bi bi-house"></i> Home</a>
        <a href="misDatos.html"><i class="bi bi-person"></i> Me date</a>
        <a href="fichaje.html"><i class="bi bi-clock"></i> Signing</a>
        <a href="horario.html"><i class="bi bi-calendar-event"></i>Schedule</a>
        <a href="datosCordinador.html"><i class="bi bi-person-badge"></i> Date Cordination</a>
    `;
    infoSesion.textContent = `Empleado: ${sesionEmp.usuario}`;
}

infoSesion.innerHTML += `<br><a href="../../../index.html">Closed sesion</a>`;