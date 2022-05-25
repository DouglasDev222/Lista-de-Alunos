import React from "react";
import "./form.css"
import "../apptabela.js"

function Form() {
    
    return <div className="container form">
        <center><h1>Lista de Alunos</h1></center>
        <form>
            {/*Nome*/}
            <div className="form-group">
                <label>Nome: </label>
                <input type="text" name="txtNome" className="form-control" placeholder="Nome do Aluno"/>
            </div>
            {/*Nascimento*/}
            <div className="form-group ">
                <label >Data de Nascimento: </label>
                <input type="text" name="txtNasc" className="form-control" placeholder="Ex. 05/05/2010"/>
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
            
        </form>
        <button className="btn btn-primary" onClick={{/*CadAluno(txtNome.value, txtNasc.value, txtTel.value, txtdef.value, txtobs.value)*/}}>Adicionar aluno</button>
    </div>
}
export default Form