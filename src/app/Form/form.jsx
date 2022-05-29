import React from "react";
import "./form.css"

function Form() {

    const [nome, setNome] = React.useState('')
    const [nasc, setNasc] = React.useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            alunos : [
                {nome: nome, nasc: nasc}
            ]
        }
        console.log(data)
    }
    

    return <div className="container form">
        <center><h1>Lista de Alunos</h1></center>
        <form onSubmit={onSubmit}>
            {/*Nome*/}
            <div className="form-group">
                <label>Nome: </label>
                <input type="text" className="form-control" placeholder="Nome do Aluno" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            {/*Nascimento*/}
            <div className="form-group ">
                <label >Data de Nascimento: </label>
                <input type="text" name="txtNasc" className="form-control" placeholder="Ex. 05/05/2010" value={nasc} onChange={(e) => setNasc(e.target.value)}/>
            </div>
            {/*Série*/}
            <div className="form-group col-9 displayinline">
                <label>Série:</label>
                <select className="form-control">
                    <option>Infantil IV</option>
                    <option>Infantil V</option>
                    <option>1º ano</option>
                    <option>2º ano</option>
                    <option>3º ano</option>
                    <option>4º ano</option>
                    <option>5º ano</option>
                </select>
            </div>
            {/*Turma*/}
            <div className="form-group col-1 displayinline">
                <label>Turma:</label>
                <select className="form-control">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            {/*Turno*/}
            <div className="form-group col-2 displayinline">
                <label>Turno:</label>
                <select className="form-control">
                    <option>Manhã</option>
                    <option>Tarde</option>
                </select>
            </div>
            {/*Telefone*/}
            <div className="form-group">
                <label >Telefone: </label>
                <input type="text" name="txtTel" className="form-control" placeholder="(83) 98456-4584"/>
            </div>
            {/*Deficiência*/}
            <div className="form-group">
                <label>Deficiência:</label>
                <textarea name="txtdef" className="form-control"></textarea>
            </div>
            {/*Observação*/}
            <div className="form-group">
                <label>Observação: </label>
                <textarea name="txtobs" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">Adicionar aluno</button>
        </form>
        
    </div>
}
export default Form