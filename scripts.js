var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0
var tentativasMax = 5

while(chute != numeroSecreto & tentativas < tentativasMax){
    var chute = prompt('Digite um numero de 0 a 10, você tem 5 tentativas')
    tentativas++
    if(chute == numeroSecreto){
        alert('Isso ai, você descobriu o numero secreto! Você precisou de ' + tentativas + ' tentativas')
    }else if(chute > numeroSecreto){
        alert('Ops! esse não é o numero. O numero secreto é menor que ' + chute + '. tente novamente.')
    } else {
        alert('Ops! esse não é o numero. O numero secreto é maior que ' + chute +'. tente novamente.')
    }
}
alert('Suas tentativas acabaram, o numero secreto é: ' + numeroSecreto)