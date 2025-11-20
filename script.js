//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

let nome = ["Senhor Incrível", "Aquaman", "Peter Parker", "Viúva Negra"]
let vitorias = [90, 33, 70, 200]
let derrotas = [2, 14, 16, 7]
let nivel = 0

for(let i = 0; i < 4; i++) {
  let saldoHeroi = saldo(vitorias[i], derrotas[i])
  let nivelHeroi = rank(saldoHeroi)

  console.log(`O heroi/heroina ${nome[i]} tem ${vitorias[i]} vitórias e ${derrotas[i]} derrotas. Portanto, seu saldo é de ${saldoHeroi} e seu nível é ${nivelHeroi}.`)
  
}

function saldo(vitoria, derrota) {
  let resultado = vitoria - derrota
  return resultado
}

function rank(resultado) {

  if(resultado <= 10) {
    nivel = "Ferro"
    return nivel
  } else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze"
    return nivel
  } else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata"
    return nivel
  } else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro"
    return nivel
  } else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante"
    return nivel
  } else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário"
    return nivel
  } else {
    nivel = "Imortal"
    return nivel
  }
}