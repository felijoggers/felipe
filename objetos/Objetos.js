const aluno = {
    nome: "Felipe",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; // aidicionar
aluno.idade = 16; // alterar

delete aluno.curso; // remover