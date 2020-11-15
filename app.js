const botonjs = document.querySelector('#chk');
// document.getElementById('boton');
const configUser = window.matchMedia('(prefers-color-scheme: dark)')


const localConfig = localStorage.getItem('tema');


if (localConfig === 'dark') {
    document.body.classList.toggle('dark-theme');

    document.getElementById("i1").classList.toggle("fa-moon");
    document.getElementById("i1").classList.remove("fa-sun");
    document.getElementById("i2").classList.toggle("fa-sun");
    document.getElementById("i2").classList.remove("fa-moon");

} else if (localConfig === 'light') {
    document.body.classList.toggle('light-theme');
    document.getElementById("i1").classList.toggle("fa-sun");
    document.getElementById("i1").classList.remove("fa-moon");
    document.getElementById("i2").classList.toggle("fa-moon");
    document.getElementById("i2").classList.remove("fa-sun");

}









botonjs.addEventListener('change', () => {
    console.log(configUser.matches)
    let colorTema;
    if (configUser.matches) {
        document.body.classList.toggle('light-theme')

        // lalala


        // lalala


        colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')


        colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }

    localStorage.setItem('tema', colorTema)
})