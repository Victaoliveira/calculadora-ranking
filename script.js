const entradaDeDados = require('prompt-sync')()
let novaEntradaDeDados = '1';
let vitorias;
let derrotas;
let saldoVitorias = 0;

function adicionarDados() {
    vitorias = 0;
    derrotas = 0;
    vitorias = parseInt(entradaDeDados('Quantidade de vitorias: '));
    derrotas = parseInt(entradaDeDados('Quantidade de derrotas: '));
}

function calcularSaldo(vitorias, derrotas) {
    return (vitorias - derrotas);
}

function verificarNivel(saldoVitorias) {
    if (saldoVitorias >= 101) {
        return 'Imortal';
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return 'Lendário';
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return 'Diamante';
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return 'Ouro';
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return 'Prata';
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        return 'Bronze';
    } else {
        return 'Ferro';
    }
}

do {
    adicionarDados();
    saldoVitorias = calcularSaldo(vitorias, derrotas);
    let ranking = verificarNivel(saldoVitorias);
    console.log(`O Heroi tem de saldo de ${saldoVitorias} esta no nivel de ${ranking}.`);
    novaEntradaDeDados = entradaDeDados
    ('Gostaria de realizar uma nova verificacao? Se SIM digite 1, se NAO digite 2: ');
} while (novaEntradaDeDados !== '2');