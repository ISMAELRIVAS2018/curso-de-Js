const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click',  () => {
    Notification
    .requestPermission()
    .then( resultado => {
        console.log('El resultado es ', resultado);
    })

});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
       const notificacion = new Notification('Esta es la notificacion', {
            icon: '../img/ccj.png',
            body: 'codigo con juan, aprende con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open ('https://www.google.com.sv/')
        }
    }
});