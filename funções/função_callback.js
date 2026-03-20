function processoPedido(valor, quantidade, operação) {
     return operação(valor, quantidade);
}

function calcularTotal(preço, qtd){
    return preço * qtd;
}

let resultado = processoPedido(40, 60, calcularTotal);

console.log(`O total do pedido é R$${resultado}.`);                                         