
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  AuthLinks,
  IfAuthenticated,
  IfUnauthenticated,
  Logout,
  authActions
} from '../auth'

import AppBar        from '@material-ui/core/AppBar';
import Menu          from '@material-ui/core/Menu';
import MenuItem      from '@material-ui/core/MenuItem';
import Toolbar       from '@material-ui/core/Toolbar';
import Button        from '@material-ui/core/Button';
import Avatar        from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

function AppMenu() {
  const authState = useSelector( state => state.auth );
  const actions   = authActions( useDispatch() ).auth;

  const [open,setMenu] = React.useState(false);
  return (
  <AppBar>
    <Toolbar>
      <Button
        color="inherit"
        onClick={ e => setMenu(true) }
        id="main-menu-button"
      >
        { authState.verified
        ? <>
            <Avatar
              alt={authState.user.name}
              src={authState.user.profileImage}
            />
            { authState.user.name }
          </>
        : <AccountCircle color="inherit"/> }
      </Button>
      <Menu open={open}>
        <IfAuthenticated>
          <MenuItem onClick={ e => { setMenu(false); actions.logout() } }>Logout</MenuItem>
        </IfAuthenticated>
        <IfUnauthenticated>
          <MenuItem onClick={ e => { setMenu(false); actions.login('github') } }>Github</MenuItem>
          <MenuItem onClick={ e => { setMenu(false); actions.login('google') } }>Google</MenuItem>
        </IfUnauthenticated>
      </Menu>
    </Toolbar>
  </AppBar> );
}

export default AppMenu;
