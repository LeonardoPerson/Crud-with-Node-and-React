import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class main extends Component {

  //Inicialização de variáveis do estado
  constructor(props) {
    super(props)
    this.state = {
      //Temos um array de usuários pois todos serão exibidos
      usuario: []
    }
  }

  //O componentDidMount equivale a um useEffect
  componentDidMount() {
    fetch('http://localhost:3003/sistema/usuarios')
      .then(usuario =>
        usuario.json().then(usuario => this.setState({ usuario })))
  }

  render() {
    const { usuario } = this.state

    return usuario.map((usuario, index) => (
      <div className='usuario-list'>
        <div key={index}>
          <h5>{usuario.nome}</h5>
          <article>
            <strong>{usuario.salario}</strong>
            <p><Link to={`/usuarios/${usuario.id}`}>Detalhes</Link></p><br />
          </article>
        </div>
      </div>
    ))
  }
}