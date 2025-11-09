//ARRAY

const frutas = ['Abacate', 'Banana', 'Caqui'];


for(let fruta in frutas){
    console.log(frutas[fruta])
}

//OBJETOS

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Araujo',
    idade: 33
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}
