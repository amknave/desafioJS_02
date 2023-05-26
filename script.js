function nomeMedia() {
    let nome  = document.getElementById("nome-recebido").value;
    let n1    = Number(document.getElementById("notas-recebidas").value);
    let n2    = Number(document.getElementById("notas-recebidas").value);
    let n3    = Number(document.getElementById("notas-recebidas").value);
    let media = (n1 + n2 + n3)/3;

    // if else
    if (media >= 6) {
        let resultado = "APROVADO!";
        document.getElementById("nome").innerHTML = `O aluno ${nome} com média ${media} está ${resultado}`
    }
    else {
        let resultado = "REPROVADO!";
        document.getElementById("nome").innerHTML = `O aluno ${nome} com média ${media} está ${resultado}`
    }
}
