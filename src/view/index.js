import { getData } from '../models/request.js';

export const toShowData = async() => {



    await getData("https://randomuser.me/api/?results=20", ((res) => {
        //declaro una constante con mi contenedor de cards
        const container = document.getElementById("container-card");

        //Mapeando datos para obtener nuevo Objecto 

        container.innerHTML = res.map(person => {
            //Destructuring
            const { name, cell, email, picture } = person;

            return `<div class="card">
                <div class="containerImg">  <img src="${picture.large}"> </div>
                <div class="containerInfo">
                    <p>${name.title} ${name.first} ${name.last}</p>
                    <p>${cell}</p>
                    <p>${email}</p>
                </div>      
            </div>`
        }).join('');

    }));



}