const datos = document.forms.mis_datos;
const datosPriv = document.forms.mis_datos_priv;

datos.nombre.value = sesionCord.nombre;
datos.apellido1.value = sesionCord.apellido1;
datos.apellido2.value = sesionCord.apellido2;
datos.fechaNac.value = sesionCord.fechaNac;
datos.correo.value = sesionCord.correo;
datos.telefono.value = sesionCord.telefono;
datos.usuarioPublic.value = sesionCord.usuarioPublico;

datosPriv.usuario.value = sesionCord.usuario