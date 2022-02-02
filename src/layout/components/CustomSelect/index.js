import React from 'react';
import cn from "classnames";

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import isMobile from "../../../functions/isMobile";

export default function(props) {
	const { 
        className, 
        style,
        label,
        placeholder,
        inputProps,
        underlined,
        options,
        ...others
    } = props;

    const SelectComponent = isMobile ? 'select' : Select;
    const OptionComponent = isMobile ? 'option' : MenuItem;

    return (
        <FormControl 
            className={cn(
                "custom-select-l1",
                {'underlined': underlined}
            )}
            fullWidth
        >
            {label && (
                <InputLabel className="label">{label}</InputLabel>
            )}
            <SelectComponent
            	className={cn(
            		'select',
            		className
            	)} 
            	style={{
                    ...style 
                }}
                inputProps={{
                    ...inputProps,
                    className: cn(
                        "select-input",
                        (inputProps && inputProps.className)
                    )
                }}                
                {...others}
            >
                {options.map((option, index) => (
                    <OptionComponent 
                        key={index}
                        value={option.value}
                    >
                        {option.text}
                    </OptionComponent>
                ))}
            </SelectComponent>
        </FormControl>
    );
}