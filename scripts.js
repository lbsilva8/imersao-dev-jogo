var numeroSecreto = parseInt(Math.random() * 11);

while(chute != numeroSecreto){
    var chute = prompt('Digite um numero de 0 a 10')
    if(chute == numeroSecreto){
        alert('Isso ai, você descobriu o numero secreto!')
    }else if(chute > numeroSecreto){
        alert('Ops! esse não é o numero,o numero secreto é menor. tente novamente.')
    } else {
        alert('Ops! esse não é o numero,o numero secreto é maior. tente novamente.')
    }
}