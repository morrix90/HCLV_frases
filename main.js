const fraseId = document.getElementById("frase-id");
const fraseText = document.getElementById("frase-text");


function obtenerFrase() {
    fetch('./frases.json')
    .then(res => res.json())
    .then(data => {
        let r = Math.random(data.frases.length) * data.frases.length;
        let z = Math.floor(r);
        let cita = data.frases[z];

        fraseId.innerText = `${cita.autor}`;
        fraseText.innerHTML = `"${cita.frase}"`;
    })
}

obtenerFrase()
