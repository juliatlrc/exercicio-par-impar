var escolha = prompt("Escolha par ou ímpar");

let sorteio = Math.floor(Math.random() * (100 - 1) + 1);

let tipo = sorteio % 2 == 0 ? 'par' : 'impar';


if (!Number.isNaN(escolha)) {

  if (tipo != escolha) {
    alert("O número sorteado foi: " + sorteio + ", esse número é " + tipo + " portanto, você errou!");
  } else {
    alert("O número sorteado foi: " + sorteio + ", esse número é " + tipo + " portanto, você acertou!!!");
  }
}

