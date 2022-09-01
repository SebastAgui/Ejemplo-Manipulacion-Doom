const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form')

// funcion siempre que hacemos click va hacer ...y en el html se pone onclick="btnOnClick ()"
// function btnOnClick() {
//     // aca vanis a concatenar os valores de las variables
//     //Para pasar los strings capturados en el input podemos usar las funciones Number() o parseInt(), quedaria:
//     // Number(input1.value) o parseInt(input1.value)
//     const sumaInputs = input1.value + input2.value;
//     // para mostrarlo en el HTML
//     pResult.innerText = "Resultado: " + sumaInputs;
// }
// o podemos escuchar el evento y no poner codigo en el html, le pasamos el nombre del evento que se ejecuta y el segundo el codigo de js a llamar, importante sin los parentesis la funcion ya que el addven le pone al llamar la funcion

// btn.addEventListener('click', btnOnClick)

// si vamos a trabajar con formulario en html es diferente ya que el formulario el ultimo boton lo toma como un summit y recarga la pagina perdiendose el console,log entonces hacemos asi>


form.addEventListener('submit', sumarInputValue);

//para que no se desaparezca por el summit del boton por formulario ponemos parametro event
function sumarInputValue(event) {
    console.log({ event });
    // con el preventDefault hacemos que no se nos recargue la paguina y si podamos ver los resultados.
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;

    pResult.innerText = "Resultado: " + sumaInputs;
}