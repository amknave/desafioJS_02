function enviarNome(){
    let nome = document.getElementById("nome-recebido").value
    document.getElementById("nome").innerHTML = nome
}

function calcularMedia(){
    let n1 = Number.getElementById("Digite a primeira nota: ").value
    let n2 = Number.getElementById("Digite a segunda nota: ").value
    let n3 = Number.getElementById("Digite a terceira nota: ").value
    let media = (n1 + n2 + n3)/3
    document.getElementById("resultado").innerHTML = media

    // if else
    if (media >= 6){
        let resultado = "Aprovado!"
        document.getElementById("geral").innerHTML = resultado
    }

    else{
        let resultado = "Reprovado!"
        document.getElementById("geral").innerHTML = resultado
    }
}
