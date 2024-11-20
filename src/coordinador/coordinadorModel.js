class cordinadorModel{
    constructor(){
        /*Estos son los unicos obligatorios al asignarle coordinador los demas datos se introducen*/
        this.usuario                      // los usuarios no pueden repetirse por lo que funcionaran como id
        this.clave

        /*Informacion a almacenar*/
        this.fichaje = {};
        this.horario = {};
        this.faltas = {};

        /*Datos Personales */
        this.dni
        this.ubicacion                           //Ubicacion del puesto de trabajo
        this.nombre
        this.apellido1
        this.apellido2
        this.correo
        this.telefono
        this.fechaNac

    }
}