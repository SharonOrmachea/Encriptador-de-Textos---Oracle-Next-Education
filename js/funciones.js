function encriptar(){
    let ingresoUsuarioTec = document.getElementById("ingresoUsuario").value;
    let ingresoUsuario = ingresoUsuarioTec.toLowerCase();
    let resultado = "";
    if(ingresoUsuario !== ""){
        for(let i = 0; i < ingresoUsuario.length; i++){
            if(ingresoUsuario[i] !== "a" && ingresoUsuario[i] !== "e" && ingresoUsuario[i] !== "i" && ingresoUsuario[i] !== "o" && ingresoUsuario[i] !== "u"){
                resultado+=ingresoUsuario[i];
            }else{
                if(ingresoUsuario[i] == "a"){
                    resultado+="ai"
                }else{
                    if(ingresoUsuario[i] == "e"){
                        resultado+="enter"
                    }else{
                        if(ingresoUsuario[i] == "i"){
                            resultado+="imes"
                        }else{
                            if(ingresoUsuario[i] == "o"){
                                resultado+="ober"
                            }else{
                                if(ingresoUsuario[i] == "u" ){
                                    resultado+="ufat"
                                }
                            }
                        }
                    }
                }
            }
        }
        var aux = document.getElementById("imagenMichi");
        document.getElementById("miku-Michi").style.display = "none";
        document.getElementById("copy").style.display = "show";
        document.getElementById("copy").style.display = "inherit";
        document.getElementById("resultado").innerHTML = resultado;
        console.log(resultado);
    }
    
    
    //return resultado;
    
}

function desencriptar(){
    let ingresoUsuario = document.getElementById("ingresoUsuario").value;
    let resultado = "";
    if(ingresoUsuario !== ""){
        for(let i = 0; i < ingresoUsuario.length; i++){
            if(ingresoUsuario[i] !== "a" && ingresoUsuario[i] !== "e" && ingresoUsuario[i] !== "i" && ingresoUsuario[i] !== "o" && ingresoUsuario[i] !== "u"){
                resultado+=ingresoUsuario[i];
            }else{
                if(ingresoUsuario[i] == "a"){
                    resultado+="a";
                    i+=1;
                }else{
                    if(ingresoUsuario[i] == "e"){
                        resultado+="e";
                        i+=4;
                    }else{
                        if(ingresoUsuario[i] == "i"){
                            resultado+="i";
                            i+=3;
                        }else{
                            if(ingresoUsuario[i] == "o"){
                                resultado+="o";
                                i+=3;
                            }else{
                                if(ingresoUsuario[i] == "u"){
                                    resultado+="u";
                                    i+=3;
                                }      
                            }                      
                        }
                    }
                } 
            }
        }
        document.getElementById("miku-Michi").style.display = "none";
        document.getElementById("copy").style.display = "show";
        document.getElementById("copy").style.display = "inherit";
        document.getElementById("resultado").innerHTML = resultado;
    }
    
    //return resultado;
    //console.log(resultado);
}

function copiar() {
    var aux = document.createElement("input");
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById("resultado").innerHTML);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    document.execCommand("copy");
    // Elimina el campo de la página
    document.body.removeChild(aux);
}

function actualizacionTexto(){
    let ingresoUsuario = document.getElementById("ingresoUsuario").value;
    if(ingresoUsuario == ""){
        document.getElementById("miku-Michi").style.display = "block";
        document.getElementById("copy").style.display = "none";
        document.getElementById("resultado").innerHTML = "";
    }
}

