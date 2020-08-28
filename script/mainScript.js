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
    let Pregunta =  document.createElement("h1")
        Pregunta.setAttribute("id", "pregunta");
        Pregunta.textContent = preguntasBD[0].question;
    
        cabeza.appendChild(titulo);
        cuerpo.appendChild(Pregunta);

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
