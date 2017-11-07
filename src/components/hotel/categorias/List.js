import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getList } from '../../../actions/categoria-action'
import { connect } from 'react-redux'

import {
    Link,
    NavLink
} from 'react-router-dom'


class List extends Component {
    componentWillMount() {
        this.props.getList("")
}
    render() {
        let { list} = this.props
        if (list) {

        } else {
            list = []

        }

        return (
            <div className=" contenedor contenedor_habitacion" key="Subheader" >
                   { list.map((d, index) =>
                    <div className="habitacion" key={d.imagen1}>
                        <div className="img-habitacion">
                            <img src={d.imagen1} alt={d.nombre} />
                        </div>
                        <div className="info_rooms">
                            <div className="info">
                                <h3>
                                    {d.nombre}
                                </h3>
                                <p>
                                    s/ {d.precio}
                                </p>
                            </div>
                            <div className="info info_color">
                                <NavLink exact to="/informations" activeClassName="selected"><h3>Mas informacion</h3></NavLink>
                                <p>
                                    <Link exact to="/forms" activeClassName="selected">Reservar</Link>
                                </p>
                            </div>
                        </div>


                    </div>
                )}
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


const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
    }
}

export default connect(mapStateToProps, {
     getList,

})(List)
