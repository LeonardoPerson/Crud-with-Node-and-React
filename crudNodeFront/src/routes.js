import { BrowserRouter, Switch, Route } from 'react-router-dom'
//O arquivo index.js é automaticamente identificado nas importações abaixo
import MainUsuario from './pages/user/main'
import DetalhesUsuario from './pages/user/detalhes/index.js'
import CriarUsuario from './pages/user/create'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/usuarios' component={MainUsuario} />
      <Route path='/usuarios/:id' component={DetalhesUsuario} />
      <Route path='/criarUsuario/' component={CriarUsuario} />
    </Switch>
  </BrowserRouter>
)

export default Routes