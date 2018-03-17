import React from "react";
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';

const InputField = (props) =>{
    let inputElement = null;

    switch (props.elementType){
        case ('inputadormant'):
            inputElement= <Input
            error={props.error && props.touched}
            id={props.elementConfig.label}
            type={props.elementConfig.fieldType}
            onChange={props.changed}
            value={props.value}
            startAdornment={<InputAdornment position="start">
            {props.elementConfig.icon}
            </InputAdornment>}
        />;
        break;

        default:
        inputElement = "Unable to load input element 404"

    }
    return (
        <div>
              <FormControl fullWidth>
                <InputLabel htmlFor={props.elementConfig.label}
                style={{fontSize:"120%",fontWeight:"bold",fontFamily:"'Raleway', sans-serif"}}>{props.elementConfig.label}</InputLabel>
                {inputElement}
            </FormControl>
        </div>
    );
}

export default InputField;