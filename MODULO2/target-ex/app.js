function inputFormulario(){

    const form = document.querySelector('#formulario');

    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        const inputNome = e.target.querySelector('#nome-usuario') //e.target aponta para o elemento que diparou o evento
        console.log(inputNome.value);
    })

}

inputFormulario();