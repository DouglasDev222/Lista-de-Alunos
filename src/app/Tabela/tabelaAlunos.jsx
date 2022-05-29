import React from "react";
import "./syle.css" 
import Dropdown from 'react-bootstrap/Dropdown'

class TabelaAlunos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            alunos : [
                {id: "1", nome: "Douglas Santo Pereira Pereira", nasc: "05/12/2010", telefone: "(83) 98760-6350", defic: "Completamente totalmente Transtornado", obs:"Completamente Transtornado"},
                {id: "2", nome: "Douglas Santos", nasc: "05/12/2010", telefone: "(83) 98760-6350", defic: "Completamente totalmente Transtornado", obs:"Completamente Transtornado"},
                {id: "2", nome: "Douglas Santos", nasc: "05/12/2010", telefone: "(83) 98760-6350", defic: "Completamente totalmente Transtornado", obs:"Completamente Transtornado"}
            ]
        }
      
    }
    render(){ 
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
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alunos.map((aluno) =>
                            < tr >
                                <th className="codigo" scope="row" key={aluno.id}>{aluno.id}</th>
                                <td>{aluno.nome}</td>
                                <td>{aluno.nasc}</td>
                                <td>5º ano</td>
                                <td>Manhã</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.defic}</td>
                                <td>{aluno.obs}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            X
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Adicionar</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Excluir</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    }
}

export default TabelaAlunos