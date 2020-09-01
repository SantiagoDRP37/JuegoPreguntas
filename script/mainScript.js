const apiPreguntas = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

 function pregunta (){
    const preguntas = fetch (apiPreguntas)
        .then((res)=>{
            return res.json();
        })
        .then((results)=>{
            let preguntas = results.results;
            iniciarJuego(preguntas);
        })
        .catch(error=>{
            return error;
        });   
};

let preguntasBD = [];
let respuestas = [];
function iniciarJuego(preguntas){
    preguntasBD = preguntas;
    dibujarPreguntas()
}
function dibujarPreguntas(){
    const cabeza = document.getElementById("tituloConte");
    const cuerpo = document.getElementById("cuerpo")

    let titulo = document.createElement("h1")
        titulo.setAttribute("id", "titulo");
        titulo.textContent = preguntasBD[0].category;
    let Pregunta =  document.createElement("h2")
        Pregunta.setAttribute("id", "pregunta");
        Pregunta.textContent = preguntasBD[0].question;
    let botonTrue = document.createElement("button")
        botonTrue.setAttribute("id", "botonTrue");
        botonTrue.innerHTML = "True"
    let botonFalse = document.createElement("button")
    botonFalse.setAttribute("id", "botonFalse");
    botonFalse.innerHTML = "False"

        cabeza.appendChild(titulo);
        cuerpo.appendChild(Pregunta);
        cuerpo.appendChild(botonTrue);
        cuerpo.appendChild(botonFalse);
        eventosRespuesta()
    
}
function eventosRespuesta(){
    let eventoVerdad = document.getElementById("botonTrue");
    eventoVerdad.addEventListener('click',()=>{
        respuestas.push("True");
        
        cambiarPregunta()
    });
    let eventoFalso = document.getElementById("botonFalse");
    eventoFalso.addEventListener('click',()=>{
        respuestas.push("False");
        cambiarPregunta()
    });
}
let i = 0;
function cambiarPregunta(){
    i = i+ 1;
    if(respuestas.length <10){
        
        console.log("i = "+i);
        const pregunta = document.getElementById("pregunta");
        pregunta.textContent = preguntasBD[i].question;
    }
    

}
function ocultarElementos(elementoEle){
    let elemento = document.getElementsByTagName(elementoEle);
    for (let index = 0; index < elemento.length; index++) {
        elemento[index].style.cssText = 'display: none;';
        
    }
}
///////////////////////////////////--eventos--//////////////////////////////////////////
const comenzarBoton = document.getElementById("botonComenzar");
comenzarBoton.addEventListener('click',()=>{
   pregunta();
   ocultarElementos('h2');
   ocultarElementos('h1'); 
});
