import React from "react";
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText} from 'material-ui/Form';

const InputField = (props) =>{
    let inputElement = null;

    switch (props.elementType){
        case ('inputadormant'):
            inputElement= 
            <FormControl fullWidth>
            <InputLabel htmlFor={props.elementConfig.label}
            style={{fontSize:"120%",fontWeight:"bold",fontFamily:"'Raleway', sans-serif"}}>{props.elementConfig.label}</InputLabel>
            <Input
            error={props.error && props.touched}
            id={props.elementConfig.label}
            type={props.elementConfig.fieldType}
            onChange={props.changed}
            value={props.value}
            startAdornment={<InputAdornment position="start">
            {props.elementConfig.icon}
            </InputAdornment>}
            />
            </FormControl>;
        break;

        case ('inputadormantpassword'):
        inputElement=
        <FormControl fullWidth>
        <InputLabel htmlFor={props.elementConfig.label}
        style={{fontSize:"120%",fontWeight:"bold",fontFamily:"'Raleway', sans-serif"}}>{props.elementConfig.label}</InputLabel>
        <Input
        error={props.error && props.touched}
        id={props.elementConfig.label}
        type={props.elementConfig.fieldType}
        onChange={props.changed}
        value={props.value}
        startAdornment={<InputAdornment position="start">
        {props.elementConfig.icon}
        </InputAdornment>}
        />
         <FormHelperText error>{props.errorMessage}</FormHelperText>
        </FormControl>;
        break;

        default:
        inputElement = "Unable to load input element 404"

    }
    return (
        <div>
                {inputElement}
               
        </div>
    );
}

export default InputField;