
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  AuthLinks,
  IfAuthenticated,
  IfUnauthenticated,
  Logout,
  authActions
} from './lib/auth'

import AppBar from './lib/component/AppMenu';

function App() {
  const authState = useSelector( state => state.auth );
  const actions   = authActions( useDispatch() ).auth;

  const [open,setMenu] = React.useState(false);
  return ( <AppBar/> );
}

export default App;
