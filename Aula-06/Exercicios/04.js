const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
];

const alunosComMedia = alunos.map(aluno => {
  const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  return { nome: aluno.nome, media };
});

console.log(alunosComMedia);
