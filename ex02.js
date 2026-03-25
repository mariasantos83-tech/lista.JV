let contador = 10;

function contagemRegressiva() {
    if (contador >= 0) {
        console.log(contador);
        contador--;
        // Aguarda 1000ms (1 segundo) antes de chamar a função novamente
        setTimeout(contagemRegressiva, 1000);
    } else {
        console.log("Lançamento realizado!");
    }
}

contagemRegressiva();