import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtecteRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === "3030") {
    return <Route {...props} />
    
  }
  return <Redirect to="/login" />
}

export default ProtecteRoute
