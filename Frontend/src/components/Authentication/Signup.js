import React, { Component } from 'react';
import './Authentication.css';
import Logo from '../../assets/logo.svg';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdLock from 'react-icons/lib/md/lock';
import Button from 'material-ui/Button';
import { MuiThemeProvider,createMuiTheme } from 'material-ui/styles';
import Input from '../shared/UI/Input/Input';
import { CircularProgress } from 'material-ui/Progress';

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

const inpgen = (elementType,type,label,minLength,icon) =>{
    return {
        elementType:elementType,
        elementConfig: {
            fieldType:type,
            label:label,
            icon:icon,
        },
        value : "",
        validation : {
            required: true,
            minLength:minLength
        },
        valid: false,
        touched: false
    }
}

class Signup extends Component {

    state= {
        signupform:{
            username:inpgen("inputadormant","text","Username",2,<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),

            email:inpgen("inputadormant","email","Email",8,<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),
            password:inpgen("inputadormant","password","Password",8,<MdLock
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />),
            confirmpassword:inpgen("inputadormantpassword","password","Confirm Password",8,<MdAccountBox
            style={{
            fontSize:"200%",
            color:"#747474"}}
            />)
        },
        formIsValid:false,
        loading: false,
        errorMessage: null,
    }

    checkValidity(value,rules){
        let isValid = false;

        if(rules.required){
            isValid = value.trim() !== '';
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler=(event, inputIdentifier)=>{
        const updatedSignupForm= {
            ...this.state.signupform
        };

        const updatedFormElement = {
            ...updatedSignupForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignupForm[inputIdentifier]= updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedSignupForm) {
            formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({signupform: updatedSignupForm,
        formIsValid: formIsValid})
    }

    signupHandler = (event) => {
        event.preventDefault();
       
        const formData = {};
        for (let formElementIdentifier in this.state.signupform){
            formData[formElementIdentifier]= this.state.signupform[formElementIdentifier].value;
        }
        if(formData["password"]!==formData["confirmpassword"]){
           console.log("this is invalid")
           this.setState({formIsValid:false,
                        errorMessage:"Password does not match"})
        } else{
            this.setState({loading:true});
            delete formData["confirmpassword"]
        } 
        console.log(formData)
    }

    render(){
    const formElementsArray = [];
    for (let key in this.state.signupform){
        formElementsArray.push({
            id:key,
            config: this.state.signupform[key]
        });
    }

    let form=   <form onSubmit={this.signupHandler}>
    {formElementsArray.map(formElement => (
        <Input key={formElement.id}
               elementType={formElement.config.elementType}
               elementConfig={formElement.config.elementConfig}
               error={!formElement.config.valid}
               value={formElement.config.value}
               touched={formElement.config.touched}
               formIsValid={this.state.formIsValid}
               errorMessage={this.state.errorMessage}
               changed={(event)=>this.inputChangedHandler(event,formElement.id)}/>
    ))}
    <Button disabled={!this.state.formIsValid} type="submit" className="loginBtn" variant="raised">
        Register
    </Button>
    </form>

    if(this.state.loading){
        form=<div style={{display:"block",textAlign:"center"}}><CircularProgress size={200}/></div>
    }
    return (
        <div style={{borderTop: "5px solid #6EA176"}}>
        <MuiThemeProvider theme={theme}>
        <div className='loginContainer'>
            <img alt="logo" width="25%" src={Logo} className={`img-fluid loginLogo`}/>
            <p className="h1">ASYNCHROID</p>
            <p className="h5">LEARN. GAIN. SHARE</p>
            <div className="loginFormContainer">
                {form}
            </div>
        </div>
        </MuiThemeProvider>
        
        </div>
    )
}
}

export default Signup;