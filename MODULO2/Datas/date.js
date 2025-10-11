const data = new Date();

let dia = data.getDate();
let mes = data.getMonth() + 1;  
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let diaSemana = data.getDay();


switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        break
    case 1:
        diaSemana = 'Segunda-feira';
        break
    case 2:
        diaSemana = 'Terça-feira';
        break
    case 3:
        diaSemana = 'Quarta-feira';
        break
    case 4:
        diaSemana = 'Quinta-feira';
        break
    case 5:
        diaSemana = 'Sexta-feira';
        break
    case 6:
        diaSemana = 'Sábado';
        break
    default:
        diaSemana = 'Dia inválido';
        break
}

console.log(diaSemana);
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full'}));
console.log(data.toLocaleTimeString('pt-BR', { timeStyle: 'short'}));


