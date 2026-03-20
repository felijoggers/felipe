/*
Atalho comentaripo com varias linhas:
alt + shift + A 

Desafio: Criar uam funbção que receba preço e desconto em % 
e mostre o valor final com desconto.
Criar outra função que receba o preço e quantidade
e monstre o valor total de compra

*/
function calcularDesconto(){
    const valorFinal = preço - (preço * (desconto / 100));
    console.log(`O valor final do produto foi de: ${valorFinal}`);
}

calcularDesconto(1000, 5);

function calcularTotal(preço, quantidade){
    const valorTotal = preço * quantidade;
    console.log(`O valor total é de: ${valorTotal}`);
}

calcularTotal(100 * 12);