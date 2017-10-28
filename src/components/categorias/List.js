import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/style.css';

//import { getList, del } from '../../actions/categoria-action'
import { connect } from 'react-redux'

import {
    Link
} from 'react-router-dom'


class List extends Component {
    /*componentWillMount() {
        this.props.getList("")
}*/

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/categorias/new');
    }

    render() {
        let { list, del } = this.props
        if (list) {

        } else {
            list = []

        }

        return (
            <div className=" contenedor contenedor_habitacion" key="Subheader" >
                    <div className="habitacion" >
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="info_rooms">
                            <div className="info">
                                <h3>
                                    Habitacion Simple
                                </h3>
                                <p>
                                    s/ 200
                                </p>
                            </div>
                            <div className="info info_color">
                                <Link exact to="/informations" activeClassName="selected"><h3>Mas informacion</h3></Link>
                                <p>
                                    <Link exact to="/forms" activeClassName="selected">Reservar</Link>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}
List.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        list: state.categoria.list
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}
*/
export default connect(mapStateToProps, {
    /* getList,
     del*/
})(List)