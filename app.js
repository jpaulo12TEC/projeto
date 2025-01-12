let junioot = 8




let numeroSecreto = parseInt(4);
let chute;
let tentativas = 1

alert('Bem vindo ao jogo do número Secreto!!');

while (chute != numeroSecreto){
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));

    if(chute == numeroSecreto){
     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
            if (chute > numeroSecreto) {
                alert(`o número secreto é beeeeeeeeeeeeeeeeM menor que ${chute}`);
        } else {
                alert(`o número secreto é BEEEEEEEEEM maior que ${chute}`);
    }

    tentativa++;
}
} 

