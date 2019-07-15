import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Home_page from './components/Home_page/Home_page';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(3, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    border: 'solid 1px #eaeef3'
  },
  button: {
    backgroundColor: '#f7f9fb'
  },
  icon: {
    color : '#e3e9ef',
    '&:hover': {
      color: 'black'
    }
  },
  
}));



const App = () => {
  const classes = useStyles();

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  return (
  <React.Fragment>
    <Home_page classes={classes} />

  </React.Fragment>
    
  )
}

export default App
