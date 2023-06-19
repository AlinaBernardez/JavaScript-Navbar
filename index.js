//Selector para todos los links de la página.
const linked = document.querySelectorAll('a');

//Creamos elemento Span que será el que cambie el fondo del elemento seleccionado.
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// //Función que creará highlight.
// function highlightLink () {
//     const linkCoords = this.getBoundingClientRect();
//     console.log(linkCoords);
// }

//Event listener para cada link, que dispare funciones.
linked.forEach(link => {
    link.addEventListener('mouseenter', e => {
        e.preventDefault();
        const linkCoords = link.getBoundingClientRect();
        
        const coords =  {
            height: linkCoords.height,
            width: linkCoords.width,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        }

        //Alto y ancho dinámico según coordenadas:
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    })
})