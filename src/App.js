import React from 'react';

import {
  AuthLinks,
  IfAuthenticated,
  IfUnauthenticated,
  Logout
} from './lib/auth'

function App() {
  return (
  <div className="App">
    <IfAuthenticated>
      Hi!<br/>
      <Logout/>
    </IfAuthenticated>
    <IfUnauthenticated>
      <AuthLinks/>
    </IfUnauthenticated>
  </div> );
}

export default App;
