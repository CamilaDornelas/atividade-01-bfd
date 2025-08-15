function verificarIdade(idade) {
    if(idade >= 18) {
        console.log("Sua idade: " + idade + " | Você é maior de idade");
    } else {
        console.log("Sua idade: " + idade + " | Você é menor de idade");
    }
}

verificarIdade(28);
verificarIdade(15);