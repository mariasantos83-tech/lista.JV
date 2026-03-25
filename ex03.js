let ganhoAnual = 0;
let gastoAnual = 0;

console.log("--- Balanço Financeiro Anual - Empresa Mawer ---");

        for (let mes = 1; mes <= 12; mes++) {
        let ganhoMes = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
        let gastoMes = parseFloat(prompt(`Digite o gasto do mês ${mes}:`));
        ganhoAnual += ganhoMes;
        gastoAnual
         += gastoMes;
}
    let saldoAnual = ganhoAnual - gastoAnual;
    console.log(`Ganho Bruto Anual: R$ ${ganhoAnual.toFixed(2)}`);
    console.log(`Gasto Anual: R$ ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo Financeiro Anual: R$ ${saldoAnual.toFixed(2)}`);

if (saldoAnual > 0) {
    console.log("Resultado: A empresa teve LUCRO.");
} else if (saldoAnual < 0) {
    console.log("Resultado: A empresa teve PREJUÍZO.");
} else {
    console.log("Resultado: A empresa ficou no EMPATE (Saldo Zero).");
}