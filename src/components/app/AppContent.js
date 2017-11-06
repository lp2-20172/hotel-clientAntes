import React from 'react'
import {
  Link
} from 'react-router-dom'

import { RouteWithSubRoutes } from '../utils/Routes'
import { Button } from 'reactstrap';

const Content = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
    ))}
  </div>
)
export { Content,}

