import React from 'react';
import './Authentication.css';
import Logo from '../../assets/logo.svg';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdLock from 'react-icons/lib/md/lock';
import Button from 'material-ui/Button';
import { MuiThemeProvider,createMuiTheme } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#212121',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        light: '#212121',
        main: '#212121',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#212121',
      },
      // error: will us the default color
    },
  });


const Authentication =(props)=> {
    return (
        <div style={{borderTop: "5px solid #6EA176"}}>
        <MuiThemeProvider theme={theme}>
        <div className='loginContainer'>
            <img alt="logo" width="25%" src={Logo} className={`img-fluid loginLogo`}/>
            <p className="h1">ASYNCHROID</p>
            <p className="h5">LEARN. GAIN. SHARE</p>
            <div className="loginFormContainer">
            <FormControl fullWidth>
                <InputLabel htmlFor="adornment-amount"
                style={{fontSize:"120%",fontWeight:"bold",fontFamily:"'Raleway', sans-serif"}}>Username</InputLabel>
                <Input
                    id="username"
                    startAdornment={<InputAdornment position="start">
                    <MdAccountBox
                    style={{
                        fontSize:"200%",
                        color:"#747474"}}/>
                    </InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel htmlFor="adornment-amount"
                style={{fontSize:"120%",fontWeight:"bold",fontFamily:"'Raleway', sans-serif"}}>Password</InputLabel>
                <Input
                    id="password"
                    type="password"
                    startAdornment={<InputAdornment position="start">
                    <MdLock
                    style={{fontSize:"200%",
                    color:"#747474"}}/>
                    </InputAdornment>}
                />
            </FormControl>
            <span className="loginRememberMeCheck"> 
            <Checkbox
              checked={true}
              value="checkedG"
              style={{color:"#6EA176"}}
            /> Remember me</span>

            <Button className="loginBtn" variant="raised">
                LOG IN
            </Button>
            <a className="loginForgot" href="/">Forgot your password</a>
            </div>
        </div>
        </MuiThemeProvider>
        </div>
    )
}

export default Authentication;