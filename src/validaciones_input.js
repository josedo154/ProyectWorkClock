/*Las funciones validaciones solo debolberan true o false 
para luego en otros script manipular el contenido segun
sea true o false */

function validacionUsuario(user){
    if(typeof(user) == 'string'){
        if(user.length > 7){
            return true;
        }
    }

    return false;
}

function validacionClave(clave){
    const caracteresEspeciales = [
        "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+",
        ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "~",];

    if(typeof(clave) == 'string'){
        if(clave.length > 7){
            for(let caracter of caracteresEspeciales){
                if(clave.includes(caracter)){
                    return true;
                }
            }
        }
    }

    return false;
}

function validacionClaveRepeat(clave, claveRepeat){
    if(validacionClave(clave)){
        if(claveRepeat.equals(clave)){
            return true;
        }
    }

    return false;
}

function validacionEmpresa(empresa){
    return true;
}

function validacionCorreo(correo){
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regexCorreo.test(correo)){
        return true;
    }

    return false;
}