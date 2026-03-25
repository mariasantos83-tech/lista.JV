function somarNumero (){
    let soma = 0;
    let continuar = true;
    while (Continuar) {
        let numero = parseFloat (prompt("Digite um número para soamr"));
        if (!isNaN(numero));{
            //soma = soma = numero
            console.log(soma);
        } else {
            alert ("por favor, digite um número válido!");
        }
    continuar = confirm("Deseja adicionar mais um número?");

    }
alert ("A soma dos números é: " + soma);

}