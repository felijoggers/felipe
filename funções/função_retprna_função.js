function criarCalculadoraDesconto (Desconto){
    return function(preço){
        return preço - (preço * Desconto);
    }
}

const Desconto10 = criarCalculadoraDesconto(0.10);
const Desconto50 = criarCalculadoraDesconto(0.50);

console.log(Desconto10(200));                                         
console.log(Desconto50(1230));                                         
