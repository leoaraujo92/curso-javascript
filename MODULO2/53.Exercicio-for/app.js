const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'p', texto: 'Frase 2'},
    {tag:'p', texto: 'Frase 3'},
    {tag:'p', texto: 'Frase 4'}
];



const section = document.querySelector('#container') 
const criaElemento = document.createElement('div')


for(let i = 0; i < elementos.length; i++){
    
    let {tag, texto} = elementos[i];

    let elementoCriado = document.createElement(tag)
    elementoCriado.innerHTML = texto
    elementoCriado.className = 'element'
    criaElemento.appendChild(elementoCriado)

}

section.appendChild(criaElemento)