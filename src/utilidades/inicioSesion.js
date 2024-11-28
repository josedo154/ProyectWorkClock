const formulario = document.forms[0];

formulario.enviar.addEventListener('click', (e) => {
   if (formulario.classList[0] === "coordinador") {

       for(const user of coordinadores){
            if(user.usuario === formulario.usuario.value){
                if(user.clave === formulario.clave.value){
                    sesion = user.clone();
                    window.location.href = "../html/inicio.html";
                    return true
                }else{
                    return false;
                }
            }
       }
   }else{
       for(const user of empleados){
           if(user.usuario === formulario.usuario.value){
               if(user.clave === formulario.clave.value){
                   console.log("llego al clone");
                   sesion = user.clone();
                   console.log("paso al clone");
                   window.location.href = "../html/inicio.html";
                   return true
               }else{
                   console.log("clave incorecta")
                   return false;
               }
           }

           console.log("no entro el user")
       }
   }

   return false;
});