import { getData } from '../models/request.js';

export const toShowData = async() => {



    await getData("https://randomuser.me/api/?results=20", ((res) => {
        //declaro una constante con mi contenedor de cards
        const container = document.getElementById("row");

        const card = document.getElementById('container-card');

        //Mapeando datos para obtener nuevo Objecto 
        res.forEach(person => {
            console.log(person);
            //Destructuring
            const { name, cell, email, picture } = person;

            //Creo elementos
            let card = document.createElement("div"); //Tarjeta
            let img = document.createElement("img"); //Imagen
            let titleP = document.createElement("p"); //title
            let firstP = document.createElement("p"); //first
            let lastP = document.createElement("p"); //last

            // Asigno el valor de las etiquetas img y p
            let title = document.createTextNode(name.title);
            let first = document.createTextNode(name.first);
            let last = document.createTextNode(name.last);;

            //Asigno un atributo de tipo clase para darle estilo
            card.setAttribute("class", "card");

            //Asignando texto a etiquetas 
            titleP.appendChild(title);
            firstP.appendChild(first);
            lastP.appendChild(last);

            //Asignando el Padre


            card.appendChild(titleP);
            card.appendChild(firstP);
            card.appendChild(lastP);

            //Mostrar tarjeta en el contenedor especifico



        })

    }));



}