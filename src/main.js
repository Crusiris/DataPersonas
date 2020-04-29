import { toShowData } from './view/index.js';


const init = () => {
    toShowData()
}

// aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', init);