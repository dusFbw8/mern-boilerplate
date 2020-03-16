
import React from 'react';
import { useSelector } from 'react-redux'

import {
  AuthLinks,
  IfAuthenticated,
  IfUnauthenticated,
  Logout
} from './lib/auth'

function App() {
  const authState = useSelector( state => state.auth );
  return (
  <div className="App">
    <IfAuthenticated>
      Hi {authState.user.name}!<br/>
      {authState.user.email}<br/>
      {authState.user.profileImage}<br/>
      {authState.user.group ? authState.user.group.join(', ') : ''}<br/>
      <Logout/>
    </IfAuthenticated>
    <IfUnauthenticated>
      <AuthLinks/>
    </IfUnauthenticated>
  </div> );
}

export default App;
