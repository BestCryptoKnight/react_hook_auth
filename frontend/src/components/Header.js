import React from 'react';

import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem',
  },
  name: {
    textAlign: 'left',
  },
}));

const Header = (userInfo) => {
  console.log(userInfo.userInfo);
  const classes = useStyles();
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    console.log('Ok');
    dispatch(logout());
  };

  return (
    <div>
      <AppBar position='static' style={{ marginTop: '20px' }}>
        <Toolbar>
          {userInfo.userInfo && (
            <Typography variant='h6' className={classes.name}>
              {`Hello, ${userInfo.userInfo.firstName} ${userInfo.userInfo.lastName}`}
            </Typography>
          )}
          <Typography variant='h6' className={classes.title}>
            Contact Book
          </Typography>
          {userInfo.userInfo && (
            <Button
              variant='contained'
              style={{ textAlign: 'right' }}
              onClick={logoutHandler}
            >
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
