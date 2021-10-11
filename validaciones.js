var nombre = document.getElementById("dato_nombre_usuario");
var edad = document.getElementById("dato_edad_usuario");
var contrasena = document.getElementById("dato_contrasena");
var error = document.getElementById("error");
error.style.color= 'red';
var mensajesError=[];

function todos(nombre,edad,contrasena){
    validar_nombre_usuario(nombre);
    validar_edad_usuario(edad); 
    validar_contrasena(contrasena);
   
    error.innerHTML=mensajesError.join(' - ');
    if(mensajesError.length == 1){ 
        mensaje.innerHTML="";
    }
	if(mensajesError.length == 0){ 
        mensaje.innerHTML="INGRESO DATOS FINALIZADO";
    } 
    return false;
}

function validar_nombre_usuario(string){
    //validar solo letras A a la Z y espacios, validar que no inicie ni termine con espacios, validar que cada letra despues del espacio sea mayuscula//
    /*const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    }
    const campos = {
        nombre: false,
    }
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;   */  
}

function validar_edad_usuario(edad){    
    var expresionEdad = /^[0-9]/;
    console.log('Enviando formulario....');
    
    if(edad.value=== null || edad.value===''){ 
        mensajesError.push('No Ingresa la edad');
    } 
    else if(!expresionEdad.test(edad.value)){
        mensajesError.push('No ingresa datos validos, solo numeros');
    }
    else if(edad.value<13 || edad.value>110){
        mensajesError.push('Edad incorrecta ');
    }
    
}

function validar_contrasena(string){

    //verifica si tiene caracteres de la A a la Z y del 0 al 9
    var expresion = /^([a-zA-ZñÑ0-9_-]){1,30}$/;
    
    if(contrasena.value=== null || contrasena.value===''){ 
        mensajesError.push('No Ingresa constraseña');
    } 
    else if(!expresion.test(contrasena.value)){
        mensajesError.push('No ingresa datos validos, contraseña');
    }
    
    /*if(expresion.test(string)==true){
        if(string.length<6){
            return false;
        }
        return true;
    
    }else{
        return false;
    }*/
    
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;