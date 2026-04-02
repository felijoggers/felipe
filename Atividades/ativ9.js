let hora = 12;
function cumprimento(Horario, Nome){

if (hora <12) {
    console.log(`Bom dia ${nome}`);
}
if (hora <18&& hora >=12) {
    console.log(`Boa tarde ${nome}`);
}
else if (hora >=18) {
    console.log(`Boa noite ${nome}`);
}
}
let nome = "Felipao";
cumprimento(nome, hora);