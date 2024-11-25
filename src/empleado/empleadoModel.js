class empleadoModel{
    constructor(){
        /*Estos son los unicos obligatorios*/
        this.usuario                      // los usuarios no pueden repetirse por lo que funcionaran como id
        this.clave
        this.correo

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
        this.telefono
        this.fechaNac
    }
}