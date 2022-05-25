
function CadAluno(nome, nascimento, telefone, deficiencia, observacao){
    var tabela = document.getElementById("tabelaalunos")
    var numLinhas = tabela.rows.length
    var linha = tabela.inserRow(numLinhas)

    var cellCodigo = linha.insertCell(0)
    var cellNome = linha.insertCell(1)
    var cellNasc = linha.insertCell(2)
    var cellTel = linha.insertCell(3)
    var cellDefi = linha.insertCell(4)
    var cellObs = linha.insertCell(5)

    cellCodigo.innerHTML = numLinhas;
    cellNome.innerHTML = nome
    cellNasc.innerHTML = nascimento
    cellTel.innerHTML = telefone
    cellDefi.innerHTML = deficiencia
    cellObs.innerHTML = observacao
}

export default CadAluno