const prompt = require('prompt-sync')();

function rank() {
    let vit, der, elo;
    do {
        vit = Number(prompt("Digite o número de vitórias: "));
        der = Number(prompt("Digite o número de derrotas: "));
        elo = vit - der;
        if (isNaN(elo)) {
            console.log("Por favor, insira valores numéricos válidos.");
        }
    } while (isNaN(elo));
    if (elo < 10) {
        return `O Herói tem saldo de ${elo}. Está no nível de FERRO`;
    } else if (elo >= 11 && elo <= 20) {
        return `O Herói tem saldo de ${elo}. Está no nível de BRONZE`;
    } else if (elo > 21 && elo <= 50) {
        return `O Herói tem saldo de ${elo}. Está no nível de PRATA`;
    } else if (elo >= 51 && elo <= 80) {
        return `O Herói tem saldo de ${elo}. Está no nível de OURO`;
    } else if(elo >= 81 && elo <= 90){
        return `O Herói tem saldo de ${elo}. Está em um nível superior a DIAMANTE`;
    } else if(elo >= 91 && elo <= 100){
        return `O Herói tem saldo de ${elo}. Está em um nível superior a LENDARIO`;
    }else{
        return `O Herói tem saldo de ${elo}. Está em um nível superior a IMORTAL`;
    }
}
console.log(rank())
