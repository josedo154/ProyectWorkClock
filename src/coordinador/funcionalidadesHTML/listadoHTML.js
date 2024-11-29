const listaEmpleados = document.querySelector("table tbody");

for(const empleado of sesionCord.listaEmpleados){
    const fila = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = empleado.nombre;
    fila.appendChild(tdNombre);

    const tdApellidos = document.createElement("td");
    tdApellidos.textContent = empleado.apellido1+", "+empleado.apellido2;
    fila.appendChild(tdApellidos);

    const tdCorreo = document.createElement("td");
    tdCorreo.textContent = empleado.correo;
    fila.appendChild(tdCorreo);

    const tdDni = document.createElement("td");
    tdDni.textContent = empleado.dni;
    fila.appendChild(tdDni);

    const tdTelfono = document.createElement("td");
    tdTelfono.textContent = empleado.telefono;
    fila.appendChild(tdTelfono);

    const tdFechaNac = document.createElement("td");
    tdFechaNac.textContent = empleado.fechaNac;
    fila.appendChild(tdFechaNac);

    const botones = document.createElement("td");
    botones.innerHTML = `
        <button class="btn btn-primary btn-sm verDetalles" title="Ver detalles">
                <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-danger btn-sm borrar" title="Eliminar">
                <i class="fas fa-trash"></i>
            </button>
    `;
    fila.appendChild(botones);

    listaEmpleados.appendChild(fila);
}

listaEmpleados.addEventListener("click", e => {
    if (e.target.classList.contains("verDetalle")) {
        window.location.href = `../html/listadoVerDetalles.html`;
    }
});