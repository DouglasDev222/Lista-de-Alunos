import React from "react";
import "./syle.css"
import "../apptabela.js"

function TabelaAlunos() {
    return <div className="container-fluid">
        <table className="table table-bordered tabelaalunos">
            <thead>
                <tr className="tablecolor">
                    <th scope="col">Cod.</th>
                    <th scope="col">Aluno(a)</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">Série</th>
                    <th scope="col">Turno</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Deficiência</th>
                    <th scope="col">Observação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* 1 Aluno */}
                    <th className="codigo" scope="row">1</th>
                    <td>Douglas Santos Pereira</td>
                    <td>05/12/2002</td>
                    <td>5º ano</td>
                    <td>Manhã</td>
                    <td>(83) 987606350</td>
                    <td>Completamente Transtornado</td>
                    <td>Completamente Transtornado</td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default TabelaAlunos