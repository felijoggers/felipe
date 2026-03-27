var idade = 18;
var acessoVip = true;
var Entrada = idade >=18 &&acessoVip == true ? "Entrada com autrização" : "Entrada sem autrização";

console.log(Entrada);

if(idade >=18 &&acessovip == true){
    console.log("Acesso permitido (if)");
}
else{
    console.log("Entrada não autorizada (else)");
}