function nomeMedia() {
    let nome  = document.getElementById("nome-recebido").value;
    let n1    = Number(document.getElementById("notas-recebidas").value);
    let n2    = Number(document.getElementById("notas-recebidas2").value);
    let n3    = Number(document.getElementById("notas-recebidas3").value);
    let media = Number((n1 + n2 + n3)/3);

    // if else
    if (media >= 6) {
        let resultado = "APROVADO!";
        document.getElementById("nome").innerHTML = `O aluno ${nome} com média ${media.toFixed(2)} está ${resultado}`
    }
    else {
        let resultado = "REPROVADO!";
        document.getElementById("nome").innerHTML = `O aluno ${nome} com média ${media.toFixed(2)} está ${resultado}`
    }
}
