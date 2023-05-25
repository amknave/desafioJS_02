function enviarNome(){
    let nome = window.prompt("Digite seu nome: ")
    document.getElementById("nome").innerHTML = nome
}

function calcularMedia(){
    let n1 = Number(window.prompt("Digite a primeira nota: "))
    let n2 = Number(window.prompt("Digite a segunda nota: "))
    let n3 = Number(window.prompt("Digite a terceira nota: "))
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
