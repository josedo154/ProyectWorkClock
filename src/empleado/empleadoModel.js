class Empleado {
    constructor(usuario, clave, correo, dni, ubicacion, nombre, apellido1, apellido2, telefono, fechaNac, coordinador) {
        /* Estos son los únicos obligatorios */
        this.usuario = usuario;                    // ID único
        this.clave = clave;
        this.correo = correo;

        /* Información a almacenar */
        this.fichaje = [];
        this.horario = [];
        this.faltas = [];
        this.coordinador = coordinador;

        /* Datos Personales */
        this.dni = dni;
        this.ubicacion = ubicacion;                // Ubicación del puesto de trabajo
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
    }

    // Método para clonar la instancia
    clone() {
        return new Empleado(
            this.usuario,
            this.clave,
            this.correo,
            this.dni,
            this.ubicacion,
            this.nombre,
            this.apellido1,
            this.apellido2,
            this.telefono,
            this.fechaNac
        );
    }
}