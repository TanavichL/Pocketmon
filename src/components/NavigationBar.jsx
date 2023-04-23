import * as React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { useMediaQuery } from '@material-ui/core';
// import logo from './images/logo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    width: '100px',
    height: '40px',
    marginRight: theme.spacing(2),
    // [theme.breakpoints.down('sm')]: {
    //   width: matches ? '80px' : '100px',
    //   height: matches ? '30px' : '40px',
    //   fontSize: matches ? '0.8rem' : '1rem',
    //   marginRight: matches ? theme.spacing(1) : theme.spacing(2),
    // },
  },
  signInButton: {
    backgroundColor: '#07636B',
    borderRadius: '10px',
    width: '100px',
    height: '40px',
    color: 'white'
    // [theme.breakpoints.down('sm')]: {
    //   width: matches ? '80px' : '100px',
    //   height: matches ? '30px' : '40px',
    //   fontSize: matches ? '0.8rem' : '1rem',
    // },
  },
  
}));

function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{color : 'blue', marginLeft: '30px'}}>
            PocketMon
          </Typography>
          
          
          <Button className={classes.menuButton} color="black">Home</Button>
          <Button className={classes.menuButton} color="black">Contact</Button>
          <Button className={classes.menuButton} color="black">About Us</Button>
          
          
          <div className={classes.title} />
          <Button className={classes.signUpButton}>Sign Up</Button>
          <Button className={classes.signInButton}>Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;