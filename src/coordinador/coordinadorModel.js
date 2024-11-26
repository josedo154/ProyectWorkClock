class Cordinador {
    constructor(usuario, clave, usuarioPublico, empresa, correo, dni, nombre, apellido1, apellido2, telefono, fechaNac) {
        this.usuario = usuario;                 // ID único
        this.clave = clave;
        this.usuarioPublico = usuarioPublico;
        this.empresa = empresa;
        this.correo = correo;

        /* Información a almacenar */
        this.listaEmpleados = {};

        /* Datos Personales */
        this.dni = dni;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
    }

    clone() {
        return new Cordinador(
            this.usuario,
            this.clave,
            this.usuarioPublico,
            this.empresa,
            this.correo,
            this.dni,
            this.nombre,
            this.apellido1,
            this.apellido2,
            this.telefono,
            this.fechaNac
        );
    }
}