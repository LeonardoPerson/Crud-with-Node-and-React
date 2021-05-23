import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Usuario extends Component {
  state = {
    //Será exibido somente um objeto de usuário
    usuario: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    //Rota do back-end----------------------------------------------------------
    fetch(`http://localhost:3003/sistema/usuarios/${id}`)
      .then(usuario =>
        usuario.json().then(usuario => this.setState({ usuario }))
      )
  }

  render() {
    const { usuario } = this.state
    if(usuario.ativo){
      usuario.ativo = "Usuário Ativo"
    }else{
      usuario.ativo = "Usuário Inativo"
    }

    return (
      <div className="usuario-info">
        <h1>{usuario.nome}</h1>
        <h1>{usuario.ativo}</h1>
        <h1>{usuario.salario}</h1>
        <h1>{usuario.dataNascimento}</h1><br />
        {/*Rotas do front-end------------------------------------------------*/}
        <Link to={`/usuarios`}>Voltar</Link><br />
        <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link><br />
        <Link to={`/deletarUsuario/${usuario.id}`}>Deletar</Link><br />
      </div>

    )
  }
}