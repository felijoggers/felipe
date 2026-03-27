let preço = 120;
let desconto;

if(preço<100){
    desconto=false;
}
else{
    desconto=true;
}

let preçoFinal = desconto == true ? preço*0.6 : preço = preço;
console.log(preçoFinal);