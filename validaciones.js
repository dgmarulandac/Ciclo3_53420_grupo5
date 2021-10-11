function validar_nombre_usuario(string){
    //validar solo letras A a la Z y espacios, validar que no inicie ni termine con espacios, validar que cada letra despues del espacio sea mayuscula//
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    }
    const campos = {
        nombre: false,
    }
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;  
    
function validar_edad_usuario(edad){

}

function validar_contrasena(string){

    //verifica si tiene caracteres de la A a la Z y del 0 al 9
    var expresion = /^([a-zA-ZñÑ0-9_-]){1,30}$/;
    if(expresion.test(string)==true){
        if(string.length<6){
            return false;
        }
        return true;
    
    }else{
        return false;
    }
    
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;