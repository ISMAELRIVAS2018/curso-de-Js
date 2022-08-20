// Variable
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {

    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });
}

// function
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // validacion
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');

        return; // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregada al arreglo de tweet
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar Mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta depues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    },3000);
}

// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0 ) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btbnELiminar = document.createElement('a');
            btbnELiminar.classList.add('borrar-tweet');
            btbnELiminar.innerText = 'x';

            // Añadir la fucion de eliminar
            btbnELiminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            //crear el html
            const li = document.createElement('li');

            // añadir el texto 
            li.innerText = tweet.tweet;

            // Asignar el boton
            li.appendChild(btbnELiminar);

            // insertar en el HTML
            listaTweets.appendChild(li);

        })
    }

    sincronizarStorage();
}

// Agregar lo Tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

// Eliminar un tweets
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}