const evento = document.getElementById('send')
const enviarFormulario = () => {

        let numero = document.getElementById('numero').value;

        var win = window.open(`https://www.google.com/search?q=${numero}`, '_blank');
}
evento.addEventListener('click', enviarFormulario)

//Qr
function modal_1() {
        Swal.fire({
                html: '<div class="caja-you">'+
                '<img class = "img-you" src="you.png" alt="">' +
                '<a href="https://www.youtube.com/" target="_blank"><button class="boton-y">youtube</button></a>'+
                '<a href="https://music.youtube.com/" target="_blank"><button class="boton-y">music youtube</button></a>'+
                '<a href="https://www.youtube.com/playlist?list=PLCRkbT9eOX_Lh_3NDStL0pllNfOtU-zD_" target="_blank"><button class="boton-y">Pleylist</button></a>'+
                '</div>',
        
       
                //tamaño
                imageWidth: 100,
                imageHeight: 100,
                //cerrar,
                showCloseButton: true,
                showConfirmButton: false,
                background: '#313138',

        })
}
//Qr
function modal_11() {
        Swal.fire({
                html: '<div>' +
                        '<img class = "img-qr" src="qr-code .png" alt="">' +
                        '</div>' +
                        '<div class="pasaword">' +
                        '</div>',
                //tamaño
                imageWidth: 100,
                imageHeight: 100,
                //cerrar,
                showCloseButton: true,
                showConfirmButton: false,
                background: '#313138',

        })
}

const bitly = document.getElementById('bitly')
bitly.addEventListener('click', event => {
        if (navigator.share) {
                //drive
                navigator.share({
                        text: 'Please read this great article: ',
                        url: 'https://bit.ly/lhu99'
                }).then(() => {
                        console.log('Thanks for sharing!');
                })
                        .catch((err) => console.error(err));
        } else {

                alert("The current browser does not support the share function. Please, manually share the link")
        }
});

function copy(copyId) {
        let inputElement = document.createElement("input");
        inputElement.type = "text";
        let copyText = document.getElementById(copyId).innerHTML;
        inputElement.value = copyText;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);

        document.getElementById("alert").style.display = "block";
        setTimeout(function () {
                document.getElementById("alert").style.display = "none";
        }, 3000);
}