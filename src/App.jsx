import React, {useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Shivam Sharma
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [ullName,setUllname] = useState('');
  const [sername,setSername] = useState('');
  const [mail,setMail] = useState('');
  const [assword,setAssword] = useState('');

  const changeName = (event)=>{
      setUllname(event.target.value);
  }
  const changeUsername = (event)=>{
      setSername(event.target.value);
  }
  const changeEmail = (event)=>{
      setMail(event.target.value);
  }
  const changePassword = (event)=>{
      setAssword(event.target.value);
  }

  const SubmitEvent = (event)=>{
      event.preventDefault();
      const registered = {
          fullName:ullName,
          username:sername,
          email:mail,
          password:assword

      }
      axios.post('http://localhost:4000/route/signup',registered)
      .then(response=>console.log(response.data))
      setUllname('');
      setSername('');
      setMail('');
      setAssword('');

      
      
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={SubmitEvent} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Full Name"
              label="Full Name"
              name="Full Name"
              autoComplete="Full Name"
              autoFocus
              onChange={changeName}
              value={ullName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Username"
              label="Username"
              type="text"
              id="Username"
              autoComplete="Username"
              onChange={changeUsername}
              value={sername}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="E-mail"
              label="E-mail"
              type="email"
              id="Email"
              autoComplete="E-mail"
              onChange={changeEmail}
              value={mail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changePassword}
              value={assword}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={SubmitEvent}
            >
              Sign Up
            </Button>
            
            <Box mt={5}>
              <Copyright name="shivam" />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}






















// import React, { useState } from 'react';
// import axios from 'axios';

// const App = ()=>{
    // const [ullName,setUllname] = useState('');
    // const [sername,setSername] = useState('');
    // const [mail,setMail] = useState('');
    // const [assword,setAssword] = useState('');

    // const changeName = (event)=>{
    //     setUllname(event.target.value);
    // }
    // const changeUsername = (event)=>{
    //     setSername(event.target.value);
    // }
    // const changeEmail = (event)=>{
    //     setMail(event.target.value);
    // }
    // const changePassword = (event)=>{
    //     setAssword(event.target.value);
    // }

    // const SubmitEvent = (event)=>{
    //     event.preventDefault();
    //     const registered = {
    //         fullName:ullName,
    //         username:sername,
    //         email:mail,
    //         password:assword

    //     }
    //     axios.post('http://localhost:4000/route/signup',registered)
    //     .then(response=>console.log(response.data))
        
    // }
//     return(<>
//         <form onSubmit={SubmitEvent}>
//             <input type='text' 
//                 onChange={changeName}
//                 value={ullName}
//                 placeholder='Full Name'
//             />
//             <input type='text' 
//                 onChange={changeUsername}
//                 value={sername}
//                 placeholder='Username'

//             />
//             <input type='text' 
//                 onChange={changeEmail}
//                 value={mail}
//                 placeholder='email'

//             />
//             <input type='text' 
//                 onChange={changePassword}
//                 value={assword}
//                 placeholder='password'

//             />
//             <button onClick={SubmitEvent}>Submit</button>

//         </form>
//     </>)
// }

// export default App;
