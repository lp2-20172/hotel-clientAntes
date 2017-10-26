import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'

import {
  Link
} from 'react-router-dom'
import {
  withRouter, Route
} from 'react-router-dom'
import { RouteWithSubRoutes } from '../utils/Routes'
import { routes, routese } from '../routes'

import { connect } from 'react-redux'
import { toggleTheme } from '../../actions'
import { login, logout } from '../utils/OAuth2'
import config from '../../conn'
import { getLocalUserInfo } from '../../actions/auth-action'

//estilos
import '../css/style.css';
import '../images/font-awesome/css/font-awesome.min.css'

class RouteConfigExample extends React.Component {
  constructor(props) {
    super(props);
    let open = false

    let user = null
    if (localStorage.getItem('user') !== "undefined") {
      user = JSON.parse(localStorage.getItem('user'))
    }

    this.state = {
      open: open,
      username: user ? user.username : null
    }

  }
  componentWillMount() {
    //NProgress.start()
  }

  componentDidMount() {
    //NProgress.done()
  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
    //console.log("main.handleDrawerOpen.open:"+this.state.open)
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
    //console.log("main.handleDrawerClose.close:"+this.state.open)
  }

  handleToggleShade = (event) => {
    this.props.toggleTheme()
    //this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' });
  }

  lLogin = (event) => {
    this.props.login(config).then(result => {
      console.log('token: ' + JSON.stringify(result.token))
      console.log('expiresAt: ' + JSON.stringify(result.expiresAt))
      localStorage.setItem('userToken', result.token)

      this.props.getLocalUserInfo().then(data => {
        //console.log('user: ' + JSON.stringify(data))
        localStorage.setItem('user', JSON.stringify(data))
        if (data) {
          this.setState({
            username: data.username
          })
        }
      })
    }, function (e) {
      console.log(e); // TypeError: Throwing
    })
  }

  lLogout = (event) => {
    console.log('logout2')
    this.props.logout().then(result => {
      localStorage.removeItem('userToken')
      localStorage.removeItem('user')
      this.setState({
        username: null
      })
    })
  }


  render() {




    return (
      <div >
        <div

          onRequestClose={this.handleDrawerClose}
          //onClick={!isWidthUp('lg', width) && this.handleDrawerClose}
          open={this.state.open}
        >
          <header>
            <nav className="main">
              <div className="imglogo">
              </div>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/romms">Habitaciones</Link></li>
                <li><Link to="/photos">Fotos</Link></li>
                <li><Link to="/form">Registrate</Link></li>
              </ul>
              <span>
                <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
              </span>
            </nav>
          </header>
        </div>
        <main>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
          ))}
          {routese.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </main>
        <footer>
          <div className="footer">
            <div className="footer_seccion">
              <h3>HOTEL 5 ESTRELLAS</h3>
              <p>Con fabulosos cuartos te ofrecemos una buena atención</p>
            </div>
            <div className="footer_seccion">
              <h3>CONTACTENOS</h3>
              <p>Av.Arequipa</p>
              <p>Celular: 957463521</p>
              <p>E-mail: hotel5estrellas.gmail.com</p>

            </div>

          </div>
        </footer>
      </div>

    )
  }
}

RouteConfigExample.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  //isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    login,
    logout,
    getLocalUserInfo,
    toggleTheme
  })
)(RouteConfigExample)