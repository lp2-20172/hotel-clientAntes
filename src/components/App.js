import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'

import { connect } from 'react-redux'
import AppLayout from './app/AppLayout'


import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './Login'

class App extends Component {
    componentWillMount() {
    }

    render() {

        return (
            <div >
                <Router>
                    
                    <AppLayout >
                    <Route path="/login" component={Login} />
                    </AppLayout >
                </Router>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       // dark: state.theme.dark
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getList: (q) => { dispatch(getList(q)) }
    }
}

App.propTypes = {
    dark: PropTypes.bool.isRequired,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)