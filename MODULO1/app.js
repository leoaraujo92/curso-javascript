function funcaoInicial(){
    const dadosDoFormulario = document.querySelector(".formulario");
    const pessoas = [];
    
    function enviandoDadosDoFormulario(evento){

        evento.preventDefault()
        const nome = dadosDoFormulario.querySelector('.nome').value
        const sobrenome = dadosDoFormulario.querySelector('.sobrenome').value
        const peso = dadosDoFormulario.querySelector('.peso').value
        const altura = dadosDoFormulario.querySelector('.altura').value

        

        const objeto = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }; 

        pessoas.push(objeto)
        console.log(pessoas)
        
    }

    dadosDoFormulario.addEventListener('submit', enviandoDadosDoFormulario)
    
}

funcaoInicial()