const aluno = [
    {
        nome: 'João',
        nota: 8,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 4,
        turma: '1B'
    },
    {
        nome: 'Maria',
        nota: 10,
        turma: '2B'
    },
    {
        nome: 'Rafael',
        nota: 3,
        turma: '4B'
    }
]

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i=0;i < arr.length; i++){

        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(aluno,5))