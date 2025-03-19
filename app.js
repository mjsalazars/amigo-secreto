// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración del array donde se almacenarán los nombres de los participantes
let participantes = [];

// Función que agrega un amigo a la lista de participantes
function agregarAmigo() {

    // Obtener el valor ingresado en el input
    let nombre = document.getElementById('amigo').value;

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array de participantes
    participantes.push(nombre);

    // Limpiar el input después de agregar
    document.getElementById('amigo').value = "";

    // Mostrar en consola la lista actualizada (opcional para control)
    console.log(participantes);

    // Llamar a la función para mostrar la lista en la pantalla
    mostrarLista();
}

// Función que muestra en pantalla la lista de amigos agregados
function mostrarLista() {

    // Obtener el elemento donde se mostrará la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista antes de volver a cargarla
    lista.innerHTML = "";

    // Recorrer el array y crear un elemento <li> por cada amigo
    participantes.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función que realiza el sorteo del amigo secreto
function sortearAmigo() {

    // Validar que haya al menos un participante antes de sortear
    if (participantes.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio basado en la cantidad de participantes
    let indiceSorteado = Math.floor(Math.random() * participantes.length);

    // Obtener el nombre del amigo secreto
let amigoSecreto = participantes[indiceSorteado];

// Mostrar en consola el resultado del sorteo (opcional para control)
console.log("El amigo secreto sorteado es: " + amigoSecreto);

// Mostrar el resultado del sorteo en pantalla
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}