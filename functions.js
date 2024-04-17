import {data} from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const welcome = document.querySelector('.welcome')

    title.style.opacity = '1';
    title.style.marginRight = '0px';

    setTimeout(() => {
        welcome.style.opacity = '1';
    }, 2000)

})

const divForProjects = document.querySelector('.projects');

const projects = Object.entries(data);

const divs = projects.map((project) => {

    console.log(project)

    // DIV contenedor de todo
    const divContainer = document.createElement('DIV');

    divContainer.style.height = '200px';
    divContainer.style.flexBasis = '30%';
    divContainer.style.minWidth = '280px';
    divContainer.style.display = 'flex';
    divContainer.style.alignItems = 'center';
    divContainer.style.justifyContent = 'center';
    divContainer.style.boxSizing = 'border-box';
    divContainer.style.position = 'relative';
    

    // DIV contenedor de la imagen
    const div = document.createElement('DIV');

    div.style.backgroundImage = `url(${project[1].imageUrl})`;
    div.style.backgroundSize = 'cover';
    div.style.width = '90%';
    div.style.backgroundPosition = 'center';
    div.style.color = 'white';
    div.style.height = '90%';
    div.style.borderRadius = '10px';
    
    div.classList.add('divProjectImage');


    // PARRAFO titulo del proyecto
    const parrafo = document.createElement('P')

    parrafo.textContent = project[1].title;
    parrafo.classList.add('parrafoProjectTitle');


    // DIV capa por encima
    const capaPorEncima = document.createElement('DIV');

    capaPorEncima.style.position = 'absolute';
    capaPorEncima.style.zIndex = '5';
    capaPorEncima.style.width = '90%';
    capaPorEncima.style.height = '90%';
    capaPorEncima.style.borderRadius = '10px';
    capaPorEncima.style.opacity = '1';
    capaPorEncima.style.transition = 'height 0.3s, width 0.3s, opacity 0.3s';
    capaPorEncima.classList.add('capaPorEncima');
    

    // Redirigir al usuario al link del proyecto
    capaPorEncima.addEventListener('click', () => {
        window.location.href = project[1].url;
    })

    /////////////////////////////////////////////


    divContainer.appendChild(div);
    divContainer.appendChild(capaPorEncima);
    capaPorEncima.appendChild(parrafo);

    return divContainer;
})

// Agregar los divContainer al DOM en su lugar destinado.
// Estos son los que contienen toda la ficha del proyecto iterado.
divs.forEach(divContainer => divForProjects.appendChild(divContainer));



// Cambiar los estilos de los div capaPorEncima
const arrayDivsCapaPorEncima = document.querySelectorAll('.capaPorEncima');

arrayDivsCapaPorEncima.forEach((div) => {

    div.addEventListener('mouseenter', () => {
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.opacity = '0';

        
    })

    div.addEventListener('mouseleave', () => {
        div.style.width = '90%';
        div.style.height = '90%';
        div.style.opacity = '1';

    })
})




