export const getData = async(url, callback) => {
    /////////////////////////////////
    /////Intanciado el objeto //////
    const xhttp = new XMLHttpRequest();

    /////Datos del tipo de peticion//////
    xhttp.open("GET", url, true);

    /////Envio de la peticion/////
    xhttp.send();

    ////Obteniendo la respuesta
    return xhttp.onreadystatechange = function() {
        ////Validando la respuesta
        if (this.readyState == 4 && this.status == 200) {
            //Guardando data en una variable
            let data = JSON.parse(this.responseText).results;
            callback(data)
        }
    };


}