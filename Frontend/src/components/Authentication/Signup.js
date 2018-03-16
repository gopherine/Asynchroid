import React, { Component } from 'react';
import './Authentication.css';
import Logo from '../../assets/logo.svg';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdLock from 'react-icons/lib/md/lock';
import Button from 'material-ui/Button';
import { MuiThemeProvider,createMuiTheme } from 'material-ui/styles';
import Input from '../shared/UI/Input/Input';

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

const inpgen = (label,icon) =>{
    return {
        elementType:"inputadormant",
        elementConfig: {
            label:label,
            icon:icon,
        },
        value : ""
    }
}

class Signup extends Component {

    state= {
        signupform:{
            username:inpgen("Username",<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),

            email:inpgen("Email",<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),
            password:inpgen("Password",<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),
            confirmpassword:inpgen("Confirm Password",<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />)
        },
        loading: false
    }

    inputChangedHandler=(event, inputIdentifier)=>{
        const updatedSignupForm= {
            ...this.state.signupform
        };

        const updatedFormElement = {
            ...updatedSignupForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedSignupForm[inputIdentifier]= updatedFormElement;
        this.setState({signupform: updatedSignupForm})
    }

    render(){
    const formElementsArray = [];
    for (let key in this.state.signupform){
        formElementsArray.push({
            id:key,
            config: this.state.signupform[key]
        });
    }

    return (
        <div style={{borderTop: "5px solid #6EA176"}}>
        <MuiThemeProvider theme={theme}>
        <div className='loginContainer'>
            <img alt="logo" width="25%" src={Logo} className={`img-fluid loginLogo`}/>
            <p className="h1">ASYNCHROID</p>
            <p className="h5">LEARN. GAIN. SHARE</p>
            <div className="loginFormContainer">
           
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                       elementType={formElement.config.elementType}
                       elementConfig={formElement.config.elementConfig}
                       value={formElement.config.value}
                       changed={(event)=>this.inputChangedHandler(formElement.id)}/>
            ))}
            <Button className="loginBtn" variant="raised">
                Register
            </Button>
            </div>
        </div>
        </MuiThemeProvider>
        
        </div>
    )
}
}

export default Signup;