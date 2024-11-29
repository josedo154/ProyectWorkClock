let coordinador;
const datos = document.forms.datos_coordinador;

for(let cord of coordinadores){
    if(sesionEmp.coordinador === cord.usuario){
        coordinador = cord;
    }
}

datos.nombre.value = coordinador.nombre;
datos.apellido1.value = coordinador.apellido1;
datos.apellido2.value = coordinador.apellido2;
datos.fechaNac.value = coordinador.fechaNac;
datos.correo.value = coordinador.correo;
datos.telefono.value = coordinador.telefono;