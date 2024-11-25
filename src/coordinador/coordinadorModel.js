class cordinadorModel{
    constructor(){
        this.usuario                        // los usuarios no pueden repetirse por lo que funcionaran como id
        this.clave
        this.usuarioPublico                 // para no facilitar el autentico usuario del coordenidor 
        this.empresa
        this.correo

        /*Informacion a almacenar*/
        this.listaEmpleados = {}

         /*Datos Personales */
         this.dni
         this.nombre
         this.apellido1
         this.apellido2
         this.telefono
         this.fechaNac
    }
}