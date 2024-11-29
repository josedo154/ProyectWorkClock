const datos = document.forms.mis_datos;
const datosFaltas = document.querySelector(".faltas");

datos.nombre.value = sesionEmp.nombre;
datos.apellido1.value = sesionEmp.apellido1;
datos.apellido2.value = sesionEmp.apellido2;
datos.fechaNac.value = sesionEmp.fechaNac;
datos.correo.value = sesionEmp.correo;
datos.telefono.value = sesionEmp.telefono;
datos.usuario.value = sesionEmp.usuario;

for (let falta of sesionEmp.faltas) {
    datosFaltas.innerHTML += `${falta} <br> <hr>`;
}