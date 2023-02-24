window.addEventListener('load', function(){

    const buttonRight = document.getElementById('button-right');
    const buttonLeft = document.getElementById('button-left');
    const carrusel = document.getElementById('carrusel');

    const buttonRightSeries = document.getElementById('button-right-series');
    const buttonLeftSeries = document.getElementById('button-left-series');
    const carruselSeries = document.getElementById('carrusel-series');

    buttonRight.addEventListener('click', function(){
        carrusel.scrollLeft += carrusel.offsetWidth;

    })

    buttonLeft.addEventListener('click',()=>{
        carrusel.scrollLeft -= carrusel.offsetWidth;

    })

    buttonRightSeries.addEventListener('click', function(){
        carruselSeries.scrollLeft += carruselSeries.offsetWidth;

    })

    buttonLeftSeries.addEventListener('click',()=>{
        carruselSeries.scrollLeft -= carruselSeries.offsetWidth;

    })

})