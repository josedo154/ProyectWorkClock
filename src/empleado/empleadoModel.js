class empleadoModel{
    constructor(){
        this.usuario                        // los usuarios no pueden repetirse por lo que funcionaran como id
        this.clave
        this.usuarioPublico                 // no obligatorio pero no pueden hacerles peticiones sin eso 

        /*Informacion a almacenar*/
        this.listaEmpleados = {}

         /*Datos Personales */
         this.dni
         this.nombre
         this.apellido1
         this.apellido2
         this.correo
         this.telefono
         this.fechaNac
    }
}